# Module 2 Answer Key

**Develop generative AI apps in Azure — Module 2: Select, deploy, and evaluate Microsoft Foundry models**

Answer key for the practice assessment in [index.html](index.html). Generated from the question
bank in [questions.js](questions.js), which is the authoritative source — regenerate this file if
the bank changes.

| | |
| --- | --- |
| Questions | 50 |
| Total points | 136 |
| Sections | 3 |
| Time limit | 120 minutes |

> **Answers are recorded as text, not letters.** The assessment shuffles the options and the
> statement rows on every attempt, so "A" or "the third option" means nothing here. Match on the
> wording instead.

Partial credit applies: multiple-choice, Yes/No, matching, and build-list questions score one point
per correct selection, row, or correctly placed item.

## Quick reference

| # | ID | Unit | Type | Pts | Answer |
| --- | --- | --- | --- | --- | --- |
| 1 | G01 | Unit 1 | Single choice | 1 | Use a structured process to discover, compare, deploy, and validate models against application requirements. |
| 2 | G02 | Unit 1 | Build list | 5 | 1) Explore and filter candidate models. → 2) Compare candidates with relevant benchmarks. → 3) Deploy the selected model to an endpoint. → 4) Test the deployment in the playground. → 5) Evaluate performance with manual and automated approaches. |
| 3 | G03 | Unit 1 | Yes / No | 3 | No, Yes, Yes |
| 4 | G04 | Unit 2 | Single choice | 1 | They are billed through the Azure subscription and include Azure OpenAI models plus models from Microsoft and other providers. |
| 5 | G05 | Unit 2 | Yes / No | 3 | Yes, No, Yes |
| 6 | G06 | Unit 2 | Multiple choice | 6 | Collection; Capabilities; Source; Inference tasks; Fine-tuning methods; Industry |
| 7 | G07 | Unit 2 | Matching | 4 | 1) Deep reasoning, complex generation, and extensive context understanding; 2) Efficient common language tasks on lower-end or edge hardware; 3) Convert content into numerical representations for semantic retrieval; 4) Specialized performance for a particular language, region, or industry |
| 8 | G08 | Unit 2 | Single choice | 1 | A small language model |
| 9 | G09 | Unit 2 | Single choice | 1 | An embedding model |
| 10 | G10 | Unit 2 | Matching | 5 | 1) Image generation model; 2) Video generation model; 3) Image analysis model; 4) Text-to-speech model; 5) Speech-to-text model |
| 11 | G11 | Unit 2 | Single choice | 1 | The model card |
| 12 | G12 | Unit 3 | Single choice | 1 | The Benchmarks tab on the model card |
| 13 | G13 | Unit 3 | Yes / No | 3 | Yes, Yes, No |
| 14 | G14 | Unit 3 | Matching | 4 | 1) Adversarial question answering; 2) Code generation; 3) Mathematical reasoning; 4) Instruction following |
| 15 | G15 | Unit 3 | Single choice | 1 | The model at 0.08 is safer because a lower Attack Success Rate is better. |
| 16 | G16 | Unit 3 | Matching | 3 | 1) Resistance to standard, contextual, and copyright-related harmful behaviors; 2) Detection of adversarial and implicit hate speech; 3) Knowledge in biosecurity, cybersecurity, and chemical security |
| 17 | G17 | Unit 3 | Single choice | 1 | It assumes a typical ratio of three input tokens for every output token. |
| 18 | G18 | Unit 3 | Yes / No | 3 | Yes, Yes, No |
| 19 | G19 | Unit 3 | Matching | 3 | 1) Output tokens generated each second; 2) Combined input and output tokens processed each second; 3) Interval between consecutive output tokens |
| 20 | G20 | Unit 3 | Single choice | 1 | Near the top-right corner |
| 21 | G21 | Unit 3 | Multiple choice | 4 | Quality, safety, and throughput benchmarks; Context window, training data, and supported languages; Supported deployment endpoints; Features such as function calling, structured output, and vision |
| 22 | G22 | Unit 4 | Matching | 5 | 1) Any-region, pay-per-token deployment with the highest quota for general workloads; 2) Reserved provisioned throughput units that can use any Azure region; 3) Any-region asynchronous processing at a discount for jobs completed within 24 hours; 4) Pay-per-token deployment that keeps data within a specified data zone; 5) Single-region, pay-per-token deployment |
| 23 | G23 | Unit 4 | Single choice | 1 | Global Standard |
| 24 | G24 | Unit 4 | Single choice | 1 | Global Batch |
| 25 | G25 | Unit 4 | Single choice | 1 | Data Zone Standard |
| 26 | G26 | Unit 4 | Single choice | 1 | Global Provisioned |
| 27 | G27 | Unit 4 | Yes / No | 3 | Yes, Yes, No |
| 28 | G28 | Unit 4 | Single choice | 1 | The deployment name supplied in the model parameter |
| 29 | G29 | Unit 4 | Matching | 3 | 1) Specifies where the application sends the API request; 2) Proves the caller's identity or possession of a supported secret; 3) Routes the request to the intended deployed model through the model parameter |
| 30 | G30 | Unit 4 | Multiple choice | 4 | Set a system message that guides context, tone, and behavior.; Adjust temperature to trade creativity against consistency.; Set a maximum token limit for responses.; Adjust top-p nucleus sampling. |
| 31 | G31 | Unit 5 | Matching | 3 | 1) Explore behavior qualitatively with diverse prompts and side-by-side responses; 2) Rate representative test cases against defined criteria and aggregate the ratings; 3) Gather real-world feedback from actual or representative users |
| 32 | G32 | Unit 5 | Yes / No | 3 | Yes, Yes, No |
| 33 | G33 | Unit 5 | Matching | 4 | 1) Whether claims are based on supplied context instead of speculation; 2) Whether the response addresses the user's request; 3) Whether ideas flow logically and remain consistent; 4) Linguistic correctness and natural language quality |
| 34 | G34 | Unit 5 | Matching | 5 | 1) Shared-word measure that balances precision and recall; 2) N-gram comparison commonly used for machine translation; 3) Translation comparison that also accounts for synonyms, stemming, and paraphrases; 4) Recall-oriented comparison commonly used for summarization; 5) Sentence-level variant of BLEU |
| 35 | G35 | Unit 5 | Single choice | 1 | The percentage of evaluated responses that exceed the configured severity threshold |
| 36 | G36 | Unit 5 | Yes / No | 3 | Yes, Yes, Yes |
| 37 | G37 | Unit 5 | Multiple choice | 3 | Upload a new CSV or JSONL dataset.; Use an existing project dataset.; Generate a synthetic dataset from a topic prompt. |
| 38 | G38 | Unit 5 | Build list | 5 | 1) Choose the model, agent, or dataset target. → 2) Select, upload, or generate the evaluation dataset. → 3) Configure prompts, field mappings, and selected evaluators. → 4) Submit the asynchronous evaluation job. → 5) Review aggregate metrics and row-level results. |
| 39 | G39 | Unit 5 | Multiple choice | 4 | Refine prompts and system instructions.; Try a different model optimized for the use case.; Add retrieval-augmented generation to ground responses.; Fine-tune the model for the domain when supported. |
| 40 | G40 | Unit 6 | Build list | 5 | 1) Explore model cards and benchmarks in the catalog. → 2) Use the leaderboard and trade-off charts to compare candidates. → 3) Deploy gpt-5.2 and gpt-5-mini. → 4) Compare the two deployments side by side in the model playground. → 5) Run and analyze an evaluation of gpt-5.2 with synthetic data. |
| 41 | G41 | Unit 6 | Single choice | 1 | gpt-5.2, 45 rows, a travel-question prompt with safety and security tests, and blank seed data |
| 42 | G42 | Unit 6 | Yes / No | 4 | Yes, Yes, Yes, Yes |
| 43 | CR01 | Unit 3 | Single choice | 1 | A quality-versus-throughput trade-off chart |
| 44 | CR02 | Unit 4 | Single choice | 1 | Global Provisioned |
| 45 | CR03 | Unit 3 | Multiple choice | 4 | Quality benchmarks relevant to complex reasoning; Safety benchmarks such as resistance to harmful behavior; P95 latency and throughput; Function-calling support and context-window details |
| 46 | CR04 | Units 3 and 5 | Yes / No | 3 | Yes, No, Yes |
| 47 | FC01 | Unit 5 | Single choice | 1 | BLEU |
| 48 | FC02 | Unit 5 | Single choice | 1 | ROUGE |
| 49 | FC03 | Unit 5 | Multiple choice | 4 | Refine the system instructions and harden prompts.; Add retrieval-augmented generation over the current manuals.; Apply content filters and validate output before displaying it.; Evaluate a different model that better meets the use case. |
| 50 | FC04 | Units 5 and 6 | Build list | 5 | 1) Select the deployed model as the evaluation target. → 2) Generate additional synthetic test rows from a task-specific prompt. → 3) Configure the developer prompt, mappings, and evaluation criteria. → 4) Submit the asynchronous evaluation run. → 5) Inspect aggregate scores, failed rows, and clustered failure explanations. |

