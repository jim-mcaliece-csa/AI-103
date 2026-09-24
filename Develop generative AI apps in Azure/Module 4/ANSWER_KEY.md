# Module 4 Answer Key

**Develop generative AI apps in Azure — Module 4: Develop generative AI apps that use tools**

Answer key for the practice assessment in [index.html](index.html). Generated from the question
bank in [questions.js](questions.js), which is the authoritative source — regenerate this file if
the bank changes.

| | |
| --- | --- |
| Questions | 50 |
| Total points | 173 |
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
| 1 | G01 | Unit 1 | Single choice | 1 | To let the model access information or perform tasks beyond its training-data boundary. |
| 2 | G02 | Unit 1 | Multiple choice | 4 | Retrieve current information that was not in the model's training data.; Ground answers in authoritative external content.; Trigger controlled actions in business systems.; Coordinate multistep workflows that combine reasoning and operations. |
| 3 | G03 | Unit 1 | Yes / No | 3 | Yes, No, Yes |
| 4 | G04 | Unit 2 | Single choice | 1 | The OpenAI Responses API |
| 5 | G05 | Unit 2 | Matching | 4 | 1) Generate and execute Python in a sandboxed runtime.; 2) Retrieve current information from the public web.; 3) Semantically retrieve content from indexed uploaded documents.; 4) Request that application code run developer-defined business logic. |
| 6 | G06 | Unit 2 | Multiple choice | 4 | The model deployment name.; User input.; Instructions that guide behavior and tool use.; A tools list containing one or more tool definitions. |
| 7 | G07 | Unit 2 | Yes / No | 3 | Yes, Yes, No |
| 8 | G08 | Unit 2 | Single choice | 1 | That the selected model deployment, API, region, and service configuration support the tool. |
| 9 | G09 | Unit 2 | Build list | 5 | 1) Choose a compatible deployed model and endpoint. → 2) Define the allowed tools and their tool-specific settings. → 3) Submit input through responses.create(). → 4) Let the model select and use an appropriate declared tool. → 5) Inspect the response and validate the answer and tool evidence. |
| 10 | G10 | Unit 3 | Single choice | 1 | A sandboxed Python runtime in which the model can generate and execute code. |
| 11 | G11 | Unit 3 | Multiple choice | 4 | Calculate summary statistics from a CSV file.; Solve a mathematical problem with executable code.; Convert structured data between JSON and CSV.; Test an algorithm or simulation. |
| 12 | G12 | Unit 3 | Matching | 4 | 1) Generated code runs in an isolated environment rather than on the application host.; 2) Packages such as pandas, NumPy, and matplotlib may be available for analysis.; 3) The model can inspect errors or results and revise its code.; 4) The runtime can process supported uploaded data and produce downloadable artifacts. |
| 13 | G13 | Unit 3 | Yes / No | 4 | Yes, Yes, No, Yes |
| 14 | G14 | Unit 3 | Build list | 5 | 1) The application includes code_interpreter in the tools list. → 2) The model determines that code execution is useful. → 3) The model generates Python code for the task. → 4) The generated code runs in the sandbox. → 5) The model incorporates execution output into its response. |
| 15 | G15 | Unit 3 | Multiple choice | 4 | Describe the input format and expected output clearly.; Review generated code and results for correctness.; Monitor token and execution costs.; Design for timeouts, unavailable libraries, and data-size limits. |
| 16 | G16 | Unit 4 | Single choice | 1 | When the answer depends on current, publicly available information. |
| 17 | G17 | Unit 4 | Multiple choice | 4 | Summarize a breaking technology announcement.; Compare recently published product prices.; Check whether public regulations or guidance changed.; Verify a public claim against reputable current sources. |
| 18 | G18 | Unit 4 | Matching | 4 | 1) The model determines whether fresh web information is needed.; 2) The model formulates one or more searches based on user intent.; 3) Relevant public pages are selected and summarized.; 4) Search findings are incorporated into a source-grounded answer. |
| 19 | G19 | Unit 4 | Yes / No | 4 | Yes, Yes, No, Yes |
| 20 | G20 | Unit 4 | Build list | 5 | 1) Analyze the question and define the required current time scope. → 2) Construct the Responses API request with web_search declared. → 3) Let the service search and retrieve relevant public-web evidence. → 4) Render the answer with its citation annotations as inspectable sources. → 5) Independently verify material high-stakes claims before acting. |
| 21 | G21 | Unit 4 | Multiple choice | 4 | Specify words such as current, latest, or a date range when recency matters.; Request reputable or official sources when accuracy matters.; Treat retrieved page content as untrusted, keep secrets out of tool-visible context, and do not let page text override trusted instructions.; Track retrieval latency, token usage, and cost. |
| 22 | G22 | Unit 5 | Single choice | 1 | file_search |
| 23 | G23 | Unit 5 | Build list | 4 | 1) Create a vector store for the document collection. → 2) Upload files and wait for indexing to complete. → 3) Submit a response request that declares file_search and the vector store ID. → 4) The service injects relevant retrieved passages for answer generation. |
| 24 | G24 | Unit 5 | Matching | 4 | 1) Creates a named searchable document collection.; 2) Uploads content and waits for processing and indexing to finish.; 3) Scopes a file_search tool to one or more indexed collections.; 4) Returns retrieval details for development, debugging, or traceability. |
| 25 | G25 | Unit 5 | Multiple choice | 4 | It can ground answers in private or domain-specific uploaded documents.; It performs semantic retrieval rather than relying only on exact keywords.; It searches indexed collections represented by vector stores.; It can expose matched retrieval results for debugging and traceability. |
| 26 | G26 | Unit 5 | Yes / No | 4 | Yes, Yes, No, Yes |
| 27 | G27 | Unit 5 | Single choice | 1 | include=["file_search_call.results"] |
| 28 | G28 | Unit 5 | Multiple choice | 3 | Separate unrelated domains into appropriately scoped vector stores.; Authorize the signed-in caller in application code and pass only vector_store_ids that caller is permitted to search.; Remove or replace stale documents and re-index changed content. |
| 29 | G29 | Unit 6 | Single choice | 1 | The model emits a structured function_call, and the application decides whether and how to execute it. |
| 30 | G30 | Unit 6 | Matching | 5 | 1) Identifies which approved operation the model is requesting.; 2) Helps the model understand when the operation is appropriate.; 3) Carries model-generated input values that application code must validate.; 4) Correlates a returned result with the specific function request.; 5) Carries the application's execution result back into the conversation. |
| 31 | G31 | Unit 6 | Build list | 6 | 1) Declare the functions and send the initial Responses API request. → 2) Inspect response.output and collect every function_call item. → 3) For every collected call, validate the function name and arguments, authorize the caller, and execute only approved code. → 4) Build one function_call_output item for each original call_id. → 5) Submit all function_call_output items together in a follow-up request that sets previous_response_id. → 6) Repeat the loop until a response contains no function_call items, then use the final answer. |
| 32 | G32 | Unit 6 | Multiple choice | 4 | Allowlist recognized function names.; Validate argument types, ranges, and business rules.; Check the caller's authorization for the requested action.; Require confirmation or approval for high-impact operations. |
| 33 | G33 | Unit 6 | Yes / No | 4 | Yes, No, Yes, No |
| 34 | G34 | Unit 6 | Single choice | 1 | To associate the application result with the exact function request that produced it. |
| 35 | G35 | Unit 6 | Multiple choice | 4 | Keep functions focused and single-purpose.; Return clear, bounded error results the model can reason about.; Log calls, latency, outcomes, and failures for audit and debugging.; Apply timeouts and idempotency protections where appropriate. |
| 36 | G36 | Unit 6 | Matching | 4 | 1) code_interpreter; 2) web_search; 3) file_search; 4) function |
| 37 | G37 | Unit 7 | Build list | 6 | 1) Deploy gpt-5.2 in a Microsoft Foundry project. → 2) Configure the Azure OpenAI endpoint and exact model deployment name. → 3) Create the travel-brochures vector store and upload the brochure PDFs. → 4) Call responses.create() with web_search, file_search, and response-ID state. → 5) Run the app and test a current destination question followed by a brochure-specific question. → 6) Delete the resource group when the resources are no longer needed. |
| 38 | G38 | Unit 7 | Single choice | 1 | The OpenAI SDK with the Azure OpenAI endpoint and Microsoft Entra ID. |
| 39 | G39 | Unit 7 | Multiple choice | 4 | The vector store is named travel-brochures.; The app uploads PDF files from the brochures folder and waits for ingestion.; The Responses request declares both file_search and web_search.; The app saves response.id and supplies it as previous_response_id on the next turn. |
| 40 | G40 | Unit 7 | Yes / No | 4 | Yes, Yes, No, Yes |
| 41 | G41 | Unit 8 | Matching | 3 | 1) Use file_search.; 2) Run the approved function in application code and return function_call_output.; 3) Use code_interpreter in its sandboxed runtime. |
| 42 | G42 | Unit 9 | Build list | 4 | 1) Define the allowed tool or tools in the request. → 2) Let the model decide when an allowed tool is appropriate. → 3) Return tool output when the selected tool requires client-side execution. → 4) Validate the answer and tool behavior for correctness and safety. |
| 43 | CT01 | Units 4 and 5 | Multiple choice | 2 | web_search; file_search |
| 44 | CT02 | Units 2, 4, and 5 | Matching | 4 | 1) Use web_search.; 2) Use file_search over the authorized vector store.; 3) Expose or render the relevant web citation or annotation.; 4) Inspect file-search results or citations from the indexed document. |
| 45 | CT03 | Units 2, 5, and 7 | Yes / No | 4 | Yes, Yes, No, Yes |
| 46 | CT04 | Units 5 and 7 | Build list | 6 | 1) Create a vector store scoped to the travel brochures. → 2) Upload approved brochures and wait for indexing. → 3) Submit a current destination question with web_search and file_search available. → 4) Save the first response ID. → 5) Ask a follow-up brochure-specific question using the saved previous response ID. → 6) Verify that each claim is supported by the appropriate source. |
| 47 | FO01 | Units 3 and 6 | Matching | 4 | 1) Use code_interpreter for sandboxed analysis.; 2) Expose a focused read-only function backed by the inventory API.; 3) Use a separately authorized function with confirmation and idempotency controls.; 4) Log function name, caller, arguments after redaction, latency, outcome, and call ID. |
| 48 | FO02 | Unit 6 | Multiple choice | 4 | Confirm that create_purchase_order is on the function allowlist.; Validate item identifiers, quantities, limits, and argument types.; Verify that the signed-in manager is authorized for the requested purchase.; Require the configured confirmation or approval for the transaction. |
| 49 | FO03 | Units 3 and 6 | Single choice | 1 | Use an authorized application function to retrieve the data, then provide only the necessary data to the analysis flow. |
| 50 | FO04 | Unit 6 | Build list | 6 | 1) Submit the prompt with the focused function definition available. → 2) The model emits a create_purchase_order function_call. → 3) Validate the function name, arguments, caller authorization, and approval state. → 4) Execute the idempotent business operation and record an audit event. → 5) Send the bounded result as function_call_output with the matching call_id. → 6) The model produces a final user-facing response. |

