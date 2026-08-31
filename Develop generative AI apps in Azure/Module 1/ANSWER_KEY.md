# Module 1 Answer Key

**Develop generative AI apps in Azure — Module 1: Plan and prepare to develop AI solutions on Azure**

Answer key for the practice assessment in [index.html](index.html). Generated from the question
bank in [questions.js](questions.js), which is the authoritative source — regenerate this file if
the bank changes.

| | |
| --- | --- |
| Questions | 50 |
| Total points | 130 |
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
| 1 | G01 | Unit 1 | Single choice | 1 | The business outcome and target users |
| 2 | G02 | Unit 1 | Multiple choice | 4 | Machine-learning models; AI services; Prompt engineering; Custom code |
| 3 | G03 | Unit 1 | Multiple choice | 4 | Input and output modalities; Whether the workload needs a generative model, a task-specific service, an agent, or a combination; Development, testing, deployment, monitoring, security, and governance requirements; Risks and responsible AI controls |
| 4 | G04 | Unit 1 | Single choice | 1 | All but the simplest AI solutions |
| 5 | G05 | Unit 2 | Single choice | 1 | Generative AI |
| 6 | G06 | Unit 2 | Multiple choice | 3 | A model; Focused instructions; Tools |
| 7 | G07 | Unit 2 | Single choice | 1 | Specialized natural language processing |
| 8 | G08 | Unit 2 | Matching | 3 | 1) Speech recognition; 2) Speech synthesis; 3) Live speech |
| 9 | G09 | Unit 2 | Single choice | 1 | Computer vision |
| 10 | G10 | Unit 2 | Yes / No | 3 | Yes, No, Yes |
| 11 | G11 | Unit 2 | Yes / No | 3 | Yes, No, Yes |
| 12 | G12 | Unit 2 | Matching | 5 | 1) Generative AI; 2) Natural language processing; 3) Agentic AI; 4) Computer vision; 5) Information extraction |
| 13 | G13 | Unit 3 | Matching | 4 | 1) Azure ownership, billing, lifecycle, and organization; 2) Parent boundary for shared compute, storage, tools, endpoints, and access management; 3) Development and collaboration boundary for one AI solution; 4) A model, agent, connection, data item, code item, or knowledge artifact used by a solution |
| 14 | G14 | Unit 3 | Single choice | 1 | Exactly one |
| 15 | G15 | Unit 3 | Yes / No | 3 | Yes, Yes, No |
| 16 | G16 | Unit 3 | Matching | 3 | 1) The trained AI offering; 2) Documentation of capabilities, limitations, and supported tasks; 3) A configured, callable serving route for inference |
| 17 | G17 | Unit 3 | Matching | 4 | 1) Build, configure, and test AI project assets in a web interface; 2) Provision and govern Azure resources, manage IAM, and clean up resource groups; 3) Work with Foundry project resources from the code editor; 4) Integrate programmatically and automate operations |
| 18 | G18 | Unit 3 | Single choice | 1 | Foundry IQ |
| 19 | G19 | Unit 3 | Yes / No | 3 | Yes, No, Yes |
| 20 | G20 | Unit 3 | Matching | 4 | 1) Resource-level capabilities such as shared Foundry Tools; 2) Project-based Responses API and Foundry-specific APIs such as Agent Service; 3) OpenAI-compatible APIs such as Chat Completions and Responses; 4) Calls to a particular prebuilt Foundry Tool |
| 21 | G21 | Unit 3 | Single choice | 1 | Microsoft Entra ID token authentication with properly scoped Azure RBAC |
| 22 | G22 | Unit 4 | Single choice | 1 | Azure Language |
| 23 | G23 | Unit 4 | Single choice | 1 | Azure Speech |
| 24 | G24 | Unit 4 | Single choice | 1 | Azure Translator |
| 25 | G25 | Unit 4 | Single choice | 1 | Azure Document Intelligence |
| 26 | G26 | Unit 4 | Single choice | 1 | Azure Content Understanding |
| 27 | G27 | Unit 4 | Multiple choice | 3 | The required task is already supported by a prebuilt capability.; The application needs a focused API and predictable output.; Cost and operational predictability matter. |
| 28 | G28 | Unit 4 | Build list | 5 | 1) Obtain the correct tool-specific endpoint. → 2) Authenticate with a supported key or token-based identity. → 3) Use the tool's SDK or REST API. → 4) Send input in the service's required format. → 5) Validate and use the structured response. |
| 29 | G29 | Unit 5 | Single choice | 1 | Foundry Toolkit for Visual Studio Code |
| 30 | G30 | Unit 5 | Single choice | 1 | GitHub Copilot |
| 31 | G31 | Unit 5 | Matching | 5 | 1) Microsoft Foundry SDK; 2) OpenAI API and SDK; 3) Foundry Tools SDK; 4) Foundry Tools REST API; 5) Foundry portal or Toolkit playground |
| 32 | G32 | Unit 5 | Multiple choice | 4 | Support for the required languages, SDKs, and APIs; Fit with the application type and operating environments; Integration with source control and the delivery workflow; Team familiarity and productivity |
| 33 | G33 | Unit 5 | Build list | 7 | 1) Create or select a project and explore models or tools in the Foundry portal. → 2) Experiment in a playground. → 3) Choose the language, API, and SDK. → 4) Develop the application in Visual Studio Code or Visual Studio. → 5) Store the code in source control. → 6) Use scripts and CI/CD for repeatable project operations. → 7) Use identity-based authentication and secure configuration for production. |
| 34 | G34 | Unit 6 | Matching | 6 | 1) Fairness; 2) Reliability and safety; 3) Privacy and security; 4) Inclusiveness; 5) Transparency; 6) Accountability |
| 35 | G35 | Unit 6 | Single choice | 1 | Fairness |
| 36 | G36 | Unit 6 | Yes / No | 3 | Yes, Yes, No |
| 37 | G37 | Unit 6 | Single choice | 1 | Reliability and safety |
| 38 | G38 | Unit 6 | Yes / No | 3 | Yes, No, Yes |
| 39 | G39 | Unit 6 | Multiple choice | 4 | Evaluate relevant subgroups, edge cases, misuse, and failure modes.; Prepare monitoring, fallback behavior, human escalation, and rollback before deployment.; Audit access, monitor outcomes, and review incidents during operation.; Define owners, review processes, and approval responsibilities during planning. |
| 40 | G40 | Unit 7 | Single choice | 1 | The region affects service and model availability. |
| 41 | G41 | Unit 7 | Build list | 5 | 1) In Discover, open Models and search for gpt-5.2. → 2) Open the model card and review capabilities and limitations. → 3) Deploy the model by using the default settings. → 4) Add instructions in the playground that establish the assistant's role. → 5) Send a user prompt and inspect the result. |
| 42 | G42 | Unit 7 | Yes / No | 3 | Yes, Yes, No |
| 43 | CT01 | Units 2 and 3 | Multiple choice | 3 | The deployed language model; Focused role, behavior, and safety instructions; Tools for policy retrieval and booking-system actions |
| 44 | CT02 | Unit 4 | Multiple choice | 2 | Azure Translator; Azure Language |
| 45 | CT03 | Unit 3 | Single choice | 1 | Foundry IQ |
| 46 | CT04 | Units 3 and 5 | Single choice | 1 | Microsoft Foundry SDK with the project endpoint, plus Microsoft Entra ID and scoped Azure RBAC |
| 47 | NC01 | Unit 4 | Single choice | 1 | Azure Document Intelligence |
| 48 | NC02 | Unit 4 | Single choice | 1 | Azure Content Understanding |
| 49 | NC03 | Unit 6 | Matching | 5 | 1) Fairness; 2) Inclusiveness; 3) Transparency; 4) Privacy and security; 5) Accountability |
| 50 | NC04 | Unit 6 | Multiple choice | 4 | Test subgroup performance, edge cases, misuse, and failure modes.; Set a risk-appropriate confidence threshold with fallback and human escalation.; Use Microsoft Entra ID, least-privilege access, and protected storage and transit.; Monitor outcomes, audit access, and review incidents in operation. |