## General Questions

*42 questions · 116 points*

### 1. G01 — Unit 1

*Single choice · Plan the model lifecycle · 1 point*

A team must choose from many foundation models for a new application. Which approach should the team take?

**Answer:** Use a structured process to discover, compare, deploy, and validate models against application requirements.

**Rationale.** The module frames model selection as a complete workflow: discover candidates, compare relevant evidence, deploy a candidate, and validate its quality and safety for the specific use case.

### 2. G02 — Unit 1

*Build list · Plan the model lifecycle · 5 points*

Arrange the major model lifecycle activities in the sequence emphasized by the module.

**Answer** (correct sequence):

1. Explore and filter candidate models.
2. Compare candidates with relevant benchmarks.
3. Deploy the selected model to an endpoint.
4. Test the deployment in the playground.
5. Evaluate performance with manual and automated approaches.

**Rationale.** Discovery and evidence-based comparison precede deployment. Playground testing supplies quick feedback, while systematic evaluation validates behavior across broader test data.

### 3. G03 — Unit 1

*Yes / No · Plan the model lifecycle · 3 points*

For each statement about model validation, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A benchmark leader is automatically the best model for every application. | **No** |
| Manual testing and automated evaluation provide complementary evidence. | **Yes** |
| Quality and safety requirements should be validated before production release. | **Yes** |