## General Questions

*42 questions · 142 points*

### 1. G01 — Unit 1

*Single choice · Explain why generative AI tools matter · 1 point*

What is the primary reason to add tools to a generative AI application?

**Answer:** To let the model access information or perform tasks beyond its training-data boundary.

**Rationale.** Tools bridge model reasoning and external capabilities. They can provide current or private information and enable controlled actions, but they do not retrain the model or remove the need for security and validation.

### 2. G02 — Unit 1

*Multiple choice · Explain why generative AI tools matter · 4 points*

Which four capabilities can tools add to a generative AI application? Select four answers.

**Answer** (select 4):

- Retrieve current information that was not in the model's training data.
- Ground answers in authoritative external content.
- Trigger controlled actions in business systems.
- Coordinate multistep workflows that combine reasoning and operations.

**Rationale.** The module identifies real-time access, factual grounding, actions, and intelligent workflows as major benefits. Evaluation, permissions, and access controls remain necessary.

### 3. G03 — Unit 1

*Yes / No · Distinguish prompt tools from related services · 3 points*

For each statement about this module's use of tools, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| The module focuses on tools specified by client applications in model requests. | **Yes** |
| A Responses API tool definition is the same thing as a prebuilt Azure service marketed as a Foundry Tool. | **No** |
| Learning client-managed tool use is a useful step toward agentic solutions with persisted tool configurations. | **Yes** |

