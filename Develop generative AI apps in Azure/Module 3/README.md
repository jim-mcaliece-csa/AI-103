# Module 3 — Develop a generative AI chat app with Microsoft Foundry

> **Official module:** [Develop a generative AI chat app with Microsoft Foundry](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/)<br>
> **Level:** Beginner · **Roles:** AI Engineer and Developer · **Length:** Approximately 53 minutes · **Units:** 8<br>
> **Notes reviewed:** 2026-09-24

[Open the interactive flashcards and practice exam](index.html)

These notes cover every unit in the Microsoft Learn module and expand the endpoint, SDK, authentication, and conversation-state choices that matter when building a Python chat application. Microsoft Foundry, its portal, supported models, and its SDKs change frequently, so treat the linked Microsoft pages and portal-generated code as the source of truth for a real deployment.

> **Preview notice:** The official module warns that some Microsoft Foundry features are in preview and can change. Portal labels, model availability, package versions, and accepted API parameters can therefore differ from the screenshots or examples.

## Learning objectives

By the end of this module, you should be able to:

- [ ] Describe the workflow for creating a generative AI chat application with Microsoft Foundry.
- [ ] Use the model playground to test a deployment and generate starter code.
- [ ] Distinguish the Foundry project endpoint from the Azure OpenAI endpoint.
- [ ] Choose between the Microsoft Foundry SDK and the OpenAI SDK.
- [ ] Choose between Microsoft Entra ID token authentication and API-key authentication, and deliver their configuration securely.
- [ ] Generate model output with the Responses API.
- [ ] Maintain Responses API conversation context with a previous response ID or explicit history.
- [ ] Stream output and use asynchronous clients when responsiveness or concurrency requires them.
- [ ] Generate output with the ChatCompletions API and manage its history manually.

## Module map

| Unit | Topic | Duration | Central question |
| ---: | --- | ---: | --- |
| 1 | Introduction | 1 min | Which platform and coding choices shape a Foundry chat application? |
| 2 | Explore with the model playground | 7 min | How can you validate prompts and generate starter code before writing an app? |
| 3 | Choose an endpoint and SDK | 7 min | Which endpoint, client library, and authentication method fit the workload? |
| 4 | Generate responses with the Responses API | 10 min | How do you generate, chain, stream, and asynchronously process responses? |
| 5 | Generate responses with the ChatCompletions API | 10 min | How do message collections and manual history preserve a conversation? |
| 6 | Exercise: Create a generative AI chat app | 10 min* | How do you build and progressively improve a working Python chat client? |
| 7 | Knowledge check | 5 min | Can you identify the broadest endpoint, Foundry package, and Responses method? |
| 8 | Summary | 3 min | Can you connect the endpoint, SDK, authentication, and chat-API decisions? |

*The Microsoft Learn unit tile assigns 10 minutes to the exercise launcher. The current linked hands-on lab estimates approximately **45 minutes**. Budget for the full 45-minute lab, plus possible time for project and model deployment.

## The application path in one view

1. **Create or select a Foundry project.** The project organizes model deployments and other AI assets.
2. **Deploy a chat-capable model.** Application code sends the deployment name in the `model` field.
3. **Prototype in the model playground.** Test prompts, instructions, and generation settings.
4. **Generate a code sample.** Choose an API, language, and SDK in the playground's Code view.
5. **Choose the endpoint.** Use the project endpoint for Foundry-native project functionality or the Azure OpenAI `/openai/v1` endpoint for the broadest OpenAI API compatibility.
6. **Choose the SDK.** Use the Foundry SDK for project-level features; use the OpenAI SDK for direct model inference and portability.
7. **Deliver configuration.** Supply endpoints, deployment names, and credential configuration without hard-coding them.
8. **Authenticate.** Prefer Microsoft Entra ID for production; use keys only when the scenario requires them and store them securely.
9. **Choose the chat API.** Prefer Responses for most new work; use ChatCompletions when compatibility or existing code makes it appropriate.
10. **Manage conversation state.** Chain response IDs with Responses or resend explicit message history with ChatCompletions.
11. **Improve responsiveness.** Stream long output and use asynchronous execution when work can overlap.

> **High-yield rule:** Endpoint, SDK, authentication, configuration delivery, and chat API are separate choices. Environment variables can deliver an endpoint or key, but they are not an authentication method. For example, an application can use the OpenAI SDK, an Azure OpenAI endpoint, an environment-provided base URL, Entra ID token authentication, and the Responses API together.

---

## Unit 1 — Introduction

[Open Unit 1](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/01-introduction)

Developers building generative AI applications in Microsoft Foundry work with a combination of cloud resources, model deployments, endpoints, SDKs, credentials, and model APIs. There is no single universal client configuration; the correct combination depends on the features the application needs.

### Five design choices made in this module

| Decision | Main alternatives | Guiding question |
| --- | --- | --- |
| **Endpoint** | Foundry project endpoint or Azure OpenAI endpoint | Does the app need project-native functionality or maximum OpenAI API compatibility? |
| **SDK** | Microsoft Foundry SDK or OpenAI SDK | Is the app managing project features or primarily performing inference? |
| **Authentication** | Microsoft Entra ID bearer token or API key | Which credential type fits the runtime and security requirements? |
| **Configuration delivery** | Environment variables, managed application settings, or a secret store | How will the endpoint and credential configuration reach the app without being hard-coded? |
| **Chat API** | Responses or ChatCompletions | Does the app favor newer stateful patterns or established compatibility? |

The module uses Python, but equivalent Foundry SDK libraries are available for .NET and JavaScript. SDKs are maintained independently, so a feature can reach one language before another.

### Recommended background

The official module assumes that you:

- Are familiar with Azure services and the Azure portal.
- Understand core generative AI concepts and use cases.
- Have experience with Python or another programming language.

### Running example

The hands-on application is a terminal chat client. It:

- Connects to a deployed model in a Foundry project.
- Accepts prompts until the user enters `quit`.
- Starts with ChatCompletions.
- Migrates to the Responses API.
- Adds conversation tracking.
- Streams partial output.
- Demonstrates an asynchronous client.

The simplicity of the interface keeps the focus on client configuration and API behavior rather than web-framework code.

---

## Unit 2 — Explore with the model playground

[Open Unit 2](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/02-chat-playground)

### Why use the playground first?

The **Model playground** in the Foundry portal provides a no-code environment for learning how a deployed model behaves before committing those choices to application code. The module learning objective also refers to a Chat playground; portal wording can evolve, but the intent is the same interactive model-testing experience.

Use the playground to:

- Send prompts and inspect responses in real time.
- Add instructions or a system message that define behavior and tone.
- Adjust supported generation settings such as temperature and maximum tokens.
- Compare model deployments and configurations.
- Explore edge cases before implementing a user interface.

### What to test

A useful playground session goes beyond one happy-path prompt:

1. Test a representative user request.
2. Add instructions that constrain role, tone, scope, or output structure.
3. Test a follow-up question that depends on earlier context.
4. Try ambiguous, incomplete, and adversarial inputs.
5. Adjust one generation setting at a time so its effect is observable.
6. Record the deployment name and settings that produced acceptable behavior.

### Generate starter code

The **Code** button in the chat pane creates a sample that reproduces the selected playground configuration. The available choices include:

