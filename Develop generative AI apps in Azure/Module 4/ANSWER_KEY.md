# Module 4 Answer Key

**Develop generative AI apps in Azure — Module 4: Optimize generative AI model performance with Microsoft Foundry**

Answer key for the practice assessment in [index.html](index.html). Generated from the question
bank in [questions.js](questions.js), which is the authoritative source — regenerate this file if
the bank changes.

| | |
| --- | --- |
| Questions | 50 |
| Total points | 156 |
| Sections | 3 |
| Time limit | 120 minutes |

> **Answers are recorded as text, not letters.** The assessment shuffles answer options, statement
> rows, and initial build-list items on every attempt, so "A" or "the third option" means nothing
> here. Match on the wording instead.

Partial credit applies: multiple-choice, Yes/No, matching, and build-list questions score one point
per correct selection, row, or correctly placed item.

## Quick reference

| # | ID | Unit | Type | Pts | Answer |
| --- | --- | --- | --- | ---: | --- |
| 1 | G01 | Unit 1 | Single choice | 1 | Define measurable requirements and evaluate the base model on representative inputs |
| 2 | G02 | Unit 1 | Build list | 5 | 1) Define quality, consistency, cost, and latency requirements. → 2) Measure the unmodified model on representative test cases. → 3) Iterate on system instructions, examples, and supported generation parameters. → 4) Add retrieval or fine-tuning only for requirements the prompt cannot satisfy reliably. → 5) Compare the optimized variant with the baseline and check for regressions. |
| 3 | G03 | Unit 2 | Matching | 4 | 1) Defines the model's role, boundaries, style, and response constraints; 2) Contains the current request or source input from the user; 3) Preserves earlier model output as context for a later turn; 4) Demonstrates the pattern or format the model should imitate |
| 4 | G04 | Unit 2 | Single choice | 1 | Act as a travel advisor, decline booking requests, and return three concise bullet points. |
| 5 | G05 | Unit 2 | Multiple choice | 4 | A clearly stated assistant role and desired outcome; Explicit topics or actions that are out of scope; A required output structure when the application must parse the result; A policy for ambiguous requests or missing information |
| 6 | G06 | Unit 2 | Yes / No | 3 | Yes, No, Yes |
| 7 | G07 | Unit 2 | Matching | 5 | 1) Persona pattern; 2) Format template; 3) Few-shot learning; 4) Clear delimiters or tagged sections; 5) Task decomposition |
| 8 | G08 | Unit 2 | Single choice | 1 | State the goal, constraints, and required result clearly instead of demanding a visible chain of thought. |
| 9 | G09 | Unit 2 | Single choice | 1 | One-shot learning |
| 10 | G10 | Unit 2 | Yes / No | 3 | Yes, Yes, No |
| 11 | G11 | Unit 2 | Multiple choice | 4 | Lower temperature generally favors focused, repeatable output.; Higher temperature can increase variety for creative tasks.; Top_p limits candidate tokens by cumulative probability mass.; A practical starting guideline is to tune temperature or top_p rather than changing both together. |
| 12 | G12 | Unit 2 | Single choice | 1 | A low value such as 0.2 |
| 13 | G13 | Unit 3 | Build list | 3 | 1) Retrieve information relevant to the user's question. → 2) Add the selected evidence to the model input. → 3) Generate an answer from the augmented request. |
| 14 | G14 | Unit 3 | Single choice | 1 | Instructions can guide behavior but cannot supply facts the request never provides. |
| 15 | G15 | Unit 3 | Matching | 4 | 1) Matches exact terms in the query and indexed text; 2) Uses semantic models to rank by meaning rather than only exact terms; 3) Finds nearby embedding vectors representing similar content; 4) Combines lexical and meaning-based techniques in one retrieval strategy |
| 16 | G16 | Unit 3 | Multiple choice | 4 | Answer from private organizational policies; Reflect inventory that changes every hour; Ground high-stakes factual claims in approved evidence; Use information published after the base model's training cutoff |
| 17 | G17 | Unit 3 | Yes / No | 3 | Yes, Yes, No |
| 18 | G18 | Unit 3 | Build list | 4 | 1) Add approved source content from storage or uploaded files. → 2) Create and store embeddings in an Azure AI Search index. → 3) Convert the user query for retrieval and search the index. → 4) Insert the retrieved passages into the request and generate an answer. |
| 19 | G19 | Unit 3 | Single choice | 1 | Hybrid search |
| 20 | G20 | Unit 3 | Matching | 4 | 1) Holds the authoritative documents or records; 2) Transforms content and queries into semantic vectors; 3) Stores searchable fields and returns relevant passages; 4) Uses the retrieved context to compose the final response |
| 21 | G21 | Unit 3 | Yes / No | 3 | Yes, No, Yes |
| 22 | G22 | Unit 4 | Single choice | 1 | Evaluate supervised fine-tuning with representative prompt-and-response examples. |
| 23 | G23 | Unit 4 | Matching | 5 | 1) Learns from labeled prompt-and-response examples; 2) Uses a grader and iterative rewards to improve responses; 3) Aligns behavior from preferred and non-preferred response pairs; 4) Approximates weight updates through a lower-rank representation; 5) Transfers useful behavior from a larger model to a smaller model |
| 24 | G24 | Unit 4 | Multiple choice | 5 | Enforce a brand style more consistently; Produce a defined output schema more reliably; Shorten a large repeated instruction-and-example prompt; Improve tool selection from representative tool-use examples; Distill behavior into a smaller model for lower cost or latency |
| 25 | G25 | Unit 4 | Yes / No | 3 | Yes, No, Yes |
| 26 | G26 | Unit 4 | Single choice | 1 | To determine whether the customized model improved target behavior or caused regressions |
| 27 | G27 | Unit 4 | Multiple choice | 5 | Store one valid JSON object per line in JSONL format.; Include system, user, and assistant messages in each conversation example.; Use high-quality examples representative of expected production scenarios.; Make assistant responses demonstrate the exact desired tone and format.; Use a consistent system message and also use it at inference time. |
| 28 | G28 | Unit 4 | Build list | 5 | 1) Establish a base-model evaluation baseline. → 2) Prepare and validate representative training examples. → 3) Submit and monitor the fine-tuning job. → 4) Deploy the resulting model and compare it with the base deployment. → 5) Re-evaluate after deployment and inspect regressions. |
| 29 | G29 | Unit 4 | Matching | 5 | 1) The model memorizes or specializes too closely and generalizes poorly.; 2) The customization does not learn the target pattern strongly enough.; 3) Unrepresentative examples cause systematically skewed behavior.; 4) Performance on broad language tasks declines outside the trained domain.; 5) Data or base-model changes require new validation and possibly retraining. |
| 30 | G30 | Unit 4 | Yes / No | 3 | Yes, Yes, No |
| 31 | G31 | Unit 4 | Single choice | 1 | Model drift caused by overly narrow specialization |
| 32 | G32 | Unit 5 | Matching | 4 | 1) Prompt engineering; 2) RAG; 3) Fine-tuning; 4) Prompt engineering, RAG, and fine-tuning together |
| 33 | G33 | Unit 5 | Single choice | 1 | Prompt engineering |
| 34 | G34 | Unit 5 | Multiple choice | 4 | Use RAG to retrieve current private facts.; Use fine-tuning to improve persistent brand-style consistency.; Use a system message for campaign-specific instructions and guardrails.; Evaluate the combined system against the baseline and representative cases. |
| 35 | G35 | Unit 5 | Yes / No | 3 | Yes, Yes, No |
| 36 | G36 | Unit 5 | Build list | 5 | 1) Start with prompt design, examples, and supported parameter tuning. → 2) Evaluate each change against requirements and the baseline. → 3) Add RAG if the model requires specific, private, or current knowledge. → 4) Add fine-tuning if persistent style or format remains inconsistent. → 5) Combine only the layers required by measured application needs. |
| 37 | G37 | Unit 5 | Single choice | 1 | RAG for current policies and fine-tuning for the persistent disclosure format |
| 38 | G38 | Unit 6 | Single choice | 1 | It provides a base-model behavior baseline for comparison. |
| 39 | G39 | Unit 6 | Build list | 6 | 1) Create a Foundry project and deploy the gpt-5 base model. → 2) Submit the supervised fine-tuning job and monitor it while other work continues. → 3) Test and refine the base model's travel-assistant instructions. → 4) Review the JSONL conversations that demonstrate the desired style. → 5) Test the automatically deployed fine-tuned model with the same instructions and prompts. → 6) Delete the exercise resource group when it is no longer needed. |
| 40 | G40 | Unit 6 | Matching | 6 | 1) gpt-5; 2) travel-finetune-hotel.jsonl; 3) Supervised; 4) Standard; 5) ft-travel; 6) Automatically deploy as a Developer deployment |
| 41 | G41 | Unit 7 | Matching | 5 | 1) Defines request-time role, behavior, and output constraints; 2) Supplies external domain-specific or current evidence; 3) Controls the degree of sampling variability; 4) Improves learned consistency of style, behavior, or format; 5) Separates changing facts, persistent behavior, and session instructions into appropriate layers |
| 42 | G42 | Unit 8 | Multiple choice | 4 | Start with prompt engineering and a measured baseline.; Use RAG when answers require private, current, or source-grounded knowledge.; Consider fine-tuning when prompt engineering cannot make behavior sufficiently consistent.; Combine techniques only when distinct measured requirements justify the added layers. |
| 43 | CT01 | Unit 2 | Single choice | 1 | Create and evaluate a clear system message with an explicit format template. |
| 44 | CT02 | Unit 3 | Single choice | 1 | Retrieve relevant current catalog records at request time and include them as grounded context. |
| 45 | CT03 | Unit 4 | Multiple choice | 3 | The brand voice is still inconsistent across representative requests.; The required recommendation schema is still violated frequently.; The repeated few-shot prompt materially increases token cost and latency. |
| 46 | CT04 | Units 2, 3, 4, and 6 | Build list | 5 | 1) Record the gpt-5 base deployment's results on the representative evaluation set. → 2) Test a system message and few-shot examples against the baseline. → 3) Build RAG over the current catalog and retest the same cases. → 4) Create and submit supervised training data that demonstrates the approved voice and format. → 5) Compare base, prompted-and-grounded, and fine-tuned variants on quality, consistency, latency, and cost. |
| 47 | FK01 | Unit 3 | Single choice | 1 | Chunking, index fields, query construction, and the hybrid retrieval configuration |
| 48 | FK02 | Unit 5 | Multiple choice | 4 | Improve and evaluate retrieval before attributing factual failures to the generator.; Replace the longest repeated instructions with a concise tested system message.; Consider fine-tuning only if format inconsistency persists and the savings justify training and hosting.; Compare variants on groundedness, schema compliance, input tokens, latency, and cost. |
| 49 | FK03 | Units 2, 4, and 5 | Yes / No | 3 | Yes, No, Yes |
| 50 | FK04 | Units 3, 4, and 5 | Matching | 4 | 1) Refresh the approved source and its search index.; 2) Improve chunking, query construction, and retrieval evaluation.; 3) Refine the prompt first, then evaluate fine-tuning if the behavior remains inconsistent.; 4) Shorten the prompt and evaluate whether fine-tuning can learn the repeated pattern economically. |