**Rationale.** The module covers request-level tools managed by client code and explicitly distinguishes them from Foundry Tools, which are Azure AI APIs. The pattern prepares developers for agents, where instructions and tools can be persisted.

### 4. G04 — Unit 2

*Single choice · Configure tools in a model request · 1 point*

Which API does the module use to submit prompts that include tool definitions?

**Answer:** The OpenAI Responses API

**Rationale.** The module's client-managed examples specify one or more tools in the `tools` collection of `responses.create()`. Chat Completions, Assistants, and persisted Foundry agents use different request or orchestration patterns.

### 5. G05 — Unit 2

*Matching · Choose a tool for a requirement · 4 points*

Match each Responses API tool to its primary capability.

**Answer:**

| Item | Correct match |
| --- | --- |
| code_interpreter | Generate and execute Python in a sandboxed runtime. |
| web_search | Retrieve current information from the public web. |
| file_search | Semantically retrieve content from indexed uploaded documents. |
| function | Request that application code run developer-defined business logic. |

**Rationale.** Each tool extends the model differently: computation, public-web retrieval, private document retrieval, or application-controlled integration.

### 6. G06 — Unit 2

*Multiple choice · Configure tools in a model request · 4 points*

Which four elements commonly belong in a Responses API request that lets a model use tools? Select four answers.

**Answer** (select 4):

- The model deployment name.
- User input.
- Instructions that guide behavior and tool use.
- A tools list containing one or more tool definitions.

**Rationale.** A tool-enabled request identifies a deployed model, supplies input and optional guidance, and declares available tools. An initial turn has no prior response to reference, and function output is returned only after the model requests a function call.

### 7. G07 — Unit 2

*Yes / No · Control tool selection · 3 points*

For each statement about tool selection, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| By default, the model normally decides whether a tool is needed and which available tool to use. | **Yes** |
| tool_choice can constrain tool use, while instructions can guide the model about when a tool is appropriate. | **Yes** |
| Declaring a tool automatically proves that the deployed model and region support it. | **No** |

**Rationale.** The default behavior is model-selected tool use. The tool_choice setting can constrain selection when supported, while instructions can guide the decision. Tool availability still depends on the model, deployment, region, API, and service support.

### 8. G08 — Unit 2

*Single choice · Plan compatible tool use · 1 point*

What should a developer verify before designing an application around a particular tool?

**Answer:** That the selected model deployment, API, region, and service configuration support the tool.

**Rationale.** Tool support is capability- and deployment-specific and can vary by model, region, API version, and service state. Compatibility must be checked rather than assumed.

### 9. G09 — Unit 2

*Build list · Implement tool-enabled responses · 5 points*

Arrange the general built-in-tool workflow in a sensible implementation order.

**Answer** (correct sequence):

1. Choose a compatible deployed model and endpoint.
2. Define the allowed tools and their tool-specific settings.
3. Submit input through responses.create().
4. Let the model select and use an appropriate declared tool.
5. Inspect the response and validate the answer and tool evidence.

**Rationale.** Compatibility and tool configuration come before the request. The model can then select a declared tool, after which the application should inspect and validate the result.

### 10. G10 — Unit 3