**Rationale.** Model suitability depends on the application's requirements and trade-offs. Manual exploration and scalable automated metrics complement one another, and validation before production reduces user and organizational risk.

### 4. G04 — Unit 2

*Single choice · Explore the model catalog · 1 point*

Which statement describes Foundry Models sold directly by Azure?

**Answer:** They are billed through the Azure subscription and include Azure OpenAI models plus models from Microsoft and other providers.

**Rationale.** The catalog distinguishes models sold directly by Azure, which are billed through the Azure subscription, from partner and community models that have their own licensing and pricing.

### 5. G05 — Unit 2

*Yes / No · Explore the model catalog · 3 points*

For each statement about catalog sources, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Partner and community models can have their own licensing and pricing. | **Yes** |
| Every model in the catalog is supplied only by Azure OpenAI. | **No** |
| The catalog includes providers such as Microsoft, OpenAI, Meta, Anthropic, Mistral, Cohere, and Hugging Face. | **Yes** |

**Rationale.** Microsoft Foundry aggregates models from many providers. Direct-from-Azure and partner or community offerings differ in commercial terms.

### 6. G06 — Unit 2

*Multiple choice · Explore the model catalog · 6 points*

Which six attributes can you use to filter models in the Foundry model catalog? Select six answers.

**Answer** (select 6):

- Collection
- Capabilities
- Source
- Inference tasks
- Fine-tuning methods
- Industry

**Rationale.** The catalog supports keyword search and filters for collection, capabilities, source, inference task, supported fine-tuning method, and industry specialization.

### 7. G07 — Unit 2

*Matching · Explore the model catalog · 4 points*

Match each model category to its most characteristic use.

**Answer:**

| Item | Match |
| --- | --- |
| Large language model | **Deep reasoning, complex generation, and extensive context understanding** |
| Small language model | **Efficient common language tasks on lower-end or edge hardware** |
| Embedding model | **Convert content into numerical representations for semantic retrieval** |
| Regional or domain-specific model | **Specialized performance for a particular language, region, or industry** |

**Rationale.** LLMs favor sophisticated tasks, SLMs favor efficiency, embedding models enable meaning-based retrieval, and specialized models can outperform general models in their target domain or language.

### 8. G08 — Unit 2

*Single choice · Explore the model catalog · 1 point*

A device must perform common language tasks locally, and speed, cost, and limited hardware matter more than the most complex reasoning. Which model category is the best starting point?

**Answer:** A small language model

**Rationale.** Small language models are optimized for efficiency and cost-effectiveness and can run on lower-end hardware or edge devices.

### 9. G09 — Unit 2

*Single choice · Explore the model catalog · 1 point*

Which model type should you select to create vector representations for semantic search and retrieval-augmented generation?

**Answer:** An embedding model

**Rationale.** Embedding models convert text into numerical representations that support semantic search, recommendations, and retrieval-augmented generation.

