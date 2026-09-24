window.AI103_EXAM_SECTIONS = [
  {
    id: "general",
    title: "General Questions",
    kind: "general",
    description: "Answer 42 questions covering tool selection, code interpreter, web search, file search, function calling, security, operational tradeoffs, and the hands-on exercise."
  },
  {
    id: "case-contoso-travel",
    title: "Case Study 1 — Contoso Travel",
    kind: "case-study",
    context: "Contoso Travel is building a customer-facing travel assistant. It must answer destination questions with current public information and answer company-specific questions from approved private brochures. The app uses a compatible model deployed in Microsoft Foundry, the Azure OpenAI endpoint, the Responses API, and Microsoft Entra ID. Customers ask follow-up questions, and answers should make their evidence clear. The team must control latency, cost, and access to private content."
  },
  {
    id: "case-fabrikam-operations",
    title: "Case Study 2 — Fabrikam Operations",
    kind: "case-study",
    context: "Fabrikam Operations is developing an internal assistant. Analysts upload CSV data for calculations, while authorized managers can request inventory lookups and purchase-order actions through company APIs. The company requires argument validation, least privilege, explicit authorization for high-impact actions, audit logs, and safe error handling. The model may request tools, but business logic must remain under application control."
  }
];

window.AI103_QUESTIONS = [
  {
    id: "G01",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Explain why generative AI tools matter",
    type: "single",
    prompt: "What is the primary reason to add tools to a generative AI application?",
    options: [
      "To let the model access information or perform tasks beyond its training-data boundary.",
      "To retrain the foundation model after every user request.",
      "To guarantee that every generated answer is correct without validation.",
      "To replace authentication and authorization in connected systems."
    ],
    correct: "To let the model access information or perform tasks beyond its training-data boundary.",
    rationale: "Tools bridge model reasoning and external capabilities. They can provide current or private information and enable controlled actions, but they do not retrain the model or remove the need for security and validation."
  },
  {
    id: "G02",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Explain why generative AI tools matter",
    type: "multiple",
    prompt: "Which four capabilities can tools add to a generative AI application? Select four answers.",
    options: [
      "Retrieve current information that was not in the model's training data.",
      "Ground answers in authoritative external content.",
      "Trigger controlled actions in business systems.",
      "Coordinate multistep workflows that combine reasoning and operations.",
      "Eliminate the need to evaluate generated output.",
      "Grant the model unrestricted access to every connected resource."
    ],
    correct: [
      "Retrieve current information that was not in the model's training data.",
      "Ground answers in authoritative external content.",
      "Trigger controlled actions in business systems.",
      "Coordinate multistep workflows that combine reasoning and operations."
    ],
    selectCount: 4,
    rationale: "The module identifies real-time access, factual grounding, actions, and intelligent workflows as major benefits. Evaluation, permissions, and access controls remain necessary."
  },
  {
    id: "G03",
    sectionId: "general",
    unit: "Unit 1",
    domain: "Distinguish prompt tools from related services",
    type: "yesno",
    prompt: "For each statement about this module's use of tools, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "The module focuses on tools specified by client applications in model requests.",
      "A Responses API tool definition is the same thing as a prebuilt Azure service marketed as a Foundry Tool.",
      "Learning client-managed tool use is a useful step toward agentic solutions with persisted tool configurations."
    ],
    correct: [
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "The module covers request-level tools managed by client code and explicitly distinguishes them from Foundry Tools, which are Azure AI APIs. The pattern prepares developers for agents, where instructions and tools can be persisted."
  },
  {
    id: "G04",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Configure tools in a model request",
    type: "single",
    prompt: "Which API does the module use to submit prompts that include tool definitions?",
    options: [
      "The OpenAI Responses API",
      "The Chat Completions API with tool definitions nested under each function",
      "The Assistants API with tools persisted on an assistant",
      "The Foundry Agent Service API with tools persisted on an agent"
    ],
    correct: "The OpenAI Responses API",
    rationale: "The module's client-managed examples specify one or more tools in the `tools` collection of `responses.create()`. Chat Completions, Assistants, and persisted Foundry agents use different request or orchestration patterns."
  },
  {
    id: "G05",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Choose a tool for a requirement",
    type: "matching",
    prompt: "Match each Responses API tool to its primary capability.",
    items: [
      "code_interpreter",
      "web_search",
      "file_search",
      "function"
    ],
    options: [
      "Generate and execute Python in a sandboxed runtime.",
      "Retrieve current information from the public web.",
      "Semantically retrieve content from indexed uploaded documents.",
      "Request that application code run developer-defined business logic."
    ],
    correct: [
      "Generate and execute Python in a sandboxed runtime.",
      "Retrieve current information from the public web.",
      "Semantically retrieve content from indexed uploaded documents.",
      "Request that application code run developer-defined business logic."
    ],
    rationale: "Each tool extends the model differently: computation, public-web retrieval, private document retrieval, or application-controlled integration."
  },
  {
    id: "G06",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Configure tools in a model request",
    type: "multiple",
    prompt: "Which four elements commonly belong in a Responses API request that lets a model use tools? Select four answers.",
    options: [
      "The model deployment name.",
      "User input.",
      "Instructions that guide behavior and tool use.",
      "A tools list containing one or more tool definitions.",
      "A previous_response_id on the initial turn.",
      "A function_call_output before the model has emitted a function_call."
    ],
    correct: [
      "The model deployment name.",
      "User input.",
      "Instructions that guide behavior and tool use.",
      "A tools list containing one or more tool definitions."
    ],
    selectCount: 4,
    rationale: "A tool-enabled request identifies a deployed model, supplies input and optional guidance, and declares available tools. An initial turn has no prior response to reference, and function output is returned only after the model requests a function call."
  },
  {
    id: "G07",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Control tool selection",
    type: "yesno",
    prompt: "For each statement about tool selection, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "By default, the model normally decides whether a tool is needed and which available tool to use.",
      "tool_choice can constrain tool use, while instructions can guide the model about when a tool is appropriate.",
      "Declaring a tool automatically proves that the deployed model and region support it."
    ],
    correct: [
      "Yes",
      "Yes",
      "No"
    ],
    rationale: "The default behavior is model-selected tool use. The tool_choice setting can constrain selection when supported, while instructions can guide the decision. Tool availability still depends on the model, deployment, region, API, and service support."
  },
  {
    id: "G08",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Plan compatible tool use",
    type: "single",
    prompt: "What should a developer verify before designing an application around a particular tool?",
    options: [
      "That the selected model deployment, API, region, and service configuration support the tool.",
      "That the tool has the same availability in every Azure region and model family.",
      "That the tool can bypass content filters when required.",
      "That the tool always runs on every response without configuration."
    ],
    correct: "That the selected model deployment, API, region, and service configuration support the tool.",
    rationale: "Tool support is capability- and deployment-specific and can vary by model, region, API version, and service state. Compatibility must be checked rather than assumed."
  },
  {
    id: "G09",
    sectionId: "general",
    unit: "Unit 2",
    domain: "Implement tool-enabled responses",
    type: "order",
    prompt: "Arrange the general built-in-tool workflow in a sensible implementation order.",
    items: [
      "Inspect the response and validate the answer and tool evidence.",
      "Choose a compatible deployed model and endpoint.",
      "Submit input through responses.create().",
      "Define the allowed tools and their tool-specific settings.",
      "Let the model select and use an appropriate declared tool."
    ],
    correct: [
      "Choose a compatible deployed model and endpoint.",
      "Define the allowed tools and their tool-specific settings.",
      "Submit input through responses.create().",
      "Let the model select and use an appropriate declared tool.",
      "Inspect the response and validate the answer and tool evidence."
    ],
    rationale: "Compatibility and tool configuration come before the request. The model can then select a declared tool, after which the application should inspect and validate the result."
  },
  {
    id: "G10",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use code interpreter",
    type: "single",
    prompt: "What capability does the code_interpreter tool add to a model?",
    options: [
      "A sandboxed Python runtime in which the model can generate and execute code.",
      "Unrestricted shell access to the application's production host.",
      "Automatic public-web browsing from generated Python code.",
      "A replacement for the application's authorization layer."
    ],
    correct: "A sandboxed Python runtime in which the model can generate and execute code.",
    rationale: "Code interpreter runs model-generated Python in an isolated environment. It is not the application host, does not provide unrestricted external-network access, and does not replace authorization."
  },
  {
    id: "G11",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use code interpreter",
    type: "multiple",
    prompt: "Which four tasks are suitable code_interpreter use cases? Select four answers.",
    options: [
      "Calculate summary statistics from a CSV file.",
      "Solve a mathematical problem with executable code.",
      "Convert structured data between JSON and CSV.",
      "Test an algorithm or simulation.",
      "Call an arbitrary private production API without a configured integration.",
      "Browse any external website directly from the Python sandbox."
    ],
    correct: [
      "Calculate summary statistics from a CSV file.",
      "Solve a mathematical problem with executable code.",
      "Convert structured data between JSON and CSV.",
      "Test an algorithm or simulation."
    ],
    selectCount: 4,
    rationale: "The sandbox is useful for analysis, calculations, conversions, simulations, and prototyping. External network access is not available, and private system access requires a controlled integration such as a function tool."
  },
  {
    id: "G12",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Understand code interpreter behavior",
    type: "matching",
    prompt: "Match each code_interpreter characteristic to its implication.",
    items: [
      "Sandboxed execution",
      "Common preinstalled libraries",
      "Execution feedback",
      "File handling"
    ],
    options: [
      "Generated code runs in an isolated environment rather than on the application host.",
      "Packages such as pandas, NumPy, and matplotlib may be available for analysis.",
      "The model can inspect errors or results and revise its code.",
      "The runtime can process supported uploaded data and produce downloadable artifacts."
    ],
    correct: [
      "Generated code runs in an isolated environment rather than on the application host.",
      "Packages such as pandas, NumPy, and matplotlib may be available for analysis.",
      "The model can inspect errors or results and revise its code.",
      "The runtime can process supported uploaded data and produce downloadable artifacts."
    ],
    rationale: "Isolation, useful libraries, iterative execution feedback, and supported file handling are distinct features of code interpreter."
  },
  {
    id: "G13",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Respect code interpreter limitations",
    type: "yesno",
    prompt: "For each statement about code_interpreter limitations, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "The sandbox has no external network access.",
      "Timeout and memory limits can affect long-running or very large workloads.",
      "Every Python package available on the public internet is guaranteed to be installed.",
      "AI-generated code and results should be reviewed before production use."
    ],
    correct: [
      "Yes",
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "The runtime is network-isolated and resource-constrained, and library availability is finite. Generated code can be wrong, so validation remains important."
  },
  {
    id: "G14",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Use code interpreter",
    type: "order",
    prompt: "Arrange the code_interpreter flow from request to answer.",
    items: [
      "The model incorporates execution output into its response.",
      "The model determines that code execution is useful.",
      "The generated code runs in the sandbox.",
      "The application includes code_interpreter in the tools list.",
      "The model generates Python code for the task."
    ],
    correct: [
      "The application includes code_interpreter in the tools list.",
      "The model determines that code execution is useful.",
      "The model generates Python code for the task.",
      "The generated code runs in the sandbox.",
      "The model incorporates execution output into its response."
    ],
    rationale: "The tool is first made available, after which the model chooses it, writes code, receives sandbox output, and uses that output in the answer."
  },
  {
    id: "G15",
    sectionId: "general",
    unit: "Unit 3",
    domain: "Operate code interpreter responsibly",
    type: "multiple",
    prompt: "Which four practices improve a code_interpreter implementation? Select four answers.",
    options: [
      "Describe the input format and expected output clearly.",
      "Review generated code and results for correctness.",
      "Monitor token and execution costs.",
      "Design for timeouts, unavailable libraries, and data-size limits.",
      "Assume sandbox output is authoritative for every high-stakes decision.",
      "Ask the sandbox to download missing packages from arbitrary websites."
    ],
    correct: [
      "Describe the input format and expected output clearly.",
      "Review generated code and results for correctness.",
      "Monitor token and execution costs.",
      "Design for timeouts, unavailable libraries, and data-size limits."
    ],
    selectCount: 4,
    rationale: "Specific prompts, validation, cost monitoring, and robust limit handling improve reliability. The sandbox has no external network, and high-stakes results still need appropriate review."
  },
  {
    id: "G16",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use web search",
    type: "single",
    prompt: "When is web_search more appropriate than relying only on model training data?",
    options: [
      "When the answer depends on current, publicly available information.",
      "When the answer must come only from a confidential internal policy file.",
      "When Python must calculate statistics without network access.",
      "When the application must execute a private transaction."
    ],
    correct: "When the answer depends on current, publicly available information.",
    rationale: "Web search retrieves fresh public information. Private documents belong in controlled retrieval, calculations fit code interpreter, and transactions should use authorized application logic."
  },
  {
    id: "G17",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use web search",
    type: "multiple",
    prompt: "Which four scenarios are good candidates for web_search? Select four answers.",
    options: [
      "Summarize a breaking technology announcement.",
      "Compare recently published product prices.",
      "Check whether public regulations or guidance changed.",
      "Verify a public claim against reputable current sources.",
      "Retrieve an unpublished employee handbook stored privately.",
      "Approve a refund in a private order system."
    ],
    correct: [
      "Summarize a breaking technology announcement.",
      "Compare recently published product prices.",
      "Check whether public regulations or guidance changed.",
      "Verify a public claim against reputable current sources."
    ],
    selectCount: 4,
    rationale: "Web search is designed for recent, external, publicly indexable information. Private content and business actions need different tools."
  },
  {
    id: "G18",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Understand web search behavior",
    type: "matching",
    prompt: "Match each web_search stage to what happens.",
    items: [
      "Question evaluation",
      "Query generation",
      "Result review",
      "Response generation"
    ],
    options: [
      "The model determines whether fresh web information is needed.",
      "The model formulates one or more searches based on user intent.",
      "Relevant public pages are selected and summarized.",
      "Search findings are incorporated into a source-grounded answer."
    ],
    correct: [
      "The model determines whether fresh web information is needed.",
      "The model formulates one or more searches based on user intent.",
      "Relevant public pages are selected and summarized.",
      "Search findings are incorporated into a source-grounded answer."
    ],
    rationale: "Web search combines tool selection, automatic query generation, source review, and answer synthesis in one response flow."
  },
  {
    id: "G19",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Evaluate web-grounded output",
    type: "yesno",
    prompt: "For each statement about web_search output, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Source citations or annotations help users inspect the evidence behind an answer.",
      "Public-web source quality can vary, so critical claims may require independent verification.",
      "Repeated searches are guaranteed to return identical content and wording.",
      "Regional, policy, or network restrictions can affect web-search availability."
    ],
    correct: [
      "Yes",
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Citations improve transparency, but public sources can vary and change over time. Availability and results can also be affected by environment and policy restrictions."
  },
  {
    id: "G20",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Use web search",
    type: "order",
    prompt: "Arrange a sound workflow for answering a time-sensitive public-information question.",
    items: [
      "Render the answer with its citation annotations as inspectable sources.",
      "Construct the Responses API request with web_search declared.",
      "Analyze the question and define the required current time scope.",
      "Let the service search and retrieve relevant public-web evidence.",
      "Independently verify material high-stakes claims before acting."
    ],
    correct: [
      "Analyze the question and define the required current time scope.",
      "Construct the Responses API request with web_search declared.",
      "Let the service search and retrieve relevant public-web evidence.",
      "Render the answer with its citation annotations as inspectable sources.",
      "Independently verify material high-stakes claims before acting."
    ],
    rationale: "The stages are intentionally distinct: analyze the time scope, construct the tool-enabled request, let the service retrieve evidence, render citation annotations, and independently verify consequential claims before action."
  },
  {
    id: "G21",
    sectionId: "general",
    unit: "Unit 4",
    domain: "Operate web search efficiently",
    type: "multiple",
    prompt: "Which four practices improve web_search quality or operations? Select four answers.",
    options: [
      "Specify words such as current, latest, or a date range when recency matters.",
      "Request reputable or official sources when accuracy matters.",
      "Treat retrieved page content as untrusted, keep secrets out of tool-visible context, and do not let page text override trusted instructions.",
      "Track retrieval latency, token usage, and cost.",
      "Treat every indexed page as equally trustworthy.",
      "Use web_search for confidential documents that are not public."
    ],
    correct: [
      "Specify words such as current, latest, or a date range when recency matters.",
      "Request reputable or official sources when accuracy matters.",
      "Treat retrieved page content as untrusted, keep secrets out of tool-visible context, and do not let page text override trusted instructions.",
      "Track retrieval latency, token usage, and cost."
    ],
    selectCount: 4,
    rationale: "Time scope, source expectations, a firm trust boundary, and telemetry improve usefulness and safety. Public pages can contain prompt injection or misleading content, so retrieved text is data rather than trusted instructions, and secrets should not enter tool-visible context."
  },
  {
    id: "G22",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Use file search",
    type: "single",
    prompt: "Which tool should an application use when answers must be grounded in its own uploaded policy documents?",
    options: [
      "file_search",
      "web_search",
      "code_interpreter",
      "function without a document index"
    ],
    correct: "file_search",
    rationale: "File search retrieves relevant passages from uploaded, indexed documents. It is the official module-assessment answer for policy-document grounding."
  },
  {
    id: "G23",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Prepare content for file search",
    type: "order",
    prompt: "Arrange the basic file_search setup and request flow.",
    items: [
      "Submit a response request that declares file_search and the vector store ID.",
      "Create a vector store for the document collection.",
      "The service injects relevant retrieved passages for answer generation.",
      "Upload files and wait for indexing to complete."
    ],
    correct: [
      "Create a vector store for the document collection.",
      "Upload files and wait for indexing to complete.",
      "Submit a response request that declares file_search and the vector store ID.",
      "The service injects relevant retrieved passages for answer generation."
    ],
    rationale: "Documents must be stored and indexed before a response can search them. The request identifies the vector store, and retrieved passages become grounding context for the model."
  },
  {
    id: "G24",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Configure file search",
    type: "matching",
    prompt: "Match each file_search element to its purpose.",
    items: [
      "vector_stores.create()",
      "upload_and_poll()",
      "vector_store_ids",
      "include=[\"file_search_call.results\"]"
    ],
    options: [
      "Creates a named searchable document collection.",
      "Uploads content and waits for processing and indexing to finish.",
      "Scopes a file_search tool to one or more indexed collections.",
      "Returns retrieval details for development, debugging, or traceability."
    ],
    correct: [
      "Creates a named searchable document collection.",
      "Uploads content and waits for processing and indexing to finish.",
      "Scopes a file_search tool to one or more indexed collections.",
      "Returns retrieval details for development, debugging, or traceability."
    ],
    rationale: "Creation, ingestion, request scoping, and optional result inspection are separate parts of the file-search workflow."
  },
  {
    id: "G25",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Understand file search",
    type: "multiple",
    prompt: "Which four statements describe file_search capabilities? Select four answers.",
    options: [
      "It can ground answers in private or domain-specific uploaded documents.",
      "It performs semantic retrieval rather than relying only on exact keywords.",
      "It searches indexed collections represented by vector stores.",
      "It can expose matched retrieval results for debugging and traceability.",
      "It guarantees a correct answer even when the source documents omit the needed fact.",
      "It automatically searches every file in the user's computer."
    ],
    correct: [
      "It can ground answers in private or domain-specific uploaded documents.",
      "It performs semantic retrieval rather than relying only on exact keywords.",
      "It searches indexed collections represented by vector stores.",
      "It can expose matched retrieval results for debugging and traceability."
    ],
    selectCount: 4,
    rationale: "File search works over deliberately uploaded and indexed collections and can surface retrieval evidence. Its quality is bounded by document coverage and retrieval relevance."
  },
  {
    id: "G26",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Maintain file-search grounding",
    type: "yesno",
    prompt: "For each statement about file_search quality, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "Clean, current source documents generally improve retrieval quality.",
      "Updated source content may need re-indexing before the changes are searchable.",
      "A very large mixed-domain store always produces more focused matches.",
      "Sensitive or high-stakes answers can still require human review."
    ],
    correct: [
      "Yes",
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Source quality, coverage, indexing freshness, and collection scope affect retrieval. More mixed content can reduce focus, and grounding does not eliminate review requirements."
  },
  {
    id: "G27",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Inspect file-search retrieval",
    type: "single",
    prompt: "Which request option helps a developer inspect the passages returned by file_search?",
    options: [
      "include=[\"file_search_call.results\"]",
      "tool_choice=\"code_interpreter\"",
      "previous_response_id=vector_store.id",
      "stream=False only"
    ],
    correct: "include=[\"file_search_call.results\"]",
    rationale: "Including `file_search_call.results` exposes retrieval results for debugging and traceability. The other parameters do not request retrieved passages."
  },
  {
    id: "G28",
    sectionId: "general",
    unit: "Unit 5",
    domain: "Design file-search collections",
    type: "multiple",
    prompt: "Which three practices support effective and secure file_search collections? Select three answers.",
    options: [
      "Separate unrelated domains into appropriately scoped vector stores.",
      "Authorize the signed-in caller in application code and pass only vector_store_ids that caller is permitted to search.",
      "Remove or replace stale documents and re-index changed content.",
      "Mix HR, legal, engineering, and public data into every store regardless of audience.",
      "Pass every vector_store_id and rely on the prompt to hide unauthorized content."
    ],
    correct: [
      "Separate unrelated domains into appropriately scoped vector stores.",
      "Authorize the signed-in caller in application code and pass only vector_store_ids that caller is permitted to search.",
      "Remove or replace stale documents and re-index changed content."
    ],
    selectCount: 3,
    rationale: "Domain scoping and content lifecycle management improve relevance. The application must authorize the caller and expose only permitted vector_store_ids; prompt instructions and citations are not access controls."
  },
  {
    id: "G29",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Implement function calling",
    type: "single",
    prompt: "What happens when a model selects a developer-defined function tool?",
    options: [
      "The model emits a structured function_call, and the application decides whether and how to execute it.",
      "The model automatically runs arbitrary application code with the user's permissions.",
      "The Responses service grants the function access to every connected system.",
      "The function result appears without a follow-up model request."
    ],
    correct: "The model emits a structured function_call, and the application decides whether and how to execute it.",
    rationale: "The model requests a call; it does not run business logic. Client code validates the request, invokes approved logic, and returns output for the model to continue."
  },
  {
    id: "G30",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Understand function-call data",
    type: "matching",
    prompt: "Match each function-calling element to its role.",
    items: [
      "Function name",
      "Function description",
      "Function arguments",
      "call_id",
      "function_call_output"
    ],
    options: [
      "Identifies which approved operation the model is requesting.",
      "Helps the model understand when the operation is appropriate.",
      "Carries model-generated input values that application code must validate.",
      "Correlates a returned result with the specific function request.",
      "Carries the application's execution result back into the conversation."
    ],
    correct: [
      "Identifies which approved operation the model is requesting.",
      "Helps the model understand when the operation is appropriate.",
      "Carries model-generated input values that application code must validate.",
      "Correlates a returned result with the specific function request.",
      "Carries the application's execution result back into the conversation."
    ],
    rationale: "A function definition guides selection, generated arguments describe the requested work, and the call ID connects the application result to the original call."
  },
  {
    id: "G31",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Implement function calling",
    type: "order",
    prompt: "Arrange the function-calling loop in the correct order.",
    items: [
      "Submit all function_call_output items together in a follow-up request that sets previous_response_id.",
      "For every collected call, validate the function name and arguments, authorize the caller, and execute only approved code.",
      "Declare the functions and send the initial Responses API request.",
      "Inspect response.output and collect every function_call item.",
      "Build one function_call_output item for each original call_id.",
      "Repeat the loop until a response contains no function_call items, then use the final answer."
    ],
    correct: [
      "Declare the functions and send the initial Responses API request.",
      "Inspect response.output and collect every function_call item.",
      "For every collected call, validate the function name and arguments, authorize the caller, and execute only approved code.",
      "Build one function_call_output item for each original call_id.",
      "Submit all function_call_output items together in a follow-up request that sets previous_response_id.",
      "Repeat the loop until a response contains no function_call items, then use the final answer."
    ],
    rationale: "A robust orchestrator inspects all output items, processes every requested call through application validation and authorization, returns one correlated output per call_id in one follow-up, and repeats because later responses can request more functions."
  },
  {
    id: "G32",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Secure function execution",
    type: "multiple",
    prompt: "Which four controls are appropriate before executing a requested function? Select four answers.",
    options: [
      "Allowlist recognized function names.",
      "Validate argument types, ranges, and business rules.",
      "Check the caller's authorization for the requested action.",
      "Require confirmation or approval for high-impact operations.",
      "Trust all model-generated arguments because the response is structured.",
      "Give every function administrator-level credentials to prevent failures."
    ],
    correct: [
      "Allowlist recognized function names.",
      "Validate argument types, ranges, and business rules.",
      "Check the caller's authorization for the requested action.",
      "Require confirmation or approval for high-impact operations."
    ],
    selectCount: 4,
    rationale: "Structured output is not trusted input. The application should constrain functions, validate arguments, enforce user permissions, and add approval controls for consequential actions."
  },
  {
    id: "G33",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Understand function calling",
    type: "yesno",
    prompt: "For each statement about function calling, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "In a Responses API function tool, name, description, parameters, and optional strict are siblings of type: \"function\".",
      "tool_choice: \"auto\" forces the model to use at least one configured tool.",
      "tool_choice: \"required\" requires the model to use at least one configured tool.",
      "strict: true eliminates the application's need to validate arguments and authorize the requested action."
    ],
    correct: [
      "Yes",
      "No",
      "Yes",
      "No"
    ],
    rationale: "Responses function fields use the flat tool shape. `auto` permits a direct answer or tool use, whereas `required` requires at least one tool. Strict schema adherence reduces malformed arguments but never replaces application validation or authorization."
  },
  {
    id: "G34",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Return function output",
    type: "single",
    prompt: "Why must a function_call_output include the call_id from the model's function_call item?",
    options: [
      "To associate the application result with the exact function request that produced it.",
      "To authenticate the application to Microsoft Entra ID.",
      "To select the model deployment for the next request.",
      "To identify a vector store for file_search."
    ],
    correct: "To associate the application result with the exact function request that produced it.",
    rationale: "The call ID is the correlation identifier between a function request and its output. Authentication, model routing, and vector-store selection use different configuration."
  },
  {
    id: "G35",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Operate functions safely",
    type: "multiple",
    prompt: "Which four operational practices improve a function-tool implementation? Select four answers.",
    options: [
      "Keep functions focused and single-purpose.",
      "Return clear, bounded error results the model can reason about.",
      "Log calls, latency, outcomes, and failures for audit and debugging.",
      "Apply timeouts and idempotency protections where appropriate.",
      "Expose internal stack traces and secrets in function outputs.",
      "Retry every state-changing action indefinitely."
    ],
    correct: [
      "Keep functions focused and single-purpose.",
      "Return clear, bounded error results the model can reason about.",
      "Log calls, latency, outcomes, and failures for audit and debugging.",
      "Apply timeouts and idempotency protections where appropriate."
    ],
    selectCount: 4,
    rationale: "Narrow contracts, safe errors, observability, and resilience controls make integrations easier to test and govern. Sensitive diagnostics and uncontrolled retries create security or duplication risks."
  },
  {
    id: "G36",
    sectionId: "general",
    unit: "Unit 6",
    domain: "Choose and combine tools",
    type: "matching",
    prompt: "Match each requirement to the best primary tool.",
    items: [
      "Calculate correlations in an uploaded CSV.",
      "Find today's public transit advisory.",
      "Answer from an indexed internal maintenance manual.",
      "Submit an authorized maintenance work order through an internal API."
    ],
    options: [
      "code_interpreter",
      "web_search",
      "file_search",
      "function"
    ],
    correct: [
      "code_interpreter",
      "web_search",
      "file_search",
      "function"
    ],
    rationale: "The requirement determines the tool: computation, public recency, private retrieval, or controlled business-system action. An application can declare multiple tools when a scenario spans these needs."
  },
  {
    id: "G37",
    sectionId: "general",
    unit: "Unit 7",
    domain: "Complete the tools exercise",
    type: "order",
    prompt: "According to the currently documented hands-on exercise, arrange these major stages.",
    items: [
      "Run the app and test a current destination question followed by a brochure-specific question.",
      "Configure the Azure OpenAI endpoint and exact model deployment name.",
      "Create the travel-brochures vector store and upload the brochure PDFs.",
      "Deploy gpt-5.2 in a Microsoft Foundry project.",
      "Call responses.create() with web_search, file_search, and response-ID state.",
      "Delete the resource group when the resources are no longer needed."
    ],
    correct: [
      "Deploy gpt-5.2 in a Microsoft Foundry project.",
      "Configure the Azure OpenAI endpoint and exact model deployment name.",
      "Create the travel-brochures vector store and upload the brochure PDFs.",
      "Call responses.create() with web_search, file_search, and response-ID state.",
      "Run the app and test a current destination question followed by a brochure-specific question.",
      "Delete the resource group when the resources are no longer needed."
    ],
    rationale: "The currently documented lab uses gpt-5.2 and moves from project and model setup to client configuration, vector-store ingestion, a combined tool request, conversational testing, and resource cleanup. Lab versions can change, so follow the current exercise when performing it."
  },
  {
    id: "G38",
    sectionId: "general",
    unit: "Unit 7",
    domain: "Configure the tools exercise",
    type: "single",
    prompt: "Which connection pattern does the exercise use for its Python application?",
    options: [
      "The OpenAI SDK with the Azure OpenAI endpoint and Microsoft Entra ID.",
      "The OpenAI SDK with the Foundry project endpoint and Microsoft Entra ID.",
      "The Azure AI Projects SDK with the Foundry project endpoint and Microsoft Entra ID.",
      "The OpenAI SDK with the Azure OpenAI endpoint and an API key copied into source code."
    ],
    correct: "The OpenAI SDK with the Azure OpenAI endpoint and Microsoft Entra ID.",
    rationale: "The documented exercise uses the OpenAI SDK with the Azure OpenAI endpoint and creates an Entra token provider. The other choices change the endpoint, SDK, or authentication pattern used by the lab."
  },
  {
    id: "G39",
    sectionId: "general",
    unit: "Unit 7",
    domain: "Implement the tools exercise",
    type: "multiple",
    prompt: "Which four implementation details are part of the documented tools exercise? Select four answers.",
    options: [
      "The vector store is named travel-brochures.",
      "The app uploads PDF files from the brochures folder and waits for ingestion.",
      "The Responses request declares both file_search and web_search.",
      "The app saves response.id and supplies it as previous_response_id on the next turn.",
      "The code_interpreter sandbox downloads the travel brochures from the web.",
      "The model directly deletes the Azure resource group after chat ends."
    ],
    correct: [
      "The vector store is named travel-brochures.",
      "The app uploads PDF files from the brochures folder and waits for ingestion.",
      "The Responses request declares both file_search and web_search.",
      "The app saves response.id and supplies it as previous_response_id on the next turn."
    ],
    selectCount: 4,
    rationale: "The lab builds a named vector store, uploads local PDFs, enables two retrieval tools, and chains response IDs for follow-up context. Cleanup is a deliberate Azure administration step, not a model tool action."
  },
  {
    id: "G40",
    sectionId: "general",
    unit: "Unit 7",
    domain: "Validate and clean up the tools exercise",
    type: "yesno",
    prompt: "For each statement about the exercise, select Yes if the statement is true. Otherwise, select No.",
    items: [
      "A question about events next month should normally exercise web_search.",
      "A follow-up asking which hotels Margie's Travel offers should normally exercise file_search.",
      "previous_response_id automatically carries the prior request's instructions, so the app can omit them on later turns.",
      "Deleting the resource group is appropriate when the lab resources are no longer needed."
    ],
    correct: [
      "Yes",
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "The lab tests current public retrieval, private brochure retrieval, response-ID conversation state, and cleanup. `previous_response_id` chains conversation items, but prior instructions are not automatically carried forward; resend instructions on later requests when they must continue to apply."
  },
  {
    id: "G41",
    sectionId: "general",
    unit: "Unit 8",
    domain: "Apply the official module assessment",
    type: "matching",
    prompt: "Match each official module-assessment scenario to the correct response.",
    items: [
      "Answer questions from uploaded policy documents.",
      "Handle a function_call returned by the model.",
      "Run Python to help solve a task."
    ],
    options: [
      "Use file_search.",
      "Run the approved function in application code and return function_call_output.",
      "Use code_interpreter in its sandboxed runtime."
    ],
    correct: [
      "Use file_search.",
      "Run the approved function in application code and return function_call_output.",
      "Use code_interpreter in its sandboxed runtime."
    ],
    rationale: "These are the three concepts tested by the official assessment: private document retrieval, the client-controlled function loop, and sandboxed Python execution."
  },
  {
    id: "G42",
    sectionId: "general",
    unit: "Unit 9",
    domain: "Summarize the shared tool pattern",
    type: "order",
    prompt: "Arrange the shared implementation pattern summarized by the module.",
    items: [
      "Return tool output when the selected tool requires client-side execution.",
      "Validate the answer and tool behavior for correctness and safety.",
      "Define the allowed tool or tools in the request.",
      "Let the model decide when an allowed tool is appropriate."
    ],
    correct: [
      "Define the allowed tool or tools in the request.",
      "Let the model decide when an allowed tool is appropriate.",
      "Return tool output when the selected tool requires client-side execution.",
      "Validate the answer and tool behavior for correctness and safety."
    ],
    rationale: "Across tools, the application declares capabilities, the model normally selects among them, client-side tools require returned output, and the application remains responsible for validation and safety."
  },
  {
    id: "CT01",
    sectionId: "case-contoso-travel",
    unit: "Units 4 and 5",
    domain: "Combine public and private retrieval",
    type: "multiple",
    prompt: "Which two tools should Contoso declare for current destination events and approved brochure content? Select two answers.",
    options: [
      "web_search",
      "file_search",
      "code_interpreter only",
      "A function that grants anonymous access to the brochure repository"
    ],
    correct: [
      "web_search",
      "file_search"
    ],
    selectCount: 2,
    rationale: "Web search supplies current public destination information, while file search grounds company-specific answers in indexed brochures. Both can be declared in one Responses request."
  },
  {
    id: "CT02",
    sectionId: "case-contoso-travel",
    unit: "Units 2, 4, and 5",
    domain: "Route travel questions to evidence",
    type: "matching",
    prompt: "Match each travel-assistant need to the best response strategy.",
    items: [
      "Events happening in Seattle next month",
      "Hotels offered in Contoso's private brochure",
      "Evidence for a current public claim",
      "Evidence for a brochure-specific claim"
    ],
    options: [
      "Use web_search.",
      "Use file_search over the authorized vector store.",
      "Expose or render the relevant web citation or annotation.",
      "Inspect file-search results or citations from the indexed document."
    ],
    correct: [
      "Use web_search.",
      "Use file_search over the authorized vector store.",
      "Expose or render the relevant web citation or annotation.",
      "Inspect file-search results or citations from the indexed document."
    ],
    rationale: "The assistant should route current public facts and private catalog facts to different retrieval sources and preserve evidence appropriate to each."
  },
  {
    id: "CT03",
    sectionId: "case-contoso-travel",
    unit: "Units 2, 5, and 7",
    domain: "Secure and operate a multi-tool assistant",
    type: "yesno",
    prompt: "For each proposed Contoso design choice, select Yes if it is appropriate. Otherwise, select No.",
    items: [
      "Use Microsoft Entra ID, authorize the signed-in caller in application code, and pass only permitted vector_store_ids.",
      "Retain the last response ID so a follow-up such as 'Which hotels are there?' has conversational context.",
      "Treat any public search result as authoritative without reviewing source quality.",
      "Measure retrieval latency, tokens, and cost for requests that can invoke two tools."
    ],
    correct: [
      "Yes",
      "Yes",
      "No",
      "Yes"
    ],
    rationale: "Identity plus application-enforced authorization, permitted vector_store_ids, response chaining, and telemetry support a secure service. Prompts are not document access controls, and public grounding does not make every source authoritative."
  },
  {
    id: "CT04",
    sectionId: "case-contoso-travel",
    unit: "Units 5 and 7",
    domain: "Prepare and test travel grounding",
    type: "order",
    prompt: "Arrange Contoso's private-content setup and conversational test.",
    items: [
      "Ask a follow-up brochure-specific question using the saved previous response ID.",
      "Upload approved brochures and wait for indexing.",
      "Create a vector store scoped to the travel brochures.",
      "Save the first response ID.",
      "Submit a current destination question with web_search and file_search available.",
      "Verify that each claim is supported by the appropriate source."
    ],
    correct: [
      "Create a vector store scoped to the travel brochures.",
      "Upload approved brochures and wait for indexing.",
      "Submit a current destination question with web_search and file_search available.",
      "Save the first response ID.",
      "Ask a follow-up brochure-specific question using the saved previous response ID.",
      "Verify that each claim is supported by the appropriate source."
    ],
    rationale: "The private collection must exist and be indexed before retrieval. The first response establishes context, the saved ID links the follow-up, and source verification closes the test."
  },
  {
    id: "FO01",
    sectionId: "case-fabrikam-operations",
    unit: "Units 3 and 6",
    domain: "Choose controlled computation and actions",
    type: "matching",
    prompt: "Match each Fabrikam requirement to the best design choice.",
    items: [
      "Calculate statistics from an uploaded CSV",
      "Read current inventory from an internal API",
      "Create a purchase order",
      "Record tool activity for governance"
    ],
    options: [
      "Use code_interpreter for sandboxed analysis.",
      "Expose a focused read-only function backed by the inventory API.",
      "Use a separately authorized function with confirmation and idempotency controls.",
      "Log function name, caller, arguments after redaction, latency, outcome, and call ID."
    ],
    correct: [
      "Use code_interpreter for sandboxed analysis.",
      "Expose a focused read-only function backed by the inventory API.",
      "Use a separately authorized function with confirmation and idempotency controls.",
      "Log function name, caller, arguments after redaction, latency, outcome, and call ID."
    ],
    rationale: "Computation belongs in the sandbox, while private reads and state-changing actions belong behind focused application functions. Higher-impact operations need stronger controls and all tool activity needs appropriate auditability."
  },
  {
    id: "FO02",
    sectionId: "case-fabrikam-operations",
    unit: "Unit 6",
    domain: "Validate high-impact function calls",
    type: "multiple",
    prompt: "The model requests create_purchase_order. Which four checks should Fabrikam perform before execution? Select four answers.",
    options: [
      "Confirm that create_purchase_order is on the function allowlist.",
      "Validate item identifiers, quantities, limits, and argument types.",
      "Verify that the signed-in manager is authorized for the requested purchase.",
      "Require the configured confirmation or approval for the transaction.",
      "Execute immediately because the model returned valid JSON.",
      "Replace the manager's identity with an unrestricted service administrator."
    ],
    correct: [
      "Confirm that create_purchase_order is on the function allowlist.",
      "Validate item identifiers, quantities, limits, and argument types.",
      "Verify that the signed-in manager is authorized for the requested purchase.",
      "Require the configured confirmation or approval for the transaction."
    ],
    selectCount: 4,
    rationale: "The app must validate both the requested operation and its arguments, enforce the user's authority, and apply approval policy. Structured model output is not proof of safety or permission."
  },
  {
    id: "FO03",
    sectionId: "case-fabrikam-operations",
    unit: "Units 3 and 6",
    domain: "Respect sandbox boundaries",
    type: "single",
    prompt: "An analyst asks code_interpreter to download live inventory directly from Fabrikam's private API. What should the team do?",
    options: [
      "Use an authorized application function to retrieve the data, then provide only the necessary data to the analysis flow.",
      "Declare the private endpoint as a function and assume the model service will invoke it directly.",
      "Use web_search with the private API hostname because it is already a retrieval tool.",
      "Upload an unrestricted inventory export to a shared sandbox for reuse by every analyst."
    ],
    correct: "Use an authorized application function to retrieve the data, then provide only the necessary data to the analysis flow.",
    rationale: "In the documented module configuration, code interpreter is not the component that authenticates to and calls Fabrikam's private API. A controlled application function can enforce identity, authorization, and data minimization before analysis occurs."
  },
  {
    id: "FO04",
    sectionId: "case-fabrikam-operations",
    unit: "Unit 6",
    domain: "Complete an audited function-call loop",
    type: "order",
    prompt: "Arrange the secure purchase-order function workflow.",
    items: [
      "Send the bounded result as function_call_output with the matching call_id.",
      "The model emits a create_purchase_order function_call.",
      "The model produces a final user-facing response.",
      "Validate the function name, arguments, caller authorization, and approval state.",
      "Execute the idempotent business operation and record an audit event.",
      "Submit the prompt with the focused function definition available."
    ],
    correct: [
      "Submit the prompt with the focused function definition available.",
      "The model emits a create_purchase_order function_call.",
      "Validate the function name, arguments, caller authorization, and approval state.",
      "Execute the idempotent business operation and record an audit event.",
      "Send the bounded result as function_call_output with the matching call_id.",
      "The model produces a final user-facing response."
    ],
    rationale: "A safe loop exposes a narrow function, treats the model output as a request, validates before execution, performs and logs the approved action once, correlates the output, and lets the model formulate the final response."
  }
];