## General Questions

*42 questions · 134 points*

### 1. G01 — Unit 1

*Single choice · Plan model optimization · 1 point*

A base language model produces useful answers but does not consistently meet an application's accuracy, tone, and format requirements. What should the team do before choosing an optimization technique?

**Answer:** Define measurable requirements and evaluate the base model on representative inputs

**Rationale.** Optimization should begin with explicit success criteria and a baseline measured on representative data. Without that evidence, the team cannot tell whether prompt changes, retrieval, or fine-tuning improve the application or merely change it.

### 2. G02 — Unit 1

*Build list · Plan model optimization · 5 points*

Arrange these activities into an evidence-driven optimization sequence.

**Answer** (correct sequence):

1. Define quality, consistency, cost, and latency requirements.
2. Measure the unmodified model on representative test cases.
3. Iterate on system instructions, examples, and supported generation parameters.
4. Add retrieval or fine-tuning only for requirements the prompt cannot satisfy reliably.
5. Compare the optimized variant with the baseline and check for regressions.

**Rationale.** The team first defines the target, establishes a baseline, and tries the lowest-cost optimization. It then adds RAG for missing context or fine-tuning for persistent behavior problems and validates the result against the same baseline.

### 3. G03 — Unit 2

*Matching · Engineer effective prompts · 4 points*