*Single choice · Use code interpreter · 1 point*

What capability does the code_interpreter tool add to a model?

**Answer:** A sandboxed Python runtime in which the model can generate and execute code.

**Rationale.** Code interpreter runs model-generated Python in an isolated environment. It is not the application host, does not provide unrestricted external-network access, and does not replace authorization.

### 11. G11 — Unit 3

*Multiple choice · Use code interpreter · 4 points*

Which four tasks are suitable code_interpreter use cases? Select four answers.

**Answer** (select 4):

- Calculate summary statistics from a CSV file.
- Solve a mathematical problem with executable code.
- Convert structured data between JSON and CSV.
- Test an algorithm or simulation.

**Rationale.** The sandbox is useful for analysis, calculations, conversions, simulations, and prototyping. External network access is not available, and private system access requires a controlled integration such as a function tool.

### 12. G12 — Unit 3

*Matching · Understand code interpreter behavior · 4 points*

Match each code_interpreter characteristic to its implication.

**Answer:**

| Item | Correct match |
| --- | --- |
| Sandboxed execution | Generated code runs in an isolated environment rather than on the application host. |
| Common preinstalled libraries | Packages such as pandas, NumPy, and matplotlib may be available for analysis. |
| Execution feedback | The model can inspect errors or results and revise its code. |
| File handling | The runtime can process supported uploaded data and produce downloadable artifacts. |

**Rationale.** Isolation, useful libraries, iterative execution feedback, and supported file handling are distinct features of code interpreter.

### 13. G13 — Unit 3

*Yes / No · Respect code interpreter limitations · 4 points*

For each statement about code_interpreter limitations, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| The sandbox has no external network access. | **Yes** |
| Timeout and memory limits can affect long-running or very large workloads. | **Yes** |
| Every Python package available on the public internet is guaranteed to be installed. | **No** |
| AI-generated code and results should be reviewed before production use. | **Yes** |

**Rationale.** The runtime is network-isolated and resource-constrained, and library availability is finite. Generated code can be wrong, so validation remains important.

### 14. G14 — Unit 3

*Build list · Use code interpreter · 5 points*

Arrange the code_interpreter flow from request to answer.

**Answer** (correct sequence):

1. The application includes code_interpreter in the tools list.
2. The model determines that code execution is useful.
3. The model generates Python code for the task.
4. The generated code runs in the sandbox.
5. The model incorporates execution output into its response.

**Rationale.** The tool is first made available, after which the model chooses it, writes code, receives sandbox output, and uses that output in the answer.

### 15. G15 — Unit 3

*Multiple choice · Operate code interpreter responsibly · 4 points*

Which four practices improve a code_interpreter implementation? Select four answers.

**Answer** (select 4):

- Describe the input format and expected output clearly.
- Review generated code and results for correctness.
- Monitor token and execution costs.
- Design for timeouts, unavailable libraries, and data-size limits.

**Rationale.** Specific prompts, validation, cost monitoring, and robust limit handling improve reliability. The sandbox has no external network, and high-stakes results still need appropriate review.

### 16. G16 — Unit 4

*Single choice · Use web search · 1 point*

When is web_search more appropriate than relying only on model training data?

**Answer:** When the answer depends on current, publicly available information.

**Rationale.** Web search retrieves fresh public information. Private documents belong in controlled retrieval, calculations fit code interpreter, and transactions should use authorized application logic.

### 17. G17 — Unit 4

*Multiple choice · Use web search · 4 points*

Which four scenarios are good candidates for web_search? Select four answers.

**Answer** (select 4):

- Summarize a breaking technology announcement.
- Compare recently published product prices.
- Check whether public regulations or guidance changed.
- Verify a public claim against reputable current sources.

**Rationale.** Web search is designed for recent, external, publicly indexable information. Private content and business actions need different tools.

### 18. G18 — Unit 4

*Matching · Understand web search behavior · 4 points*

Match each web_search stage to what happens.

**Answer:**

| Item | Correct match |
| --- | --- |
| Question evaluation | The model determines whether fresh web information is needed. |
| Query generation | The model formulates one or more searches based on user intent. |
| Result review | Relevant public pages are selected and summarized. |
| Response generation | Search findings are incorporated into a source-grounded answer. |

**Rationale.** Web search combines tool selection, automatic query generation, source review, and answer synthesis in one response flow.

### 19. G19 — Unit 4

*Yes / No · Evaluate web-grounded output · 4 points*

For each statement about web_search output, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Source citations or annotations help users inspect the evidence behind an answer. | **Yes** |
| Public-web source quality can vary, so critical claims may require independent verification. | **Yes** |
| Repeated searches are guaranteed to return identical content and wording. | **No** |
| Regional, policy, or network restrictions can affect web-search availability. | **Yes** |

**Rationale.** Citations improve transparency, but public sources can vary and change over time. Availability and results can also be affected by environment and policy restrictions.

### 20. G20 — Unit 4

*Build list · Use web search · 5 points*

Arrange a sound workflow for answering a time-sensitive public-information question.

**Answer** (correct sequence):

1. Analyze the question and define the required current time scope.
2. Construct the Responses API request with web_search declared.
3. Let the service search and retrieve relevant public-web evidence.
4. Render the answer with its citation annotations as inspectable sources.
5. Independently verify material high-stakes claims before acting.

