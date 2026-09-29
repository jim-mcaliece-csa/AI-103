# Module 4 — Optimize generative AI model performance with Microsoft Foundry

> **Official module:** [Optimize generative AI model performance with Microsoft Foundry](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/)<br>
> **Level:** Intermediate · **Roles:** Data Scientist and AI Engineer · **Length:** Approximately 2 hours 11 minutes · **Units:** 8 · **XP:** 900<br>
> **Notes reviewed:** 2026-09-29

[Open the interactive flashcards and practice exam](index.html)

These notes cover every unit in the Microsoft Learn module and expand the distinctions that matter when choosing among prompt engineering, retrieval-augmented generation (RAG), and fine-tuning. They paraphrase the source material rather than reproducing it. Microsoft Foundry screens, supported models, fine-tuning methods, regions, deployment types, prices, and SDK interfaces change frequently, so use the linked Microsoft pages and the current portal as the source of truth for a real workload.

> **Time-sensitive lab notice:** The linked exercise currently uses `gpt-5`, a supervised Standard fine-tuning job, and a Developer deployment in North Central US or Sweden Central. Verify all four details in the current model documentation and your subscription before starting the lab.

## Learning objectives

By the end of this module, you should be able to:

- [ ] Apply prompt engineering techniques, including system messages, examples, delimiters, and generation parameters.
- [ ] Explain when a model needs grounding rather than more prompt instructions.
- [ ] Describe the retrieve, augment, and generate stages of RAG.
- [ ] Explain how embeddings, vector search, semantic search, and hybrid search support retrieval.
- [ ] Identify workloads that benefit from fine-tuning for consistent behavior.
- [ ] Distinguish supervised fine-tuning, reinforcement fine-tuning, and Direct Preference Optimization.
- [ ] Compare the time, cost, complexity, strengths, and limitations of each optimization strategy.
- [ ] Combine prompt engineering, RAG, and fine-tuning without confusing their responsibilities.
- [ ] Establish a baseline, evaluate each change, and detect regressions.

## Module map

| Unit | Topic and direct link | Duration | Central question |
| ---: | --- | ---: | --- |
| 1 | [Introduction](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/1-introduction) | 2 min | Why might a capable base model still fail an application's requirements? |
| 2 | [Optimize model output with prompt engineering](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/2-prompt-engineering) | 9 min | How can instructions, examples, structure, and parameters improve output? |
| 3 | [Ground your model with Retrieval Augmented Generation](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/3-retrieval-augmented-generation) | 9 min | How can a model answer from private, current, and domain-specific facts? |
| 4 | [Fine-tune a model for consistent behavior](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/4-fine-tune-model) | 9 min | When should desired behavior be learned from examples rather than repeated in every prompt? |
| 5 | [Compare and combine optimization strategies](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/5-compare-combine-strategies) | 7 min | Which strategy, or combination, addresses the observed failure? |
| 6 | [Exercise: Optimize generative AI model performance](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/6-exercise) | 90 min | Does a fine-tuned travel assistant behave more consistently than its base model? |
| 7 | [Module assessment](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/7-knowledge-check) | 3 min | Can you map each requirement to the correct optimization technique? |
| 8 | [Summary](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/8-summary) | 2 min | Can you optimize knowledge and behavior with the least necessary complexity? |

The durations total **131 minutes**, or **2 hours 11 minutes**.

## The optimization decision framework

Start with an observed failure, not a favorite technology:

1. **Define success.** Create representative prompts, expected behaviors, factuality requirements, safety constraints, latency goals, and cost limits.
2. **Measure the base model.** Record a baseline before changing prompts, retrieval, or weights.
3. **Improve the prompt first.** Clarify the role, task, boundaries, format, examples, and generation settings.
4. **Add RAG when knowledge is missing.** Retrieve trusted, relevant data at request time and place it in the model's context.
5. **Fine-tune when behavior remains inconsistent.** Train with high-quality examples when repeated instructions still do not reliably produce the required style, format, or task behavior.
6. **Combine only the layers the workload needs.** Prompting controls the current interaction, RAG supplies facts, and fine-tuning establishes learned behavioral tendencies.
7. **Re-evaluate every version.** An optimization can improve one dimension while degrading another.

| Primary symptom | First strategy to consider | Why |
| --- | --- | --- |
| Wrong tone, unclear format, or misunderstood task | Prompt engineering | The model has the needed knowledge but needs clearer direction. |
| Answers omit private records or recent facts | RAG | Prompt wording cannot supply information absent from the model's context. |
| Detailed prompts work only inconsistently | Fine-tuning after prompt iteration | Representative examples can make a behavior more stable. |
| Long repeated examples increase token use and latency | Fine-tuning | Learned patterns can reduce repeated prompt content. |
| Facts change frequently | RAG | Update the source or index rather than retraining a model whenever facts change. |
| Both current facts and a durable brand voice are required | RAG plus fine-tuning, supported by prompting | Each layer addresses a different requirement. |

> **Exam mindset:** Prompt engineering changes the instructions supplied for an inference. RAG changes the context supplied for an inference. Fine-tuning changes learned model behavior through additional training. None of these automatically replaces evaluation, safety controls, or application logic.

---

## Unit 1 — Introduction

[Open Unit 1](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/1-introduction)

A base language model is broadly capable, but broad capability does not guarantee that it meets a specific application's requirements. Output quality depends on the model, the request, the supplied context, generation settings, and any additional training.

The module uses a travel-agency assistant as a running scenario. Its responses must:

- Match the agency's tone of voice.
- Use real information from the agency's hotel catalog.
- Follow a dependable response format across interactions.

Those requirements reveal three different optimization problems:

| Requirement | Optimization dimension | Likely approach |
| --- | --- | --- |
| Follow a friendly role and a requested layout | Per-request behavior | Prompt engineering |
| Know the agency's actual inventory and current prices | External knowledge | RAG |
| Maintain a brand style and format reliably at scale | Learned behavioral consistency | Fine-tuning |

### Optimization is an evidence-driven loop

Optimization should follow an iterative loop:

**baseline → change one layer → evaluate → compare → retain or revise**

This sequence matters because a response that looks better in one conversation might perform worse across the full test set. A baseline makes improvement and regression measurable.

Useful evaluation dimensions include:

- Task completion and instruction following.
- Factual correctness and groundedness.
- Style, tone, and format consistency.
- Safety and policy compliance.
- Latency, token consumption, and operational cost.
- Robustness across normal, ambiguous, and adversarial inputs.

### Key takeaway

Prompt engineering, RAG, and fine-tuning are not rival products. They are complementary layers. Choose the least complex layer that corrects the measured problem, and combine layers only when requirements span multiple dimensions.