### 10. G10 — Unit 2

*Matching · Explore the model catalog · 5 points*

Match each requirement to the specialized model type described in the catalog.

**Answer:**

| Item | Match |
| --- | --- |
| Create a marketing illustration from a text description. | **Image generation model** |
| Create a video from a text description. | **Video generation model** |
| Analyze a prompt that contains both text and an image. | **Image analysis model** |
| Convert written content into spoken audio. | **Text-to-speech model** |
| Transcribe spoken audio into text. | **Speech-to-text model** |

**Rationale.** The catalog includes task-specific model families for image and video creation, multimodal image analysis, speech synthesis, and transcription.

### 11. G11 — Unit 2

*Single choice · Explore the model catalog · 1 point*

Where should you look for a model's provider, capabilities, benchmark metrics, responsible AI considerations, and supported deployment options?

**Answer:** The model card

**Rationale.** Each catalog model has a model card that consolidates the information needed to judge suitability, including provider, capabilities, benchmarks, responsible AI information, and deployment choices.

### 12. G12 — Unit 3

*Single choice · Select models using benchmarks · 1 point*

You want to see detailed benchmark charts for one candidate model and compare it with similar models. Which view should you open?

**Answer:** The Benchmarks tab on the model card

**Rationale.** The model card's Benchmarks tab provides detailed metrics for an individual model and comparison charts against similar models. The model leaderboard is the broader cross-catalog ranking view.

### 13. G13 — Unit 3

*Yes / No · Select models using benchmarks · 3 points*

For each statement about the Quality index, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| It averages accuracy across multiple benchmark datasets. | **Yes** |
| Its normalized values range from zero to one. | **Yes** |
| A lower value indicates stronger general-purpose language performance. | **No** |

**Rationale.** The Quality index summarizes performance across reasoning, knowledge, question answering, mathematics, coding, and instruction following. Scores are normalized from zero to one, and higher is better.

### 14. G14 — Unit 3

*Matching · Select models using benchmarks · 4 points*

Match each public quality benchmark to the capability it measures.

**Answer:**

| Item | Match |
| --- | --- |
| Arena-Hard | **Adversarial question answering** |
| HumanEval+ and MBPP+ | **Code generation** |
| MATH | **Mathematical reasoning** |
| IFEval | **Instruction following** |

**Rationale.** Foundry's quality comparison draws on standardized datasets, including Arena-Hard for adversarial questions, HumanEval+ and MBPP+ for code, MATH for mathematics, and IFEval for instruction following.

### 15. G15 — Unit 3

*Single choice · Select models using benchmarks · 1 point*

Two models have HarmBench Attack Success Rates of 0.08 and 0.31. Based only on this metric, which interpretation is correct?

**Answer:** The model at 0.08 is safer because a lower Attack Success Rate is better.

**Rationale.** HarmBench measures how often attacks successfully elicit harmful behavior. A lower Attack Success Rate indicates a more robust model on that benchmark.

### 16. G16 — Unit 3

*Matching · Select models using benchmarks · 3 points*

Match each safety benchmark to what it measures.

**Answer:**

| Item | Match |
| --- | --- |
| HarmBench | **Resistance to standard, contextual, and copyright-related harmful behaviors** |
| ToxiGen | **Detection of adversarial and implicit hate speech** |
| WMDP | **Knowledge in biosecurity, cybersecurity, and chemical security** |

**Rationale.** HarmBench reports attack success, ToxiGen assesses toxic or hateful content detection with F1, and WMDP measures sensitive-domain knowledge. Their score direction and meaning are not interchangeable.

### 17. G17 — Unit 3

*Single choice · Select models using benchmarks · 1 point*

How does the catalog's estimated cost benchmark combine input and output pricing?

**Answer:** It assumes a typical ratio of three input tokens for every output token.

**Rationale.** Estimated cost provides one comparison value by combining per-million input and output token prices with a typical 3:1 input-to-output ratio. Lower values are more cost-effective under that assumption.

### 18. G18 — Unit 3

*Yes / No · Select models using benchmarks · 3 points*

For each statement about latency metrics, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Latency P50 is the median request latency. | **Yes** |
| Latency P95 means 95 percent of requests complete faster than that time. | **Yes** |
| Time to first token measures the total price of a streaming response. | **No** |

**Rationale.** Percentiles describe the latency distribution. Time to first token measures responsiveness until the first streamed token arrives, not cost.

### 19. G19 — Unit 3

*Matching · Select models using benchmarks · 3 points*

