window.AI103_EXAM_SECTIONS = [
  {
    id: "general",
    title: "General Questions",
    kind: "general",
    description: "Answer 42 questions covering planning, AI capabilities, Microsoft Foundry, Foundry Tools, developer tooling, responsible AI, and the hands-on exercise."
  },
  {
    id: "case-contoso-travel",
    title: "Case Study 1 — Contoso Travel",
    kind: "case-study",
    context: "Contoso Travel is building a multilingual travel-support assistant in a Microsoft Foundry project. Customers submit written chat messages in English, Spanish, and French. The solution must translate messages, identify sentiment and travel-related entities, answer from company policies that change frequently, and call the booking system's REST API to rebook an itinerary after the customer confirms. The project already has a compatible language-model deployment. Developers must automate agent configuration through CI/CD, test project assets in Visual Studio Code, and avoid embedded secrets in production."
  },
  {
    id: "case-northwind-claims",
    title: "Case Study 2 — Northwind Claims",
    kind: "case-study",
    context: "Northwind Claims receives scanned receipts and invoices, typed claim descriptions, photographs, short videos, and recorded calls. Phase 1 must extract standard fields and layout from familiar receipts and invoices. Phase 2 must use one multimodal approach to derive structured information from documents, images, video, and audio. An AI model will help triage claims and returns confidence scores, but material claim decisions require human review. The company must measure outcomes across relevant population groups, support users with different abilities, disclose AI involvement and uncertainty, protect customer data, assign named owners, and monitor the deployed system."
  }
];

