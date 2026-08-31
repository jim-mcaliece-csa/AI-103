window.AI103_EXAM_SECTIONS = [
  {
    id: "general",
    title: "General Questions",
    kind: "general",
    description: "Answer 42 questions covering model discovery, benchmark interpretation, deployment choices, playground testing, evaluation methods, metrics, and the hands-on exercise."
  },
  {
    id: "case-contoso-retail",
    title: "Case Study 1 — Contoso Retail",
    kind: "case-study",
    context: "Contoso Retail is choosing a foundation model for a public customer-support assistant. The assistant must solve complex, multistep return-policy questions, resist harmful requests, support function calling, and maintain a P95 response-time target. Traffic will be high, steady, and global; there is no regional or data-zone residency requirement, and the company is willing to reserve throughput for predictable capacity. The team will compare candidate models in Microsoft Foundry, test them side by side, deploy the selected model, and then run systematic evaluations."
  },
  {
    id: "case-fabrikam-content",
    title: "Case Study 2 — Fabrikam Content",
    kind: "case-study",
    context: "Fabrikam Content is evaluating a model that translates product text and summarizes long product manuals. The team has definitive reference translations and human-written reference summaries. It also has a help assistant whose open-ended answers should be grounded in the latest manuals. The initial evaluation finds weak groundedness and some unsafe responses. Fabrikam has only a small seed set, so it plans to generate additional synthetic test cases, run an asynchronous evaluation with multiple criteria, inspect aggregate and row-level results, and iterate before release."
  }
];