## General Questions

*42 questions · 112 points*

### 1. G01 — Unit 1

*Single choice · Plan an Azure AI solution · 1 point*

A team is beginning an AI application. What should the team determine first?

**Answer:** The business outcome and target users

**Rationale.** Planning starts with the business requirement: what outcome the solution must achieve and who will use it. Capabilities, services, models, and implementation tools are selected afterward.

### 2. G02 — Unit 1

*Multiple choice · Plan an Azure AI solution · 4 points*

Which four elements can a complete modern AI application combine? Select four answers.

**Answer** (select 4):

- Machine-learning models
- AI services
- Prompt engineering
- Custom code

**Rationale.** The module identifies models, ready-made AI services, prompt engineering, and custom application code as complementary parts of a solution. No single endpoint or classic-project architecture is mandatory.

### 3. G03 — Unit 1

*Multiple choice · Plan an Azure AI solution · 4 points*

Which four concerns should be addressed before implementation? Select four answers.

**Answer** (select 4):

- Input and output modalities
- Whether the workload needs a generative model, a task-specific service, an agent, or a combination
- Development, testing, deployment, monitoring, security, and governance requirements
- Risks and responsible AI controls

**Rationale.** Planning covers modalities, capability and workload fit, the delivery and operational lifecycle, and responsible AI risk. Selecting technology before requirements and delegating all logic to a model are both poor planning.

