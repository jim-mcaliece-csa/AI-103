# AI-103: Developing AI Apps and Agents on Azure

Study notes, hands-on exercises, and reference material for **Microsoft Exam AI-103: Developing AI Apps and Agents on Azure**.

> [!IMPORTANT]
> The skills measured below apply to the English-language exam beginning **April 16, 2026**. Microsoft updates certification exams periodically, so confirm the current objectives before scheduling your exam.

## Official Study Guide

- [Study guide for Exam AI-103: Developing AI Apps and Agents on Azure](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103)
- Passing score: **700 or greater**
- Primary development language: **Python**

## Skills Measured

| Domain | Exam Weight |
| --- | ---: |
| Plan and manage an Azure AI solution | 25–30% |
| Implement generative AI and agentic solutions | 30–35% |
| Implement computer vision solutions | 10–15% |
| Implement text analysis solutions | 10–15% |
| Implement information extraction solutions | 10–15% |

## Study Checklist

### 1. Plan and Manage an Azure AI Solution

- [ ] Choose appropriate models and Microsoft Foundry services
- [ ] Select retrieval, indexing, memory, tools, and knowledge integrations
- [ ] Design Azure infrastructure and deployment options
- [ ] Configure model and agent deployments
- [ ] Integrate Foundry projects with CI/CD pipelines
- [ ] Manage quotas, scaling, rate limits, and costs
- [ ] Monitor model quality, safety, ingestion, indexes, and relevance
- [ ] Configure managed identities, private networking, keyless authentication, and role policies
- [ ] Implement content filters, guardrails, evaluations, auditing, and approval workflows

### 2. Implement Generative AI and Agentic Solutions

- [ ] Deploy and consume language, code, small, and multimodal models
- [ ] Implement retrieval-augmented generation (RAG)
- [ ] Design multistep and tool-augmented workflows
- [ ] Evaluate fabrication, relevance, quality, and safety
- [ ] Connect applications to Foundry projects with SDKs and connectors
- [ ] Define agent roles, goals, memory, conversation tracking, and tool schemas
- [ ] Integrate retrieval, APIs, functions, search, and knowledge stores
- [ ] Implement orchestrated multi-agent solutions
- [ ] Add safeguards and human approval controls
- [ ] Implement tracing, token analytics, safety signals, and latency monitoring
- [ ] Tune prompts, model parameters, reflection, and self-critique loops

### 3. Implement Computer Vision Solutions

- [ ] Generate and edit images and videos
- [ ] Implement inpainting, masks, and prompt-driven modifications
- [ ] Analyze images and video with multimodal models
- [ ] Generate captions, alt text, and extended descriptions
- [ ] Build visual question-answering solutions grounded in evidence
- [ ] Use Azure Content Understanding for visual extraction
- [ ] Identify objects, components, and regions
- [ ] Detect unsafe visual content and indirect prompt injection
- [ ] Apply watermarks, brand rules, and visual policy controls

### 4. Implement Text Analysis Solutions

- [ ] Extract entities, topics, summaries, and structured JSON
- [ ] Detect sentiment, tone, safety issues, and sensitive content
- [ ] Translate text with Azure Translator or language models
- [ ] Customize outputs for domain-specific tasks
- [ ] Implement speech-to-text and text-to-speech workflows
- [ ] Add speech and custom speech models to agents
- [ ] Reason over and translate audio inputs

### 5. Implement Information Extraction Solutions

- [ ] Ingest and index documents, images, audio, and video
- [ ] Configure semantic, hybrid, and vector search
- [ ] Enrich content with built-in and custom skills
- [ ] Build RAG ingestion pipelines with OCR
- [ ] Connect retrieval pipelines to workflows and agent tools
- [ ] Combine OCR, layout analysis, and field extraction
- [ ] Use Content Understanding to produce grounded structured or Markdown output

## Recommended Study Approach

1. Review every objective in the official study guide.
2. Prioritize **generative AI and agents**, followed by **planning and management**; together, they account for most of the exam.
3. Build small Python projects that cover RAG, tool-calling agents, multi-agent orchestration, evaluation, monitoring, security, vision, speech, and document extraction.
4. Record lessons learned and code examples in this repository.
5. Use the [Microsoft exam sandbox](https://aka.ms/examdemo) to become familiar with the exam interface.
6. Recheck the official study guide shortly before the exam for objective changes.

## Suggested Repository Structure

```text
.
├── README.md
├── 01-plan-and-manage/
├── 02-generative-ai-and-agents/
├── 03-computer-vision/
├── 04-text-and-speech/
├── 05-information-extraction/
├── labs/
└── practice-questions/
```

## Microsoft Resources

- [Microsoft Foundry documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/)
- [Azure AI services documentation](https://learn.microsoft.com/en-us/azure/ai-services/)
- [Azure AI Search documentation](https://learn.microsoft.com/en-us/azure/search/)
- [Azure OpenAI documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/)
- [Azure AI Speech documentation](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/)
- [Azure AI Vision documentation](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/)
- [Azure AI Document Intelligence documentation](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/)

---

This repository is an independent study resource and is not affiliated with or endorsed by Microsoft.