| Choice | Examples |
| --- | --- |
| **API** | Responses, ChatCompletions, or another supported API |
| **Language** | Python or another supported language |
| **SDK** | A client library compatible with the selected endpoint and API |

The generated sample is populated with project-specific details such as the endpoint, model deployment name, and current settings. It is a starting point, not a finished production application: add configuration validation, error handling, secure credentials, state management, logging, and tests as required.

### Playground-to-code loop

1. **Explore:** Find prompts and settings that produce the desired behavior.
2. **Generate:** Use the Code view to obtain a sample for the intended SDK and API.
3. **Develop:** Move configuration into environment variables and integrate the sample into the application.
4. **Validate:** Run representative tests outside the portal.
5. **Iterate:** Return to the playground to isolate new prompt or model ideas, then update the code.

> **Exam trap:** The playground proves that a deployment can respond and helps tune behavior. It does not replace application-specific evaluation, production authentication, or error handling.

---

## Unit 3 — Choose an endpoint and SDK

[Open Unit 3](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/03-microsoft-foundry-sdk)

A Foundry project exposes two important endpoint styles. They address overlapping but different scenarios.

### Endpoint comparison

| Endpoint | Format | Best fit |
| --- | --- | --- |
| **Foundry project endpoint** | `https://{resource-name}.services.ai.azure.com/api/projects/{project-name}` | Foundry-native project operations and an OpenAI-compatible client obtained through `AIProjectClient` |
| **Azure OpenAI endpoint** | `https://{resource-name}.openai.azure.com/openai/v1/` | Broad OpenAI API compatibility and direct inference with the OpenAI SDK |

Copy the complete endpoint from the Foundry portal's project Overview or Home page. Do not substitute one endpoint for the other merely because both belong to the same project.

### Option A: Foundry SDK with the project endpoint

The Foundry SDK provides language-specific clients for project resources. The Python package is `azure-ai-projects`; the Python chat client it returns builds on the OpenAI SDK. For the current stable 2.x Foundry SDK, install `azure-ai-projects` 2.3.0 or later and OpenAI 3.0.0 or later. Add Azure Identity when using the Entra ID examples in this module:

```powershell
pip install "azure-ai-projects>=2.3.0" "openai>=3.0.0" azure-identity
```

Create an `AIProjectClient` with the project endpoint and an Azure credential:

```python
from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential

project_endpoint = (
    "https://{resource-name}.services.ai.azure.com/"
    "api/projects/{project-name}"
)

credential = DefaultAzureCredential()
project_client = AIProjectClient(
    endpoint=project_endpoint,
    credential=credential,
)
```

For local development, `DefaultAzureCredential` can use the authenticated Azure CLI identity:

```powershell
az login
```

If the account belongs to multiple tenants, the sign-in can require the tenant to be specified explicitly:

```powershell
az login --tenant <tenant-id>
```

The project client supports Foundry-native operations that do not have direct OpenAI equivalents, including:

- Retrieving resource connections.
- Accessing project configuration.
- Enabling tracing.
- Managing datasets and indexes.

Obtain an OpenAI-compatible client from the project client when the app needs to call a model. Close the OpenAI client, project client, and credential after use:

```python
openai_client = None
try:
    openai_client = project_client.get_openai_client()
    response = openai_client.responses.create(
        model="your-model-deployment",
        input="What is Microsoft Foundry?",
    )
    print(response.output_text)
finally:
    if openai_client is not None:
        openai_client.close()
    project_client.close()
    credential.close()
```

> **Version correction:** The linked training unit passes `api_version="2024-10-21"` to `get_openai_client()`. That argument reflects an older SDK pattern and is version-stale for the current stable `azure-ai-projects>=2.3.0` client. Use `project_client.get_openai_client()` without `api_version`. Keep an explicit API version only when intentionally using the version-specific `AzureOpenAI` client shown later.

### Option B: OpenAI SDK with the Azure OpenAI endpoint

Install the OpenAI SDK and Azure Identity:

```powershell
pip install "openai>=3.0.0" azure-identity
```

The recommended identity-based pattern uses a bearer-token provider. The `OpenAI` client accepts that callable through its `api_key` parameter even though no static key is being supplied:

```python
from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from openai import OpenAI

credential = DefaultAzureCredential()
token_provider = get_bearer_token_provider(
    credential,
    "https://ai.azure.com/.default",
)

try:
    with OpenAI(
        base_url="https://{resource-name}.openai.azure.com/openai/v1/",
        api_key=token_provider,
    ) as openai_client:
        # Call the model through openai_client here.
        ...
finally:
    credential.close()
```

The trailing slash is harmless when the complete `/openai/v1/` base URL is used consistently. The key point is to use the endpoint copied from the project rather than inventing a path from another endpoint.

The OpenAI client handles model-inference operations such as:

- Responses API calls.
- Chat completions.
- Image-generation APIs when supported.
- Compatible models exposed through the selected endpoint.

### Authentication methods and configuration delivery

#### Microsoft Entra ID — recommended

Use Entra ID for production where possible because it:

- Runs the application as an assigned identity.
- Supports Azure role-based access control.
- Avoids distributing a long-lived service key.
- Works with developer credentials locally and managed identities in Azure.

`DefaultAzureCredential` checks a chain of supported credential sources. A successful `az login` is a common local-development source; production applications should run under an appropriately authorized workload or managed identity.

#### Explicit API key

The module shows an API key loaded from an environment variable rather than embedded in source:

```python
import os

from openai import OpenAI

with OpenAI(
    base_url="https://{resource-name}.openai.azure.com/openai/v1/",
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
) as openai_client:
    # Call the model through openai_client here.
    ...
```

Store production secrets in a secure service such as Azure Key Vault. Do not commit a real key to a repository, notebook, `.env` file, or screenshot.

#### Deliver configuration with environment variables

Environment variables are a **configuration-delivery mechanism**, not a third authentication method. The value delivered in `OPENAI_API_KEY` still selects API-key authentication. When these standard OpenAI variables are defined, `OpenAI()` can read them automatically:

```text
OPENAI_BASE_URL=https://{resource-name}.openai.azure.com/openai/v1/
OPENAI_API_KEY=<secret>
```

```python
from openai import OpenAI

with OpenAI() as openai_client:
    # Call the model through openai_client here.
    ...
```

`AZURE_OPENAI_API_KEY` in the explicit example and `OPENAI_API_KEY` in the automatic example are not interchangeable magic names. The explicit code can read any variable name chosen by the application; the parameterless `OpenAI()` client recognizes its documented standard variables.

### Version-specific Azure OpenAI client

Use `AzureOpenAI` when functionality specifically requires an Azure OpenAI API version rather than the v1 OpenAI-compatible pattern:

```python
import os

from openai import AzureOpenAI

with AzureOpenAI(
    azure_endpoint="https://{resource-name}.openai.azure.com",
    api_key=os.getenv("AZURE_OPENAI_API_KEY"),
    api_version="2024-10-21",
) as openai_client:
    # Call the version-specific Azure OpenAI API here.
    ...
```

This example corrects a missing comma in the upstream training snippet and normalizes the key variable to `AZURE_OPENAI_API_KEY`. Notice that `azure_endpoint` does not include `/openai/v1/` because `AzureOpenAI` combines the Azure endpoint with the specified API version differently from the `OpenAI(base_url=...)` pattern.