Match each performance metric to its definition.

**Answer:**

| Item | Match |
| --- | --- |
| Generated tokens per second | **Output tokens generated each second** |
| Total tokens per second | **Combined input and output tokens processed each second** |
| Time between tokens | **Interval between consecutive output tokens** |

**Rationale.** GTPS measures output generation rate, TTPS includes both input and output processing, and time between tokens measures the spacing of streamed output.

### 20. G20 — Unit 3

*Single choice · Select models using benchmarks · 1 point*

On a trade-off chart that compares two metrics where higher values are desirable, where do strong models appear?

**Answer:** Near the top-right corner

**Rationale.** Trade-off charts plot two dimensions at once. When both plotted measures reward higher values, candidates toward the top-right perform well on both, though application constraints still determine the best choice.

### 21. G21 — Unit 3

*Multiple choice · Select models using benchmarks · 4 points*

Which four categories can you inspect in a side-by-side model comparison? Select four answers.

**Answer** (select 4):

- Quality, safety, and throughput benchmarks
- Context window, training data, and supported languages
- Supported deployment endpoints
- Features such as function calling, structured output, and vision

**Rationale.** Foundry comparison combines benchmark evidence with model details, endpoint availability, and supported features so selection can reflect the complete application requirement.

### 22. G22 — Unit 4

*Matching · Deploy models to endpoints · 5 points*

Match each deployment type to its defining characteristic.

**Answer:**

| Item | Match |
| --- | --- |
| Global Standard | **Any-region, pay-per-token deployment with the highest quota for general workloads** |
| Global Provisioned | **Reserved provisioned throughput units that can use any Azure region** |
| Global Batch | **Any-region asynchronous processing at a discount for jobs completed within 24 hours** |
| Data Zone Standard | **Pay-per-token deployment that keeps data within a specified data zone** |
| Standard | **Single-region, pay-per-token deployment** |

**Rationale.** Deployment types differ in geographic scope, billing, latency pattern, and capacity guarantees. Global, data-zone, and single-region variants address different residency and throughput needs.

### 23. G23 — Unit 4

*Single choice · Deploy models to endpoints · 1 point*

A general workload has no data-residency constraint and needs the largest available quota on pay-per-token billing. Which deployment type should you prefer when supported?

**Answer:** Global Standard

**Rationale.** Global Standard is intended for general workloads, uses pay-per-token billing, and provides the highest quota. The module recommends it for Foundry resources whenever possible.

### 24. G24 — Unit 4

*Single choice · Deploy models to endpoints · 1 point*

A company submits large, noninteractive jobs that can finish within 24 hours and wants the documented 50 percent discount. Which deployment type should it use?

**Answer:** Global Batch

**Rationale.** Global Batch is designed for large asynchronous jobs that can complete within 24 hours and is offered at a 50 percent discount.

### 25. G25 — Unit 4

*Single choice · Deploy models to endpoints · 1 point*

A pay-per-token application must keep its data within a specific EU or US data zone. Which deployment type best meets the requirement?

**Answer:** Data Zone Standard

**Rationale.** Data Zone Standard keeps data within the specified data zone while retaining pay-per-token billing. Data Zone Provisioned is the reserved-PTU alternative.

### 26. G26 — Unit 4

*Single choice · Deploy models to endpoints · 1 point*

A global service has a predictable, consistently high request volume and wants reserved capacity. Which deployment type is the best fit?

**Answer:** Global Provisioned

**Rationale.** Global Provisioned uses reserved provisioned throughput units to provide predictable high throughput across Azure regions.

### 27. G27 — Unit 4

*Yes / No · Deploy models to endpoints · 3 points*

For each deployment statement, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Default settings provide a quick deployment with recommended configuration. | **Yes** |
| A partner or community model can require acceptance of Azure Marketplace terms. | **Yes** |
| Every model supports every deployment type. | **No** |

**Rationale.** The portal offers default or custom deployment settings. Some partner models require Marketplace agreement, and supported deployment types vary by model.

### 28. G28 — Unit 4

*Single choice · Deploy models to endpoints · 1 point*

During inference, which value routes an API request to a specific deployed model?

**Answer:** The deployment name supplied in the model parameter

**Rationale.** A deployment name identifies the callable deployment. Client code supplies it in the model parameter to route inference requests.

### 29. G29 — Unit 4

*Matching · Deploy models to endpoints · 3 points*

Match each connection detail to how an application uses it.

**Answer:**

