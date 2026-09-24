# Module 4 — Develop generative AI apps that use tools

> **Official module:** [Develop generative AI apps that use tools](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/)<br>
> **Level:** Beginner · **Roles:** AI Engineer and Developer · **Length:** 1 hour · **XP:** 1,000 · **Units:** 9<br>
> **Notes reviewed:** 2026-09-24

[Open the interactive flashcards and practice exam](index.html)

These notes cover every unit in the Microsoft Learn module and expand the implementation boundaries that matter in a real Python application. The module uses the OpenAI Responses API with Microsoft Foundry model deployments. Models, regional availability, tool support, SDK surfaces, pricing, and portal labels change frequently, so verify deployment-specific capabilities in the current Foundry model catalog before production use.

> **Terminology warning:** A tool declared in a Responses API prompt is not the same thing as the capitalized product name **Foundry Tools**. It is also not automatically a persisted Foundry agent. These three ideas are separated explicitly below.

## Learning objectives

The official objectives are to:

- [ ] Describe the capabilities of generative AI tools.
- [ ] Use the `code_interpreter` tool to run code and analyze data.
- [ ] Use the `web_search` tool to retrieve real-time information from the internet.
- [ ] Use the `file_search` tool to access and analyze files.
- [ ] Use the `function` tool to run custom code.

The module assumes that you:

- Are familiar with Microsoft Foundry and generative AI models.
- Have some programming experience.

## Module map

| Unit | Topic | Duration | Central question |
| ---: | --- | ---: | --- |
| 1 | Introduction | 1 min | Why do model-driven applications need tools? |
| 2 | What are tools? | 5 min | How does an application offer tools to a model through the Responses API? |
| 3 | Use the `code_interpreter` tool | 5 min | How can a model generate and run Python in a sandbox? |
| 4 | Use the `web_search` tool | 5 min | How can a response use timely, public-web information? |
| 5 | Use the `file_search` tool | 5 min | How can a response be grounded in indexed private documents? |
| 6 | Use the `function` tool | 5 min | How does an application safely execute model-requested business logic? |
| 7 | Exercise - Create a generative AI chat app that uses tools | 30 min | How do web and file search work together in a travel assistant? |
| 8 | Module assessment | 3 min | Can you distinguish document search, function execution, and sandboxed code? |
| 9 | Summary | 1 min | Can you choose and implement the right tool boundary? |

## Three concepts that must not be conflated

| Concept | Where configuration lives | Who invokes or executes it? | Persistence |
| --- | --- | --- | --- |
| **Client-managed prompt tools** | The application's `responses.create(..., tools=[...])` request | The model selects a tool; the service runs hosted tools, while the client runs custom functions | Re-declared by application code as needed; not a named agent by itself |
| **Foundry Tools** | Azure service/resource configuration | Azure AI APIs expose specialized capabilities to apps and agents | Resource or connection configuration can persist |
| **Persisted Foundry agent** | A named agent definition containing model, instructions, tools, and related configuration | Foundry Agent Service orchestrates the configured agent | Persisted and versioned independently of one prompt request |

The official introduction focuses on the first row: a client application submits model input and a list of available tools. That pattern is an important bridge to agentic development, but it does not itself create a named agent.

Current Foundry guidance can describe an instructions-plus-tools definition that lives in application code as an **ephemeral agent**. It is reconstructed by the process and is still different from an agent definition persisted and versioned in Foundry Agent Service.

## Hosted tools versus client-executed functions

The four tools in this module do not all cross the same trust boundary.

| Tool | Execution owner | Application responsibility |
| --- | --- | --- |
| `code_interpreter` | Responses service in a sandboxed Python container | Declare it, provide appropriate input/files, inspect output, validate results, and manage cost/data risk |
| `web_search` | Responses service through managed web grounding | Declare it, preserve citations, evaluate sources, and account for terms, latency, cost, and data flow |
| `file_search` | Responses service against an indexed vector store | Upload/index files, wait for readiness, supply vector-store IDs, inspect grounding, and clean up files/stores |
| `function` | **Your application** | Define the schema, validate the requested call, authorize it, execute code, and send a matching `function_call_output` |

> **High-yield rule:** A model can request a custom function call, but it does not run your function. Your code owns validation, authorization, side effects, error handling, and the return value.

## Tool-enabled response flow

1. The application authenticates and calls `client.responses.create()`.
2. The request supplies a deployment name, user input, instructions, and a `tools` array.
3. The model decides whether a tool is useful unless `tool_choice` imposes a different rule.
4. A hosted tool runs within the service, or the model emits a function call for the client to handle.
5. Tool results become model context.
6. The model produces grounded output.
7. The application validates the answer, exposes citations or artifacts as appropriate, logs safe operational metadata, and performs cleanup.

---

## Unit 1 — Introduction

[Open Unit 1](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/01-introduction)

Generative models are powerful at interpreting and generating text, but their internal knowledge has a boundary. Training data alone cannot reliably provide current facts, private organizational knowledge, or access to a business process.

Tools bridge that boundary. They allow an application to:

- **Access timely information:** retrieve facts that can change after model training.
- **Take actions:** call APIs, create records, send notifications, or trigger workflows.
- **Ground responses:** supply authoritative evidence rather than relying only on model memory.
- **Extend functionality:** connect model reasoning to databases and application services.
- **Coordinate workflows:** combine reasoning with multiple operations.

### The client-managed scope of this module

The module places tool configuration inside application requests. Conceptually:

```text
user → client application → Responses API + tool declarations
                              ├─ hosted tool executes in service
                              └─ function call returns to client for execution
```

This is different from creating a persisted agent whose model, instructions, and tools are stored as a named resource. It is also different from invoking an Azure API marketed as a Foundry Tool.

### Why tools do not remove model risk

Tools can improve freshness and grounding, but they do not guarantee truth or safety:

- Search results can be incomplete, low quality, malicious, or out of date.
- Uploaded documents can contain errors or conflicting instructions.
- Generated code can contain logic errors.
- Function arguments can be malformed or unsafe.
- A grounded answer can still misinterpret its evidence.

Use allowlists, schema validation, authorization, least privilege, confirmation for consequential actions, output review, telemetry, and testing appropriate to the scenario.

---

## Unit 2 — What are tools?

[Open Unit 2](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/02-what-are-tools)

Microsoft Foundry Models includes models that support tool calling. After selecting and deploying a compatible model, a client can offer tools through the OpenAI Responses API.

### The basic request shape

```python
response = client.responses.create(
    model=model_deployment,
    instructions="You are a helpful AI assistant.",
    input="Find information about vintage computers.",
    tools=[
        {"type": "web_search"},
        {
            "type": "file_search",
            "vector_store_ids": [vector_store_id],
        },
    ],
)

print(response.output_text)
```

The `model` value is normally the **deployment name**, not necessarily the catalog model name. The deployment and region must support the requested tools.

### Tool selection

By default, the model chooses whether to use a tool and which available tool fits the prompt. Good descriptions and instructions improve this decision. The API also supports tool-choice controls, but forcing a tool is not a substitute for validating that its result is relevant and correct.

| User need | Best starting tool |
| --- | --- |
| Calculate, transform data, or generate a chart in Python | `code_interpreter` |
| Retrieve current information from the public web | `web_search` |
| Answer from uploaded policies, manuals, brochures, or contracts | `file_search` |
| Query an application API or perform custom business logic | `function` |

### Endpoint and authentication used in this module's lab

The official exercise deliberately uses the **Azure OpenAI v1 endpoint** with the OpenAI SDK:

```text
https://{resource-name}.openai.azure.com/openai/v1/
```