window.AI103_QUESTIONS = [
  {
    id: "G01",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan an Azure AI solution",
    type: "single",
    prompt: "A team is beginning an AI application. What should the team determine first?",
    options: [
      "The business outcome and target users",
      "The model deployment name",
      "The final prompt wording",
      "The programming language used by the first prototype"
    ],
    correct: "The business outcome and target users",
    rationale: "Planning starts with the business requirement: what outcome the solution must achieve and who will use it. Capabilities, services, models, and implementation tools are selected afterward."
  },
  {
    id: "G02",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan an Azure AI solution",
    type: "multiple",
    prompt: "Which four elements can a complete modern AI application combine? Select four answers.",
    options: [
      "Machine-learning models",
      "AI services",
      "Prompt engineering",
      "Custom code",
      "One universal endpoint for every Azure service",
      "A mandatory hub-based classic project"
    ],
    correct: [
      "Machine-learning models",
      "AI services",
      "Prompt engineering",
      "Custom code"
    ],
    selectCount: 4,
    rationale: "The module identifies models, ready-made AI services, prompt engineering, and custom application code as complementary parts of a solution. No single endpoint or classic-project architecture is mandatory."
  },
  {
    id: "G03",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan an Azure AI solution",
    type: "multiple",
    prompt: "Which four concerns should be addressed before implementation? Select four answers.",
    options: [
      "Input and output modalities",
      "Whether the workload needs a generative model, a task-specific service, an agent, or a combination",
      "Development, testing, deployment, monitoring, security, and governance requirements",
      "Risks and responsible AI controls",
      "A model choice made before the business requirement is known",
      "An assumption that the model will implement all business rules"
    ],
    correct: [
      "Input and output modalities",
      "Whether the workload needs a generative model, a task-specific service, an agent, or a combination",
      "Development, testing, deployment, monitoring, security, and governance requirements",
      "Risks and responsible AI controls"
    ],
    selectCount: 4,
    rationale: "Planning covers modalities, capability and workload fit, the delivery and operational lifecycle, and responsible AI risk. Selecting technology before requirements and delegating all logic to a model are both poor planning."
  },
  {
    id: "G04",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan an Azure AI solution",
    type: "single",
    prompt: "For which solutions does the module recommend Microsoft Foundry?",
    options: [
      "All but the simplest AI solutions",
      "Only solutions that use speech",
      "Only solutions that train a model from scratch",
      "Only solutions written in Python"
    ],
    correct: "All but the simplest AI solutions",
    rationale: "Microsoft Foundry is presented as the comprehensive Azure AI development platform and is recommended for all but very simple solutions."
  },
  {
    id: "G05",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Identify AI capabilities",
    type: "single",
    prompt: "An application must create an original product description from a short list of features. Which primary AI capability should you select?",
    options: [
      "Generative AI",
      "Speech recognition",
      "Computer vision",
      "Optical character recognition"
    ],
    correct: "Generative AI",
    rationale: "Creating a new draft in response to a prompt is a generative AI task."
  },
  {
    id: "G06",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Identify AI capabilities",
    type: "multiple",
    prompt: "Which three components define an AI agent in this module? Select three answers.",
    options: [
      "A model",
      "Focused instructions",
      "Tools",
      "A dedicated Azure subscription",
      "A custom-trained model"
    ],
    correct: [
      "A model",
      "Focused instructions",
      "Tools"
    ],
    selectCount: 3,
    rationale: "The module's formula is agent = model + instructions + tools. A separate subscription and custom model training are not defining requirements."
  },
  {
    id: "G07",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Identify AI capabilities",
    type: "single",
    prompt: "A company needs a constrained, repeatable classification of customer-review sentiment. Which primary capability is the best fit?",
    options: [
      "Specialized natural language processing",
      "Open-ended generative image creation",
      "Speech synthesis",
      "Computer vision"
    ],
    correct: "Specialized natural language processing",
    rationale: "Sentiment analysis is a focused text-analysis task. A specialized NLP service or model is appropriate when predictable, constrained output is required."
  },
  {
    id: "G08",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Identify AI capabilities",
    type: "matching",
    prompt: "Match each speech requirement to the appropriate capability.",
    items: [
      "Convert spoken audio into text",
      "Convert text into spoken audio",
      "Support a real-time voice conversation"
    ],
    options: [
      "Speech recognition",
      "Speech synthesis",
      "Live speech"
    ],
    correct: [
      "Speech recognition",
      "Speech synthesis",
      "Live speech"
    ],
    rationale: "Speech recognition listens and produces text, speech synthesis speaks text as audio, and live speech supports real-time conversational interaction."
  },
  {
    id: "G09",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Identify AI capabilities",
    type: "single",
    prompt: "An automated checkout must identify products shown in a live camera stream. Which primary capability should you use?",
    options: [
      "Computer vision",
      "Speech synthesis",
      "Text translation",
      "Sentiment analysis"
    ],
    correct: "Computer vision",
    rationale: "Computer vision interprets and processes images, video, and live camera input."
  },
  {
    id: "G10",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Identify AI capabilities",
    type: "yesno",
    prompt: "For each statement about OCR and information extraction, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "OCR can locate and read text in a scanned image.",
      "OCR alone assigns business meaning such as identifying a number as an invoice total.",
      "Information extraction can map document content into named fields and structured records."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "OCR reads characters and their location. Information extraction goes further by assigning meaning and structure, such as mapping a value to a Total field."
  },
  {
    id: "G11",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Identify AI capabilities",
    type: "yesno",
    prompt: "For each statement about AI capability categories, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A multimodal model can process or generate more than one content type.",
      "Every multimodal model is automatically an agent.",
      "A single application can combine generative AI, NLP, speech, vision, and information extraction."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Multimodal describes supported content types. An agent additionally requires focused instructions and tools. Capability categories can overlap in one application."
  },
  {
    id: "G12",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Identify AI capabilities",
    type: "matching",
    prompt: "Match each requirement to its primary AI capability.",
    items: [
      "Create an original response to a prompt",
      "Classify topics in a body of text",
      "Use instructions and an API tool to complete a business task",
      "Interpret objects in a video stream",
      "Turn media content into named fields"
    ],
    options: [
      "Generative AI",
      "Natural language processing",
      "Agentic AI",
      "Computer vision",
      "Information extraction"
    ],
    correct: [
      "Generative AI",
      "Natural language processing",
      "Agentic AI",
      "Computer vision",
      "Information extraction"
    ],
    rationale: "Classify a scenario by its primary requested outcome: creation, focused language analysis, goal-directed tool use, visual interpretation, or structured extraction."
  },
  {
    id: "G13",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use Microsoft Foundry",
    type: "matching",
    prompt: "Match each hierarchy level to its purpose.",
    items: [
      "Azure subscription and resource group",
      "Foundry resource",
      "Foundry project",
      "Project asset"
    ],
    options: [
      "Azure ownership, billing, lifecycle, and organization",
      "Parent boundary for shared compute, storage, tools, endpoints, and access management",
      "Development and collaboration boundary for one AI solution",
      "A model, agent, connection, data item, code item, or knowledge artifact used by a solution"
    ],
    correct: [
      "Azure ownership, billing, lifecycle, and organization",
      "Parent boundary for shared compute, storage, tools, endpoints, and access management",
      "Development and collaboration boundary for one AI solution",
      "A model, agent, connection, data item, code item, or knowledge artifact used by a solution"
    ],
    rationale: "The hierarchy moves from Azure ownership and lifecycle, to a shared Foundry resource, to a solution-specific project, and then to the assets managed in that project."
  },
  {
    id: "G14",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use Microsoft Foundry",
    type: "single",
    prompt: "A new Foundry project is created. How many parent Foundry resources can the project belong to?",
    options: [
      "Exactly one",
      "Exactly two",
      "Any number in the same subscription",
      "None, because projects are top-level Azure resources"
    ],
    correct: "Exactly one",
    rationale: "Each Foundry project belongs to exactly one parent Foundry resource. A resource can support multiple child projects."
  },
  {
    id: "G15",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use Microsoft Foundry",
    type: "yesno",
    prompt: "For each statement about Foundry resources and projects, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "One Foundry resource can support multiple child projects.",
      "One child project is designated as the default project.",
      "A Foundry project can simultaneously belong to multiple parent Foundry resources."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "A resource can have one or more child projects, including one default project. Each project has only one parent resource."
  },
  {
    id: "G16",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use Microsoft Foundry",
    type: "matching",
    prompt: "Match each model concept to its description.",
    items: [
      "Model",
      "Model card",
      "Model deployment"
    ],
    options: [
      "The trained AI offering",
      "Documentation of capabilities, limitations, and supported tasks",
      "A configured, callable serving route for inference"
    ],
    correct: [
      "The trained AI offering",
      "Documentation of capabilities, limitations, and supported tasks",
      "A configured, callable serving route for inference"
    ],
    rationale: "The catalog offers models, the model card helps assess suitability, and a deployment makes the chosen model callable."
  },
  {
    id: "G17",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use Microsoft Foundry",
    type: "matching",
    prompt: "Match each interface to its primary use.",
    items: [
      "Microsoft Foundry portal",
      "Azure portal",
      "Foundry Toolkit for Visual Studio Code",
      "Foundry SDK or REST APIs"
    ],
    options: [
      "Build, configure, and test AI project assets in a web interface",
      "Provision and govern Azure resources, manage IAM, and clean up resource groups",
      "Work with Foundry project resources from the code editor",
      "Integrate programmatically and automate operations"
    ],
    correct: [
      "Build, configure, and test AI project assets in a web interface",
      "Provision and govern Azure resources, manage IAM, and clean up resource groups",
      "Work with Foundry project resources from the code editor",
      "Integrate programmatically and automate operations"
    ],
    rationale: "Foundry portal is the visual project experience, Azure portal governs Azure resources, Foundry Toolkit works inside VS Code, and SDKs or REST APIs enable code and automation."
  },
  {
    id: "G18",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use Microsoft Foundry",
    type: "single",
    prompt: "You need a central, MCP-based connection that lets agents access multiple knowledge sources in a project. What should you use?",
    options: [
      "Foundry IQ",
      "Foundry Models",
      "Foundry Toolkit",
      "Azure Translator"
    ],
    correct: "Foundry IQ",
    rationale: "Foundry IQ centralizes connections to knowledge sources and exposes them to agents through an MCP-based knowledge connection."
  },
  {
    id: "G19",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use Microsoft Foundry",
    type: "yesno",
    prompt: "For each statement about grounding, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Grounding adds retrieved information to prompt context at inference time.",
      "Grounding retrains the base model on the organization's data.",
      "An agent can use a tool to retrieve information from a knowledge store."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Grounding supplies relevant context when a request is processed. It does not change the base model through retraining."
  },
  {
    id: "G20",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use Microsoft Foundry",
    type: "matching",
    prompt: "Match each endpoint to its typical use.",
    items: [
      "Foundry resource endpoint",
      "Project endpoint",
      "Azure OpenAI endpoint",
      "Tool-specific endpoint"
    ],
    options: [
      "Resource-level capabilities such as shared Foundry Tools",
      "Project-based Responses API and Foundry-specific APIs such as Agent Service",
      "OpenAI-compatible APIs such as Chat Completions and Responses",
      "Calls to a particular prebuilt Foundry Tool"
    ],
    correct: [
      "Resource-level capabilities such as shared Foundry Tools",
      "Project-based Responses API and Foundry-specific APIs such as Agent Service",
      "OpenAI-compatible APIs such as Chat Completions and Responses",
      "Calls to a particular prebuilt Foundry Tool"
    ],
    rationale: "Endpoints are not interchangeable. Choose the resource, project, Azure OpenAI-compatible, or tool-specific endpoint according to the API and feature being called."
  },
  {
    id: "G21",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use Microsoft Foundry",
    type: "single",
    prompt: "Which authentication approach should you prefer for a production application?",
    options: [
      "Microsoft Entra ID token authentication with properly scoped Azure RBAC",
      "A service key committed to the source repository",
      "Anonymous access to the project endpoint",
      "A shared developer password stored in application code"
    ],
    correct: "Microsoft Entra ID token authentication with properly scoped Azure RBAC",
    rationale: "The module recommends token-based Microsoft Entra ID authentication and appropriately scoped role-based access for production. Static keys must be protected and never committed to source control."
  },
  {
    id: "G22",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "single",
    prompt: "A service must identify entities and sentiment in support messages. Which Foundry Tool should you select?",
    options: [
      "Azure Language",
      "Azure Speech",
      "Azure Translator",
      "Azure Document Intelligence"
    ],
    correct: "Azure Language",
    rationale: "Azure Language provides specialized NLP functions including entity extraction and sentiment analysis."
  },
  {
    id: "G23",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "single",
    prompt: "A client application must transcribe recorded calls and generate spoken responses. Which Foundry Tool should you select?",
    options: [
      "Azure Speech",
      "Azure Language",
      "Azure Translator",
      "Azure Document Intelligence"
    ],
    correct: "Azure Speech",
    rationale: "Azure Speech supports speech to text, text to speech, and live conversational speech."
  },
  {
    id: "G24",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "single",
    prompt: "An application must convert written text from one language to another. Which Foundry Tool should you select?",
    options: [
      "Azure Translator",
      "Azure Language",
      "Azure Speech",
      "Azure Content Understanding"
    ],
    correct: "Azure Translator",
    rationale: "Azure Translator is the task-specific service for translating written text and documents between languages."
  },
  {
    id: "G25",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "single",
    prompt: "A finance application must use prebuilt and custom models to extract layout, tables, key-value pairs, and fields from invoices. Which Foundry Tool should you select?",
    options: [
      "Azure Document Intelligence",
      "Azure Content Understanding",
      "Azure Language",
      "Azure Translator"
    ],
    correct: "Azure Document Intelligence",
    rationale: "Azure Document Intelligence is document-focused and supports prebuilt or custom extraction of text, layout, tables, and fields from invoices, receipts, and forms."
  },
  {
    id: "G26",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "single",
    prompt: "A solution must extract structured information across documents, images, video, and audio streams. Which Foundry Tool should you select?",
    options: [
      "Azure Content Understanding",
      "Azure Document Intelligence",
      "Azure Language",
      "Azure Translator"
    ],
    correct: "Azure Content Understanding",
    rationale: "Azure Content Understanding is designed for complex multimodal unstructured content across documents, forms, images, video, and audio."
  },
  {
    id: "G27",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "multiple",
    prompt: "When should you favor a task-specific Foundry Tool over a general-purpose generative model? Select three answers.",
    options: [
      "The required task is already supported by a prebuilt capability.",
      "The application needs a focused API and predictable output.",
      "Cost and operational predictability matter.",
      "The application requires unrestricted open-ended generation for every request.",
      "The base model must be retrained whenever source data changes."
    ],
    correct: [
      "The required task is already supported by a prebuilt capability.",
      "The application needs a focused API and predictable output.",
      "Cost and operational predictability matter."
    ],
    selectCount: 3,
    rationale: "A specialized service is a strong fit for an already-supported, focused task when predictable behavior and cost matter. Open-ended generation is the opposite requirement, and grounding does not require retraining."
  },
  {
    id: "G28",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "order",
    prompt: "Arrange the general steps for consuming a Foundry Tool in the order presented in the module.",
    items: [
      "Validate and use the structured response.",
      "Use the tool's SDK or REST API.",
      "Obtain the correct tool-specific endpoint.",
      "Send input in the service's required format.",
      "Authenticate with a supported key or token-based identity."
    ],
    correct: [
      "Obtain the correct tool-specific endpoint.",
      "Authenticate with a supported key or token-based identity.",
      "Use the tool's SDK or REST API.",
      "Send input in the service's required format.",
      "Validate and use the structured response."
    ],
    rationale: "A client obtains the correct endpoint, authenticates, calls through the appropriate SDK or REST API, sends correctly formatted input, and validates the returned structured data."
  },
  {
    id: "G29",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Choose developer tools and SDKs",
    type: "single",
    prompt: "Which Visual Studio Code extension lets developers browse project resources, deploy models, test models and agents, and generate integration code?",
    options: [
      "Foundry Toolkit for Visual Studio Code",
      "GitHub Copilot",
      "Azure Translator",
      "Foundry IQ"
    ],
    correct: "Foundry Toolkit for Visual Studio Code",
    rationale: "Foundry Toolkit brings Foundry resource browsing, deployment, playgrounds, agent configuration, and integration workflows into VS Code."
  },
  {
    id: "G30",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Choose developer tools and SDKs",
    type: "single",
    prompt: "A developer wants an AI assistant that helps write code in the editor. Which tool should the developer use?",
    options: [
      "GitHub Copilot",
      "Foundry Toolkit",
      "Foundry Tools",
      "Foundry IQ"
    ],
    correct: "GitHub Copilot",
    rationale: "GitHub Copilot is the AI coding assistant. Foundry Toolkit is used to work with Foundry projects and assets from VS Code."
  },
  {
    id: "G31",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Choose developer tools and SDKs",
    type: "matching",
    prompt: "Match each development requirement to the most appropriate interface.",
    items: [
      "Connect to a project and manage agents, evaluations, or Foundry IQ",
      "Call a compatible model by using OpenAI request and response patterns",
      "Consume service-specific types for Azure Speech",
      "Call a Foundry Tool when no suitable SDK is available",
      "Configure and test interactively before writing client code"
    ],
    options: [
      "Microsoft Foundry SDK",
      "OpenAI API and SDK",
      "Foundry Tools SDK",
      "Foundry Tools REST API",
      "Foundry portal or Toolkit playground"
    ],
    correct: [
      "Microsoft Foundry SDK",
      "OpenAI API and SDK",
      "Foundry Tools SDK",
      "Foundry Tools REST API",
      "Foundry portal or Toolkit playground"
    ],
    rationale: "Use the project-aware Foundry SDK for Foundry-specific assets, an OpenAI-compatible SDK for compatible model calls, a service SDK for a prebuilt tool, REST when an SDK is unsuitable, and a playground for code-free experiments."
  },
  {
    id: "G32",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Choose developer tools and SDKs",
    type: "multiple",
    prompt: "Which four factors should guide the choice of a development environment? Select four answers.",
    options: [
      "Support for the required languages, SDKs, and APIs",
      "Fit with the application type and operating environments",
      "Integration with source control and the delivery workflow",
      "Team familiarity and productivity",
      "A requirement that every Azure AI project use Visual Studio",
      "The color theme used by the editor"
    ],
    correct: [
      "Support for the required languages, SDKs, and APIs",
      "Fit with the application type and operating environments",
      "Integration with source control and the delivery workflow",
      "Team familiarity and productivity"
    ],
    selectCount: 4,
    rationale: "The environment should support the workload and interfaces, fit target platforms, integrate with engineering workflows, and suit the team. Both Visual Studio and VS Code can support Azure AI development."
  },
  {
    id: "G33",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Choose developer tools and SDKs",
    type: "order",
    prompt: "Arrange the typical developer workflow in the order presented in the module.",
    items: [
      "Store the code in source control.",
      "Use scripts and CI/CD for repeatable project operations.",
      "Choose the language, API, and SDK.",
      "Develop the application in Visual Studio Code or Visual Studio.",
      "Create or select a project and explore models or tools in the Foundry portal.",
      "Use identity-based authentication and secure configuration for production.",
      "Experiment in a playground."
    ],
    correct: [
      "Create or select a project and explore models or tools in the Foundry portal.",
      "Experiment in a playground.",
      "Choose the language, API, and SDK.",
      "Develop the application in Visual Studio Code or Visual Studio.",
      "Store the code in source control.",
      "Use scripts and CI/CD for repeatable project operations.",
      "Use identity-based authentication and secure configuration for production."
    ],
    rationale: "The module moves from project exploration and experimentation to interface selection, implementation, source control, automation, and secure production configuration."
  },
  {
    id: "G34",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Apply responsible AI principles",
    type: "matching",
    prompt: "Match each engineering action to the responsible AI principle it most directly supports.",
    items: [
      "Measure model performance across relevant population subgroups.",
      "Test failure modes and provide a safe fallback.",
      "Minimize data and secure it in storage and transit.",
      "Include diverse perspectives and address accessibility.",
      "Disclose AI involvement, uncertainty, and limitations.",
      "Assign owners, approvals, human oversight, and audit duties."
    ],
    options: [
      "Fairness",
      "Reliability and safety",
      "Privacy and security",
      "Inclusiveness",
      "Transparency",
      "Accountability"
    ],
    correct: [
      "Fairness",
      "Reliability and safety",
      "Privacy and security",
      "Inclusiveness",
      "Transparency",
      "Accountability"
    ],
    rationale: "The six principles address equitable outcomes, dependable and safe behavior, protected data and systems, broad participation, understandable operation, and human or organizational ownership."
  },
  {
    id: "G35",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Apply responsible AI principles",
    type: "single",
    prompt: "A loan model has materially different approval accuracy for otherwise comparable demographic groups. Which principle is the primary concern?",
    options: [
      "Fairness",
      "Inclusiveness",
      "Transparency",
      "Privacy and security"
    ],
    correct: "Fairness",
    rationale: "Fairness concerns equitable treatment and performance across affected groups. Inclusiveness focuses on ensuring people across abilities and backgrounds can participate and benefit."
  },
  {
    id: "G36",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Apply responsible AI principles",
    type: "yesno",
    prompt: "For each statement about transparency and accountability, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Explaining an AI system's intended use and limitations supports transparency.",
      "Assigning named owners and approval responsibilities supports accountability.",
      "When a system appears autonomous, its designers and operators are no longer responsible for outcomes."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Transparency explains what the system does and where it is limited. Accountability establishes who owns its controls and consequences; apparent autonomy does not remove human responsibility."
  },
  {
    id: "G37",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Apply responsible AI principles",
    type: "single",
    prompt: "A medical triage system uses a risk-appropriate confidence threshold and sends uncertain cases to a clinician. Which principle does this design most directly support?",
    options: [
      "Reliability and safety",
      "Privacy and security",
      "Inclusiveness",
      "Fairness"
    ],
    correct: "Reliability and safety",
    rationale: "Risk-appropriate thresholds, safe fallback, and human escalation reduce harm from uncertain or failed predictions and directly support reliability and safety."
  },
  {
    id: "G38",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Apply responsible AI principles",
    type: "yesno",
    prompt: "For each statement about confidence scores, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A confidence score expresses a model's estimated uncertainty.",
      "A high confidence score guarantees that a prediction is correct.",
      "The decision threshold should reflect the risk of the use case."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "A confidence score communicates estimated certainty but is not a guarantee. Systems should interpret it using a threshold appropriate to the possible harm."
  },
  {
    id: "G39",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Apply responsible AI principles",
    type: "multiple",
    prompt: "Which four controls demonstrate that responsible AI is applied throughout the lifecycle? Select four answers.",
    options: [
      "Evaluate relevant subgroups, edge cases, misuse, and failure modes.",
      "Prepare monitoring, fallback behavior, human escalation, and rollback before deployment.",
      "Audit access, monitor outcomes, and review incidents during operation.",
      "Define owners, review processes, and approval responsibilities during planning.",
      "Wait until the first harmful incident before considering safeguards.",
      "Treat a confidence score as a replacement for human judgment."
    ],
    correct: [
      "Evaluate relevant subgroups, edge cases, misuse, and failure modes.",
      "Prepare monitoring, fallback behavior, human escalation, and rollback before deployment.",
      "Audit access, monitor outcomes, and review incidents during operation.",
      "Define owners, review processes, and approval responsibilities during planning."
    ],
    selectCount: 4,
    rationale: "Responsible AI begins during planning and continues through testing, deployment, and operation. Reactive safeguards and blind reliance on a probabilistic score are insufficient."
  },
  {
    id: "G40",
    sectionId: "general",
    unit: "Unit 7",
    domain: "Complete the Foundry preparation exercise",
    type: "single",
    prompt: "During project creation, why should you record and carefully select the Azure region?",
    options: [
      "The region affects service and model availability.",
      "The region determines the programming language.",
      "Every region exposes identical models and quota.",
      "The region replaces the need for a resource group."
    ],
    correct: "The region affects service and model availability.",
    rationale: "The exercise calls out region selection because available services, models, and deployment capacity can vary by region."
  },
  {
    id: "G41",
    sectionId: "general",
    unit: "Unit 7",
    domain: "Complete the Foundry preparation exercise",
    type: "order",
    prompt: "Arrange the model deployment and testing steps from the exercise in order.",
    items: [
      "Deploy the model by using the default settings.",
      "Send a user prompt and inspect the result.",
      "Open the model card and review capabilities and limitations.",
      "In Discover, open Models and search for gpt-5.2.",
      "Add instructions in the playground that establish the assistant's role."
    ],
    correct: [
      "In Discover, open Models and search for gpt-5.2.",
      "Open the model card and review capabilities and limitations.",
      "Deploy the model by using the default settings.",
      "Add instructions in the playground that establish the assistant's role.",
      "Send a user prompt and inspect the result."
    ],
    rationale: "The exercise first finds and evaluates the catalog model, then deploys it, establishes behavior through instructions, and finally tests a user request."
  },
  {
    id: "G42",
    sectionId: "general",
    unit: "Unit 7",
    domain: "Complete the Foundry preparation exercise",
    type: "yesno",
    prompt: "For each statement about the exercise, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "The Manage area is used to compare resource-level and project-level information and locate endpoints.",
      "Foundry Toolkit can inspect and test the same deployed model from Visual Studio Code.",
      "Cleanup is performed by deleting the model card without checking the exercise resource group."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Manage exposes the resource and project connection details, and the Toolkit can test the deployment in VS Code. Cleanup requires confirming the resource group's contents and then deleting the exercise resource group when it is no longer needed."
  },
  {
    id: "CT01",
    sectionId: "case-contoso-travel",
    unit: "Units 2 and 3",
    domain: "Design an agentic solution",
    type: "multiple",
    prompt: "Which three elements should Contoso combine to create the travel-support agent? Select three answers.",
    options: [
      "The deployed language model",
      "Focused role, behavior, and safety instructions",
      "Tools for policy retrieval and booking-system actions",
      "A second default project",
      "Base-model retraining after every policy update"
    ],
    correct: [
      "The deployed language model",
      "Focused role, behavior, and safety instructions",
      "Tools for policy retrieval and booking-system actions"
    ],
    selectCount: 3,
    rationale: "An agent combines a model, focused instructions, and tools. Retrieval can ground current policies at inference time, so policy updates do not require recurring base-model retraining."
  },
  {
    id: "CT02",
    sectionId: "case-contoso-travel",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "multiple",
    prompt: "Which two Foundry Tools meet the focused text-processing requirements? Select two answers.",
    options: [
      "Azure Translator",
      "Azure Language",
      "Azure Speech",
      "Azure Document Intelligence",
      "Azure Content Understanding"
    ],
    correct: [
      "Azure Translator",
      "Azure Language"
    ],
    selectCount: 2,
    rationale: "Azure Translator converts written text between languages. Azure Language identifies sentiment and entities in text. The scenario does not require audio or document-field extraction for these requirements."
  },
  {
    id: "CT03",
    sectionId: "case-contoso-travel",
    unit: "Unit 3",
    domain: "Ground an agent with knowledge",
    type: "single",
    prompt: "Which Foundry capability should Contoso use to centralize policy knowledge connections and ground answers without retraining the base model?",
    options: [
      "Foundry IQ",
      "Foundry Models",
      "Foundry Toolkit",
      "GitHub Copilot"
    ],
    correct: "Foundry IQ",
    rationale: "Foundry IQ provides a central MCP-based knowledge connection. Retrieved policy information is added to prompt context at inference time instead of retraining the model."
  },
  {
    id: "CT04",
    sectionId: "case-contoso-travel",
    unit: "Units 3 and 5",
    domain: "Choose an interface and authentication",
    type: "single",
    prompt: "Which combination should Contoso use to automate Foundry-specific agent configuration and authenticate the production workload?",
    options: [
      "Microsoft Foundry SDK with the project endpoint, plus Microsoft Entra ID and scoped Azure RBAC",
      "Foundry Toolkit with an API key committed to the repository",
      "Azure OpenAI endpoint with anonymous access",
      "Azure portal with a shared developer password in application code"
    ],
    correct: "Microsoft Foundry SDK with the project endpoint, plus Microsoft Entra ID and scoped Azure RBAC",
    rationale: "The Foundry SDK and project endpoint support project-specific features such as Agent Service and CI/CD automation. Production should use token-based Entra ID authentication and least-privilege RBAC."
  },
  {
    id: "NC01",
    sectionId: "case-northwind-claims",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "single",
    prompt: "Which service should Northwind use for Phase 1?",
    options: [
      "Azure Document Intelligence",
      "Azure Content Understanding",
      "Azure Translator",
      "Azure Speech"
    ],
    correct: "Azure Document Intelligence",
    rationale: "Phase 1 is a document-focused requirement for standard receipt and invoice fields, layout, tables, and key-value pairs. Azure Document Intelligence provides prebuilt and custom document extraction models."
  },
  {
    id: "NC02",
    sectionId: "case-northwind-claims",
    unit: "Unit 4",
    domain: "Select Foundry Tools",
    type: "single",
    prompt: "Which service should Northwind use for the unified multimodal extraction required in Phase 2?",
    options: [
      "Azure Content Understanding",
      "Azure Document Intelligence",
      "Azure Language",
      "Azure Translator"
    ],
    correct: "Azure Content Understanding",
    rationale: "Azure Content Understanding is suited to extracting structured information from varied unstructured content across documents, images, video, and audio."
  },
  {
    id: "NC03",
    sectionId: "case-northwind-claims",
    unit: "Unit 6",
    domain: "Apply responsible AI principles",
    type: "matching",
    prompt: "Match each Northwind requirement to the responsible AI principle it most directly supports.",
    items: [
      "Measure claim-triage outcomes across relevant population groups.",
      "Make the experience usable by people with different abilities.",
      "Explain AI involvement, intended use, uncertainty, and limitations.",
      "Protect customer content and define access and retention controls.",
      "Assign named owners and require human review for material decisions."
    ],
    options: [
      "Fairness",
      "Inclusiveness",
      "Transparency",
      "Privacy and security",
      "Accountability",
      "Reliability and safety"
    ],
    correct: [
      "Fairness",
      "Inclusiveness",
      "Transparency",
      "Privacy and security",
      "Accountability"
    ],
    rationale: "Subgroup outcomes concern fairness; accessibility concerns inclusiveness; explanations concern transparency; data controls concern privacy and security; and named ownership with human review concerns accountability."
  },
  {
    id: "NC04",
    sectionId: "case-northwind-claims",
    unit: "Unit 6",
    domain: "Operationalize responsible AI",
    type: "multiple",
    prompt: "Which four controls should Northwind implement before and after deployment? Select four answers.",
    options: [
      "Test subgroup performance, edge cases, misuse, and failure modes.",
      "Set a risk-appropriate confidence threshold with fallback and human escalation.",
      "Use Microsoft Entra ID, least-privilege access, and protected storage and transit.",
      "Monitor outcomes, audit access, and review incidents in operation.",
      "Hide uncertainty so users will trust the system.",
      "Remove human ownership because the triage model is autonomous."
    ],
    correct: [
      "Test subgroup performance, edge cases, misuse, and failure modes.",
      "Set a risk-appropriate confidence threshold with fallback and human escalation.",
      "Use Microsoft Entra ID, least-privilege access, and protected storage and transit.",
      "Monitor outcomes, audit access, and review incidents in operation."
    ],
    selectCount: 4,
    rationale: "The required controls address fairness testing, reliability and safety, privacy and security, and accountable operation. Hiding uncertainty violates transparency, and automation never removes human or organizational accountability."
  }
];
