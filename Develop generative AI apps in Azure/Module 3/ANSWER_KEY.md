# Module 3 Answer Key

**Develop generative AI apps in Azure — Module 3: Develop a generative AI chat app with Microsoft Foundry**

Answer key for the practice assessment in [index.html](index.html). Generated from the question
bank in [questions.js](questions.js), which is the authoritative source — regenerate this file if
the bank changes.

| | |
| --- | --- |
| Questions | 50 |
| Total points | 151 |
| Sections | 3 |
| Time limit | 120 minutes |

> **Answers are recorded as text, not letters.** The assessment shuffles answer options, statement
> rows, and initial build-list items on every attempt, so "A" or "the third option" means nothing
> here. Match on the wording instead.

Partial credit applies: multiple-choice, Yes/No, matching, and build-list questions score one point
per correct selection, row, or correctly placed item.

## Quick reference

| # | ID | Unit | Type | Pts | Answer |
| --- | --- | --- | --- | --- | --- |
| 1 | G01 | Unit 1 | Single choice | 1 | Choose an appropriate endpoint, SDK, authentication method, and chat API for the application. |
| 2 | G02 | Unit 1 | Build list | 4 | 1) Deploy gpt-5.2 in a Microsoft Foundry project. → 2) Configure the starter app with the Azure OpenAI endpoint and model deployment name. → 3) Implement and test the initial ChatCompletions request. → 4) Replace ChatCompletions with Responses, then add state, streaming, and asynchronous behavior. |
| 3 | G03 | Unit 1 | Yes / No | 3 | Yes, No, Yes |
| 4 | G04 | Unit 2 | Single choice | 1 | To test model behavior and settings interactively before committing to an implementation. |
| 5 | G05 | Unit 2 | Multiple choice | 4 | Send prompts to deployed models and inspect responses.; Adjust settings such as temperature and maximum tokens.; Add system messages that guide model behavior.; Experiment with different deployed models and configurations. |
| 6 | G06 | Unit 2 | Build list | 4 | 1) Explore prompts and settings in the playground. → 2) Generate an SDK code sample. → 3) Develop and customize the application. → 4) Iterate and refine the experience. |
| 7 | G07 | Unit 2 | Matching | 4 | 1) Selects Responses, ChatCompletions, or another supported API pattern.; 2) Selects the programming language used by the sample.; 3) Selects the client library demonstrated by the sample.; 4) Routes inference to the model deployment tested in the playground. |
| 8 | G08 | Unit 2 | Yes / No | 3 | Yes, Yes, No |
| 9 | G09 | Unit 3 | Single choice | 1 | The Azure OpenAI endpoint |
| 10 | G10 | Unit 3 | Matching | 4 | 1) `https://{resource-name}.services.ai.azure.com/api/projects/{project-name}`; 2) `https://{resource-name}.openai.azure.com/openai/v1/`; 3) Access project configuration, connections, tracing, datasets, indexes, and other Foundry-native operations.; 4) Use OpenAI-compatible model inference APIs with broad OpenAI API support. |
| 11 | G11 | Unit 3 | Single choice | 1 | azure-ai-projects |
| 12 | G12 | Unit 3 | Multiple choice | 3 | azure-ai-projects; azure-identity; openai |
| 13 | G13 | Unit 3 | Build list | 4 | 1) Create DefaultAzureCredential in an authenticated Azure context. → 2) Create AIProjectClient with the project endpoint and credential. → 3) Call get_openai_client() on the project client. → 4) Use the returned client to submit a model request. |
| 14 | G14 | Unit 3 | Matching | 4 | 1) Provides programmatic access to Foundry project resources and operations.; 2) Discovers a usable Microsoft Entra credential from supported local or hosted sources.; 3) Returns an OpenAI-compatible client from a configured project client.; 4) Calls OpenAI-compatible inference APIs through a configured base URL and credential. |
| 15 | G15 | Unit 3 | Multiple choice | 4 | Retrieve project resource connections.; Access project configuration.; Enable tracing.; Manage datasets and indexes. |
| 16 | G16 | Unit 3 | Single choice | 1 | project_client.get_openai_client() |
| 17 | G17 | Unit 3 | Yes / No | 3 | Yes, Yes, No |
| 18 | G18 | Unit 3 | Single choice | 1 | https://ai.azure.com/.default |
| 19 | G19 | Unit 3 | Multiple choice | 4 | Build or manage Foundry agents.; Run cloud evaluations.; Enable tracing and observability.; Work with project metadata and connections. |
| 20 | G20 | Unit 3 | Multiple choice | 4 | Full compatibility with existing OpenAI API code and tooling.; Portability between OpenAI and Azure OpenAI deployments.; Straightforward use of Responses, ChatCompletions, and Images APIs.; Minimal dependency on Foundry-specific concepts. |
| 21 | G21 | Unit 3 | Yes / No | 3 | Yes, Yes, No |
| 22 | G22 | Unit 4 | Single choice | 1 | The Responses API |
| 23 | G23 | Unit 4 | Matching | 5 | 1) The combined generated text.; 2) The unique response identifier used for retrieval or chaining.; 3) The response state, such as completed.; 4) Input, output, and total token information.; 5) The model used to generate the response. |
| 24 | G24 | Unit 4 | Single choice | 1 | openai_client.responses.create() |
| 25 | G25 | Unit 4 | Multiple choice | 4 | instructions; input; temperature; max_output_tokens |
| 26 | G26 | Unit 4 | Yes / No | 3 | Yes, Yes, No |
| 27 | G27 | Unit 4 | Build list | 4 | 1) Create the first response from the initial input. → 2) Read the first response's id. → 3) Send the follow-up input with previous_response_id set to the saved id. → 4) Save the new response's id for another turn. |
| 28 | G28 | Unit 4 | Single choice | 1 | previous_response_id |
| 29 | G29 | Unit 4 | Multiple choice | 3 | Customize exactly which messages are included in context.; Prune older messages to manage context limits.; Store and restore conversation history from an application database. |
| 30 | G30 | Unit 4 | Yes / No | 3 | Yes, No, Yes |
| 31 | G31 | Unit 4 | Single choice | 1 | openai_client.responses.retrieve(response_id) |
| 32 | G32 | Unit 4 | Matching | 4 | 1) Requests streamed events instead of waiting for one complete response object.; 2) Identifies an event that carries an incremental piece of generated text.; 3) Contains the text fragment to display for a delta event.; 4) Signals completion and exposes the final response, including its id. |
| 33 | G33 | Unit 4 | Multiple choice | 3 | Use AsyncOpenAI and await the API call.; asyncio.gather() can overlap multiple independent requests.; Async streaming consumes events with async iteration. |
| 34 | G34 | Unit 4 | Matching | 4 | 1) Enable streaming and render text delta events.; 2) Use an async client with concurrent tasks such as asyncio.gather().; 3) Await the model operation in asynchronous application code.; 4) Capture the response id from the response.completed event. |
| 35 | G35 | Unit 5 | Single choice | 1 | completion.choices[0].message.content |
| 36 | G36 | Unit 5 | Matching | 4 | 1) Carries behavior, focus, or tone guidance within the submitted message history.; 2) Represents input from the person using the application.; 3) Represents a prior model reply that must be retained for context.; 4) Carries the ordered conversation context submitted on a request. |
| 37 | G37 | Unit 5 | Build list | 4 | 1) Initialize the history with a system message. → 2) Append the next user message to the history. → 3) Submit the complete messages collection. → 4) Append the assistant's returned message to the history. |
| 38 | G38 | Unit 5 | Yes / No | 3 | Yes, Yes, No |
| 39 | G39 | Unit 5 | Multiple choice | 3 | Maintain an existing application already built around chat-completion messages.; Preserve compatibility across models or platforms that implement ChatCompletions.; Integrate with established tooling that expects the chat-completion schema. |
| 40 | G40 | Unit 6 | Build list | 6 | 1) Deploy gpt-5.2 in a Microsoft Foundry project. → 2) Configure the Azure OpenAI endpoint and model deployment name. → 3) Implement and test the initial ChatCompletions call. → 4) Replace ChatCompletions code with a Responses API call. → 5) Add previous-response tracking and then streaming. → 6) Implement and test the asynchronous client. |
| 41 | G41 | Unit 6 | Multiple choice | 4 | The .env file stores the Azure OpenAI endpoint and model deployment setting.; requirements.txt lists packages installed into the Python environment.; chat-app.py is used for the synchronous implementation.; chat-async.py is used for the asynchronous implementation. |
| 42 | G42 | Unit 6 | Yes / No | 4 | Yes, Yes, Yes, Yes |
| 43 | CL01 | Unit 3 | Matching | 4 | 1) AIProjectClient through the Foundry project endpoint.; 2) An OpenAI-compatible client using the Responses API.; 3) Microsoft Entra ID with a workload identity and Azure Identity credential.; 4) Foundry SDK project-level evaluation and observability features. |
| 44 | CL02 | Unit 4 | Single choice | 1 | The first response's id as previous_response_id |
| 45 | CL03 | Unit 4 | Yes / No | 3 | Yes, Yes, No |
| 46 | CL04 | Units 3 and 4 | Multiple choice | 4 | Use the Foundry SDK for project operations such as connections, evaluation, and tracing.; Use the Responses API for the new conversational experience.; Use streaming for incremental display of long answers.; Use AsyncOpenAI with concurrent tasks for independent requests. |
| 47 | FM01 | Units 3 and 5 | Single choice | 1 | The OpenAI SDK with the ChatCompletions API |
| 48 | FM02 | Unit 5 | Build list | 4 | 1) Append the user's new message to conversation history. → 2) Call chat.completions.create() with the complete messages collection. → 3) Read completion.choices[0].message.content. → 4) Append the returned assistant message to conversation history. |
| 49 | FM03 | Unit 3 | Yes / No | 3 | Yes, Yes, No |
| 50 | FM04 | Units 2, 3, and 5 | Multiple choice | 4 | Test representative prompts and settings in the model playground.; Generate an OpenAI SDK and ChatCompletions code sample as a starting point.; Configure the Azure OpenAI endpoint and exact deployment name outside source code.; Preserve ordered system, user, and assistant messages when context is required. |

