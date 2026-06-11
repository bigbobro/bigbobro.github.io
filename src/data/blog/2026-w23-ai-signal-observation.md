---
author: BigBoBro
title: "2026-W23 AI 信号观察：AI 系统正在走向可配置工作流"
pubDatetime: 2026-06-11T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "一篇 2026-W23 的 AI 信号观察：Codex、Mellum 2、Cosmos 3 和搜索代理都在说明，AI 系统正在从模型能力展示走向可配置、可部署、可接入工作流的基础设施。"
---

这不是完整行业周报，也不是把所有 AI 新闻重新列一遍。

我的出发点还是一样：把这一周看到的研究论文、产品动态、开发者工具和 newsletter 放在一起，看它们有没有指向同一个变化。

这一周我看到的主线是：**AI 系统正在从模型能力走向可配置工作流。**

这周不是某一个大模型单独刷屏，而是一个更产品化、更工程化的趋势：AI 系统正在从“模型能力展示”走向“可配置、可部署、可接入工作流”的基础设施。

三个头部信号分别落在不同方向上：Codex 往岗位插件和 Sites 扩张，Mellum 2 把开放代码模型放进 agentic coding，Cosmos 3 把 world model 明确推向 physical AI。与此同时，搜索代理的架构信号在研究和生产侧同时出现，但它还需要下一周继续观察是否会转化为 adoption、开源实现或复现热度。

时间范围是 2026-W23：2026-06-01 到 2026-06-07。

## 一句话判断

W23 的关键词不是“更大的模型”，而是“更可用的系统”。

可配置的工作流入口、面向工程任务循环的代码模型、面向 physical AI 的世界模型，以及正在工程化的搜索代理，都在说明一件事：AI 的竞争点继续从模型本身往系统层移动。

如果这个方向继续成立，接下来值得看的不是单个 demo 是否惊艳，而是这些系统能不能进入真实组织流程：能不能连接工具，能不能被复用，能不能被评估，能不能被部署，能不能稳定地把模型能力变成工作成果。

## 1. Codex 从写代码走向角色工作流

应用侧和阅读侧都指向同一个 OpenAI Codex 发布：Codex 不只是增加单点编码能力，而是在 Plugins 和 Sites 上把技能包、应用连接器、角色化指令和可分享站点/应用能力组合起来。

这个信号的重要性在于，编码代理正在被包装成面向具体岗位的工作流入口。如果 Codex 的核心卖点从“帮开发者改代码”扩展为“给不同岗位配置技能、连接器和可部署产物”，AI 工具的竞争焦点会更靠近组织工作流和分发，而不是单纯模型能力。

本周看到的具体变化是：OpenAI Codex 新增 Plugins 和 Sites；Ben's Bites 描述了技能、应用连接器和角色化指令，TLDR AI 则强调数据分析、创意生产、销售、产品设计、股票投资和投行等六类角色插件。