### Which SDK should you choose?

| Requirement | Prefer Foundry SDK | Prefer OpenAI SDK |
| --- | :---: | :---: |
| Project metadata and connections | ✓ |  |
| Foundry Agent Service | ✓ |  |
| Tool invocation and approval workflows | ✓ |  |
| Cloud evaluations | ✓ |  |
| Tracing and observability | ✓ |  |
| Datasets and indexes | ✓ |  |
| Full OpenAI API compatibility |  | ✓ |
| Portability between OpenAI and Azure OpenAI patterns |  | ✓ |
| Straightforward model inference |  | ✓ |
| Minimal dependence on Foundry-specific concepts |  | ✓ |

The SDKs are complementary. One application can use the Foundry SDK for project setup, connections, tracing, or evaluations and an OpenAI client for inference.

### Decision examples

| Scenario | Sensible starting choice |
| --- | --- |
| Existing OpenAI-compatible chat code moving to Azure | OpenAI SDK plus the Azure OpenAI v1 endpoint |
| App must list project connections and then invoke a model | `AIProjectClient` plus its OpenAI-compatible client |
| App manages agents, evaluations, and traces | Foundry SDK |
| Small inference-only service prioritizing portability | OpenAI SDK |
| Production workload with an Azure managed identity | Entra ID through `DefaultAzureCredential` |
| Short-lived prototype where identity setup is unavailable | Key authentication, with the key kept outside source code |

---

## Unit 4 — Generate responses with the Responses API

[Open Unit 4](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/04-responses-api)

The Responses API unifies capabilities associated with earlier ChatCompletions and Assistants patterns. It is the recommended API for most new Foundry chat applications because it provides a simple inference surface and can link multiple turns by response ID.

### Why Responses?

- **Stateful conversation links:** reference an earlier response with `previous_response_id`.
- **Unified request pattern:** send instructions and input through one API.
- **Foundry model reach:** an appropriate OpenAI-compatible Foundry client can invoke supported Azure OpenAI and Foundry direct model deployments.
- **Simple output access:** use `response.output_text` for aggregated generated text.
- **Streaming and async support:** improve perceived responsiveness and overlap independent work.

### Generate a simple response

The `model` value is the deployment name configured in the project:

```python
response = openai_client.responses.create(
    model="gpt-4.1",
    input="What is Microsoft Foundry?",
)

print(response.output_text)
```

Important response properties include:

| Property | Meaning |
| --- | --- |
| `output_text` | Convenience aggregation of generated text output |
| `id` | Unique response identifier used for retrieval or chaining |
| `status` | Processing state, such as `completed` |
| `usage` | Input, output, and total token accounting |
| `model` | Service-reported model identifier; it is not guaranteed to equal the deployment name sent in the request |

```python
response = openai_client.responses.create(
    model="gpt-4.1",
    input="Explain machine learning in simple terms.",
)

print(f"Response: {response.output_text}")
print(f"Response ID: {response.id}")
print(f"Status: {response.status}")
print(f"Tokens used: {response.usage.total_tokens}")
```

### Add instructions and generation controls

`instructions` defines behavior for the current request, similar to a system or developer message:

> **Source correction:** One upstream snippet uses `client.responses.create(...)` even though the surrounding unit names the object `openai_client`. These notes consistently use `openai_client` so the examples compose correctly.

```python
response = openai_client.responses.create(
    model="gpt-4.1",
    instructions=(
        "You are a helpful AI assistant that answers clearly and concisely."
    ),
    input="Write a creative story about AI.",
    temperature=0.8,
    max_output_tokens=200,
)

print(response.output_text)
```

| Parameter | Purpose |
| --- | --- |
| `instructions` | Defines role, behavior, constraints, or tone |
| `input` | Supplies user text or structured input items |
| `temperature` | Controls randomness from 0.0 through 2.0 in models that support it |
| `max_output_tokens` | Caps all tokens generated for the response, including visible output and reasoning tokens where the model uses them |
| `top_p` | Controls nucleus sampling as an alternative randomness control |

Supported parameters vary by model. Do not assume every deployment accepts every sampling control.

### Foundry direct models

When the selected client and endpoint support a model from the broader Foundry catalog, the same Responses pattern applies. The module uses a Phi deployment as an illustration:

```python
response = openai_client.responses.create(
    model="microsoft-phi-4",
    instructions="Answer clearly and concisely.",
    input="What are the benefits of small language models?",
)

print(response.output_text)
```

Always pass the actual deployment name. A catalog model identifier, model family name, and deployment name can differ.

### Chain turns with `previous_response_id`

```python
first = openai_client.responses.create(
    model="gpt-4.1",
    instructions="Explain technology concepts clearly.",
    input="What is machine learning?",
)
print("Assistant:", first.output_text)

second = openai_client.responses.create(
    model="gpt-4.1",
    instructions="Explain technology concepts clearly.",
    input="Can you give me an example?",
    previous_response_id=first.id,
)
print("Assistant:", second.output_text)
```

The second request can interpret the follow-up because it links to the first response. The response ID is an API state reference; it is not the generated text itself.

> **Important instruction nuance:** When a request uses `previous_response_id`, the earlier response's `instructions` are **not** carried forward. Repeat `instructions` on every request when the role, policy, or behavior should continue. This is why both calls above—and every turn in the loop below—supply the instruction again.

### Interactive stateful loop

This corrected pattern only sends `previous_response_id` after a prior response exists:

```python
last_response_id = None

print("Assistant: Enter a prompt (or type 'quit' to exit)")
while True:
    input_text = input("\nYou: ").strip()
    if input_text.lower() == "quit":
        print("Assistant: Goodbye!")
        break
    if not input_text:
        print("Assistant: Please enter a prompt.")
        continue

    request = {
        "model": model_deployment,
        "instructions": "Explain technology concepts clearly.",
        "input": input_text,
    }
    if last_response_id is not None:
        request["previous_response_id"] = last_response_id

    response = openai_client.responses.create(**request)
    print("\nAssistant:", response.output_text)
    last_response_id = response.id
```

The official exercise passes `previous_response_id=None` on the first call. The conditional version above expresses the same progression while avoiding sending an unnecessary null field.

### Manage history manually

Explicit history gives the application direct control over which items are resent:

```python
conversation_history = [
    {
        "type": "message",
        "role": "user",
        "content": "What is machine learning?",
    }
]

first = openai_client.responses.create(
    model="gpt-4.1",
    input=conversation_history,
)
print("Assistant:", first.output_text)

conversation_history += first.output
conversation_history.append(
    {
        "type": "message",
        "role": "user",
        "content": "Can you give me an example?",
    }
)

second = openai_client.responses.create(
    model="gpt-4.1",
    input=conversation_history,
)
print("Assistant:", second.output_text)
```

Manual history is useful when the application must:

- Remove older turns to remain within a context limit.
- Exclude irrelevant or sensitive items.
- Save and restore a conversation from a database.
- Summarize earlier turns before resending them.
- Branch from a curated history rather than one prior response.

### Retrieve a stored response

```python
response_id = "resp_example_id"
previous = openai_client.responses.retrieve(response_id)
print(previous.output_text)
```

Retrieval requires a valid ID that remains accessible in the service and security context. Do not hard-code a sample ID and expect it to exist.