## General Questions

*42 questions · 127 points*

### 1. G01 — Unit 1

*Single choice · Plan a Foundry chat application · 1 point*

What is the central development decision emphasized at the start of this module?

**Answer:** Choose an appropriate endpoint, SDK, authentication method, and chat API for the application.

**Rationale.** The module focuses on the choices needed to connect a client application to Foundry assets: endpoint, client SDK, authentication, and either the Responses or ChatCompletions API. Model training and agent creation are separate concerns.

### 2. G02 — Unit 1

*Build list · Plan a Foundry chat application · 4 points*

Arrange these high-level stages in the order used by the module's documented hands-on exercise.

**Answer** (correct sequence):

1. Deploy gpt-5.2 in a Microsoft Foundry project.
2. Configure the starter app with the Azure OpenAI endpoint and model deployment name.
3. Implement and test the initial ChatCompletions request.
4. Replace ChatCompletions with Responses, then add state, streaming, and asynchronous behavior.

**Rationale.** The documented exercise first deploys gpt-5.2 and configures the starter app with the Azure OpenAI endpoint and exact deployment name. It establishes a ChatCompletions baseline before moving to Responses and progressively adding response-ID state, streaming, and asynchronous behavior.

### 3. G03 — Unit 1

*Yes / No · Plan a Foundry chat application · 3 points*

