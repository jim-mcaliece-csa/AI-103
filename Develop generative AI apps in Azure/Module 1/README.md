# Module 1 — Plan and prepare to develop AI solutions on Azure

> **Official module:** [Plan and prepare to develop AI solutions on Azure](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/)  
> **Level:** Beginner · **Role:** AI Engineer · **Length:** Approximately 1 hour · **Units:** 9  
> **Notes reviewed:** 2026-08-28

[Open the interactive flashcards and practice exam](index.html)

These notes summarize every unit in the Microsoft Learn module. Product names and portal screens can change, so use the linked Microsoft pages as the source of truth.

## Learning objectives

By the end of this module, you should be able to:

- [ ] Identify common AI capabilities that can be added to applications.
- [ ] Describe Microsoft Foundry and decide when to use it.
- [ ] Describe Foundry Tools and select an appropriate prebuilt service.
- [ ] Select suitable development tools, APIs, and SDKs.
- [ ] Apply Microsoft's six responsible AI principles.

## Module map

| Unit | Topic | Duration | Central question |
| ---: | --- | ---: | --- |
| 1 | Introduction | 1 min | What must be considered before building an AI solution? |
| 2 | What is AI? | 5 min | Which AI capability matches the requirement? |
| 3 | Microsoft Foundry | 5 min | How are Azure AI solution assets organized and managed? |
| 4 | Foundry Tools | 5 min | When should a prebuilt task-specific service be used? |
| 5 | Developer tools and SDKs | 5 min | Which environment and programming interface should be used? |
| 6 | Responsible AI | 5 min | How should AI-related risks and impacts be addressed? |
| 7 | Exercise | 30 min | How do you create a project, deploy a model, and use the VS Code toolkit? |
| 8 | Module assessment | 3 min | Can you distinguish the module's key products and interfaces? |
| 9 | Summary | 1 min | Can you connect requirements, services, tools, and responsibility? |

## The module's core planning sequence

1. **Start with the business requirement.** Determine what the solution must understand, generate, predict, extract, or automate.
2. **Identify the required AI capabilities.** A solution can combine generative AI, agents, NLP, speech, vision, and information extraction.
3. **Choose the platform and services.** Decide whether the solution needs a Foundry project, model deployments, agents, knowledge, or task-specific Foundry Tools.
4. **Choose the development experience.** Select the portal, IDE/editor, language, API, and SDK that fit the workload and team.
5. **Design for responsible AI from the beginning.** Fairness, safety, privacy, inclusion, transparency, and accountability are lifecycle requirements.

> **Exam mindset:** Select technology only after identifying the needed capability. A model is one component of a complete application, not the entire solution.

---

## Unit 1 — Introduction

[Open Unit 1](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/1-introduction)

### Why planning matters

Modern AI applications commonly combine:

- **Machine-learning models** for learned prediction, interpretation, reasoning, or generation.
- **AI services** that expose ready-made capabilities through APIs and SDKs.
- **Prompt engineering** to guide a generative model's behavior and output.
- **Custom code** for business rules, workflows, validation, integrations, security, and the user experience.

Before implementation, determine:

- The business outcome and target users.
- The inputs and outputs, including their modalities: text, audio, images, video, or documents.
- Whether the workload needs a flexible generative model, a task-specific service, an agent, or a combination.
- The services, models, tools, SDKs, and frameworks the team will use.
- Development, testing, deployment, monitoring, security, and governance requirements.
- Risks and responsible AI controls.

Microsoft presents **Microsoft Foundry** as its comprehensive platform for AI development on Azure and recommends it for all but the simplest AI solutions.

### Key takeaway

Do not reduce an AI solution to a single model call. A production solution also needs application logic, data and service connections, authentication, evaluation, monitoring, deployment practices, and responsible AI controls.

---

## Unit 2 — What is AI?

[Open Unit 2](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/2-what-is-ai)

### Working definition

Artificial intelligence is a broad category of software capabilities that enable an application to exhibit behavior associated with human intelligence. Modern solutions generally use machine-learning models that capture statistical and semantic relationships from large quantities of data. Applications use those relationships to interpret inputs, reason over information, and generate responses or predictions.

The capability categories overlap. Classify an exam scenario by its **primary requested outcome**, while remembering that a real application can combine several capabilities.

### 1. Generative AI and agents

**Generative AI** creates original output in response to a prompt. Common outputs include conversational responses, summaries, drafts, code, images, and other created content.

A **large language model (LLM)** provides language interpretation and generation. An **AI agent** adds a task-oriented layer:

- A model supplies language reasoning.
- Focused instructions define the role, responsibilities, constraints, and expected behavior.
- Tools let the agent retrieve knowledge or perform actions.

This gives a useful formula:

**Agent = model + instructions + tools**

A standalone model primarily generates a response. An agent can reason about a goal, acquire context through tools, and automate part or all of a defined task.

Examples:

- A chat application that generates an original answer.
- A writing assistant that drafts or rewrites content.
- An agent that searches organizational knowledge before answering.
- An agent that calls an API to complete a business task.

### 2. Natural language processing

**Natural language processing (NLP)** is the established AI field for understanding and analyzing human language. Modern LLMs evolved from NLP, but NLP and generative AI are not synonyms.

Specialized NLP approaches remain valuable for focused, predictable text-analysis tasks, including:

- Entity extraction.
- Sentiment analysis.
- Text classification.
- Key phrase or topic identification.
- Summarization.
- Conversational language understanding and question answering.

Use the scenario wording:

- Open-ended reasoning or new content generation points toward **generative AI**.
- A constrained and repeatable text-analysis task often points toward a **specialized NLP service or model**.

Some tasks, such as summarization, can be solved either way. The required flexibility, predictability, cost, latency, and output format determine the better fit.

### 3. Computer speech

Computer speech enables voice interaction and audio processing:

- **Speech recognition / speech to text:** convert spoken audio into text.
- **Speech synthesis / text to speech:** convert text into spoken audio.
- **Live speech:** support real-time conversational experiences.

Modern speech systems can address background noise, interruptions, different languages, and different accents. Beyond voice assistants, common uses include live or recorded transcription, analysis of calls, spoken responses, read-aloud interfaces, and speech translation.

> **Memory check:** Recognition listens; synthesis speaks.

### 4. Computer vision

Computer vision enables applications and agents to accept, interpret, and process visual input from:

- Images.
- Video.
- Live camera streams.

Example: an automated grocery checkout can identify products in a shopping basket without requiring barcode scans.

Increasingly, models are **multimodal**. They can process more than one type of content, such as text plus images. Generative multimodal models can also create visual output, including images or videos.

Important distinction:

- **Computer vision** describes interpreting or processing visual content.
- **Generative AI** describes creating new content.
- **Multimodal** describes the types of input or output a model supports.
- A multimodal model is not automatically an agent; an agent also has task instructions and tools.

### 5. Information extraction

Information extraction turns unstructured or semi-structured content into useful fields, records, or insights. It can combine:

- Generative-model reasoning.
- NLP and document-understanding techniques.
- Computer vision and optical character recognition for scanned content.
- Speech processing for recordings.

Example: an expense-claim application processes a scanned receipt and extracts the purchase date, line items, and total.

Important distinction:

- **OCR** detects and reads text in an image.
- **Information extraction** assigns business meaning and structure to the content.

Reading the characters “123.45” is OCR. Determining that 123.45 is the receipt's total amount is information extraction.

### Capability selection guide

| Requirement clue | Primary capability |
| --- | --- |
| Create an original answer, draft, image, video, or code | Generative AI |
| Use a model, focused instructions, and tools to complete a responsibility | Agentic AI |
| Find sentiment, entities, topics, or classifications in text | NLP |
| Convert audio into text | Speech recognition |
| Convert text into spoken audio | Speech synthesis |
| Interpret an image, video, or camera stream | Computer vision |
| Turn documents or media into named fields and structured data | Information extraction |

### Common exam confusions

- An **agent** is not just another name for an LLM.
- NLP is broader and older than generative AI; LLMs developed from the NLP field.
- Summarization can be a specialized NLP task or a generative AI task.
- A receipt scenario may use OCR and vision, but named business fields such as date, vendor, items, and total indicate information extraction.
- Speech recognition and speech synthesis perform opposite transformations.
- These capability categories are not mutually exclusive; a single application can use several.

---

## Unit 3 — Microsoft Foundry

[Open Unit 3](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/4-azure-ai-foundry)

### What Microsoft Foundry provides

Microsoft Foundry is an Azure platform for organizing and building AI solutions. You can work through:

- The **Microsoft Foundry portal**, a web-based visual interface.
- The **Microsoft Foundry SDK**, a programmatic interface for applications, scripts, and automation.

You can provision and consume individual AI resources without Foundry. However, the project organization, resource management, and integrated development features make Foundry the recommended approach for all but very simple solutions.

### Resource and project hierarchy

| Level | Purpose | Scope |
| --- | --- | --- |
| Azure subscription and resource group | Azure ownership, billing, lifecycle, and organization | Can contain one or more Azure resources |
| Foundry resource | Parent Azure resource that supplies compute, storage, AI tools, shared services, endpoints, and access management | Can support one or more child projects |
| Foundry project | Development and collaboration boundary for a specific AI solution | Belongs to exactly one Foundry resource |
| Project assets | Models, agents, connections, data, code, knowledge, and related artifacts used by a solution | Managed in the project context |

One child project is designated the **default project**. The parent resource can support additional projects.

> **High-yield distinction:** The resource supplies shared Azure capabilities and governance. The project organizes the assets used to build a particular solution.

### Assets used in a Foundry project

#### Models

Foundry Models provides a catalog of models from Microsoft, OpenAI, and other providers. Developers can find, compare, deploy, and test models.