### 4. G04 — Unit 1

*Single choice · Plan an Azure AI solution · 1 point*

For which solutions does the module recommend Microsoft Foundry?

**Answer:** All but the simplest AI solutions

**Rationale.** Microsoft Foundry is presented as the comprehensive Azure AI development platform and is recommended for all but very simple solutions.

### 5. G05 — Unit 2

*Single choice · Identify AI capabilities · 1 point*

An application must create an original product description from a short list of features. Which primary AI capability should you select?

**Answer:** Generative AI

**Rationale.** Creating a new draft in response to a prompt is a generative AI task.

### 6. G06 — Unit 2

*Multiple choice · Identify AI capabilities · 3 points*

Which three components define an AI agent in this module? Select three answers.

**Answer** (select 3):

- A model
- Focused instructions
- Tools

**Rationale.** The module's formula is agent = model + instructions + tools. A separate subscription and custom model training are not defining requirements.

### 7. G07 — Unit 2

*Single choice · Identify AI capabilities · 1 point*

A company needs a constrained, repeatable classification of customer-review sentiment. Which primary capability is the best fit?

**Answer:** Specialized natural language processing

**Rationale.** Sentiment analysis is a focused text-analysis task. A specialized NLP service or model is appropriate when predictable, constrained output is required.

### 8. G08 — Unit 2

*Matching · Identify AI capabilities · 3 points*

Match each speech requirement to the appropriate capability.

**Answer:**

| Item | Match |
| --- | --- |
| Convert spoken audio into text | **Speech recognition** |
| Convert text into spoken audio | **Speech synthesis** |
| Support a real-time voice conversation | **Live speech** |

**Rationale.** Speech recognition listens and produces text, speech synthesis speaks text as audio, and live speech supports real-time conversational interaction.

### 9. G09 — Unit 2

*Single choice · Identify AI capabilities · 1 point*

An automated checkout must identify products shown in a live camera stream. Which primary capability should you use?

**Answer:** Computer vision

**Rationale.** Computer vision interprets and processes images, video, and live camera input.

### 10. G10 — Unit 2

*Yes / No · Identify AI capabilities · 3 points*

For each statement about OCR and information extraction, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| OCR can locate and read text in a scanned image. | **Yes** |
| OCR alone assigns business meaning such as identifying a number as an invoice total. | **No** |
| Information extraction can map document content into named fields and structured records. | **Yes** |

**Rationale.** OCR reads characters and their location. Information extraction goes further by assigning meaning and structure, such as mapping a value to a Total field.

### 11. G11 — Unit 2

*Yes / No · Identify AI capabilities · 3 points*

For each statement about AI capability categories, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A multimodal model can process or generate more than one content type. | **Yes** |
| Every multimodal model is automatically an agent. | **No** |
| A single application can combine generative AI, NLP, speech, vision, and information extraction. | **Yes** |

**Rationale.** Multimodal describes supported content types. An agent additionally requires focused instructions and tools. Capability categories can overlap in one application.

### 12. G12 — Unit 2

*Matching · Identify AI capabilities · 5 points*