For each statement about the module's scope, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A Foundry chat application can combine Azure services with software frameworks. | **Yes** |
| Every Foundry feature described in the module is guaranteed to remain unchanged. | **No** |
| The module covers both the Responses API and the ChatCompletions API. | **Yes** |

**Rationale.** Foundry development combines services and frameworks, and the module compares both chat APIs. It also cautions that some Foundry features are in preview and can change.

### 4. G04 — Unit 2

*Single choice · Explore models in the playground · 1 point*

Why should a developer use the model playground before writing client code?

**Answer:** To test model behavior and settings interactively before committing to an implementation.

**Rationale.** The playground is a no-code environment for trying prompts, system instructions, models, and generation settings. It accelerates prototyping but does not replace deployment, authentication, or application testing.

### 5. G05 — Unit 2

*Multiple choice · Explore models in the playground · 4 points*

Which four actions can you perform in the Foundry model playground? Select four answers.

**Answer** (select 4):

- Send prompts to deployed models and inspect responses.
- Adjust settings such as temperature and maximum tokens.
- Add system messages that guide model behavior.
- Experiment with different deployed models and configurations.

**Rationale.** The playground supports interactive inference and configuration experiments. Model fine-tuning and Azure RBAC assignment are separate Foundry and Azure workflows, not actions performed in the playground chat pane.

### 6. G06 — Unit 2

*Build list · Explore models in the playground · 4 points*

Arrange the playground-to-code workflow presented in the module.

**Answer** (correct sequence):

1. Explore prompts and settings in the playground.
2. Generate an SDK code sample.
3. Develop and customize the application.
4. Iterate and refine the experience.

**Rationale.** The recommended workflow prototypes behavior first, turns the configured session into starter code, customizes that code, and then loops back through testing and refinement.

### 7. G07 — Unit 2

*Matching · Explore models in the playground · 4 points*

Match each Code-pane choice or generated value to what it determines.

**Answer:**

| Item | Correct match |
| --- | --- |
| API choice | Selects Responses, ChatCompletions, or another supported API pattern. |
| Language choice | Selects the programming language used by the sample. |
| SDK choice | Selects the client library demonstrated by the sample. |
| Pre-populated model deployment name | Routes inference to the model deployment tested in the playground. |

**Rationale.** The Code pane lets you choose the API, programming language, and SDK. Generated samples carry forward session-specific values such as the endpoint, deployment name, and current settings.

### 8. G08 — Unit 2

*Yes / No · Explore models in the playground · 3 points*

For each statement about generated playground code, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A generated sample can include the project endpoint, deployment name, and current settings. | **Yes** |
| Generated code is a starting point that should be adapted to the application's requirements. | **Yes** |
| Generating a sample eliminates the need to secure credentials and test the application. | **No** |

**Rationale.** Playground samples preserve useful configuration and reduce setup effort, but developers still own production design, credential protection, error handling, validation, and testing.

### 9. G09 — Unit 3

*Single choice · Choose endpoints, SDKs, and authentication · 1 point*