That is not the Foundry project endpoint:

```text
https://{resource-name}.services.ai.azure.com/api/projects/{project-name}
```

The project endpoint is the broader project-scoped entry point for Foundry-native capabilities and the full Foundry agent/tool surface. The Azure OpenAI endpoint is appropriate here because the lab uses an OpenAI model and standard Responses API tools. Choose an endpoint according to the capability required; do not transform one URL into the other.

The project URL displayed by Foundry is a **base project endpoint**. A direct Responses request through that surface is sent to:

```text
{project_endpoint}/openai/v1/responses
```

For example, append `/openai/v1/responses` to the displayed `https://{resource}.services.ai.azure.com/api/projects/{project}` base. Do not append that route to the Azure OpenAI v1 base already ending in `/openai/v1/`.

The lab prefers Microsoft Entra ID. A context manager can make client and credential ownership explicit and still close the credential if client construction or closure fails:

```python
from collections.abc import Iterator
from contextlib import contextmanager

from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from openai import OpenAI


@contextmanager
def openai_client(endpoint: str) -> Iterator[OpenAI]:
    credential = DefaultAzureCredential()
    client: OpenAI | None = None
    try:
        token_provider = get_bearer_token_provider(
            credential,
            "https://ai.azure.com/.default",
        )
        client = OpenAI(
            base_url=endpoint,
            api_key=token_provider,
            max_retries=2,
        )
        yield client
    finally:
        try:
            if client is not None:
                client.close()
        finally:
            credential.close()
```

Although the constructor parameter is named `api_key`, `token_provider` is a callable that supplies short-lived Entra tokens; it is not a static API key. Use the managed lifetime like this:

```python
with openai_client(azure_openai_endpoint) as client:
    response = client.responses.create(
        model=model_deployment,
        input="Explain why tools extend a model's capabilities.",
    )
    print(response.output_text)
```

Tool-heavy calls and file ingestion can take longer than plain text generation. Configure explicit connect/read/overall timeouts for the workload and operational SLO rather than assuming one hard-coded 60-second limit is suitable for every tool.

For an Azure-hosted production workload, prefer an appropriate managed identity and least-privilege role assignments. `DefaultAzureCredential` can use the developer's Azure CLI sign-in locally and workload identity sources in Azure.

### Configuration is not authentication

Environment variables or `.env` files deliver values to the process; they are not a third authentication method. In the official exercise, `.env` contains only:

```dotenv
AZURE_OPENAI_ENDPOINT="https://your-resource.openai.azure.com/openai/v1/"
MODEL_DEPLOYMENT="your-model-deployment-name"
```

The identity comes from `DefaultAzureCredential`, commonly backed by `az login` during local development. Never commit a secret-bearing `.env` file.

---

## Unit 3 — Use the `code_interpreter` tool

[Open Unit 3](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/03-code-interpreter)

The `code_interpreter` tool provides a sandboxed Python environment in which a model can generate and execute code. Instead of only describing a calculation, the model can run it, observe errors or output, revise its approach, and incorporate the result into its answer.

### Capabilities and use cases

| Capability | Example |
| --- | --- |
| Calculation | Solve an equation or verify arithmetic |
| Data analysis | Compute statistics from a CSV |
| Transformation | Convert JSON to CSV |
| Visualization | Generate a chart from uploaded data |
| Simulation | Run numerical or probability experiments |
| Prototyping | Test an algorithm before formal implementation |

Common Python packages such as pandas, NumPy, matplotlib, and `math` may be available. Availability is not unlimited or guaranteed.

### Minimal declaration

```python
response = client.responses.create(
    model=model_deployment,
    instructions=(
        "You are a math tutor. Use the Python tool when executable "
        "calculation improves reliability. Explain the result succinctly."
    ),
    input="What is the square root of 16?",
    tools=[
        {
            "type": "code_interpreter",
            "container": {"type": "auto"},
        }
    ],
)

print(response.output_text)
```

`container: {"type": "auto"}` lets the service create or reuse an active container from the response context.

### Complete Entra-authenticated example

```python
import os

from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from dotenv import load_dotenv
from openai import OpenAI


def require_setting(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"Missing required setting: {name}")
    return value


load_dotenv()
endpoint = require_setting("AZURE_OPENAI_ENDPOINT")
deployment = require_setting("MODEL_DEPLOYMENT")

credential = DefaultAzureCredential()
token_provider = get_bearer_token_provider(
    credential,
    "https://ai.azure.com/.default",
)

try:
    with OpenAI(
        base_url=endpoint,
        api_key=token_provider,
        max_retries=2,
    ) as client:
        response = client.responses.create(
            model=deployment,
            instructions=(
                "Use the Python tool for calculations. State any assumptions "
                "and report the computed result."
            ),
            input="Calculate the mean and population standard deviation of 4, 8, 15, 16, 23, and 42.",
            tools=[
                {
                    "type": "code_interpreter",
                    "container": {"type": "auto"},
                }
            ],
        )
        print(response.output_text)
finally:
    credential.close()
```

### Execution flow

1. The client includes `code_interpreter` in `tools`.
2. The model determines whether Python execution is useful.
3. The model generates Python code.
4. The code runs in a sandboxed container.
5. The model receives execution output or errors.
6. The model can revise the code and then compose its response.

### Boundaries and cleanup

- The Python sandbox has **no arbitrary external network access**.
- Time and memory limits apply.
- Not every package is available.
- Generated code can be incorrect even when it runs successfully.
- Code Interpreter adds charges beyond model-token charges.
- Current Microsoft guidance describes per-minute container billing, a five-minute minimum charge, and a 20-minute idle timeout. Verify current pricing before deployment.
- Auto-created containers expire after their idle period. Explicitly delete separately uploaded file objects when no longer needed, and always close the API client and credential you own.

For financial, medical, safety, or other consequential calculations, independently verify the code, assumptions, units, inputs, and result.

---

## Unit 4 — Use the `web_search` tool

[Open Unit 4](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/04-web-search)

`web_search` lets the model retrieve current public-web information during response generation. It is useful when a fact can change after model training, such as an event, release, price, policy, or market development.

### Minimal declaration

```python
response = client.responses.create(
    model=model_deployment,
    instructions=(
        "Use web search when current information is required. "
        "Prefer authoritative sources and preserve citations."
    ),
    input="What are three major announcements from Microsoft Build this week?",
    tools=[{"type": "web_search"}],
)

print(response.output_text)
```

### How it works

1. The application offers `web_search` in the request.
2. The model evaluates whether freshness is required.
3. The service issues one or more managed search queries.
4. Relevant results are selected.
5. The model synthesizes a grounded response.
6. Output annotations identify cited URLs.

The tool performs managed web grounding. It does not give application code or Code Interpreter unrestricted network access.

### Preserve citations in a user interface

Do not discard the structured annotations and then present grounded text as unsupported prose. The following helper extracts URL citations without assuming that every output item has the same type:

```python
from collections.abc import Iterable
from typing import Any


def iter_url_citations(response: Any) -> Iterable[tuple[str, str]]:
    seen: set[str] = set()
    for item in response.output:
        if item.type != "message":
            continue
        for content_part in item.content:
            if content_part.type != "output_text":
                continue
            for annotation in content_part.annotations:
                if annotation.type != "url_citation":
                    continue
                if annotation.url in seen:
                    continue
                seen.add(annotation.url)
                yield annotation.title, annotation.url
```

Use it after a web-grounded response:

```python
print(response.output_text)
print("\nSources:")
for title, url in iter_url_citations(response):
    print(f"- {title}: {url}")
```