Match each requirement to its primary AI capability.

**Answer:**

| Item | Match |
| --- | --- |
| Create an original response to a prompt | **Generative AI** |
| Classify topics in a body of text | **Natural language processing** |
| Use instructions and an API tool to complete a business task | **Agentic AI** |
| Interpret objects in a video stream | **Computer vision** |
| Turn media content into named fields | **Information extraction** |

**Rationale.** Classify a scenario by its primary requested outcome: creation, focused language analysis, goal-directed tool use, visual interpretation, or structured extraction.

### 13. G13 — Unit 3

*Matching · Use Microsoft Foundry · 4 points*

Match each hierarchy level to its purpose.

**Answer:**

| Item | Match |
| --- | --- |
| Azure subscription and resource group | **Azure ownership, billing, lifecycle, and organization** |
| Foundry resource | **Parent boundary for shared compute, storage, tools, endpoints, and access management** |
| Foundry project | **Development and collaboration boundary for one AI solution** |
| Project asset | **A model, agent, connection, data item, code item, or knowledge artifact used by a solution** |

**Rationale.** The hierarchy moves from Azure ownership and lifecycle, to a shared Foundry resource, to a solution-specific project, and then to the assets managed in that project.

### 14. G14 — Unit 3

*Single choice · Use Microsoft Foundry · 1 point*

A new Foundry project is created. How many parent Foundry resources can the project belong to?

**Answer:** Exactly one

**Rationale.** Each Foundry project belongs to exactly one parent Foundry resource. A resource can support multiple child projects.

### 15. G15 — Unit 3

*Yes / No · Use Microsoft Foundry · 3 points*

For each statement about Foundry resources and projects, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| One Foundry resource can support multiple child projects. | **Yes** |
| One child project is designated as the default project. | **Yes** |
| A Foundry project can simultaneously belong to multiple parent Foundry resources. | **No** |

**Rationale.** A resource can have one or more child projects, including one default project. Each project has only one parent resource.

### 16. G16 — Unit 3

*Matching · Use Microsoft Foundry · 3 points*

Match each model concept to its description.

**Answer:**

| Item | Match |
| --- | --- |
| Model | **The trained AI offering** |
| Model card | **Documentation of capabilities, limitations, and supported tasks** |
| Model deployment | **A configured, callable serving route for inference** |

**Rationale.** The catalog offers models, the model card helps assess suitability, and a deployment makes the chosen model callable.

### 17. G17 — Unit 3

*Matching · Use Microsoft Foundry · 4 points*

Match each interface to its primary use.

**Answer:**

| Item | Match |
| --- | --- |
| Microsoft Foundry portal | **Build, configure, and test AI project assets in a web interface** |
| Azure portal | **Provision and govern Azure resources, manage IAM, and clean up resource groups** |
| Foundry Toolkit for Visual Studio Code | **Work with Foundry project resources from the code editor** |
| Foundry SDK or REST APIs | **Integrate programmatically and automate operations** |

**Rationale.** Foundry portal is the visual project experience, Azure portal governs Azure resources, Foundry Toolkit works inside VS Code, and SDKs or REST APIs enable code and automation.

### 18. G18 — Unit 3

*Single choice · Use Microsoft Foundry · 1 point*

You need a central, MCP-based connection that lets agents access multiple knowledge sources in a project. What should you use?

**Answer:** Foundry IQ

**Rationale.** Foundry IQ centralizes connections to knowledge sources and exposes them to agents through an MCP-based knowledge connection.

### 19. G19 — Unit 3

*Yes / No · Use Microsoft Foundry · 3 points*

For each statement about grounding, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Grounding adds retrieved information to prompt context at inference time. | **Yes** |
| Grounding retrains the base model on the organization's data. | **No** |
| An agent can use a tool to retrieve information from a knowledge store. | **Yes** |

**Rationale.** Grounding supplies relevant context when a request is processed. It does not change the base model through retraining.

### 20. G20 — Unit 3

*Matching · Use Microsoft Foundry · 4 points*

Match each endpoint to its typical use.

**Answer:**