---

## Unit 2 — Optimize model output with prompt engineering

[Open Unit 2](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/2-prompt-engineering)

**Prompt engineering** is the iterative design of model input to improve the usefulness, accuracy, relevance, structure, and safety of generated output. It is normally the first optimization step because it requires no training job or retrieval infrastructure and can be tested immediately.

### Prompt components

Chat-oriented prompts commonly contain these components:

| Component | Purpose | Typical content |
| --- | --- | --- |
| **System message** | Establishes high-level role, behavior, boundaries, tone, and output rules | “Act as a travel-planning assistant; do not make reservations; return a concise itinerary.” |
| **User message** | Supplies the current request or task input | “Plan a rainy afternoon in Lisbon.” |
| **Assistant message** | Represents prior model output in a multi-turn conversation | Earlier recommendations or clarifications |
| **Examples** | Demonstrate the desired input-output pattern | Sample classification labels, response schemas, or tone |

A system message strongly influences output, but it does not guarantee compliance. Validate it with representative and adversarial tests and layer it with appropriate content filtering, application validation, and evaluation.

### Design an effective system message

A practical system-message checklist is:

1. **State the role and outcome.** Explain who the assistant represents and what a successful response accomplishes.
2. **Define scope and boundaries.** Identify allowed subjects, prohibited actions, and unsupported requests.
3. **Specify the response contract.** State the required fields, format, length, tone, or schema.
4. **Explain what to do when uncertain.** Ask a clarifying question, state insufficient information, or use an approved fallback.
5. **Separate rules from data.** Use headings, XML-like tags, Markdown fences, or other clear delimiters.
6. **Resolve conflicting instructions.** Make priorities explicit and keep the most important rule clear.
7. **Test and revise.** Evaluate more than one prompt and more than one conversation turn.

Example structure:

```text
Role:
You assist customers with travel planning.

Boundaries:
- Discuss destinations, local customs, transport, climate, and attractions.
- Do not claim to make bookings or guarantee availability.

Output:
- Begin with a one-sentence recommendation.
- Give three concise options with reasons.
- End with one clarifying question.

When evidence is missing:
Say what is unknown and ask for the missing detail.
```

This structure is easier to inspect and maintain than a dense paragraph of mixed instructions.

### Prompt patterns

#### Persona pattern

Assign a relevant perspective or professional role. A persona can influence vocabulary, priorities, and tone.

- “Explain this as an experienced travel advisor” encourages customer-oriented language.
- “Review this as a security architect” encourages attention to threats and controls.

A persona is not a substitute for factual context or authorization. It shapes the response; it does not grant expertise, access, or permissions.

#### Format-template pattern

Provide an explicit template when downstream code or users need predictable structure:

```text
Destination:
Best season:
Three activities:
Budget note:
Clarifying question:
```

For machine parsing, validate the output rather than assuming that a prompt alone guarantees valid structure.

#### Decomposition and stepwise prompting

For a complex task, split the work into smaller, verifiable stages. For example:

1. Extract the travel constraints.
2. Identify compatible destinations.
3. Rank the candidates against the constraints.
4. Produce the final recommendation.

The module discusses step-by-step reasoning prompts for non-reasoning models. Reasoning models already manage internal reasoning differently, so follow the current guidance for the selected model. In production, prefer asking for concise conclusions, evidence, or intermediate artifacts that can be verified rather than depending on hidden reasoning text.

#### Few-shot learning

Include one or more representative input-output examples:

- **Zero-shot:** no examples are supplied.
- **One-shot:** one example is supplied.
- **Few-shot:** several examples are supplied.

Few-shot examples help define labels, tone, structure, edge-case handling, and the level of detail. They affect only the current inference context; they do not permanently retrain the model.

Good examples should be:

- Correct and unambiguous.
- Representative of real inputs.
- Consistent with one another and with the system message.
- Diverse enough to show meaningful variants and boundaries.
- Free of secrets and untrusted instructions.

#### Delimiters

Clearly separate instructions, source material, examples, and user input. Useful separators include headings, triple backticks, XML-style tags, and labeled sections.

Delimiters help the model distinguish data from instructions, but they are not a complete defense against prompt injection. Treat retrieved and user-supplied content as untrusted, enforce permissions outside the model, and validate sensitive actions in application code.

#### Recency and instruction placement

Text near the end of a prompt can receive disproportionate influence. If a model repeatedly overlooks a crucial rule, simplify the prompt and restate the key constraint near the end. Do not use repetition to paper over contradictions; remove or resolve conflicting rules first.

### Configure model parameters

The module emphasizes two sampling controls:

| Parameter | Lower setting | Higher setting | Typical use |
| --- | --- | --- | --- |
| **Temperature** | More focused and repeatable | More varied and creative | Low for factual extraction; higher for ideation |
| **Top-p** | Restricts sampling to a narrower probability mass | Allows a broader probability mass | Alternative way to control diversity |

General guidance is to adjust **temperature or top-p**, not both simultaneously. Changing one variable at a time makes its effect easier to evaluate.

Important qualifications:

- A low temperature reduces variability but does not guarantee identical or correct responses.
- A high temperature can improve variety while increasing inconsistency.
- Generation parameters cannot add missing facts.
- Parameter support and valid ranges depend on the model and API.

### When prompt engineering is enough

Prompt engineering is a strong fit when the model already has the necessary knowledge and the application needs to:

- Establish a role, tone, boundary, or output layout.
- Give task-specific instructions.
- Demonstrate a small number of patterns.
- Iterate quickly without new infrastructure.
- Keep upfront implementation and training costs low.

### Limits and tradeoffs

Prompt engineering alone is insufficient when:

- The required fact is private, current, or absent from the model's training.
- Long instructions and examples consume excessive input tokens.
- The model follows the same behavior inconsistently despite careful prompt iteration.
- A policy must be enforced reliably by application controls rather than suggested to the model.

Long prompts can also increase latency and per-request cost. Measure the full prompt, retrieved context, conversation history, and output rather than counting only the visible user question.

### Prompt-engineering troubleshooting checklist

- [ ] Is the desired outcome stated plainly?
- [ ] Are role, scope, and prohibited behaviors explicit?
- [ ] Is the output format demonstrated or templated?
- [ ] Are instructions separated from user and retrieved content?
- [ ] Do examples agree with the written rules?
- [ ] Does the prompt say what to do when information is missing?
- [ ] Have ambiguous and out-of-scope requests been tested?
- [ ] Was only one sampling parameter changed at a time?
- [ ] Are failures caused by missing knowledge rather than unclear instructions?
- [ ] Were changes evaluated against a repeatable baseline?