If the application renders HTML, escape untrusted titles and validate URL schemes before creating links.

### Best practices

- Make freshness explicit with a date, range, or words such as “current” or “latest.”
- Ask for authoritative or first-party sources when accuracy matters.
- Preserve inline citations and make them visible and clickable in a user-facing experience.
- Independently verify high-stakes claims.
- Track search requests, latency, cost, and failures.
- Treat retrieved content as untrusted data; it can contain misleading text or prompt-injection attempts.
- Apply domain controls when the API capability and scenario support them.

### Current Microsoft-specific considerations

- Use `{"type": "web_search"}`. The older `web_search_preview` form is supported but not recommended.
- Azure web search uses Grounding with Bing Search and/or Grounding with Bing Custom Search.
- Separate Grounding with Bing terms and charges apply.
- Data sent to this capability can flow outside the application's compliance and geographic boundary; review current Microsoft documentation with the responsible compliance team.
- Results depend on public, indexable content and can change between identical requests.
- A subscription administrator can disable the tool.

> **Model drift:** The official lab currently deploys `gpt-5.2`, while newer web-search reference examples can show `gpt-5.5`. Keep `gpt-5.2` when following the lab, but confirm current regional capacity and that the chosen deployment supports Responses, `web_search`, and `file_search`.

---

## Unit 5 — Use the `file_search` tool

[Open Unit 5](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/05-file-search)

`file_search` grounds a response in documents uploaded to a vector store. It is intended for policy documents, manuals, contracts, product content, internal knowledge, and other domain-specific files.

### Retrieval flow

1. Create a vector store.
2. Upload one or more files.
3. Poll until ingestion completes.
4. Declare `file_search` with the relevant vector-store ID.
5. Ask a focused question.
6. The service retrieves relevant chunks and injects them into model context.
7. The model produces a grounded response.
8. Inspect retrieval results during development and remove files/stores when finished.

File search uses semantic and keyword retrieval, query rewriting, parallel search for complex queries, and reranking. It is more than a literal text search.

### Complete single-document example with best-effort cleanup

```python
import os
from pathlib import Path

from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from dotenv import load_dotenv
from openai import OpenAI


def require_setting(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"Missing required setting: {name}")
    return value


load_dotenv()
endpoint = require_setting("AZURE_OPENAI_ENDPOINT")
deployment = require_setting("MODEL_DEPLOYMENT")
document_path = Path("expenses_policy.pdf")
if not document_path.is_file():
    raise FileNotFoundError(document_path)

credential = DefaultAzureCredential()
token_provider = get_bearer_token_provider(
    credential,
    "https://ai.azure.com/.default",
)

vector_store_id: str | None = None
uploaded_file_id: str | None = None

try:
    with OpenAI(
        base_url=endpoint,
        api_key=token_provider,
        max_retries=2,
    ) as client:
        try:
            vector_store = client.vector_stores.create(name="policy-docs")
            vector_store_id = vector_store.id

            with document_path.open("rb") as file_stream:
                indexed_file = client.vector_stores.files.upload_and_poll(
                    vector_store_id=vector_store_id,
                    file=file_stream,
                )
            uploaded_file_id = indexed_file.id

            response = client.responses.create(
                model=deployment,
                instructions=(
                    "Answer from the indexed policy. If the policy does not "
                    "contain the answer, say so explicitly."
                ),
                input="What is the maximum reimbursable taxi fare?",
                tools=[
                    {
                        "type": "file_search",
                        "vector_store_ids": [vector_store_id],
                    }
                ],
                include=["file_search_call.results"],
            )
            print(response.output_text)
        finally:
            if vector_store_id is not None:
                try:
                    client.vector_stores.delete(vector_store_id)
                except Exception as cleanup_error:
                    print(f"Vector-store cleanup warning: {cleanup_error}")
            if uploaded_file_id is not None:
                try:
                    client.files.delete(uploaded_file_id)
                except Exception as cleanup_error:
                    print(f"File cleanup warning: {cleanup_error}")
finally:
    credential.close()
```

The polling helper matters: a file is not searchable merely because upload has started. Wait until ingestion completes before issuing the grounded request.

> **Best-effort cleanup note:** Deleting a vector store removes the index, while deleting the underlying uploaded file removes the file object. An upload or attachment helper can create a service-side File before the helper fails and before it returns an ID to the application. The locally tracked IDs in this example therefore cannot guarantee complete cleanup after every partial failure. Production retention cleanup must inventory the service's Files and Vector Stores, reconcile them with durable ownership metadata, and apply an approved retention policy. Do not delete resources merely by a nonunique display name. See the direct [Files REST reference](https://learn.microsoft.com/en-us/rest/api/microsoft-foundry/azureopenai/files) and [Vector Stores REST reference](https://learn.microsoft.com/en-us/rest/api/microsoft-foundry/azureopenai/vector_stores).

### Multiple files

The official lab uses `file_batches.upload_and_poll()` because it uploads several brochures at once:

```python
from contextlib import ExitStack
from pathlib import Path


brochure_paths = sorted(Path("brochures").glob("*.pdf"))
if not brochure_paths:
    raise FileNotFoundError("No PDF files found in brochures/")

with ExitStack() as stack:
    streams = [stack.enter_context(path.open("rb")) for path in brochure_paths]
    file_batch = client.vector_stores.file_batches.upload_and_poll(
        vector_store_id=vector_store.id,
        files=streams,
    )

if file_batch.file_counts.failed:
    raise RuntimeError(
        f"{file_batch.file_counts.failed} brochure file(s) failed to index"
    )
```

`ExitStack` guarantees that every opened stream is closed even if upload fails. It does not guarantee deletion of service-side File objects created before a batch helper reports an error or returns attached-file IDs; production cleanup needs service inventory and reconciliation in addition to local ID tracking.

### Grounding and retrieval quality

- Clean, current, authoritative source files improve results.
- Ask focused questions rather than broad requests.
- Separate unrelated domains into different stores when useful.
- Include `file_search_call.results` during development to diagnose retrieval.
- Re-index changed content before expecting it in results.
- Retrieval can reduce unsupported answers but cannot replace human review for sensitive decisions.
- Large or mixed-domain stores can reduce retrieval focus.
- File search and vector storage can incur charges beyond model tokens.

For enterprise agents that must access large quantities of information across multiple data sources, the unit recommends evaluating **Foundry IQ** rather than treating a small prompt-level vector store as the entire enterprise knowledge architecture.

---

## Unit 6 — Use the `function` tool

[Open Unit 6](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/06-function)

The `function` tool connects model reasoning to developer-controlled application logic. The model returns a structured request; the application decides whether and how to execute it.

### The six-step contract

1. **Define:** The client supplies a function name, description, and parameter schema.
2. **Select:** The model decides whether the function is needed.
3. **Request:** The response contains a `function_call` item with a name, arguments, and `call_id`.
4. **Validate and execute:** Application code checks the request, authorizes it, and runs an allowlisted handler.
5. **Return:** The client submits a `function_call_output` containing the same `call_id`.
6. **Complete:** The model interprets the tool result and generates a user-facing answer.

The `call_id` correlates each output with the function request that produced it. Do not substitute the function name for this identifier.

### Unit example shape

The official unit uses a parameterless `get_time` function:

```python
function_tools = [
    {
        "type": "function",
        "name": "get_time",
        "description": "Get the current time",
    }
]
```

After finding a matching call in `response.output`, the application executes its function and appends:

```python
{
    "type": "function_call_output",
    "call_id": item.call_id,
    "output": current_time,
}
```

The model never executes `get_time()` itself.

### Robust parameterized example