| Item | Match |
| --- | --- |
| Foundry resource endpoint | **Resource-level capabilities such as shared Foundry Tools** |
| Project endpoint | **Project-based Responses API and Foundry-specific APIs such as Agent Service** |
| Azure OpenAI endpoint | **OpenAI-compatible APIs such as Chat Completions and Responses** |
| Tool-specific endpoint | **Calls to a particular prebuilt Foundry Tool** |

**Rationale.** Endpoints are not interchangeable. Choose the resource, project, Azure OpenAI-compatible, or tool-specific endpoint according to the API and feature being called.

### 21. G21 — Unit 3

*Single choice · Use Microsoft Foundry · 1 point*

Which authentication approach should you prefer for a production application?

**Answer:** Microsoft Entra ID token authentication with properly scoped Azure RBAC

**Rationale.** The module recommends token-based Microsoft Entra ID authentication and appropriately scoped role-based access for production. Static keys must be protected and never committed to source control.

### 22. G22 — Unit 4

*Single choice · Select Foundry Tools · 1 point*

A service must identify entities and sentiment in support messages. Which Foundry Tool should you select?

**Answer:** Azure Language

**Rationale.** Azure Language provides specialized NLP functions including entity extraction and sentiment analysis.

### 23. G23 — Unit 4

*Single choice · Select Foundry Tools · 1 point*

A client application must transcribe recorded calls and generate spoken responses. Which Foundry Tool should you select?

**Answer:** Azure Speech

**Rationale.** Azure Speech supports speech to text, text to speech, and live conversational speech.

### 24. G24 — Unit 4

*Single choice · Select Foundry Tools · 1 point*

An application must convert written text from one language to another. Which Foundry Tool should you select?

**Answer:** Azure Translator

**Rationale.** Azure Translator is the task-specific service for translating written text and documents between languages.

### 25. G25 — Unit 4

*Single choice · Select Foundry Tools · 1 point*

A finance application must use prebuilt and custom models to extract layout, tables, key-value pairs, and fields from invoices. Which Foundry Tool should you select?

**Answer:** Azure Document Intelligence

**Rationale.** Azure Document Intelligence is document-focused and supports prebuilt or custom extraction of text, layout, tables, and fields from invoices, receipts, and forms.

### 26. G26 — Unit 4

*Single choice · Select Foundry Tools · 1 point*

A solution must extract structured information across documents, images, video, and audio streams. Which Foundry Tool should you select?

**Answer:** Azure Content Understanding

**Rationale.** Azure Content Understanding is designed for complex multimodal unstructured content across documents, forms, images, video, and audio.

### 27. G27 — Unit 4

*Multiple choice · Select Foundry Tools · 3 points*

When should you favor a task-specific Foundry Tool over a general-purpose generative model? Select three answers.

**Answer** (select 3):

- The required task is already supported by a prebuilt capability.
- The application needs a focused API and predictable output.
- Cost and operational predictability matter.

**Rationale.** A specialized service is a strong fit for an already-supported, focused task when predictable behavior and cost matter. Open-ended generation is the opposite requirement, and grounding does not require retraining.

### 28. G28 — Unit 4

*Build list · Select Foundry Tools · 5 points*

Arrange the general steps for consuming a Foundry Tool in the order presented in the module.

**Answer** (correct sequence):

1. Obtain the correct tool-specific endpoint.
2. Authenticate with a supported key or token-based identity.
3. Use the tool's SDK or REST API.
4. Send input in the service's required format.
5. Validate and use the structured response.

**Rationale.** A client obtains the correct endpoint, authenticates, calls through the appropriate SDK or REST API, sends correctly formatted input, and validates the returned structured data.

### 29. G29 — Unit 5

*Single choice · Choose developer tools and SDKs · 1 point*

Which Visual Studio Code extension lets developers browse project resources, deploy models, test models and agents, and generate integration code?

**Answer:** Foundry Toolkit for Visual Studio Code

**Rationale.** Foundry Toolkit brings Foundry resource browsing, deployment, playgrounds, agent configuration, and integration workflows into VS Code.

### 30. G30 — Unit 5

*Single choice · Choose developer tools and SDKs · 1 point*

A developer wants an AI assistant that helps write code in the editor. Which tool should the developer use?

**Answer:** GitHub Copilot