Which endpoint offers the broadest support for OpenAI APIs with Foundry Models?

**Answer:** The Azure OpenAI endpoint

**Rationale.** The module's knowledge check identifies the Azure OpenAI endpoint as the endpoint with the broadest OpenAI API support for Foundry Models. The project endpoint is the entry point for project-level Foundry capabilities.

### 10. G10 — Unit 3

*Matching · Choose endpoints, SDKs, and authentication · 4 points*

Match each endpoint to its characteristic format or primary role.

**Answer:**

| Item | Correct match |
| --- | --- |
| Foundry project endpoint | `https://{resource-name}.services.ai.azure.com/api/projects/{project-name}` |
| Azure OpenAI endpoint | `https://{resource-name}.openai.azure.com/openai/v1/` |
| Project endpoint role | Access project configuration, connections, tracing, datasets, indexes, and other Foundry-native operations. |
| Azure OpenAI endpoint role | Use OpenAI-compatible model inference APIs with broad OpenAI API support. |

**Rationale.** A project exposes both endpoints. Their different host names and paths signal different scopes: Foundry project operations versus OpenAI-compatible inference.

### 11. G11 — Unit 3

*Single choice · Choose endpoints, SDKs, and authentication · 1 point*

Which Python package provides the Microsoft Foundry SDK's project client?

**Answer:** azure-ai-projects

**Rationale.** The Python Foundry SDK project library is installed from the `azure-ai-projects` package. The other package names are plausible but are not the package specified by the module.

### 12. G12 — Unit 3

*Multiple choice · Choose endpoints, SDKs, and authentication · 3 points*

Which three Python packages does the module install for a Foundry SDK chat application? Select three answers.

**Answer** (select 3):

- azure-ai-projects
- azure-identity
- openai

**Rationale.** `azure-ai-projects` supplies `AIProjectClient`, `azure-identity` supplies Azure credential support, and `openai` supplies the OpenAI-compatible chat client functionality used by the Foundry SDK.

### 13. G13 — Unit 3

*Build list · Choose endpoints, SDKs, and authentication · 4 points*

Arrange the core steps for obtaining an OpenAI-compatible client through the Foundry SDK.

**Answer** (correct sequence):

1. Create DefaultAzureCredential in an authenticated Azure context.
2. Create AIProjectClient with the project endpoint and credential.
3. Call get_openai_client() on the project client.
4. Use the returned client to submit a model request.

**Rationale.** Authentication and the project client must exist before `get_openai_client()` can derive the compatible inference client used for model requests.

### 14. G14 — Unit 3

*Matching · Choose endpoints, SDKs, and authentication · 4 points*

Match each Python object or method to its purpose.

**Answer:**

| Item | Correct match |
| --- | --- |
| AIProjectClient | Provides programmatic access to Foundry project resources and operations. |
| DefaultAzureCredential | Discovers a usable Microsoft Entra credential from supported local or hosted sources. |
| get_openai_client() | Returns an OpenAI-compatible client from a configured project client. |
| OpenAI | Calls OpenAI-compatible inference APIs through a configured base URL and credential. |

**Rationale.** These objects form distinct layers: Azure identity, Foundry project access, derivation of an inference client, and direct OpenAI-compatible inference.

### 15. G15 — Unit 3

*Multiple choice · Choose endpoints, SDKs, and authentication · 4 points*

Which four tasks are Foundry-native operations for which AIProjectClient is appropriate? Select four answers.

**Answer** (select 4):

- Retrieve project resource connections.
- Access project configuration.
- Enable tracing.
- Manage datasets and indexes.

**Rationale.** The project client exposes project-scoped assets and platform capabilities, including connections, configuration, tracing, datasets, and indexes. Model inference uses an OpenAI-compatible client, and ChatCompletions history remains the application's responsibility.

### 16. G16 — Unit 3

*Single choice · Choose endpoints, SDKs, and authentication · 1 point*

Which call obtains an OpenAI-compatible chat client from an existing project_client?

**Answer:** project_client.get_openai_client()

**Rationale.** `AIProjectClient.get_openai_client()` returns the compatible client used for Responses and chat-completion inference. The other calls do not represent the module's SDK pattern.

### 17. G17 — Unit 3

*Yes / No · Choose endpoints, SDKs, and authentication · 3 points*

For each statement about authentication, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Microsoft Entra ID is generally recommended for production applications. | **Yes** |
| DefaultAzureCredential requires the code to run in a context where an Azure identity can be obtained. | **Yes** |
| An API key should be embedded directly in source code so the SDK can always find it. | **No** |

**Rationale.** Production should prefer identity-based access. `DefaultAzureCredential` needs an authenticated developer or workload context, while keys must be stored securely rather than committed to code.

### 18. G18 — Unit 3

*Single choice · Choose endpoints, SDKs, and authentication · 1 point*

Which token scope does the module pass to get_bearer_token_provider for Microsoft Entra authentication?

