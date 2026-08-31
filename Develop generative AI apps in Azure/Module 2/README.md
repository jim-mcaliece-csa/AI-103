# Module 2 — Select, deploy, and evaluate Microsoft Foundry models

> **Official module:** [Select, deploy, and evaluate Microsoft Foundry models](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/)<br>
> **Level:** Intermediate · **Roles:** Data Scientist and AI Engineer · **Length:** Approximately 1 hour 3 minutes · **Units:** 8<br>
> **Notes reviewed:** 2026-08-31

[Open the interactive flashcards and practice exam](index.html)

These notes summarize every unit in the Microsoft Learn module and expand the key distinctions most likely to appear in scenario-based questions. Model availability, prices, portal screens, and product capabilities can change, so use the linked Microsoft pages as the source of truth.

## Learning objectives

By the end of this module, you should be able to:

- [ ] Explore, search, and filter models in the Foundry Models catalog.
- [ ] Compare models using quality, safety, cost, and performance benchmarks.
- [ ] Select an appropriate model and deployment type for a workload.
- [ ] Deploy a model to an endpoint and test it in the playground.
- [ ] Evaluate model performance using manual and automated approaches.
- [ ] Select appropriate generation-quality, safety, and NLP evaluation metrics.
- [ ] Use evaluation results to improve a generative AI solution.

## Module map

| Unit | Topic | Duration | Central question |
| ---: | --- | ---: | --- |
| 1 | Introduction | 3 min | Why is model selection a structured workflow rather than a one-time guess? |
| 2 | Explore the model catalog | 7 min | How do you narrow a large catalog to models that fit the use case? |
| 3 | Select models using benchmarks | 9 min | Which benchmark dimensions and metric directions matter? |
| 4 | Deploy models to endpoints | 8 min | Which deployment type, endpoint, and configuration should you use? |
| 5 | Evaluate model performance | 10 min | How do manual, AI-assisted, safety, and NLP evaluations differ? |
| 6 | Exercise | 20 min* | How do you compare, deploy, test, and evaluate models in the portal? |
| 7 | Knowledge check | 3 min | Can you recognize throughput, Global Standard, and fluency? |
| 8 | Summary | 3 min | Can you connect selection, deployment, evaluation, and iteration? |

*The Learn unit lists 20 minutes; the current linked exercise estimates approximately 45 minutes. Allow extra time for deployment and evaluation jobs.

## The model lifecycle in one view

1. **Define requirements.** Identify the task, modalities, quality target, safety needs, latency, throughput, budget, data residency, and supported features.
2. **Discover candidates.** Search and filter the Foundry Models catalog.
3. **Inspect model cards.** Review the provider, capabilities, responsible AI information, benchmarks, and supported deployment options.
4. **Compare benchmarks.** Evaluate quality, safety, cost, and performance tradeoffs using the leaderboard, scenario views, charts, and side-by-side comparisons.
5. **Deploy a candidate.** Choose a supported deployment type and create a callable deployment.
6. **Test manually.** Use the playground with representative prompts, system messages, parameters, and edge cases.
7. **Evaluate systematically.** Run manual reviews and automated evaluations against representative data.
8. **Improve and repeat.** Adjust prompts, models, grounding, safety controls, or fine-tuning, and then evaluate again.

> **Exam mindset:** A leaderboard identifies promising candidates; it does not prove that a model will meet your application's requirements. Validate the deployed model with representative data and task-specific criteria.

---

## Unit 1 — Introduction

[Open Unit 1](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/1-introduction)

### Why model selection matters

An effective generative AI application depends on selecting a foundation model that fits its specific workload. With a large catalog, the strongest general-purpose model is not automatically the best choice.

A useful selection process asks:

- Can the model perform the required task?
- Does it accept and produce the required modalities?
- Does it support required features such as reasoning, tool calling, structured output, or vision?
- Does its quality meet the workload's accuracy and instruction-following needs?
- Does its safety behavior match the application's exposure and risk?
- Can it meet latency and throughput requirements?
- Is its token or infrastructure cost sustainable at the expected volume?
- Is it available in a deployment type and region that meet residency and compliance requirements?

### Microsoft Foundry's role

The Microsoft Foundry portal supports the complete workflow:

- Discover models from Microsoft, OpenAI, Anthropic, Meta, Hugging Face, and other providers.
- Compare candidates with benchmarks for quality, safety, cost, and performance.
- Deploy a selected model to an endpoint.
- Test the deployment interactively.
- Evaluate it manually and with automated metrics.

The module currently describes a catalog of more than 1,900 models. Treat that number as time-sensitive; the enduring skill is knowing how to filter and compare the catalog.

### Running example

For a retail customer-support chatbot, selection requirements might include:

- Understanding customer questions.
- Producing accurate and relevant answers.
- Maintaining an appropriate brand tone.
- Resisting harmful or inappropriate output.
- Meeting interactive latency targets.
- Operating within the support workload's budget.

The correct model is the one that satisfies this combined requirement set—not simply the model with the highest overall benchmark.

---

## Unit 2 — Explore the model catalog

[Open Unit 2](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/2-explore-model-catalog)

### What the catalog contains

The Foundry Models catalog is the central place to discover and compare models.

It contains two broad commercial categories:

| Category | Billing and terms |
| --- | --- |
| **Models sold directly by Azure** | Billed through the Azure subscription; includes Azure OpenAI models and models from Microsoft and other providers |
| **Partner and community models** | Supplied by trusted partners or the community; each can have its own license, pricing, and Azure Marketplace terms |