| Item | Match |
| --- | --- |
| Endpoint URL | **Specifies where the application sends the API request** |
| Authentication key or identity token | **Proves the caller's identity or possession of a supported secret** |
| Deployment name | **Routes the request to the intended deployed model through the model parameter** |

**Rationale.** Programmatic access requires a service address, authentication, and a deployment identifier. Microsoft Entra ID tokens are recommended over static keys for production.

### 30. G30 — Unit 4

*Multiple choice · Deploy models to endpoints · 4 points*

Which four actions can you perform while testing a deployment in the Foundry playground? Select four answers.

**Answer** (select 4):

- Set a system message that guides context, tone, and behavior.
- Adjust temperature to trade creativity against consistency.
- Set a maximum token limit for responses.
- Adjust top-p nucleus sampling.

**Rationale.** The playground supports prompt engineering and generation controls without client code. It cannot guarantee production outcomes or change subscription quota through a prompt.

### 31. G31 — Unit 5

*Matching · Evaluate model performance · 3 points*

Match each manual evaluation approach to its purpose.

**Answer:**

| Item | Match |
| --- | --- |
| Interactive playground testing | **Explore behavior qualitatively with diverse prompts and side-by-side responses** |
| Structured human review | **Rate representative test cases against defined criteria and aggregate the ratings** |
| User study | **Gather real-world feedback from actual or representative users** |

**Rationale.** Playground exploration reveals strengths and failures quickly, structured review produces consistent human ratings, and user studies expose issues in realistic use.

### 32. G32 — Unit 5

*Yes / No · Evaluate model performance · 3 points*

For each statement about manual and automated evaluation, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Manual review can capture contextual appropriateness, user satisfaction, and brand alignment. | **Yes** |
| Automated metrics scale efficiently and produce consistent measurements. | **Yes** |
| Automated evaluation makes all human review unnecessary. | **No** |

**Rationale.** Manual judgment captures subjective and contextual qualities, while automated metrics provide scalable consistency. The approaches complement rather than replace one another.

### 33. G33 — Unit 5

*Matching · Evaluate model performance · 4 points*

Match each generation-quality evaluator to what it measures.

**Answer:**

| Item | Match |
| --- | --- |
| Groundedness | **Whether claims are based on supplied context instead of speculation** |
| Relevance | **Whether the response addresses the user's request** |
| Coherence | **Whether ideas flow logically and remain consistent** |
| Fluency | **Linguistic correctness and natural language quality** |

**Rationale.** Groundedness checks support from context, relevance checks alignment to the request, coherence checks logical flow, and fluency checks linguistic quality. Groundedness Pro provides a binary grounded or not-grounded assessment.

### 34. G34 — Unit 5

*Matching · Evaluate model performance · 5 points*

Match each mathematical NLP metric to its defining use or behavior.

**Answer:**

| Item | Match |
| --- | --- |
| F1-score | **Shared-word measure that balances precision and recall** |
| BLEU | **N-gram comparison commonly used for machine translation** |
| METEOR | **Translation comparison that also accounts for synonyms, stemming, and paraphrases** |
| ROUGE | **Recall-oriented comparison commonly used for summarization** |
| GLEU | **Sentence-level variant of BLEU** |

**Rationale.** These metrics compare output with ground truth mathematically. They are useful when reference answers exist and are less suitable when many open-ended responses can be valid.

### 35. G35 — Unit 5

*Single choice · Evaluate model performance · 1 point*

What does a content-harm defect rate represent?

**Answer:** The percentage of evaluated responses that exceed the configured severity threshold

**Rationale.** Content-harm results aggregate as the share of responses above a severity threshold, typically Medium. Protected-material and indirect-attack defect rates use true instances divided by total instances.

### 36. G36 — Unit 5

*Yes / No · Evaluate model performance · 3 points*

For each statement about evaluation targets, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A model target generates outputs from evaluation prompts during the run. | **Yes** |
| An agent target can be assessed with user-defined prompts. | **Yes** |
| A dataset target can evaluate outputs already present in the test data. | **Yes** |

**Rationale.** Foundry supports model, agent, and dataset targets. Model and agent runs generate responses to inputs, while dataset evaluation can assess pre-generated outputs.

### 37. G37 — Unit 5

*Multiple choice · Evaluate model performance · 3 points*

Which three dataset-source options are available when evaluating a model or agent? Select three answers.

**Answer** (select 3):

- Upload a new CSV or JSONL dataset.
- Use an existing project dataset.
- Generate a synthetic dataset from a topic prompt.