**Rationale.** GitHub Copilot is the AI coding assistant. Foundry Toolkit is used to work with Foundry projects and assets from VS Code.

### 31. G31 — Unit 5

*Matching · Choose developer tools and SDKs · 5 points*

Match each development requirement to the most appropriate interface.

**Answer:**

| Item | Match |
| --- | --- |
| Connect to a project and manage agents, evaluations, or Foundry IQ | **Microsoft Foundry SDK** |
| Call a compatible model by using OpenAI request and response patterns | **OpenAI API and SDK** |
| Consume service-specific types for Azure Speech | **Foundry Tools SDK** |
| Call a Foundry Tool when no suitable SDK is available | **Foundry Tools REST API** |
| Configure and test interactively before writing client code | **Foundry portal or Toolkit playground** |

**Rationale.** Use the project-aware Foundry SDK for Foundry-specific assets, an OpenAI-compatible SDK for compatible model calls, a service SDK for a prebuilt tool, REST when an SDK is unsuitable, and a playground for code-free experiments.

### 32. G32 — Unit 5

*Multiple choice · Choose developer tools and SDKs · 4 points*

Which four factors should guide the choice of a development environment? Select four answers.

**Answer** (select 4):

- Support for the required languages, SDKs, and APIs
- Fit with the application type and operating environments
- Integration with source control and the delivery workflow
- Team familiarity and productivity

**Rationale.** The environment should support the workload and interfaces, fit target platforms, integrate with engineering workflows, and suit the team. Both Visual Studio and VS Code can support Azure AI development.

### 33. G33 — Unit 5

*Build list · Choose developer tools and SDKs · 7 points*

Arrange the typical developer workflow in the order presented in the module.

**Answer** (correct sequence):

1. Create or select a project and explore models or tools in the Foundry portal.
2. Experiment in a playground.
3. Choose the language, API, and SDK.
4. Develop the application in Visual Studio Code or Visual Studio.
5. Store the code in source control.
6. Use scripts and CI/CD for repeatable project operations.
7. Use identity-based authentication and secure configuration for production.

**Rationale.** The module moves from project exploration and experimentation to interface selection, implementation, source control, automation, and secure production configuration.

### 34. G34 — Unit 6

*Matching · Apply responsible AI principles · 6 points*

Match each engineering action to the responsible AI principle it most directly supports.

**Answer:**

| Item | Match |
| --- | --- |
| Measure model performance across relevant population subgroups. | **Fairness** |
| Test failure modes and provide a safe fallback. | **Reliability and safety** |
| Minimize data and secure it in storage and transit. | **Privacy and security** |
| Include diverse perspectives and address accessibility. | **Inclusiveness** |
| Disclose AI involvement, uncertainty, and limitations. | **Transparency** |
| Assign owners, approvals, human oversight, and audit duties. | **Accountability** |

**Rationale.** The six principles address equitable outcomes, dependable and safe behavior, protected data and systems, broad participation, understandable operation, and human or organizational ownership.

### 35. G35 — Unit 6

*Single choice · Apply responsible AI principles · 1 point*

A loan model has materially different approval accuracy for otherwise comparable demographic groups. Which principle is the primary concern?

**Answer:** Fairness

**Rationale.** Fairness concerns equitable treatment and performance across affected groups. Inclusiveness focuses on ensuring people across abilities and backgrounds can participate and benefit.

### 36. G36 — Unit 6

*Yes / No · Apply responsible AI principles · 3 points*

For each statement about transparency and accountability, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Explaining an AI system's intended use and limitations supports transparency. | **Yes** |
| Assigning named owners and approval responsibilities supports accountability. | **Yes** |
| When a system appears autonomous, its designers and operators are no longer responsible for outcomes. | **No** |

**Rationale.** Transparency explains what the system does and where it is limited. Accountability establishes who owns its controls and consequences; apparent autonomy does not remove human responsibility.

### 37. G37 — Unit 6

*Single choice · Apply responsible AI principles · 1 point*

A medical triage system uses a risk-appropriate confidence threshold and sends uncertain cases to a clinician. Which principle does this design most directly support?

**Answer:** Reliability and safety

**Rationale.** Risk-appropriate thresholds, safe fallback, and human escalation reduce harm from uncertain or failed predictions and directly support reliability and safety.