**Answer:** https://ai.azure.com/.default

**Rationale.** The module's Python examples create a bearer-token provider for the `https://ai.azure.com/.default` scope and pass that provider to the OpenAI-compatible client.

### 19. G19 — Unit 3

*Multiple choice · Choose endpoints, SDKs, and authentication · 4 points*

Which four requirements strongly favor using the Microsoft Foundry SDK? Select four answers.

**Answer** (select 4):

- Build or manage Foundry agents.
- Run cloud evaluations.
- Enable tracing and observability.
- Work with project metadata and connections.

**Rationale.** The Foundry SDK is recommended when the application needs project-level capabilities such as agents, tool approvals, evaluations, tracing, connections, governance, or other Foundry-native features.

### 20. G20 — Unit 3

*Multiple choice · Choose endpoints, SDKs, and authentication · 4 points*

Which four considerations favor using the OpenAI SDK directly? Select four answers.

**Answer** (select 4):

- Full compatibility with existing OpenAI API code and tooling.
- Portability between OpenAI and Azure OpenAI deployments.
- Straightforward use of Responses, ChatCompletions, and Images APIs.
- Minimal dependency on Foundry-specific concepts.

**Rationale.** The OpenAI SDK is a strong fit for portable, inference-focused applications. Project-specific asset management and evaluation are reasons to add the Foundry SDK.

### 21. G21 — Unit 3

*Yes / No · Choose endpoints, SDKs, and authentication · 3 points*

For each statement about client selection, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A single application can use the Foundry SDK for project features and the OpenAI SDK for inference. | **Yes** |
| AzureOpenAI is useful when an application specifically requires a versioned Azure OpenAI API. | **Yes** |
| Selecting the OpenAI SDK automatically provides Foundry project operations such as cloud evaluations. | **No** |

**Rationale.** The SDKs can be combined. The versioned `AzureOpenAI` client remains available for specific Azure OpenAI API versions, but direct OpenAI SDK use does not add Foundry project-management features.

### 22. G22 — Unit 4

*Single choice · Use the Responses API · 1 point*

Which chat API does the module recommend for most new Microsoft Foundry application development?

**Answer:** The Responses API

**Rationale.** The Responses API is the recommended approach for most new development because it unifies useful chat and assistant patterns and supports stateful, multi-turn response generation.

### 23. G23 — Unit 4

*Matching · Use the Responses API · 5 points*

Match each Responses API property to the information it contains.

**Answer:**

| Item | Correct match |
| --- | --- |
| output_text | The combined generated text. |
| id | The unique response identifier used for retrieval or chaining. |
| status | The response state, such as completed. |
| usage | Input, output, and total token information. |
| model | The model used to generate the response. |

**Rationale.** A response object exposes generated text plus operational metadata useful for display, state management, diagnostics, and usage monitoring.

### 24. G24 — Unit 4

*Single choice · Use the Responses API · 1 point*

Which method generates a response with the Responses API?

**Answer:** openai_client.responses.create()

**Rationale.** `responses.create()` submits input to a model and creates a new response. `responses.retrieve()` fetches an existing response, and `chat.completions.create()` invokes the older chat-completion pattern.

### 25. G25 — Unit 4

*Multiple choice · Use the Responses API · 4 points*

Which four parameters are used in the module's Responses API examples to define or control generation? Select four answers.

**Answer** (select 4):

- instructions
- input
- temperature
- max_output_tokens

**Rationale.** `instructions` guides behavior, `input` supplies the user content, `temperature` controls randomness, and `max_output_tokens` limits response length. The `messages` collection belongs to the ChatCompletions pattern, and `max_tokens` is not the Responses parameter shown in this module.

### 26. G26 — Unit 4

*Yes / No · Use the Responses API · 3 points*

For each statement about response-generation controls, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A higher temperature generally makes output more varied. | **Yes** |
| top_p is an alternative way to control sampling randomness. | **Yes** |
| max_output_tokens guarantees that the response always contains exactly that many tokens. | **No** |

**Rationale.** Temperature and top-p influence sampling. `max_output_tokens` is an upper bound, not a promise that every response reaches the limit.

### 27. G27 — Unit 4

*Build list · Use the Responses API · 4 points*

Arrange the steps for continuing a Responses API conversation by response ID.

**Answer** (correct sequence):

1. Create the first response from the initial input.
2. Read the first response's id.
3. Send the follow-up input with previous_response_id set to the saved id.
4. Save the new response's id for another turn.

**Rationale.** Each turn produces an ID. Passing the preceding ID as `previous_response_id` links the next input to that conversation, after which the application records the new ID.

### 28. G28 — Unit 4

*Single choice · Use the Responses API · 1 point*

A follow-up prompt says only, 'Can you give me an example?' Which parameter should link it to the preceding Responses API turn?

**Answer:** previous_response_id