- A **model** is the trained AI offering.
- A **model deployment** makes a selected model available for inference.
- A **model card** describes capabilities, limitations, supported tasks, and other selection information.

Applications can access compatible deployed models through either a project-based interface or an Azure OpenAI-compatible interface, depending on the API and feature requirements.

#### Agents

An agent is a named AI configuration that encapsulates:

- An LLM.
- Focused instructions.
- Tools.

The resulting autonomous entity can perform tasks and collaborate with users or other agents. Foundry agents are developed and consumed through Microsoft Foundry Agent Service and the project endpoint.

#### Tools

Agent tools may include:

- Built-in web search.
- Code interpreter.
- Custom tools.
- Third-party tools exposed through Model Context Protocol (MCP) connections.

Do not confuse a general **agent tool** with the capitalized product family **Foundry Tools**, which provides prebuilt services such as Language, Speech, and Content Understanding.

#### Knowledge and Foundry IQ

Agents can use tools to connect to knowledge stores. Retrieved information is added to the prompt context so the response can be grounded in relevant data.

**Foundry IQ** simplifies access to multiple knowledge sources by providing a central, MCP-based knowledge connection within a project.

Grounding supplies relevant information at inference time; it does not retrain the base model on the organization's data.

### What developers do in the Foundry portal

From a Foundry project, developers can:

- Find, compare, deploy, and test models.
- Create and test agents.
- Create MCP connections to tools and Foundry IQ knowledge.
- Explore and test Foundry Tools.
- Manage resource configuration and user access.
- Find endpoints and keys needed by client applications.

The Foundry SDK enables the same style of work programmatically and supports scripts and CI/CD automation.

### Portal comparison

| Interface | Use it for |
| --- | --- |
| Microsoft Foundry portal | Build, configure, and test AI project assets |
| Azure portal | Provision and govern Azure resources, manage IAM, view resource groups, and clean up resources |
| Foundry Toolkit for VS Code | Work with Foundry project resources from the code editor |
| Foundry SDK or REST APIs | Programmatic integration and automation |

### Endpoint comparison

The lab exposes three important connection concepts:

| Connection information | Typical use |
| --- | --- |
| Foundry resource endpoint | Resource-level capabilities, including Foundry Tools shared by projects |
| Project endpoint | Project-based model access with the Responses API and Foundry-specific APIs such as Agent Service |
| Azure OpenAI endpoint | OpenAI-compatible APIs, including Chat Completions and Responses |

Do not assume one endpoint works for every SDK or service. Foundry Tools can require tool-specific endpoints.

### Authentication

The exercise displays a key that can authenticate to supported models and tools. For production, prefer token-based authentication with Microsoft Entra ID and properly scoped Azure role-based access control.

- **Key-based authentication** uses a static secret; protect it and never commit it to source control.
- **Microsoft Entra ID authentication** uses a user, service principal, or managed identity and supports role-based authorization.

### Architecture and naming caution

This module uses the latest Foundry project architecture. Older **classic** Foundry projects can use a hub-based architecture, and older screenshots or documentation may use previous names or navigation.

Foundry Tools were previously called:

1. Azure AI Services.
2. Azure Cognitive Services.

Those names can still appear in resource types, endpoints, SDK package names, and older documentation.

### Exam focus

- A project belongs to one Foundry resource.
- A resource can support multiple projects, including one default project.
- Use the Foundry portal to work visually with project assets.
- Use the Foundry SDK to work programmatically and automate operations.
- A model, an agent, a tool, and a knowledge source are different concepts.
- Foundry IQ centralizes connections to knowledge.

---

## Unit 4 — Foundry Tools

[Open Unit 4](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/3-azure-ai-services)

### Why use task-specific tools?

Foundry Tools is a collection of prebuilt APIs and models for common AI tasks. A task-specific service can be more cost-effective and predictable than asking a general-purpose generative model or agent to perform every task.

Use a Foundry Tool when:

- The required task is already supported by a prebuilt capability.
- The application needs a focused API and predictable output.
- Cost and operational predictability matter.
- A specialized model is more appropriate than open-ended generation.

### Tools named in this module

| Foundry Tool | Core purpose | Typical scenario clues |
| --- | --- | --- |
| **Azure Language** | Analyze natural-language text; entity extraction, sentiment analysis, summarization, conversational language understanding, and question answering | Sentiment, entities, classification, summaries, intent, question answering |
| **Azure Speech** | Speech to text, text to speech, and real-time live speech | Transcribe, synthesize, spoken audio, voice interaction |
| **Azure Translator** | Translate text between many languages | Translate written text or documents |
| **Azure Document Intelligence** | Use prebuilt or custom models to extract fields from invoices, receipts, forms, and other documents | OCR, layout, tables, key-value pairs, invoice or form fields |
| **Azure Content Understanding** | Analyze multimodal documents, forms, images, videos, and audio streams | Complex unstructured or multimodal content; structured extraction across media types |

### Important service distinctions