Match each chat-prompt component to its primary purpose.

**Answer:**

| Item | Match |
| --- | --- |
| System message | Defines the model's role, boundaries, style, and response constraints |
| User message | Contains the current request or source input from the user |
| Assistant message in retained history | Preserves earlier model output as context for a later turn |
| Example input/output pair | Demonstrates the pattern or format the model should imitate |

**Rationale.** These components have separate roles: the system message establishes behavior, the user message supplies the request, assistant history preserves conversational context, and examples demonstrate the desired pattern.

### 4. G04 — Unit 2

*Single choice · Engineer effective prompts · 1 point*

Which instruction belongs most naturally in a system message?

**Answer:** Act as a travel advisor, decline booking requests, and return three concise bullet points.

**Rationale.** A system message defines role, boundaries, tone, and output format. A user question belongs in user input, retrieval is an application operation, and weight updates require training rather than prompting.

### 5. G05 — Unit 2

*Multiple choice · Engineer effective prompts · 4 points*

Which four elements make a system message more operationally useful? Select four answers.

**Answer** (select 4):

- A clearly stated assistant role and desired outcome
- Explicit topics or actions that are out of scope
- A required output structure when the application must parse the result
- A policy for ambiguous requests or missing information

**Rationale.** A strong system message states the role, boundaries, output expectations, and what to do when uncertain. Instructions influence behavior but do not guarantee compliance, and indiscriminately inserting all documents wastes context and does not ensure relevance.

### 6. G06 — Unit 2

*Yes / No · Engineer effective prompts · 3 points*

For each statement about system messages, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A system message can guide tone and specify an output format. | **Yes** |
| A detailed system message permanently changes the model's trained weights. | **No** |
| A system message should still be tested with representative and adversarial inputs. | **Yes** |

**Rationale.** System messages guide request-time behavior; they do not retrain the model. Because compliance is probabilistic, the application must evaluate the instructions and layer other safeguards where needed.

### 7. G07 — Unit 2

*Matching · Apply prompt patterns · 5 points*

Match each prompt design need to the most appropriate pattern.

**Answer:**

| Item | Match |
| --- | --- |
| Write from the perspective of an experienced technical marketer. | Persona pattern |
| Return hotel data with the same named fields every time. | Format template |
| Classify a message by imitating several labeled examples. | Few-shot learning |
| Separate instructions, reference text, and examples unambiguously. | Clear delimiters or tagged sections |
| Reduce errors in a complex request by dividing it into explicit stages. | Task decomposition |

**Rationale.** Personas establish perspective, templates define structure, few-shot examples demonstrate a mapping, delimiters distinguish prompt sections, and decomposition turns a complicated task into smaller verifiable steps.

### 8. G08 — Unit 2

*Single choice · Apply prompt patterns · 1 point*

A team is using a reasoning model from a family that performs internal step-by-step reasoning. Which prompt change best follows the module's guidance?

**Answer:** State the goal, constraints, and required result clearly instead of demanding a visible chain of thought.

**Rationale.** Explicit chain-of-thought prompting is presented for non-reasoning models. A reasoning model still needs a clear task and constraints, but the application should not depend on disclosure of hidden reasoning.

### 9. G09 — Unit 2

*Single choice · Apply prompt patterns · 1 point*

A classification prompt contains one labeled example before the unlabeled request. Which prompting approach is this?

**Answer:** One-shot learning

**Rationale.** One example makes the prompt one-shot. Zero-shot has no examples, few-shot uses multiple examples, and neither RAG nor fine-tuning is implied by an in-prompt demonstration.

### 10. G10 — Unit 2

*Yes / No · Structure prompts · 3 points*