**Rationale.** `previous_response_id` connects a new response to prior state so references in a follow-up prompt can be interpreted in the established conversational context.

### 29. G29 — Unit 4

*Multiple choice · Use the Responses API · 3 points*

Which three requirements can justify manually building and sending Responses API conversation history instead of relying only on previous_response_id? Select three answers.

**Answer** (select 3):

- Customize exactly which messages are included in context.
- Prune older messages to manage context limits.
- Store and restore conversation history from an application database.

**Rationale.** Manual history gives the application explicit control over context selection, pruning, and persistence. It does not make context free or remove the need to route requests to a deployment.

### 30. G30 — Unit 4

*Yes / No · Use the Responses API · 3 points*

For each statement about conversation context, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Conversation history, tool schemas, tool outputs, and retrieved documents can all consume the active context window. | **Yes** |
| Linking turns with previous_response_id automatically makes previous context free to process. | **No** |
| Long-running conversations may require context-selection or pruning strategies. | **Yes** |

**Rationale.** All active context is tokenized and processed. The SDK helps manage state, but it does not eliminate token use, so applications must consider context-window and cost growth.

### 31. G31 — Unit 4

*Single choice · Use the Responses API · 1 point*

Which method retrieves a previously created response when you know its response ID?

**Answer:** openai_client.responses.retrieve(response_id)

**Rationale.** The Responses API retains response history and exposes `responses.retrieve(response_id)` for fetching a specific previous response.

### 32. G32 — Unit 4

*Matching · Use the Responses API · 4 points*

Match each streaming element to its role.

**Answer:**

| Item | Correct match |
| --- | --- |
| stream=True | Requests streamed events instead of waiting for one complete response object. |
| response.output_text.delta | Identifies an event that carries an incremental piece of generated text. |
| event.delta | Contains the text fragment to display for a delta event. |
| response.completed | Signals completion and exposes the final response, including its id. |

**Rationale.** Streaming returns a sequence of typed events. Delta events carry displayable fragments, while the completion event provides the final response metadata needed for subsequent stateful turns.

### 33. G33 — Unit 4

*Multiple choice · Use the Responses API · 3 points*

Which three statements correctly describe asynchronous Responses API usage? Select three answers.

**Answer** (select 3):

- Use AsyncOpenAI and await the API call.
- asyncio.gather() can overlap multiple independent requests.
- Async streaming consumes events with async iteration.

**Rationale.** Async clients prevent the application thread from blocking and enable useful concurrency. A single awaited request still waits for the same service operation, and authentication remains required.

### 34. G34 — Unit 4

*Matching · Use the Responses API · 4 points*

Match each responsiveness requirement to the most direct implementation technique.

**Answer:**

| Item | Correct match |
| --- | --- |
| Show one long answer incrementally. | Enable streaming and render text delta events. |
| Overlap several independent network-bound model calls. | Use an async client with concurrent tasks such as asyncio.gather(). |
| Keep the UI or server free to do other work while awaiting a call. | Await the model operation in asynchronous application code. |
| Continue a streamed conversation after the stream ends. | Capture the response id from the response.completed event. |

**Rationale.** Streaming improves perceived responsiveness for one response; asynchronous execution prevents blocking; concurrent tasks overlap independent calls; and the completion event supplies state needed for the next turn.

### 35. G35 — Unit 5

*Single choice · Use the ChatCompletions API · 1 point*

Which expression returns the generated message text from a ChatCompletions API result in the module's Python examples?

**Answer:** completion.choices[0].message.content

**Rationale.** ChatCompletions returns a `choices` collection. The example reads the first choice's message content, unlike the Responses API's convenient `output_text` property.

### 36. G36 — Unit 5

*Matching · Use the ChatCompletions API · 4 points*

Match each ChatCompletions message role or collection to its purpose.

**Answer:**

| Item | Correct match |
| --- | --- |
| system role | Carries behavior, focus, or tone guidance within the submitted message history. |
| user role | Represents input from the person using the application. |
| assistant role | Represents a prior model reply that must be retained for context. |
| messages collection | Carries the ordered conversation context submitted on a request. |

**Rationale.** ChatCompletions models a conversation as ordered role-tagged messages. A system message guides a request because it is included in the submitted history; the user and assistant roles distinguish each conversational turn.

### 37. G37 — Unit 5

*Build list · Use the ChatCompletions API · 4 points*

Arrange the setup and per-turn steps used to preserve context in a ChatCompletions conversation.

**Answer** (correct sequence):

1. Initialize the history with a system message.
2. Append the next user message to the history.
3. Submit the complete messages collection.
4. Append the assistant's returned message to the history.

**Rationale.** ChatCompletions does not maintain a response chain for the application. The application builds an ordered history, sends it, and records the returned assistant message before the next turn.

### 38. G38 — Unit 5

*Yes / No · Use the ChatCompletions API · 3 points*