来源：[Codex has two new additions: Plugins and Sites](https://openai.com/index/codex-for-every-role-tool-workflow/)，[Codex new Capabilities](https://openai.com/index/codex-for-every-role-tool-workflow/?utm_source=tldrai)

## 2. Mellum 2 把代码模型推向代理工作流

研究侧出现 JetBrains 的 Mellum 2 技术报告，阅读侧也将它作为值得长读的模型发布来跟踪。两边共同强调的不是普通补全模型，而是面向软件工程、推理、工具调用、函数调用和 agentic workflows 的开放权重 12B MoE 模型。

代码模型正在从“补全代码”转向“承载工程任务循环”。这类模型如果在成本、开放权重和工具使用上形成稳定优势，会改变团队部署 coding agent 的门槛。

JetBrains 发布的 Mellum 2 是开放权重 12B 参数 MoE，每 token 激活 2.5B 参数，并把软件工程、编码、调试、多步推理、工具/函数调用和代理式编码列为目标场景。

来源：[Mellum2 Technical Report](https://huggingface.co/papers/2605.31268)，[JetBrains's Mellum 2](https://arxiv.org/abs/2605.31268?utm_source=tldrai)

## 3. Physical AI 世界模型成为本周技术注意力

研究侧跟踪了 [Cosmos 3: Omnimodal World Models for Physical AI](https://huggingface.co/papers/2606.02800)，阅读侧也覆盖 NVIDIA Cosmos 3 的发布。这个跨层信号的重点在于，世界模型不再只是视频生成叙事，而被明确放进 physical AI、动作、多模态生成和开发者训练成本的语境里。

如果 physical AI 的基础模型开始以开放、预训练、低数据成本的方式进入开发者生态，机器人、仿真、视频/动作生成和具身数据管线之间的边界会进一步变薄。

本周的具体事件是：研究层出现 Cosmos 3 论文条目；阅读层称 NVIDIA Cosmos 3 是面向 physical AI 的开放基础模型，覆盖文本、图像、视频、环境声音和动作，并旨在减少开发者训练数据和成本。

来源：[Cosmos 3: Omnimodal World Models for Physical AI](https://huggingface.co/papers/2606.02800)，[NVIDIA Launches Cosmos 3](https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai?utm_source=tldrai)

## 4. 搜索代理从检索器走向可控工具链

搜索代理是这周值得继续跟踪的方向。

研究侧同时出现 GrepSeek 和 Harness-1：一个让搜索代理直接用 shell 命令与语料交互，另一个把搜索决策和可恢复状态外置到 harness。阅读侧也出现 Perplexity 的 Search as Code 和 Mistral Search Toolkit，说明生产侧正在寻找更可编排、可评估的搜索管线。

这个方向值得跟踪，因为深度研究和检索增强系统的瓶颈越来越像工程控制问题：状态如何保存、证据如何验证、预算如何渲染、模型如何直接配置搜索流程。

但我暂时不会把它写成头部信号。它本周还更像架构趋势，而不是单一爆点。下周要看的，是 Search as Code、Mistral Search Toolkit、GrepSeek 或 Harness-1 是否出现开源实现、基准复现、企业采用案例，或被其他 weekly sources 同时引用。

来源：[GrepSeek](https://huggingface.co/papers/2605.29307)，[Harness-1](https://huggingface.co/papers/2606.02373)，[Rethinking Search as Code Generation](https://research.perplexity.ai/articles/rethinking-search-as-code-generation?utm_source=tldrai)，[Mistral Search Toolkit](https://mistral.ai/news/search-toolkit/?utm_source=tldrai)

## 没有放进主线的信号

有几个主题本周也值得知道，但我没有把它们提升为头部信号：

- **Opus 4.8 与 ARC-AGI-3**：应用层和阅读层确实共享同一个 benchmark 故事，但证据偏性能标题，和本周更强的产品工作流、代码模型、physical AI 信号相比不够厚。
- **NVIDIA Nemotron 3 / 3.5 safety**：NVIDIA 频繁出现，但候选分散在不同模型和安全发布上，尚未形成一个清晰的跨层周信号。
- **Ideogram 4 JSON prompting**：这是有趣的阅读层项目，但跨层共振弱，应用层 hint 不足以把它提升为本周主信号。

## 可选阅读

### Anthropic 的 confidential S-1 是资本市场信号

应用侧和阅读侧指向同一份 Anthropic confidential draft S-1 消息。它是重要背景读物，但本周证据更偏公司融资/上市进程，不是技术或产品层面的跨层趋势。

Anthropic 的上市准备会影响 AI 基础模型公司的融资、治理和市场预期，但它不应被误读为本周技术路线本身的共振。

来源：[Anthropic filed a confidential S-1](https://www.anthropic.com/news/confidential-draft-s1-sec)，[Anthropic Filed a Confidential Draft IPO Registration](https://www.anthropic.com/news/confidential-draft-s1-sec?utm_source=tldrai)

### Video Agents 值得作为实践侧阅读

应用侧和阅读侧都指向同一个 Latent Space Video Agents 内容。它连接了 Grok Imagine、视频生成、多模态模型和实时世界模型，但当前更像实践访谈和方向讨论，尚未形成研究层共同验证。

视频代理可能把多模态生成从单次输出推向可交互、可规划的系统，但本周证据主要来自同一内容在两个信息层的扩散。

来源：[Video Agents](https://www.latent.space/p/video-agents)，[Why Video Agent models are next](https://www.latent.space/p/video-agents?utm_source=tldrai)

## 最后

这周让我更确定的是：AI 产品的竞争正在继续往模型外面走。

模型能力当然还是底座，但如果 AI 系统要真的进入工作流，后面会越来越多地比这些东西：能不能被配置，能不能连接工具，能不能部署到用户实际场景，能不能被评估，能不能把一次性的模型输出变成可复用的工作资产。

这也解释了为什么最近几周的信号看起来都在绕着同一个主题转。AI 从“会回答”走向“会长期干活”，中间缺的不是一个功能，而是一整套可运行的系统。

这就是我这周看到的 AI 信号。