| If the requirement is... | Prefer... | Reason |
| --- | --- | --- |
| Analyze what text means | Azure Language | It provides specialized NLP analysis |
| Convert text from one language to another | Azure Translator | Translation is the primary task |
| Process spoken input or generate spoken output | Azure Speech | The input or output is audio |
| Extract fields and layout from invoices, receipts, or forms | Azure Document Intelligence | It is document-focused and supports prebuilt/custom extraction models |
| Extract structured information across documents, images, audio, or video | Azure Content Understanding | It is multimodal and suited to varied unstructured content |

### Consuming Foundry Tools

A client application generally:

1. Obtains the correct **tool-specific endpoint**.
2. Authenticates with a supported key or token-based identity.
3. Uses the tool's SDK or REST API.
4. Sends input in the service's required format.
5. Validates and uses the structured response.

Some Foundry Tools provide a portal interface for configuration and testing. Foundry Tools are hosted in the Foundry resource associated with the project.

Although some tools can still be provisioned as separate Azure resources, Microsoft recommends using the tools provided through a Microsoft Foundry resource for new projects.

### Common exam confusions

- **Foundry Tools** are prebuilt AI services.
- **Foundry Models** is the model catalog and deployment experience.
- **Foundry IQ** connects agents to knowledge.
- **Foundry Toolkit** is the Visual Studio Code extension.
- An **agent tool** is a callable capability attached to an agent; it is not necessarily a Foundry Tool.

---

## Unit 5 — Developer tools and SDKs

[Open Unit 5](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/5-tools-and-sdks)

### Choose an appropriate environment

The Foundry portal supports many configuration and experimentation tasks, but developers still need to write, test, source-control, and deploy code.

Choose a development environment that:

- Supports the required languages, SDKs, and APIs.
- Fits the application type and operating environments.
- Integrates well with the team's source-control and delivery workflow.
- Is familiar and productive for the team.

Examples from the unit:

- **Visual Studio:** a natural choice for Windows and .NET-focused development.
- **Visual Studio Code:** a flexible editor for web, cross-platform, and open-source languages and libraries.

Both can be used for Azure AI development.

### Foundry Toolkit for Visual Studio Code

The **Foundry Toolkit** extension brings Foundry project tasks into VS Code. The module highlights these capabilities:

1. Browse and manage deployed models, agents, connections, and vector stores.
2. Deploy models from the model catalog.
3. Test models and agents in integrated playgrounds.
4. Configure declarative and hosted agents with a visual designer and YAML files.
5. Generate integration code that connects agents to applications.

### GitHub and GitHub Copilot

- **GitHub** supports source control and DevOps collaboration.
- Visual Studio and VS Code integrate with GitHub.
- **GitHub Copilot** is an AI coding assistant that can improve developer productivity.

> **Exam trap:** GitHub Copilot helps write code. Foundry Toolkit is the VS Code extension used to work with Foundry projects.

### Languages

Azure AI applications can be developed in common languages and frameworks, including:

- C#
- Python
- Node.js
- TypeScript
- Java
- Other languages that can call the required SDK or REST API

### API and SDK decision map

| Requirement | Choose | Why |
| --- | --- | --- |
| Connect to a Foundry project and use Foundry-specific assets, agents, or Foundry IQ | **Microsoft Foundry SDK** | It is project-aware and exposes Foundry-specific functionality |
| Build a model or chat application using a compatible Foundry model | **OpenAI API and SDK** | It uses familiar OpenAI-compatible request and response patterns |
| Consume Azure Language, Speech, Translator, Document Intelligence, or another prebuilt service | **Foundry Tools SDK** | It provides service-specific client types |
| Call a Foundry Tool without a suitable SDK | **Foundry Tools REST API** | It provides direct HTTP access |
| Configure or test interactively | **Foundry portal or a Toolkit playground** | It avoids writing a client before experimentation |

Current Microsoft guidance adds this useful endpoint distinction:

- Use the **Foundry SDK and project endpoint** for project configuration and Foundry-specific features such as agents, evaluations, and project tools.
- Use an **OpenAI-compatible endpoint and SDK** when the application needs the OpenAI API surface and compatible model calls.
- Use a **tool-specific endpoint and SDK** for Foundry Tools.

### A typical developer workflow

1. Use the Foundry portal to create or select the project and explore models or tools.
2. Experiment in a playground.
3. Choose the language, API, and SDK.
4. Use VS Code or Visual Studio to develop the application.
5. Store code in source control.
6. Use scripts and CI/CD to automate repeatable project operations.
7. Use identity-based authentication and secure configuration for production.

---

## Unit 6 — Responsible AI

[Open Unit 6](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/6-responsible-ai)

### Why responsible AI matters

AI systems are commonly probabilistic and depend on training data. Their outputs can be incorrect, incomplete, or biased. Human-like interaction can also cause users to place more trust in a system than its accuracy warrants.

Incorrect predictions or misuse can harm individuals and groups. Responsible AI must therefore be considered throughout planning, data preparation, design, development, testing, deployment, and operation.