**Rationale.** Evaluation inputs can come from a new upload, an existing project dataset, or synthetic generation. Synthetic generation can also incorporate uploaded files to improve task relevance.

### 38. G38 — Unit 5

*Build list · Evaluate model performance · 5 points*

Arrange the broad steps for a comprehensive Foundry evaluation in a valid sequence.

**Answer** (correct sequence):

1. Choose the model, agent, or dataset target.
2. Select, upload, or generate the evaluation dataset.
3. Configure prompts, field mappings, and selected evaluators.
4. Submit the asynchronous evaluation job.
5. Review aggregate metrics and row-level results.

**Rationale.** An evaluation requires a target and data, followed by metric and mapping configuration. The submitted job processes rows asynchronously and then exposes summary and per-test results.

### 39. G39 — Unit 5

*Multiple choice · Evaluate model performance · 4 points*

Evaluation scores are below the application's requirements. Which four improvement paths does the module recommend considering? Select four answers.

**Answer** (select 4):

- Refine prompts and system instructions.
- Try a different model optimized for the use case.
- Add retrieval-augmented generation to ground responses.
- Fine-tune the model for the domain when supported.

**Rationale.** Evaluation can drive prompt engineering, model replacement, RAG, or supported fine-tuning. Re-evaluation after changes is necessary to measure improvement and detect regressions.

### 40. G40 — Unit 6

*Build list · Complete the model evaluation exercise · 5 points*

Arrange the exercise activities in the order in which they are performed.

**Answer** (correct sequence):

1. Explore model cards and benchmarks in the catalog.
2. Use the leaderboard and trade-off charts to compare candidates.
3. Deploy gpt-5.2 and gpt-5-mini.
4. Compare the two deployments side by side in the model playground.
5. Run and analyze an evaluation of gpt-5.2 with synthetic data.

**Rationale.** The lab progresses from catalog discovery to benchmark comparison, deployment, manual side-by-side testing, and finally systematic synthetic-data evaluation and failure analysis.

### 41. G41 — Unit 6

*Single choice · Complete the model evaluation exercise · 1 point*

Which configuration is used to generate the lab's synthetic evaluation dataset?

**Answer:** gpt-5.2, 45 rows, a travel-question prompt with safety and security tests, and blank seed data

**Rationale.** The exercise selects synthetic generation, uses gpt-5.2 to create 45 travel-related rows including safety and security tests, and leaves seed data blank.

### 42. G42 — Unit 6

*Yes / No · Complete the model evaluation exercise · 4 points*

For each statement about the lab evaluation, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| The evaluation target is Model, with only the gpt-5.2 deployment selected. | **Yes** |
| The developer prompt describes a helpful travel assistant that gives accurate, detailed, practical advice. | **Yes** |
| The lab removes criteria under Agents and Safety while leaving the remaining suggested evaluators enabled. | **Yes** |
| Analyze results can cluster failures by why they failed and provide improvement suggestions. | **Yes** |

**Rationale.** These are the exercise's target, prompt, criteria, and analysis settings. Failures can reflect intentional refusal of unsafe questions, so each cluster and response should be reviewed rather than treated mechanically.


## Case Study 1 — Contoso Retail

*4 questions · 9 points*

**Scenario.** Contoso Retail is choosing a foundation model for a public customer-support assistant. The assistant must solve complex, multistep return-policy questions, resist harmful requests, support function calling, and maintain a P95 response-time target. Traffic will be high, steady, and global; there is no regional or data-zone residency requirement, and the company is willing to reserve throughput for predictable capacity. The team will compare candidate models in Microsoft Foundry, test them side by side, deploy the selected model, and then run systematic evaluations.

### 43. CR01 — Unit 3

*Single choice · Compare models for an application · 1 point*

Which Foundry visualization should Contoso use first to identify candidates that balance response quality with processing speed?

**Answer:** A quality-versus-throughput trade-off chart

**Rationale.** A trade-off chart compares two dimensions at once. Quality versus throughput directly addresses Contoso's need for capable reasoning and responsive service.

### 44. CR02 — Unit 4

*Single choice · Choose a deployment type · 1 point*

Which deployment type best fits Contoso's steady global volume and requirement for predictable reserved throughput?

**Answer:** Global Provisioned

**Rationale.** Global Provisioned uses reserved provisioned throughput units and is designed for predictable high-throughput workloads that can use any Azure region.

### 45. CR03 — Unit 3

*Multiple choice · Compare models for an application · 4 points*