**Rationale.** The stages are intentionally distinct: analyze the time scope, construct the tool-enabled request, let the service retrieve evidence, render citation annotations, and independently verify consequential claims before action.

### 21. G21 — Unit 4

*Multiple choice · Operate web search efficiently · 4 points*

Which four practices improve web_search quality or operations? Select four answers.

**Answer** (select 4):

- Specify words such as current, latest, or a date range when recency matters.
- Request reputable or official sources when accuracy matters.
- Treat retrieved page content as untrusted, keep secrets out of tool-visible context, and do not let page text override trusted instructions.
- Track retrieval latency, token usage, and cost.

**Rationale.** Time scope, source expectations, a firm trust boundary, and telemetry improve usefulness and safety. Public pages can contain prompt injection or misleading content, so retrieved text is data rather than trusted instructions, and secrets should not enter tool-visible context.

### 22. G22 — Unit 5

*Single choice · Use file search · 1 point*

Which tool should an application use when answers must be grounded in its own uploaded policy documents?

**Answer:** file_search

**Rationale.** File search retrieves relevant passages from uploaded, indexed documents. It is the official module-assessment answer for policy-document grounding.

### 23. G23 — Unit 5

*Build list · Prepare content for file search · 4 points*

Arrange the basic file_search setup and request flow.

**Answer** (correct sequence):

1. Create a vector store for the document collection.
2. Upload files and wait for indexing to complete.
3. Submit a response request that declares file_search and the vector store ID.
4. The service injects relevant retrieved passages for answer generation.

**Rationale.** Documents must be stored and indexed before a response can search them. The request identifies the vector store, and retrieved passages become grounding context for the model.

### 24. G24 — Unit 5

*Matching · Configure file search · 4 points*

Match each file_search element to its purpose.

**Answer:**

| Item | Correct match |
| --- | --- |
| vector_stores.create() | Creates a named searchable document collection. |
| upload_and_poll() | Uploads content and waits for processing and indexing to finish. |
| vector_store_ids | Scopes a file_search tool to one or more indexed collections. |
| include=["file_search_call.results"] | Returns retrieval details for development, debugging, or traceability. |

**Rationale.** Creation, ingestion, request scoping, and optional result inspection are separate parts of the file-search workflow.

### 25. G25 — Unit 5

*Multiple choice · Understand file search · 4 points*

Which four statements describe file_search capabilities? Select four answers.

**Answer** (select 4):

- It can ground answers in private or domain-specific uploaded documents.
- It performs semantic retrieval rather than relying only on exact keywords.
- It searches indexed collections represented by vector stores.
- It can expose matched retrieval results for debugging and traceability.

**Rationale.** File search works over deliberately uploaded and indexed collections and can surface retrieval evidence. Its quality is bounded by document coverage and retrieval relevance.

### 26. G26 — Unit 5

*Yes / No · Maintain file-search grounding · 4 points*

For each statement about file_search quality, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Clean, current source documents generally improve retrieval quality. | **Yes** |
| Updated source content may need re-indexing before the changes are searchable. | **Yes** |
| A very large mixed-domain store always produces more focused matches. | **No** |
| Sensitive or high-stakes answers can still require human review. | **Yes** |

**Rationale.** Source quality, coverage, indexing freshness, and collection scope affect retrieval. More mixed content can reduce focus, and grounding does not eliminate review requirements.

### 27. G27 — Unit 5

*Single choice · Inspect file-search retrieval · 1 point*

Which request option helps a developer inspect the passages returned by file_search?

**Answer:** include=["file_search_call.results"]

**Rationale.** Including `file_search_call.results` exposes retrieval results for debugging and traceability. The other parameters do not request retrieved passages.

### 28. G28 — Unit 5

*Multiple choice · Design file-search collections · 3 points*

Which three practices support effective and secure file_search collections? Select three answers.

**Answer** (select 3):

- Separate unrelated domains into appropriately scoped vector stores.
- Authorize the signed-in caller in application code and pass only vector_store_ids that caller is permitted to search.
- Remove or replace stale documents and re-index changed content.

**Rationale.** Domain scoping and content lifecycle management improve relevance. The application must authorize the caller and expose only permitted vector_store_ids; prompt instructions and citations are not access controls.

### 29. G29 — Unit 6

*Single choice · Implement function calling · 1 point*

What happens when a model selects a developer-defined function tool?

**Answer:** The model emits a structured function_call, and the application decides whether and how to execute it.

**Rationale.** The model requests a call; it does not run business logic. Client code validates the request, invokes approved logic, and returns output for the model to continue.

### 30. G30 — Unit 6

*Matching · Understand function-call data · 5 points*

Match each function-calling element to its role.

**Answer:**

| Item | Correct match |
| --- | --- |
| Function name | Identifies which approved operation the model is requesting. |
| Function description | Helps the model understand when the operation is appropriate. |
| Function arguments | Carries model-generated input values that application code must validate. |
| call_id | Correlates a returned result with the specific function request. |
| function_call_output | Carries the application's execution result back into the conversation. |

**Rationale.** A function definition guides selection, generated arguments describe the requested work, and the call ID connects the application result to the original call.

### 31. G31 — Unit 6

*Build list · Implement function calling · 6 points*

Arrange the function-calling loop in the correct order.