For each statement comparing ChatCompletions and Responses, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| ChatCompletions requires the application to track and resubmit prior messages when it needs conversational context. | **Yes** |
| Responses can link turns by passing a previous response ID. | **Yes** |
| ChatCompletions is unusable with established cross-platform generative AI code. | **No** |

**Rationale.** Manual message history is central to ChatCompletions, while Responses offers response-ID chaining. ChatCompletions remains useful precisely because it is established across many models and platforms.

### 39. G39 — Unit 5

*Multiple choice · Use the ChatCompletions API · 3 points*

Which three scenarios are valid reasons to continue using the ChatCompletions API? Select three answers.

**Answer** (select 3):

- Maintain an existing application already built around chat-completion messages.
- Preserve compatibility across models or platforms that implement ChatCompletions.
- Integrate with established tooling that expects the chat-completion schema.

**Rationale.** Although Responses is recommended for new work, ChatCompletions remains valuable for maintenance, ecosystem compatibility, and portable established integrations. It does not provide automatic response-ID state or project management.

### 40. G40 — Unit 6

*Build list · Complete the Foundry chat exercise · 6 points*

Arrange these major exercise activities in the order in which they are performed.

**Answer** (correct sequence):

1. Deploy gpt-5.2 in a Microsoft Foundry project.
2. Configure the Azure OpenAI endpoint and model deployment name.
3. Implement and test the initial ChatCompletions call.
4. Replace ChatCompletions code with a Responses API call.
5. Add previous-response tracking and then streaming.
6. Implement and test the asynchronous client.

**Rationale.** The lab moves from provisioning and configuration to a familiar ChatCompletions baseline, migrates to Responses, then adds state, streaming, and finally an asynchronous implementation.

### 41. G41 — Unit 6

*Multiple choice · Complete the Foundry chat exercise · 4 points*

Which four statements accurately describe the exercise's application setup? Select four answers.

**Answer** (select 4):

- The .env file stores the Azure OpenAI endpoint and model deployment setting.
- requirements.txt lists packages installed into the Python environment.
- chat-app.py is used for the synchronous implementation.
- chat-async.py is used for the asynchronous implementation.

**Rationale.** The lab provides separate sync and async source files plus environment and dependency files. It explicitly uses the Azure OpenAI endpoint and the exact model deployment name.

### 42. G42 — Unit 6

*Yes / No · Complete the Foundry chat exercise · 4 points*

For each statement about the exercise, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| The exercise authenticates with Microsoft Entra ID by using DefaultAzureCredential and a bearer-token provider. | **Yes** |
| Without previous_response_id, the first Responses API version can lose the referent of a follow-up such as 'How does it compare?'. | **Yes** |
| The streaming version records the response ID when a response.completed event arrives. | **Yes** |
| Deleting the exercise resource group when it is no longer needed helps avoid unnecessary Azure charges. | **Yes** |

**Rationale.** These are core lab observations: identity-based authentication, explicit response chaining, completion-event state capture, and responsible cleanup of billable resources.


## Case Study 1 — Contoso Learning

*4 questions · 12 points*

**Scenario.** Contoso Learning is building a new tutoring assistant in a Microsoft Foundry project. The application must inspect project connections and configuration, use cloud evaluation and tracing, and call a deployed model. Production authentication must use Microsoft Entra ID. Learners ask follow-up questions, so the app must preserve conversational context. Long explanations should appear incrementally, and the service must handle many independent tutoring requests concurrently without blocking while each network call completes.

### 43. CL01 — Unit 3

*Matching · Design a Foundry-native chat app · 4 points*

Match each Contoso requirement to the most appropriate component.

**Answer:**

| Item | Correct match |
| --- | --- |
| Inspect project connections and configuration. | AIProjectClient through the Foundry project endpoint. |
| Run model inference with the recommended new-development API. | An OpenAI-compatible client using the Responses API. |
| Authenticate the production workload without embedding a secret. | Microsoft Entra ID with a workload identity and Azure Identity credential. |
| Evaluate and trace behavior through Foundry project capabilities. | Foundry SDK project-level evaluation and observability features. |

**Rationale.** Contoso needs both Foundry-native project operations and model inference. The SDKs can coexist, while Entra identity avoids application secrets in production.

### 44. CL02 — Unit 4

*Single choice · Build a responsive stateful experience · 1 point*

A learner asks, 'Explain reinforcement learning,' and then, 'Give me a simple example.' What should Contoso pass with the second Responses API request?

**Answer:** The first response's id as previous_response_id

**Rationale.** Passing the first response ID establishes the preceding turn as context for the ambiguous follow-up. Token usage, endpoint, and status values do not link a conversation.

### 45. CL03 — Unit 4

*Yes / No · Build a responsive stateful experience · 3 points*

For each proposed Contoso implementation choice, select Yes if it meets the stated requirement. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Render response.output_text.delta events so a long explanation appears incrementally. | **Yes** |
| Capture the final response ID from response.completed so the next learner turn can continue the conversation. | **Yes** |
| Use one synchronous blocking loop to obtain many independent tutoring responses concurrently. | **No** |