For each prompt-structure statement, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Headings, XML-style tags, or separators can help distinguish instructions from source content. | **Yes** |
| Text near the end of a prompt can have disproportionate influence because of recency bias. | **Yes** |
| Repeating a critical instruction at the end always guarantees that the model follows it. | **No** |

**Rationale.** Clear boundaries reduce ambiguity, and recency bias can make later text more influential. Repetition can help but does not turn probabilistic behavior into a guarantee.

### 11. G11 — Unit 2

*Multiple choice · Configure generation parameters · 4 points*

Which four statements about temperature and top_p are accurate? Select four answers.

**Answer** (select 4):

- Lower temperature generally favors focused, repeatable output.
- Higher temperature can increase variety for creative tasks.
- Top_p limits candidate tokens by cumulative probability mass.
- A practical starting guideline is to tune temperature or top_p rather than changing both together.

**Rationale.** Both settings affect sampling at inference time. Temperature changes randomness, while top_p restricts the probability mass considered. Neither performs retrieval nor training, and changing both simultaneously makes the effect harder to attribute.

### 12. G12 — Unit 2

*Single choice · Configure generation parameters · 1 point*

A hotel-amenity answer must be factual and stable across repeated requests. Which initial temperature choice is most appropriate?

**Answer:** A low value such as 0.2

**Rationale.** A low temperature favors focused, less variable output and is a sensible starting point for factual tasks. It does not guarantee correctness, so grounding and evaluation may still be required.

### 13. G13 — Unit 3

*Build list · Implement RAG · 3 points*

Arrange the core RAG stages in the order used for one user request.

**Answer** (correct sequence):

1. Retrieve information relevant to the user's question.
2. Add the selected evidence to the model input.
3. Generate an answer from the augmented request.

**Rationale.** RAG means retrieve, augment, and generate. The application first finds relevant evidence, supplies it as context, and then asks the model to answer from that augmented input.

### 14. G14 — Unit 3

*Single choice · Ground model responses · 1 point*

Why can prompt engineering alone not reliably answer questions about a private catalog that was updated after the model was trained?

**Answer:** Instructions can guide behavior but cannot supply facts the request never provides.

**Rationale.** Prompt engineering controls how the model responds, but the model still needs the relevant facts. RAG retrieves current or private evidence and inserts it into the request without retraining the model.

### 15. G15 — Unit 3

*Matching · Choose retrieval methods · 4 points*

Match each Azure AI Search approach to its defining behavior.

**Answer:**

| Item | Match |
| --- | --- |
| Keyword search | Matches exact terms in the query and indexed text |
| Semantic search | Uses semantic models to rank by meaning rather than only exact terms |
| Vector search | Finds nearby embedding vectors representing similar content |
| Hybrid search | Combines lexical and meaning-based techniques in one retrieval strategy |

**Rationale.** Keyword search is lexical, semantic search interprets meaning, vector search compares embeddings, and hybrid search combines approaches. The module recommends hybrid search as a strong default for generative AI retrieval.

### 16. G16 — Unit 3

*Multiple choice · Select RAG scenarios · 4 points*

Which four requirements are strong reasons to use RAG? Select four answers.

**Answer** (select 4):

- Answer from private organizational policies
- Reflect inventory that changes every hour
- Ground high-stakes factual claims in approved evidence
- Use information published after the base model's training cutoff

**Rationale.** RAG is designed for private, current, domain-specific, and evidence-sensitive knowledge. Fine-tuning addresses persistent behavior patterns, while no optimization removes the need for evaluation.

### 17. G17 — Unit 3

*Yes / No · Use embeddings · 3 points*

For each statement about embeddings and vector retrieval, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| An embedding represents semantic features as a numeric vector. | **Yes** |
| Semantically similar text can have nearby vectors even when it uses different words. | **Yes** |
| A cosine similarity value near 1 generally indicates low semantic similarity. | **No** |

**Rationale.** Embeddings encode meaning numerically, enabling semantically similar passages to be found without exact wording. For cosine similarity, a value near 1 indicates strong similarity, not weak similarity.

### 18. G18 — Unit 3

*Build list · Build a retrieval pipeline · 4 points*

Arrange these implementation activities from data preparation through a grounded response.

**Answer** (correct sequence):

1. Add approved source content from storage or uploaded files.
2. Create and store embeddings in an Azure AI Search index.
3. Convert the user query for retrieval and search the index.
4. Insert the retrieved passages into the request and generate an answer.

**Rationale.** Content must be available before it can be indexed. At request time the query is represented for search, relevant passages are retrieved, and those passages augment the model input.

### 19. G19 — Unit 3

*Single choice · Choose retrieval methods · 1 point*

A knowledge base contains exact product codes as well as natural-language descriptions. Which search approach best preserves exact matching while also finding semantically related passages?

**Answer:** Hybrid search

**Rationale.** Hybrid search combines lexical signals that retain exact product-code matches with vector or semantic signals that capture meaning. Using only one side can miss relevant evidence.

### 20. G20 — Unit 3

*Matching · Design RAG components · 4 points*

Match each RAG component to its responsibility.

**Answer:**

| Item | Match |
| --- | --- |
| Approved data source | Holds the authoritative documents or records |
| Embedding model | Transforms content and queries into semantic vectors |
| Azure AI Search index | Stores searchable fields and returns relevant passages |
| Generation model | Uses the retrieved context to compose the final response |

**Rationale.** A RAG system separates authority, representation, retrieval, and generation. Understanding these boundaries helps diagnose whether a failure originated in the data, index, search step, or model response.