### Model cards

Each model has a model card that helps determine suitability. Review:

- Provider and model family.
- Supported capabilities and inference tasks.
- Benchmark metrics.
- Responsible AI considerations and limitations.
- Supported deployment options.
- Input and output formats.
- Context limits and supported features.

A model card describes a model. It is not the same as a deployment, and reading it does not replace application-specific evaluation.

### Catalog filters

| Filter | What it narrows |
| --- | --- |
| **Collection** | Groups such as models provided directly in Azure or models from the Hugging Face repository |
| **Capabilities** | Reasoning, tool calling, multimodal processing, and other abilities |
| **Source** | Provider, such as Azure OpenAI, Microsoft, Cohere, Mistral, Meta, or Anthropic |
| **Inference tasks** | Text generation, summarization, translation, image generation, speech synthesis, and other tasks |
| **Fine-tuning methods** | Models that support a required customization method |
| **Industry** | Models trained on industry-specific data, such as medical or legal content |

Search by keyword when you know a model or family name. Combine filters when the requirement is capability-driven.

### Large and small language models

| Model category | Strengths | Tradeoffs and good fits |
| --- | --- | --- |
| **Large language model (LLM)** | Deep reasoning, complex generation, broad knowledge, and extensive context understanding | Usually consumes more compute and can cost more; suited to sophisticated or reasoning-heavy applications |
| **Small language model (SLM)** | Efficient, faster, cost-effective, and able to run on lower-end hardware or edge devices | Better when common NLP tasks, speed, footprint, or cost matter more than the most complex reasoning |

Model size alone is not a quality decision. Match capability and operating constraints to the workload.

### Chat completion and reasoning models

- **Chat completion models** produce coherent, contextually appropriate responses and commonly power conversations and content-generation applications.
- **Reasoning models** are optimized for harder multistep work such as mathematics, coding, science, strategy, and logistics.

Reasoning capability can improve difficult tasks but can also affect latency and cost. Use representative evaluation to decide whether the additional capability is worth the tradeoff.

### Specialized model types

| Model type | Purpose | Common scenarios |
| --- | --- | --- |
| **Embedding model** | Converts content into numerical vector representations | Semantic search, recommendations, and retrieval-augmented generation |
| **Image generation model** | Creates images from text descriptions or other input | Marketing assets, illustrations, and design mockups |
| **Video generation model** | Creates video from text or reference input | Generated video content |
| **Image analysis model** | Accepts visual input and produces an interpretation or natural-language output | Image descriptions and visual question answering |
| **Text-to-speech model** | Converts text into synthesized audio | Spoken responses and narration |
| **Speech-to-text model** | Converts spoken audio into a transcript | Transcription and voice input |

### Regional and domain-specific models

Some models are optimized for a language, region, or industry. A specialized model can outperform a general-purpose model in its intended domain.

Evaluate:

- Whether training data reflects the target domain or language.
- Licensing and usage restrictions.
- Availability in the required Azure geography.
- Deployment and fine-tuning support.
- Performance on representative domain data.

### High-yield distinctions

- **Embedding** creates vectors for similarity; it does not generate a conversational answer.
- **Image generation** creates visual content; **image analysis** interprets it.
- **Speech to text** transcribes; **text to speech** synthesizes.
- **Tool calling** is a model capability; it does not mean a tool has already been configured.
- **Model card** describes the offering; **deployment** makes it callable.

---

## Unit 3 — Select models using benchmarks

[Open Unit 3](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/3-select-models-benchmarks)

### Why benchmarks are useful

Benchmarks provide objective, standardized measurements for comparing model candidates before deployment. Microsoft Foundry organizes them into:

- Quality.
- Safety.
- Cost.
- Performance.

Benchmarks reduce guesswork, but they use standardized datasets and traffic patterns. Use them to shortlist models, then evaluate candidates against your own use cases.

### Where to find benchmarks

| Portal location | Best use |
| --- | --- |
| **Model leaderboard** | Compare rankings across available models and identify strong candidates for a metric or scenario |
| **Model card > Benchmarks** | Inspect one model's detailed results and compare it with similar models |

### Quality benchmarks

Quality benchmarks assess whether responses are accurate, coherent, contextually appropriate, and capable across tasks.

The **Quality index** averages normalized accuracy scores from multiple public benchmark datasets. Scores range from 0 to 1, and **higher is better**.

| Dataset | What it emphasizes |
| --- | --- |
| Arena-Hard | Adversarial question answering |
| BIG-Bench Hard | Challenging reasoning |
| GPQA | Graduate-level, multidisciplinary questions |
| HumanEval+ and MBPP+ | Code generation |
| MATH | Mathematical reasoning |
| MMLU-Pro | General knowledge |
| IFEval | Instruction following |

An overall quality index can hide task-level differences. If your application is primarily coding, instruction following, or mathematics, inspect the relevant scenario and dataset results.

### Safety benchmarks

#### HarmBench and attack success rate

HarmBench measures resistance to unsafe generation using **attack success rate (ASR)**. **Lower ASR is better** because fewer attacks successfully produce the targeted harmful behavior.

It covers:

- Standard harmful behavior, such as cybercrime or illegal activity.
- Contextually harmful behavior, such as misinformation, harassment, or bullying.
- Copyright violations.

#### ToxiGen and F1