### Microsoft's six responsible AI principles

| Principle | Meaning | Example or risk | Engineering actions |
| --- | --- | --- | --- |
| **Fairness** | Treat people equitably and avoid systematic advantage or disadvantage | A loan model must not unfairly favor or harm applicants based on gender, ethnicity, or similar characteristics | Review data representation; measure performance for relevant population subgroups; investigate and mitigate disparities throughout the lifecycle |
| **Reliability and safety** | Operate dependably and avoid unacceptable harm | Failure in an autonomous vehicle or medical system can threaten human life | Test normal, edge, and failure cases; use controlled deployment; set risk-appropriate confidence thresholds; add safe fallback or escalation |
| **Privacy and security** | Protect data and respect privacy during training and production | Training data and new application inputs can contain personal or confidential information | Minimize and protect data; control access; secure storage and transit; define retention; protect credentials and customer content |
| **Inclusiveness** | Empower and engage people across abilities and backgrounds | A design can exclude users when the development group or testing population is too narrow | Include diverse perspectives in design, development, and testing; address accessibility and different use contexts |
| **Transparency** | Make the system's purpose, operation, limits, and use of data understandable | Users may over-trust a prediction if uncertainty and limitations are hidden | Disclose AI involvement; explain intended use and limitations; communicate confidence; explain data use, retention, and access |
| **Accountability** | Keep people and organizations responsible for AI behavior and outcomes | A system may seem autonomous, but its designers and operators remain responsible | Establish governance, owners, review and approval, human oversight, auditing, and legal/policy standards |

### Important principle distinctions

- **Fairness vs inclusiveness:** Fairness concerns equitable treatment and outcomes. Inclusiveness concerns designing so the full range of people can participate and benefit.
- **Transparency vs accountability:** Transparency explains the system and its limits. Accountability identifies who owns decisions, controls, and consequences.
- **Reliability and safety vs privacy and security:** Reliability and safety address dependable behavior and harm from failure. Privacy and security address protection of data, identities, and systems.
- A confidence score communicates uncertainty; it does not guarantee correctness.
- Fairness tooling is helpful but insufficient by itself. Representative data, subgroup evaluation, and human judgment remain necessary.

### Apply the principles throughout the lifecycle

| Lifecycle stage | Responsible AI questions |
| --- | --- |
| Plan | Who can benefit or be harmed? Is AI appropriate? Who owns the outcome? |
| Data | Is the data representative, lawful, relevant, protected, and appropriately retained? |
| Build | Are safeguards, accessibility, explanations, validation, and least-privilege access designed in? |
| Test | Do tests cover subgroups, edge cases, misuse, attacks, uncertainty, and failure modes? |
| Deploy | Are approvals, monitoring, fallback behavior, human escalation, and rollback ready? |
| Operate | Are outcomes monitored, incidents reviewed, access audited, and users informed of material changes? |

---

## Unit 7 — Exercise: Prepare for an AI development project

[Open Unit 7](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/7-exercise-explore-ai-foundry) · [Open the full exercise](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/01-Explore-ai-studio.html)

The current exercise takes approximately 30 minutes. Microsoft notes that some features can be in preview or active development, so navigation labels and screenshots may change.

### Prerequisites

- An active Azure subscription.
- Visual Studio Code.
- Python 3.13.x; the current lab was tested with Python 3.13.12.
- Git installed and configured.
- Azure CLI.
- Permission and regional quota to deploy the requested model.

### Part 1: Create a Microsoft Foundry project

1. Open the Microsoft Foundry portal at https://ai.azure.com and sign in.
2. Enable the new Foundry experience if necessary.
3. Create a project with a unique name.
4. Expand the advanced options and select:
   - A parent Foundry resource, usually using the generated default name.
   - Your Azure subscription.
   - A new or existing resource group.
   - A recommended region.
5. Record the selected region and wait for project creation to finish.

What to learn:

- A project organizes the models, resources, data, and other assets for an AI solution.
- The project has one parent Foundry resource.
- Region affects service and model availability.

### Part 2: Deploy and test a model

1. Open **Discover**, select **Models**, and search for **gpt-5.2**.
2. Open its model card.
3. Review its capabilities and limitations.
4. Select **Deploy** with the default settings.
5. In the model playground, provide instructions that establish the assistant's role.
6. Send a prompt asking for important considerations when developing LLM applications.
7. Inspect the result.

What to learn:

- The catalog entry or model card describes a model.
- A deployment makes the model callable in the project.
- Instructions establish behavior; the user prompt requests a particular result.
- A playground lets you test a deployment before writing client code.

### Part 3: Inspect resource and project information

1. Open **Manage** in the Foundry portal.
2. Compare the resource level and project level.
3. Follow the parent-resource link and locate its endpoint.
4. Return to the project home page and identify the key, project endpoint, and Azure OpenAI endpoint.

Remember:

| Item | Meaning |
| --- | --- |
| Parent resource | Shared resource capabilities, service/model connections, and centralized access management |
| Project | Project-specific development context and assets |
| Resource endpoint | Access to resource-level functionality such as shared Foundry Tools |
| Project endpoint | Project-based Responses API and Foundry-specific APIs such as Agent Service |
| Azure OpenAI endpoint | OpenAI-compatible model APIs, including Chat Completions and Responses |
| Key | Static authentication secret supported by some models and tools; prefer Entra ID identities for production |

### Part 4: Use Foundry Toolkit in Visual Studio Code

1. Open VS Code and install **Foundry Toolkit for VS Code**.
2. Open the Toolkit view.
3. Expand Microsoft Foundry Resources.
4. Sign in to Azure and set the project as the default.
5. Expand the project's **Models** node and inspect the deployed model.
6. Under **Developer Tools > Build**, open the model playground.
7. Select and test the deployment from inside VS Code.

What to learn:

- The Toolkit brings Foundry resources and testing into the development environment.
- The same deployed model can be inspected and tested from the portal or VS Code.
- The Toolkit is not the same product as Foundry Tools.

### Part 5: Clean up

When the lab resources are no longer needed:

1. Open the resource group in the Azure portal.
2. Confirm that it contains only resources you intend to remove.
3. Delete the exercise resource group to prevent continuing charges.

### Lab completion record

- [ ] Foundry project created
- [ ] Parent resource and default project relationship identified
- [ ] Model card reviewed
- [ ] Model deployed
- [ ] Instructions and a user prompt tested in the portal playground
- [ ] Resource, project, and Azure OpenAI endpoints identified
- [ ] Foundry Toolkit installed
- [ ] Default project connected in VS Code
- [ ] Model tested in the VS Code playground
- [ ] Exercise resources cleaned up when no longer needed

---

## Unit 8 — Module assessment

[Open Unit 8](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/8-knowledge-check)

| Question | Correct answer | Why |
| --- | --- | --- |
| Which web portal should you use to work with assets in a Microsoft Foundry project? | **Microsoft Foundry portal** | It is the web interface for project assets. Azure portal manages underlying Azure resources; Microsoft Copilot is not the project portal. |
| Which Microsoft Foundry component provides prebuilt services for common AI tasks? | **Foundry Tools** | Tools includes ready-made services such as Language, Speech, Translator, Document Intelligence, and Content Understanding. |
| Which VS Code extension should you use to work with Foundry projects? | **Foundry Toolkit for Visual Studio Code** | It browses and manages project resources and provides integrated model and agent workflows. |

### Additional self-test

1. What four elements can a complete AI application combine?
2. What three components define an AI agent in this module?
3. Which capability turns spoken audio into text?
4. What is the difference between OCR and information extraction?
5. Can one Foundry resource support multiple projects?
6. Which Foundry component centralizes access to knowledge sources?
7. Which prebuilt tool is most appropriate for sentiment analysis?
8. Which interface should automate Foundry operations in a CI/CD workflow?
9. Why is a confidence score important to reliability, safety, and transparency?
10. Who remains accountable when an AI system appears to operate autonomously?

<details>
<summary>Self-test answers</summary>

1. Machine-learning models, AI services, prompt engineering, and custom code.
2. A model, focused instructions, and tools.
3. Speech recognition or speech to text.
4. OCR reads text and location; information extraction assigns meaning and maps content into useful fields or structure.
5. Yes. Each project has one parent resource, and a resource can support one or more projects.
6. Foundry IQ.
7. Azure Language.
8. The Microsoft Foundry SDK or REST APIs.
9. It communicates model uncertainty and helps the system apply a risk-appropriate decision threshold; it is not a guarantee.
10. The people and organizations that design, validate, deploy, and govern it.

</details>

---

## Unit 9 — Summary

[Open Unit 9](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/9-summary)

The module's main lesson is deliberate planning. You should be able to move from a requirement to five connected decisions:

1. **Capability:** What must the application understand, generate, extract, predict, or automate?
2. **Platform:** Which Foundry resource, project, model, agent, knowledge source, or prebuilt tool supports the capability?
3. **Interface:** Should the team use the Foundry portal, Foundry Toolkit, an SDK, or a REST API?
4. **Implementation:** Which language, model deployment, endpoints, authentication, custom code, and delivery practices are required?
5. **Responsibility:** What fairness, reliability, privacy, inclusion, transparency, and accountability measures are needed?

Microsoft Foundry is the preferred Azure platform for developing AI solutions. The individual technologies are most useful when selected from requirements rather than by product familiarity.

## High-yield review sheet

### Similar names you must distinguish

| Name | Remember it as |
| --- | --- |
| **Foundry portal** | Web UI for project assets |
| **Foundry resource** | Parent Azure resource and shared capability boundary |
| **Foundry project** | Development boundary for a solution |
| **Foundry Models** | Find, compare, deploy, and test models |
| **Foundry Tools** | Prebuilt task-specific AI APIs and models |
| **Foundry Toolkit** | VS Code extension |
| **Foundry IQ** | Central connection to knowledge sources |
| **Foundry SDK** | Programmatic access to Foundry projects and assets |
| **Agent tool** | Capability an agent invokes to retrieve information or act |