### 38. G38 — Unit 6

*Yes / No · Apply responsible AI principles · 3 points*

For each statement about confidence scores, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A confidence score expresses a model's estimated uncertainty. | **Yes** |
| A high confidence score guarantees that a prediction is correct. | **No** |
| The decision threshold should reflect the risk of the use case. | **Yes** |

**Rationale.** A confidence score communicates estimated certainty but is not a guarantee. Systems should interpret it using a threshold appropriate to the possible harm.

### 39. G39 — Unit 6

*Multiple choice · Apply responsible AI principles · 4 points*

Which four controls demonstrate that responsible AI is applied throughout the lifecycle? Select four answers.

**Answer** (select 4):

- Evaluate relevant subgroups, edge cases, misuse, and failure modes.
- Prepare monitoring, fallback behavior, human escalation, and rollback before deployment.
- Audit access, monitor outcomes, and review incidents during operation.
- Define owners, review processes, and approval responsibilities during planning.

**Rationale.** Responsible AI begins during planning and continues through testing, deployment, and operation. Reactive safeguards and blind reliance on a probabilistic score are insufficient.

### 40. G40 — Unit 7

*Single choice · Complete the Foundry preparation exercise · 1 point*

During project creation, why should you record and carefully select the Azure region?

**Answer:** The region affects service and model availability.

**Rationale.** The exercise calls out region selection because available services, models, and deployment capacity can vary by region.

### 41. G41 — Unit 7

*Build list · Complete the Foundry preparation exercise · 5 points*

Arrange the model deployment and testing steps from the exercise in order.

**Answer** (correct sequence):

1. In Discover, open Models and search for gpt-5.2.
2. Open the model card and review capabilities and limitations.
3. Deploy the model by using the default settings.
4. Add instructions in the playground that establish the assistant's role.
5. Send a user prompt and inspect the result.

**Rationale.** The exercise first finds and evaluates the catalog model, then deploys it, establishes behavior through instructions, and finally tests a user request.

### 42. G42 — Unit 7

*Yes / No · Complete the Foundry preparation exercise · 3 points*

For each statement about the exercise, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| The Manage area is used to compare resource-level and project-level information and locate endpoints. | **Yes** |
| Foundry Toolkit can inspect and test the same deployed model from Visual Studio Code. | **Yes** |
| Cleanup is performed by deleting the model card without checking the exercise resource group. | **No** |

**Rationale.** Manage exposes the resource and project connection details, and the Toolkit can test the deployment in VS Code. Cleanup requires confirming the resource group's contents and then deleting the exercise resource group when it is no longer needed.

## Case Study 1 — Contoso Travel

*4 questions · 7 points*

**Scenario.** Contoso Travel is building a multilingual travel-support assistant in a Microsoft Foundry project. Customers submit written chat messages in English, Spanish, and French. The solution must translate messages, identify sentiment and travel-related entities, answer from company policies that change frequently, and call the booking system's REST API to rebook an itinerary after the customer confirms. The project already has a compatible language-model deployment. Developers must automate agent configuration through CI/CD, test project assets in Visual Studio Code, and avoid embedded secrets in production.

### 43. CT01 — Units 2 and 3

*Multiple choice · Design an agentic solution · 3 points*

Which three elements should Contoso combine to create the travel-support agent? Select three answers.

**Answer** (select 3):

- The deployed language model
- Focused role, behavior, and safety instructions
- Tools for policy retrieval and booking-system actions

**Rationale.** An agent combines a model, focused instructions, and tools. Retrieval can ground current policies at inference time, so policy updates do not require recurring base-model retraining.

### 44. CT02 — Unit 4

*Multiple choice · Select Foundry Tools · 2 points*

Which two Foundry Tools meet the focused text-processing requirements? Select two answers.

**Answer** (select 2):

- Azure Translator
- Azure Language

**Rationale.** Azure Translator converts written text between languages. Azure Language identifies sentiment and entities in text. The scenario does not require audio or document-field extraction for these requirements.

### 45. CT03 — Unit 3

*Single choice · Ground an agent with knowledge · 1 point*

Which Foundry capability should Contoso use to centralize policy knowledge connections and ground answers without retraining the base model?

**Answer:** Foundry IQ