ToxiGen measures detection of adversarial and implicit hate speech. A **higher F1 score is better** because it reflects stronger combined precision and recall.

#### WMDP

WMDP measures knowledge in biosecurity, cybersecurity, and chemical security. A higher score indicates more knowledge of potentially dangerous capabilities. Do not misread a higher WMDP value as automatically meaning “safer”; interpret it as a capability and risk signal.

### Cost benchmarks

Foundry displays pricing for supported serverless API deployments and Azure OpenAI models.

| Metric | Meaning | Direction |
| --- | --- | --- |
| Cost per input tokens | Price to process 1 million input tokens | Lower is cheaper |
| Cost per output tokens | Price to generate 1 million output tokens | Lower is cheaper |
| Estimated cost | Combined estimate using a typical 3:1 input-to-output token ratio | Lower is cheaper |

The 3:1 estimate is a comparison assumption. Your actual cost depends on your application's real input and output distribution, caching, model choice, and traffic.

### Performance benchmarks

#### Latency

| Metric | Meaning | Preferred direction |
| --- | --- | --- |
| Latency mean | Average response-processing time | Lower |
| P50 latency | Median; half of requests are faster | Lower |
| P90 latency | 90% of requests complete faster than this value | Lower |
| P95 latency | 95% of requests complete faster than this value | Lower |
| P99 latency | 99% of requests complete faster than this value | Lower |
| Time to first token (TTFT) | Delay until the first streamed token arrives | Lower |
| Time between tokens | Delay between consecutive output tokens | Lower |

High-percentile latency exposes slow-tail behavior that an average can conceal. P99 is especially useful when rare but severe delays matter.

#### Throughput

| Metric | Meaning | Preferred direction |
| --- | --- | --- |
| Generated tokens per second (GTPS) | Output tokens generated each second | Higher |
| Total tokens per second (TTPS) | Combined input and output tokens processed each second | Higher |

The leaderboard summarizes performance with mean TTFT and mean GTPS. Interactive applications generally favor low latency and high throughput. Asynchronous batch work might prioritize cost instead.

### Leaderboards and comparison tools

#### Scenario leaderboards

Use a scenario leaderboard when the application maps to a specific use case such as:

- Reasoning.
- Coding.
- Mathematics.
- Question answering.
- Groundedness.

Scenario-specific performance can be more useful than overall quality.

#### Trade-off charts

Trade-off charts compare two dimensions, such as:

- Quality versus cost.
- Quality versus throughput.
- Quality versus safety.

Models near the top-right perform well on both plotted dimensions. The best choice still depends on requirements: a slightly less accurate model can be preferable if it is substantially faster or cheaper.

#### Side-by-side comparison

Select two or three models and compare:

- Quality, safety, and throughput benchmarks.
- Context window, training information, and supported languages.
- Supported endpoints and deployment options.
- Features such as function calling, structured output, and vision.

### Direction cheat sheet

| Metric | Better result |
| --- | --- |
| Quality index | Higher |
| ToxiGen F1 | Higher |
| GTPS and TTPS | Higher |
| HarmBench ASR | Lower |
| Estimated cost | Lower |
| Mean, P50, P90, P95, and P99 latency | Lower |
| TTFT and time between tokens | Lower |

---

## Unit 4 — Deploy models to endpoints

[Open Unit 4](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/4-deploy-models)

### Model versus deployment

- A **model** is the catalog offering or trained artifact.
- A **deployment** is a configured, callable serving route for a model.
- An **endpoint** is the URL through which a client sends requests.
- The **deployment name** is supplied in the API's model parameter to route a request.

You can deploy the same model more than once with different deployment names or configurations.

### Deployment types

| Deployment type | Scope and billing | Best fit |
| --- | --- | --- |
| **Global Standard** | Can use any Azure region; pay per token; highest quota | General workloads; preferred in Foundry resources when residency requirements allow |
| **Global Provisioned** | Can use any Azure region; reserved provisioned throughput units (PTUs) | Predictable, high-volume throughput |
| **Global Batch** | Can use any Azure region; large asynchronous work at a 50% discount, completed within 24 hours | Cost-optimized, noninteractive bulk jobs |
| **Data Zone Standard** | Processing stays within a supported data zone such as the EU or US; pay per token | Data-zone compliance with elastic usage |
| **Data Zone Provisioned** | Reserved PTUs within a data zone | Predictable throughput plus data-zone residency |
| **Data Zone Batch** | Asynchronous batch processing within a data zone | Bulk jobs requiring data-zone residency |
| **Standard** | Single Azure region; pay per token | Regional data residency or lower-volume workloads |
| **Regional Provisioned** | Reserved PTUs within one region | Predictable throughput and strict regional scope |
| **Developer** | Can use any Azure region; pay per token | Evaluation of fine-tuned models only |

Each catalog model supports a particular subset of deployment types. The portal can choose a recommended default based on the model and environment.

> **High-yield rule:** Use Global Standard when possible for general workloads and maximum capabilities. Choose provisioned throughput for predictable sustained volume, batch for asynchronous cost optimization, and data-zone or regional options when residency requires them.

### Managed compute

Some models use managed compute rather than a serverless API deployment. Configure:

- A supported virtual machine SKU.
- Instance count for capacity, load distribution, and redundancy.
- Sufficient Azure Machine Learning compute quota for the chosen SKU.

Managed compute provides more infrastructure control but requires capacity planning and VM-based billing.

### Deployment workflow