### 21. G21 — Unit 3

*Yes / No · Evaluate RAG · 3 points*

For each statement about RAG quality, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Response quality depends partly on source quality, chunking, indexing, and retrieval relevance. | **Yes** |
| Adding RAG guarantees that every generated statement is factually correct. | **No** |
| Frequently changing data can be refreshed in the index without retraining the language model. | **Yes** |

**Rationale.** RAG can improve grounding, but weak sources or retrieval can still produce poor context and generation can still fail. Its advantage for dynamic knowledge is that the external source and index can be updated independently of model training.

### 22. G22 — Unit 4

*Single choice · Decide when to fine-tune · 1 point*

A model has access to all required facts and receives a tested system message with examples, but it still violates the required response schema unpredictably. Which next step is most appropriate?

**Answer:** Evaluate supervised fine-tuning with representative prompt-and-response examples.

**Rationale.** Persistent style or format inconsistency after prompt engineering is a suitable fine-tuning scenario. RAG addresses missing knowledge, while a higher temperature would generally increase variability.

### 23. G23 — Unit 4

*Matching · Compare fine-tuning methods · 5 points*

Match each customization term to its description.

**Answer:**

| Item | Match |
| --- | --- |
| Supervised fine-tuning | Learns from labeled prompt-and-response examples |
| Reinforcement fine-tuning | Uses a grader and iterative rewards to improve responses |
| Direct Preference Optimization | Aligns behavior from preferred and non-preferred response pairs |
| LoRA | Approximates weight updates through a lower-rank representation |
| Distillation | Transfers useful behavior from a larger model to a smaller model |

**Rationale.** SFT learns demonstrations, RFT optimizes against grader feedback, and DPO learns pairwise preferences. LoRA makes adaptation more efficient, while distillation targets a smaller and potentially cheaper or faster model.

### 24. G24 — Unit 4

*Multiple choice · Select fine-tuning scenarios · 5 points*

Which five goals can justify evaluating fine-tuning? Select five answers.

**Answer** (select 5):

- Enforce a brand style more consistently
- Produce a defined output schema more reliably
- Shorten a large repeated instruction-and-example prompt
- Improve tool selection from representative tool-use examples
- Distill behavior into a smaller model for lower cost or latency

**Rationale.** Fine-tuning can improve persistent behavior, embed demonstrated patterns, reduce repeated prompt content, and support distillation. It is not a retrieval mechanism for current facts and introduces rather than eliminates lifecycle costs.

### 25. G25 — Unit 4

*Yes / No · Understand fine-tuning · 3 points*

For each fine-tuning statement, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Fine-tuning adjusts a pretrained model using a smaller task-specific dataset. | **Yes** |
| Fine-tuning a model on last month's catalog is the preferred way to retrieve today's prices. | **No** |
| A fine-tuned model generally retains broad capabilities while learning specialized patterns. | **Yes** |

**Rationale.** Fine-tuning specializes a pretrained model by changing its learned behavior. Fast-changing facts should remain in an external source retrieved at request time, not be frozen into periodic training data.

### 26. G26 — Unit 4

*Single choice · Evaluate fine-tuning · 1 point*

Why must a team record a base-model baseline before fine-tuning?

**Answer:** To determine whether the customized model improved target behavior or caused regressions

**Rationale.** A baseline provides comparative evidence. The same representative tests should be run against the base and fine-tuned deployments so quality, consistency, cost, and latency trade-offs are visible.

### 27. G27 — Unit 4

*Multiple choice · Prepare fine-tuning data · 5 points*

Which five practices support a useful supervised fine-tuning dataset for a chat model? Select five answers.

**Answer** (select 5):

- Store one valid JSON object per line in JSONL format.
- Include system, user, and assistant messages in each conversation example.
- Use high-quality examples representative of expected production scenarios.
- Make assistant responses demonstrate the exact desired tone and format.
- Use a consistent system message and also use it at inference time.

**Rationale.** The dataset should be valid JSONL and consistently demonstrate the production interaction and target output. Contradictory or unrepresentative examples teach conflicting patterns, and omitting the system message tends to reduce accuracy.

### 28. G28 — Unit 4

*Build list · Run a fine-tuning lifecycle · 5 points*

Arrange these fine-tuning activities into a defensible lifecycle.

**Answer** (correct sequence):

1. Establish a base-model evaluation baseline.
2. Prepare and validate representative training examples.
3. Submit and monitor the fine-tuning job.
4. Deploy the resulting model and compare it with the base deployment.
5. Re-evaluate after deployment and inspect regressions.

**Rationale.** The baseline precedes training, clean data precedes job submission, and a completed model must be deployed before comparative inference testing. Final evaluation determines whether the result is worth operating.

### 29. G29 — Unit 4

*Matching · Manage fine-tuning risks · 5 points*

Match each fine-tuning risk or cost to its practical meaning.

**Answer:**

| Item | Match |
| --- | --- |
| Overfitting | The model memorizes or specializes too closely and generalizes poorly. |
| Underfitting | The customization does not learn the target pattern strongly enough. |
| Bias from training data | Unrepresentative examples cause systematically skewed behavior. |
| Model drift from narrow specialization | Performance on broad language tasks declines outside the trained domain. |
| Maintenance cost | Data or base-model changes require new validation and possibly retraining. |

**Rationale.** Fine-tuning has both model-quality risks and lifecycle costs. Dataset design, hyperparameter experiments, broad regression tests, and ongoing maintenance are part of the engineering work.