### Context-window and token implications

Stateful does not mean free. The active context can include:

- Instructions and safety rules.
- The current prompt.
- Previous user and assistant messages.
- Tool schemas.
- Tool outputs.
- Retrieved documents or memory.

That material is assembled and tokenized for processing. Longer conversations can therefore increase token use, latency, and cost even when the SDK simplifies state tracking.

### Stream output

Streaming returns events as output becomes available instead of waiting for the entire response:

```python
stream = openai_client.responses.create(
    model="gpt-4.1",
    input="Write a short story about a robot learning to paint.",
    stream=True,
)

response_id = None
for event in stream:
    if event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
    elif event.type == "response.completed":
        response_id = event.response.id
print()
```

Two event types are central to the exercise:

| Event type | Use |
| --- | --- |
| `response.output_text.delta` | Display the next text fragment immediately |
| `response.completed` | Capture the completed response, including its ID |

Printing the entire event object is useful for debugging but does not produce a clean chat experience. Print `event.delta` for text output.

### Use an asynchronous client

Asynchronous I/O is valuable when the application can overlap independent API calls or perform other work while network operations are pending:

```python
import asyncio

from azure.identity.aio import (
    DefaultAzureCredential,
    get_bearer_token_provider,
)
from openai import AsyncOpenAI


async def ask(client: AsyncOpenAI, model: str, prompt: str) -> str:
    response = await client.responses.create(
        model=model,
        input=prompt,
    )
    return response.output_text


async def main() -> None:
    credential = DefaultAzureCredential()
    try:
        token_provider = get_bearer_token_provider(
            credential,
            "https://ai.azure.com/.default",
        )
        prompts = [
            "Explain quantum computing briefly.",
            "Summarize the benefits of async I/O.",
            "Define machine learning in one sentence.",
        ]

        async with AsyncOpenAI(
            base_url="https://{resource-name}.openai.azure.com/openai/v1/",
            api_key=token_provider,
        ) as client:
            results = await asyncio.gather(
                *(ask(client, "gpt-4.1", prompt) for prompt in prompts)
            )

        for prompt, result in zip(prompts, results):
            print(f"Q: {prompt}\nA: {result}\n")
    finally:
        await credential.close()


if __name__ == "__main__":
    asyncio.run(main())
```

A single awaited request generally takes about as long as the equivalent synchronous request. The concurrency benefit appears when independent waits overlap, such as with `asyncio.gather`, or when the program performs other asynchronous work.

Async streaming follows the same event model:

```python
stream = await client.responses.create(
    model="gpt-4.1",
    input="Write a haiku about coding.",
    stream=True,
)

async for event in stream:
    if event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
print()
```

---

## Unit 5 — Generate responses with the ChatCompletions API

[Open Unit 5](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/05-openai-api)

ChatCompletions is an established, widely implemented API across model providers and platforms. Responses is recommended for most new Foundry applications, but ChatCompletions remains important for existing code, model compatibility, and cross-platform integration.

### Submit a prompt

ChatCompletions represents the conversation as an ordered collection of message objects:

```python
completion = openai_client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {
            "role": "system",
            "content": "You are a helpful assistant.",
        },
        {
            "role": "user",
            "content": "When was Microsoft founded?",
        },
    ],
)

print(completion.choices[0].message.content)
```

| Role | Purpose |
| --- | --- |
| `system` | Defines overall instructions, role, tone, and constraints |
| `user` | Contains the user's request |
| `assistant` | Contains an earlier assistant response that should remain in context |

The returned text is nested under the first choice's message content rather than exposed as `response.output_text`.

### Retain context manually

ChatCompletions does not provide the Responses API's response-ID chaining. The client must append every relevant user and assistant message and resend the collection:

```python
conversation_messages = [
    {
        "role": "system",
        "content": (
            "You are a helpful AI assistant that answers questions "
            "and provides information."
        ),
    }
]

print("Assistant: Enter a prompt (or type 'quit' to exit)")
while True:
    input_text = input("\nYou: ").strip()
    if input_text.lower() == "quit":
        print("Assistant: Goodbye!")
        break
    if not input_text:
        print("Assistant: Please enter a prompt.")
        continue

    conversation_messages.append(
        {"role": "user", "content": input_text}
    )

    completion = openai_client.chat.completions.create(
        model=model_deployment,
        messages=conversation_messages,
    )
    assistant_text = completion.choices[0].message.content
    print("\nAssistant:", assistant_text)

    conversation_messages.append(
        {"role": "assistant", "content": assistant_text}
    )
```

If an assistant response is displayed but not appended, a later request does not include that response as context. If old messages are removed, the model can no longer rely on them unless they are summarized or stored elsewhere.

### Responses versus ChatCompletions

| Concern | Responses API | ChatCompletions API |
| --- | --- | --- |
| Recommended for most new Foundry development | Yes | No; still supported and useful |
| User input | `input` | `messages` collection |
| System-level guidance | `instructions` | `system` message |
| Text output | `response.output_text` | `completion.choices[0].message.content` |
| Service-linked conversation state | `previous_response_id` | Not provided |
| Manual history | Supported | Required for multi-turn context |
| Streaming | Response event stream | API-specific completion stream pattern |
| Main strength | Unified, stateful, newer workflow | Mature compatibility and existing ecosystem |

### History costs still apply

Each ChatCompletions turn resends the retained message collection. As it grows:

- Input-token usage increases.
- Requests can become slower and more expensive.
- The conversation can reach the model's context limit.
- Applications need pruning, summarization, retrieval, or persistence strategies.

> **Exam trap:** ChatCompletions can support a multi-turn experience, but the API does not track that history for the client. The application must send the history on each request.

---

## Unit 6 — Exercise: Create a generative AI chat app

[Open Unit 6](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/06-exercise) · [Open the full 45-minute exercise](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/03-foundry-sdk.html)

The Learn unit is a short launcher whose tile shows 10 minutes. The linked MicrosoftLearning lab is the complete exercise and currently estimates approximately 45 minutes. The following walkthrough captures the full lab flow while correcting minor syntax inconsistencies in the upstream explanatory snippets.

> **Attribution:** The workflow, starter-file structure, and code progression in this unit are adapted from MicrosoftLearning's [`03-foundry-sdk` lab](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/Instructions/Exercises/03-foundry-sdk.md) and its starter code. The upstream [`mslearn-ai-studio` repository is licensed under the MIT License](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/LICENSE). The consolidated reference implementations below add validation, current SDK guidance, and explicit client cleanup.

### Prerequisites

- An active Azure subscription with sufficient access to create the required resources.
- Visual Studio Code.
- Python 3.13.x. The lab was tested with Python 3.13.12 and warns that some dependencies might not yet be compiled for Python 3.14.
- Git installed and configured.
- Azure CLI installed.
- Available quota for the selected model in a supported Foundry region.

Some features used by the lab can be in preview or active development.

### Part 1: Create a Microsoft Foundry project