window.AI103_QUESTIONS = [
  {
    id: "G01",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan the model lifecycle",
    type: "single",
    prompt: "A team must choose from many foundation models for a new application. Which approach should the team take?",
    options: [
      "Deploy the newest model immediately and evaluate only after release.",
      "Use a structured process to discover, compare, deploy, and validate models against application requirements.",
      "Select the model with the largest parameter count without testing it.",
      "Choose a model solely from its provider name."
    ],
    correct: "Use a structured process to discover, compare, deploy, and validate models against application requirements.",
    rationale: "The module frames model selection as a complete workflow: discover candidates, compare relevant evidence, deploy a candidate, and validate its quality and safety for the specific use case."
  },
  {
    id: "G02",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan the model lifecycle",
    type: "order",
    prompt: "Arrange the major model lifecycle activities in the sequence emphasized by the module.",
    items: [
      "Evaluate performance with manual and automated approaches.",
      "Deploy the selected model to an endpoint.",
      "Explore and filter candidate models.",
      "Test the deployment in the playground.",
      "Compare candidates with relevant benchmarks."
    ],
    correct: [
      "Explore and filter candidate models.",
      "Compare candidates with relevant benchmarks.",
      "Deploy the selected model to an endpoint.",
      "Test the deployment in the playground.",
      "Evaluate performance with manual and automated approaches."
    ],
    rationale: "Discovery and evidence-based comparison precede deployment. Playground testing supplies quick feedback, while systematic evaluation validates behavior across broader test data."
  },
  {
    id: "G03",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan the model lifecycle",
    type: "yesno",
    prompt: "For each statement about model validation, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A benchmark leader is automatically the best model for every application.",
      "Manual testing and automated evaluation provide complementary evidence.",
      "Quality and safety requirements should be validated before production release."
    ],
    correct: [
      "No",
      "Yes",
      "Yes"
    ],
    rationale: "Model suitability depends on the application's requirements and trade-offs. Manual exploration and scalable automated metrics complement one another, and validation before production reduces user and organizational risk."
  },
  {
    id: "G04",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore the model catalog",
    type: "single",
    prompt: "Which statement describes Foundry Models sold directly by Azure?",
    options: [
      "They are always free and require no subscription.",
      "They are available only from community repositories.",
      "They are billed through the Azure subscription and include Azure OpenAI models plus models from Microsoft and other providers.",
      "They can be used only on managed virtual machines."
    ],
    correct: "They are billed through the Azure subscription and include Azure OpenAI models plus models from Microsoft and other providers.",
    rationale: "The catalog distinguishes models sold directly by Azure, which are billed through the Azure subscription, from partner and community models that have their own licensing and pricing."
  },
  {
    id: "G05",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore the model catalog",
    type: "yesno",
    prompt: "For each statement about catalog sources, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Partner and community models can have their own licensing and pricing.",
      "Every model in the catalog is supplied only by Azure OpenAI.",
      "The catalog includes providers such as Microsoft, OpenAI, Meta, Anthropic, Mistral, Cohere, and Hugging Face."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Microsoft Foundry aggregates models from many providers. Direct-from-Azure and partner or community offerings differ in commercial terms."
  },
  {
    id: "G06",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore the model catalog",
    type: "multiple",
    prompt: "Which six attributes can you use to filter models in the Foundry model catalog? Select six answers.",
    options: [
      "Collection",
      "Capabilities",
      "Source",
      "Inference tasks",
      "Fine-tuning methods",
      "Industry",
      "The developer's editor color theme",
      "The name of the consuming application's resource group"
    ],
    correct: [
      "Collection",
      "Capabilities",
      "Source",
      "Inference tasks",
      "Fine-tuning methods",
      "Industry"
    ],
    selectCount: 6,
    rationale: "The catalog supports keyword search and filters for collection, capabilities, source, inference task, supported fine-tuning method, and industry specialization."
  },
  {
    id: "G07",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore the model catalog",
    type: "matching",
    prompt: "Match each model category to its most characteristic use.",
    items: [
      "Large language model",
      "Small language model",
      "Embedding model",
      "Regional or domain-specific model"
    ],
    options: [
      "Convert content into numerical representations for semantic retrieval",
      "Specialized performance for a particular language, region, or industry",
      "Deep reasoning, complex generation, and extensive context understanding",
      "Efficient common language tasks on lower-end or edge hardware"
    ],
    correct: [
      "Deep reasoning, complex generation, and extensive context understanding",
      "Efficient common language tasks on lower-end or edge hardware",
      "Convert content into numerical representations for semantic retrieval",
      "Specialized performance for a particular language, region, or industry"
    ],
    rationale: "LLMs favor sophisticated tasks, SLMs favor efficiency, embedding models enable meaning-based retrieval, and specialized models can outperform general models in their target domain or language."
  },
  {
    id: "G08",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore the model catalog",
    type: "single",
    prompt: "A device must perform common language tasks locally, and speed, cost, and limited hardware matter more than the most complex reasoning. Which model category is the best starting point?",
    options: [
      "A video generation model",
      "A large reasoning model",
      "An image generation model",
      "A small language model"
    ],
    correct: "A small language model",
    rationale: "Small language models are optimized for efficiency and cost-effectiveness and can run on lower-end hardware or edge devices."
  },
  {
    id: "G09",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore the model catalog",
    type: "single",
    prompt: "Which model type should you select to create vector representations for semantic search and retrieval-augmented generation?",
    options: [
      "A speech synthesis model",
      "An embedding model",
      "A video generation model",
      "A chat completion model used without embeddings"
    ],
    correct: "An embedding model",
    rationale: "Embedding models convert text into numerical representations that support semantic search, recommendations, and retrieval-augmented generation."
  },
  {
    id: "G10",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore the model catalog",
    type: "matching",
    prompt: "Match each requirement to the specialized model type described in the catalog.",
    items: [
      "Create a marketing illustration from a text description.",
      "Create a video from a text description.",
      "Analyze a prompt that contains both text and an image.",
      "Convert written content into spoken audio.",
      "Transcribe spoken audio into text."
    ],
    options: [
      "Speech-to-text model",
      "Image analysis model",
      "Image generation model",
      "Text-to-speech model",
      "Video generation model"
    ],
    correct: [
      "Image generation model",
      "Video generation model",
      "Image analysis model",
      "Text-to-speech model",
      "Speech-to-text model"
    ],
    rationale: "The catalog includes task-specific model families for image and video creation, multimodal image analysis, speech synthesis, and transcription."
  },
  {
    id: "G11",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore the model catalog",
    type: "single",
    prompt: "Where should you look for a model's provider, capabilities, benchmark metrics, responsible AI considerations, and supported deployment options?",
    options: [
      "The model card",
      "The Azure resource group's activity log",
      "The application source repository",
      "The playground conversation history"
    ],
    correct: "The model card",
    rationale: "Each catalog model has a model card that consolidates the information needed to judge suitability, including provider, capabilities, benchmarks, responsible AI information, and deployment choices."
  },
  {
    id: "G12",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "single",
    prompt: "You want to see detailed benchmark charts for one candidate model and compare it with similar models. Which view should you open?",
    options: [
      "The deployment authentication page",
      "The resource group's cost analysis page",
      "The Benchmarks tab on the model card",
      "The playground Code tab"
    ],
    correct: "The Benchmarks tab on the model card",
    rationale: "The model card's Benchmarks tab provides detailed metrics for an individual model and comparison charts against similar models. The model leaderboard is the broader cross-catalog ranking view."
  },
  {
    id: "G13",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "yesno",
    prompt: "For each statement about the Quality index, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "It averages accuracy across multiple benchmark datasets.",
      "Its normalized values range from zero to one.",
      "A lower value indicates stronger general-purpose language performance."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "The Quality index summarizes performance across reasoning, knowledge, question answering, mathematics, coding, and instruction following. Scores are normalized from zero to one, and higher is better."
  },
  {
    id: "G14",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "matching",
    prompt: "Match each public quality benchmark to the capability it measures.",
    items: [
      "Arena-Hard",
      "HumanEval+ and MBPP+",
      "MATH",
      "IFEval"
    ],
    options: [
      "Instruction following",
      "Mathematical reasoning",
      "Adversarial question answering",
      "Code generation"
    ],
    correct: [
      "Adversarial question answering",
      "Code generation",
      "Mathematical reasoning",
      "Instruction following"
    ],
    rationale: "Foundry's quality comparison draws on standardized datasets, including Arena-Hard for adversarial questions, HumanEval+ and MBPP+ for code, MATH for mathematics, and IFEval for instruction following."
  },
  {
    id: "G15",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "single",
    prompt: "Two models have HarmBench Attack Success Rates of 0.08 and 0.31. Based only on this metric, which interpretation is correct?",
    options: [
      "The model at 0.31 is safer because higher is always better.",
      "The scores measure cost rather than safety.",
      "The models have identical resistance to unsafe requests.",
      "The model at 0.08 is safer because a lower Attack Success Rate is better."
    ],
    correct: "The model at 0.08 is safer because a lower Attack Success Rate is better.",
    rationale: "HarmBench measures how often attacks successfully elicit harmful behavior. A lower Attack Success Rate indicates a more robust model on that benchmark."
  },
  {
    id: "G16",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "matching",
    prompt: "Match each safety benchmark to what it measures.",
    items: [
      "HarmBench",
      "ToxiGen",
      "WMDP"
    ],
    options: [
      "Knowledge in biosecurity, cybersecurity, and chemical security",
      "Resistance to standard, contextual, and copyright-related harmful behaviors",
      "Detection of adversarial and implicit hate speech"
    ],
    correct: [
      "Resistance to standard, contextual, and copyright-related harmful behaviors",
      "Detection of adversarial and implicit hate speech",
      "Knowledge in biosecurity, cybersecurity, and chemical security"
    ],
    rationale: "HarmBench reports attack success, ToxiGen assesses toxic or hateful content detection with F1, and WMDP measures sensitive-domain knowledge. Their score direction and meaning are not interchangeable."
  },
  {
    id: "G17",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "single",
    prompt: "How does the catalog's estimated cost benchmark combine input and output pricing?",
    options: [
      "It assumes a typical ratio of three input tokens for every output token.",
      "It assumes input and output tokens are always equal in number and price.",
      "It includes only output-token price.",
      "It measures virtual-machine acquisition cost only."
    ],
    correct: "It assumes a typical ratio of three input tokens for every output token.",
    rationale: "Estimated cost provides one comparison value by combining per-million input and output token prices with a typical 3:1 input-to-output ratio. Lower values are more cost-effective under that assumption."
  },
  {
    id: "G18",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "yesno",
    prompt: "For each statement about latency metrics, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Latency P50 is the median request latency.",
      "Latency P95 means 95 percent of requests complete faster than that time.",
      "Time to first token measures the total price of a streaming response."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Percentiles describe the latency distribution. Time to first token measures responsiveness until the first streamed token arrives, not cost."
  },
  {
    id: "G19",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "matching",
    prompt: "Match each performance metric to its definition.",
    items: [
      "Generated tokens per second",
      "Total tokens per second",
      "Time between tokens"
    ],
    options: [
      "Interval between consecutive output tokens",
      "Combined input and output tokens processed each second",
      "Output tokens generated each second"
    ],
    correct: [
      "Output tokens generated each second",
      "Combined input and output tokens processed each second",
      "Interval between consecutive output tokens"
    ],
    rationale: "GTPS measures output generation rate, TTPS includes both input and output processing, and time between tokens measures the spacing of streamed output."
  },
  {
    id: "G20",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "single",
    prompt: "On a trade-off chart that compares two metrics where higher values are desirable, where do strong models appear?",
    options: [
      "Near the bottom-left corner",
      "Near the top-right corner",
      "Only on the horizontal axis",
      "Only in the model-card description"
    ],
    correct: "Near the top-right corner",
    rationale: "Trade-off charts plot two dimensions at once. When both plotted measures reward higher values, candidates toward the top-right perform well on both, though application constraints still determine the best choice."
  },
  {
    id: "G21",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Select models using benchmarks",
    type: "multiple",
    prompt: "Which four categories can you inspect in a side-by-side model comparison? Select four answers.",
    options: [
      "Quality, safety, and throughput benchmarks",
      "Context window, training data, and supported languages",
      "Supported deployment endpoints",
      "Features such as function calling, structured output, and vision",
      "The consuming application's private source code",
      "The model provider's employee directory"
    ],
    correct: [
      "Quality, safety, and throughput benchmarks",
      "Context window, training data, and supported languages",
      "Supported deployment endpoints",
      "Features such as function calling, structured output, and vision"
    ],
    selectCount: 4,
    rationale: "Foundry comparison combines benchmark evidence with model details, endpoint availability, and supported features so selection can reflect the complete application requirement."
  },
  {
    id: "G22",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Deploy models to endpoints",
    type: "matching",
    prompt: "Match each deployment type to its defining characteristic.",
    items: [
      "Global Standard",
      "Global Provisioned",
      "Global Batch",
      "Data Zone Standard",
      "Standard"
    ],
    options: [
      "Single-region, pay-per-token deployment",
      "Any-region asynchronous processing at a discount for jobs completed within 24 hours",
      "Any-region, pay-per-token deployment with the highest quota for general workloads",
      "Reserved provisioned throughput units that can use any Azure region",
      "Pay-per-token deployment that keeps data within a specified data zone"
    ],
    correct: [
      "Any-region, pay-per-token deployment with the highest quota for general workloads",
      "Reserved provisioned throughput units that can use any Azure region",
      "Any-region asynchronous processing at a discount for jobs completed within 24 hours",
      "Pay-per-token deployment that keeps data within a specified data zone",
      "Single-region, pay-per-token deployment"
    ],
    rationale: "Deployment types differ in geographic scope, billing, latency pattern, and capacity guarantees. Global, data-zone, and single-region variants address different residency and throughput needs."
  },
  {
    id: "G23",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Deploy models to endpoints",
    type: "single",
    prompt: "A general workload has no data-residency constraint and needs the largest available quota on pay-per-token billing. Which deployment type should you prefer when supported?",
    options: [
      "Data Zone Batch",
      "Developer",
      "Global Standard",
      "Regional Provisioned"
    ],
    correct: "Global Standard",
    rationale: "Global Standard is intended for general workloads, uses pay-per-token billing, and provides the highest quota. The module recommends it for Foundry resources whenever possible."
  },
  {
    id: "G24",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Deploy models to endpoints",
    type: "single",
    prompt: "A company submits large, noninteractive jobs that can finish within 24 hours and wants the documented 50 percent discount. Which deployment type should it use?",
    options: [
      "Global Batch",
      "Global Provisioned",
      "Standard",
      "Developer"
    ],
    correct: "Global Batch",
    rationale: "Global Batch is designed for large asynchronous jobs that can complete within 24 hours and is offered at a 50 percent discount."
  },
  {
    id: "G25",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Deploy models to endpoints",
    type: "single",
    prompt: "A pay-per-token application must keep its data within a specific EU or US data zone. Which deployment type best meets the requirement?",
    options: [
      "Global Standard",
      "Regional Provisioned",
      "Developer",
      "Data Zone Standard"
    ],
    correct: "Data Zone Standard",
    rationale: "Data Zone Standard keeps data within the specified data zone while retaining pay-per-token billing. Data Zone Provisioned is the reserved-PTU alternative."
  },
  {
    id: "G26",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Deploy models to endpoints",
    type: "single",
    prompt: "A global service has a predictable, consistently high request volume and wants reserved capacity. Which deployment type is the best fit?",
    options: [
      "Global Batch",
      "Global Provisioned",
      "Standard",
      "Developer"
    ],
    correct: "Global Provisioned",
    rationale: "Global Provisioned uses reserved provisioned throughput units to provide predictable high throughput across Azure regions."
  },
  {
    id: "G27",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Deploy models to endpoints",
    type: "yesno",
    prompt: "For each deployment statement, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Default settings provide a quick deployment with recommended configuration.",
      "A partner or community model can require acceptance of Azure Marketplace terms.",
      "Every model supports every deployment type."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "The portal offers default or custom deployment settings. Some partner models require Marketplace agreement, and supported deployment types vary by model."
  },
  {
    id: "G28",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Deploy models to endpoints",
    type: "single",
    prompt: "During inference, which value routes an API request to a specific deployed model?",
    options: [
      "The resource-group name in the prompt",
      "The model-card benchmark identifier",
      "The deployment name supplied in the model parameter",
      "The playground conversation title"
    ],
    correct: "The deployment name supplied in the model parameter",
    rationale: "A deployment name identifies the callable deployment. Client code supplies it in the model parameter to route inference requests."
  },
  {
    id: "G29",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Deploy models to endpoints",
    type: "matching",
    prompt: "Match each connection detail to how an application uses it.",
    items: [
      "Endpoint URL",
      "Authentication key or identity token",
      "Deployment name"
    ],
    options: [
      "Routes the request to the intended deployed model through the model parameter",
      "Proves the caller's identity or possession of a supported secret",
      "Specifies where the application sends the API request"
    ],
    correct: [
      "Specifies where the application sends the API request",
      "Proves the caller's identity or possession of a supported secret",
      "Routes the request to the intended deployed model through the model parameter"
    ],
    rationale: "Programmatic access requires a service address, authentication, and a deployment identifier. Microsoft Entra ID tokens are recommended over static keys for production."
  },
  {
    id: "G30",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Deploy models to endpoints",
    type: "multiple",
    prompt: "Which four actions can you perform while testing a deployment in the Foundry playground? Select four answers.",
    options: [
      "Set a system message that guides context, tone, and behavior.",
      "Adjust temperature to trade creativity against consistency.",
      "Set a maximum token limit for responses.",
      "Adjust top-p nucleus sampling.",
      "Guarantee that benchmark results will match production traffic exactly.",
      "Increase Azure Machine Learning compute quota by changing the prompt."
    ],
    correct: [
      "Set a system message that guides context, tone, and behavior.",
      "Adjust temperature to trade creativity against consistency.",
      "Set a maximum token limit for responses.",
      "Adjust top-p nucleus sampling."
    ],
    selectCount: 4,
    rationale: "The playground supports prompt engineering and generation controls without client code. It cannot guarantee production outcomes or change subscription quota through a prompt."
  },
  {
    id: "G31",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Evaluate model performance",
    type: "matching",
    prompt: "Match each manual evaluation approach to its purpose.",
    items: [
      "Interactive playground testing",
      "Structured human review",
      "User study"
    ],
    options: [
      "Gather real-world feedback from actual or representative users",
      "Explore behavior qualitatively with diverse prompts and side-by-side responses",
      "Rate representative test cases against defined criteria and aggregate the ratings"
    ],
    correct: [
      "Explore behavior qualitatively with diverse prompts and side-by-side responses",
      "Rate representative test cases against defined criteria and aggregate the ratings",
      "Gather real-world feedback from actual or representative users"
    ],
    rationale: "Playground exploration reveals strengths and failures quickly, structured review produces consistent human ratings, and user studies expose issues in realistic use."
  },
  {
    id: "G32",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Evaluate model performance",
    type: "yesno",
    prompt: "For each statement about manual and automated evaluation, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Manual review can capture contextual appropriateness, user satisfaction, and brand alignment.",
      "Automated metrics scale efficiently and produce consistent measurements.",
      "Automated evaluation makes all human review unnecessary."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Manual judgment captures subjective and contextual qualities, while automated metrics provide scalable consistency. The approaches complement rather than replace one another."
  },
  {
    id: "G33",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Evaluate model performance",
    type: "matching",
    prompt: "Match each generation-quality evaluator to what it measures.",
    items: [
      "Groundedness",
      "Relevance",
      "Coherence",
      "Fluency"
    ],
    options: [
      "Linguistic correctness and natural language quality",
      "Whether the response addresses the user's request",
      "Whether ideas flow logically and remain consistent",
      "Whether claims are based on supplied context instead of speculation"
    ],
    correct: [
      "Whether claims are based on supplied context instead of speculation",
      "Whether the response addresses the user's request",
      "Whether ideas flow logically and remain consistent",
      "Linguistic correctness and natural language quality"
    ],
    rationale: "Groundedness checks support from context, relevance checks alignment to the request, coherence checks logical flow, and fluency checks linguistic quality. Groundedness Pro provides a binary grounded or not-grounded assessment."
  },
  {
    id: "G34",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Evaluate model performance",
    type: "matching",
    prompt: "Match each mathematical NLP metric to its defining use or behavior.",
    items: [
      "F1-score",
      "BLEU",
      "METEOR",
      "ROUGE",
      "GLEU"
    ],
    options: [
      "Recall-oriented comparison commonly used for summarization",
      "Sentence-level variant of BLEU",
      "Shared-word measure that balances precision and recall",
      "N-gram comparison commonly used for machine translation",
      "Translation comparison that also accounts for synonyms, stemming, and paraphrases"
    ],
    correct: [
      "Shared-word measure that balances precision and recall",
      "N-gram comparison commonly used for machine translation",
      "Translation comparison that also accounts for synonyms, stemming, and paraphrases",
      "Recall-oriented comparison commonly used for summarization",
      "Sentence-level variant of BLEU"
    ],
    rationale: "These metrics compare output with ground truth mathematically. They are useful when reference answers exist and are less suitable when many open-ended responses can be valid."
  },
  {
    id: "G35",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Evaluate model performance",
    type: "single",
    prompt: "What does a content-harm defect rate represent?",
    options: [
      "The percentage of evaluated responses that exceed the configured severity threshold",
      "The percentage of input tokens billed at a discount",
      "The median time until the first output token",
      "The average number of reference words shared with a response"
    ],
    correct: "The percentage of evaluated responses that exceed the configured severity threshold",
    rationale: "Content-harm results aggregate as the share of responses above a severity threshold, typically Medium. Protected-material and indirect-attack defect rates use true instances divided by total instances."
  },
  {
    id: "G36",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Evaluate model performance",
    type: "yesno",
    prompt: "For each statement about evaluation targets, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A model target generates outputs from evaluation prompts during the run.",
      "An agent target can be assessed with user-defined prompts.",
      "A dataset target can evaluate outputs already present in the test data."
    ],
    correct: [
      "Yes",
      "Yes",
      "Yes"
    ],
    rationale: "Foundry supports model, agent, and dataset targets. Model and agent runs generate responses to inputs, while dataset evaluation can assess pre-generated outputs."
  },
  {
    id: "G37",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Evaluate model performance",
    type: "multiple",
    prompt: "Which three dataset-source options are available when evaluating a model or agent? Select three answers.",
    options: [
      "Upload a new CSV or JSONL dataset.",
      "Use an existing project dataset.",
      "Generate a synthetic dataset from a topic prompt.",
      "Use the model card as if it were a test dataset.",
      "Use deployment quota as ground-truth output."
    ],
    correct: [
      "Upload a new CSV or JSONL dataset.",
      "Use an existing project dataset.",
      "Generate a synthetic dataset from a topic prompt."
    ],
    selectCount: 3,
    rationale: "Evaluation inputs can come from a new upload, an existing project dataset, or synthetic generation. Synthetic generation can also incorporate uploaded files to improve task relevance."
  },
  {
    id: "G38",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Evaluate model performance",
    type: "order",
    prompt: "Arrange the broad steps for a comprehensive Foundry evaluation in a valid sequence.",
    items: [
      "Review aggregate metrics and row-level results.",
      "Configure prompts, field mappings, and selected evaluators.",
      "Choose the model, agent, or dataset target.",
      "Submit the asynchronous evaluation job.",
      "Select, upload, or generate the evaluation dataset."
    ],
    correct: [
      "Choose the model, agent, or dataset target.",
      "Select, upload, or generate the evaluation dataset.",
      "Configure prompts, field mappings, and selected evaluators.",
      "Submit the asynchronous evaluation job.",
      "Review aggregate metrics and row-level results."
    ],
    rationale: "An evaluation requires a target and data, followed by metric and mapping configuration. The submitted job processes rows asynchronously and then exposes summary and per-test results."
  },
  {
    id: "G39",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Evaluate model performance",
    type: "multiple",
    prompt: "Evaluation scores are below the application's requirements. Which four improvement paths does the module recommend considering? Select four answers.",
    options: [
      "Refine prompts and system instructions.",
      "Try a different model optimized for the use case.",
      "Add retrieval-augmented generation to ground responses.",
      "Fine-tune the model for the domain when supported.",
      "Stop measuring results after the first change.",
      "Assume a catalog benchmark guarantees application quality."
    ],
    correct: [
      "Refine prompts and system instructions.",
      "Try a different model optimized for the use case.",
      "Add retrieval-augmented generation to ground responses.",
      "Fine-tune the model for the domain when supported."
    ],
    selectCount: 4,
    rationale: "Evaluation can drive prompt engineering, model replacement, RAG, or supported fine-tuning. Re-evaluation after changes is necessary to measure improvement and detect regressions."
  },
  {
    id: "G40",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Complete the model evaluation exercise",
    type: "order",
    prompt: "Arrange the exercise activities in the order in which they are performed.",
    items: [
      "Compare the two deployments side by side in the model playground.",
      "Explore model cards and benchmarks in the catalog.",
      "Run and analyze an evaluation of gpt-5.2 with synthetic data.",
      "Use the leaderboard and trade-off charts to compare candidates.",
      "Deploy gpt-5.2 and gpt-5-mini."
    ],
    correct: [
      "Explore model cards and benchmarks in the catalog.",
      "Use the leaderboard and trade-off charts to compare candidates.",
      "Deploy gpt-5.2 and gpt-5-mini.",
      "Compare the two deployments side by side in the model playground.",
      "Run and analyze an evaluation of gpt-5.2 with synthetic data."
    ],
    rationale: "The lab progresses from catalog discovery to benchmark comparison, deployment, manual side-by-side testing, and finally systematic synthetic-data evaluation and failure analysis."
  },
  {
    id: "G41",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Complete the model evaluation exercise",
    type: "single",
    prompt: "Which configuration is used to generate the lab's synthetic evaluation dataset?",
    options: [
      "gpt-5-mini, 10 rows, and a coding-only prompt",
      "gpt-5.2, 100 rows, and uploaded seed data is mandatory",
      "An embedding model, 45 rows, and no topic prompt",
      "gpt-5.2, 45 rows, a travel-question prompt with safety and security tests, and blank seed data"
    ],
    correct: "gpt-5.2, 45 rows, a travel-question prompt with safety and security tests, and blank seed data",
    rationale: "The exercise selects synthetic generation, uses gpt-5.2 to create 45 travel-related rows including safety and security tests, and leaves seed data blank."
  },
  {
    id: "G42",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Complete the model evaluation exercise",
    type: "yesno",
    prompt: "For each statement about the lab evaluation, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "The evaluation target is Model, with only the gpt-5.2 deployment selected.",
      "The developer prompt describes a helpful travel assistant that gives accurate, detailed, practical advice.",
      "The lab removes criteria under Agents and Safety while leaving the remaining suggested evaluators enabled.",
      "Analyze results can cluster failures by why they failed and provide improvement suggestions."
    ],
    correct: [
      "Yes",
      "Yes",
      "Yes",
      "Yes"
    ],
    rationale: "These are the exercise's target, prompt, criteria, and analysis settings. Failures can reflect intentional refusal of unsafe questions, so each cluster and response should be reviewed rather than treated mechanically."
  },
  {
    id: "CR01",
    sectionId: "case-contoso-retail",
    unit: "Unit 3",
    domain: "Compare models for an application",
    type: "single",
    prompt: "Which Foundry visualization should Contoso use first to identify candidates that balance response quality with processing speed?",
    options: [
      "A chart of input-token price only",
      "A quality-versus-throughput trade-off chart",
      "The Azure resource-group activity log",
      "A list sorted alphabetically by provider"
    ],
    correct: "A quality-versus-throughput trade-off chart",
    rationale: "A trade-off chart compares two dimensions at once. Quality versus throughput directly addresses Contoso's need for capable reasoning and responsive service."
  },
  {
    id: "CR02",
    sectionId: "case-contoso-retail",
    unit: "Unit 4",
    domain: "Choose a deployment type",
    type: "single",
    prompt: "Which deployment type best fits Contoso's steady global volume and requirement for predictable reserved throughput?",
    options: [
      "Global Batch",
      "Data Zone Standard",
      "Global Provisioned",
      "Developer"
    ],
    correct: "Global Provisioned",
    rationale: "Global Provisioned uses reserved provisioned throughput units and is designed for predictable high-throughput workloads that can use any Azure region."
  },
  {
    id: "CR03",
    sectionId: "case-contoso-retail",
    unit: "Unit 3",
    domain: "Compare models for an application",
    type: "multiple",
    prompt: "Which four data points should Contoso compare before selecting the model? Select four answers.",
    options: [
      "Quality benchmarks relevant to complex reasoning",
      "Safety benchmarks such as resistance to harmful behavior",
      "P95 latency and throughput",
      "Function-calling support and context-window details",
      "The visual design of the provider's logo",
      "The model's alphabetical position in the catalog"
    ],
    correct: [
      "Quality benchmarks relevant to complex reasoning",
      "Safety benchmarks such as resistance to harmful behavior",
      "P95 latency and throughput",
      "Function-calling support and context-window details"
    ],
    selectCount: 4,
    rationale: "The requirements map to reasoning quality, public-facing safety, response-time and capacity metrics, and feature or context support. Branding and catalog order are not selection evidence."
  },
  {
    id: "CR04",
    sectionId: "case-contoso-retail",
    unit: "Units 3 and 5",
    domain: "Validate a selected model",
    type: "yesno",
    prompt: "For each recommendation to Contoso, select Yes if it is valid. Otherwise, select No.",
    items: [
      "Prefer a lower HarmBench Attack Success Rate when comparing model robustness.",
      "Treat the highest overall Quality index as proof that the model will meet every Contoso requirement.",
      "Combine synchronized side-by-side playground tests with dataset-based automated evaluation."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Lower attack success is safer on HarmBench. A general benchmark cannot prove application-specific fitness, so Contoso should combine manual scenario testing with scalable, repeatable evaluation."
  },
  {
    id: "FC01",
    sectionId: "case-fabrikam-content",
    unit: "Unit 5",
    domain: "Choose evaluation metrics",
    type: "single",
    prompt: "Which metric is the most direct baseline for comparing Fabrikam's generated translations with definitive reference translations by n-gram overlap?",
    options: [
      "BLEU",
      "ROUGE",
      "Time to first token",
      "HarmBench Attack Success Rate"
    ],
    correct: "BLEU",
    rationale: "BLEU compares n-grams between generated and reference text and is commonly used for machine translation. METEOR can complement it when synonym, stemming, and paraphrase handling matters."
  },
  {
    id: "FC02",
    sectionId: "case-fabrikam-content",
    unit: "Unit 5",
    domain: "Choose evaluation metrics",
    type: "single",
    prompt: "Which metric should Fabrikam emphasize when checking whether generated summaries cover the key points in its reference summaries?",
    options: [
      "WMDP",
      "Generated tokens per second",
      "BLEU only",
      "ROUGE"
    ],
    correct: "ROUGE",
    rationale: "ROUGE emphasizes recall and is particularly useful for summarization when covering important reference content matters."
  },
  {
    id: "FC03",
    sectionId: "case-fabrikam-content",
    unit: "Unit 5",
    domain: "Improve evaluation results",
    type: "multiple",
    prompt: "Which four actions are supported responses to Fabrikam's weak groundedness and safety results? Select four answers.",
    options: [
      "Refine the system instructions and harden prompts.",
      "Add retrieval-augmented generation over the current manuals.",
      "Apply content filters and validate output before displaying it.",
      "Evaluate a different model that better meets the use case.",
      "Hide failed rows from reviewers.",
      "Release without re-evaluation because synthetic data was used."
    ],
    correct: [
      "Refine the system instructions and harden prompts.",
      "Add retrieval-augmented generation over the current manuals.",
      "Apply content filters and validate output before displaying it.",
      "Evaluate a different model that better meets the use case."
    ],
    selectCount: 4,
    rationale: "Prompt improvement, RAG, safety controls, and trying a more suitable model are all evidence-driven responses. Fabrikam should inspect failures and re-run evaluation after changes."
  },
  {
    id: "FC04",
    sectionId: "case-fabrikam-content",
    unit: "Units 5 and 6",
    domain: "Run a comprehensive evaluation",
    type: "order",
    prompt: "Arrange Fabrikam's evaluation activities in a valid order.",
    items: [
      "Inspect aggregate scores, failed rows, and clustered failure explanations.",
      "Select the deployed model as the evaluation target.",
      "Submit the asynchronous evaluation run.",
      "Generate additional synthetic test rows from a task-specific prompt.",
      "Configure the developer prompt, mappings, and evaluation criteria."
    ],
    correct: [
      "Select the deployed model as the evaluation target.",
      "Generate additional synthetic test rows from a task-specific prompt.",
      "Configure the developer prompt, mappings, and evaluation criteria.",
      "Submit the asynchronous evaluation run.",
      "Inspect aggregate scores, failed rows, and clustered failure explanations."
    ],
    rationale: "The target and data are selected first, configuration and evaluators are defined next, the job is submitted, and results are then analyzed at both aggregate and individual-example levels."
  }
];