1. In the Foundry portal, open **Discover > Models**.
2. Open the model card and verify specifications and supported deployment types.
3. Select **Deploy**.
4. Choose default settings for a quick recommended deployment or custom settings for more control.
5. Review and accept Azure Marketplace terms when a partner or community model requires them.
6. Set a meaningful deployment name and supported deployment type.
7. For managed compute, select the VM SKU and instance count.
8. Deploy and verify that the status becomes **Succeeded**.
9. Test the deployment in the playground.

Models sold directly by Azure do not require a separate Marketplace subscription. Partner and community models commonly do.

### Manage deployments

Open **Build > Models** to see deployments in the resource. A deployment's details include:

- Configuration and status.
- Endpoint URL.
- Authentication keys or tokens.
- Monitoring and usage metrics.
- Options to adjust settings or delete the deployment.

### Test in the playground

The playground lets you test without first writing a client application.

Use it to:

- Send simple prompts that verify basic behavior.
- Test complex multistep reasoning.
- Request a required format, schema, tone, or style.
- Explore edge cases and limitations.
- Adjust system messages that apply context, tone, and instructions to all user input.
- Compare model deployments side by side.

Generation parameters include:

| Parameter | Effect |
| --- | --- |
| **Temperature** | Controls the balance between consistency and creativity |
| **Maximum tokens** | Limits generated response length |
| **Top-p** | Controls nucleus sampling by limiting choices to a cumulative probability mass |

The **Code** tab generates programmatic examples for supported languages such as Python, C#, and JavaScript, including endpoint configuration, authentication, and request structure.

### Programmatic access

A client needs:

1. **Endpoint URL** — where requests are sent.
2. **Authentication** — a key or an identity token.
3. **Deployment name** — used in the model parameter.

Microsoft Foundry supports:

- Project endpoints for Foundry-specific functionality.
- OpenAI v1 endpoints for broad compatibility with OpenAI model APIs.

Prefer Microsoft Entra ID authentication in production. It avoids embedding static service keys and supports identity-based access control.

---

## Unit 5 — Evaluate model performance

[Open Unit 5](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/5-evaluate-performance)

### Why evaluation is necessary

Evaluation supports:

- **Quality assurance:** find inaccurate, irrelevant, or poorly formed responses before production.
- **User satisfaction:** understand whether responses are useful, appropriate, and clear.
- **Continuous improvement:** measure whether prompts, features, grounding, or model changes improve the solution.
- **Compliance and safety:** verify policy adherence, harmful-content behavior, privacy, and data-protection requirements.

Evaluation is an ongoing lifecycle activity, not only a predeployment gate.

### Manual evaluation

#### Interactive playground testing

Use diverse prompts to inspect:

- Incorrect information.
- Inappropriate tone.
- Failure to follow instructions.
- Weaknesses and limitations.
- Differences between models under synchronized prompts and system instructions.

This approach is fast and exploratory, but it does not scale and can be subjective.

#### Structured review

Build representative test cases and ask human evaluators to rate criteria such as:

| Criterion | Question |
| --- | --- |
| Relevance | Does the response address the request? |
| Informativeness | Does it contain sufficient useful detail? |
| Engagement | Is it appropriately conversational and interesting? |
| Accuracy | Are facts and claims correct? |
| Safety | Does it avoid harmful, biased, or inappropriate content? |

Rating scales such as 1–5 convert human judgments into aggregate measures.

#### User studies

Actual or representative users can expose issues missed in controlled testing, including confusing phrasing, missing context, workflow friction, and unmet expectations.

Manual evaluation is especially useful for subjective qualities such as contextual appropriateness, user satisfaction, and brand alignment.

### Automated generation-quality metrics

| Metric | What it measures |
| --- | --- |
| **Groundedness** | Whether a response is supported by supplied context rather than speculation |
| **Groundedness Pro** | Binary grounded/not-grounded assessment for strict factual-support scenarios |
| **Relevance** | Whether the response addresses the user's question or request |
| **Coherence** | Whether ideas flow logically and remain consistent |
| **Fluency** | Linguistic correctness and natural-language quality |

Do not confuse:

- Groundedness with factual correctness outside the supplied context.
- Relevance with completeness.
- Coherence with grammatical fluency.

### Risk and safety metrics

Foundry evaluators can identify:

- Self-harm content.
- Hateful and unfair content.
- Violent content.
- Sexual content.
- Protected or copyrighted material.
- Indirect attacks or jailbreak attempts.

Content-harm results aggregate as a **defect rate**: the percentage of responses above a severity threshold, typically Medium. For protected material and indirect attacks:

**Defect rate = true instances ÷ total instances × 100**

Lower defect rates are preferable.

### AI-assisted evaluation

For an AI-assisted evaluation, select a GPT evaluator model. The evaluator analyzes the target model's responses and assigns scores according to the selected criteria.

Remember:

- The evaluator model is distinct from the target model being evaluated.
- AI-assisted scoring scales better than manual review.
- The evaluator's prompts, definitions, and limitations affect the result.
- Important high-risk scenarios can still require human review.

### Mathematical NLP metrics

These metrics do not require an evaluator model but commonly require a ground-truth or reference answer.

| Metric | Method | Common fit |
| --- | --- | --- |
| **F1-score** | Balances precision and recall based on shared words or labels | Text classification and information retrieval |
| **BLEU** | Compares n-grams between candidate and reference text | Machine translation |
| **METEOR** | Extends translation comparison with synonyms, stemming, and paraphrases | More flexible translation comparison |
| **ROUGE** | Emphasizes recall of reference content | Summarization |
| **GLEU** | BLEU variant designed for sentence-level evaluation | Sentence-level text comparison |