### Ten facts to memorize

1. Identify the required AI capability before choosing a service.
2. A comprehensive solution can combine models, services, prompt engineering, and custom code.
3. An agent combines a model, instructions, and tools.
4. A Foundry project belongs to one parent Foundry resource.
5. One Foundry resource can support multiple projects, including a default project.
6. Foundry Tools supplies prebuilt services for common AI tasks.
7. Foundry Toolkit is the VS Code extension for Foundry projects.
8. Use the Foundry SDK for Foundry-specific project assets and automation.
9. Microsoft's responsible AI principles are fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability.
10. Prefer Microsoft Entra ID and role-based access for production instead of embedding keys.

### Scenario-to-answer shortcuts

| Scenario phrase | Likely answer |
| --- | --- |
| Sentiment, entities, or focused text analysis | Azure Language |
| Spoken input, transcription, or synthetic voice | Azure Speech |
| Translate text between languages | Azure Translator |
| Invoice, receipt, or form fields | Azure Document Intelligence |
| Extract across documents, images, video, and audio | Azure Content Understanding |
| Work visually with project assets | Microsoft Foundry portal |
| Work with Foundry projects inside VS Code | Foundry Toolkit |
| Automate Foundry project operations | Foundry SDK |
| Centralize agent knowledge connections | Foundry IQ |
| Prevent unequal group outcomes | Fairness |
| Explain AI purpose, uncertainty, and limitations | Transparency |
| Assign human ownership and governance | Accountability |

## Sources and further reading