**Answer** (correct sequence):

1. Declare the functions and send the initial Responses API request.
2. Inspect response.output and collect every function_call item.
3. For every collected call, validate the function name and arguments, authorize the caller, and execute only approved code.
4. Build one function_call_output item for each original call_id.
5. Submit all function_call_output items together in a follow-up request that sets previous_response_id.
6. Repeat the loop until a response contains no function_call items, then use the final answer.

**Rationale.** A robust orchestrator inspects all output items, processes every requested call through application validation and authorization, returns one correlated output per call_id in one follow-up, and repeats because later responses can request more functions.

### 32. G32 — Unit 6

*Multiple choice · Secure function execution · 4 points*

Which four controls are appropriate before executing a requested function? Select four answers.

**Answer** (select 4):

- Allowlist recognized function names.
- Validate argument types, ranges, and business rules.
- Check the caller's authorization for the requested action.
- Require confirmation or approval for high-impact operations.

**Rationale.** Structured output is not trusted input. The application should constrain functions, validate arguments, enforce user permissions, and add approval controls for consequential actions.

### 33. G33 — Unit 6

*Yes / No · Understand function calling · 4 points*

For each statement about function calling, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| In a Responses API function tool, name, description, parameters, and optional strict are siblings of type: "function". | **Yes** |
| tool_choice: "auto" forces the model to use at least one configured tool. | **No** |
| tool_choice: "required" requires the model to use at least one configured tool. | **Yes** |
| strict: true eliminates the application's need to validate arguments and authorize the requested action. | **No** |

**Rationale.** Responses function fields use the flat tool shape. `auto` permits a direct answer or tool use, whereas `required` requires at least one tool. Strict schema adherence reduces malformed arguments but never replaces application validation or authorization.

### 34. G34 — Unit 6

*Single choice · Return function output · 1 point*

Why must a function_call_output include the call_id from the model's function_call item?

**Answer:** To associate the application result with the exact function request that produced it.

**Rationale.** The call ID is the correlation identifier between a function request and its output. Authentication, model routing, and vector-store selection use different configuration.

### 35. G35 — Unit 6

*Multiple choice · Operate functions safely · 4 points*

Which four operational practices improve a function-tool implementation? Select four answers.

**Answer** (select 4):

- Keep functions focused and single-purpose.
- Return clear, bounded error results the model can reason about.
- Log calls, latency, outcomes, and failures for audit and debugging.
- Apply timeouts and idempotency protections where appropriate.

**Rationale.** Narrow contracts, safe errors, observability, and resilience controls make integrations easier to test and govern. Sensitive diagnostics and uncontrolled retries create security or duplication risks.

### 36. G36 — Unit 6

*Matching · Choose and combine tools · 4 points*

Match each requirement to the best primary tool.

**Answer:**

| Item | Correct match |
| --- | --- |
| Calculate correlations in an uploaded CSV. | code_interpreter |
| Find today's public transit advisory. | web_search |
| Answer from an indexed internal maintenance manual. | file_search |
| Submit an authorized maintenance work order through an internal API. | function |

**Rationale.** The requirement determines the tool: computation, public recency, private retrieval, or controlled business-system action. An application can declare multiple tools when a scenario spans these needs.

### 37. G37 — Unit 7

*Build list · Complete the tools exercise · 6 points*

According to the currently documented hands-on exercise, arrange these major stages.

**Answer** (correct sequence):

1. Deploy gpt-5.2 in a Microsoft Foundry project.
2. Configure the Azure OpenAI endpoint and exact model deployment name.
3. Create the travel-brochures vector store and upload the brochure PDFs.
4. Call responses.create() with web_search, file_search, and response-ID state.
5. Run the app and test a current destination question followed by a brochure-specific question.
6. Delete the resource group when the resources are no longer needed.

**Rationale.** The currently documented lab uses gpt-5.2 and moves from project and model setup to client configuration, vector-store ingestion, a combined tool request, conversational testing, and resource cleanup. Lab versions can change, so follow the current exercise when performing it.

### 38. G38 — Unit 7

*Single choice · Configure the tools exercise · 1 point*

Which connection pattern does the exercise use for its Python application?

**Answer:** The OpenAI SDK with the Azure OpenAI endpoint and Microsoft Entra ID.

**Rationale.** The documented exercise uses the OpenAI SDK with the Azure OpenAI endpoint and creates an Entra token provider. The other choices change the endpoint, SDK, or authentication pattern used by the lab.

### 39. G39 — Unit 7

*Multiple choice · Implement the tools exercise · 4 points*

Which four implementation details are part of the documented tools exercise? Select four answers.

**Answer** (select 4):

- The vector store is named travel-brochures.
- The app uploads PDF files from the brochures folder and waits for ingestion.
- The Responses request declares both file_search and web_search.
- The app saves response.id and supplies it as previous_response_id on the next turn.

**Rationale.** The lab builds a named vector store, uploads local PDFs, enables two retrieval tools, and chains response IDs for follow-up context. Cleanup is a deliberate Azure administration step, not a model tool action.

### 40. G40 — Unit 7

*Yes / No · Validate and clean up the tools exercise · 4 points*