**Rationale.** Foundry IQ provides a central MCP-based knowledge connection. Retrieved policy information is added to prompt context at inference time instead of retraining the model.

### 46. CT04 — Units 3 and 5

*Single choice · Choose an interface and authentication · 1 point*

Which combination should Contoso use to automate Foundry-specific agent configuration and authenticate the production workload?

**Answer:** Microsoft Foundry SDK with the project endpoint, plus Microsoft Entra ID and scoped Azure RBAC

**Rationale.** The Foundry SDK and project endpoint support project-specific features such as Agent Service and CI/CD automation. Production should use token-based Entra ID authentication and least-privilege RBAC.

## Case Study 2 — Northwind Claims

*4 questions · 11 points*

**Scenario.** Northwind Claims receives scanned receipts and invoices, typed claim descriptions, photographs, short videos, and recorded calls. Phase 1 must extract standard fields and layout from familiar receipts and invoices. Phase 2 must use one multimodal approach to derive structured information from documents, images, video, and audio. An AI model will help triage claims and returns confidence scores, but material claim decisions require human review. The company must measure outcomes across relevant population groups, support users with different abilities, disclose AI involvement and uncertainty, protect customer data, assign named owners, and monitor the deployed system.

### 47. NC01 — Unit 4

*Single choice · Select Foundry Tools · 1 point*

Which service should Northwind use for Phase 1?

**Answer:** Azure Document Intelligence

**Rationale.** Phase 1 is a document-focused requirement for standard receipt and invoice fields, layout, tables, and key-value pairs. Azure Document Intelligence provides prebuilt and custom document extraction models.

### 48. NC02 — Unit 4

*Single choice · Select Foundry Tools · 1 point*

Which service should Northwind use for the unified multimodal extraction required in Phase 2?

**Answer:** Azure Content Understanding

**Rationale.** Azure Content Understanding is suited to extracting structured information from varied unstructured content across documents, images, video, and audio.

### 49. NC03 — Unit 6

*Matching · Apply responsible AI principles · 5 points*

Match each Northwind requirement to the responsible AI principle it most directly supports.

**Answer:**

| Item | Match |
| --- | --- |
| Measure claim-triage outcomes across relevant population groups. | **Fairness** |
| Make the experience usable by people with different abilities. | **Inclusiveness** |
| Explain AI involvement, intended use, uncertainty, and limitations. | **Transparency** |
| Protect customer content and define access and retention controls. | **Privacy and security** |
| Assign named owners and require human review for material decisions. | **Accountability** |

**Rationale.** Subgroup outcomes concern fairness; accessibility concerns inclusiveness; explanations concern transparency; data controls concern privacy and security; and named ownership with human review concerns accountability.

### 50. NC04 — Unit 6

*Multiple choice · Operationalize responsible AI · 4 points*

Which four controls should Northwind implement before and after deployment? Select four answers.

**Answer** (select 4):

- Test subgroup performance, edge cases, misuse, and failure modes.
- Set a risk-appropriate confidence threshold with fallback and human escalation.
- Use Microsoft Entra ID, least-privilege access, and protected storage and transit.
- Monitor outcomes, audit access, and review incidents in operation.

**Rationale.** The required controls address fairness testing, reliability and safety, privacy and security, and accountable operation. Hiding uncertainty violates transparency, and automation never removes human or organizational accountability.

## Coverage by unit

| Unit | Domain | Questions | Points |
| --- | --- | --- | --- |
| Unit 1 | Plan an Azure AI solution | 4 | 10 |
| Unit 2 | Identify AI capabilities | 8 | 20 |
| Unit 3 | Use Microsoft Foundry; Ground an agent with knowledge | 10 | 25 |
| Unit 4 | Select Foundry Tools | 10 | 17 |
| Unit 5 | Choose developer tools and SDKs | 5 | 18 |
| Unit 6 | Apply responsible AI principles; Operationalize responsible AI | 8 | 27 |
| Unit 7 | Complete the Foundry preparation exercise | 3 | 9 |
| Units 2 and 3 | Design an agentic solution | 1 | 3 |
| Units 3 and 5 | Choose an interface and authentication | 1 | 1 |
| **Total** | | **50** | **130** |