---

## Unit 3 — Ground your model with Retrieval Augmented Generation

[Open Unit 3](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/3-retrieval-augmented-generation)

Prompt engineering can tell a model how to answer, but it cannot make unavailable information appear. A model's pretrained knowledge has a cutoff and does not inherently include an organization's private catalog, policies, tickets, or other protected records.

**Grounding** supplies trusted information that a model can use as evidence for the current response. **Retrieval-augmented generation (RAG)** retrieves relevant content at request time and adds it to the prompt before generation.

### The three stages of RAG

1. **Retrieve.** Search a trusted source or index for content relevant to the user's question.
2. **Augment.** Add the selected content to the model's context with instructions about how to use it.
3. **Generate.** Ask the model to answer from the augmented context.

```text
User question
    ↓
Search trusted data
    ↓
Select relevant passages
    ↓
Instructions + passages + question
    ↓
Grounded model response
```

The model is still generative. Grounding reduces unsupported invention but does not make every response correct. Retrieval quality, prompt construction, permissions, and output evaluation all matter.

### Embeddings and semantic similarity

An **embedding** is a numeric vector that captures semantic features of text or other content. An embedding model converts a document passage or query into a vector.

Semantically similar passages tend to be close in vector space even when they use different words. For example, “children enjoying the playground” and “kids playing happily in the park” share meaning without sharing every keyword.

**Cosine similarity** compares the angle between vectors:

- A value near 1 indicates high directional similarity.
- Lower values indicate less similarity.
- Similarity is a relevance signal, not proof that a passage is correct or sufficient.

Embedding model choice must remain compatible between indexed documents and incoming queries. Replacing an embedding model can require re-embedding and rebuilding the index.

### Indexing workflow

A common RAG preparation pipeline is:

1. Acquire content from approved sources.
2. Parse and normalize the content.
3. Split documents into useful chunks.
4. Preserve metadata such as title, source URL, permissions, category, and update date.
5. Create embeddings for the chunks.
6. Store text, vectors, and metadata in a searchable index.
7. Refresh or rebuild the index as source content changes.

Chunking creates a quality tradeoff:

- Chunks that are too large can contain unrelated material, consume context tokens, and weaken retrieval precision.
- Chunks that are too small can lose surrounding meaning and produce incomplete evidence.
- Overlap can preserve continuity, but excessive overlap creates duplicates and noise.

### Use Azure AI Search for retrieval

The module presents **Azure AI Search** as the retrieval component for RAG solutions in Microsoft Foundry. Content can originate from sources such as Azure Blob Storage, Azure Data Lake Storage Gen2, Microsoft OneLake, or directly uploaded files.

| Search technique | Primary signal | Strength | Limitation |
| --- | --- | --- | --- |
| **Keyword search** | Exact or lexical terms | Excellent for identifiers, names, and exact phrases | Can miss semantically equivalent wording |
| **Semantic search** | Semantic ranking of text results | Improves meaning-aware relevance | Depends on supported semantic configuration |
| **Vector search** | Embedding similarity | Finds related meaning despite vocabulary differences | Can miss exact constraints or return conceptually similar noise |
| **Hybrid search** | Lexical plus vector signals, often with semantic ranking | Balances exact matches and semantic similarity | Requires tuning and a well-designed index |

The module recommends **hybrid search** for generative AI applications because exact terms and semantic meaning are often both important.

### Application pattern with the Foundry SDK

The unit illustrates this application flow:

1. Create an authenticated `AIProjectClient` for a Foundry project.
2. Obtain an OpenAI-compatible client from the project client.
3. Query an Azure AI Search index for relevant passages.
4. Place the returned context in the model input with grounding instructions.
5. Generate the answer through the Responses API.
6. Return the answer with source information when the experience supports citations.

The important architectural boundary is that retrieval happens before generation. The application or managed grounding service selects the context; the model does not automatically know the complete data source.

### When to use RAG

RAG is a strong fit when:

- The model needs private or organization-specific knowledge.
- Facts change frequently, such as inventory, availability, policies, or prices.
- Answers must be based on a controlled body of evidence.
- The required information is newer than the model's training cutoff.
- Users benefit from citations or traceability to source records.
- Retraining whenever content changes would be impractical.

For the travel scenario, RAG can retrieve actual hotel names, locations, amenities, prices, and availability from the agency's catalog at request time.

### Retrieval quality determines grounding quality

A generation model cannot use evidence that retrieval failed to supply. Evaluate retrieval separately from answer generation.

| Symptom | Likely layer | What to inspect |
| --- | --- | --- |
| No relevant passage is returned | Ingestion or retrieval | Source coverage, indexing status, query, filters, embedding compatibility |
| A partly relevant passage is returned | Chunking or ranking | Chunk boundaries, overlap, top result count, hybrid configuration |
| Correct passage is returned but ignored | Prompt or generation | Grounding instructions, context placement, model behavior |
| Answer cites stale material | Refresh pipeline | Source update, indexer schedule, document version metadata |
| User sees unauthorized information | Security design | Source permissions, identity propagation, filters, access-control enforcement |
| Context exceeds the model limit | Retrieval and prompt assembly | Chunk size, duplicate passages, result count, conversation history |

### Foundry IQ

The unit points to **Foundry IQ** when agents need managed, reusable grounding without a team managing every part of its own search infrastructure. A Foundry IQ knowledge base can connect approved knowledge sources and support grounded, citation-backed retrieval for agents.

Do not infer that a managed knowledge layer removes data governance responsibilities. Source permissions, identity, freshness, quality, and production monitoring remain essential.

### RAG implementation checklist

- [ ] Identify authoritative data sources and owners.
- [ ] Define freshness and indexing requirements.
- [ ] Select a compatible embedding model.
- [ ] Choose a chunking strategy and preserve useful metadata.
- [ ] Enforce document- and user-level access controls.
- [ ] Evaluate keyword, vector, semantic, and hybrid retrieval as appropriate.
- [ ] Test retrieval recall and precision separately from answer quality.
- [ ] Instruct the model to use supplied context and admit insufficient evidence.
- [ ] Preserve source identifiers or citations in the user experience.
- [ ] Monitor failed queries, stale content, and index health.

---

## Unit 4 — Fine-tune a model for consistent behavior

[Open Unit 4](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/4-fine-tune-model)

**Fine-tuning** performs additional training on a pretrained model using task-specific examples. It changes learned behavior so that the model more consistently reproduces patterns represented in the training data.