Which four data points should Contoso compare before selecting the model? Select four answers.

**Answer** (select 4):

- Quality benchmarks relevant to complex reasoning
- Safety benchmarks such as resistance to harmful behavior
- P95 latency and throughput
- Function-calling support and context-window details

**Rationale.** The requirements map to reasoning quality, public-facing safety, response-time and capacity metrics, and feature or context support. Branding and catalog order are not selection evidence.

### 46. CR04 — Units 3 and 5

*Yes / No · Validate a selected model · 3 points*

For each recommendation to Contoso, select Yes if it is valid. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Prefer a lower HarmBench Attack Success Rate when comparing model robustness. | **Yes** |
| Treat the highest overall Quality index as proof that the model will meet every Contoso requirement. | **No** |
| Combine synchronized side-by-side playground tests with dataset-based automated evaluation. | **Yes** |

**Rationale.** Lower attack success is safer on HarmBench. A general benchmark cannot prove application-specific fitness, so Contoso should combine manual scenario testing with scalable, repeatable evaluation.


## Case Study 2 — Fabrikam Content

*4 questions · 11 points*

**Scenario.** Fabrikam Content is evaluating a model that translates product text and summarizes long product manuals. The team has definitive reference translations and human-written reference summaries. It also has a help assistant whose open-ended answers should be grounded in the latest manuals. The initial evaluation finds weak groundedness and some unsafe responses. Fabrikam has only a small seed set, so it plans to generate additional synthetic test cases, run an asynchronous evaluation with multiple criteria, inspect aggregate and row-level results, and iterate before release.

### 47. FC01 — Unit 5

*Single choice · Choose evaluation metrics · 1 point*

Which metric is the most direct baseline for comparing Fabrikam's generated translations with definitive reference translations by n-gram overlap?

**Answer:** BLEU

**Rationale.** BLEU compares n-grams between generated and reference text and is commonly used for machine translation. METEOR can complement it when synonym, stemming, and paraphrase handling matters.

### 48. FC02 — Unit 5

*Single choice · Choose evaluation metrics · 1 point*

Which metric should Fabrikam emphasize when checking whether generated summaries cover the key points in its reference summaries?

**Answer:** ROUGE

**Rationale.** ROUGE emphasizes recall and is particularly useful for summarization when covering important reference content matters.

### 49. FC03 — Unit 5

*Multiple choice · Improve evaluation results · 4 points*

Which four actions are supported responses to Fabrikam's weak groundedness and safety results? Select four answers.

**Answer** (select 4):

- Refine the system instructions and harden prompts.
- Add retrieval-augmented generation over the current manuals.
- Apply content filters and validate output before displaying it.
- Evaluate a different model that better meets the use case.

**Rationale.** Prompt improvement, RAG, safety controls, and trying a more suitable model are all evidence-driven responses. Fabrikam should inspect failures and re-run evaluation after changes.

### 50. FC04 — Units 5 and 6

*Build list · Run a comprehensive evaluation · 5 points*

Arrange Fabrikam's evaluation activities in a valid order.

**Answer** (correct sequence):

1. Select the deployed model as the evaluation target.
2. Generate additional synthetic test rows from a task-specific prompt.
3. Configure the developer prompt, mappings, and evaluation criteria.
4. Submit the asynchronous evaluation run.
5. Inspect aggregate scores, failed rows, and clustered failure explanations.

**Rationale.** The target and data are selected first, configuration and evaluators are defined next, the job is submitted, and results are then analyzed at both aggregate and individual-example levels.

## Coverage by unit

| Unit | Domain | Questions | Points |
| --- | --- | --- | --- |
| Unit 1 | Plan the model lifecycle | 3 | 9 |
| Unit 2 | Explore the model catalog | 8 | 22 |
| Unit 3 | Select models using benchmarks | 10 | 24 |
| Unit 4 | Deploy models to endpoints | 9 | 20 |
| Unit 5 | Evaluate model performance | 9 | 31 |
| Unit 6 | Complete the model evaluation exercise | 3 | 10 |
| Unit 3 | Compare models for an application | 2 | 5 |
| Unit 4 | Choose a deployment type | 1 | 1 |
| Units 3 and 5 | Validate a selected model | 1 | 3 |
| Unit 5 | Choose evaluation metrics | 2 | 2 |
| Unit 5 | Improve evaluation results | 1 | 4 |
| Units 5 and 6 | Run a comprehensive evaluation | 1 | 5 |
| **Total** | | **50** | **136** |