NLP overlap metrics work best when a definitive reference is meaningful. They are less suitable for open-ended generation in which many different responses can be valid.

### Comprehensive evaluation flows

The Foundry portal Evaluation feature can evaluate:

| Target | How it works |
| --- | --- |
| **Model** | Send prompts to a deployed model and evaluate the generated outputs |
| **Agent** | Send user-defined prompts to an agent and evaluate its responses |
| **Dataset** | Evaluate outputs that were generated previously and stored in the dataset |

For model or agent evaluation, provide a dataset of inputs. Options include:

- Upload a new CSV or JSONL dataset.
- Reuse an existing project dataset.
- Generate a synthetic dataset from a topic description, row count, generator model, and optional seed files.

For a dataset-target evaluation, the file must already contain the required inputs and model-generated responses.

### Evaluation job workflow

1. Choose the model, agent, or dataset target.
2. Select or create representative evaluation data.
3. Configure the target model and system or developer prompt where required.
4. Select evaluation metrics and evaluators.
5. Map dataset fields to evaluator inputs.
6. Review and submit the evaluation.
7. Allow the asynchronous job to process the dataset.
8. Review aggregate metrics and row-level prompt details.
9. Investigate failures and patterns.

### Evaluator library

Open the **Evaluator library** tab from the project's Evaluation page to:

- View Microsoft-curated quality, safety, and performance evaluators.
- Inspect descriptions, parameters, and associated files.
- Review annotation prompts for quality evaluators.
- Review definitions and severity levels for safety evaluators.
- Create and manage custom evaluators.
- Compare versions, restore earlier versions, and collaborate.

### Iterate from results

If quality is below the requirement, consider:

- Refining system and user prompts.
- Trying a more suitable model.
- Adding RAG to ground answers in organizational data.
- Fine-tuning when supported and justified.

If safety results are unacceptable, consider:

- Content filters and Azure AI Content Safety.
- Prompt hardening and clearer safety instructions.
- Output validation before content reaches the user.

Establish evaluation baselines early. Re-run the same representative evaluations after changes so improvements and regressions are measured objectively.

---

## Unit 6 — Exercise: Select, deploy, and evaluate models

[Open Unit 6](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/6-exercise) · [Open the full exercise](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/02-model-catalog-evaluation.html)

The exercise uses the Foundry portal to compare two models, deploy and test them, and evaluate one with synthetic data. Some technologies are in preview or active development, so names and navigation can change.

### Prerequisite

- An Azure subscription with permission to create AI resources.

### Part 1: Create a Foundry project

1. Open https://ai.azure.com and sign in.
2. Enable the new Foundry experience if necessary.
3. Create a uniquely named project.
4. In advanced options, select the parent Foundry resource, subscription, resource group, and a recommended region.
5. Wait for the project home page.

### Part 2: Explore the model catalog

1. Open **Discover > Models**.
2. Search for **gpt-5.2**.
3. Open its model card and review the details.
4. Open the **Benchmarks** page.
5. Compare its standardized results with models used for similar scenarios.

### Part 3: Use the leaderboard

1. Select **View leaderboard**.
2. Review top models by quality, safety, cost, and performance.
3. In the trade-off chart, compare **gpt-5.2** and **gpt-5-mini** using:
   - Cost.
   - Throughput.
   - Safety.
4. Select both models and open the detailed side-by-side comparison.
5. Review:
   - Quality, safety, and throughput.
   - Supported input and output formats.
   - Context limits and training information.
   - Supported endpoints and agent compatibility.
   - Features required by the application.

### Part 4: Deploy both models

1. Deploy **gpt-5.2** with default settings.
2. Record its deployment name.
3. From the playground, browse additional models.
4. Deploy **gpt-5-mini**.
5. Record its deployment name.

The deployment name—not necessarily the model-family name—is what application code sends in the model parameter.

### Part 5: Compare models in the playground

1. Select gpt-5-mini in one comparison pane and gpt-5.2 in the other.
2. Send the same river-crossing puzzle about a fox, chicken, and bag of grain.
3. Ask both models to explain their reasoning.
4. Compare:
   - Accuracy.
   - Reasoning quality.
   - Response style.

Synchronized prompts make differences easier to attribute to the model rather than to test inputs.

### Part 6: Evaluate with synthetic data

#### Target

- Create an evaluation.
- Select **Model** as the target.
- Select only the gpt-5.2 deployment.

#### Data

- Select **Synthetic generation**.
- Use gpt-5.2 as the generator.
- Generate 45 travel-related rows.
- Ask for varied travel questions including content-safety and security tests.
- Leave seed data blank in the exercise.

#### Configure model

Set a developer prompt that defines a helpful travel assistant providing accurate, detailed, practical advice.

#### Criteria

- Review the suggested AI-as-a-judge evaluators.
- Following the current exercise, remove the evaluators under Agents and Safety and leave the remaining suggested criteria enabled.

#### Submit

- Review the configuration.
- Name the run, for example **travel-assistant-eval**.
- Submit the asynchronous evaluation job.

### Part 7: Analyze results