Fine-tuning is primarily a behavioral optimization in this module. It is not the preferred mechanism for a frequently changing catalog or policy repository; RAG is normally better for dynamic facts.

### How fine-tuning differs from prompting and RAG

| Technique | What changes | Lifetime of change |
| --- | --- | --- |
| Prompt engineering | Instructions and examples in the current input | Current request or conversation |
| RAG | External facts inserted into the current input | Current request; source/index can be updated independently |
| Fine-tuning | Model parameters or an efficient learned adaptation | Persists in the resulting customized model |

### Low-Rank Adaptation

The module explains that fine-tuning uses **LoRA (Low-Rank Adaptation)**. Instead of updating every parameter in a large foundation model, LoRA learns a smaller low-rank representation of important weight changes. This reduces training compute and cost while preserving the capabilities of the base model.

LoRA makes customization more efficient; it does not eliminate the need for good data, evaluation, hosting, or maintenance.

### When fine-tuning is appropriate

Consider fine-tuning after a baseline and prompt-engineering attempts when the application needs:

- **Reliable style and tone.** Responses should consistently reflect a brand voice.
- **Stable output patterns.** The model should repeatedly follow a schema or formatting convention.
- **Shorter prompts.** Repeated instructions and examples consume too many tokens or add latency.
- **Distillation.** A smaller, cheaper model should learn task patterns demonstrated by a stronger model.
- **Improved tool-calling behavior.** Examples can teach better selection and argument construction for supported scenarios.
- **A specialized task behavior.** High-quality examples clearly show the intended transformation or response.

Do not jump to fine-tuning merely because one response is unsatisfactory. First verify the base model, prompt, test set, and factual context.

### Establish a baseline first

A baseline answers: “How well does the unmodified model satisfy the requirement?”

Without a baseline:

- Improvement cannot be quantified.
- Regressions can be mistaken for progress.
- A costly training job might solve a prompt problem.
- Poor training data can make the customized model worse without detection.

Use a held-out evaluation set that was not used as training data. Compare the base and fine-tuned deployments with the same prompts, instructions, parameters, and scoring criteria.

### Fine-tuning techniques in Microsoft Foundry

| Technique | Training signal | Best fit | Key consideration |
| --- | --- | --- | --- |
| **Supervised fine-tuning (SFT)** | Labeled prompt-and-response examples | Tasks with a clear desired response pattern | Examples must accurately demonstrate target behavior |
| **Reinforcement fine-tuning (RFT)** | A grader supplies rewards during iterative optimization | Complex tasks with multiple possible solutions and measurable quality | The grader must reflect the true objective and resist reward gaming |
| **Direct Preference Optimization (DPO)** | Pairs of preferred and non-preferred responses | Aligning output with human or organizational preferences | Preference pairs must be consistent and representative |

Techniques can be combined. For example, SFT can teach the task pattern and DPO can further align stylistic preferences.

### Prepare training data

Chat-model SFT data commonly uses **JSON Lines (`.jsonl`)**, where each line is a complete JSON object containing one conversation:

```json
{"messages":[{"role":"system","content":"You are a concise travel-planning assistant."},{"role":"user","content":"Suggest a quiet coastal activity."},{"role":"assistant","content":"Try an early-morning harbor walk, when the waterfront is calm. Would you prefer a guided route or a self-paced outing?"}]}
```

Each example should stand on its own as valid JSON. A `.jsonl` file is not one large JSON array.

The module's data guidance includes:

- Use a consistent system message across examples.
- Supply high-quality, representative examples covering expected scenarios.
- Ensure assistant responses demonstrate exactly the desired style, format, and tone.
- Plan for at least hundreds of examples; more can help when quality and coverage remain high.
- Use the same system message during inference that was represented during training.

Additional quality checks:

- Remove malformed, duplicated, contradictory, and irrelevant examples.
- Protect personal, regulated, licensed, and confidential information.
- Cover normal cases, edge cases, refusals, and ambiguity handling.
- Balance important classes and intents so frequent examples do not overwhelm rare but critical behavior.
- Separate training, validation, and final evaluation data.
- Keep provenance and version information for datasets and generated examples.
- Review model-generated training data before using it.

### Fine-tuning workflow

1. Define measurable target behavior.
2. Select and evaluate a supported base model.
3. Record baseline quality, safety, latency, and cost.
4. Build and validate representative training data.
5. Choose an appropriate customization method.
6. Submit the fine-tuning job and monitor training.
7. Deploy the customized model using a supported deployment type.
8. Evaluate it against held-out data and the base model.
9. Test safety and out-of-domain behavior.
10. Version the data, configuration, model, deployment, and results.
11. Monitor production behavior and retrain only when evidence supports it.

### Costs and risks

| Challenge | Why it matters | Mitigation |
| --- | --- | --- |
| Training cost | Compute is consumed before the model serves a request | Start with prompt iteration and a justified baseline gap |
| Hosting cost | A customized deployment can incur ongoing charges | Delete unused deployments and measure business value |
| Data quality | Bad examples teach bad behavior | Validate, deduplicate, review, and version data |
| Overfitting | The model memorizes patterns and performs poorly on new inputs | Use diverse examples and held-out evaluation data |
| Underfitting | The model does not learn the desired pattern sufficiently | Improve data coverage and tune supported training settings |
| Bias amplification | Unbalanced examples can reinforce undesirable behavior | Audit representation and evaluate safety by subgroup and scenario |
| Maintenance | New base models or requirements can make a customization stale | Track lineage and plan re-evaluation or retraining |
| Model drift from specialization | General capability can degrade outside the target domain | Test both target and important general-purpose cases |
| Hyperparameter sensitivity | Epochs, batch size, and learning rate affect results | Change settings experimentally and compare runs |

### Fine-tuning troubleshooting checklist

- [ ] Is the target behavior specific and measurable?
- [ ] Was a base-model baseline recorded?
- [ ] Has prompt engineering been tested first?
- [ ] Is the selected model and version currently fine-tunable in the chosen region?
- [ ] Is each JSONL line valid and in the required schema?
- [ ] Are examples consistent, representative, and free of sensitive data?
- [ ] Is there held-out evaluation data?
- [ ] Does the deployment use the intended customized model rather than the base model?
- [ ] Are the same inference instructions used for a fair comparison?
- [ ] Have target behavior, safety, latency, and cost all been compared?

---

## Unit 5 — Compare and combine optimization strategies

[Open Unit 5](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/5-compare-combine-strategies)

The three strategies optimize different dimensions:

- **Prompt engineering** tells the model how to behave in the current interaction.
- **RAG** gives the model relevant external knowledge for the current interaction.
- **Fine-tuning** makes desired behavioral patterns more consistent in a customized model.