This version uses an explicit JSON schema, an allowlisted dispatcher, input validation, repeated instructions, and a bounded loop for multiple rounds of function calls:

`ZoneInfo` requires the IANA time-zone database. Linux images often provide it through the operating system; Windows commonly needs the cross-platform `tzdata` package. Install it in the same environment and pin a tested version for production:

```powershell
python -m pip install tzdata
```

```python
import json
import os
from datetime import datetime
from zoneinfo import ZoneInfo, ZoneInfoNotFoundError

from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from dotenv import load_dotenv
from openai import OpenAI


INSTRUCTIONS = (
    "You are a time assistant. Use get_time for current local time. "
    "Never invent a time-zone identifier."
)

FUNCTION_TOOLS = [
    {
        "type": "function",
        "name": "get_time",
        "description": "Return the current time in an IANA time zone.",
        "parameters": {
            "type": "object",
            "properties": {
                "time_zone": {
                    "type": "string",
                    "description": (
                        "IANA time-zone identifier, such as America/New_York"
                    ),
                }
            },
            "required": ["time_zone"],
            "additionalProperties": False,
        },
        "strict": True,
    }
]


def require_setting(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"Missing required setting: {name}")
    return value


def get_time(time_zone: str) -> str:
    try:
        local_time = datetime.now(ZoneInfo(time_zone))
    except ZoneInfoNotFoundError:
        return json.dumps(
            {"ok": False, "error": "Unknown IANA time-zone identifier"}
        )
    return json.dumps(
        {
            "ok": True,
            "time_zone": time_zone,
            "local_time": local_time.isoformat(timespec="seconds"),
        }
    )


def execute_function_call(name: str, arguments_json: str) -> str:
    if name != "get_time":
        return json.dumps({"ok": False, "error": "Function is not allowlisted"})

    try:
        arguments = json.loads(arguments_json)
    except json.JSONDecodeError:
        return json.dumps({"ok": False, "error": "Arguments are not valid JSON"})

    if not isinstance(arguments, dict) or set(arguments) != {"time_zone"}:
        return json.dumps({"ok": False, "error": "Invalid argument shape"})
    if not isinstance(arguments["time_zone"], str):
        return json.dumps({"ok": False, "error": "time_zone must be a string"})

    return get_time(arguments["time_zone"])


load_dotenv()
endpoint = require_setting("AZURE_OPENAI_ENDPOINT")
deployment = require_setting("MODEL_DEPLOYMENT")

credential = DefaultAzureCredential()
token_provider = get_bearer_token_provider(
    credential,
    "https://ai.azure.com/.default",
)

try:
    with OpenAI(
        base_url=endpoint,
        api_key=token_provider,
        max_retries=2,
    ) as client:
        response = client.responses.create(
            model=deployment,
            instructions=INSTRUCTIONS,
            input="What time is it in New York?",
            tools=FUNCTION_TOOLS,
            parallel_tool_calls=False,
        )

        max_tool_rounds = 4
        completed_tool_rounds = 0
        all_calls = []
        all_results: list[dict[str, str]] = []

        while True:
            calls = [item for item in response.output if item.type == "function_call"]
            if not calls:
                print(response.output_text)
                break

            if completed_tool_rounds >= max_tool_rounds:
                raise RuntimeError(
                    f"Function-call loop exceeded {max_tool_rounds} rounds"
                )

            outputs = [
                {
                    "type": "function_call_output",
                    "call_id": call.call_id,
                    "output": execute_function_call(call.name, call.arguments),
                }
                for call in calls
            ]
            all_calls.extend(calls)
            all_results.extend(outputs)
            completed_tool_rounds += 1

            response = client.responses.create(
                model=deployment,
                instructions=INSTRUCTIONS,
                previous_response_id=response.id,
                input=outputs,
                tools=FUNCTION_TOOLS,
                parallel_tool_calls=False,
            )
finally:
    credential.close()
```

The `while` loop always inspects the response returned after the last permitted tool round. It therefore accepts a final answer after round four but rejects a fifth request for client execution. `all_calls` and `all_results` preserve a per-run audit trail; sanitize them before logging because arguments and results can contain sensitive data.

### Why instructions are repeated

`previous_response_id` links response context, but instructions from the previous request are not inherited as the instructions for the new request. Repeat behavioral guidance that must remain in force. The official lab does this correctly by sending its travel-assistant instructions on every turn.

By default, the Responses API stores response data for 30 days. A later request that supplies `previous_response_id` relies on that stored response state, so do not delete an ID while the conversation still needs it. When organizational policy requires earlier deletion, track every response ID and delete the stored responses after the conversation ends. Deleting a response prevents it from serving as the basis for a later chained request.

### Security boundary

Treat a function call as untrusted proposed input, not authorization:

- Dispatch only explicitly registered functions.
- Parse and validate JSON against the expected schema.
- Apply business validation in addition to JSON-schema validation.
- Authenticate the user and authorize the requested resource and action.
- Use least-privilege credentials for downstream systems.
- Require confirmation for purchases, deletion, messages, transfers, or other consequential actions.
- Add idempotency protection where retries could duplicate an action.
- Set timeouts and handle downstream failures.
- Log the decision and outcome without exposing secrets or sensitive arguments.
- Return a safe, structured error the model can explain.

`strict: True` improves schema adherence when supported, but it does not replace application validation or authorization. Current Azure guidance says structured outputs are not supported with parallel function calls, so this strict-schema example sets `parallel_tool_calls=False` on the initial request and every follow-up request that still exposes the function tool.

### Multiple calls and parallel calls

A response can contain zero, one, or multiple function calls. Iterate over output items by `type`; do not assume the first output item is a message. The strict-schema example disables parallel tool calls to follow current Azure structured-output guidance. Where the selected model and API support parallel calls without that constraint, the client must still return one `function_call_output` per `call_id` and must avoid unsafe parallel side effects.

---

## Unit 7 — Exercise - Create a generative AI chat app that uses tools

[Open Unit 7](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/07-exercise)

The Learn tile assigns **30 minutes**. The linked MicrosoftLearning lab also estimates approximately **30 minutes**.

> **Attribution:** This walkthrough is adapted from MicrosoftLearning's [Create a generative AI app that uses tools](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/04a-use-own-data.html) exercise and its [source file](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/Instructions/Exercises/04a-use-own-data.md), distributed under the repository's [MIT License](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/LICENSE). The wording and production-safety notes here are expanded for study use.

### What the lab builds

You build a terminal travel assistant for Margie's Travel. It combines:

- `web_search` for current destination events and advice.
- `file_search` for hotels and services described in Margie's Travel brochures.
- `previous_response_id` so a follow-up such as “there” refers to the previous destination.
- Entra ID authentication through the Azure OpenAI endpoint.

The Learn launcher says the exercise uses `file_search`; the current linked lab actually uses **both** `web_search` and `file_search`.

### Prerequisites

- An active Azure subscription with permission to create and delete resources.
- Visual Studio Code.
- Python 3.13.x. The current lab records testing with Python 3.13.12. Its warning that some dependencies might not yet be compiled for Python 3.14 is the lab's dated tested baseline, not a universal current limitation; verify today's package support in the environment you will use.
- Git.
- Azure CLI.

Some technologies in the exercise can be in preview or active development. Portal labels and behavior can therefore differ.

### Part 1: Create a Microsoft Foundry project