### 30. G30 — Unit 4

*Yes / No · Prepare fine-tuning data · 3 points*

For each statement about training and inference messages, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A consistent nonempty system message in training examples can improve learned behavior. | **Yes** |
| The system message used during training should also be supplied when the fine-tuned model is used for inference. | **Yes** |
| Once a model is fine-tuned, no further prompt instructions or evaluation are ever useful. | **No** |

**Rationale.** The module recommends a consistent system message in training and reuse of that message at inference. Fine-tuning establishes baseline behavior, while request-specific prompts, guardrails, and continuing evaluation still matter.

### 31. G31 — Unit 4

*Single choice · Manage fine-tuning risks · 1 point*

After customization, a model follows the target support script well but performs worse on ordinary language tasks outside support. Which challenge does this illustrate?

**Answer:** Model drift caused by overly narrow specialization

**Rationale.** A model can become less effective outside its fine-tuned domain when specialization is too narrow. Broad regression tests help reveal this loss of general capability.

### 32. G32 — Unit 5

*Matching · Choose optimization strategies · 4 points*

Match each requirement or observed gap to the strategy that most directly addresses it.

**Answer:**

| Item | Match |
| --- | --- |
| Quickly change tone and request-time instructions | Prompt engineering |
| Answer from a catalog that changes frequently | RAG |
| After tested prompts remain inconsistent, make a stable schema and brand style more reliable | Fine-tuning |
| Use current catalog facts with a consistent brand voice and session-specific guardrails | Prompt engineering, RAG, and fine-tuning together |

**Rationale.** Prompting controls request-time behavior, RAG supplies changing facts, and fine-tuning improves persistent patterns. Demanding applications can layer all three because each solves a different problem.

### 33. G33 — Unit 5

*Single choice · Choose optimization strategies · 1 point*

Which strategy should normally be tested first when optimizing a new generative AI application?

**Answer:** Prompt engineering

**Rationale.** Prompt engineering is the fastest, least complex, and lowest-upfront-cost option. Teams should start simple, evaluate, and add retrieval or fine-tuning only when requirements show that prompting is insufficient.

### 34. G34 — Unit 5

*Multiple choice · Combine optimization strategies · 4 points*

An application requires current private facts, a stable brand style, and campaign-specific instructions. Which four design choices align with those needs? Select four answers.

**Answer** (select 4):

- Use RAG to retrieve current private facts.
- Use fine-tuning to improve persistent brand-style consistency.
- Use a system message for campaign-specific instructions and guardrails.
- Evaluate the combined system against the baseline and representative cases.

**Rationale.** The three optimization layers address knowledge, persistent behavior, and request-specific direction. Evaluation remains necessary because retrieval and generation can each introduce failure modes.

### 35. G35 — Unit 5

*Yes / No · Compare optimization trade-offs · 3 points*

For each strategy trade-off, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Long prompts can increase per-request token use and latency. | **Yes** |
| RAG adds search, storage, indexing, and retrieval-quality concerns. | **Yes** |
| Fine-tuning has no upfront training or ongoing hosting cost. | **No** |

**Rationale.** Prompting can become expensive when repeated context is large, RAG introduces retrieval infrastructure, and fine-tuning has the highest upfront complexity plus training, hosting, data, and maintenance costs.

### 36. G36 — Unit 5

*Build list · Apply the optimization decision framework · 5 points*

Arrange the module's incremental strategy decisions in order.

**Answer** (correct sequence):

1. Start with prompt design, examples, and supported parameter tuning.
2. Evaluate each change against requirements and the baseline.
3. Add RAG if the model requires specific, private, or current knowledge.
4. Add fine-tuning if persistent style or format remains inconsistent.
5. Combine only the layers required by measured application needs.

**Rationale.** The framework begins with the simplest intervention and evidence. RAG addresses a knowledge gap, fine-tuning addresses a persistent behavior gap, and combinations should be justified rather than assumed.

### 37. G37 — Unit 5

*Single choice · Combine optimization strategies · 1 point*

A service must answer with today's policy facts and use a highly consistent regulated disclosure format. Which combination most directly addresses both requirements?

**Answer:** RAG for current policies and fine-tuning for the persistent disclosure format

**Rationale.** RAG supplies changing evidence, while fine-tuning can improve consistent behavior and structure. Request-time instructions and validation can still be layered on top.

### 38. G38 — Unit 6

*Single choice · Complete the gpt-5 fine-tuning exercise · 1 point*

In the 04b exercise, why is a base gpt-5 deployment created before the fine-tuning job?

**Answer:** It provides a base-model behavior baseline for comparison.

**Rationale.** The lab tests a normal gpt-5 deployment first so the team can compare its responses with the fine-tuned deployment using aligned instructions and prompts.

### 39. G39 — Unit 6

*Build list · Complete the gpt-5 fine-tuning exercise · 6 points*

Arrange these major 04b lab activities in the documented sequence.

**Answer** (correct sequence):

1. Create a Foundry project and deploy the gpt-5 base model.
2. Submit the supervised fine-tuning job and monitor it while other work continues.
3. Test and refine the base model's travel-assistant instructions.
4. Review the JSONL conversations that demonstrate the desired style.
5. Test the automatically deployed fine-tuned model with the same instructions and prompts.
6. Delete the exercise resource group when it is no longer needed.

**Rationale.** The lab deploys the base model, starts the long-running training job early, uses the waiting time to establish base behavior, inspects the examples, compares the finished deployment, and finally cleans up billable resources.

