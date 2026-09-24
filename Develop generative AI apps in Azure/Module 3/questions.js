window.AI103_EXAM_SECTIONS = [
  {
    id: "general",
    title: "General Questions",
    kind: "general",
    description: "Answer 42 questions covering playground exploration, endpoint and SDK selection, authentication, the Responses API, the ChatCompletions API, responsive conversations, and the hands-on exercise."
  },
  {
    id: "case-contoso-learning",
    title: "Case Study 1 — Contoso Learning",
    kind: "case-study",
    context: "Contoso Learning is building a new tutoring assistant in a Microsoft Foundry project. The application must inspect project connections and configuration, use cloud evaluation and tracing, and call a deployed model. Production authentication must use Microsoft Entra ID. Learners ask follow-up questions, so the app must preserve conversational context. Long explanations should appear incrementally, and the service must handle many independent tutoring requests concurrently without blocking while each network call completes."
  },
  {
    id: "case-fabrikam-migration",
    title: "Case Study 2 — Fabrikam Migration",
    kind: "case-study",
    context: "Fabrikam is moving an established customer-service chat application to Azure while retaining compatibility with an existing OpenAI-style codebase that can also target another platform. The application uses the ChatCompletions API and must maintain conversation history explicitly. During an initial development phase, an API key is permitted, but it cannot be embedded in source code and production will use Microsoft Entra ID. The team wants to validate prompts in the Foundry model playground, generate a suitable code sample, configure the Azure OpenAI endpoint and deployment name, and then test the migrated application."
  }
];