1. Open the completed run.
2. Review overview metrics and detailed row-level results.
3. Inspect failures rather than focusing only on aggregate scores.
4. Select **Analyze results**, choose gpt-5.2, and start analysis.
5. Review failure clusters and AI-generated improvement suggestions.
6. Decide whether a refusal represents desirable safety behavior or a failure for the intended use case.

### Part 8: Clean up

When the resources are no longer required:

1. Open the exercise resource group in the Azure portal.
2. Confirm that it contains only resources you intend to remove.
3. Delete the resource group to prevent continuing charges.

### Lab completion record

- [ ] Foundry project created in a recommended region
- [ ] gpt-5.2 model card and benchmarks reviewed
- [ ] Quality, cost, throughput, and safety views compared
- [ ] gpt-5.2 and gpt-5-mini compared side by side
- [ ] Both models deployed and deployment names recorded
- [ ] Both deployments tested with synchronized prompts
- [ ] Synthetic dataset of 45 travel-related rows generated
- [ ] Model evaluation configured and submitted
- [ ] Aggregate results, row details, and failure clusters reviewed
- [ ] Exercise resources removed when no longer needed

---

## Unit 7 — Knowledge check

[Open Unit 7](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/7-knowledge-check)

| Question | Correct answer | Why |
| --- | --- | --- |
| Which model benchmark indicates the ability to process prompts and return comprehensive responses quickly? | **Throughput** | Throughput measures processing volume, such as generated or total tokens per second. |
| Which Foundry deployment type is best for general use while offering the largest quota? | **Global Standard** | It is the recommended general-purpose, pay-per-token option and provides the highest quota. |
| Which evaluation metric measures linguistic correctness and natural-language quality? | **Fluency** | Fluency evaluates grammatical and natural language quality; groundedness and relevance measure different properties. |

### Additional self-test

1. Which catalog filter finds models capable of tool calling?
2. Which model type converts text into vectors for semantic similarity?
3. What does a lower HarmBench ASR indicate?
4. Which latency percentile exposes the slowest one percent of measured requests?
5. Which deployment type suits predictable high-volume usage across Azure regions?
6. Which deployment type provides discounted asynchronous processing within 24 hours?
7. What three connection values does client code need?
8. Which metric is commonly used for summarization with a reference answer?
9. Which quality metric asks whether the response is supported by provided context?
10. Why should the same evaluation be rerun after a prompt or model change?

<details>
<summary>Self-test answers</summary>

1. The Capabilities filter.
2. An embedding model.
3. Fewer attacks successfully elicit the targeted unsafe behavior, indicating stronger resistance.
4. P99 latency.
5. Global Provisioned.
6. Global Batch.
7. Endpoint URL, authentication credential or token, and deployment name.
8. ROUGE.
9. Groundedness.
10. To measure improvement objectively and detect regressions against an established baseline.

</details>

---

## Unit 8 — Summary

[Open Unit 8](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/8-summary)

The complete workflow is:

1. Filter the model catalog by task, capability, source, fine-tuning support, or industry.
2. Inspect model cards.
3. Compare candidates across quality, safety, cost, and performance.
4. Select a deployment type that fits traffic, residency, latency, throughput, and cost.
5. Deploy and test in the playground.
6. Evaluate against representative data with appropriate manual and automated methods.
7. Use results to improve prompts, model selection, grounding, safety controls, or fine-tuning.
8. Re-evaluate after changes and monitor the production solution.

### Next steps after this module

- Integrate deployed models with SDKs, REST APIs, and portal-generated code samples.
- Add RAG when answers should be grounded in organizational data.
- Add Azure AI Content Safety and content filters.
- Fine-tune supported models when simpler improvements do not meet specialized requirements.
- Monitor usage, latency, cost, errors, and availability with Azure Monitor and Application Insights.
- Collect user feedback and run periodic re-evaluations.

## High-yield review sheet

### Selection clues

| Scenario | Strong starting choice |
| --- | --- |
| Deep multistep reasoning with a broad context | LLM or reasoning model |
| Lower cost, low latency, edge hardware, or focused NLP | SLM |
| Semantic search, recommendations, or RAG retrieval | Embedding model |
| Domain-specific terminology and tasks | Industry or domain-specific model |
| Visual interpretation | Multimodal image-analysis model |
| New visual content | Image or video generation model |
| Spoken input | Speech-to-text model |
| Spoken output | Text-to-speech model |

### Deployment clues

| Requirement | Deployment type |
| --- | --- |
| General pay-per-token use and maximum quota | Global Standard |
| Predictable high throughput across Azure regions | Global Provisioned |
| Discounted asynchronous processing within 24 hours | Global Batch |
| Pay-per-token use confined to an EU or US data zone | Data Zone Standard |
| Reserved throughput confined to a data zone | Data Zone Provisioned |
| Asynchronous processing confined to a data zone | Data Zone Batch |
| Pay-per-token use in one Azure region | Standard |
| Reserved throughput in one Azure region | Regional Provisioned |
| Fine-tuned model evaluation | Developer |

### Evaluation-metric clues

| Requirement | Metric or approach |
| --- | --- |
| Supported by supplied context | Groundedness |
| Strict binary context support | Groundedness Pro |
| Addresses the user's request | Relevance |
| Logical flow and consistency | Coherence |
| Grammar and natural language quality | Fluency |
| Translation n-gram overlap | BLEU |
| Translation with synonyms and stemming | METEOR |
| Summary coverage and recall | ROUGE |
| Balanced precision and recall | F1 |
| Harmful-response frequency | Defect rate |
| Subjective brand alignment or user satisfaction | Manual review or user study |