For each statement about the exercise, select Yes if the statement is true. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| A question about events next month should normally exercise web_search. | **Yes** |
| A follow-up asking which hotels Margie's Travel offers should normally exercise file_search. | **Yes** |
| previous_response_id automatically carries the prior request's instructions, so the app can omit them on later turns. | **No** |
| Deleting the resource group is appropriate when the lab resources are no longer needed. | **Yes** |

**Rationale.** The lab tests current public retrieval, private brochure retrieval, response-ID conversation state, and cleanup. `previous_response_id` chains conversation items, but prior instructions are not automatically carried forward; resend instructions on later requests when they must continue to apply.

### 41. G41 — Unit 8

*Matching · Apply the official module assessment · 3 points*

Match each official module-assessment scenario to the correct response.

**Answer:**

| Item | Correct match |
| --- | --- |
| Answer questions from uploaded policy documents. | Use file_search. |
| Handle a function_call returned by the model. | Run the approved function in application code and return function_call_output. |
| Run Python to help solve a task. | Use code_interpreter in its sandboxed runtime. |

**Rationale.** These are the three concepts tested by the official assessment: private document retrieval, the client-controlled function loop, and sandboxed Python execution.

### 42. G42 — Unit 9

*Build list · Summarize the shared tool pattern · 4 points*

Arrange the shared implementation pattern summarized by the module.

**Answer** (correct sequence):

1. Define the allowed tool or tools in the request.
2. Let the model decide when an allowed tool is appropriate.
3. Return tool output when the selected tool requires client-side execution.
4. Validate the answer and tool behavior for correctness and safety.

**Rationale.** Across tools, the application declares capabilities, the model normally selects among them, client-side tools require returned output, and the application remains responsible for validation and safety.

## Case Study 1 — Contoso Travel

*4 questions · 16 points*

**Scenario.** Contoso Travel is building a customer-facing travel assistant. It must answer destination questions with current public information and answer company-specific questions from approved private brochures. The app uses a compatible model deployed in Microsoft Foundry, the Azure OpenAI endpoint, the Responses API, and Microsoft Entra ID. Customers ask follow-up questions, and answers should make their evidence clear. The team must control latency, cost, and access to private content.

### 43. CT01 — Units 4 and 5

*Multiple choice · Combine public and private retrieval · 2 points*

Which two tools should Contoso declare for current destination events and approved brochure content? Select two answers.

**Answer** (select 2):

- web_search
- file_search

**Rationale.** Web search supplies current public destination information, while file search grounds company-specific answers in indexed brochures. Both can be declared in one Responses request.

### 44. CT02 — Units 2, 4, and 5

*Matching · Route travel questions to evidence · 4 points*

Match each travel-assistant need to the best response strategy.

**Answer:**

| Item | Correct match |
| --- | --- |
| Events happening in Seattle next month | Use web_search. |
| Hotels offered in Contoso's private brochure | Use file_search over the authorized vector store. |
| Evidence for a current public claim | Expose or render the relevant web citation or annotation. |
| Evidence for a brochure-specific claim | Inspect file-search results or citations from the indexed document. |

**Rationale.** The assistant should route current public facts and private catalog facts to different retrieval sources and preserve evidence appropriate to each.

### 45. CT03 — Units 2, 5, and 7

*Yes / No · Secure and operate a multi-tool assistant · 4 points*

For each proposed Contoso design choice, select Yes if it is appropriate. Otherwise, select No.

**Answer:**

| Statement | Answer |
| --- | --- |
| Use Microsoft Entra ID, authorize the signed-in caller in application code, and pass only permitted vector_store_ids. | **Yes** |
| Retain the last response ID so a follow-up such as 'Which hotels are there?' has conversational context. | **Yes** |
| Treat any public search result as authoritative without reviewing source quality. | **No** |
| Measure retrieval latency, tokens, and cost for requests that can invoke two tools. | **Yes** |

**Rationale.** Identity plus application-enforced authorization, permitted vector_store_ids, response chaining, and telemetry support a secure service. Prompts are not document access controls, and public grounding does not make every source authoritative.

### 46. CT04 — Units 5 and 7

*Build list · Prepare and test travel grounding · 6 points*

Arrange Contoso's private-content setup and conversational test.

**Answer** (correct sequence):

1. Create a vector store scoped to the travel brochures.
2. Upload approved brochures and wait for indexing.
3. Submit a current destination question with web_search and file_search available.
4. Save the first response ID.
5. Ask a follow-up brochure-specific question using the saved previous response ID.
6. Verify that each claim is supported by the appropriate source.

**Rationale.** The private collection must exist and be indexed before retrieval. The first response establishes context, the saved ID links the follow-up, and source verification closes the test.

## Case Study 2 — Fabrikam Operations

*4 questions · 15 points*

**Scenario.** Fabrikam Operations is developing an internal assistant. Analysts upload CSV data for calculations, while authorized managers can request inventory lookups and purchase-order actions through company APIs. The company requires argument validation, least privilege, explicit authorization for high-impact actions, audit logs, and safe error handling. The model may request tools, but business logic must remain under application control.

### 47. FO01 — Units 3 and 6

*Matching · Choose controlled computation and actions · 4 points*

Match each Fabrikam requirement to the best design choice.

**Answer:**