window.AI103_QUESTIONS = [
  {
    id: "G01",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan a Foundry chat application",
    type: "single",
    prompt: "What is the central development decision emphasized at the start of this module?",
    options: [
      "Choose an appropriate endpoint, SDK, authentication method, and chat API for the application.",
      "Train a new foundation model before creating any client code.",
      "Use key-based authentication for every production application.",
      "Replace all existing chat applications with an autonomous agent."
    ],
    correct: "Choose an appropriate endpoint, SDK, authentication method, and chat API for the application.",
    rationale: "The module focuses on the choices needed to connect a client application to Foundry assets: endpoint, client SDK, authentication, and either the Responses or ChatCompletions API. Model training and agent creation are separate concerns."
  },
  {
    id: "G02",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan a Foundry chat application",
    type: "order",
    prompt: "Arrange these high-level stages in the order used by the module's documented hands-on exercise.",
    items: [
      "Replace ChatCompletions with Responses, then add state, streaming, and asynchronous behavior.",
      "Configure the starter app with the Azure OpenAI endpoint and model deployment name.",
      "Deploy gpt-5.2 in a Microsoft Foundry project.",
      "Implement and test the initial ChatCompletions request."
    ],
    correct: [
      "Deploy gpt-5.2 in a Microsoft Foundry project.",
      "Configure the starter app with the Azure OpenAI endpoint and model deployment name.",
      "Implement and test the initial ChatCompletions request.",
      "Replace ChatCompletions with Responses, then add state, streaming, and asynchronous behavior."
    ],
    rationale: "The documented exercise first deploys gpt-5.2 and configures the starter app with the Azure OpenAI endpoint and exact deployment name. It establishes a ChatCompletions baseline before moving to Responses and progressively adding response-ID state, streaming, and asynchronous behavior."
  },
  {
    id: "G03",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Plan a Foundry chat application",
    type: "yesno",
    prompt: "For each statement about the module's scope, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A Foundry chat application can combine Azure services with software frameworks.",
      "Every Foundry feature described in the module is guaranteed to remain unchanged.",
      "The module covers both the Responses API and the ChatCompletions API."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Foundry development combines services and frameworks, and the module compares both chat APIs. It also cautions that some Foundry features are in preview and can change."
  },
  {
    id: "G04",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore models in the playground",
    type: "single",
    prompt: "Why should a developer use the model playground before writing client code?",
    options: [
      "To test model behavior and settings interactively before committing to an implementation.",
      "To replace the need for a model deployment.",
      "To create a production identity for the application automatically.",
      "To guarantee that every future prompt produces the same response."
    ],
    correct: "To test model behavior and settings interactively before committing to an implementation.",
    rationale: "The playground is a no-code environment for trying prompts, system instructions, models, and generation settings. It accelerates prototyping but does not replace deployment, authentication, or application testing."
  },
  {
    id: "G05",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore models in the playground",
    type: "multiple",
    prompt: "Which four actions can you perform in the Foundry model playground? Select four answers.",
    options: [
      "Send prompts to deployed models and inspect responses.",
      "Adjust settings such as temperature and maximum tokens.",
      "Add system messages that guide model behavior.",
      "Experiment with different deployed models and configurations.",
      "Fine-tune the selected model directly in the playground chat pane.",
      "Grant callers Azure RBAC roles from the playground chat pane."
    ],
    correct: [
      "Send prompts to deployed models and inspect responses.",
      "Adjust settings such as temperature and maximum tokens.",
      "Add system messages that guide model behavior.",
      "Experiment with different deployed models and configurations."
    ],
    selectCount: 4,
    rationale: "The playground supports interactive inference and configuration experiments. Model fine-tuning and Azure RBAC assignment are separate Foundry and Azure workflows, not actions performed in the playground chat pane."
  },
  {
    id: "G06",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore models in the playground",
    type: "order",
    prompt: "Arrange the playground-to-code workflow presented in the module.",
    items: [
      "Iterate and refine the experience.",
      "Generate an SDK code sample.",
      "Develop and customize the application.",
      "Explore prompts and settings in the playground."
    ],
    correct: [
      "Explore prompts and settings in the playground.",
      "Generate an SDK code sample.",
      "Develop and customize the application.",
      "Iterate and refine the experience."
    ],
    rationale: "The recommended workflow prototypes behavior first, turns the configured session into starter code, customizes that code, and then loops back through testing and refinement."
  },
  {
    id: "G07",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore models in the playground",
    type: "matching",
    prompt: "Match each Code-pane choice or generated value to what it determines.",
    items: [
      "API choice",
      "Language choice",
      "SDK choice",
      "Pre-populated model deployment name"
    ],
    options: [
      "Selects Responses, ChatCompletions, or another supported API pattern.",
      "Selects the programming language used by the sample.",
      "Selects the client library demonstrated by the sample.",
      "Routes inference to the model deployment tested in the playground."
    ],
    correct: [
      "Selects Responses, ChatCompletions, or another supported API pattern.",
      "Selects the programming language used by the sample.",
      "Selects the client library demonstrated by the sample.",
      "Routes inference to the model deployment tested in the playground."
    ],
    rationale: "The Code pane lets you choose the API, programming language, and SDK. Generated samples carry forward session-specific values such as the endpoint, deployment name, and current settings."
  },
  {
    id: "G08",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Explore models in the playground",
    type: "yesno",
    prompt: "For each statement about generated playground code, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A generated sample can include the project endpoint, deployment name, and current settings.",
      "Generated code is a starting point that should be adapted to the application's requirements.",
      "Generating a sample eliminates the need to secure credentials and test the application."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Playground samples preserve useful configuration and reduce setup effort, but developers still own production design, credential protection, error handling, validation, and testing."
  },
  {
    id: "G09",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "single",
    prompt: "Which endpoint offers the broadest support for OpenAI APIs with Foundry Models?",
    options: [
      "The Azure OpenAI endpoint",
      "The Foundry project endpoint",
      "The Foundry Tools endpoint",
      "The Azure Resource Manager endpoint"
    ],
    correct: "The Azure OpenAI endpoint",
    rationale: "The module's knowledge check identifies the Azure OpenAI endpoint as the endpoint with the broadest OpenAI API support for Foundry Models. The project endpoint is the entry point for project-level Foundry capabilities."
  },
  {
    id: "G10",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "matching",
    prompt: "Match each endpoint to its characteristic format or primary role.",
    items: [
      "Foundry project endpoint",
      "Azure OpenAI endpoint",
      "Project endpoint role",
      "Azure OpenAI endpoint role"
    ],
    options: [
      "https://{resource-name}.services.ai.azure.com/api/projects/{project-name}",
      "https://{resource-name}.openai.azure.com/openai/v1/",
      "Access project configuration, connections, tracing, datasets, indexes, and other Foundry-native operations.",
      "Use OpenAI-compatible model inference APIs with broad OpenAI API support."
    ],
    correct: [
      "https://{resource-name}.services.ai.azure.com/api/projects/{project-name}",
      "https://{resource-name}.openai.azure.com/openai/v1/",
      "Access project configuration, connections, tracing, datasets, indexes, and other Foundry-native operations.",
      "Use OpenAI-compatible model inference APIs with broad OpenAI API support."
    ],
    rationale: "A project exposes both endpoints. Their different host names and paths signal different scopes: Foundry project operations versus OpenAI-compatible inference."
  },
  {
    id: "G11",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "single",
    prompt: "Which Python package provides the Microsoft Foundry SDK's project client?",
    options: [
      "azure-ai-projects",
      "azure-foundry",
      "microsoft-foundry-sdk",
      "azure-ai-chat"
    ],
    correct: "azure-ai-projects",
    rationale: "The Python Foundry SDK project library is installed from the `azure-ai-projects` package. The other package names are plausible but are not the package specified by the module."
  },
  {
    id: "G12",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "multiple",
    prompt: "Which three Python packages does the module install for a Foundry SDK chat application? Select three answers.",
    options: [
      "azure-ai-projects",
      "azure-identity",
      "openai",
      "azure-storage-blob",
      "torch"
    ],
    correct: [
      "azure-ai-projects",
      "azure-identity",
      "openai"
    ],
    selectCount: 3,
    rationale: "`azure-ai-projects` supplies `AIProjectClient`, `azure-identity` supplies Azure credential support, and `openai` supplies the OpenAI-compatible chat client functionality used by the Foundry SDK."
  },
  {
    id: "G13",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "order",
    prompt: "Arrange the core steps for obtaining an OpenAI-compatible client through the Foundry SDK.",
    items: [
      "Call get_openai_client() on the project client.",
      "Use the returned client to submit a model request.",
      "Create DefaultAzureCredential in an authenticated Azure context.",
      "Create AIProjectClient with the project endpoint and credential."
    ],
    correct: [
      "Create DefaultAzureCredential in an authenticated Azure context.",
      "Create AIProjectClient with the project endpoint and credential.",
      "Call get_openai_client() on the project client.",
      "Use the returned client to submit a model request."
    ],
    rationale: "Authentication and the project client must exist before `get_openai_client()` can derive the compatible inference client used for model requests."
  },
  {
    id: "G14",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "matching",
    prompt: "Match each Python object or method to its purpose.",
    items: [
      "AIProjectClient",
      "DefaultAzureCredential",
      "get_openai_client()",
      "OpenAI"
    ],
    options: [
      "Provides programmatic access to Foundry project resources and operations.",
      "Discovers a usable Microsoft Entra credential from supported local or hosted sources.",
      "Returns an OpenAI-compatible client from a configured project client.",
      "Calls OpenAI-compatible inference APIs through a configured base URL and credential."
    ],
    correct: [
      "Provides programmatic access to Foundry project resources and operations.",
      "Discovers a usable Microsoft Entra credential from supported local or hosted sources.",
      "Returns an OpenAI-compatible client from a configured project client.",
      "Calls OpenAI-compatible inference APIs through a configured base URL and credential."
    ],
    rationale: "These objects form distinct layers: Azure identity, Foundry project access, derivation of an inference client, and direct OpenAI-compatible inference."
  },
  {
    id: "G15",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "multiple",
    prompt: "Which four tasks are Foundry-native operations for which AIProjectClient is appropriate? Select four answers.",
    options: [
      "Retrieve project resource connections.",
      "Access project configuration.",
      "Enable tracing.",
      "Manage datasets and indexes.",
      "Generate text by calling AIProjectClient.responses.create() directly.",
      "Automatically retain ChatCompletions message history between requests."
    ],
    correct: [
      "Retrieve project resource connections.",
      "Access project configuration.",
      "Enable tracing.",
      "Manage datasets and indexes."
    ],
    selectCount: 4,
    rationale: "The project client exposes project-scoped assets and platform capabilities, including connections, configuration, tracing, datasets, and indexes. Model inference uses an OpenAI-compatible client, and ChatCompletions history remains the application's responsibility."
  },
  {
    id: "G16",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "single",
    prompt: "Which call obtains an OpenAI-compatible chat client from an existing project_client?",
    options: [
      "project_client.get_openai_client()",
      "project_client.create_model_deployment()",
      "OpenAI.get_project_client()",
      "DefaultAzureCredential.get_chat_completion()"
    ],
    correct: "project_client.get_openai_client()",
    rationale: "`AIProjectClient.get_openai_client()` returns the compatible client used for Responses and chat-completion inference. The other calls do not represent the module's SDK pattern."
  },
  {
    id: "G17",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "yesno",
    prompt: "For each statement about authentication, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Microsoft Entra ID is generally recommended for production applications.",
      "DefaultAzureCredential requires the code to run in a context where an Azure identity can be obtained.",
      "An API key should be embedded directly in source code so the SDK can always find it."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Production should prefer identity-based access. `DefaultAzureCredential` needs an authenticated developer or workload context, while keys must be stored securely rather than committed to code."
  },
  {
    id: "G18",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "single",
    prompt: "Which token scope does the module pass to get_bearer_token_provider for Microsoft Entra authentication?",
    options: [
      "https://ai.azure.com/.default",
      "https://management.azure.com/user_impersonation",
      "https://graph.microsoft.com/.default",
      "https://openai.com/.default"
    ],
    correct: "https://ai.azure.com/.default",
    rationale: "The module's Python examples create a bearer-token provider for the `https://ai.azure.com/.default` scope and pass that provider to the OpenAI-compatible client."
  },
  {
    id: "G19",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "multiple",
    prompt: "Which four requirements strongly favor using the Microsoft Foundry SDK? Select four answers.",
    options: [
      "Build or manage Foundry agents.",
      "Run cloud evaluations.",
      "Enable tracing and observability.",
      "Work with project metadata and connections.",
      "Maximize portability to any OpenAI-compatible platform with no Foundry concepts.",
      "Call only a basic chat-completion endpoint from an existing portable codebase."
    ],
    correct: [
      "Build or manage Foundry agents.",
      "Run cloud evaluations.",
      "Enable tracing and observability.",
      "Work with project metadata and connections."
    ],
    selectCount: 4,
    rationale: "The Foundry SDK is recommended when the application needs project-level capabilities such as agents, tool approvals, evaluations, tracing, connections, governance, or other Foundry-native features."
  },
  {
    id: "G20",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "multiple",
    prompt: "Which four considerations favor using the OpenAI SDK directly? Select four answers.",
    options: [
      "Full compatibility with existing OpenAI API code and tooling.",
      "Portability between OpenAI and Azure OpenAI deployments.",
      "Straightforward use of Responses, ChatCompletions, and Images APIs.",
      "Minimal dependency on Foundry-specific concepts.",
      "A requirement to manage Foundry project datasets and indexes through AIProjectClient.",
      "A requirement to configure Foundry cloud evaluations through project APIs."
    ],
    correct: [
      "Full compatibility with existing OpenAI API code and tooling.",
      "Portability between OpenAI and Azure OpenAI deployments.",
      "Straightforward use of Responses, ChatCompletions, and Images APIs.",
      "Minimal dependency on Foundry-specific concepts."
    ],
    selectCount: 4,
    rationale: "The OpenAI SDK is a strong fit for portable, inference-focused applications. Project-specific asset management and evaluation are reasons to add the Foundry SDK."
  },
  {
    id: "G21",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Choose endpoints, SDKs, and authentication",
    type: "yesno",
    prompt: "For each statement about client selection, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A single application can use the Foundry SDK for project features and the OpenAI SDK for inference.",
      "AzureOpenAI is useful when an application specifically requires a versioned Azure OpenAI API.",
      "Selecting the OpenAI SDK automatically provides Foundry project operations such as cloud evaluations."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "The SDKs can be combined. The versioned `AzureOpenAI` client remains available for specific Azure OpenAI API versions, but direct OpenAI SDK use does not add Foundry project-management features."
  },
  {
    id: "G22",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "single",
    prompt: "Which chat API does the module recommend for most new Microsoft Foundry application development?",
    options: [
      "The Responses API",
      "The ChatCompletions API",
      "The Assistants API",
      "A custom polling API"
    ],
    correct: "The Responses API",
    rationale: "The Responses API is the recommended approach for most new development because it unifies useful chat and assistant patterns and supports stateful, multi-turn response generation."
  },
  {
    id: "G23",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "matching",
    prompt: "Match each Responses API property to the information it contains.",
    items: [
      "output_text",
      "id",
      "status",
      "usage",
      "model"
    ],
    options: [
      "The combined generated text.",
      "The unique response identifier used for retrieval or chaining.",
      "The response state, such as completed.",
      "Input, output, and total token information.",
      "The model used to generate the response."
    ],
    correct: [
      "The combined generated text.",
      "The unique response identifier used for retrieval or chaining.",
      "The response state, such as completed.",
      "Input, output, and total token information.",
      "The model used to generate the response."
    ],
    rationale: "A response object exposes generated text plus operational metadata useful for display, state management, diagnostics, and usage monitoring."
  },
  {
    id: "G24",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "single",
    prompt: "Which method generates a response with the Responses API?",
    options: [
      "openai_client.responses.create()",
      "openai_client.chat.completions.create()",
      "openai_client.responses.retrieve()",
      "openai_client.get_response_id()"
    ],
    correct: "openai_client.responses.create()",
    rationale: "`responses.create()` submits input to a model and creates a new response. `responses.retrieve()` fetches an existing response, and `chat.completions.create()` invokes the older chat-completion pattern."
  },
  {
    id: "G25",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "multiple",
    prompt: "Which four parameters are used in the module's Responses API examples to define or control generation? Select four answers.",
    options: [
      "instructions",
      "input",
      "temperature",
      "max_output_tokens",
      "messages",
      "max_tokens"
    ],
    correct: [
      "instructions",
      "input",
      "temperature",
      "max_output_tokens"
    ],
    selectCount: 4,
    rationale: "`instructions` guides behavior, `input` supplies the user content, `temperature` controls randomness, and `max_output_tokens` limits response length. The `messages` collection belongs to the ChatCompletions pattern, and `max_tokens` is not the Responses parameter shown in this module."
  },
  {
    id: "G26",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "yesno",
    prompt: "For each statement about response-generation controls, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A higher temperature generally makes output more varied.",
      "top_p is an alternative way to control sampling randomness.",
      "max_output_tokens guarantees that the response always contains exactly that many tokens."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Temperature and top-p influence sampling. `max_output_tokens` is an upper bound, not a promise that every response reaches the limit."
  },
  {
    id: "G27",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "order",
    prompt: "Arrange the steps for continuing a Responses API conversation by response ID.",
    items: [
      "Save the new response's id for another turn.",
      "Create the first response from the initial input.",
      "Send the follow-up input with previous_response_id set to the saved id.",
      "Read the first response's id."
    ],
    correct: [
      "Create the first response from the initial input.",
      "Read the first response's id.",
      "Send the follow-up input with previous_response_id set to the saved id.",
      "Save the new response's id for another turn."
    ],
    rationale: "Each turn produces an ID. Passing the preceding ID as `previous_response_id` links the next input to that conversation, after which the application records the new ID."
  },
  {
    id: "G28",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "single",
    prompt: "A follow-up prompt says only, 'Can you give me an example?' Which parameter should link it to the preceding Responses API turn?",
    options: [
      "previous_response_id",
      "max_output_tokens",
      "api_version",
      "deployment_region"
    ],
    correct: "previous_response_id",
    rationale: "`previous_response_id` connects a new response to prior state so references in a follow-up prompt can be interpreted in the established conversational context."
  },
  {
    id: "G29",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "multiple",
    prompt: "Which three requirements can justify manually building and sending Responses API conversation history instead of relying only on previous_response_id? Select three answers.",
    options: [
      "Customize exactly which messages are included in context.",
      "Prune older messages to manage context limits.",
      "Store and restore conversation history from an application database.",
      "Eliminate all token charges for prior context.",
      "Avoid choosing a model deployment."
    ],
    correct: [
      "Customize exactly which messages are included in context.",
      "Prune older messages to manage context limits.",
      "Store and restore conversation history from an application database."
    ],
    selectCount: 3,
    rationale: "Manual history gives the application explicit control over context selection, pruning, and persistence. It does not make context free or remove the need to route requests to a deployment."
  },
  {
    id: "G30",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "yesno",
    prompt: "For each statement about conversation context, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Conversation history, tool schemas, tool outputs, and retrieved documents can all consume the active context window.",
      "Linking turns with previous_response_id automatically makes previous context free to process.",
      "Long-running conversations may require context-selection or pruning strategies."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "All active context is tokenized and processed. The SDK helps manage state, but it does not eliminate token use, so applications must consider context-window and cost growth."
  },
  {
    id: "G31",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "single",
    prompt: "Which method retrieves a previously created response when you know its response ID?",
    options: [
      "openai_client.responses.retrieve(response_id)",
      "openai_client.responses.create(response_id)",
      "openai_client.chat.history(response_id)",
      "project_client.models.restore(response_id)"
    ],
    correct: "openai_client.responses.retrieve(response_id)",
    rationale: "The Responses API retains response history and exposes `responses.retrieve(response_id)` for fetching a specific previous response."
  },
  {
    id: "G32",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "matching",
    prompt: "Match each streaming element to its role.",
    items: [
      "stream=True",
      "response.output_text.delta",
      "event.delta",
      "response.completed"
    ],
    options: [
      "Requests streamed events instead of waiting for one complete response object.",
      "Identifies an event that carries an incremental piece of generated text.",
      "Contains the text fragment to display for a delta event.",
      "Signals completion and exposes the final response, including its id."
    ],
    correct: [
      "Requests streamed events instead of waiting for one complete response object.",
      "Identifies an event that carries an incremental piece of generated text.",
      "Contains the text fragment to display for a delta event.",
      "Signals completion and exposes the final response, including its id."
    ],
    rationale: "Streaming returns a sequence of typed events. Delta events carry displayable fragments, while the completion event provides the final response metadata needed for subsequent stateful turns."
  },
  {
    id: "G33",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "multiple",
    prompt: "Which three statements correctly describe asynchronous Responses API usage? Select three answers.",
    options: [
      "Use AsyncOpenAI and await the API call.",
      "asyncio.gather() can overlap multiple independent requests.",
      "Async streaming consumes events with async iteration.",
      "Wrapping one awaited request in asyncio.run() guarantees that the network call completes faster.",
      "Asynchronous code removes the need for authentication."
    ],
    correct: [
      "Use AsyncOpenAI and await the API call.",
      "asyncio.gather() can overlap multiple independent requests.",
      "Async streaming consumes events with async iteration."
    ],
    selectCount: 3,
    rationale: "Async clients prevent the application thread from blocking and enable useful concurrency. A single awaited request still waits for the same service operation, and authentication remains required."
  },
  {
    id: "G34",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use the Responses API",
    type: "matching",
    prompt: "Match each responsiveness requirement to the most direct implementation technique.",
    items: [
      "Show one long answer incrementally.",
      "Overlap several independent network-bound model calls.",
      "Keep the UI or server free to do other work while awaiting a call.",
      "Continue a streamed conversation after the stream ends."
    ],
    options: [
      "Enable streaming and render text delta events.",
      "Use an async client with concurrent tasks such as asyncio.gather().",
      "Await the model operation in asynchronous application code.",
      "Capture the response id from the response.completed event."
    ],
    correct: [
      "Enable streaming and render text delta events.",
      "Use an async client with concurrent tasks such as asyncio.gather().",
      "Await the model operation in asynchronous application code.",
      "Capture the response id from the response.completed event."
    ],
    rationale: "Streaming improves perceived responsiveness for one response; asynchronous execution prevents blocking; concurrent tasks overlap independent calls; and the completion event supplies state needed for the next turn."
  },
  {
    id: "G35",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Use the ChatCompletions API",
    type: "single",
    prompt: "Which expression returns the generated message text from a ChatCompletions API result in the module's Python examples?",
    options: [
      "completion.choices[0].message.content",
      "completion.output_text",
      "completion.responses[0].delta",
      "completion.message_history.text"
    ],
    correct: "completion.choices[0].message.content",
    rationale: "ChatCompletions returns a `choices` collection. The example reads the first choice's message content, unlike the Responses API's convenient `output_text` property."
  },
  {
    id: "G36",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Use the ChatCompletions API",
    type: "matching",
    prompt: "Match each ChatCompletions message role or collection to its purpose.",
    items: [
      "system role",
      "user role",
      "assistant role",
      "messages collection"
    ],
    options: [
      "Carries behavior, focus, or tone guidance within the submitted message history.",
      "Represents input from the person using the application.",
      "Represents a prior model reply that must be retained for context.",
      "Carries the ordered conversation context submitted on a request."
    ],
    correct: [
      "Carries behavior, focus, or tone guidance within the submitted message history.",
      "Represents input from the person using the application.",
      "Represents a prior model reply that must be retained for context.",
      "Carries the ordered conversation context submitted on a request."
    ],
    rationale: "ChatCompletions models a conversation as ordered role-tagged messages. A system message guides a request because it is included in the submitted history; the user and assistant roles distinguish each conversational turn."
  },
  {
    id: "G37",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Use the ChatCompletions API",
    type: "order",
    prompt: "Arrange the setup and per-turn steps used to preserve context in a ChatCompletions conversation.",
    items: [
      "Append the assistant's returned message to the history.",
      "Submit the complete messages collection.",
      "Append the next user message to the history.",
      "Initialize the history with a system message."
    ],
    correct: [
      "Initialize the history with a system message.",
      "Append the next user message to the history.",
      "Submit the complete messages collection.",
      "Append the assistant's returned message to the history."
    ],
    rationale: "ChatCompletions does not maintain a response chain for the application. The application builds an ordered history, sends it, and records the returned assistant message before the next turn."
  },
  {
    id: "G38",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Use the ChatCompletions API",
    type: "yesno",
    prompt: "For each statement comparing ChatCompletions and Responses, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "ChatCompletions requires the application to track and resubmit prior messages when it needs conversational context.",
      "Responses can link turns by passing a previous response ID.",
      "ChatCompletions is unusable with established cross-platform generative AI code."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Manual message history is central to ChatCompletions, while Responses offers response-ID chaining. ChatCompletions remains useful precisely because it is established across many models and platforms."
  },
  {
    id: "G39",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Use the ChatCompletions API",
    type: "multiple",
    prompt: "Which three scenarios are valid reasons to continue using the ChatCompletions API? Select three answers.",
    options: [
      "Maintain an existing application already built around chat-completion messages.",
      "Preserve compatibility across models or platforms that implement ChatCompletions.",
      "Integrate with established tooling that expects the chat-completion schema.",
      "Obtain automatic previous-response state without storing history.",
      "Gain Foundry project configuration management from the chat API itself."
    ],
    correct: [
      "Maintain an existing application already built around chat-completion messages.",
      "Preserve compatibility across models or platforms that implement ChatCompletions.",
      "Integrate with established tooling that expects the chat-completion schema."
    ],
    selectCount: 3,
    rationale: "Although Responses is recommended for new work, ChatCompletions remains valuable for maintenance, ecosystem compatibility, and portable established integrations. It does not provide automatic response-ID state or project management."
  },
  {
    id: "G40",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Complete the Foundry chat exercise",
    type: "order",
    prompt: "Arrange these major exercise activities in the order in which they are performed.",
    items: [
      "Replace ChatCompletions code with a Responses API call.",
      "Deploy gpt-5.2 in a Microsoft Foundry project.",
      "Add previous-response tracking and then streaming.",
      "Configure the Azure OpenAI endpoint and model deployment name.",
      "Implement and test the initial ChatCompletions call.",
      "Implement and test the asynchronous client."
    ],
    correct: [
      "Deploy gpt-5.2 in a Microsoft Foundry project.",
      "Configure the Azure OpenAI endpoint and model deployment name.",
      "Implement and test the initial ChatCompletions call.",
      "Replace ChatCompletions code with a Responses API call.",
      "Add previous-response tracking and then streaming.",
      "Implement and test the asynchronous client."
    ],
    rationale: "The lab moves from provisioning and configuration to a familiar ChatCompletions baseline, migrates to Responses, then adds state, streaming, and finally an asynchronous implementation."
  },
  {
    id: "G41",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Complete the Foundry chat exercise",
    type: "multiple",
    prompt: "Which four statements accurately describe the exercise's application setup? Select four answers.",
    options: [
      "The .env file stores the Azure OpenAI endpoint and model deployment setting.",
      "requirements.txt lists packages installed into the Python environment.",
      "chat-app.py is used for the synchronous implementation.",
      "chat-async.py is used for the asynchronous implementation.",
      "The application must use the project endpoint instead of the Azure OpenAI endpoint.",
      "The model deployment name can be replaced by the Azure resource-group name."
    ],
    correct: [
      "The .env file stores the Azure OpenAI endpoint and model deployment setting.",
      "requirements.txt lists packages installed into the Python environment.",
      "chat-app.py is used for the synchronous implementation.",
      "chat-async.py is used for the asynchronous implementation."
    ],
    selectCount: 4,
    rationale: "The lab provides separate sync and async source files plus environment and dependency files. It explicitly uses the Azure OpenAI endpoint and the exact model deployment name."
  },
  {
    id: "G42",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Complete the Foundry chat exercise",
    type: "yesno",
    prompt: "For each statement about the exercise, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "The exercise authenticates with Microsoft Entra ID by using DefaultAzureCredential and a bearer-token provider.",
      "Without previous_response_id, the first Responses API version can lose the referent of a follow-up such as 'How does it compare?'.",
      "The streaming version records the response ID when a response.completed event arrives.",
      "Deleting the exercise resource group when it is no longer needed helps avoid unnecessary Azure charges."
    ],
    correct: [
      "Yes",
      "Yes",
      "Yes",
      "Yes"
    ],
    rationale: "These are core lab observations: identity-based authentication, explicit response chaining, completion-event state capture, and responsible cleanup of billable resources."
  },
  {
    id: "CL01",
    sectionId: "case-contoso-learning",
    unit: "Unit 3",
    domain: "Design a Foundry-native chat app",
    type: "matching",
    prompt: "Match each Contoso requirement to the most appropriate component.",
    items: [
      "Inspect project connections and configuration.",
      "Run model inference with the recommended new-development API.",
      "Authenticate the production workload without embedding a secret.",
      "Evaluate and trace behavior through Foundry project capabilities."
    ],
    options: [
      "AIProjectClient through the Foundry project endpoint.",
      "An OpenAI-compatible client using the Responses API.",
      "Microsoft Entra ID with a workload identity and Azure Identity credential.",
      "Foundry SDK project-level evaluation and observability features."
    ],
    correct: [
      "AIProjectClient through the Foundry project endpoint.",
      "An OpenAI-compatible client using the Responses API.",
      "Microsoft Entra ID with a workload identity and Azure Identity credential.",
      "Foundry SDK project-level evaluation and observability features."
    ],
    rationale: "Contoso needs both Foundry-native project operations and model inference. The SDKs can coexist, while Entra identity avoids application secrets in production."
  },
  {
    id: "CL02",
    sectionId: "case-contoso-learning",
    unit: "Unit 4",
    domain: "Build a responsive stateful experience",
    type: "single",
    prompt: "A learner asks, 'Explain reinforcement learning,' and then, 'Give me a simple example.' What should Contoso pass with the second Responses API request?",
    options: [
      "The first response's id as previous_response_id",
      "The first response's total token count as max_output_tokens",
      "The project endpoint as the input value",
      "The first response's status as the model name"
    ],
    correct: "The first response's id as previous_response_id",
    rationale: "Passing the first response ID establishes the preceding turn as context for the ambiguous follow-up. Token usage, endpoint, and status values do not link a conversation."
  },
  {
    id: "CL03",
    sectionId: "case-contoso-learning",
    unit: "Unit 4",
    domain: "Build a responsive stateful experience",
    type: "yesno",
    prompt: "For each proposed Contoso implementation choice, select Yes if it meets the stated requirement. Otherwise, select No.",
    items: [
      "Render response.output_text.delta events so a long explanation appears incrementally.",
      "Capture the final response ID from response.completed so the next learner turn can continue the conversation.",
      "Use one synchronous blocking loop to obtain many independent tutoring responses concurrently."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Streaming deltas improve perceived responsiveness and the completion event supplies state. Independent high-volume requests should use asynchronous concurrency rather than a single blocking sequence."
  },
  {
    id: "CL04",
    sectionId: "case-contoso-learning",
    unit: "Units 3 and 4",
    domain: "Design a Foundry-native chat app",
    type: "multiple",
    prompt: "Which four design choices best satisfy Contoso's complete scenario? Select four answers.",
    options: [
      "Use the Foundry SDK for project operations such as connections, evaluation, and tracing.",
      "Use the Responses API for the new conversational experience.",
      "Use streaming for incremental display of long answers.",
      "Use AsyncOpenAI with concurrent tasks for independent requests.",
      "Hard-code an API key in the tutoring service.",
      "Assume response chaining prevents prior context from consuming tokens."
    ],
    correct: [
      "Use the Foundry SDK for project operations such as connections, evaluation, and tracing.",
      "Use the Responses API for the new conversational experience.",
      "Use streaming for incremental display of long answers.",
      "Use AsyncOpenAI with concurrent tasks for independent requests."
    ],
    selectCount: 4,
    rationale: "The combined design covers project features, the recommended chat API, user-visible responsiveness, and network concurrency. It also preserves secure authentication and realistic token accounting."
  },
  {
    id: "FM01",
    sectionId: "case-fabrikam-migration",
    unit: "Units 3 and 5",
    domain: "Choose a portable inference approach",
    type: "single",
    prompt: "Which initial SDK and API combination best preserves Fabrikam's existing cross-platform code pattern?",
    options: [
      "The OpenAI SDK with the ChatCompletions API",
      "AIProjectClient with only project-dataset operations",
      "The Azure Resource Manager SDK with a deployment template",
      "A custom Foundry Tools client with no model endpoint"
    ],
    correct: "The OpenAI SDK with the ChatCompletions API",
    rationale: "Fabrikam prioritizes compatibility with an established OpenAI-style ChatCompletions codebase. The OpenAI SDK through the Azure OpenAI endpoint requires the smallest conceptual change."
  },
  {
    id: "FM02",
    sectionId: "case-fabrikam-migration",
    unit: "Unit 5",
    domain: "Choose a portable inference approach",
    type: "order",
    prompt: "Arrange the actions Fabrikam's ChatCompletions loop should perform for each new user turn after the history is initialized.",
    items: [
      "Append the returned assistant message to conversation history.",
      "Append the user's new message to conversation history.",
      "Read completion.choices[0].message.content.",
      "Call chat.completions.create() with the complete messages collection."
    ],
    correct: [
      "Append the user's new message to conversation history.",
      "Call chat.completions.create() with the complete messages collection.",
      "Read completion.choices[0].message.content.",
      "Append the returned assistant message to conversation history."
    ],
    rationale: "The application owns ChatCompletions state. It records the user turn, submits all retained context, extracts the response, and records the assistant turn for the next request."
  },
  {
    id: "FM03",
    sectionId: "case-fabrikam-migration",
    unit: "Unit 3",
    domain: "Secure and migrate a chat application",
    type: "yesno",
    prompt: "For each Fabrikam security statement, select Yes if it is true. Otherwise, select No.",
    items: [
      "During the permitted key-based development phase, the key should be read from secure configuration rather than embedded in code.",
      "If an API key must be retained, Azure Key Vault is an appropriate place to protect it.",
      "Moving to Microsoft Entra ID in production removes the need for the workload identity to be authorized."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "Secrets belong in protected configuration such as Key Vault, not source. Entra ID avoids long-lived embedded secrets, but the application identity still needs appropriate authorization to use project assets."
  },
  {
    id: "FM04",
    sectionId: "case-fabrikam-migration",
    unit: "Units 2, 3, and 5",
    domain: "Secure and migrate a chat application",
    type: "multiple",
    prompt: "Which four actions form a sound migration and validation approach for Fabrikam? Select four answers.",
    options: [
      "Test representative prompts and settings in the model playground.",
      "Generate an OpenAI SDK and ChatCompletions code sample as a starting point.",
      "Configure the Azure OpenAI endpoint and exact deployment name outside source code.",
      "Preserve ordered system, user, and assistant messages when context is required.",
      "Replace the endpoint with the Azure resource-group name.",
      "Discard all testing because generated playground code is production-ready by definition."
    ],
    correct: [
      "Test representative prompts and settings in the model playground.",
      "Generate an OpenAI SDK and ChatCompletions code sample as a starting point.",
      "Configure the Azure OpenAI endpoint and exact deployment name outside source code.",
      "Preserve ordered system, user, and assistant messages when context is required."
    ],
    selectCount: 4,
    rationale: "This sequence uses the playground for evidence, selects a compatible sample, externalizes connection values, and retains the explicit history required by ChatCompletions. Generated code still requires adaptation and testing."
  }
];