### Strategy comparison

| Dimension | Prompt engineering | RAG | Fine-tuning |
| --- | --- | --- | --- |
| Primary goal | Guide task, tone, format, and boundaries | Improve factual context with external data | Improve persistent behavioral consistency |
| Implementation time | Low | Medium | High |
| Complexity | Low | Medium | High |
| Upfront infrastructure | None beyond model access | Data ingestion, index, retrieval pipeline, and storage | Training data, training job, deployment, and evaluation |
| Typical cost | Model tokens; long prompts add recurring cost | Search, embeddings, storage, and model tokens | Training compute, hosting, and inference |
| Data requirement | Instructions and optional examples | Trusted source documents or records | Hundreds or more high-quality examples are commonly desirable |
| Update path | Edit the prompt | Update the source and index | Prepare data and train a new version |
| Best for | Fast iteration and request-specific behavior | Private, dynamic, recent, or citable facts | Stable tone, format, task behavior, distillation |
| Main limitation | Cannot add unavailable knowledge; compliance can vary | Quality depends on ingestion and retrieval | Highest investment; learned facts can become stale |

### Prompt engineering plus RAG

This is the most common combination:

- The prompt defines the assistant's role, response format, and how to use evidence.
- RAG retrieves the actual facts needed to answer.

Travel example: instructions request a concise advisor tone, while retrieval supplies real hotel catalog records.

### Prompt engineering plus fine-tuning

Use this combination when a customized model supplies stable baseline behavior and each conversation still needs specific direction.

Travel example: fine-tuning establishes the brand voice; a system message adds a temporary seasonal campaign or user-specific constraint.

### RAG plus fine-tuning

Use this combination when both external facts and durable behavior matter.

Travel example: retrieval supplies current pricing and availability; fine-tuning maintains the agency's response style and structured layout.

### All three strategies

For a demanding application:

1. **Fine-tuning** establishes consistent style or task behavior.
2. **RAG** supplies current, domain-specific facts.
3. **Prompt engineering** provides conversation-specific instructions, constraints, and guardrails.

Each layer should have an explicit responsibility. If two layers contain conflicting rules or stale copies of the same fact, the application becomes harder to reason about and evaluate.

### Scenario-to-strategy guide

| Scenario clue | Best answer |
| --- | --- |
| “Use this exact response layout for this request” | Prompt engineering |
| “Answer from an internal handbook updated every week” | RAG |
| “Use the same brand voice reliably across millions of requests” | Fine-tuning after prompt evaluation |
| “Transfer task behavior from an expensive model to a smaller one” | Distillation through fine-tuning |
| “Find documents whose meaning matches the question” | Embeddings plus vector retrieval |
| “Match product codes exactly and also understand paraphrases” | Hybrid search |
| “Apply a one-conversation promotion while retaining the learned brand voice” | Prompt engineering plus fine-tuning |
| “Use current catalog facts in a dependable brand format” | RAG plus fine-tuning, with prompting |

### Decision discipline

Use this escalation order:

1. Start with prompt engineering and evaluation.
2. Add RAG if the model lacks required evidence.
3. Add fine-tuning if behavior remains inconsistent.
4. Combine only where requirements justify the added cost and operational burden.

“Start simple” does not mean “skip architecture.” Even the prompt-only version needs security, safety, evaluation, monitoring, and reliable application code.

### Common confusions

- **Few-shot prompting is not fine-tuning.** Examples remain in the request context; weights do not change.
- **RAG is not training.** Retrieved passages are added at inference time.
- **Fine-tuning is not a live database.** Frequently changing facts should usually remain external.
- **Grounded is not automatically correct.** The source can be wrong, retrieval can be poor, or the model can misread evidence.
- **Consistent is not automatically safe.** A model can consistently reproduce a harmful pattern from bad training data.
- **Lower prompt length does not make training free.** Fine-tuning trades recurring prompt overhead for training and hosting work.
- **Combining every strategy is not inherently better.** Unnecessary layers increase cost, latency, maintenance, and failure modes.

---

## Unit 6 — Exercise: Optimize generative AI model performance

[Open the Learn exercise launcher](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/6-exercise)

[Open the full exercise: Fine-tune a language model](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/04b-finetune-model.html)

[View the exercise source in MicrosoftLearning](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/Instructions/Exercises/04b-finetune-model.md)

The exercise compares a base language model with a fine-tuned version for a travel-planning assistant. Its goal is to determine whether fine-tuning makes tone and behavior more consistent than prompt engineering alone.

The Learn unit allocates **90 minutes**. Fine-tuning and deployment can take **60 minutes or longer**, depending on service capacity, quota, and region. Plan for waiting time and do not assume that an apparently idle job has failed without checking its status and logs.

### Prerequisite

- An Azure subscription with permission to create Foundry resources, projects, model deployments, fine-tuning jobs, and related resources.

### Current configuration — verify before use

The official exercise currently specifies:

| Setting | Current lab value | Why it is time-sensitive |
| --- | --- | --- |
| Base model | `gpt-5` | Supported fine-tuning models and versions change |
| Suggested regions | North Central US or Sweden Central | Regional availability and quota change |
| Customization method | Supervised | Available methods depend on the model |
| Training type | Standard | Labels and supported training types can change |
| Deployment type | Developer | Deployment support and intended use can change |
| Automatic deployment | Enabled | Portal workflow can change |

Before provisioning, check current model availability, fine-tuning support, quota, regional support, deployment types, and prices. If the portal differs from the guide, follow current official documentation rather than forcing an obsolete setting.

### Part 1: Create a Microsoft Foundry project

