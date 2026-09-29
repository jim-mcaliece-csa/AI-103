window.AI103_EXAM_SECTIONS = [
  {
    id: "general",
    title: "General Questions",
    kind: "general",
    description: "Answer 42 questions covering optimization planning, prompt engineering, retrieval-augmented generation, fine-tuning, strategy selection, evaluation, and the hands-on gpt-5 exercise."
  },
  {
    id: "case-contoso-travel",
    title: "Case Study 1 — Contoso Travel",
    kind: "case-study",
    context: "Contoso Travel is improving a customer trip-planning assistant. Its hotel catalog, prices, and availability change throughout the day. Responses must use only approved catalog facts, follow a warm brand voice, avoid offering booking services the company does not provide, and use a predictable recommendation format. The team has a representative evaluation set, a deployed gpt-5 base model, and high-quality example conversations. It must improve quality without adding unnecessary cost or latency."
  },
  {
    id: "case-fabrikam-knowledge",
    title: "Case Study 2 — Fabrikam Knowledge",
    kind: "case-study",
    context: "Fabrikam is building an internal support assistant over policies and technical runbooks that change daily. Answers must be grounded in approved sources and returned in a concise schema. The current application sends a long instruction prompt with many examples, increasing token cost and latency, yet formatting is still inconsistent. Retrieval testing also shows that some relevant passages are missed. Fabrikam can improve its Azure AI Search index and can prepare a supervised fine-tuning dataset, but it must justify each additional layer with measured results."
  }
];