1. Open [https://ai.azure.com](https://ai.azure.com) and sign in.
2. Enable the current/new Foundry experience if the portal prompts for it.
3. Create a project with a unique name.
4. Expand advanced options and select:
   - The default parent Foundry resource name, unless an existing resource is intended.
   - The Azure subscription.
   - A new or existing resource group.
   - A recommended region that supports the model and has quota.
5. Wait for project provisioning to finish and open the project home page.

The project groups the deployment and endpoints used by the application.

### Part 2: Deploy the model

1. Open **Discover > Models** in the Foundry portal.
2. Search for `gpt-5.2`.
3. Review the model card.
4. Deploy it with the default settings.
5. Wait for the deployment to succeed and note its exact deployment name.
6. Optionally test the deployment in the model playground.

Model availability and quota are region-dependent. If the exact exercise model cannot be deployed, choose a chat model that supports **both the Responses and ChatCompletions APIs through the selected Azure OpenAI endpoint**. Use its deployment name consistently, and recognize that output and parameter support can differ from the lab.

### Part 3: Copy the correct endpoint

1. Return to the project **Home** page.
2. Copy the displayed **Azure OpenAI Endpoint**.

> **Critical lab distinction:** This exercise uses the OpenAI SDK and the **Azure OpenAI endpoint**, not the Foundry project endpoint.

The lab uses Microsoft Entra ID authentication. An API key is an alternative, but identity-based authentication is preferred where possible.

### Part 4: Get the starter application

Clone the official repository in Visual Studio Code:

```text
https://github.com/microsoftlearning/mslearn-ai-studio
```

Open this folder:

```text
labfiles/foundry-chat/python/chat-app
```

The starter contains:

| File | Purpose |
| --- | --- |
| `.env` | Local, nonsecret endpoint and deployment-name configuration for this exercise |
| `requirements.txt` | Required Python packages |
| `chat-app.py` | Synchronous starter client |
| `chat-async.py` | Asynchronous starter client |

### Part 5: Prepare the Python environment

1. Install the Visual Studio Code Python extension if required.
2. Run **Python: Select Interpreter** from the Command Palette.
3. Create a virtual environment based on Python 3.13.
4. Open an integrated terminal in `labfiles/foundry-chat/python/chat-app`.
5. Confirm the virtual environment is active.
6. Install the packages:

```powershell
pip install -r requirements.txt
```

The official `requirements.txt` contains:

```text
python-dotenv
aiohttp
azure-identity
openai
```

Configure `.env` with the endpoint copied from the project and the exact deployment name:

```dotenv
AZURE_OPENAI_ENDPOINT="your_azure_openai_endpoint"
MODEL_DEPLOYMENT="your_model_deployment"
```

These two values are configuration, not credentials. The exercise stores **no API key** because it obtains an Entra ID bearer token at runtime. A `.env` filename does not make a value secure: do not add a production API key to this file or commit secrets to source control.

### Part 6: Implement ChatCompletions

Open `chat-app.py` and add the client imports:

```python
from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from openai import OpenAI
```

After loading `AZURE_OPENAI_ENDPOINT` and `MODEL_DEPLOYMENT`, initialize the token provider and client:

```python
token_provider = get_bearer_token_provider(
    DefaultAzureCredential(),
    "https://ai.azure.com/.default",
)

openai_client = OpenAI(
    base_url=azure_openai_endpoint,
    api_key=token_provider,
)
```

This is the lab's incremental initialization snippet. The completed synchronous reference below keeps the credential in a variable and closes both the OpenAI client and Azure credential deterministically.

In the provided prompt loop, request a completion:

```python
completion = openai_client.chat.completions.create(
    model=model_deployment,
    messages=[
        {
            "role": "system",
            "content": (
                "You are a helpful AI assistant that answers questions "
                "and provides information."
            ),
        },
        {"role": "user", "content": input_text},
    ],
)
print(completion.choices[0].message.content)
```

Authenticate and run the application:

```powershell
az login
python chat-app.py
```

Test with:

```text
Tell me about the ELIZA chatbot.
```

Enter `quit` to stop the application.

At this stage, each turn contains only the fixed system message and current user input. It does not retain prior turns.

### Part 7: Replace ChatCompletions with Responses

Replace the completion call with:

```python
response = openai_client.responses.create(
    model=model_deployment,
    instructions=(
        "You are a helpful AI assistant that answers questions "
        "and provides information."
    ),
    input=input_text,
)
print(response.output_text)
```

Run the application and ask:

```text
Tell me about the ELIZA chatbot.
```

Then ask:

```text
How does it compare to modern LLMs?
```

Without a response link or explicit history, the app can lose the referent of “it.” This deliberately demonstrates that merely choosing the Responses API does not automatically connect independent requests.

### Part 8: Add response-ID conversation tracking

Initialize state before the loop:

```python
last_response_id = None
```

Then pass and update the ID:

```python
response = openai_client.responses.create(
    model=model_deployment,
    instructions=(
        "You are a helpful AI assistant that answers questions "
        "and provides information."
    ),
    input=input_text,
    previous_response_id=last_response_id,
)
print(response.output_text)
last_response_id = response.id
```

Run the two ELIZA prompts again. The follow-up should now be interpreted in the earlier response's context.

The official lab passes `None` on the first request. For stricter application code, build the request conditionally as shown in Unit 4. The instruction is deliberately repeated on every turn because a prior response's `instructions` are not inherited through `previous_response_id`.

### Part 9: Stream the response

Replace the non-streaming request with:

```python
stream = openai_client.responses.create(
    model=model_deployment,
    instructions=(
        "You are a helpful AI assistant that answers questions "
        "and provides information."
    ),
    input=input_text,
    previous_response_id=last_response_id,
    stream=True,
)

for event in stream:
    if event.type == "response.output_text.delta":
        print(event.delta, end="", flush=True)
    elif event.type == "response.completed":
        last_response_id = event.response.id
print()
```

Re-run the ELIZA prompts. Output should appear incrementally, and the completed event supplies the ID needed for the next turn.

### Completed synchronous reference

This consolidated version includes configuration validation and the final streaming behavior:

```python
import os

from azure.identity import DefaultAzureCredential, get_bearer_token_provider
from dotenv import load_dotenv
from openai import OpenAI


def required_setting(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise ValueError(f"Missing required setting: {name}")
    return value


def main() -> None:
    load_dotenv()
    azure_openai_endpoint = required_setting("AZURE_OPENAI_ENDPOINT")
    model_deployment = required_setting("MODEL_DEPLOYMENT")

    credential = DefaultAzureCredential()
    try:
        token_provider = get_bearer_token_provider(
            credential,
            "https://ai.azure.com/.default",
        )
        with OpenAI(
            base_url=azure_openai_endpoint,
            api_key=token_provider,
        ) as openai_client:
            last_response_id = None
            print('Enter a prompt, or type "quit" to exit.')

            while True:
                input_text = input("\nYou: ").strip()
                if input_text.lower() == "quit":
                    break
                if not input_text:
                    print("Please enter a prompt.")
                    continue

                request = {
                    "model": model_deployment,
                    "instructions": (
                        "You are a helpful AI assistant that answers questions "
                        "and provides information."
                    ),
                    "input": input_text,
                    "stream": True,
                }
                if last_response_id is not None:
                    request["previous_response_id"] = last_response_id

                print("Assistant: ", end="", flush=True)
                stream = openai_client.responses.create(**request)
                for event in stream:
                    if event.type == "response.output_text.delta":
                        print(event.delta, end="", flush=True)
                    elif event.type == "response.completed":
                        last_response_id = event.response.id
                print()
    finally:
        credential.close()


if __name__ == "__main__":
    main()
```

### Part 10: Implement the asynchronous version

Open `chat-async.py` and import the asynchronous clients:

```python
import asyncio

from azure.identity.aio import (
    DefaultAzureCredential,
    get_bearer_token_provider,
)
from openai import AsyncOpenAI
```

Initialize the credential and token provider, then keep the prompt loop inside an asynchronous client context manager:

```python
credential = DefaultAzureCredential()
try:
    token_provider = get_bearer_token_provider(
        credential,
        "https://ai.azure.com/.default",
    )
    async with AsyncOpenAI(
        base_url=azure_openai_endpoint,
        api_key=token_provider,
    ) as async_client:
        # Keep the prompt loop and awaited calls inside this block.
        ...
finally:
    await credential.close()
```

Within the `async with` block, await each response and update the conversation ID:

```python
response = await async_client.responses.create(
    model=model_deployment,
    instructions=(
        "You are a helpful AI assistant that answers questions "
        "and provides information."
    ),
    input=input_text,
    previous_response_id=last_response_id,
)
print("Assistant:", response.output_text)
last_response_id = response.id
```

The `async with` block closes `AsyncOpenAI`; the `finally` block closes the asynchronous Azure credential even when a request fails.

Run the async app:

```powershell
python chat-async.py
```

Test with:

```text
Tell me about the Turing test.
```

Then enter `quit`.

### Completed asynchronous reference

```python
import asyncio
import os

from azure.identity.aio import (
    DefaultAzureCredential,
    get_bearer_token_provider,
)
from dotenv import load_dotenv
from openai import AsyncOpenAI


def required_setting(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise ValueError(f"Missing required setting: {name}")
    return value


async def main() -> None:
    load_dotenv()
    azure_openai_endpoint = required_setting("AZURE_OPENAI_ENDPOINT")
    model_deployment = required_setting("MODEL_DEPLOYMENT")

    credential = DefaultAzureCredential()
    try:
        token_provider = get_bearer_token_provider(
            credential,
            "https://ai.azure.com/.default",
        )
        async with AsyncOpenAI(
            base_url=azure_openai_endpoint,
            api_key=token_provider,
        ) as async_client:
            last_response_id = None
            print('Enter a prompt, or type "quit" to exit.')
            while True:
                input_text = input("\nYou: ").strip()
                if input_text.lower() == "quit":
                    break
                if not input_text:
                    print("Please enter a prompt.")
                    continue

                request = {
                    "model": model_deployment,
                    "instructions": (
                        "You are a helpful AI assistant that answers questions "
                        "and provides information."
                    ),
                    "input": input_text,
                }
                if last_response_id is not None:
                    request["previous_response_id"] = last_response_id

                response = await async_client.responses.create(**request)
                print("Assistant:", response.output_text)
                last_response_id = response.id
    finally:
        await credential.close()


if __name__ == "__main__":
    asyncio.run(main())
```

The lab demonstrates async syntax with one request at a time. That keeps the interactive conversation ordered; concurrency is useful for independent requests, not for turns that depend on each other.

### Common exercise failures

| Symptom | Likely cause | Check |
| --- | --- | --- |
| Credential cannot obtain a token | Azure CLI is not signed in, wrong tenant, or no usable credential | Run `az login`; verify the selected account and tenant |
| HTTP 401 or 403 | Identity lacks access or token/key is invalid | Verify project access, role assignment, and credential source |
| HTTP 404 | Wrong endpoint path or deployment name | Copy the Azure OpenAI endpoint again and verify `MODEL_DEPLOYMENT` |
| Model not found | Model family name used instead of the actual deployment name | Open project deployments and copy the deployment name exactly |
| Follow-up lacks context | Previous response ID was not sent or history was not retained | Update and resend `last_response_id` |
| Output appears only at the end | Non-streaming request or delta events are not printed | Set `stream=True` and handle `response.output_text.delta` |
| Parameter rejected | Deployment does not support that parameter | Remove the parameter or consult the selected model's documentation |
| `.env` appears ignored | Terminal is in the wrong folder or variable names differ | Run from the app folder and use the exact names in the starter file |

### Part 11: Clean up

When the project is no longer needed:

1. Open the Azure portal.
2. Open the resource group that contains the exercise resources.
3. Verify that it contains only resources intended for deletion.
4. Delete the resource group to avoid ongoing charges.

Deleting a resource group is destructive. Confirm its contents before completing this cleanup step.

### Lab completion record

- [ ] Foundry project created in a recommended region
- [ ] `gpt-5.2` deployed and exact deployment name recorded
- [ ] Azure OpenAI endpoint copied from the project Home page
- [ ] Official repository cloned
- [ ] Python 3.13 virtual environment created
- [ ] Requirements installed
- [ ] `.env` updated with endpoint and deployment name
- [ ] Azure CLI signed in to the correct tenant and subscription
- [ ] ChatCompletions version executed successfully
- [ ] Responses version executed successfully
- [ ] Lost context reproduced before tracking was added
- [ ] `previous_response_id` tracking implemented and verified
- [ ] Streaming deltas displayed incrementally
- [ ] Async client executed successfully
- [ ] Resources removed when no longer required

---

## Unit 7 — Knowledge check

[Open Unit 7](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/07-knowledge-check)

The following are the three official questions and answer choices in their original order.

### 1. Which endpoint offers the broadest support for OpenAI APIs with Foundry Models?

- The Foundry project endpoint
- **The Azure OpenAI endpoint**
- The Foundry Tools endpoint

**Why:** The Azure OpenAI `/openai/v1` endpoint exposes the broadest OpenAI-compatible API surface. The project endpoint is the entry point for Foundry-native project features.

### 2. Which package must you install to use the Microsoft Foundry SDK in Python?

- Package `azure-foundry`
- **Package `azure-ai-projects`**
- Package `microsoft-foundry-sdk`

**Why:** `azure-ai-projects` provides `AIProjectClient`. `azure-identity` supplies Azure credential implementations, and `openai` supplies the OpenAI-compatible model client used in the Python examples.

### 3. Which method do you use to generate responses with the Responses API?

- `client.chat.completions.create()`
- `client.get_response_id()`
- **`client.responses.create()`**

**Why:** `responses.create()` creates a Responses API request. `chat.completions.create()` invokes the separate ChatCompletions API, and `get_response_id()` is not the creation method.

### Additional self-test

1. An application needs project connections, tracing, and datasets. Which SDK should be the starting choice?
2. Which endpoint format should a portable inference-only OpenAI client normally use in this module?
3. Why is a deployment name passed in the `model` argument rather than assuming the catalog model name?
4. What Azure Identity scope is used by the bearer-token provider in the Python samples?
5. A Responses API follow-up cannot resolve “it.” What request field is probably missing?
6. Which two streaming event types does the exercise handle, and what does each provide?
7. How does ChatCompletions retain multi-turn context?
8. Why does replacing a synchronous call with one awaited asynchronous call not automatically make it faster?
9. Which two settings are stored in the exercise `.env`, and which secret is deliberately absent?
10. When would manual Responses API history be preferable to `previous_response_id` chaining?

<details>
<summary>Self-test answers</summary>

1. The Microsoft Foundry SDK, using `AIProjectClient`, because the workload requires Foundry-native project capabilities.
2. `https://{resource-name}.openai.azure.com/openai/v1/`, the Azure OpenAI v1 endpoint.
3. A deployment is the callable route, can be named independently, and multiple deployments can use the same underlying model with different configurations.
4. `https://ai.azure.com/.default`.
5. `previous_response_id`, unless the application instead resends explicit conversation history.
6. `response.output_text.delta` supplies each text fragment; `response.completed` supplies the completed response and its ID.
7. The application appends user and assistant messages to an ordered `messages` collection and resends the relevant collection on every request.
8. A single awaited network operation still has to finish. Async improves utilization when independent operations or other asynchronous work can overlap.
9. `AZURE_OPENAI_ENDPOINT` and `MODEL_DEPLOYMENT`; no API key is stored because the exercise uses Entra ID.
10. When the application needs to prune, summarize, selectively include, persist, restore, or branch conversation content explicitly.

</details>

---

## Unit 8 — Summary

[Open Unit 8](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/08-summary)

Microsoft Foundry supports two complementary development approaches:

- Use the **Foundry SDK** and project endpoint for project configuration, connections, agents, evaluations, tracing, datasets, indexes, and other Foundry-native capabilities.
- Use the **OpenAI SDK** and an appropriate endpoint for direct model inference and broad OpenAI API compatibility.

The module's complete development flow is:

1. Explore a deployed model in the playground.
2. Generate a code sample for the intended API, language, and SDK.
3. Choose the project or Azure OpenAI endpoint based on required capabilities.
4. Prefer Entra ID authentication and keep secrets outside code.
5. Use Responses for most new applications.
6. Link response IDs or manage explicit history for multi-turn context.
7. Stream long output for better perceived responsiveness.
8. Use async when independent work can overlap.
9. Recognize and maintain ChatCompletions applications when compatibility requires them.

### Next steps after this module

- Add robust retry, timeout, logging, and telemetry behavior.
- Store user/session conversation state outside process memory when the app must scale or survive restarts.
- Evaluate quality, safety, latency, and cost with representative prompts.
- Add retrieval or tools when the model needs current or organization-specific information.
- Use managed identity and least-privilege role assignments in Azure-hosted production applications.
- Monitor SDK and API-version release notes before upgrading dependencies.

## High-yield review sheet

### Endpoint and SDK clues

| Requirement or clue | Best answer |
| --- | --- |
| Project connections, configuration, datasets, indexes, tracing | Foundry SDK with the project endpoint |
| Agents, evaluations, and Foundry-native workflows | Foundry SDK |
| Broadest OpenAI API compatibility | Azure OpenAI endpoint |
| Portable inference-oriented code | OpenAI SDK |
| Obtain an OpenAI-compatible client from a project | `project_client.get_openai_client()` |
| Current stable Python baseline | `azure-ai-projects>=2.3.0` and `openai>=3.0.0` |
| Project endpoint host | `*.services.ai.azure.com/api/projects/...` |
| Azure OpenAI v1 endpoint host/path | `*.openai.azure.com/openai/v1/` |

### Authentication and configuration clues

| Requirement or clue | Best answer |
| --- | --- |
| Recommended production authentication | Microsoft Entra ID |
| Local identity used by samples | `DefaultAzureCredential`, commonly backed by `az login` |
| Bearer-token scope | `https://ai.azure.com/.default` |
| Explicit key variable in one module example | `AZURE_OPENAI_API_KEY` |
| Automatic variables recognized by `OpenAI()` | `OPENAI_BASE_URL` and `OPENAI_API_KEY` |
| Role of environment variables | Deliver configuration; they do not constitute a separate authentication method |
| Secure production secret storage | Azure Key Vault or another approved secret store |
| Exercise `.env` contents | Nonsecret endpoint and deployment name; no key or token |

### API and state clues

| Requirement or clue | Responses API | ChatCompletions API |
| --- | --- | --- |
| Creation method | `client.responses.create()` | `client.chat.completions.create()` |
| User content | `input=` | A `user` message |
| System guidance | `instructions=` | A `system` message |
| Text result | `response.output_text` | `completion.choices[0].message.content` |
| Linked state | `previous_response_id` | None |
| Manual context | Input-item history | Message collection |
| Recommended for new Foundry apps | Yes | Usually no |
| Strength | Unified, stateful workflow | Established compatibility |

### Streaming and async clues

| Clue | Meaning |
| --- | --- |
| `stream=True` | Return incremental events |
| `response.output_text.delta` | Next text fragment |
| `response.completed` | Final response metadata and ID |
| `AsyncOpenAI` | Nonblocking OpenAI client |
| `await client.responses.create(...)` | Await one asynchronous network request |
| `asyncio.gather(...)` | Overlap multiple independent awaitables |
| `async for event in stream` | Consume an asynchronous stream |

### Common exam and implementation traps

- The Foundry project endpoint and Azure OpenAI endpoint belong to the same project but are not interchangeable URLs.
- The SDK choice does not by itself determine the chat API; an OpenAI-compatible client can expose both Responses and ChatCompletions.
- With current stable Foundry packages, call `project_client.get_openai_client()` without `api_version`; use `api_version` only with the version-specific `AzureOpenAI` pattern.
- `api_key=token_provider` can represent Entra bearer-token authentication rather than a static key.
- `model=` normally receives the **deployment name**, which can differ from the catalog model name.
- `response.model` is the service-reported model identifier and need not reproduce the deployment name.
- Responses is not conversational merely because the same client object is reused; link requests with `previous_response_id` or resend history.
- `previous_response_id` links conversation context, but it does not carry earlier `instructions`; repeat instructions that should remain in force.
- ChatCompletions does not retain server-linked history for the client; resend the relevant messages.
- Longer retained context increases token use even when response-ID chaining simplifies the code.
- Streaming improves perceived responsiveness; it does not necessarily reduce total generation time.
- Async does not make one dependent request intrinsically faster. It enables other work to proceed while I/O waits.
- `response.output_text` belongs to Responses; `choices[0].message.content` belongs to ChatCompletions.
- `max_output_tokens` includes visible output and reasoning tokens where applicable; it is not solely a visible-text allowance.
- Supported sampling parameters vary by model deployment.
- Never commit an API key. The exercise avoids a key entirely by using Entra ID.
- The Learn exercise tile says 10 minutes, but the full official lab estimates 45 minutes.

## Sources and further reading

- [Module landing page](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/)
- [Unit 1: Introduction](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/01-introduction)
- [Unit 2: Explore with the model playground](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/02-chat-playground)
- [Unit 3: Choose an endpoint and SDK](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/03-microsoft-foundry-sdk)
- [Unit 4: Generate responses with the Responses API](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/04-responses-api)
- [Unit 5: Generate responses with the ChatCompletions API](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/05-openai-api)
- [Unit 6: Exercise launcher](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/06-exercise)
- [Unit 6: Full exercise](https://microsoftlearning.github.io/mslearn-ai-studio/Instructions/Exercises/03-foundry-sdk.html)
- [Unit 6 exercise source on GitHub](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/Instructions/Exercises/03-foundry-sdk.md)
- [Unit 7: Knowledge check](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/07-knowledge-check)
- [Unit 8: Summary](https://learn.microsoft.com/en-us/training/modules/foundry-sdk/08-summary)
- [Microsoft Foundry SDKs and endpoints](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview)
- [`AIProjectClient` Python reference](https://learn.microsoft.com/en-us/python/api/azure-ai-projects/azure.ai.projects.aiprojectclient?view=azure-python)
- [Azure OpenAI Responses API](https://learn.microsoft.com/en-us/azure/foundry/openai/how-to/responses)
- [Official exercise repository](https://github.com/MicrosoftLearning/mslearn-ai-studio)
- [Upstream MIT License](https://github.com/MicrosoftLearning/mslearn-ai-studio/blob/main/LICENSE)
- [Official starter `requirements.txt`](https://raw.githubusercontent.com/MicrosoftLearning/mslearn-ai-studio/main/labfiles/foundry-chat/python/chat-app/requirements.txt)
- [Official synchronous starter](https://raw.githubusercontent.com/MicrosoftLearning/mslearn-ai-studio/main/labfiles/foundry-chat/python/chat-app/chat-app.py)
- [Official asynchronous starter](https://raw.githubusercontent.com/MicrosoftLearning/mslearn-ai-studio/main/labfiles/foundry-chat/python/chat-app/chat-async.py)

## Glossary

| Term | Definition |
| --- | --- |
| API key | Static secret used to authorize requests; keep it outside source control and store it securely. |
| API version | Identifier selecting a specific Azure API contract when a versioned client such as `AzureOpenAI` requires one. |
| Async I/O | Execution model that allows other work to proceed while a task waits for an I/O operation. |
| `AsyncOpenAI` | Asynchronous Python client from the OpenAI SDK. |
| Authentication | Process by which a service establishes the caller's identity or validates its credential. |
| Authorization | Decision about which resources and operations an authenticated identity may access. |
| Azure AI Projects | Client-library family represented by the Python package `azure-ai-projects`. |
| Azure OpenAI endpoint | Project-associated endpoint under `*.openai.azure.com`, including the `/openai/v1/` base path for the OpenAI-compatible v1 API. |
| `AzureOpenAI` | OpenAI SDK client used when calling Azure OpenAI with an explicit Azure endpoint and API version. |
| Bearer token | Short-lived access token presented by a client to prove authorization. |
| Chat API | API surface used to send conversational input and receive model-generated output. |
| ChatCompletions API | Established API that accepts an ordered `messages` collection and returns one or more completion choices. |
| Client SDK | Language library that wraps authentication, HTTP requests, retries, serialization, and response parsing. |
| Concurrent request | Independent request executed so its wait time overlaps other work or requests. |
| Context window | Maximum tokenized input and generated content a model can consider in one inference context. |
| Conversation history | Earlier user and assistant content retained or resent to make later turns context-aware. |
| `DefaultAzureCredential` | Azure Identity credential chain that tries supported developer and workload identity sources. |
| Deployment | Callable configured instance or route for a model. |
| Deployment name | Project-defined name supplied in the request's `model` field to select a deployment. |
| Endpoint | Base URL to which an SDK or application sends service requests. |
| Environment variable | Name/value configuration delivery mechanism; it can carry an endpoint, deployment name, token, or key but is not itself an authentication method. |
| Event stream | Ordered sequence of partial and lifecycle events returned by a streaming response. |
| Foundry project | Logical container that organizes model deployments, connections, data, evaluations, agents, and related assets. |
| Foundry project endpoint | URL under `*.services.ai.azure.com/api/projects/...` used for project-scoped Foundry APIs. |
| Microsoft Foundry SDK | SDK for project-native Foundry operations, exposed in Python through `azure-ai-projects`. |
| Foundry direct model | Non-Azure-OpenAI model from the wider Foundry catalog, exposed through compatible Foundry model infrastructure. |
| `get_bearer_token_provider` | Azure Identity helper that returns a callable used by an SDK to obtain and refresh bearer tokens. |
| `get_openai_client` | `AIProjectClient` method that returns an OpenAI-compatible client associated with a Foundry project. |
| Inference | Running input through a deployed model to generate output. |
| Instructions | Responses API field that guides the current request's role, behavior, constraints, or tone; earlier instructions are not carried through `previous_response_id`. |
| Key Vault | Azure service for securely storing and controlling access to secrets, keys, and certificates. |
| `last_response_id` | Application variable commonly used to remember the ID that should be linked into the next request. |
| Managed identity | Microsoft Entra identity assigned to an Azure resource so code can authenticate without storing a credential. |
| `max_output_tokens` | Responses API upper bound covering visible output plus reasoning tokens where the selected model uses them. |
| Message | Role-tagged content item used by ChatCompletions and explicit-history patterns. |
| Model | Underlying trained generative AI system; it becomes callable through a deployment. |
| Model playground | Foundry portal interface for interactively testing a deployed model and generating starter code. |
| Microsoft Entra ID | Microsoft's cloud identity and access-management service, used here to issue bearer tokens for an authorized user, workload, or managed identity. |
| Multi-turn conversation | Interaction in which a later request depends on one or more earlier turns. |
| Nucleus sampling | Token-sampling strategy controlled by `top_p`, which restricts choices to a cumulative probability mass. |
| OpenAI-compatible client | Client exposing OpenAI-style APIs while targeting a compatible Microsoft Foundry or Azure OpenAI endpoint. |
| OpenAI SDK | Official OpenAI client library used in this module for Responses and ChatCompletions inference. |
| `OPENAI_API_KEY` | Standard environment variable the OpenAI client can read automatically for key authentication. |
| `OPENAI_BASE_URL` | Standard environment variable the OpenAI client can read automatically for its service base URL. |
| `output_text` | Responses API convenience property containing aggregated generated text. |
| `previous_response_id` | Responses API field linking a new request to earlier conversation context; it does not carry the earlier response's `instructions`. |
| Project client | `AIProjectClient` instance used for Foundry-native project operations. |
| Prompt | User input or instruction supplied to a generative model. |
| Response ID | Unique identifier for a Responses API result, used for retrieval or conversation chaining. |
| Response model identifier | Service-reported value in `response.model`; it can differ from the deployment name supplied in the request. |
| Responses API | Recommended API for most new Foundry chat applications, supporting unified input, response objects, linked state, streaming, and async use. |
| Role-based access control (RBAC) | Authorization model that assigns roles and permitted actions to identities at an Azure scope. |
| Role | Message label such as `system`, `user`, or `assistant` that tells the model how to interpret content. |
| SDK | Software development kit that exposes service operations as language-specific objects and methods. |
| Stateful conversation | Conversation in which later turns can be interpreted using retained or linked earlier context. |
| Streaming | Returning partial output as it becomes available rather than waiting for the complete response. |
| System message | ChatCompletions message that supplies high-priority guidance; it affects later turns only while the application continues to include it in the messages sent to the API. |
| Temperature | Sampling control that adjusts output randomness for models that support it. |
| Token | Unit into which model input and output are encoded for processing and usage accounting. |
| Token provider | Callable that obtains and refreshes an access token for an SDK client. |
| `top_p` | Nucleus-sampling parameter that limits candidate tokens by cumulative probability. |
| Usage | Response metadata describing input, output, and total token consumption. |
| Virtual environment | Isolated Python environment used to keep a project's package dependencies separate. |