### 40. G40 — Unit 6

*Matching · Configure the gpt-5 fine-tuning exercise · 6 points*

Match each 04b fine-tuning setting to the value used in the exercise.

**Answer:**

| Item | Match |
| --- | --- |
| Base model | gpt-5 |
| Training file | travel-finetune-hotel.jsonl |
| Customization method | Supervised |
| Training type | Standard |
| Model suffix | ft-travel |
| Deployment behavior | Automatically deploy as a Developer deployment |

**Rationale.** The current lab configures supervised Standard training for gpt-5, uploads travel-finetune-hotel.jsonl, uses the ft-travel suffix, and requests automatic deployment with the Developer deployment type.

### 41. G41 — Unit 7

*Matching · Validate assessment concepts · 5 points*

Match each optimization concept to the requirement it directly addresses.

**Answer:**

| Item | Match |
| --- | --- |
| System message | Defines request-time role, behavior, and output constraints |
| RAG | Supplies external domain-specific or current evidence |
| Temperature | Controls the degree of sampling variability |
| Fine-tuning | Improves learned consistency of style, behavior, or format |
| Combined strategy | Separates changing facts, persistent behavior, and session instructions into appropriate layers |

**Rationale.** These are the core distinctions tested by the official assessment: prompting guides behavior, RAG provides knowledge, temperature affects variation, fine-tuning changes learned consistency, and a combined design assigns each concern to the right layer.

### 42. G42 — Unit 8

*Multiple choice · Synthesize optimization decisions · 4 points*

Which four principles summarize a sound model-optimization approach? Select four answers.

**Answer** (select 4):

- Start with prompt engineering and a measured baseline.
- Use RAG when answers require private, current, or source-grounded knowledge.
- Consider fine-tuning when prompt engineering cannot make behavior sufficiently consistent.
- Combine techniques only when distinct measured requirements justify the added layers.

**Rationale.** The module treats prompt engineering, RAG, and fine-tuning as complementary. Start simple, map each technique to a requirement, and use repeatable evaluation to decide whether added cost and complexity are worthwhile.

## Case Study 1 — Contoso Travel

> **Scenario:** Contoso Travel is improving a customer trip-planning assistant. Its hotel catalog, prices, and availability change throughout the day. Responses must use only approved catalog facts, follow a warm brand voice, avoid offering booking services the company does not provide, and use a predictable recommendation format. The team has a representative evaluation set, a deployed gpt-5 base model, and high-quality example conversations. It must improve quality without adding unnecessary cost or latency.

### 43. CT01 — Unit 2

*Single choice · Improve travel-assistant behavior · 1 point*

Contoso first wants to define the assistant's role, prohibit unsupported booking offers, and require a three-item recommendation format. What is the lowest-complexity first step?

**Answer:** Create and evaluate a clear system message with an explicit format template.

**Rationale.** These are request-time role, boundary, and formatting requirements, so prompt engineering is the appropriate first intervention. Contoso should measure compliance before deciding that persistent training is necessary.

### 44. CT02 — Unit 3

*Single choice · Ground catalog recommendations · 1 point*

Which design best reduces the risk that Contoso's assistant invents hotel prices or recommends properties that are no longer available?

**Answer:** Retrieve relevant current catalog records at request time and include them as grounded context.

**Rationale.** Availability and prices change frequently, making RAG the correct knowledge layer. Prompting can tell the model how to use evidence, but it cannot supply current facts by itself.

### 45. CT03 — Unit 4

*Multiple choice · Justify travel-assistant fine-tuning · 3 points*

After prompt and RAG improvements, which three findings would support evaluating supervised fine-tuning for Contoso? Select three answers.

**Answer** (select 3):

- The brand voice is still inconsistent across representative requests.
- The required recommendation schema is still violated frequently.
- The repeated few-shot prompt materially increases token cost and latency.

**Rationale.** Persistent style and schema problems, plus an expensive repeated demonstration prompt, are fine-tuning motivations. Catalog freshness and retrieval omissions belong to the RAG pipeline, and a missing baseline must be corrected before training.

### 46. CT04 — Units 2, 3, 4, and 6

*Build list · Run a comparative optimization experiment · 5 points*

Arrange Contoso's activities into a defensible experiment modeled on the module and 04b lab.

**Answer** (correct sequence):

1. Record the gpt-5 base deployment's results on the representative evaluation set.
2. Test a system message and few-shot examples against the baseline.
3. Build RAG over the current catalog and retest the same cases.
4. Create and submit supervised training data that demonstrates the approved voice and format.
5. Compare base, prompted-and-grounded, and fine-tuned variants on quality, consistency, latency, and cost.

**Rationale.** Contoso needs a baseline before interventions. Prompting addresses behavior first, RAG addresses catalog facts, and fine-tuning is justified only after persistent consistency needs remain. The final comparison exposes both improvements and operational trade-offs.

## Case Study 2 — Fabrikam Knowledge

> **Scenario:** Fabrikam is building an internal support assistant over policies and technical runbooks that change daily. Answers must be grounded in approved sources and returned in a concise schema. The current application sends a long instruction prompt with many examples, increasing token cost and latency, yet formatting is still inconsistent. Retrieval testing also shows that some relevant passages are missed. Fabrikam can improve its Azure AI Search index and can prepare a supervised fine-tuning dataset, but it must justify each additional layer with measured results.

### 47. FK01 — Unit 3

*Single choice · Diagnose enterprise retrieval · 1 point*