window.AI103_QUESTIONS = [
  {
    id: "G01",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan model optimization",
    type: "single",
    prompt: "A base language model produces useful answers but does not consistently meet an application's accuracy, tone, and format requirements. What should the team do before choosing an optimization technique?",
    options: [
      "Define measurable requirements and evaluate the base model on representative inputs",
      "Fine-tune the model immediately on every available conversation",
      "Add the entire knowledge base to every prompt",
      "Increase temperature until the responses appear more varied"
    ],
    correct: "Define measurable requirements and evaluate the base model on representative inputs",
    rationale: "Optimization should begin with explicit success criteria and a baseline measured on representative data. Without that evidence, the team cannot tell whether prompt changes, retrieval, or fine-tuning improve the application or merely change it."
  },
  {
    id: "G02",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan model optimization",
    type: "order",
    prompt: "Arrange these activities into an evidence-driven optimization sequence.",
    items: [
      "Compare the optimized variant with the baseline and check for regressions.",
      "Add retrieval or fine-tuning only for requirements the prompt cannot satisfy reliably.",
      "Measure the unmodified model on representative test cases.",
      "Define quality, consistency, cost, and latency requirements.",
      "Iterate on system instructions, examples, and supported generation parameters."
    ],
    correct: [
      "Define quality, consistency, cost, and latency requirements.",
      "Measure the unmodified model on representative test cases.",
      "Iterate on system instructions, examples, and supported generation parameters.",
      "Add retrieval or fine-tuning only for requirements the prompt cannot satisfy reliably.",
      "Compare the optimized variant with the baseline and check for regressions."
    ],
    rationale: "The team first defines the target, establishes a baseline, and tries the lowest-cost optimization. It then adds RAG for missing context or fine-tuning for persistent behavior problems and validates the result against the same baseline."
  },
  {
    id: "G03",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Engineer effective prompts",
    type: "matching",
    prompt: "Match each chat-prompt component to its primary purpose.",
    items: [
      "System message",
      "User message",
      "Assistant message in retained history",
      "Example input/output pair"
    ],
    options: [
      "Defines the model's role, boundaries, style, and response constraints",
      "Contains the current request or source input from the user",
      "Preserves earlier model output as context for a later turn",
      "Demonstrates the pattern or format the model should imitate"
    ],
    correct: [
      "Defines the model's role, boundaries, style, and response constraints",
      "Contains the current request or source input from the user",
      "Preserves earlier model output as context for a later turn",
      "Demonstrates the pattern or format the model should imitate"
    ],
    rationale: "These components have separate roles: the system message establishes behavior, the user message supplies the request, assistant history preserves conversational context, and examples demonstrate the desired pattern."
  },
  {
    id: "G04",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Engineer effective prompts",
    type: "single",
    prompt: "Which instruction belongs most naturally in a system message?",
    options: [
      "Act as a travel advisor, decline booking requests, and return three concise bullet points.",
      "Which rail pass is best for my seven-day trip?",
      "Retrieve the newest rail-pass prices from the search index.",
      "Update the model's weights so that its tone changes permanently."
    ],
    correct: "Act as a travel advisor, decline booking requests, and return three concise bullet points.",
    rationale: "A system message defines role, boundaries, tone, and output format. A user question belongs in user input, retrieval is an application operation, and weight updates require training rather than prompting."
  },
  {
    id: "G05",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Engineer effective prompts",
    type: "multiple",
    prompt: "Which four elements make a system message more operationally useful? Select four answers.",
    options: [
      "A clearly stated assistant role and desired outcome",
      "Explicit topics or actions that are out of scope",
      "A required output structure when the application must parse the result",
      "A policy for ambiguous requests or missing information",
      "A claim that the instructions guarantee perfect compliance",
      "A copy of every document the organization owns"
    ],
    correct: [
      "A clearly stated assistant role and desired outcome",
      "Explicit topics or actions that are out of scope",
      "A required output structure when the application must parse the result",
      "A policy for ambiguous requests or missing information"
    ],
    selectCount: 4,
    rationale: "A strong system message states the role, boundaries, output expectations, and what to do when uncertain. Instructions influence behavior but do not guarantee compliance, and indiscriminately inserting all documents wastes context and does not ensure relevance."
  },
  {
    id: "G06",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Engineer effective prompts",
    type: "yesno",
    prompt: "For each statement about system messages, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A system message can guide tone and specify an output format.",
      "A detailed system message permanently changes the model's trained weights.",
      "A system message should still be tested with representative and adversarial inputs."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "System messages guide request-time behavior; they do not retrain the model. Because compliance is probabilistic, the application must evaluate the instructions and layer other safeguards where needed."
  },
  {
    id: "G07",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Apply prompt patterns",
    type: "matching",
    prompt: "Match each prompt design need to the most appropriate pattern.",
    items: [
      "Write from the perspective of an experienced technical marketer.",
      "Return hotel data with the same named fields every time.",
      "Classify a message by imitating several labeled examples.",
      "Separate instructions, reference text, and examples unambiguously.",
      "Reduce errors in a complex request by dividing it into explicit stages."
    ],
    options: [
      "Persona pattern",
      "Format template",
      "Few-shot learning",
      "Clear delimiters or tagged sections",
      "Task decomposition"
    ],
    correct: [
      "Persona pattern",
      "Format template",
      "Few-shot learning",
      "Clear delimiters or tagged sections",
      "Task decomposition"
    ],
    rationale: "Personas establish perspective, templates define structure, few-shot examples demonstrate a mapping, delimiters distinguish prompt sections, and decomposition turns a complicated task into smaller verifiable steps."
  },
  {
    id: "G08",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Apply prompt patterns",
    type: "single",
    prompt: "A team is using a reasoning model from a family that performs internal step-by-step reasoning. Which prompt change best follows the module's guidance?",
    options: [
      "State the goal, constraints, and required result clearly instead of demanding a visible chain of thought.",
      "Require the model to reveal every hidden reasoning token before giving an answer.",
      "Remove all instructions because reasoning models do not need task context.",
      "Set both temperature and top_p to their maximum values."
    ],
    correct: "State the goal, constraints, and required result clearly instead of demanding a visible chain of thought.",
    rationale: "Explicit chain-of-thought prompting is presented for non-reasoning models. A reasoning model still needs a clear task and constraints, but the application should not depend on disclosure of hidden reasoning."
  },
  {
    id: "G09",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Apply prompt patterns",
    type: "single",
    prompt: "A classification prompt contains one labeled example before the unlabeled request. Which prompting approach is this?",
    options: [
      "One-shot learning",
      "Zero-shot learning",
      "Retrieval-augmented generation",
      "Supervised fine-tuning"
    ],
    correct: "One-shot learning",
    rationale: "One example makes the prompt one-shot. Zero-shot has no examples, few-shot uses multiple examples, and neither RAG nor fine-tuning is implied by an in-prompt demonstration."
  },
  {
    id: "G10",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Structure prompts",
    type: "yesno",
    prompt: "For each prompt-structure statement, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Headings, XML-style tags, or separators can help distinguish instructions from source content.",
      "Text near the end of a prompt can have disproportionate influence because of recency bias.",
      "Repeating a critical instruction at the end always guarantees that the model follows it."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Clear boundaries reduce ambiguity, and recency bias can make later text more influential. Repetition can help but does not turn probabilistic behavior into a guarantee."
  },
  {
    id: "G11",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Configure generation parameters",
    type: "multiple",
    prompt: "Which four statements about temperature and top_p are accurate? Select four answers.",
    options: [
      "Lower temperature generally favors focused, repeatable output.",
      "Higher temperature can increase variety for creative tasks.",
      "Top_p limits candidate tokens by cumulative probability mass.",
      "A practical starting guideline is to tune temperature or top_p rather than changing both together.",
      "Temperature determines which documents Azure AI Search retrieves.",
      "Top_p permanently updates the model's weights."
    ],
    correct: [
      "Lower temperature generally favors focused, repeatable output.",
      "Higher temperature can increase variety for creative tasks.",
      "Top_p limits candidate tokens by cumulative probability mass.",
      "A practical starting guideline is to tune temperature or top_p rather than changing both together."
    ],
    selectCount: 4,
    rationale: "Both settings affect sampling at inference time. Temperature changes randomness, while top_p restricts the probability mass considered. Neither performs retrieval nor training, and changing both simultaneously makes the effect harder to attribute."
  },
  {
    id: "G12",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Configure generation parameters",
    type: "single",
    prompt: "A hotel-amenity answer must be factual and stable across repeated requests. Which initial temperature choice is most appropriate?",
    options: [
      "A low value such as 0.2",
      "A high value such as 0.9",
      "The highest value supported by the deployment",
      "Temperature is irrelevant to generated variation"
    ],
    correct: "A low value such as 0.2",
    rationale: "A low temperature favors focused, less variable output and is a sensible starting point for factual tasks. It does not guarantee correctness, so grounding and evaluation may still be required."
  },
  {
    id: "G13",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Implement RAG",
    type: "order",
    prompt: "Arrange the core RAG stages in the order used for one user request.",
    items: [
      "Generate an answer from the augmented request.",
      "Add the selected evidence to the model input.",
      "Retrieve information relevant to the user's question."
    ],
    correct: [
      "Retrieve information relevant to the user's question.",
      "Add the selected evidence to the model input.",
      "Generate an answer from the augmented request."
    ],
    rationale: "RAG means retrieve, augment, and generate. The application first finds relevant evidence, supplies it as context, and then asks the model to answer from that augmented input."
  },
  {
    id: "G14",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Ground model responses",
    type: "single",
    prompt: "Why can prompt engineering alone not reliably answer questions about a private catalog that was updated after the model was trained?",
    options: [
      "Instructions can guide behavior but cannot supply facts the request never provides.",
      "System messages cannot contain any factual information.",
      "Few-shot examples automatically delete private data.",
      "Lower temperature disables access to training knowledge."
    ],
    correct: "Instructions can guide behavior but cannot supply facts the request never provides.",
    rationale: "Prompt engineering controls how the model responds, but the model still needs the relevant facts. RAG retrieves current or private evidence and inserts it into the request without retraining the model."
  },
  {
    id: "G15",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose retrieval methods",
    type: "matching",
    prompt: "Match each Azure AI Search approach to its defining behavior.",
    items: [
      "Keyword search",
      "Semantic search",
      "Vector search",
      "Hybrid search"
    ],
    options: [
      "Matches exact terms in the query and indexed text",
      "Uses semantic models to rank by meaning rather than only exact terms",
      "Finds nearby embedding vectors representing similar content",
      "Combines lexical and meaning-based techniques in one retrieval strategy"
    ],
    correct: [
      "Matches exact terms in the query and indexed text",
      "Uses semantic models to rank by meaning rather than only exact terms",
      "Finds nearby embedding vectors representing similar content",
      "Combines lexical and meaning-based techniques in one retrieval strategy"
    ],
    rationale: "Keyword search is lexical, semantic search interprets meaning, vector search compares embeddings, and hybrid search combines approaches. The module recommends hybrid search as a strong default for generative AI retrieval."
  },
  {
    id: "G16",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select RAG scenarios",
    type: "multiple",
    prompt: "Which four requirements are strong reasons to use RAG? Select four answers.",
    options: [
      "Answer from private organizational policies",
      "Reflect inventory that changes every hour",
      "Ground high-stakes factual claims in approved evidence",
      "Use information published after the base model's training cutoff",
      "Permanently encode a brand voice in model weights",
      "Eliminate the need to evaluate generated answers"
    ],
    correct: [
      "Answer from private organizational policies",
      "Reflect inventory that changes every hour",
      "Ground high-stakes factual claims in approved evidence",
      "Use information published after the base model's training cutoff"
    ],
    selectCount: 4,
    rationale: "RAG is designed for private, current, domain-specific, and evidence-sensitive knowledge. Fine-tuning addresses persistent behavior patterns, while no optimization removes the need for evaluation."
  },
  {
    id: "G17",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use embeddings",
    type: "yesno",
    prompt: "For each statement about embeddings and vector retrieval, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "An embedding represents semantic features as a numeric vector.",
      "Semantically similar text can have nearby vectors even when it uses different words.",
      "A cosine similarity value near 1 generally indicates low semantic similarity."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Embeddings encode meaning numerically, enabling semantically similar passages to be found without exact wording. For cosine similarity, a value near 1 indicates strong similarity, not weak similarity."
  },
  {
    id: "G18",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Build a retrieval pipeline",
    type: "order",
    prompt: "Arrange these implementation activities from data preparation through a grounded response.",
    items: [
      "Insert the retrieved passages into the request and generate an answer.",
      "Create and store embeddings in an Azure AI Search index.",
      "Convert the user query for retrieval and search the index.",
      "Add approved source content from storage or uploaded files."
    ],
    correct: [
      "Add approved source content from storage or uploaded files.",
      "Create and store embeddings in an Azure AI Search index.",
      "Convert the user query for retrieval and search the index.",
      "Insert the retrieved passages into the request and generate an answer."
    ],
    rationale: "Content must be available before it can be indexed. At request time the query is represented for search, relevant passages are retrieved, and those passages augment the model input."
  },
  {
    id: "G19",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose retrieval methods",
    type: "single",
    prompt: "A knowledge base contains exact product codes as well as natural-language descriptions. Which search approach best preserves exact matching while also finding semantically related passages?",
    options: [
      "Hybrid search",
      "Vector search only",
      "Keyword search only",
      "Random document sampling"
    ],
    correct: "Hybrid search",
    rationale: "Hybrid search combines lexical signals that retain exact product-code matches with vector or semantic signals that capture meaning. Using only one side can miss relevant evidence."
  },
  {
    id: "G20",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Design RAG components",
    type: "matching",
    prompt: "Match each RAG component to its responsibility.",
    items: [
      "Approved data source",
      "Embedding model",
      "Azure AI Search index",
      "Generation model"
    ],
    options: [
      "Holds the authoritative documents or records",
      "Transforms content and queries into semantic vectors",
      "Stores searchable fields and returns relevant passages",
      "Uses the retrieved context to compose the final response"
    ],
    correct: [
      "Holds the authoritative documents or records",
      "Transforms content and queries into semantic vectors",
      "Stores searchable fields and returns relevant passages",
      "Uses the retrieved context to compose the final response"
    ],
    rationale: "A RAG system separates authority, representation, retrieval, and generation. Understanding these boundaries helps diagnose whether a failure originated in the data, index, search step, or model response."
  },
  {
    id: "G21",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Evaluate RAG",
    type: "yesno",
    prompt: "For each statement about RAG quality, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Response quality depends partly on source quality, chunking, indexing, and retrieval relevance.",
      "Adding RAG guarantees that every generated statement is factually correct.",
      "Frequently changing data can be refreshed in the index without retraining the language model."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "RAG can improve grounding, but weak sources or retrieval can still produce poor context and generation can still fail. Its advantage for dynamic knowledge is that the external source and index can be updated independently of model training."
  },
  {
    id: "G22",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Decide when to fine-tune",
    type: "single",
    prompt: "A model has access to all required facts and receives a tested system message with examples, but it still violates the required response schema unpredictably. Which next step is most appropriate?",
    options: [
      "Evaluate supervised fine-tuning with representative prompt-and-response examples.",
      "Replace the examples with an unrelated search index.",
      "Raise temperature to maximize response variety.",
      "Treat the inconsistent output as proof that evaluation is unnecessary."
    ],
    correct: "Evaluate supervised fine-tuning with representative prompt-and-response examples.",
    rationale: "Persistent style or format inconsistency after prompt engineering is a suitable fine-tuning scenario. RAG addresses missing knowledge, while a higher temperature would generally increase variability."
  },
  {
    id: "G23",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Compare fine-tuning methods",
    type: "matching",
    prompt: "Match each customization term to its description.",
    items: [
      "Supervised fine-tuning",
      "Reinforcement fine-tuning",
      "Direct Preference Optimization",
      "LoRA",
      "Distillation"
    ],
    options: [
      "Learns from labeled prompt-and-response examples",
      "Uses a grader and iterative rewards to improve responses",
      "Aligns behavior from preferred and non-preferred response pairs",
      "Approximates weight updates through a lower-rank representation",
      "Transfers useful behavior from a larger model to a smaller model"
    ],
    correct: [
      "Learns from labeled prompt-and-response examples",
      "Uses a grader and iterative rewards to improve responses",
      "Aligns behavior from preferred and non-preferred response pairs",
      "Approximates weight updates through a lower-rank representation",
      "Transfers useful behavior from a larger model to a smaller model"
    ],
    rationale: "SFT learns demonstrations, RFT optimizes against grader feedback, and DPO learns pairwise preferences. LoRA makes adaptation more efficient, while distillation targets a smaller and potentially cheaper or faster model."
  },
  {
    id: "G24",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Select fine-tuning scenarios",
    type: "multiple",
    prompt: "Which five goals can justify evaluating fine-tuning? Select five answers.",
    options: [
      "Enforce a brand style more consistently",
      "Produce a defined output schema more reliably",
      "Shorten a large repeated instruction-and-example prompt",
      "Improve tool selection from representative tool-use examples",
      "Distill behavior into a smaller model for lower cost or latency",
      "Fetch today's inventory without an external data source",
      "Remove all training, hosting, and maintenance costs"
    ],
    correct: [
      "Enforce a brand style more consistently",
      "Produce a defined output schema more reliably",
      "Shorten a large repeated instruction-and-example prompt",
      "Improve tool selection from representative tool-use examples",
      "Distill behavior into a smaller model for lower cost or latency"
    ],
    selectCount: 5,
    rationale: "Fine-tuning can improve persistent behavior, embed demonstrated patterns, reduce repeated prompt content, and support distillation. It is not a retrieval mechanism for current facts and introduces rather than eliminates lifecycle costs."
  },
  {
    id: "G25",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Understand fine-tuning",
    type: "yesno",
    prompt: "For each fine-tuning statement, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Fine-tuning adjusts a pretrained model using a smaller task-specific dataset.",
      "Fine-tuning a model on last month's catalog is the preferred way to retrieve today's prices.",
      "A fine-tuned model generally retains broad capabilities while learning specialized patterns."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Fine-tuning specializes a pretrained model by changing its learned behavior. Fast-changing facts should remain in an external source retrieved at request time, not be frozen into periodic training data."
  },
  {
    id: "G26",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Evaluate fine-tuning",
    type: "single",
    prompt: "Why must a team record a base-model baseline before fine-tuning?",
    options: [
      "To determine whether the customized model improved target behavior or caused regressions",
      "To convert the baseline deployment automatically into training data",
      "To guarantee that every training job completes successfully",
      "To avoid testing the fine-tuned deployment"
    ],
    correct: "To determine whether the customized model improved target behavior or caused regressions",
    rationale: "A baseline provides comparative evidence. The same representative tests should be run against the base and fine-tuned deployments so quality, consistency, cost, and latency trade-offs are visible."
  },
  {
    id: "G27",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Prepare fine-tuning data",
    type: "multiple",
    prompt: "Which five practices support a useful supervised fine-tuning dataset for a chat model? Select five answers.",
    options: [
      "Store one valid JSON object per line in JSONL format.",
      "Include system, user, and assistant messages in each conversation example.",
      "Use high-quality examples representative of expected production scenarios.",
      "Make assistant responses demonstrate the exact desired tone and format.",
      "Use a consistent system message and also use it at inference time.",
      "Mix contradictory styles deliberately without labeling them.",
      "Leave the system message blank to improve accuracy."
    ],
    correct: [
      "Store one valid JSON object per line in JSONL format.",
      "Include system, user, and assistant messages in each conversation example.",
      "Use high-quality examples representative of expected production scenarios.",
      "Make assistant responses demonstrate the exact desired tone and format.",
      "Use a consistent system message and also use it at inference time."
    ],
    selectCount: 5,
    rationale: "The dataset should be valid JSONL and consistently demonstrate the production interaction and target output. Contradictory or unrepresentative examples teach conflicting patterns, and omitting the system message tends to reduce accuracy."
  },
  {
    id: "G28",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Run a fine-tuning lifecycle",
    type: "order",
    prompt: "Arrange these fine-tuning activities into a defensible lifecycle.",
    items: [
      "Deploy the resulting model and compare it with the base deployment.",
      "Submit and monitor the fine-tuning job.",
      "Establish a base-model evaluation baseline.",
      "Prepare and validate representative training examples.",
      "Re-evaluate after deployment and inspect regressions."
    ],
    correct: [
      "Establish a base-model evaluation baseline.",
      "Prepare and validate representative training examples.",
      "Submit and monitor the fine-tuning job.",
      "Deploy the resulting model and compare it with the base deployment.",
      "Re-evaluate after deployment and inspect regressions."
    ],
    rationale: "The baseline precedes training, clean data precedes job submission, and a completed model must be deployed before comparative inference testing. Final evaluation determines whether the result is worth operating."
  },
  {
    id: "G29",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Manage fine-tuning risks",
    type: "matching",
    prompt: "Match each fine-tuning risk or cost to its practical meaning.",
    items: [
      "Overfitting",
      "Underfitting",
      "Bias from training data",
      "Model drift from narrow specialization",
      "Maintenance cost"
    ],
    options: [
      "The model memorizes or specializes too closely and generalizes poorly.",
      "The customization does not learn the target pattern strongly enough.",
      "Unrepresentative examples cause systematically skewed behavior.",
      "Performance on broad language tasks declines outside the trained domain.",
      "Data or base-model changes require new validation and possibly retraining."
    ],
    correct: [
      "The model memorizes or specializes too closely and generalizes poorly.",
      "The customization does not learn the target pattern strongly enough.",
      "Unrepresentative examples cause systematically skewed behavior.",
      "Performance on broad language tasks declines outside the trained domain.",
      "Data or base-model changes require new validation and possibly retraining."
    ],
    rationale: "Fine-tuning has both model-quality risks and lifecycle costs. Dataset design, hyperparameter experiments, broad regression tests, and ongoing maintenance are part of the engineering work."
  },
  {
    id: "G30",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Prepare fine-tuning data",
    type: "yesno",
    prompt: "For each statement about training and inference messages, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A consistent nonempty system message in training examples can improve learned behavior.",
      "The system message used during training should also be supplied when the fine-tuned model is used for inference.",
      "Once a model is fine-tuned, no further prompt instructions or evaluation are ever useful."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "The module recommends a consistent system message in training and reuse of that message at inference. Fine-tuning establishes baseline behavior, while request-specific prompts, guardrails, and continuing evaluation still matter."
  },
  {
    id: "G31",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Manage fine-tuning risks",
    type: "single",
    prompt: "After customization, a model follows the target support script well but performs worse on ordinary language tasks outside support. Which challenge does this illustrate?",
    options: [
      "Model drift caused by overly narrow specialization",
      "Successful hybrid retrieval",
      "Recency bias in a single prompt",
      "Higher cosine similarity"
    ],
    correct: "Model drift caused by overly narrow specialization",
    rationale: "A model can become less effective outside its fine-tuned domain when specialization is too narrow. Broad regression tests help reveal this loss of general capability."
  },
  {
    id: "G32",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Choose optimization strategies",
    type: "matching",
    prompt: "Match each requirement or observed gap to the strategy that most directly addresses it.",
    items: [
      "Quickly change tone and request-time instructions",
      "Answer from a catalog that changes frequently",
      "After tested prompts remain inconsistent, make a stable schema and brand style more reliable",
      "Use current catalog facts with a consistent brand voice and session-specific guardrails"
    ],
    options: [
      "Prompt engineering",
      "RAG",
      "Fine-tuning",
      "Prompt engineering, RAG, and fine-tuning together"
    ],
    correct: [
      "Prompt engineering",
      "RAG",
      "Fine-tuning",
      "Prompt engineering, RAG, and fine-tuning together"
    ],
    rationale: "Prompting controls request-time behavior, RAG supplies changing facts, and fine-tuning improves persistent patterns. Demanding applications can layer all three because each solves a different problem."
  },
  {
    id: "G33",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Choose optimization strategies",
    type: "single",
    prompt: "Which strategy should normally be tested first when optimizing a new generative AI application?",
    options: [
      "Prompt engineering",
      "Fine-tuning every candidate model",
      "Building a search index before confirming that external knowledge is needed",
      "Combining all optimization techniques before establishing a baseline"
    ],
    correct: "Prompt engineering",
    rationale: "Prompt engineering is the fastest, least complex, and lowest-upfront-cost option. Teams should start simple, evaluate, and add retrieval or fine-tuning only when requirements show that prompting is insufficient."
  },
  {
    id: "G34",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Combine optimization strategies",
    type: "multiple",
    prompt: "An application requires current private facts, a stable brand style, and campaign-specific instructions. Which four design choices align with those needs? Select four answers.",
    options: [
      "Use RAG to retrieve current private facts.",
      "Use fine-tuning to improve persistent brand-style consistency.",
      "Use a system message for campaign-specific instructions and guardrails.",
      "Evaluate the combined system against the baseline and representative cases.",
      "Treat the fine-tuned model's weights as the live catalog.",
      "Skip retrieval testing because fine-tuning makes search quality irrelevant."
    ],
    correct: [
      "Use RAG to retrieve current private facts.",
      "Use fine-tuning to improve persistent brand-style consistency.",
      "Use a system message for campaign-specific instructions and guardrails.",
      "Evaluate the combined system against the baseline and representative cases."
    ],
    selectCount: 4,
    rationale: "The three optimization layers address knowledge, persistent behavior, and request-specific direction. Evaluation remains necessary because retrieval and generation can each introduce failure modes."
  },
  {
    id: "G35",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Compare optimization trade-offs",
    type: "yesno",
    prompt: "For each strategy trade-off, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Long prompts can increase per-request token use and latency.",
      "RAG adds search, storage, indexing, and retrieval-quality concerns.",
      "Fine-tuning has no upfront training or ongoing hosting cost."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Prompting can become expensive when repeated context is large, RAG introduces retrieval infrastructure, and fine-tuning has the highest upfront complexity plus training, hosting, data, and maintenance costs."
  },
  {
    id: "G36",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Apply the optimization decision framework",
    type: "order",
    prompt: "Arrange the module's incremental strategy decisions in order.",
    items: [
      "Combine only the layers required by measured application needs.",
      "Add fine-tuning if persistent style or format remains inconsistent.",
      "Start with prompt design, examples, and supported parameter tuning.",
      "Add RAG if the model requires specific, private, or current knowledge.",
      "Evaluate each change against requirements and the baseline."
    ],
    correct: [
      "Start with prompt design, examples, and supported parameter tuning.",
      "Evaluate each change against requirements and the baseline.",
      "Add RAG if the model requires specific, private, or current knowledge.",
      "Add fine-tuning if persistent style or format remains inconsistent.",
      "Combine only the layers required by measured application needs."
    ],
    rationale: "The framework begins with the simplest intervention and evidence. RAG addresses a knowledge gap, fine-tuning addresses a persistent behavior gap, and combinations should be justified rather than assumed."
  },
  {
    id: "G37",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Combine optimization strategies",
    type: "single",
    prompt: "A service must answer with today's policy facts and use a highly consistent regulated disclosure format. Which combination most directly addresses both requirements?",
    options: [
      "RAG for current policies and fine-tuning for the persistent disclosure format",
      "A high temperature with no external source",
      "Fine-tuning alone with policy text copied into old training examples",
      "RAG alone with no behavior instructions or format validation"
    ],
    correct: "RAG for current policies and fine-tuning for the persistent disclosure format",
    rationale: "RAG supplies changing evidence, while fine-tuning can improve consistent behavior and structure. Request-time instructions and validation can still be layered on top."
  },
  {
    id: "G38",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Complete the gpt-5 fine-tuning exercise",
    type: "single",
    prompt: "In the 04b exercise, why is a base gpt-5 deployment created before the fine-tuning job?",
    options: [
      "It provides a base-model behavior baseline for comparison.",
      "It converts the training JSONL into an Azure AI Search index.",
      "It guarantees automatic deployment of the customized model.",
      "It removes the need to use the same test prompts later."
    ],
    correct: "It provides a base-model behavior baseline for comparison.",
    rationale: "The lab tests a normal gpt-5 deployment first so the team can compare its responses with the fine-tuned deployment using aligned instructions and prompts."
  },
  {
    id: "G39",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Complete the gpt-5 fine-tuning exercise",
    type: "order",
    prompt: "Arrange these major 04b lab activities in the documented sequence.",
    items: [
      "Test the automatically deployed fine-tuned model with the same instructions and prompts.",
      "Create a Foundry project and deploy the gpt-5 base model.",
      "Submit the supervised fine-tuning job and monitor it while other work continues.",
      "Test and refine the base model's travel-assistant instructions.",
      "Review the JSONL conversations that demonstrate the desired style.",
      "Delete the exercise resource group when it is no longer needed."
    ],
    correct: [
      "Create a Foundry project and deploy the gpt-5 base model.",
      "Submit the supervised fine-tuning job and monitor it while other work continues.",
      "Test and refine the base model's travel-assistant instructions.",
      "Review the JSONL conversations that demonstrate the desired style.",
      "Test the automatically deployed fine-tuned model with the same instructions and prompts.",
      "Delete the exercise resource group when it is no longer needed."
    ],
    rationale: "The lab deploys the base model, starts the long-running training job early, uses the waiting time to establish base behavior, inspects the examples, compares the finished deployment, and finally cleans up billable resources."
  },
  {
    id: "G40",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Configure the gpt-5 fine-tuning exercise",
    type: "matching",
    prompt: "Match each 04b fine-tuning setting to the value used in the exercise.",
    items: [
      "Base model",
      "Training file",
      "Customization method",
      "Training type",
      "Model suffix",
      "Deployment behavior"
    ],
    options: [
      "gpt-5",
      "travel-finetune-hotel.jsonl",
      "Supervised",
      "Standard",
      "ft-travel",
      "Automatically deploy as a Developer deployment"
    ],
    correct: [
      "gpt-5",
      "travel-finetune-hotel.jsonl",
      "Supervised",
      "Standard",
      "ft-travel",
      "Automatically deploy as a Developer deployment"
    ],
    rationale: "The current lab configures supervised Standard training for gpt-5, uploads travel-finetune-hotel.jsonl, uses the ft-travel suffix, and requests automatic deployment with the Developer deployment type."
  },
  {
    id: "G41",
    sectionId: "general",
    unit: "Unit 7",
    domain: "Validate assessment concepts",
    type: "matching",
    prompt: "Match each optimization concept to the requirement it directly addresses.",
    items: [
      "System message",
      "RAG",
      "Temperature",
      "Fine-tuning",
      "Combined strategy"
    ],
    options: [
      "Defines request-time role, behavior, and output constraints",
      "Supplies external domain-specific or current evidence",
      "Controls the degree of sampling variability",
      "Improves learned consistency of style, behavior, or format",
      "Separates changing facts, persistent behavior, and session instructions into appropriate layers"
    ],
    correct: [
      "Defines request-time role, behavior, and output constraints",
      "Supplies external domain-specific or current evidence",
      "Controls the degree of sampling variability",
      "Improves learned consistency of style, behavior, or format",
      "Separates changing facts, persistent behavior, and session instructions into appropriate layers"
    ],
    rationale: "These are the core distinctions tested by the official assessment: prompting guides behavior, RAG provides knowledge, temperature affects variation, fine-tuning changes learned consistency, and a combined design assigns each concern to the right layer."
  },
  {
    id: "G42",
    sectionId: "general",
    unit: "Unit 8",
    domain: "Synthesize optimization decisions",
    type: "multiple",
    prompt: "Which four principles summarize a sound model-optimization approach? Select four answers.",
    options: [
      "Start with prompt engineering and a measured baseline.",
      "Use RAG when answers require private, current, or source-grounded knowledge.",
      "Consider fine-tuning when prompt engineering cannot make behavior sufficiently consistent.",
      "Combine techniques only when distinct measured requirements justify the added layers.",
      "Assume every application needs all three techniques.",
      "Judge success from one impressive demonstration instead of representative evaluation."
    ],
    correct: [
      "Start with prompt engineering and a measured baseline.",
      "Use RAG when answers require private, current, or source-grounded knowledge.",
      "Consider fine-tuning when prompt engineering cannot make behavior sufficiently consistent.",
      "Combine techniques only when distinct measured requirements justify the added layers."
    ],
    selectCount: 4,
    rationale: "The module treats prompt engineering, RAG, and fine-tuning as complementary. Start simple, map each technique to a requirement, and use repeatable evaluation to decide whether added cost and complexity are worthwhile."
  },
  {
    id: "CT01",
    sectionId: "case-contoso-travel",
    unit: "Unit 2",
    domain: "Improve travel-assistant behavior",
    type: "single",
    prompt: "Contoso first wants to define the assistant's role, prohibit unsupported booking offers, and require a three-item recommendation format. What is the lowest-complexity first step?",
    options: [
      "Create and evaluate a clear system message with an explicit format template.",
      "Fine-tune on the live hotel catalog.",
      "Increase temperature so more formats appear.",
      "Build a second search index containing only tone adjectives."
    ],
    correct: "Create and evaluate a clear system message with an explicit format template.",
    rationale: "These are request-time role, boundary, and formatting requirements, so prompt engineering is the appropriate first intervention. Contoso should measure compliance before deciding that persistent training is necessary."
  },
  {
    id: "CT02",
    sectionId: "case-contoso-travel",
    unit: "Unit 3",
    domain: "Ground catalog recommendations",
    type: "single",
    prompt: "Which design best reduces the risk that Contoso's assistant invents hotel prices or recommends properties that are no longer available?",
    options: [
      "Retrieve relevant current catalog records at request time and include them as grounded context.",
      "Train once on a snapshot of the catalog and never update it.",
      "Use a high temperature to encourage more candidate hotels.",
      "Add a persona without supplying catalog evidence."
    ],
    correct: "Retrieve relevant current catalog records at request time and include them as grounded context.",
    rationale: "Availability and prices change frequently, making RAG the correct knowledge layer. Prompting can tell the model how to use evidence, but it cannot supply current facts by itself."
  },
  {
    id: "CT03",
    sectionId: "case-contoso-travel",
    unit: "Unit 4",
    domain: "Justify travel-assistant fine-tuning",
    type: "multiple",
    prompt: "After prompt and RAG improvements, which three findings would support evaluating supervised fine-tuning for Contoso? Select three answers.",
    options: [
      "The brand voice is still inconsistent across representative requests.",
      "The required recommendation schema is still violated frequently.",
      "The repeated few-shot prompt materially increases token cost and latency.",
      "The catalog changes every few minutes.",
      "The search index omits several current hotels.",
      "The team has not measured base-model behavior."
    ],
    correct: [
      "The brand voice is still inconsistent across representative requests.",
      "The required recommendation schema is still violated frequently.",
      "The repeated few-shot prompt materially increases token cost and latency."
    ],
    selectCount: 3,
    rationale: "Persistent style and schema problems, plus an expensive repeated demonstration prompt, are fine-tuning motivations. Catalog freshness and retrieval omissions belong to the RAG pipeline, and a missing baseline must be corrected before training."
  },
  {
    id: "CT04",
    sectionId: "case-contoso-travel",
    unit: "Units 2, 3, 4, and 6",
    domain: "Run a comparative optimization experiment",
    type: "order",
    prompt: "Arrange Contoso's activities into a defensible experiment modeled on the module and 04b lab.",
    items: [
      "Compare base, prompted-and-grounded, and fine-tuned variants on quality, consistency, latency, and cost.",
      "Build RAG over the current catalog and retest the same cases.",
      "Record the gpt-5 base deployment's results on the representative evaluation set.",
      "Create and submit supervised training data that demonstrates the approved voice and format.",
      "Test a system message and few-shot examples against the baseline."
    ],
    correct: [
      "Record the gpt-5 base deployment's results on the representative evaluation set.",
      "Test a system message and few-shot examples against the baseline.",
      "Build RAG over the current catalog and retest the same cases.",
      "Create and submit supervised training data that demonstrates the approved voice and format.",
      "Compare base, prompted-and-grounded, and fine-tuned variants on quality, consistency, latency, and cost."
    ],
    rationale: "Contoso needs a baseline before interventions. Prompting addresses behavior first, RAG addresses catalog facts, and fine-tuning is justified only after persistent consistency needs remain. The final comparison exposes both improvements and operational trade-offs."
  },
  {
    id: "FK01",
    sectionId: "case-fabrikam-knowledge",
    unit: "Unit 3",
    domain: "Diagnose enterprise retrieval",
    type: "single",
    prompt: "Evaluation shows that Fabrikam often fails to retrieve an applicable policy passage even though the passage exists in the source. What should the team improve first?",
    options: [
      "Chunking, index fields, query construction, and the hybrid retrieval configuration",
      "The fine-tuning learning rate for response tone",
      "The temperature used to generate creative prose",
      "The number of brand-voice examples in every prompt"
    ],
    correct: "Chunking, index fields, query construction, and the hybrid retrieval configuration",
    rationale: "The immediate failure is retrieval recall, so Fabrikam should diagnose the data and search pipeline. Fine-tuning cannot make missing evidence appear in the context supplied to the model."
  },
  {
    id: "FK02",
    sectionId: "case-fabrikam-knowledge",
    unit: "Unit 5",
    domain: "Balance quality, cost, and latency",
    type: "multiple",
    prompt: "Which four actions form a measured optimization plan for Fabrikam? Select four answers.",
    options: [
      "Improve and evaluate retrieval before attributing factual failures to the generator.",
      "Replace the longest repeated instructions with a concise tested system message.",
      "Consider fine-tuning only if format inconsistency persists and the savings justify training and hosting.",
      "Compare variants on groundedness, schema compliance, input tokens, latency, and cost.",
      "Fine-tune daily on every policy change instead of maintaining the index.",
      "Enable every optimization technique without measuring an intermediate result."
    ],
    correct: [
      "Improve and evaluate retrieval before attributing factual failures to the generator.",
      "Replace the longest repeated instructions with a concise tested system message.",
      "Consider fine-tuning only if format inconsistency persists and the savings justify training and hosting.",
      "Compare variants on groundedness, schema compliance, input tokens, latency, and cost."
    ],
    selectCount: 4,
    rationale: "The plan separates retrieval quality, prompt efficiency, and persistent format behavior, then measures the full trade-off. Frequently changing policies belong in the index, not repeated fine-tuning jobs."
  },
  {
    id: "FK03",
    sectionId: "case-fabrikam-knowledge",
    unit: "Units 2, 4, and 5",
    domain: "Choose efficient optimization layers",
    type: "yesno",
    prompt: "For each Fabrikam design statement, select Yes if it is true. Otherwise, select No.",
    items: [
      "Fine-tuning can reduce input-token cost if it replaces many repeated examples with learned behavior.",
      "A low temperature makes a model aware of policy updates that were never retrieved.",
      "Fabrikam should compare a fine-tuned deployment with the same baseline before accepting the added hosting cost."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Fine-tuning can embed repeated patterns and shorten prompts, but sampling settings cannot provide missing facts. Comparative evaluation is required to show that consistency or efficiency gains justify training and hosting."
  },
  {
    id: "FK04",
    sectionId: "case-fabrikam-knowledge",
    unit: "Units 3, 4, and 5",
    domain: "Map failures to interventions",
    type: "matching",
    prompt: "Match each observed Fabrikam symptom to the most direct intervention.",
    items: [
      "Answers use yesterday's superseded policy.",
      "Relevant passages are absent from the retrieved context.",
      "The correct evidence is present, but the output schema is violated intermittently.",
      "A large block of repeated examples dominates token cost and latency."
    ],
    options: [
      "Refresh the approved source and its search index.",
      "Improve chunking, query construction, and retrieval evaluation.",
      "Refine the prompt first, then evaluate fine-tuning if the behavior remains inconsistent.",
      "Shorten the prompt and evaluate whether fine-tuning can learn the repeated pattern economically."
    ],
    correct: [
      "Refresh the approved source and its search index.",
      "Improve chunking, query construction, and retrieval evaluation.",
      "Refine the prompt first, then evaluate fine-tuning if the behavior remains inconsistent.",
      "Shorten the prompt and evaluate whether fine-tuning can learn the repeated pattern economically."
    ],
    rationale: "Stale content and missed evidence are retrieval problems; intermittent formatting is a behavior problem; and a large repeated demonstration prompt is an efficiency problem. Mapping each symptom to its layer avoids unnecessary training and preserves current knowledge in RAG."
  }
];