### Common exam traps

- The highest overall quality model is not automatically the best workload fit.
- Higher is not better for every metric: ASR, cost, latency, TTFT, time between tokens, and defect rate should be lower.
- WMDP measures sensitive-domain knowledge; a higher value does not directly mean safer behavior.
- Model benchmark results are not a replacement for evaluation on representative application data.
- A model name and deployment name can differ; inference routes by deployment name.
- Global Standard and Standard are different: global processing versus a single region.
- Provisioned means reserved PTUs and predictable throughput; Standard commonly means pay per token.
- Batch is asynchronous and cost-optimized, not intended for interactive chat.
- A model card is descriptive; a deployment is callable.
- Fluency is linguistic quality, coherence is logical flow, relevance is request alignment, and groundedness is context support.
- AI-assisted evaluators use a separate evaluator model.
- Mathematical NLP metrics usually need ground truth and can undervalue valid open-ended responses.

## Sources and further reading

- [Module landing page](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/)
- [Unit 1: Introduction](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/1-introduction)
- [Unit 2: Explore the model catalog](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/2-explore-model-catalog)
- [Unit 3: Select models using benchmarks](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/3-select-models-benchmarks)
- [Unit 4: Deploy models to endpoints](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/4-deploy-models)
- [Unit 5: Evaluate model performance](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/5-evaluate-performance)
- [Unit 6: Exercise launcher](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/6-exercise)
- [Unit 6: Full exercise](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/02-model-catalog-evaluation.html)
- [Unit 7: Knowledge check](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/7-knowledge-check)
- [Unit 8: Summary](https://learn.microsoft.com/en-us/training/modules/model-catalog-evaluate/8-summary)

## Glossary

| Term | Definition |
| --- | --- |
| Accuracy | Degree to which a response's facts and claims are correct. |
| Agent evaluation | Evaluation that sends user-defined prompts to an agent and scores its responses. |
| AI-assisted evaluation | Automated evaluation in which a separate evaluator model judges target-model outputs against defined criteria. |
| Arena-Hard | Public benchmark focused on adversarial question answering. |
| Attack success rate (ASR) | Percentage of attacks that elicit a targeted unsafe behavior; lower is better. |
| Automated evaluation | Consistent, scalable scoring of outputs using configured metrics and evaluators. |
| Azure Marketplace subscription | Acceptance of provider terms and commercial configuration that some partner or community models require before deployment. |
| Batch deployment | Deployment intended for large asynchronous jobs rather than interactive requests. |
| Benchmark | Standardized measurement used to compare models on a defined dataset, scenario, or operational dimension. |
| BIG-Bench Hard | Dataset of challenging tasks used to assess reasoning capability. |
| BLEU | N-gram overlap metric commonly used to compare machine translations with reference text. |
| Chat completion model | Language model designed to generate coherent, context-aware responses for conversations and content generation. |
| Coherence | Measure of whether a response flows logically and maintains consistent ideas. |
| Collection | Catalog grouping, such as models sold directly through Azure or models from a repository. |
| Content filter | Control that inspects and can block harmful model input or output. |
| Context window | Amount of tokenized context a model can consider in an interaction. |
| Data Zone Batch | Asynchronous batch deployment that keeps processing within a supported data zone. |
| Data Zone Provisioned | Reserved-PTU deployment providing predictable throughput within a data zone. |
| Data Zone Standard | Pay-per-token deployment that keeps processing within a supported data zone. |
| Dataset evaluation | Evaluation of model outputs that were generated previously and stored in a dataset. |
| Defect rate | Percentage of evaluated responses that meet a defined defect condition or exceed a severity threshold. |
| Deployment | Configured, callable serving route for a selected model. |
| Deployment name | Name supplied in the API model parameter to route a request to a particular deployment. |
| Developer deployment | Pay-per-token deployment type used only to evaluate fine-tuned models. |
| Embedding | Numerical vector representation that captures semantic features of content. |
| Embedding model | Model that creates vectors for semantic search, recommendations, and retrieval. |
| Endpoint | URL through which an application accesses a deployed model or service. |
| Engagement | Manual-review criterion for whether a response is interesting and appropriately conversational. |
| Estimated cost | Benchmark combining input and output token prices using an assumed traffic ratio, currently 3:1 in this module. |
| Evaluation baseline | Recorded metric result used to compare later versions and detect improvement or regression. |
| Evaluation job | Asynchronous Foundry process that evaluates rows in a dataset against selected metrics. |
| Evaluator | Component that calculates an evaluation metric from inputs, outputs, context, or reference data. |
| Evaluator library | Foundry location for curated and custom evaluators, their definitions, prompts, files, and versions. |
| F1-score | Harmonic balance of precision and recall, used for tasks such as classification and retrieval. |
| Fine-tuning | Additional training that adapts a supported model to a particular domain or task. |
| Fluency | Measure of linguistic correctness and natural-language quality. |
| Foundry Models catalog | Portal catalog for discovering, comparing, and deploying models from Azure, partners, and the community. |
| Generated tokens per second (GTPS) | Number of output tokens generated per second; higher means greater generation throughput. |
| GLEU | Sentence-level variation of BLEU used for text comparison. |
| Global Batch | Discounted deployment for large asynchronous jobs that can process across Azure regions within 24 hours. |
| Global Provisioned | Deployment using reserved PTUs across Azure regions for predictable high throughput. |
| Global Standard | General-purpose pay-per-token deployment that can process across Azure regions and offers the highest quota. |
| GPQA | Benchmark consisting of graduate-level multidisciplinary questions. |
| Ground truth | Expected answer or reference text against which generated output is compared. |
| Groundedness | Degree to which a response is supported by supplied context rather than speculation. |
| Groundedness Pro | Binary evaluator that classifies a response as grounded or not grounded. |
| HarmBench | Safety benchmark measuring resistance to standard, contextual, and copyright-related harmful behaviors. |
| HumanEval+ | Benchmark for evaluating generated programming solutions. |
| IFEval | Benchmark for instruction-following performance. |
| Image analysis model | Multimodal model that interprets images and produces descriptive or reasoned output. |
| Image generation model | Model that creates images from text descriptions or other input. |
| Inference task | Type of operation a model performs, such as generation, summarization, translation, or speech synthesis. |
| Informativeness | Manual-review criterion for sufficient useful detail. |
| Input-token cost | Price to process input tokens sent to a model. |
| Latency | Time required to process a request or deliver part or all of a response. |
| Large language model (LLM) | Language model suited to broad, complex generation and reasoning, typically with greater compute requirements. |
| MATH | Public benchmark for mathematical reasoning. |
| MBPP+ | Benchmark for code generation from programming problems. |
| Mean latency | Average processing time across measured requests. |
| METEOR | Translation metric that considers synonyms, stemming, and paraphrasing in addition to token overlap. |
| MMLU-Pro | Benchmark for general knowledge and reasoning across subjects. |
| Model card | Catalog page describing a model's provider, capabilities, limitations, benchmarks, responsible AI information, and deployment options. |
| Model evaluation | Evaluation that sends dataset prompts to a deployed model and scores the generated outputs. |
| Model leaderboard | Foundry view that ranks and compares models by quality, safety, cost, and performance. |
| Multimodal model | Model that processes or generates multiple content types, such as text and images. |
| N-gram | Sequence of N tokens used by metrics such as BLEU to compare candidate and reference text. |
| Nucleus sampling | Generation approach controlled by top-p that samples from tokens within a cumulative probability mass. |
| Output-token cost | Price to generate model output tokens. |
| P50 latency | Median latency; half of requests are faster and half are slower. |
| P90 latency | Latency threshold below which 90 percent of measured requests complete. |
| P95 latency | Latency threshold below which 95 percent of measured requests complete. |
| P99 latency | Latency threshold below which 99 percent of measured requests complete; exposes slow-tail behavior. |
| Playground | Portal interface for interactively testing deployed models without first writing client code. |
| Precision | Fraction of selected or generated positive results that are relevant or correct. |
| Protected material evaluator | Safety evaluator that identifies potential reproduction of copyrighted or proprietary content. |
| Provisioned throughput unit (PTU) | Reserved capacity unit used by provisioned deployments to deliver predictable throughput. |
| Quality index | Normalized 0-to-1 aggregate of accuracy results across multiple public quality benchmarks; higher is better. |
| Recall | Fraction of relevant or expected content successfully retrieved or included. |
| Regional Provisioned | Reserved-PTU deployment confined to one Azure region. |
| Relevance | Degree to which a response addresses the user's question or request. |
| Retrieval-augmented generation (RAG) | Pattern that retrieves relevant data and supplies it as context for model generation. |
| ROUGE | Recall-oriented overlap metric commonly used to evaluate summaries against reference text. |
| Safety benchmark | Standardized measurement of harmful, biased, sensitive, or otherwise unsafe model behavior. |
| Scenario leaderboard | Ranking focused on a use case such as reasoning, coding, mathematics, question answering, or groundedness. |
| Serverless API deployment | Hosted model deployment billed by usage without managing virtual machines. |
| Side-by-side comparison | Test or benchmark view that compares multiple models under aligned criteria or prompts. |
| Small language model (SLM) | Efficient language model suited to focused tasks, lower-cost operation, smaller hardware, or edge deployment. |
| Speech-to-text model | Model that converts speech-containing audio into a text transcript. |
| Standard deployment | Pay-per-token deployment confined to one Azure region. |
| Structured review | Human evaluation based on representative test cases, defined criteria, and rating scales. |
| Synthetic dataset | Artificially generated test cases created from a topic prompt, row count, model, and optional seed data. |
| System message | Persistent context, tone, role, or instruction applied to model interactions. |
| Temperature | Generation parameter controlling the balance between consistency and variability. |
| Text-to-speech model | Model that converts text into synthesized spoken audio. |
| Throughput | Volume of tokens or requests processed over time. |
| Time between tokens | Interval between consecutive streamed output tokens; lower is faster. |
| Time to first token (TTFT) | Delay from request submission until the first streamed token arrives; lower is faster. |
| Top-p | Nucleus-sampling parameter limiting candidate tokens to a cumulative probability threshold. |
| Total tokens per second (TTPS) | Combined input and output tokens processed each second; higher means greater throughput. |
| ToxiGen | Dataset for evaluating detection of adversarial and implicit hate speech, commonly reported with F1. |
| Trade-off chart | Visualization comparing two benchmark dimensions to help balance competing requirements. |
| User study | Evaluation using actual or representative users to identify real-world experience problems. |
| Video generation model | Model that creates video content from a prompt or reference input. |
| WMDP | Benchmark measuring knowledge in biosecurity, cybersecurity, and chemical security. |