Evaluation shows that Fabrikam often fails to retrieve an applicable policy passage even though the passage exists in the source. What should the team improve first?

**Answer:** Chunking, index fields, query construction, and the hybrid retrieval configuration

**Rationale.** The immediate failure is retrieval recall, so Fabrikam should diagnose the data and search pipeline. Fine-tuning cannot make missing evidence appear in the context supplied to the model.

### 48. FK02 — Unit 5

*Multiple choice · Balance quality, cost, and latency · 4 points*

Which four actions form a measured optimization plan for Fabrikam? Select four answers.

**Answer** (select 4):

- Improve and evaluate retrieval before attributing factual failures to the generator.
- Replace the longest repeated instructions with a concise tested system message.
- Consider fine-tuning only if format inconsistency persists and the savings justify training and hosting.
- Compare variants on groundedness, schema compliance, input tokens, latency, and cost.

**Rationale.** The plan separates retrieval quality, prompt efficiency, and persistent format behavior, then measures the full trade-off. Frequently changing policies belong in the index, not repeated fine-tuning jobs.

### 49. FK03 — Units 2, 4, and 5

*Yes / No · Choose efficient optimization layers · 3 points*

For each Fabrikam design statement, select Yes if it is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Fine-tuning can reduce input-token cost if it replaces many repeated examples with learned behavior. | **Yes** |
| A low temperature makes a model aware of policy updates that were never retrieved. | **No** |
| Fabrikam should compare a fine-tuned deployment with the same baseline before accepting the added hosting cost. | **Yes** |

**Rationale.** Fine-tuning can embed repeated patterns and shorten prompts, but sampling settings cannot provide missing facts. Comparative evaluation is required to show that consistency or efficiency gains justify training and hosting.

### 50. FK04 — Units 3, 4, and 5

*Matching · Map failures to interventions · 4 points*

Match each observed Fabrikam symptom to the most direct intervention.

**Answer:**

| Item | Match |
| --- | --- |
| Answers use yesterday's superseded policy. | Refresh the approved source and its search index. |
| Relevant passages are absent from the retrieved context. | Improve chunking, query construction, and retrieval evaluation. |
| The correct evidence is present, but the output schema is violated intermittently. | Refine the prompt first, then evaluate fine-tuning if the behavior remains inconsistent. |
| A large block of repeated examples dominates token cost and latency. | Shorten the prompt and evaluate whether fine-tuning can learn the repeated pattern economically. |

**Rationale.** Stale content and missed evidence are retrieval problems; intermittent formatting is a behavior problem; and a large repeated demonstration prompt is an efficiency problem. Mapping each symptom to its layer avoids unnecessary training and preserves current knowledge in RAG.

## Coverage by unit and domain

| Unit | Domain | Questions | Points |
| --- | --- | ---: | ---: |
| Unit 1 | Plan model optimization | 2 | 6 |
| Unit 2 | Engineer effective prompts | 4 | 12 |
| Unit 2 | Apply prompt patterns | 3 | 7 |
| Unit 2 | Structure prompts | 1 | 3 |
| Unit 2 | Configure generation parameters | 2 | 5 |
| Unit 3 | Implement RAG | 1 | 3 |
| Unit 3 | Ground model responses | 1 | 1 |
| Unit 3 | Choose retrieval methods | 2 | 5 |
| Unit 3 | Select RAG scenarios | 1 | 4 |
| Unit 3 | Use embeddings | 1 | 3 |
| Unit 3 | Build a retrieval pipeline | 1 | 4 |
| Unit 3 | Design RAG components | 1 | 4 |
| Unit 3 | Evaluate RAG | 1 | 3 |
| Unit 4 | Decide when to fine-tune | 1 | 1 |
| Unit 4 | Compare fine-tuning methods | 1 | 5 |
| Unit 4 | Select fine-tuning scenarios | 1 | 5 |
| Unit 4 | Understand fine-tuning | 1 | 3 |
| Unit 4 | Evaluate fine-tuning | 1 | 1 |
| Unit 4 | Prepare fine-tuning data | 2 | 8 |
| Unit 4 | Run a fine-tuning lifecycle | 1 | 5 |
| Unit 4 | Manage fine-tuning risks | 2 | 6 |
| Unit 5 | Choose optimization strategies | 2 | 5 |
| Unit 5 | Combine optimization strategies | 2 | 5 |
| Unit 5 | Compare optimization trade-offs | 1 | 3 |
| Unit 5 | Apply the optimization decision framework | 1 | 5 |
| Unit 6 | Complete the gpt-5 fine-tuning exercise | 2 | 7 |
| Unit 6 | Configure the gpt-5 fine-tuning exercise | 1 | 6 |
| Unit 7 | Validate assessment concepts | 1 | 5 |
| Unit 8 | Synthesize optimization decisions | 1 | 4 |
| Unit 2 | Improve travel-assistant behavior | 1 | 1 |
| Unit 3 | Ground catalog recommendations | 1 | 1 |
| Unit 4 | Justify travel-assistant fine-tuning | 1 | 3 |
| Units 2, 3, 4, and 6 | Run a comparative optimization experiment | 1 | 5 |
| Unit 3 | Diagnose enterprise retrieval | 1 | 1 |
| Unit 5 | Balance quality, cost, and latency | 1 | 4 |
| Units 2, 4, and 5 | Choose efficient optimization layers | 1 | 3 |
| Units 3, 4, and 5 | Map failures to interventions | 1 | 4 |
| **Total** | | **50** | **156** |