| Item | Correct match |
| --- | --- |
| Calculate statistics from an uploaded CSV | Use code_interpreter for sandboxed analysis. |
| Read current inventory from an internal API | Expose a focused read-only function backed by the inventory API. |
| Create a purchase order | Use a separately authorized function with confirmation and idempotency controls. |
| Record tool activity for governance | Log function name, caller, arguments after redaction, latency, outcome, and call ID. |

**Rationale.** Computation belongs in the sandbox, while private reads and state-changing actions belong behind focused application functions. Higher-impact operations need stronger controls and all tool activity needs appropriate auditability.

### 48. FO02 — Unit 6

*Multiple choice · Validate high-impact function calls · 4 points*

The model requests create_purchase_order. Which four checks should Fabrikam perform before execution? Select four answers.

**Answer** (select 4):

- Confirm that create_purchase_order is on the function allowlist.
- Validate item identifiers, quantities, limits, and argument types.
- Verify that the signed-in manager is authorized for the requested purchase.
- Require the configured confirmation or approval for the transaction.

**Rationale.** The app must validate both the requested operation and its arguments, enforce the user's authority, and apply approval policy. Structured model output is not proof of safety or permission.

### 49. FO03 — Units 3 and 6

*Single choice · Respect sandbox boundaries · 1 point*

An analyst asks code_interpreter to download live inventory directly from Fabrikam's private API. What should the team do?

**Answer:** Use an authorized application function to retrieve the data, then provide only the necessary data to the analysis flow.

**Rationale.** In the documented module configuration, code interpreter is not the component that authenticates to and calls Fabrikam's private API. A controlled application function can enforce identity, authorization, and data minimization before analysis occurs.

### 50. FO04 — Unit 6

*Build list · Complete an audited function-call loop · 6 points*

Arrange the secure purchase-order function workflow.

**Answer** (correct sequence):

1. Submit the prompt with the focused function definition available.
2. The model emits a create_purchase_order function_call.
3. Validate the function name, arguments, caller authorization, and approval state.
4. Execute the idempotent business operation and record an audit event.
5. Send the bounded result as function_call_output with the matching call_id.
6. The model produces a final user-facing response.

**Rationale.** A safe loop exposes a narrow function, treats the model output as a request, validates before execution, performs and logs the approved action once, correlates the output, and lets the model formulate the final response.

## Coverage by unit and domain

| Unit | Domain | Questions | Points |
| --- | --- | ---: | ---: |
| Unit 1 | Explain why generative AI tools matter | 2 | 5 |
| Unit 1 | Distinguish prompt tools from related services | 1 | 3 |
| Unit 2 | Configure tools in a model request | 2 | 5 |
| Unit 2 | Choose a tool for a requirement | 1 | 4 |
| Unit 2 | Control tool selection | 1 | 3 |
| Unit 2 | Plan compatible tool use | 1 | 1 |
| Unit 2 | Implement tool-enabled responses | 1 | 5 |
| Unit 3 | Use code interpreter | 3 | 10 |
| Unit 3 | Understand code interpreter behavior | 1 | 4 |
| Unit 3 | Respect code interpreter limitations | 1 | 4 |
| Unit 3 | Operate code interpreter responsibly | 1 | 4 |
| Unit 4 | Use web search | 3 | 10 |
| Unit 4 | Understand web search behavior | 1 | 4 |
| Unit 4 | Evaluate web-grounded output | 1 | 4 |
| Unit 4 | Operate web search efficiently | 1 | 4 |
| Unit 5 | Use file search | 1 | 1 |
| Unit 5 | Prepare content for file search | 1 | 4 |
| Unit 5 | Configure file search | 1 | 4 |
| Unit 5 | Understand file search | 1 | 4 |
| Unit 5 | Maintain file-search grounding | 1 | 4 |
| Unit 5 | Inspect file-search retrieval | 1 | 1 |
| Unit 5 | Design file-search collections | 1 | 3 |
| Unit 6 | Implement function calling | 2 | 7 |
| Unit 6 | Understand function-call data | 1 | 5 |
| Unit 6 | Secure function execution | 1 | 4 |
| Unit 6 | Understand function calling | 1 | 4 |
| Unit 6 | Return function output | 1 | 1 |
| Unit 6 | Operate functions safely | 1 | 4 |
| Unit 6 | Choose and combine tools | 1 | 4 |
| Unit 7 | Complete the tools exercise | 1 | 6 |
| Unit 7 | Configure the tools exercise | 1 | 1 |
| Unit 7 | Implement the tools exercise | 1 | 4 |
| Unit 7 | Validate and clean up the tools exercise | 1 | 4 |
| Unit 8 | Apply the official module assessment | 1 | 3 |
| Unit 9 | Summarize the shared tool pattern | 1 | 4 |
| Units 4 and 5 | Combine public and private retrieval | 1 | 2 |
| Units 2, 4, and 5 | Route travel questions to evidence | 1 | 4 |
| Units 2, 5, and 7 | Secure and operate a multi-tool assistant | 1 | 4 |
| Units 5 and 7 | Prepare and test travel grounding | 1 | 6 |
| Units 3 and 6 | Choose controlled computation and actions | 1 | 4 |
| Unit 6 | Validate high-impact function calls | 1 | 4 |
| Units 3 and 6 | Respect sandbox boundaries | 1 | 1 |
| Unit 6 | Complete an audited function-call loop | 1 | 6 |
| **Total** | | **50** | **173** |