- [Module landing page](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/)
- [Unit 1: Introduction](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/1-introduction)
- [Unit 2: What is AI?](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/2-what-is-ai)
- [Unit 3: Microsoft Foundry](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/4-azure-ai-foundry)
- [Unit 4: Foundry Tools](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/3-azure-ai-services)
- [Unit 5: Developer tools and SDKs](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/5-tools-and-sdks)
- [Unit 6: Responsible AI](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/6-responsible-ai)
- [Unit 7: Exercise launcher](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/7-exercise-explore-ai-foundry)
- [Unit 7: Full exercise](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/01-Explore-ai-studio.html)
- [Unit 8: Module assessment](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/8-knowledge-check)
- [Unit 9: Summary](https://learn.microsoft.com/en-us/training/modules/prepare-azure-ai-development/9-summary)
- [Microsoft Foundry SDKs and endpoints](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview)
- [Foundry Toolkit for Visual Studio Code](https://code.visualstudio.com/docs/intelligentapps/overview)
- [Microsoft responsible AI principles](https://www.microsoft.com/ai/principles-and-approach)

## Glossary

| Term | Definition |
| --- | --- |
| Agent | A named AI configuration that combines a model, focused instructions, and tools to perform tasks. |
| Agentic AI | AI systems in which agents reason about goals and use tools to retrieve knowledge or take actions. |
| AI service | A hosted capability exposed through an API or SDK, often based on prebuilt models. |
| API | An interface through which one software component requests functionality from another. |
| API key | A static secret used to authenticate supported service requests; it must be protected. |
| Artificial intelligence (AI) | Software capabilities that enable applications to perform tasks associated with human intelligence. |
| Azure Content Understanding | A multimodal Foundry Tool for analyzing and extracting information from documents, images, audio, and video. |
| Azure Document Intelligence | A Foundry Tool that uses prebuilt or custom models to extract text, layout, and fields from documents. |
| Azure Language | A Foundry Tool for natural-language analysis such as entity extraction, sentiment analysis, and summarization. |
| Azure OpenAI endpoint | An endpoint used with OpenAI-compatible APIs such as Chat Completions and Responses. |
| Azure Speech | A Foundry Tool for speech recognition, speech synthesis, and live conversational speech. |
| Azure Translator | A Foundry Tool for translating text between languages. |
| Chat Completions API | An OpenAI-compatible API that generates model responses from a sequence of chat messages. |
| CI/CD | Continuous integration and continuous delivery or deployment; automation used to build, test, and release changes. |
| Computer speech | AI capabilities for recognizing spoken input and synthesizing spoken output. |
| Computer vision | AI capabilities for interpreting and processing images, video, and live camera streams. |
| Confidence score | A value that expresses a model's estimated certainty; it should be interpreted using a risk-appropriate threshold. |
| Connection | Configuration that lets a project or application securely reach an external service, data source, tool, or knowledge store. |
| Custom code | Application logic that implements business rules, orchestration, validation, integrations, and the user experience. |
| Default project | The project designated as the primary child project of a Foundry resource. |
| Endpoint | A service URL through which a client sends API requests. |
| Entity extraction | Identifying named items such as people, organizations, products, locations, or dates in text. |
| Fairness | Responsible AI principle requiring equitable treatment and attention to performance across affected groups. |
| Foundry Agent Service | Microsoft Foundry service used to create and consume agents through a project. |
| Foundry IQ | Foundry capability that centralizes connections to knowledge sources so agents can ground responses. |
| Foundry Models | The catalog and deployment experience for models from Microsoft, OpenAI, and other providers. |
| Foundry portal | The web-based visual interface for creating, configuring, testing, and managing Foundry projects and assets. |
| Foundry project | A child of one Foundry resource that organizes the connections, data, code, and assets for an AI solution. |
| Foundry resource | The parent Azure resource that provides shared compute, storage, tools, services, endpoints, and access management to one or more projects. |
| Foundry SDK | The programmatic interface for connecting to Foundry projects and working with Foundry-specific assets and operations. |
| Foundry Toolkit | The Visual Studio Code extension for browsing, configuring, deploying, testing, and integrating Foundry project assets. |
| Foundry Tools | Prebuilt task-specific APIs and models, previously called Azure AI Services and Azure Cognitive Services. |
| Generative AI | AI that creates new content in response to input or a prompt. |
| GitHub | A platform for source control, collaboration, and DevOps workflows. |
| GitHub Copilot | An AI coding assistant integrated with development environments; it is not the Foundry project-management extension. |
| Governance | Organizational policies, roles, review processes, and controls used to keep a system within responsible and legal requirements. |
| Grounding | Supplying relevant retrieved information as context so a model's response is based on designated sources. |
| Inclusiveness | Responsible AI principle requiring systems to empower and engage people across abilities and backgrounds. |
| Information extraction | Transforming unstructured or semi-structured content into named fields, records, or usable insights. |
| Instructions | Direction that establishes a model's or agent's role, responsibilities, constraints, and behavior. |
| Key-based authentication | Authentication that sends a static service secret with a request. |
| Knowledge store | A repository or service containing information an agent can retrieve through a tool. |
| Large language model (LLM) | A model trained on large quantities of language data to interpret and generate natural-language content. |
| Machine-learning model | A learned representation of patterns in data used to make predictions, interpret inputs, or generate outputs. |
| Microsoft Entra ID | Microsoft's cloud identity platform, used for token-based authentication and role-based access. |
| Microsoft Foundry | Microsoft's comprehensive Azure platform for developing AI solutions. |
| Model card | Documentation describing a model's capabilities, limitations, supported tasks, and suitability. |
| Model Context Protocol (MCP) | A standard protocol through which AI clients discover and invoke tools or access contextual resources. |
| Model deployment | A configured, callable instance or serving route for a selected model. |
| Multimodal model | A model that can process or generate more than one content type, such as text and images. |
| Natural language processing (NLP) | Models and techniques for understanding and analyzing human language. |
| Optical character recognition (OCR) | Computer-vision technology that locates and reads text in images or scanned documents. |
| OpenAI API | An API surface used to send prompts or messages to compatible deployed models and receive generated results. |
| Playground | An interactive interface for experimenting with a model or agent without first building a client application. |
| Privacy and security | Responsible AI principle requiring protection of data, content, identities, and systems. |
| Probabilistic model | A model whose predictions and outputs reflect learned likelihoods rather than guaranteed certainty. |
| Project asset | A model, agent, connection, file, evaluation, knowledge item, or related artifact used in a Foundry project. |
| Project endpoint | A URL for accessing a project's models and Foundry-specific APIs. |
| Prompt | Input that supplies a request, instruction, question, or context to a generative model. |
| Prompt engineering | Designing and refining prompts to produce useful, relevant, and appropriately structured output. |
| Reliability and safety | Responsible AI principle requiring dependable operation and controls against unacceptable harm. |
| Responses API | An OpenAI-compatible API for model responses and tool-enabled interactions. |
| REST API | An HTTP-based interface, often exchanging JSON, that can be called without a language-specific SDK. |
| Role-based access control (RBAC) | Authorization that grants operations to identities according to assigned roles and scope. |
| SDK | A language-specific library that wraps service APIs with client types and programming conveniences. |
| Semantic relationship | A learned connection in meaning among words, concepts, or other data elements. |
| Sentiment analysis | Classifying the opinion or emotional polarity expressed in text. |
| Speech recognition | Converting spoken audio into text. |
| Speech synthesis | Converting text into spoken audio. |
| Tool | A capability an agent can invoke to retrieve information or perform an action. |
| Tool-specific endpoint | The service URL used to call a particular Foundry Tool. |
| Token-based authentication | Authentication that uses a temporary identity token rather than a static service key. |
| Transparency | Responsible AI principle requiring clear communication of a system's purpose, behavior, limitations, uncertainty, and data use. |
| Unstructured data | Content whose meaning is not already organized into a fixed schema, such as prose, images, recordings, or video. |
| Vector store | Storage and retrieval for vector embeddings, often used to find semantically relevant content for grounding. |
