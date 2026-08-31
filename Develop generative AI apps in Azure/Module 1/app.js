(function () {
  "use strict";

  var FLASHCARDS = Array.isArray(window.AI103_FLASHCARDS) ? window.AI103_FLASHCARDS : [];
  var QUESTIONS = Array.isArray(window.AI103_QUESTIONS) ? window.AI103_QUESTIONS : [];
  var SECTIONS = Array.isArray(window.AI103_EXAM_SECTIONS) ? window.AI103_EXAM_SECTIONS : [];
  var STORAGE_KEY = "ai103-module1-study-lab-v1";
  var EXAM_SECONDS = 120 * 60;
  var timerHandle = null;
  var resultFilter = "all";

  function byId(id) {
    return document.getElementById(id);
  }

  function createElement(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (text !== undefined && text !== null) {
      node.textContent = text;
    }
    return node;
  }

  function unique(values) {
    return Array.from(new Set(values));
  }

  function shuffled(values) {
    var copy = values.slice();
    for (var index = copy.length - 1; index > 0; index -= 1) {
      var swapIndex = Math.floor(Math.random() * (index + 1));
      var temporary = copy[index];
      copy[index] = copy[swapIndex];
      copy[swapIndex] = temporary;
    }
    return copy;
  }

  function positions(length) {
    var list = [];
    for (var index = 0; index < length; index += 1) {
      list.push(index);
    }
    return list;
  }

  // The question bank authors every correct answer first, so an attempt stores its own
  // option and row permutations. They are saved with the attempt to stay stable across
  // re-renders and page reloads, and are rebuilt as identity orders for attempts that
  // were saved before shuffling existed.
  function buildPresentation(randomize) {
    var presentation = {};
    QUESTIONS.forEach(function (question) {
      var optionCount = Array.isArray(question.options) ? question.options.length : 0;
      var rowCount = Array.isArray(question.items) ? question.items.length : 0;
      presentation[question.id] = {
        options: randomize ? shuffled(positions(optionCount)) : positions(optionCount),
        rows: randomize ? shuffled(positions(rowCount)) : positions(rowCount)
      };
    });
    return presentation;
  }

  function presentationFor(question) {
    var optionCount = Array.isArray(question.options) ? question.options.length : 0;
    var rowCount = Array.isArray(question.items) ? question.items.length : 0;
    var saved = state.exam && state.exam.presentation ? state.exam.presentation[question.id] : null;
    var optionOrder = saved && Array.isArray(saved.options) && saved.options.length === optionCount
      ? saved.options
      : positions(optionCount);
    var rowOrder = saved && Array.isArray(saved.rows) && saved.rows.length === rowCount
      ? saved.rows
      : positions(rowCount);
    return { optionOrder: optionOrder, rowOrder: rowOrder };
  }

  // Returns the question as the candidate sees it. Answers are stored by option text and
  // by displayed row index, so `correct` is permuted alongside the rows it scores.
  function viewFor(question) {
    var layout = presentationFor(question);
    var view = {
      options: layout.optionOrder.map(function (index) { return question.options[index]; }),
      items: layout.rowOrder.map(function (index) { return question.items[index]; }),
      correct: question.correct
    };
    if (question.type === "yesno" || question.type === "matching") {
      view.correct = layout.rowOrder.map(function (index) { return question.correct[index]; });
    }
    return view;
  }

  function defaultState() {
    return {
      activeTab: "flashcards",
      flash: {
        unit: "all",
        category: "all",
        search: "",
        currentId: FLASHCARDS.length ? FLASHCARDS[0].id : null,
        flipped: false,
        mastered: [],
        review: [],
        order: FLASHCARDS.map(function (card) { return card.id; })
      },
      exam: null
    };
  }

  function loadState() {
    var fresh = defaultState();
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!saved || typeof saved !== "object") {
        return fresh;
      }

      fresh.activeTab = saved.activeTab === "exam" ? "exam" : "flashcards";
      if (saved.flash && typeof saved.flash === "object") {
        fresh.flash = Object.assign(fresh.flash, saved.flash);
      }

      fresh.flash.mastered = Array.isArray(fresh.flash.mastered) ? fresh.flash.mastered : [];
      fresh.flash.review = Array.isArray(fresh.flash.review) ? fresh.flash.review : [];
      fresh.flash.order = Array.isArray(fresh.flash.order) ? fresh.flash.order : [];

      var knownIds = new Set(FLASHCARDS.map(function (card) { return card.id; }));
      fresh.flash.mastered = fresh.flash.mastered.filter(function (id) { return knownIds.has(id); });
      fresh.flash.review = fresh.flash.review.filter(function (id) { return knownIds.has(id); });
      fresh.flash.order = fresh.flash.order.filter(function (id) { return knownIds.has(id); });
      FLASHCARDS.forEach(function (card) {
        if (fresh.flash.order.indexOf(card.id) === -1) {
          fresh.flash.order.push(card.id);
        }
      });

      if (saved.exam && typeof saved.exam === "object") {
        fresh.exam = saved.exam;
        fresh.exam.answers = fresh.exam.answers || {};
        fresh.exam.notes = fresh.exam.notes || {};
        fresh.exam.flagged = Array.isArray(fresh.exam.flagged) ? fresh.exam.flagged : [];
        fresh.exam.completedSections = Array.isArray(fresh.exam.completedSections) ? fresh.exam.completedSections : [];
        fresh.exam.presentation = fresh.exam.presentation && typeof fresh.exam.presentation === "object"
          ? fresh.exam.presentation
          : buildPresentation(false);
      }
    } catch (error) {
      console.warn("Saved study progress could not be loaded.", error);
    }
    return fresh;
  }

  var state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn("Study progress could not be saved.", error);
    }
  }

  function activateTab(tabName) {
    var name = tabName === "exam" ? "exam" : "flashcards";
    state.activeTab = name;

    document.querySelectorAll("[data-tab]").forEach(function (button) {
      var active = button.getAttribute("data-tab") === name;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });

    document.querySelectorAll("[data-panel]").forEach(function (panel) {
      panel.classList.toggle("hidden", panel.getAttribute("data-panel") !== name);
    });

    if (name === "flashcards") {
      renderFlashcard();
    } else {
      prepareExamView();
    }
    saveState();
  }

  function populateFlashcardFilters() {
    var unitSelect = byId("card-unit-filter");
    var categorySelect = byId("card-category-filter");

    unique(FLASHCARDS.map(function (card) { return card.unit; })).forEach(function (unit) {
      var option = createElement("option", "", unit);
      option.value = unit;
      unitSelect.appendChild(option);
    });

    unique(FLASHCARDS.map(function (card) { return card.category; }))
      .sort(function (a, b) { return a.localeCompare(b); })
      .forEach(function (category) {
        var option = createElement("option", "", category);
        option.value = category;
        categorySelect.appendChild(option);
      });

    unitSelect.value = state.flash.unit;
    categorySelect.value = state.flash.category;
    byId("card-search").value = state.flash.search;
  }

  function orderedFlashcards() {
    var cardMap = new Map(FLASHCARDS.map(function (card) { return [card.id, card]; }));
    return state.flash.order
      .map(function (id) { return cardMap.get(id); })
      .filter(Boolean);
  }

  function filteredFlashcards() {
    var search = String(state.flash.search || "").trim().toLowerCase();
    return orderedFlashcards().filter(function (card) {
      var unitMatch = state.flash.unit === "all" || card.unit === state.flash.unit;
      var categoryMatch = state.flash.category === "all" || card.category === state.flash.category;
      var searchMatch = !search || (card.front + " " + card.back + " " + card.category + " " + card.unit).toLowerCase().indexOf(search) !== -1;
      return unitMatch && categoryMatch && searchMatch;
    });
  }

  function currentFlashcardData() {
    var cards = filteredFlashcards();
    if (!cards.length) {
      return { cards: cards, card: null, index: -1 };
    }

    var index = cards.findIndex(function (card) { return card.id === state.flash.currentId; });
    if (index < 0) {
      index = 0;
      state.flash.currentId = cards[0].id;
      state.flash.flipped = false;
    }
    return { cards: cards, card: cards[index], index: index };
  }

  function renderFlashcard() {
    var data = currentFlashcardData();
    var cardButton = byId("flashcard");
    var emptyState = byId("card-empty-state");
    var visibleIds = new Set(data.cards.map(function (card) { return card.id; }));
    var masteredCount = state.flash.mastered.filter(function (id) { return visibleIds.has(id); }).length;
    var reviewCount = state.flash.review.filter(function (id) { return visibleIds.has(id); }).length;

    byId("card-total").textContent = String(data.cards.length);
    byId("card-mastered").textContent = String(masteredCount);
    byId("card-review").textContent = String(reviewCount);

    if (!data.card) {
      cardButton.classList.add("hidden");
      emptyState.classList.remove("hidden");
      byId("card-position").textContent = "Card 0 of 0";
      byId("card-status-label").textContent = "No results";
      byId("card-progress-fill").style.width = "0%";
      setFlashButtonsDisabled(true);
      return;
    }

    emptyState.classList.add("hidden");
    cardButton.classList.remove("hidden");
    setFlashButtonsDisabled(false);

    byId("card-front-unit").textContent = data.card.unit;
    byId("card-back-unit").textContent = data.card.unit;
    byId("card-front-category").textContent = data.card.category;
    byId("card-back-category").textContent = data.card.category;
    byId("card-front-text").textContent = data.card.front;
    byId("card-back-text").textContent = data.card.back;

    cardButton.classList.toggle("is-flipped", Boolean(state.flash.flipped));
    cardButton.setAttribute("aria-pressed", String(Boolean(state.flash.flipped)));
    cardButton.setAttribute(
      "aria-label",
      state.flash.flipped ? "Show flashcard question" : "Reveal flashcard answer"
    );
    byId("flip-card").textContent = state.flash.flipped ? "Show question" : "Reveal answer";
    byId("card-position").textContent = "Card " + (data.index + 1) + " of " + data.cards.length;
    byId("card-progress-fill").style.width = (((data.index + 1) / data.cards.length) * 100) + "%";

    var status = "Not rated";
    if (state.flash.mastered.indexOf(data.card.id) !== -1) {
      status = "Mastered";
    } else if (state.flash.review.indexOf(data.card.id) !== -1) {
      status = "Needs review";
    }
    byId("card-status-label").textContent = status;
    saveState();
  }

  function setFlashButtonsDisabled(disabled) {
    ["previous-card", "next-card", "flip-card", "review-card", "master-card"].forEach(function (id) {
      byId(id).disabled = disabled;
    });
  }

  function flipFlashcard() {
    if (!currentFlashcardData().card) {
      return;
    }
    state.flash.flipped = !state.flash.flipped;
    renderFlashcard();
  }

  function moveFlashcard(offset) {
    var data = currentFlashcardData();
    if (!data.cards.length) {
      return;
    }
    var nextIndex = (data.index + offset + data.cards.length) % data.cards.length;
    state.flash.currentId = data.cards[nextIndex].id;
    state.flash.flipped = false;
    renderFlashcard();
  }

  function rateFlashcard(rating) {
    var data = currentFlashcardData();
    if (!data.card) {
      return;
    }
    var id = data.card.id;
    state.flash.mastered = state.flash.mastered.filter(function (savedId) { return savedId !== id; });
    state.flash.review = state.flash.review.filter(function (savedId) { return savedId !== id; });

    if (rating === "mastered") {
      state.flash.mastered.push(id);
      byId("card-announcement").textContent = "Marked as mastered.";
    } else {
      state.flash.review.push(id);
      byId("card-announcement").textContent = "Marked for review.";
    }
    moveFlashcard(1);
  }

  function shuffleFlashcards() {
    var visible = filteredFlashcards().map(function (card) { return card.id; });
    for (var index = visible.length - 1; index > 0; index -= 1) {
      var swapIndex = Math.floor(Math.random() * (index + 1));
      var temporary = visible[index];
      visible[index] = visible[swapIndex];
      visible[swapIndex] = temporary;
    }
    var visibleSet = new Set(visible);
    var remaining = state.flash.order.filter(function (id) { return !visibleSet.has(id); });
    state.flash.order = visible.concat(remaining);
    state.flash.currentId = visible.length ? visible[0] : state.flash.currentId;
    state.flash.flipped = false;
    byId("card-announcement").textContent = "The visible deck was shuffled.";
    renderFlashcard();
  }

  function updateFlashFilters() {
    state.flash.unit = byId("card-unit-filter").value;
    state.flash.category = byId("card-category-filter").value;
    state.flash.search = byId("card-search").value;
    state.flash.currentId = null;
    state.flash.flipped = false;
    renderFlashcard();
  }

  function resetFlashcardProgress() {
    if (!window.confirm("Reset all mastered and review ratings and restore the original card order?")) {
      return;
    }
    state.flash.mastered = [];
    state.flash.review = [];
    state.flash.order = FLASHCARDS.map(function (card) { return card.id; });
    state.flash.currentId = filteredFlashcards().length ? filteredFlashcards()[0].id : null;
    state.flash.flipped = false;
    renderFlashcard();
  }

  function newExamAttempt() {
    var now = Date.now();
    var firstSection = SECTIONS[0];
    var firstQuestion = QUESTIONS.find(function (question) {
      return firstSection && question.sectionId === firstSection.id;
    });
    return {
      startedAt: now,
      endAt: now + (EXAM_SECONDS * 1000),
      submittedAt: null,
      submitted: false,
      timedOut: false,
      sectionIndex: 0,
      currentQuestionId: firstQuestion ? firstQuestion.id : null,
      reviewMode: false,
      answers: {},
      notes: {},
      flagged: [],
      completedSections: [],
      caseCollapsed: false,
      presentation: buildPresentation(true)
    };
  }

  function prepareExamView() {
    byId("intro-question-count").textContent = String(QUESTIONS.length);
    byId("intro-section-count").textContent = String(SECTIONS.length);

    if (state.exam && state.exam.submitted) {
      renderResults();
      return;
    }

    byId("exam-results").classList.add("hidden");
    byId("exam-shell").classList.add("hidden");
    byId("exam-intro").classList.remove("hidden");

    var hasSavedAttempt = Boolean(state.exam && !state.exam.submitted);
    byId("continue-exam").classList.toggle("hidden", !hasSavedAttempt);
    byId("discard-exam").classList.toggle("hidden", !hasSavedAttempt);
    byId("start-exam").classList.toggle("hidden", hasSavedAttempt);
  }

  function beginExam() {
    if (!QUESTIONS.length || !SECTIONS.length) {
      window.alert("The question bank could not be loaded.");
      return;
    }
    state.exam = newExamAttempt();
    saveState();
    openExamAttempt();
  }

  function openExamAttempt() {
    if (!state.exam || state.exam.submitted) {
      prepareExamView();
      return;
    }
    byId("exam-intro").classList.add("hidden");
    byId("exam-results").classList.add("hidden");
    byId("exam-shell").classList.remove("hidden");
    renderExam();
    startExamTimer();
  }

  function discardExamAttempt() {
    if (!window.confirm("Discard the saved assessment attempt and all of its answers?")) {
      return;
    }
    stopExamTimer();
    state.exam = null;
    saveState();
    byId("exam-agreement").checked = false;
    byId("start-exam").disabled = true;
    prepareExamView();
  }

  function currentSection() {
    if (!state.exam) {
      return null;
    }
    return SECTIONS[state.exam.sectionIndex] || null;
  }

  function questionsForSection(section) {
    if (!section) {
      return [];
    }
    return QUESTIONS.filter(function (question) { return question.sectionId === section.id; });
  }

  function currentQuestion() {
    if (!state.exam) {
      return null;
    }
    return QUESTIONS.find(function (question) { return question.id === state.exam.currentQuestionId; }) || null;
  }

  function answerFor(question) {
    return state.exam && question ? state.exam.answers[question.id] : undefined;
  }

  function isAnswered(question) {
    var answer = answerFor(question);
    if (answer === undefined || answer === null) {
      return false;
    }
    if (question.type === "single") {
      return typeof answer === "string" && answer.length > 0;
    }
    if (question.type === "multiple") {
      return Array.isArray(answer) && answer.length === question.selectCount;
    }
    if (question.type === "yesno" || question.type === "matching") {
      return Array.isArray(answer) && answer.length === question.items.length && answer.every(Boolean);
    }
    if (question.type === "order") {
      return Array.isArray(answer) && answer.length === question.items.length;
    }
    return false;
  }

  function saveAnswer(question, answer) {
    state.exam.answers[question.id] = answer;
    saveState();
    renderExamStatus();
  }

  function renderExam() {
    if (!state.exam || state.exam.submitted) {
      return;
    }
    var section = currentSection();
    if (!section) {
      submitExam(false);
      return;
    }

    byId("exam-section-title").textContent = section.title;
    renderExamStatus();
    renderQuestionGrid();

    if (state.exam.reviewMode) {
      renderSectionReview();
    } else {
      renderQuestion();
    }
  }

  function renderExamStatus() {
    if (!state.exam) {
      return;
    }
    var answered = QUESTIONS.filter(isAnswered).length;
    byId("exam-answered-count").textContent = String(answered);
    byId("exam-flagged-count").textContent = String(state.exam.flagged.length);

    var question = currentQuestion();
    var globalIndex = question ? QUESTIONS.findIndex(function (item) { return item.id === question.id; }) : -1;
    byId("exam-question-position").textContent = globalIndex >= 0
      ? (globalIndex + 1) + " of " + QUESTIONS.length
      : QUESTIONS.length + " questions";
  }

  function renderQuestionGrid() {
    var grid = byId("question-grid");
    grid.replaceChildren();
    var sectionQuestions = questionsForSection(currentSection());

    sectionQuestions.forEach(function (question) {
      var globalIndex = QUESTIONS.findIndex(function (item) { return item.id === question.id; });
      var button = createElement("button", "question-nav-button", String(globalIndex + 1));
      button.type = "button";
      button.setAttribute("aria-label", "Question " + (globalIndex + 1));
      button.classList.toggle("is-current", !state.exam.reviewMode && question.id === state.exam.currentQuestionId);
      button.classList.toggle("is-answered", isAnswered(question));
      button.classList.toggle("is-marked", state.exam.flagged.indexOf(question.id) !== -1);
      button.addEventListener("click", function () {
        state.exam.currentQuestionId = question.id;
        state.exam.reviewMode = false;
        saveState();
        renderExam();
      });
      grid.appendChild(button);
    });
  }

  function typeLabel(type) {
    var labels = {
      single: "Single choice",
      multiple: "Multiple choice",
      yesno: "Yes / No",
      matching: "Matching",
      order: "Build list"
    };
    return labels[type] || "Question";
  }

  function instructionFor(question) {
    if (question.type === "single") {
      return "Select one answer.";
    }
    if (question.type === "multiple") {
      return "Select " + question.selectCount + " answers.";
    }
    if (question.type === "yesno") {
      return "Select Yes or No for each statement. Each row is scored separately.";
    }
    if (question.type === "matching") {
      return "Select the best match for each item. Each row is scored separately.";
    }
    if (question.type === "order") {
      return "Arrange the items in the correct order. Each correctly placed item earns a point.";
    }
    return "";
  }

  function renderQuestion() {
    var question = currentQuestion();
    var section = currentSection();
    if (!question) {
      return;
    }

    byId("question-card").classList.remove("hidden");
    byId("question-actions").classList.remove("hidden");
    byId("section-review").classList.add("hidden");

    byId("question-type").textContent = typeLabel(question.type);
    byId("question-domain").textContent = question.unit + " · " + question.domain;
    byId("question-instruction").textContent = instructionFor(question);
    byId("question-prompt").textContent = question.prompt;

    var marked = state.exam.flagged.indexOf(question.id) !== -1;
    byId("mark-question").setAttribute("aria-pressed", String(marked));
    byId("mark-question").innerHTML = "<span aria-hidden=\"true\">⚑</span> " + (marked ? "Marked for review" : "Mark for review");

    byId("question-note").value = state.exam.notes[question.id] || "";
    renderAnswerArea(question);
    renderCaseStudy(section);
    updateQuestionActions(question, section);
    renderExamStatus();
  }

  function renderCaseStudy(section) {
    var panel = byId("case-study-panel");
    var content = byId("case-study-content");
    if (!section || section.kind !== "case-study") {
      panel.classList.add("hidden");
      return;
    }

    panel.classList.remove("hidden");
    byId("case-study-title").textContent = section.title;
    content.replaceChildren();
    var heading = createElement("h4", "", "Scenario");
    var paragraph = createElement("p", "", section.context || section.description || "");
    content.appendChild(heading);
    content.appendChild(paragraph);

    content.classList.toggle("hidden", Boolean(state.exam.caseCollapsed));
    byId("toggle-case-study").setAttribute("aria-expanded", String(!state.exam.caseCollapsed));
    byId("toggle-case-study").textContent = state.exam.caseCollapsed ? "Show scenario" : "Hide scenario";
  }

  function renderAnswerArea(question) {
    var area = byId("answer-area");
    area.replaceChildren();
    if (question.type === "single" || question.type === "multiple") {
      renderChoiceQuestion(area, question);
    } else if (question.type === "yesno") {
      renderYesNoQuestion(area, question);
    } else if (question.type === "matching") {
      renderMatchingQuestion(area, question);
    } else if (question.type === "order") {
      renderOrderQuestion(area, question);
    }
  }

  function renderChoiceQuestion(area, question) {
    var current = answerFor(question);
    var selected = question.type === "multiple"
      ? (Array.isArray(current) ? current : [])
      : (typeof current === "string" ? [current] : []);

    viewFor(question).options.forEach(function (option, index) {
      var label = createElement("label", "answer-option");
      var input = document.createElement("input");
      input.type = question.type === "single" ? "radio" : "checkbox";
      input.name = "answer-" + question.id;
      input.value = option;
      input.checked = selected.indexOf(option) !== -1;
      if (question.type === "multiple" && !input.checked && selected.length >= question.selectCount) {
        input.disabled = true;
      }

      var copy = createElement("span", "option-copy");
      copy.appendChild(createElement("span", "option-letter", String.fromCharCode(65 + index) + "."));
      copy.appendChild(createElement("span", "", option));
      label.appendChild(input);
      label.appendChild(copy);
      label.classList.toggle("is-selected", input.checked);

      input.addEventListener("change", function () {
        if (question.type === "single") {
          saveAnswer(question, option);
        } else {
          var values = Array.isArray(answerFor(question)) ? answerFor(question).slice() : [];
          if (input.checked && values.indexOf(option) === -1 && values.length < question.selectCount) {
            values.push(option);
          } else if (!input.checked) {
            values = values.filter(function (value) { return value !== option; });
          }
          saveAnswer(question, values);
        }
        renderAnswerArea(question);
        renderQuestionGrid();
      });
      area.appendChild(label);
    });
  }

  function renderYesNoQuestion(area, question) {
    var answers = Array.isArray(answerFor(question)) ? answerFor(question).slice() : [];
    var table = createElement("table", "matrix-table");
    var thead = document.createElement("thead");
    var headerRow = document.createElement("tr");
    headerRow.appendChild(createElement("th", "", "Statement"));
    headerRow.appendChild(createElement("th", "", "Yes"));
    headerRow.appendChild(createElement("th", "", "No"));
    thead.appendChild(headerRow);
    table.appendChild(thead);

    var tbody = document.createElement("tbody");
    viewFor(question).items.forEach(function (item, index) {
      var row = document.createElement("tr");
      row.appendChild(createElement("td", "", item));
      ["Yes", "No"].forEach(function (value) {
        var cell = document.createElement("td");
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "answer-" + question.id + "-" + index;
        input.value = value;
        input.checked = answers[index] === value;
        input.setAttribute("aria-label", value + ": " + item);
        input.addEventListener("change", function () {
          var updated = Array.isArray(answerFor(question)) ? answerFor(question).slice() : [];
          updated[index] = value;
          saveAnswer(question, updated);
          renderQuestionGrid();
        });
        cell.appendChild(input);
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    area.appendChild(table);
  }

  function renderMatchingQuestion(area, question) {
    var answers = Array.isArray(answerFor(question)) ? answerFor(question).slice() : [];
    var view = viewFor(question);
    view.items.forEach(function (item, index) {
      var row = createElement("div", "matching-row");
      row.appendChild(createElement("p", "", item));
      var select = document.createElement("select");
      select.setAttribute("aria-label", "Match for " + item);
      var placeholder = createElement("option", "", "Select an answer");
      placeholder.value = "";
      select.appendChild(placeholder);
      view.options.forEach(function (option) {
        var optionElement = createElement("option", "", option);
        optionElement.value = option;
        select.appendChild(optionElement);
      });
      select.value = answers[index] || "";
      select.addEventListener("change", function () {
        var updated = Array.isArray(answerFor(question)) ? answerFor(question).slice() : [];
        updated[index] = select.value;
        saveAnswer(question, updated);
        renderQuestionGrid();
      });
      row.appendChild(select);
      area.appendChild(row);
    });
  }

  function renderOrderQuestion(area, question) {
    var saved = answerFor(question);
    var orderedItems = Array.isArray(saved) && saved.length === question.items.length
      ? saved.slice()
      : viewFor(question).items;
    var list = createElement("ol", "order-list");

    orderedItems.forEach(function (item, index) {
      var row = createElement("li", "order-item");
      row.appendChild(createElement("span", "order-number", String(index + 1)));
      row.appendChild(createElement("span", "", item));
      var controls = createElement("span", "order-controls");
      var up = createElement("button", "order-control", "↑");
      var down = createElement("button", "order-control", "↓");
      up.type = "button";
      down.type = "button";
      up.disabled = index === 0;
      down.disabled = index === orderedItems.length - 1;
      up.setAttribute("aria-label", "Move item up");
      down.setAttribute("aria-label", "Move item down");
      up.addEventListener("click", function () { moveOrderItem(question, orderedItems, index, index - 1); });
      down.addEventListener("click", function () { moveOrderItem(question, orderedItems, index, index + 1); });
      controls.appendChild(up);
      controls.appendChild(down);
      row.appendChild(controls);
      list.appendChild(row);
    });
    area.appendChild(list);

    if (!Array.isArray(saved)) {
      var accept = createElement("button", "button secondary", "Use the displayed order");
      accept.type = "button";
      accept.addEventListener("click", function () {
        saveAnswer(question, orderedItems);
        renderAnswerArea(question);
        renderQuestionGrid();
      });
      area.appendChild(accept);
    }
  }

  function moveOrderItem(question, items, fromIndex, toIndex) {
    var updated = items.slice();
    var moved = updated.splice(fromIndex, 1)[0];
    updated.splice(toIndex, 0, moved);
    saveAnswer(question, updated);
    renderAnswerArea(question);
    renderQuestionGrid();
  }

  function updateQuestionActions(question, section) {
    var sectionQuestions = questionsForSection(section);
    var index = sectionQuestions.findIndex(function (item) { return item.id === question.id; });
    byId("previous-question").disabled = index <= 0;
    byId("next-question").textContent = index === sectionQuestions.length - 1 ? "Review section" : "Next";
  }

  function moveQuestion(offset) {
    var sectionQuestions = questionsForSection(currentSection());
    var index = sectionQuestions.findIndex(function (question) {
      return question.id === state.exam.currentQuestionId;
    });
    var nextIndex = index + offset;

    if (nextIndex < 0) {
      return;
    }
    if (nextIndex >= sectionQuestions.length) {
      state.exam.reviewMode = true;
    } else {
      state.exam.currentQuestionId = sectionQuestions[nextIndex].id;
      state.exam.reviewMode = false;
    }
    saveState();
    renderExam();
  }

  function toggleQuestionMark() {
    var question = currentQuestion();
    if (!question) {
      return;
    }
    var flagged = state.exam.flagged.indexOf(question.id);
    if (flagged === -1) {
      state.exam.flagged.push(question.id);
    } else {
      state.exam.flagged.splice(flagged, 1);
    }
    saveState();
    renderQuestion();
    renderQuestionGrid();
  }

  function clearCurrentAnswer() {
    var question = currentQuestion();
    if (!question) {
      return;
    }
    delete state.exam.answers[question.id];
    saveState();
    renderQuestion();
    renderQuestionGrid();
  }

  function renderSectionReview() {
    var section = currentSection();
    var sectionQuestions = questionsForSection(section);
    var answered = sectionQuestions.filter(isAnswered).length;
    var marked = sectionQuestions.filter(function (question) {
      return state.exam.flagged.indexOf(question.id) !== -1;
    }).length;

    byId("question-card").classList.add("hidden");
    byId("question-actions").classList.add("hidden");
    byId("case-study-panel").classList.add("hidden");
    byId("section-review").classList.remove("hidden");
    byId("review-section-title").textContent = "Review " + section.title;
    byId("review-section-summary").textContent =
      answered + " of " + sectionQuestions.length + " questions are complete. " +
      marked + " question" + (marked === 1 ? " is" : "s are") + " marked for review.";

    var list = byId("section-review-list");
    list.replaceChildren();
    sectionQuestions.forEach(function (question) {
      var globalIndex = QUESTIONS.findIndex(function (item) { return item.id === question.id; });
      var button = document.createElement("button");
      button.type = "button";
      button.appendChild(createElement("strong", "", "Question " + (globalIndex + 1)));
      var status = isAnswered(question) ? "Answered" : "Unanswered";
      if (state.exam.flagged.indexOf(question.id) !== -1) {
        status += " · Marked";
      }
      button.appendChild(createElement("span", "", status));
      button.addEventListener("click", function () {
        state.exam.currentQuestionId = question.id;
        state.exam.reviewMode = false;
        saveState();
        renderExam();
      });
      list.appendChild(button);
    });

    byId("finish-section").textContent =
      state.exam.sectionIndex === SECTIONS.length - 1 ? "Submit assessment" : "Finish section and continue";
    renderQuestionGrid();
    renderExamStatus();
  }

  function reviewFirstQuestion(filter) {
    var sectionQuestions = questionsForSection(currentSection());
    var match = sectionQuestions.find(function (question) {
      if (filter === "unanswered") {
        return !isAnswered(question);
      }
      return state.exam.flagged.indexOf(question.id) !== -1;
    });
    if (!match) {
      window.alert(filter === "unanswered"
        ? "Every question in this section has a complete response."
        : "No question in this section is marked for review.");
      return;
    }
    state.exam.currentQuestionId = match.id;
    state.exam.reviewMode = false;
    saveState();
    renderExam();
  }

  function finishCurrentSection() {
    var section = currentSection();
    var sectionQuestions = questionsForSection(section);
    var unanswered = sectionQuestions.filter(function (question) { return !isAnswered(question); }).length;
    var warning = "You cannot return to this section after continuing.";
    if (unanswered) {
      warning = "This section has " + unanswered + " incomplete question" +
        (unanswered === 1 ? "" : "s") + ". " + warning;
    }
    if (!window.confirm(warning)) {
      return;
    }

    if (state.exam.completedSections.indexOf(section.id) === -1) {
      state.exam.completedSections.push(section.id);
    }

    if (state.exam.sectionIndex >= SECTIONS.length - 1) {
      submitExam(false);
      return;
    }

    state.exam.sectionIndex += 1;
    state.exam.reviewMode = false;
    state.exam.caseCollapsed = false;
    var nextQuestions = questionsForSection(currentSection());
    state.exam.currentQuestionId = nextQuestions.length ? nextQuestions[0].id : null;
    saveState();
    renderExam();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startExamTimer() {
    stopExamTimer();
    updateExamTimer();
    timerHandle = window.setInterval(updateExamTimer, 1000);
  }

  function stopExamTimer() {
    if (timerHandle !== null) {
      window.clearInterval(timerHandle);
      timerHandle = null;
    }
  }

  function updateExamTimer() {
    if (!state.exam || state.exam.submitted) {
      stopExamTimer();
      return;
    }
    var remaining = Math.max(0, Math.ceil((state.exam.endAt - Date.now()) / 1000));
    byId("exam-timer").textContent = formatClock(remaining);
    byId("exam-timer").classList.toggle("is-low", remaining <= 10 * 60);
    if (remaining <= 0) {
      state.exam.timedOut = true;
      submitExam(true);
    }
  }

  function formatClock(seconds) {
    var safeSeconds = Math.max(0, Math.floor(seconds));
    var hours = Math.floor(safeSeconds / 3600);
    var minutes = Math.floor((safeSeconds % 3600) / 60);
    var remainder = safeSeconds % 60;
    return [hours, minutes, remainder].map(function (value) {
      return String(value).padStart(2, "0");
    }).join(":");
  }

  function formatDuration(seconds) {
    var safeSeconds = Math.max(0, Math.floor(seconds));
    var hours = Math.floor(safeSeconds / 3600);
    var minutes = Math.floor((safeSeconds % 3600) / 60);
    var remainder = safeSeconds % 60;
    if (hours) {
      return hours + "h " + minutes + "m " + remainder + "s";
    }
    return minutes + "m " + remainder + "s";
  }

  function submitExam(timedOut) {
    if (!state.exam || state.exam.submitted) {
      return;
    }
    state.exam.submitted = true;
    state.exam.timedOut = Boolean(timedOut);
    state.exam.submittedAt = Date.now();
    stopExamTimer();
    saveState();
    renderResults();
  }

  function scoreQuestion(question) {
    var answer = answerFor(question);
    var expectedAnswer = viewFor(question).correct;
    var earned = 0;
    var maximum = 1;

    if (question.type === "single") {
      earned = answer === expectedAnswer ? 1 : 0;
    } else if (question.type === "multiple") {
      maximum = expectedAnswer.length;
      if (Array.isArray(answer)) {
        earned = answer.filter(function (value) { return expectedAnswer.indexOf(value) !== -1; }).length;
      }
    } else if (question.type === "yesno" || question.type === "matching" || question.type === "order") {
      maximum = expectedAnswer.length;
      if (Array.isArray(answer)) {
        earned = expectedAnswer.reduce(function (total, expected, index) {
          return total + (answer[index] === expected ? 1 : 0);
        }, 0);
      }
    }

    return {
      earned: earned,
      maximum: maximum,
      full: earned === maximum
    };
  }

  function calculateResults() {
    var totals = QUESTIONS.reduce(function (summary, question) {
      var score = scoreQuestion(question);
      summary.earned += score.earned;
      summary.maximum += score.maximum;
      summary.full += score.full ? 1 : 0;
      return summary;
    }, { earned: 0, maximum: 0, full: 0 });

    totals.percent = totals.maximum ? Math.round((totals.earned / totals.maximum) * 100) : 0;
    return totals;
  }

  function renderResults() {
    if (!state.exam || !state.exam.submitted) {
      return;
    }
    stopExamTimer();
    byId("exam-intro").classList.add("hidden");
    byId("exam-shell").classList.add("hidden");
    byId("exam-results").classList.remove("hidden");

    var totals = calculateResults();
    var heading = totals.percent >= 85
      ? "Excellent command of Module 1"
      : totals.percent >= 70
        ? "A solid result with review opportunities"
        : "Targeted review is recommended";
    byId("result-heading").textContent = heading;
    byId("result-summary").textContent = state.exam.timedOut
      ? "Time expired, so the attempt was submitted automatically."
      : "Your answers were scored by component and organized below for study.";
    byId("score-percent").textContent = totals.percent + "%";
    byId("score-ring").style.setProperty("--score-angle", (totals.percent * 3.6) + "deg");
    byId("points-earned").textContent = totals.earned + " / " + totals.maximum;
    byId("questions-correct").textContent = totals.full + " / " + QUESTIONS.length;
    byId("result-marked").textContent = String(state.exam.flagged.length);

    var elapsed = Math.max(0, Math.min(EXAM_SECONDS, Math.round((state.exam.submittedAt - state.exam.startedAt) / 1000)));
    byId("time-used").textContent = formatDuration(elapsed);

    renderUnitResults();
    renderAnswerReview();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderUnitResults() {
    var container = byId("unit-results");
    container.replaceChildren();
    var groups = {};

    QUESTIONS.forEach(function (question) {
      if (!groups[question.unit]) {
        groups[question.unit] = { earned: 0, maximum: 0 };
      }
      var score = scoreQuestion(question);
      groups[question.unit].earned += score.earned;
      groups[question.unit].maximum += score.maximum;
    });

    Object.keys(groups).forEach(function (unit) {
      var result = groups[unit];
      var percent = result.maximum ? Math.round((result.earned / result.maximum) * 100) : 0;
      var row = createElement("div", "unit-result");
      row.appendChild(createElement("span", "", unit));
      var bar = createElement("span", "unit-bar");
      var fill = document.createElement("span");
      fill.style.width = percent + "%";
      bar.appendChild(fill);
      row.appendChild(bar);
      row.appendChild(createElement("strong", "", percent + "%"));
      container.appendChild(row);
    });
  }

  function formatQuestionAnswer(question, answer) {
    if (answer === undefined || answer === null || (Array.isArray(answer) && !answer.length)) {
      return "No answer";
    }
    if (question.type === "single") {
      return String(answer);
    }
    if (question.type === "multiple") {
      return answer.join("; ");
    }
    if (question.type === "yesno" || question.type === "matching") {
      return viewFor(question).items.map(function (item, index) {
        return item + " → " + (answer[index] || "No answer");
      }).join(" | ");
    }
    if (question.type === "order") {
      return answer.map(function (item, index) { return (index + 1) + ". " + item; }).join(" | ");
    }
    return String(answer);
  }

  function correctAnswerFor(question) {
    var expectedAnswer = viewFor(question).correct;
    if (question.type === "single") {
      return expectedAnswer;
    }
    return formatQuestionAnswer(question, expectedAnswer);
  }

  function renderAnswerReview() {
    var container = byId("answer-review-list");
    container.replaceChildren();

    QUESTIONS.forEach(function (question, index) {
      var score = scoreQuestion(question);
      var marked = state.exam.flagged.indexOf(question.id) !== -1;
      if (resultFilter === "incorrect" && score.full) {
        return;
      }
      if (resultFilter === "correct" && !score.full) {
        return;
      }
      if (resultFilter === "marked" && !marked) {
        return;
      }

      var details = createElement("details", "answer-review-item" + (score.full ? " is-correct" : ""));
      var summaryText = "Question " + (index + 1) + " · " +
        (score.full ? "Correct" : score.earned ? "Partial credit" : "Incorrect") +
        " · " + score.earned + "/" + score.maximum + " point" + (score.maximum === 1 ? "" : "s");
      if (marked) {
        summaryText += " · Marked";
      }
      details.appendChild(createElement("summary", "", summaryText));
      var content = createElement("div", "answer-review-content");
      content.appendChild(createElement("p", "", question.prompt));

      var yourAnswer = document.createElement("p");
      yourAnswer.appendChild(createElement("strong", "", "Your answer: "));
      yourAnswer.appendChild(document.createTextNode(formatQuestionAnswer(question, answerFor(question))));
      content.appendChild(yourAnswer);

      var correct = document.createElement("p");
      correct.appendChild(createElement("strong", "", "Correct answer: "));
      correct.appendChild(document.createTextNode(correctAnswerFor(question)));
      content.appendChild(correct);

      var rationale = document.createElement("p");
      rationale.appendChild(createElement("strong", "", "Rationale: "));
      rationale.appendChild(document.createTextNode(question.rationale));
      content.appendChild(rationale);

      if (state.exam.notes[question.id]) {
        var note = document.createElement("p");
        note.appendChild(createElement("strong", "", "Your note: "));
        note.appendChild(document.createTextNode(state.exam.notes[question.id]));
        content.appendChild(note);
      }
      details.appendChild(content);
      container.appendChild(details);
    });

    if (!container.children.length) {
      container.appendChild(createElement("p", "", "No questions match this result filter."));
    }
  }

  function startNewAttemptFromResults() {
    if (!window.confirm("Start a new attempt? The completed attempt will be replaced.")) {
      return;
    }
    state.exam = null;
    resultFilter = "all";
    byId("result-filter").value = "all";
    byId("exam-agreement").checked = false;
    byId("start-exam").disabled = true;
    saveState();
    prepareExamView();
  }

  function bindEvents() {
    document.querySelectorAll("[data-tab]").forEach(function (button) {
      button.addEventListener("click", function () {
        activateTab(button.getAttribute("data-tab"));
      });
      button.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
          return;
        }
        var tabs = Array.from(document.querySelectorAll("[data-tab]"));
        var current = tabs.indexOf(button);
        var direction = event.key === "ArrowRight" ? 1 : -1;
        var next = tabs[(current + direction + tabs.length) % tabs.length];
        next.focus();
        activateTab(next.getAttribute("data-tab"));
      });
    });

    byId("card-unit-filter").addEventListener("change", updateFlashFilters);
    byId("card-category-filter").addEventListener("change", updateFlashFilters);
    byId("card-search").addEventListener("input", updateFlashFilters);
    byId("flashcard").addEventListener("click", flipFlashcard);
    byId("flip-card").addEventListener("click", flipFlashcard);
    byId("previous-card").addEventListener("click", function () { moveFlashcard(-1); });
    byId("next-card").addEventListener("click", function () { moveFlashcard(1); });
    byId("master-card").addEventListener("click", function () { rateFlashcard("mastered"); });
    byId("review-card").addEventListener("click", function () { rateFlashcard("review"); });
    byId("shuffle-cards").addEventListener("click", shuffleFlashcards);
    byId("reset-cards").addEventListener("click", resetFlashcardProgress);

    byId("exam-agreement").addEventListener("change", function (event) {
      byId("start-exam").disabled = !event.target.checked;
    });
    byId("start-exam").addEventListener("click", beginExam);
    byId("continue-exam").addEventListener("click", openExamAttempt);
    byId("discard-exam").addEventListener("click", discardExamAttempt);
    byId("previous-question").addEventListener("click", function () { moveQuestion(-1); });
    byId("next-question").addEventListener("click", function () { moveQuestion(1); });
    byId("mark-question").addEventListener("click", toggleQuestionMark);
    byId("clear-answer").addEventListener("click", clearCurrentAnswer);
    byId("question-note").addEventListener("input", function (event) {
      var question = currentQuestion();
      if (question) {
        state.exam.notes[question.id] = event.target.value;
        saveState();
      }
    });
    byId("toggle-case-study").addEventListener("click", function () {
      state.exam.caseCollapsed = !state.exam.caseCollapsed;
      saveState();
      renderCaseStudy(currentSection());
    });
    byId("review-unanswered").addEventListener("click", function () { reviewFirstQuestion("unanswered"); });
    byId("review-marked").addEventListener("click", function () { reviewFirstQuestion("marked"); });
    byId("finish-section").addEventListener("click", finishCurrentSection);
    byId("show-exam-help").addEventListener("click", function () {
      var dialog = byId("help-dialog");
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
    byId("result-filter").addEventListener("change", function (event) {
      resultFilter = event.target.value;
      renderAnswerReview();
    });
    byId("retake-exam").addEventListener("click", startNewAttemptFromResults);
    byId("return-flashcards").addEventListener("click", function () { activateTab("flashcards"); });

    document.addEventListener("keydown", function (event) {
      if (state.activeTab !== "flashcards") {
        return;
      }
      var tag = document.activeElement ? document.activeElement.tagName : "";
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") {
        return;
      }
      if (event.code === "Space") {
        event.preventDefault();
        flipFlashcard();
      } else if (event.key === "ArrowLeft") {
        moveFlashcard(-1);
      } else if (event.key === "ArrowRight") {
        moveFlashcard(1);
      } else if (event.key.toLowerCase() === "r") {
        rateFlashcard("review");
      } else if (event.key.toLowerCase() === "k") {
        rateFlashcard("mastered");
      }
    });
  }

  function validateData() {
    var messages = [];
    if (!FLASHCARDS.length) {
      messages.push("No flashcards loaded.");
    }
    if (!QUESTIONS.length || !SECTIONS.length) {
      messages.push("The assessment bank did not load.");
    }
    if (messages.length) {
      console.error(messages.join(" "));
    }
  }

  function initialize() {
    validateData();
    populateFlashcardFilters();
    bindEvents();
    byId("intro-question-count").textContent = String(QUESTIONS.length);
    byId("intro-section-count").textContent = String(SECTIONS.length);
    activateTab(state.activeTab);
  }

  initialize();
}());