**Rationale.** Streaming deltas improve perceived responsiveness and the completion event supplies state. Independent high-volume requests should use asynchronous concurrency rather than a single blocking sequence.

### 46. CL04 — Units 3 and 4

*Multiple choice · Design a Foundry-native chat app · 4 points*

Which four design choices best satisfy Contoso's complete scenario? Select four answers.

**Answer** (select 4):

- Use the Foundry SDK for project operations such as connections, evaluation, and tracing.
- Use the Responses API for the new conversational experience.
- Use streaming for incremental display of long answers.
- Use AsyncOpenAI with concurrent tasks for independent requests.

**Rationale.** The combined design covers project features, the recommended chat API, user-visible responsiveness, and network concurrency. It also preserves secure authentication and realistic token accounting.


## Case Study 2 — Fabrikam Migration

*4 questions · 12 points*

**Scenario.** Fabrikam is moving an established customer-service chat application to Azure while retaining compatibility with an existing OpenAI-style codebase that can also target another platform. The application uses the ChatCompletions API and must maintain conversation history explicitly. During an initial development phase, an API key is permitted, but it cannot be embedded in source code and production will use Microsoft Entra ID. The team wants to validate prompts in the Foundry model playground, generate a suitable code sample, configure the Azure OpenAI endpoint and deployment name, and then test the migrated application.

### 47. FM01 — Units 3 and 5

*Single choice · Choose a portable inference approach · 1 point*

Which initial SDK and API combination best preserves Fabrikam's existing cross-platform code pattern?

**Answer:** The OpenAI SDK with the ChatCompletions API

**Rationale.** Fabrikam prioritizes compatibility with an established OpenAI-style ChatCompletions codebase. The OpenAI SDK through the Azure OpenAI endpoint requires the smallest conceptual change.

### 48. FM02 — Unit 5

*Build list · Choose a portable inference approach · 4 points*

Arrange the actions Fabrikam's ChatCompletions loop should perform for each new user turn after the history is initialized.

**Answer** (correct sequence):

1. Append the user's new message to conversation history.
2. Call chat.completions.create() with the complete messages collection.
3. Read completion.choices[0].message.content.
4. Append the returned assistant message to conversation history.

**Rationale.** The application owns ChatCompletions state. It records the user turn, submits all retained context, extracts the response, and records the assistant turn for the next request.

### 49. FM03 — Unit 3

*Yes / No · Secure and migrate a chat application · 3 points*

For each Fabrikam security statement, select Yes if it is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| During the permitted key-based development phase, the key should be read from secure configuration rather than embedded in code. | **Yes** |
| If an API key must be retained, Azure Key Vault is an appropriate place to protect it. | **Yes** |
| Moving to Microsoft Entra ID in production removes the need for the workload identity to be authorized. | **No** |

**Rationale.** Secrets belong in protected configuration such as Key Vault, not source. Entra ID avoids long-lived embedded secrets, but the application identity still needs appropriate authorization to use project assets.

### 50. FM04 — Units 2, 3, and 5

*Multiple choice · Secure and migrate a chat application · 4 points*

Which four actions form a sound migration and validation approach for Fabrikam? Select four answers.

**Answer** (select 4):

- Test representative prompts and settings in the model playground.
- Generate an OpenAI SDK and ChatCompletions code sample as a starting point.
- Configure the Azure OpenAI endpoint and exact deployment name outside source code.
- Preserve ordered system, user, and assistant messages when context is required.

**Rationale.** This sequence uses the playground for evidence, selects a compatible sample, externalizes connection values, and retains the explicit history required by ChatCompletions. Generated code still requires adaptation and testing.

## Coverage by unit and domain

| Unit | Domain | Questions | Points |
| --- | --- | ---: | ---: |
| Unit 1 | Plan a Foundry chat application | 3 | 8 |
| Unit 2 | Explore models in the playground | 5 | 16 |
| Unit 3 | Choose endpoints, SDKs, and authentication | 13 | 37 |
| Unit 4 | Use the Responses API | 13 | 37 |
| Unit 5 | Use the ChatCompletions API | 5 | 15 |
| Unit 6 | Complete the Foundry chat exercise | 3 | 14 |
| Unit 3 | Design a Foundry-native chat app | 1 | 4 |
| Unit 4 | Build a responsive stateful experience | 2 | 4 |
| Units 3 and 4 | Design a Foundry-native chat app | 1 | 4 |
| Units 3 and 5 | Choose a portable inference approach | 1 | 1 |
| Unit 5 | Choose a portable inference approach | 1 | 4 |
| Unit 3 | Secure and migrate a chat application | 1 | 3 |
| Units 2, 3, and 5 | Secure and migrate a chat application | 1 | 4 |
| **Total** | | **50** | **151** |