1. Sign in to the [Microsoft Foundry portal](https://ai.azure.com/).
2. Use the current Foundry experience.
3. Create a project with a unique name if a suitable project does not already exist.
4. Select the subscription and a new or existing resource group.
5. Choose a region that currently supports the required fine-tuning model and deployment.
6. Wait for project provisioning to complete.

Record the subscription, resource group, project, region, and resource names so that you can identify every item during cleanup.

### Part 2: Deploy and inspect the base model

1. Open the Models area in Foundry.
2. Find the currently specified base model, `gpt-5`.
3. Review its model card, supported capabilities, fine-tuning support, and deployment availability.
4. Deploy the base model using the exercise's current defaults.
5. Open it in the model playground.

The base deployment supplies the comparison baseline. Do not compare a customized model against an unrecorded impression of earlier behavior.

### Part 3: Start the fine-tuning job

Download the official exercise dataset:

[travel-finetune-hotel.jsonl](https://microsoftlearning.github.io/mslearn-ai-studio/data/travel-finetune-hotel.jsonl)

Ensure the saved filename ends in `.jsonl`, not `.jsonl.txt`.

Configure the job with the exercise's current values:

| Field | Value |
| --- | --- |
| Base model | `gpt-5` |
| Customization method | Supervised |
| Training type | Standard |
| Training data | Upload the downloaded JSONL dataset |
| Suffix | `ft-travel` |
| Automatically deploy after completion | Selected |
| Deployment type | Developer |
| Other hyperparameters | Exercise defaults |

Submit the job, then inspect its monitor view rather than waiting passively. Record the job name, dataset, base-model version, configuration, submission time, and eventual customized-model identifier.

### Part 4: Establish the prompt-engineered baseline

While training runs, test the base deployment.

Begin with a generic question such as “What kinds of travel planning can you help with?” Observe that a broad base model can describe capabilities the application does not intend to offer.

Then apply an instruction with these requirements, expressed in your own words:

- Help users think through trips, including entry requirements, weather, attractions, transport, and local customs.
- Do not claim to book or recommend specific hotels, flights, rental cars, or restaurants.
- Use an engaging travel-planning tone.
- Ask useful follow-up questions that uncover preferences.

Test a repeatable set of prompts, such as:

- A request for where to stay in Rome.
- A request centered on walking access to inexpensive food.
- A question about local dishes.
- A question about the best season for weather.
- A question about getting around the city.

For every response, record:

- Whether scope boundaries were followed.
- Tone and stylistic consistency.
- Whether an engaging follow-up question was included.
- Format and length.
- Factual claims that need validation.
- Any unwanted booking or recommendation behavior.

This is the **base model plus prompt engineering** baseline, not the untouched base model alone.

### Part 5: Review the training data

Open the JSONL file in a text editor and verify its structure:

- Each line is an independent conversation object.
- Each conversation contains system, user, and assistant messages.
- The system instruction is consistent with the playground instruction.
- User messages represent travel questions.
- Assistant messages demonstrate the desired energetic, friendly style and finish with a useful follow-up.
- The examples model the behavior the customized deployment is expected to learn.

Ask these review questions:

- Are the examples factually and stylistically acceptable?
- Do any examples contradict the stated boundaries?
- Is the style so exaggerated that it could harm usability?
- Are important intents and refusal cases represented?
- Does the data contain information that should not be used for training?

### Part 6: Monitor and deploy the fine-tuned model

1. Open the fine-tuning job details.
2. Review status, monitor information, and logs.
3. Wait for training to complete.
4. Confirm that automatic deployment succeeded.
5. If automatic deployment fails, deploy the completed customized model manually using a currently supported deployment type.
6. Verify that the playground is using the customized deployment, not the original base deployment.

Training completion and deployment completion are separate milestones. A completed training job is not callable until a deployment is ready.

### Part 7: Compare the fine-tuned and base deployments

Apply the same instructions used for the base-model test. Then repeat the same prompts with the same relevant generation settings.

| Criterion | Base plus prompt | Fine-tuned plus same prompt |
| --- | --- | --- |
| Follows scope restrictions | Record pass/fail and examples | Record pass/fail and examples |
| Maintains desired voice | Score consistently | Score consistently |
| Uses desired structure | Score consistently | Score consistently |
| Asks an appropriate follow-up | Record frequency | Record frequency |
| Gives unsupported factual claims | Record defects | Record defects |
| Response latency | Measure | Measure |
| Input prompt size | Measure | Measure |
| Overall preference | Explain why | Explain why |

Fine-tuning is justified only if the measured improvement is meaningful for the workload and worth the extra training, deployment, maintenance, and governance burden.

The expected learning is not that the fine-tuned model always wins. The goal is to compare approaches and decide which one best satisfies the requirement.

### Part 8: Clean up

Fine-tuning and deployed models can incur charges. When the exercise is complete:

1. Open the Azure portal.
2. Locate the resource group created or selected for the exercise.
3. Confirm that it contains only disposable exercise resources.
4. Delete the resource group if it is dedicated to the exercise.
5. Confirm deletion finishes and no separately billed customized deployment remains.

If the project uses a shared resource group, do not delete the group. Remove only resources you own and understand.

### Exercise troubleshooting

| Symptom | Likely cause | Corrective action |
| --- | --- | --- |
| Fine-tuning option is unavailable | Unsupported model/version, region, role, or subscription | Recheck the current support matrix, access, and project region |
| Deployment fails before training | Missing quota or unsupported deployment configuration | Inspect quota and current deployment availability |
| Dataset upload is rejected | Wrong extension, invalid JSONL, schema error, or file encoding | Confirm `.jsonl`, validate every line, and compare with the required schema |
| Job remains queued for a long time | Capacity or service demand | Check status and logs; allow for the documented long duration |
| Training completes but no endpoint exists | Automatic deployment failed or was not selected | Deploy the completed customized model manually |
| Responses look like the base model | Wrong deployment selected | Confirm the customized deployment name in the playground |
| Customized output is not better | Weak, narrow, inconsistent, or mismatched examples | Inspect data coverage and evaluate against a held-out set |
| Factual accuracy is still weak | Fine-tuning targeted style rather than current knowledge | Add trusted grounding data and evaluate RAG |
| Costs continue after the lab | Deployment or other resources remain | Review the resource group and delete exercise-only resources |

### Lab completion record

- [ ] Foundry project created or selected
- [ ] Current model, version, region, quota, and fine-tuning support verified
- [ ] Base `gpt-5` deployment created
- [ ] Baseline prompts and scoring criteria recorded
- [ ] Official JSONL dataset downloaded and inspected
- [ ] Supervised fine-tuning job submitted
- [ ] Training status and logs reviewed
- [ ] Customized model deployed successfully
- [ ] Base and customized deployments tested with identical inputs
- [ ] Behavior, factuality, latency, and cost compared
- [ ] Exercise resources deleted when no longer needed

---

## Unit 7 — Module assessment

[Open Unit 7](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/7-knowledge-check)

The official assessment checks these concepts. The wording below is intentionally paraphrased:

| Concept tested | Correct principle | Why |
| --- | --- | --- |
| Purpose of a system message | Define the model's role, behavior, boundaries, and output expectations | It guides inference; it is not training or retrieval |
| When to choose RAG | The response needs domain-specific, private, or current data absent from model context | Retrieval supplies external evidence at request time |
| Meaning of temperature | Controls the balance between focused and more varied token sampling | It affects diversity, not the token limit or service speed |
| What fine-tuning optimizes | Behavioral consistency, including style, tone, format, and task patterns | External factual grounding is a different responsibility |
| How to handle catalog facts plus brand voice | Use RAG for catalog evidence, fine-tuning for durable voice, and prompts for current instructions | The requirements span knowledge and behavior |

### Additional self-test

1. A policy changes every week. Which strategy should expose the newest approved version to the model?
2. A model knows the facts but ignores a required response layout occasionally. What should be tried before training?
3. Which search method combines exact-term and embedding-based retrieval?
4. What is the difference between few-shot prompting and supervised fine-tuning?
5. Which fine-tuning method learns from preferred and rejected response pairs?
6. Why is a held-out baseline necessary before fine-tuning?
7. If retrieval returns irrelevant chunks, should the first fix target the generation model or the retrieval pipeline?
8. Why should temperature and top-p usually not be tuned simultaneously?
9. What role does LoRA play in fine-tuning?
10. A travel assistant needs current prices, a stable brand voice, and a one-week campaign message. Map each requirement to a strategy.

<details>
<summary>Self-test answers</summary>

1. RAG, backed by a refreshed authoritative source or index.
2. Improve and evaluate the prompt, including a clear template and representative examples.
3. Hybrid search.
4. Few-shot examples exist only in the inference context; SFT uses examples in an additional training process that changes learned behavior.
5. Direct Preference Optimization.
6. It makes improvement and regression measurable on data that the customized model did not train on.
7. Inspect and improve ingestion, chunking, indexing, filters, query construction, and ranking first.
8. Changing one variable at a time makes cause and effect measurable and avoids compounding randomness controls.
9. LoRA learns a smaller low-rank adaptation instead of retraining every model parameter, reducing training requirements.
10. RAG supplies current prices, fine-tuning establishes the durable brand voice, and prompt engineering adds the temporary campaign instruction.

</details>

---

## Unit 8 — Summary

[Open Unit 8](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/8-summary)

The module's central lesson is that model optimization is layered:

1. Use **prompt engineering** to define the task, role, boundaries, format, examples, and request-specific instructions.
2. Use **RAG** when the model needs trusted external facts, especially private or frequently changing information.
3. Use **fine-tuning** when high-quality examples can make style, tone, format, or task behavior more consistent.
4. Combine strategies when requirements cover more than one dimension.
5. Evaluate the base and optimized versions with representative data.
6. Keep safety, security, operations, and cost visible throughout the lifecycle.

For the travel-agency scenario, a mature solution can use:

- A fine-tuned model for the agency's characteristic voice and response structure.
- RAG for the actual hotel catalog, availability, and current pricing.
- Prompt engineering for the current customer's constraints, session instructions, and guardrails.

### Practical next steps

- Build a representative evaluation set before optimizing.
- Record a prompt-only baseline.
- Diagnose whether failures involve instructions, knowledge, or consistency.
- Add only the strategy that addresses the measured gap.
- Re-run quality, safety, latency, and cost evaluation after every change.
- Track prompt, index, dataset, model, and deployment versions together.
- Monitor production failures and feed reviewed examples back into the next evaluation cycle.

---

## High-yield review sheet

### Strategy clues

| If the question says... | Think... |
| --- | --- |
| Role, tone, constraints, template, examples, quick iteration | Prompt engineering |
| Private data, current data, catalog, policies, citations, knowledge cutoff | RAG |
| Embeddings, semantic similarity, chunks, index | Retrieval |
| Exact terms plus semantic meaning | Hybrid search |
| Stable brand voice, reliable schema, reduced repeated prompt | Fine-tuning |
| Prompt-response training examples | SFT |
| Grader and reward | RFT |
| Preferred and non-preferred responses | DPO |
| Smaller model learns task behavior from a stronger model | Distillation |
| Efficient low-rank parameter adaptation | LoRA |

### Facts versus behavior

| Need | Preferred mechanism |
| --- | --- |
| Current inventory value | Retrieve it |
| Private policy passage | Retrieve it with authorization |
| One-session instruction | Put it in the prompt |
| Temporary promotion | Put it in the prompt or application context |
| Long-lived response style | Fine-tune if prompt engineering is insufficient |
| Safety-critical authorization | Enforce it in application and platform controls |
| Proof of response quality | Evaluate it |

### Ten facts to memorize

1. Start with a baseline and prompt engineering.
2. A system message influences behavior but does not guarantee compliance.
3. Few-shot examples do not change model weights.
4. Temperature and top-p both affect diversity; normally adjust one at a time.
5. RAG means retrieve, augment, and generate.
6. Embeddings represent semantic features as vectors.
7. Hybrid search combines lexical and vector signals.
8. Fine-tuning primarily improves learned behavioral consistency in this module.
9. SFT uses target responses, RFT uses grader rewards, and DPO uses preference pairs.
10. Combining strategies is justified only when requirements span their distinct responsibilities.

### Common exam traps

- Choosing fine-tuning when the real need is current private data.
- Choosing RAG when the model already knows the facts but needs clearer formatting instructions.
- Treating a system message as a security boundary.
- Claiming that few-shot examples permanently train the model.
- Assuming a low temperature makes an answer factual.
- Calling vector similarity proof of correctness.
- Debugging the generator before confirming that retrieval returned useful evidence.
- Training on frequently changing catalog data instead of retrieving it.
- Evaluating the fine-tuned model with different prompts than the baseline.
- Using training examples as the final evaluation set.
- Ignoring training, hosting, search, storage, token, and maintenance costs.
- Assuming that all models, regions, or deployment types support fine-tuning.

## Production optimization checklist

### Requirements and baseline

- [ ] Define task success and unacceptable failure.
- [ ] Build representative normal, edge, ambiguous, and adversarial cases.
- [ ] Record quality, safety, latency, token, and cost baselines.
- [ ] Separate training, validation, and final evaluation data.

### Prompt layer

- [ ] Define role, scope, boundaries, format, and uncertainty behavior.
- [ ] Use examples only when they add a useful pattern.
- [ ] Separate instructions from untrusted data.
- [ ] Validate structured output and sensitive actions outside the model.

### Retrieval layer

- [ ] Use authoritative, permission-controlled sources.
- [ ] Define chunking, embedding, indexing, and refresh policies.
- [ ] Evaluate retrieval and answer generation separately.
- [ ] Preserve provenance and citations.
- [ ] Monitor index freshness and failed queries.

### Fine-tuning layer

- [ ] Confirm that fine-tuning targets a persistent behavior gap.
- [ ] Validate data rights, quality, diversity, and schema.
- [ ] Track base model, dataset, settings, and customized-model lineage.
- [ ] Compare against the same baseline and held-out test set.
- [ ] Test out-of-domain behavior and safety regressions.

### Operations

- [ ] Version prompts, indexes, datasets, models, and deployments.
- [ ] Monitor quality, safety, latency, cost, and drift.
- [ ] Define rollback and retirement procedures.
- [ ] Remove unused indexes, jobs, deployments, and exercise resources.

## Sources and further reading

### Official module and units

- [Module landing page](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/)
- [Unit 1: Introduction](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/1-introduction)
- [Unit 2: Optimize model output with prompt engineering](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/2-prompt-engineering)
- [Unit 3: Ground your model with Retrieval Augmented Generation](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/3-retrieval-augmented-generation)
- [Unit 4: Fine-tune a model for consistent behavior](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/4-fine-tune-model)
- [Unit 5: Compare and combine optimization strategies](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/5-compare-combine-strategies)
- [Unit 6: Exercise launcher](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/6-exercise)
- [Unit 7: Module assessment](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/7-knowledge-check)
- [Unit 8: Summary](https://learn.microsoft.com/en-us/training/modules/optimize-generative-ai-model-performance/8-summary)

### Official exercise and data

- [Fine-tune a language model](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/04b-finetune-model.html)
- [Exercise source](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/Instructions/Exercises/04b-finetune-model.md)
- [Travel fine-tuning dataset](https://microsoftlearning.github.io/mslearn-ai-studio/data/travel-finetune-hotel.jsonl)

### Microsoft guidance linked from the module

- [Getting started with customizing a large language model](https://learn.microsoft.com/en-us/azure/foundry-classic/openai/concepts/customizing-llms)
- [Prompt engineering techniques](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/prompt-engineering)
- [System message design](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/advanced-prompt-engineering)
- [Retrieval-augmented generation and indexes in Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation)
- [Customize a model with fine-tuning](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/fine-tuning)
- [Fine-tuning considerations](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/fine-tuning-considerations)
- [Develop AI apps using Azure services](https://learn.microsoft.com/en-us/azure/developer/ai/augment-llm-rag-fine-tuning)
- [Build knowledge-enhanced AI agents with Foundry IQ](https://learn.microsoft.com/en-us/training/modules/introduction-foundry-iq/)

## Glossary

| Term | Definition |
| --- | --- |
| Assistant message | A model response represented in a chat conversation, often retained as prior context or supplied as an example. |
| Augment | Add retrieved information to model input before generation. |
| Azure AI Search | Azure search service used to build indexes and perform keyword, semantic, vector, and hybrid retrieval. |
| Baseline | Recorded performance of an initial model and configuration used for later comparison. |
| Batch size | Number of training examples processed together during a training update. |
| Chain-of-thought prompting | Stepwise prompting technique discussed for non-reasoning models; current reasoning-model guidance should be followed for the selected model. |
| Chunk | Searchable segment of a larger document created during ingestion. |
| Cosine similarity | Measure based on the angle between vectors, commonly used to estimate semantic similarity. |
| Data drift | Change in production input data or its distribution over time. |
| Delimiter | Marker that separates prompt sections such as instructions, examples, source text, and user input. |
| Direct Preference Optimization (DPO) | Fine-tuning method that learns from preferred and non-preferred response pairs. |
| Distillation | Training a smaller model to reproduce task behavior demonstrated by a larger or stronger model. |
| Embedding | Numeric vector representation of semantic features in content. |
| Embedding model | Model that converts content or a query into an embedding for similarity operations. |
| Epoch | One pass through the training dataset during fine-tuning. |
| Evaluation baseline | Initial metric result used to determine whether a later version improves or regresses. |
| Few-shot learning | Supplying several examples in the inference prompt to demonstrate a pattern without changing model weights. |
| Fine-tuning | Additional training that customizes a pretrained model's behavior using task-specific data. |
| Foundry IQ | Managed knowledge layer for connecting agents to reusable, grounded enterprise knowledge. |
| Foundation model | Broad pretrained model that can be adapted or guided for downstream tasks. |
| Generate | Produce a model response from instructions, user input, and any supplied context. |
| Grounding | Supplying trusted evidence intended to make a generated response more factually supported and relevant. |
| Held-out set | Evaluation data intentionally excluded from training so that generalization can be measured. |
| Hybrid search | Retrieval that combines lexical matching with vector similarity, often with semantic ranking. |
| Index | Search-optimized structure containing content, vectors, and metadata used for retrieval. |
| Inference | Use of a trained model to generate output from new input. |
| JSONL | JSON Lines format in which every line is a complete JSON value; commonly used for fine-tuning datasets. |
| Keyword search | Retrieval based primarily on lexical term matching. |
| Learning rate | Hyperparameter controlling the size of parameter updates during training. |
| LoRA | Low-Rank Adaptation, an efficient fine-tuning technique that learns a lower-rank representation of weight changes. |
| Model drift | Degradation or change in useful model behavior as data, requirements, or environments evolve. |
| One-shot learning | Supplying one example in the prompt to demonstrate the intended pattern. |
| Overfitting | Learning training examples too narrowly, resulting in weak performance on unseen inputs. |
| Persona pattern | Prompt pattern that assigns a role or perspective to shape response priorities and tone. |
| Prompt | Input supplied to a generative model, including instructions, messages, examples, and context. |
| Prompt engineering | Iterative design and testing of prompts to improve model output. |
| Prompt injection | Attempt to place instructions in untrusted content that conflict with or override intended application behavior. |
| Reinforcement fine-tuning (RFT) | Fine-tuning that uses a grader and reward signal to improve behavior iteratively. |
| Retrieval | Selection of information relevant to a query from a source or index. |
| Retrieval-augmented generation (RAG) | Pattern that retrieves external evidence, adds it to model input, and generates an answer from the augmented context. |
| Semantic search | Retrieval or ranking that uses semantic understanding in addition to basic term matching. |
| Supervised fine-tuning (SFT) | Fine-tuning using labeled examples of prompts and desired responses. |
| System message | High-level instructions that establish a model's role, behavior, scope, tone, and output constraints for an interaction. |
| Temperature | Sampling parameter controlling the balance between focused and more varied output. |
| Top-p | Nucleus-sampling parameter restricting candidate tokens to a cumulative probability mass. |
| Training data | Examples used to update a model during fine-tuning. |
| Underfitting | Failure to learn the target pattern sufficiently from training. |
| User message | Current user request or input in a chat conversation. |
| Vector search | Retrieval based on similarity between embedding vectors. |
| Weights | Learned numeric model parameters adjusted during training or represented through an adaptation. |
| Zero-shot learning | Asking a model to perform a task without including examples in the prompt. |