1. Open [Microsoft Foundry](https://ai.azure.com) and sign in.
2. Enable the **New Foundry** experience if it is not already enabled.
3. Create a project with a unique name.
4. Expand advanced options and confirm:

   - Foundry resource: use the default resource name unless your environment requires another resource.
   - Subscription: the intended Azure subscription.
   - Resource group: create or select the intended group.
   - Region: choose a current Foundry-recommended region that has the required model capacity.

5. Wait for creation, then open the project Home page.

Record the exact subscription, resource group, project, and region so cleanup targets are unambiguous.

### Part 2: Deploy the model

1. On **Discover**, open the **Models** tab.
2. Search for `gpt-5.2`.
3. Review its model card.
4. Deploy it with the default settings.
5. Record the exact deployment name; application code sends that value in `model=`.

> **Model and region drift:** `gpt-5.2` is the model named by the current official lab. Model availability, capacity, supported deployment types, and supported tools vary by region and change over time. If the lab permits an alternate model, it must support the Responses API plus both `web_search` and `file_search`. Do not silently replace the documented lab model in study questions.

### Part 3: Compare playground behavior

In the deployed model's playground, enter these instructions exactly:

```text
You are a travel assistant that provides information on travel services available from Margie's Travel.
```

Ask:

```text
What are some recommended tourist activities in New York next month?
```

Without a web tool, the answer should be generic and based on model knowledge. Add the `web_search` tool in the playground and ask the same question again. The model can now ground its response in current information.

This comparison isolates the tool's contribution; it does not prove that every retrieved fact is correct.

### Part 4: Copy the correct endpoint

Return to the project Home page and copy the **Azure OpenAI Endpoint**.

Use:

```text
https://{resource-name}.openai.azure.com/openai/v1/
```

Do not use the project endpoint for this exercise. The lab calls standard OpenAI tools through the OpenAI SDK. Entra ID is preferred; the project/resource key is an alternative, not a value used by the supplied lab solution.

### Part 5: Clone and inspect the starter files

Clone the official repository:

```powershell
git clone https://github.com/MicrosoftLearning/mslearn-ai-studio
```

Open this directory in Visual Studio Code:

```text
labfiles/tools/python/tools-app
```

It contains:

```text
tools-app/
├── brochures/
│   ├── Dubai Brochure.pdf
│   ├── Las Vegas Brochure.pdf
│   ├── London Brochure.pdf
│   ├── Margies Travel Company Info.pdf
│   ├── New York Brochure.pdf
│   └── San Francisco Brochure.pdf
├── .env
├── requirements.txt
└── tools-app.py
```

The current official `requirements.txt` is deliberately unpinned:

```text
python-dotenv
azure-identity
openai
```

Unpinned packages follow the latest resolver-compatible versions and can drift after the lab is published. For a reproducible application, test compatible versions and commit an approved lock file. Do not invent package pins and present them as part of the official exercise.

### Part 6: Prepare the Python environment

1. Install the VS Code Python extension if required.
2. Use **Python: Select Interpreter** to create or select a virtual environment based on Python 3.13.x.
3. Open an integrated terminal in `labfiles/tools/python/tools-app`.
4. Confirm that the intended virtual environment is active.
5. Install dependencies:

```powershell
python -m pip install -r requirements.txt
```

### Part 7: Configure the app

Update `.env` with the endpoint copied from the project and the exact deployment name:

```dotenv
AZURE_OPENAI_ENDPOINT="https://your-resource.openai.azure.com/openai/v1/"
MODEL_DEPLOYMENT="your-gpt-5.2-deployment-name"
```

The official prose contains one reference to loading an “endpoint and key,” but the current starter loads the endpoint and deployment name. No key appears in `.env`; the app obtains an Entra token through `DefaultAzureCredential`.

### Part 8: Import namespaces and initialize the client

Add these imports:

```python
from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from openai import OpenAI
```

Create a token provider and client:

```python
credential = DefaultAzureCredential()
token_provider = get_bearer_token_provider(
    credential,
    "https://ai.azure.com/.default",
)

openai_client = OpenAI(
    base_url=azure_openai_endpoint,
    api_key=token_provider,
)
```

The exercise's `api_key` argument receives a token-provider callable. It does not contain an API key.

### Part 9: Create a vector store and upload brochures

The official sequence creates a store and uploads all matching PDFs as a batch. The standalone version below raises an exception where the surrounding lab `main()` uses an early `return`:

```python
print("Creating vector store and uploading files...")
vector_store = openai_client.vector_stores.create(
    name="travel-brochures"
)
file_streams = [open(path, "rb") for path in glob.glob("brochures/*.pdf")]
if not file_streams:
    raise FileNotFoundError("No PDF files found in the brochures folder!")
file_batch = openai_client.vector_stores.file_batches.upload_and_poll(
    vector_store_id=vector_store.id,
    files=file_streams,
)
for file_stream in file_streams:
    file_stream.close()
print(f"Vector store created with {file_batch.file_counts.completed} files.")
```

`upload_and_poll` waits for ingestion. A production implementation should close every stream in a `finally` block or `ExitStack`, including when upload fails, and should check the failed-file count. The helper can create service-side File objects before an upload or attachment failure is returned, so cleanup based only on IDs returned to this process is best effort; production retention cleanup must inventory and reconcile the service's Files and Vector Stores.

### Part 10: Add web and file tools to the chat loop

The official request is:

```python
response = openai_client.responses.create(
    model=model_deployment,
    instructions="""
    You are a travel assistant that provides information on travel services available from Margie's Travel.
    Answer questions about services offered by Margie's Travel using the provided travel brochures.
    Search the web for general information about destinations or current travel advice.
    """,
    input=input_text,
    previous_response_id=last_response_id,
    tools=[
        {
            "type": "file_search",
            "vector_store_ids": [vector_store.id],
        },
        {
            "type": "web_search",
        },
    ],
)
print(response.output_text)
last_response_id = response.id
```

The request repeats `instructions` on every turn because prior instructions are not inherited merely by setting `previous_response_id`. The response ID carries conversational context, enabling the model to resolve later references such as “there.” Responses are stored for 30 days by default, and chaining relies on that stored state. A stricter retention policy can delete tracked response IDs after the conversation, but not while later turns still need them.

### Part 11: Sign in and run

Sign in through Azure CLI:

```powershell
az login
```

If the account spans multiple tenants, use the correct tenant. Confirm that the active subscription contains the project before running the application.

Start the app:

```powershell
python tools-app.py
```

Test this prompt:

```text
What's happening in San Francisco next month?
```

The response should use `web_search` for current events. Then ask:

```text
What hotels does Margie's Travel offer there?
```

The response should use `file_search` over the brochures, and “there” should resolve to San Francisco through response chaining. Enter `quit` when finished.

### Completed reference with best-effort cleanup

The following version preserves the lab's behavior while validating configuration, using `ExitStack`, checking indexing failures, repeating instructions, tracking response IDs, and attempting granular cleanup. The official lab ultimately deletes the resource group; granular deletion is useful when the project must remain. Local ID tracking is still best effort because a service-side File can be created before an upload helper fails or returns its ID.

```python
import glob
import os
from contextlib import ExitStack

from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from dotenv import load_dotenv
from openai import OpenAI


INSTRUCTIONS = """
You are a travel assistant that provides information on travel services available from Margie's Travel.
Answer questions about services offered by Margie's Travel using the provided travel brochures.
Search the web for general information about destinations or current travel advice.
""".strip()

# Set this from your organization's retention policy in a real application.
DELETE_STORED_RESPONSES = True


def require_setting(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"Missing required setting: {name}")
    return value


def main() -> None:
    load_dotenv()
    endpoint = require_setting("AZURE_OPENAI_ENDPOINT")
    deployment = require_setting("MODEL_DEPLOYMENT")

    brochure_paths = sorted(glob.glob("brochures/*.pdf"))
    if not brochure_paths:
        raise FileNotFoundError("No PDF files found in brochures/")

    credential: DefaultAzureCredential | None = None
    client: OpenAI | None = None
    vector_store_id: str | None = None
    uploaded_file_ids: list[str] = []
    response_ids: list[str] = []

    try:
        credential = DefaultAzureCredential()
        token_provider = get_bearer_token_provider(
            credential,
            "https://ai.azure.com/.default",
        )
        client = OpenAI(
            base_url=endpoint,
            api_key=token_provider,
            max_retries=2,
        )

        vector_store = client.vector_stores.create(name="travel-brochures")
        vector_store_id = vector_store.id

        with ExitStack() as stack:
            streams = [
                stack.enter_context(open(path, "rb"))
                for path in brochure_paths
            ]
            batch = client.vector_stores.file_batches.upload_and_poll(
                vector_store_id=vector_store_id,
                files=streams,
            )

        uploaded_file_ids = [
            item.id
            for item in client.vector_stores.files.list(
                vector_store_id=vector_store_id
            )
        ]

        if batch.file_counts.failed:
            raise RuntimeError(
                f"{batch.file_counts.failed} brochure file(s) failed to index"
            )

        print(f"Indexed {batch.file_counts.completed} brochure(s).")
        previous_response_id: str | None = None

        while True:
            user_input = input('\nEnter a question (or type "quit" to exit): ').strip()
            if user_input.lower() == "quit":
                break
            if not user_input:
                print("Please enter a question.")
                continue

            response = client.responses.create(
                model=deployment,
                instructions=INSTRUCTIONS,
                input=user_input,
                previous_response_id=previous_response_id,
                tools=[
                    {
                        "type": "file_search",
                        "vector_store_ids": [vector_store_id],
                    },
                    {"type": "web_search"},
                ],
            )
            response_ids.append(response.id)
            print(response.output_text)
            previous_response_id = response.id
    finally:
        try:
            if client is not None:
                if DELETE_STORED_RESPONSES:
                    for response_id in reversed(response_ids):
                        try:
                            client.responses.delete(response_id)
                        except Exception as cleanup_error:
                            print(
                                "Response cleanup warning for "
                                f"{response_id}: {cleanup_error}"
                            )

                if vector_store_id is not None:
                    try:
                        client.vector_stores.delete(vector_store_id)
                    except Exception as cleanup_error:
                        print(
                            f"Vector-store cleanup warning: {cleanup_error}"
                        )

                for file_id in uploaded_file_ids:
                    try:
                        client.files.delete(file_id)
                    except Exception as cleanup_error:
                        print(
                            f"File cleanup warning for {file_id}: "
                            f"{cleanup_error}"
                        )

                try:
                    client.close()
                except Exception as cleanup_error:
                    print(f"Client-close warning: {cleanup_error}")
        finally:
            if credential is not None:
                try:
                    credential.close()
                except Exception as cleanup_error:
                    print(f"Credential-close warning: {cleanup_error}")


if __name__ == "__main__":
    main()
```

This sample's broad exception handling is limited to best-effort cleanup in `finally`; normal request and validation errors are not swallowed. Stored responses are deleted first, after the conversation no longer needs `previous_response_id`, followed by the vector store and locally known File objects. A production retention job must also inventory service-side Files and Vector Stores because an upload or attachment failure can create objects before IDs are returned. Configure request timeouts for the workload and its service-level objectives; tool-heavy and ingestion calls can legitimately take longer than a fixed 60-second limit.

### Common exercise failures

| Symptom | Likely cause | Check |
| --- | --- | --- |
| 401 or 403 | Wrong identity, role, tenant, or token scope | Run `az login`, select the right tenant/subscription, verify access, and keep scope `https://ai.azure.com/.default` |
| 404 | Wrong endpoint or deployment name | Use the Azure OpenAI `/openai/v1/` endpoint and exact deployment name |
| Tool unsupported | Deployment lacks the requested capability | Check model, version, deployment type, and region |
| Empty brochure match | Wrong working directory or missing PDFs | Run in `labfiles/tools/python/tools-app` and inspect `brochures/` |
| File result missing | Ingestion incomplete or poor retrieval match | Use polling, check failed counts, and ask a focused document question |
| Follow-up loses “there” | Previous ID was not retained | Set `last_response_id = response.id` and pass it on the next turn |
| Assistant drifts from its role | Instructions omitted on a later request | Repeat required instructions on every chained request |
| Generic current-events answer | Model did not use web search | Make freshness explicit and inspect output item types/citations |

### Part 12: Clean up Azure resources

The official final step deletes the exercise resource group to avoid ongoing charges:

1. Open the Azure portal.
2. Navigate to the resource group used for the exercise.
3. Verify its subscription, name, and contents.
4. Confirm that it contains no resources that must be retained.
5. Delete the resource group and confirm the name.

Deleting a resource group is destructive. If it contains shared assets, delete only the exercise's vector store, uploaded files, deployment, project, or other resources according to ownership policy. Closing Python clients stops local connections; it does **not** delete Azure resources.

### Lab completion record

- [ ] Foundry project created in a suitable region
- [ ] `gpt-5.2` deployed and exact deployment name recorded
- [ ] Playground prompt tested without and with `web_search`
- [ ] Azure OpenAI endpoint copied, not the project endpoint
- [ ] Official repository cloned
- [ ] Python 3.13 environment selected
- [ ] Unpinned exercise requirements installed
- [ ] `.env` contains endpoint and deployment name, with no key
- [ ] Azure CLI signed in to the correct tenant and subscription
- [ ] `travel-brochures` vector store created
- [ ] All six PDF brochures indexed successfully
- [ ] Current San Francisco prompt used web search
- [ ] Hotel follow-up used file search and retained conversation context
- [ ] Stored response IDs handled according to the required retention policy after the conversation
- [ ] Local client, credential, and streams closed
- [ ] Temporary file/vector-store objects removed when appropriate
- [ ] Azure resources deleted when no longer needed

---

## Unit 8 — Module assessment

[Open Unit 8](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/08-knowledge-check)

The following are the three official assessment questions and choices in their original order.

### 1. Which tool should you use when a model needs to answer questions from your own uploaded policy documents?

- `web_search`
- **`file_search`**
- `code_interpreter`

**Correct answer:** `file_search`

**Why:** `file_search` retrieves relevant content from documents uploaded to an indexed vector store. `web_search` retrieves public-web information, and `code_interpreter` executes Python in a sandbox.

### 2. In a function-calling workflow, what should your application do after the model returns a function_call item?

- Wait for the model to run the function automatically
- **Run the function in your code and send a `function_call_output` back to the model**
- Convert the function call into a `web_search` request

**Correct answer:** Run the function in your code and send a `function_call_output` back to the model.

**Why:** The model proposes a structured call. The client validates, authorizes, and executes the function, then correlates its result with the original request by returning the same `call_id` in a `function_call_output` item.

### 3. Which statement about the code_interpreter tool is correct?

- **It can run Python code in a sandboxed runtime to help solve tasks**
- It can browse external websites directly during code execution
- It only supports file uploads and can't perform calculations

**Correct answer:** It can run Python code in a sandboxed runtime to help solve tasks.

**Why:** Code Interpreter can generate and execute Python for calculations, data analysis, transformations, and file work. Its sandbox does not have arbitrary external network access.

### Additional self-test

1. A developer passes `tools=[{"type": "web_search"}]` in each application request. Has the developer thereby created a persisted Foundry agent?
2. Which module tool should ground an answer in a private employee handbook uploaded by the application?
3. Who executes a custom function requested in a `function_call` item?
4. What field connects a `function_call_output` to the model's original function request?
5. Why should required behavioral instructions be repeated when using `previous_response_id`?
6. Which endpoint does the official Margie's Travel lab copy from the Foundry project Home page?
7. Which Entra scope is used by the lab's bearer-token provider?
8. Why does the file-upload helper use a polling operation?
9. What two different knowledge sources answer the two official lab test prompts?
10. Why is closing an `OpenAI` client not sufficient Azure-resource cleanup?

<details>
<summary>Self-test answers</summary>

1. No. The application declared a client-managed prompt tool for that request. A persisted agent is a named, stored configuration of model, instructions, and tools.
2. `file_search`, using a vector store containing the indexed handbook.
3. The client application. The model requests the call; application code validates, authorizes, dispatches, and executes it.
4. `call_id`.
5. A previous response ID links conversation context, but prior `instructions` are not inherited as the instructions for the new request.
6. The Azure OpenAI v1 endpoint, typically `https://{resource}.openai.azure.com/openai/v1/`, not the Foundry project endpoint.
7. `https://ai.azure.com/.default`.
8. Upload completion does not mean indexing is ready. Polling waits for ingestion so the file can be retrieved reliably.
9. `web_search` supplies current San Francisco events; `file_search` supplies Margie's Travel hotel information from the brochures.
10. Closing the client releases local connections only. Vector stores, files, deployments, projects, and resource groups remain server-side until explicitly deleted or expired.

</details>

---

## Unit 9 — Summary

[Open Unit 9](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/09-summary)

Tools extend a generative model from text-only reasoning into grounded information retrieval, executable analysis, and application-controlled actions:

- `code_interpreter` generates and runs Python for calculations, data analysis, and iterative problem solving.
- `web_search` retrieves current external information and returns source-grounded output.
- `file_search` retrieves relevant content from indexed uploaded documents.
- `function` lets the model request developer-defined logic that the client validates and runs.

The recurring implementation pattern is:

1. Define the tool and its constraints.
2. Let the model select it when appropriate, or apply an intentional tool-choice rule.
3. Supply or return tool results through the correct API shape.
4. Generate the final answer from those results.
5. Validate correctness, grounding, authorization, and safety.
6. Track costs, latency, errors, and lifecycle resources.

These client-managed patterns provide a foundation for agentic applications. Persisted agents add a stored identity and configuration around a model, instructions, tools, and orchestration; they do not eliminate the same security and validation responsibilities.

### Practical next steps

- Test tool selection and no-tool behavior with representative and adversarial prompts.
- Evaluate whether citations and file evidence actually support the answer.
- Add structured telemetry without logging secrets or sensitive content.
- Add retry and timeout policy appropriate to idempotency and side effects.
- Use managed identity and least-privilege roles in Azure-hosted applications.
- Require explicit confirmation for consequential function calls.
- Pin and test SDK dependencies for reproducible deployments.
- Monitor model/tool availability and current pricing before rollout.
- Define retention and deletion policies for response state, uploaded files, vector stores, and generated artifacts.

## High-yield review sheet

### Choose the tool from the clue

| Clue | Best answer |
| --- | --- |
| Run Python, calculate, analyze a CSV, create a chart | `code_interpreter` |
| Current public information, events, prices, releases | `web_search` |
| Uploaded policies, manuals, brochures, contracts | `file_search` |
| Internal API, database lookup, workflow, custom business rule | `function` |
| Large enterprise knowledge spanning many sources for an agent | Evaluate Foundry IQ |

### Execution and control boundaries

| Question | Hosted tool | Custom function |
| --- | --- | --- |
| Who runs it? | Responses service | Client application |
| What does the model emit? | A hosted-tool call plus grounded/generated output | A `function_call` item |
| Must the client execute code? | No | Yes |
| Main client controls | Tool declaration, prompt, evidence review, lifecycle | Schema, allowlist, validation, authorization, execution, side effects, output |
| Follow-up item | Usually handled within the service response | Client sends `function_call_output` with matching `call_id` |

### Core request shapes

| Need | Key request fields |
| --- | --- |
| Code Interpreter | `tools=[{"type": "code_interpreter", "container": {"type": "auto"}}]` |
| Web search | `tools=[{"type": "web_search"}]` |
| File search | `tools=[{"type": "file_search", "vector_store_ids": [...]}]` |
| Inspect file retrieval | `include=["file_search_call.results"]` |
| Define a custom function | `type`, `name`, `description`, `parameters`, optionally `strict` |
| Use a strict function schema | Set `strict=True` and, under current Azure guidance, `parallel_tool_calls=False` on every request that exposes it |
| Return a custom result | `type="function_call_output"`, matching `call_id`, serialized `output` |
| Link conversation turns | `previous_response_id=response.id` |
| Generate model output | `client.responses.create(...)` |

### Endpoint, identity, and configuration clues

| Clue | Answer in the official lab |
| --- | --- |
| Client library | OpenAI Python SDK |
| Endpoint | Azure OpenAI `/openai/v1/` endpoint |
| Authentication | Microsoft Entra ID through `DefaultAzureCredential` |
| Token scope | `https://ai.azure.com/.default` |
| Static key in `.env` | None |
| `.env` settings | `AZURE_OPENAI_ENDPOINT`, `MODEL_DEPLOYMENT` |
| Model argument | Exact deployment name |
| Lab model | `gpt-5.2`, subject to current availability and support |
| Dependencies | `python-dotenv`, `azure-identity`, `openai`; currently unpinned upstream |

### State and lifecycle clues

| Resource or state | Required handling |
| --- | --- |
| Instructions | Repeat on each chained request when they must remain active |
| Previous response ID | Retain per conversation; it relies on stored response state, so do not delete it before the chain ends or share it between unrelated users |
| Stored response | Retained for 30 days by default; track and delete after the conversation when policy requires earlier removal |
| File stream | Close on success and failure |
| File ingestion | Poll until ready and check failures |
| Uploaded file object | Track its ID and delete according to retention policy; inventory the service to reconcile objects created during partial failures |
| Vector store | Track its ID, cost, expiration, and deletion policy; reconcile service inventory rather than relying only on local state |
| `OpenAI` client | Close when the owner is finished |
| Azure credential | Close when the owner is finished |
| Azure resource group | Delete only after verifying the exact target and contents |

### Common exam and implementation traps

- A prompt tool, a capitalized Foundry Tool, and a persisted agent are not synonyms.
- The model chooses among available tools by default, but model choice does not remove client validation.
- `function_call` is a request to the application; the model does not run business logic.
- Always correlate a custom tool result with `call_id`.
- Hosted tools still require evidence review, cost controls, and lifecycle management.
- Code Interpreter runs Python in a sandbox and does not browse external sites directly.
- Web search is for current public information; file search is for indexed uploaded content.
- Web citations should remain visible and usable in the final experience.
- Search-grounded text can still be wrong or vulnerable to malicious retrieved content.
- A file must finish ingestion before reliable retrieval.
- `include=["file_search_call.results"]` is useful for retrieval debugging; it does not itself improve source quality.
- `previous_response_id` links prior response context but does not inherit prior `instructions`.
- Responses are stored for 30 days by default; deleting one prevents future chaining through that response ID.
- Reusing one client object does not by itself create conversation state.
- Use the Azure OpenAI endpoint in this lab; do not substitute the Foundry project endpoint.
- `api_key=token_provider` represents Entra token authentication, not a static API key.
- Environment variables deliver configuration; they are not an authentication method.
- The `model` field takes the deployment name.
- The lab's `gpt-5.2` selection is time-sensitive; tool support varies by model, version, region, and deployment type.
- Package names in the official requirements file are unpinned and can resolve differently later.
- Closing clients does not delete cloud resources.
- Deleting a resource group is destructive; verify the exact scope first.
- File search, Code Interpreter, web grounding, storage, and model tokens can have separate cost dimensions.
- A tool call can add latency even when it improves answer quality.
- Custom-function schemas are not authorization policies.
- Do not execute arbitrary names, shell commands, SQL, paths, or URLs supplied by a model without strict controls.

## Sources and further reading

### Official module and units

- [Module landing page](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/)
- [Unit 1: Introduction](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/01-introduction)
- [Unit 2: What are tools?](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/02-what-are-tools)
- [Unit 3: Use the code_interpreter tool](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/03-code-interpreter)
- [Unit 4: Use the web_search tool](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/04-web-search)
- [Unit 5: Use the file_search tool](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/05-file-search)
- [Unit 6: Use the function tool](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/06-function)
- [Unit 7: Exercise launcher](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/07-exercise)
- [Unit 8: Module assessment](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/08-knowledge-check)
- [Unit 9: Summary](https://learn.microsoft.com/en-us/training/modules/use-generative-ai-tools/09-summary)

### Official exercise and source assets

- [Rendered exercise: Create a generative AI app that uses tools](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/04a-use-own-data.html)
- [Exercise source on GitHub](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/Instructions/Exercises/04a-use-own-data.md)
- [MicrosoftLearning exercise repository](https://github.com/MicrosoftLearning/mslearn-ai-studio)
- [Starter application directory](https://github.com/MicrosoftLearning/mslearn-ai-studio/tree/main/labfiles/tools/python/tools-app)
- [Starter `.env`](https://raw.githubusercontent.com/MicrosoftLearning/mslearn-ai-studio/main/labfiles/tools/python/tools-app/.env)
- [Starter `requirements.txt`](https://raw.githubusercontent.com/MicrosoftLearning/mslearn-ai-studio/main/labfiles/tools/python/tools-app/requirements.txt)
- [Starter `tools-app.py`](https://raw.githubusercontent.com/MicrosoftLearning/mslearn-ai-studio/main/labfiles/tools/python/tools-app/tools-app.py)
- [Upstream MIT License](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/LICENSE)

### Current Microsoft implementation guidance

- [Use the Azure OpenAI Responses API](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/responses)
- [Responses REST reference](https://learn.microsoft.com/en-us/rest/api/microsoft-foundry/azureopenai/responses)
- [Files REST reference](https://learn.microsoft.com/en-us/rest/api/microsoft-foundry/azureopenai/files)
- [Vector Stores REST reference](https://learn.microsoft.com/en-us/rest/api/microsoft-foundry/azureopenai/vector_stores)
- [Web search with the Responses API](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/web-search)
- [File search tool guidance](https://learn.microsoft.com/en-us/azure/foundry/agents/how-to/tools/file-search)
- [Function calling with Microsoft Foundry Models](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/function-calling)
- [Structured outputs and strict function schemas](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/structured-outputs)
- [Responses API quickstart for Foundry agents](https://learn.microsoft.com/en-us/azure/foundry/agents/quickstarts/responses-api)

## Glossary

| Term | Definition |
| --- | --- |
| Agent | Model-centered solution that combines instructions, tools, and orchestration; a persisted Foundry agent is a named, stored configuration. |
| Allowlist | Explicit set of functions, domains, resources, or operations an application permits. |
| API key | Static secret used to authorize service calls; an alternative to Entra authentication, not used by the official lab solution. |
| Application-executed tool | Custom function that the model requests but client code validates and runs. |
| Azure OpenAI endpoint | Endpoint under `*.openai.azure.com`; the v1 base path ends in `/openai/v1/`. |
| `call_id` | Correlation identifier linking a `function_call_output` to its originating `function_call`. |
| Citation annotation | Structured metadata connecting generated web-grounded text to a source URL. |
| Client-managed tool | Tool definition supplied by application code in a model request rather than persisted as a named agent configuration. |
| Code Interpreter | Hosted tool that lets a model generate and execute Python in a sandboxed container. |
| Container | Isolated runtime used by Code Interpreter for code and files. |
| `DefaultAzureCredential` | Azure Identity credential chain that can use local developer or Azure workload identities. |
| Deployment | Callable configured instance or route for a model. |
| Deployment name | Project-defined identifier supplied in the request's `model` field. |
| Embedding | Numeric representation used to compare semantic similarity between content. |
| Endpoint | Base service URL used by an SDK or HTTP client. |
| Entra ID | Microsoft identity platform used to obtain short-lived access tokens. |
| File search | Hosted retrieval tool that searches files indexed in one or more vector stores. |
| Foundry IQ | Microsoft Foundry knowledge solution intended for enterprise-scale, knowledge-enhanced agents. |
| Foundry project endpoint | Base project-scoped endpoint under `*.services.ai.azure.com/api/projects/...`; direct Responses requests use `{project_endpoint}/openai/v1/responses`. |
| Foundry Tools | Capitalized Azure product/API capabilities; distinct from a generic prompt tool declaration. |
| Function call | Structured model output requesting that client code invoke a named custom function. |
| `function_call_output` | Input item through which the client returns the result of a requested function call. |
| Grounding | Supplying retrieved or computed evidence so generation is based on information beyond model training alone. |
| Grounding with Bing | Microsoft-managed search capability underlying Azure web grounding, with applicable terms, data-flow considerations, and charges. |
| Hosted tool | Tool executed by the Responses service rather than by client application code. |
| IANA time zone | Standard region-based time-zone identifier such as `America/New_York`. |
| Instructions | High-priority behavioral guidance supplied with a Responses API request; repeat it on chained requests when it must persist. |
| Least privilege | Granting only the permissions required to perform an operation. |
| Managed identity | Azure-managed Entra identity for a workload, avoiding embedded application secrets. |
| Model catalog | Foundry catalog used to inspect model capabilities, versions, regions, and deployment options. |
| OpenAI SDK | Client library used by the lab to call the Azure OpenAI v1 endpoint and Responses API. |
| Polling | Repeatedly checking an asynchronous operation until it completes or fails; required for reliable file-ingestion readiness. |
| Prompt injection | Malicious or conflicting instructions in user or retrieved content intended to redirect model behavior. |
| `previous_response_id` | Identifier used to link a new Responses API request to stored prior-response context; it does not inherit prior request instructions. |
| Reranking | Reordering retrieved results so the most relevant evidence is supplied to the model. |
| Responses API | API surface used to send model input, instructions, tools, and state linkage and receive typed output items. |
| Response retention | Responses data is stored for 30 days by default; applications can delete tracked response IDs earlier when policy requires and chaining is complete. |
| Retrieval | Finding relevant source passages for use as model context. |
| Sandbox | Isolated execution environment with restrictions on network, time, memory, and available software. |
| Semantic search | Retrieval based on meaning rather than exact lexical matches alone. |
| Strict schema | Function-tool option that improves adherence to the supplied JSON parameter schema when supported. |
| Tool choice | Request configuration controlling whether or which tool the model may or must use. |
| Tool calling | Pattern in which a model selects or requests a declared capability during response generation. |
| Token provider | Callable that acquires short-lived Entra tokens for the SDK; passed through the client's `api_key` parameter in this pattern. |
| Vector store | Indexed collection of parsed, chunked, embedded file content used by file search. |
| Web search | Hosted Responses API tool that retrieves and grounds output in current public-web information. |
