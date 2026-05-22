---
author: BigBoBro
title: "2026-W21 AI 信号观察：Agent 的操作层开始成形"
pubDatetime: 2026-05-23T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "一篇 2026-W21 的 AI 信号观察：Agent 的竞争点正在从模型本身，扩展到 harness、skills、上下文、执行验证和可治理运行环境。"
---

这不是完整行业周报，也不是把所有 AI 新闻重新列一遍。

我的出发点还是一样：把这一周看到的研究论文、产品动态、开发者工具和 newsletter 放在一起，看它们有没有指向同一个变化。

我看到的主线是：**Agent 的操作层开始成形了。**

模型发布当然还重要，但这周更值得看的不是“哪个模型又强了一点”，而是模型外面的那一层东西：harness、skills、上下文组织、执行验证、工具调用成本和运行环境。

时间范围是 2026-W21：2026-05-18 到 2026-05-24。

## 一句话判断

这一周的关键变化，是 agent 开始从“模型能力”走向“操作系统”。

这里说的操作系统不是狭义的 OS，而是围绕 agent 工作所需要的一整套操作层：它怎么理解代码库，怎么调用工具，怎么验证执行结果，怎么沉淀技能，怎么控制成本，怎么进入真实生产环境。

换句话说，Agent 的问题正在从“能不能回答”变成“能不能持续做事”。

## 1. Agent harness 正在变成生产基础设施

这一周最清楚的信号，是 agent harness 从一个工程实现细节，开始变成生产基础设施。

研究侧的 [Code as Agent Harness](https://huggingface.co/papers/2605.18747) 把 code as agent harness 定义成代理推理、行动、环境建模和执行验证的操作底座。这个说法很重要，因为它不再把代码看成 agent 要处理的静态文本，而是把代码、工具和执行环境一起放进 agent 的工作框架里。

应用侧也有对应动作。[codegraph](https://github.com/colbymchenry/codegraph) 这类本地代码图谱，目标是给 Claude Code、Codex、Cursor、OpenCode 降低 token 和工具调用成本。Claude 也在讲 [Claude Code 如何在大型代码库里工作](https://claude.com/blog/how-claude-code-works-in-large-codebases-best-practices-and-where-to-start)。阅读侧则同时关注 Qwen3.7-Max 在多种 agent harness 上的评测。

这些放在一起看，重点不只是模型更强，而是围绕模型的那层 harness 正在产品化。

如果 agent 真要处理长期任务和大型代码库，它就不能每次都从零开始猜上下文。它需要稳定的代码理解方式、工具调用边界、执行验证机制，以及可控的运行环境。

这也是为什么我觉得 harness 会变成后面一段时间的关键基础设施。它会影响 agent 的成本、可靠性，也会影响团队敢不敢把真实代码库交给它。

来源：[Code as Agent Harness](https://huggingface.co/papers/2605.18747)，[codegraph](https://github.com/colbymchenry/codegraph)，[How Claude Code works in large codebases](https://claude.com/blog/how-claude-code-works-in-large-codebases-best-practices-and-where-to-start)，[Qwen3.7: The Agent Frontier](https://qwen.ai/blog?id=qwen3.7&utm_source=tldrai)

## 2. 可复用 skills 成为独立能力层

第二个很清楚的变化，是 skills 开始从 prompt 里分离出来，变成一个独立能力层。

研究侧的 [SkillsVote](https://huggingface.co/papers/2605.18401) 把长程 agent 轨迹转成可执行、可治理、可演化的技能库，并报告了对冻结模型 agent 的基准提升。这个点我觉得很有意思：如果模型本身不变，但通过技能收集、推荐、归因和证据门控，agent 仍然能变强，那 skills 就不是“提示词模板”这么简单。

应用侧也能看到同样方向。[academic-research-skills](https://github.com/Imbad0202/academic-research-skills) 把 Claude Code 的学术研究写作流程封装成技能包；阅读侧的 [Grok Skills](https://x.ai/news/grok-skills?utm_source=tldrai) 和 [Lovable Skills](https://lovable.dev/blog/introducing-skills?utm_source=tldrai) 则把重复指令、工作习惯和产品内能力变成可复用的东西。

这背后的变化是：经验不再只是 prompt。

以前我们会说“把提示词写好一点”。但如果 agent 要长期服务一个团队或一个人，真正有价值的经验会不断沉淀：怎么写研究摘要，怎么审代码，怎么生成方案，怎么跑一套内部流程。

这些经验如果一直停留在聊天记录里，就很难复用。变成 skills 之后，它们才可能被调用、版本化、评估和改进。

我会继续看这个方向，因为它可能让 agent 的改进不完全依赖模型更新。对个人来说，它像工作方法的积累；对团队来说，它像流程资产；对产品来说，它可能变成新的自动化入口。

来源：[SkillsVote](https://huggingface.co/papers/2605.18401)，[academic-research-skills](https://github.com/Imbad0202/academic-research-skills)，[Grok Skills](https://x.ai/news/grok-skills?utm_source=tldrai)，[Lovable Skills](https://lovable.dev/blog/introducing-skills?utm_source=tldrai)

## 3. Gemini 3.5 Flash 把 agentic 能力推向分发场景

模型发布这周也有，但我更关注它进入了哪些分发入口。

[Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/) 被描述为面向 agentic workflows、coding 和 long-horizon task execution。应用侧说它快、聪明，但不再便宜；阅读侧则把它放在 Google 产品分发里看，比如 Search、企业工具、Android Studio 和开发者平台。

这件事的重点不是单个模型分数，而是 Google 同时在推模型和入口。

当 agentic model 直接进入默认产品和开发环境，它就不只是开发者手里的 API 选择，而可能更快变成普通用户和企业用户的默认工作流。

这也是大公司模型发布和独立模型发布不太一样的地方。模型能力是一层，分发入口是另一层。谁能把能力塞进已有工作流，谁就更容易让 agentic 能力变成日常使用的一部分。

来源：[Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)，[How Google plans to win the AI war](https://www.axios.com/2026/05/21/google-ai-anthropic-openai-war?utm_source=tldrai)

## 4. 长视频和长上下文的瓶颈，正在落到 KV cache 和吞吐基础设施

另一个值得跟踪的方向，是长视频、长任务和长上下文背后共用的基础设施瓶颈。

研究侧的 [LongLive-2.0](https://huggingface.co/papers/2605.18739) 把长视频生成问题落到了 NVFP4、sequence-parallel AR training、KV-cache compression 等训练与推理基础设施上。阅读侧一边关注 [LongLive](https://github.com/NVlabs/LongLive?utm_source=tldrai) 的交互式长视频生成仓库，一边讨论 KV cache、memory traffic 和 attention cost 如何成为推理模型与 agent workflow 的主要约束。

我觉得这个方向有一个共通点：长视频也好，长上下文 agent 也好，最后都在吃同一类内存和吞吐预算。

用户看到的是“能不能生成更长的视频”“能不能处理更长的任务”“能不能读更大的代码库”。但在系统背后，很多问题会落到缓存、并行、低精度推理和内存访问成本上。

所以后面产品体验的差距，可能不只是模型架构名称造成的，也会越来越受推理工程约束。

来源：[LongLive-2.0](https://huggingface.co/papers/2605.18739)，[NVlabs/LongLive](https://github.com/NVlabs/LongLive?utm_source=tldrai)，[Recent Developments in LLM Architectures](https://magazine.sebastianraschka.com/p/recent-developments-in-llm-architectures?utm_source=tldrai)

## 5. Computer Use 正在从演示能力走向可靠性问题

Computer Use 这周不是最强信号，但值得单独拎出来。

应用侧出现了“让 computer use 在生产中可靠”的讨论；阅读侧关注 Codex 未来可能通过 Computer Use 操作 macOS 应用，甚至涉及设备锁定或睡眠后的远程操作问题。现在的 Computer Use 仍然强依赖机器处于解锁和唤醒状态，这本身就是一个很现实的限制。

这说明桌面操作 agent 的问题正在从“能不能点按钮”变成“能不能稳定接管真实应用环境”。

如果远程、锁屏、权限和会话恢复这些问题逐步被打通，agent 的可用时间和任务覆盖面都会明显变化。反过来，如果这些问题处理不好，Computer Use 就会一直停留在演示和小任务里。

来源：[Making computer use reliable in production](https://x.com/ClaudeDevs/status/2056835339193561170)，[Codex Computer Use remote operation](https://www.testingcatalog.com/openai-will-let-codex-control-other-desktop-devices-via-computer-use/?utm_source=tldrai)

## 没有放进头部的内容

还有一些内容也出现了，但我没有把它们提升为头部信号：

- **Cursor Composer 2.5**：有应用侧和阅读侧的同源覆盖，但更像一次产品或模型发布；相关意义已经被 agent harness 主线覆盖。
- **OpenAI 与 Anthropic 的融资和算力交易**：热度很高，但主要是商业和资本市场信息，不是这周最清晰的技术或产品工作流信号。
- **SynthID 与内容溯源**：有一定关注度，但相对 agent 基础设施和 Gemini 分发，当前证据更薄。
- **llms.txt 与 AI 可读网页**：是值得读的 audience-side 话题，但缺少同周应用侧或研究侧支撑，暂不提升为跨层信号。

## 可选阅读：AI 证明结果引发技术社区关注

[OpenAI model disproves discrete geometry conjecture](https://openai.com/index/model-disproves-discrete-geometry-conjecture/) 这件事也值得读。

应用侧提到 OpenAI 称一个模型解决了著名数学问题，并且外部数学家检查了证明；Hacker News 上也有很高讨论量。

但我暂时不把它放进本周主线。它当然会继续推动“模型能否参与真实研究发现”的讨论，不过就这周的信号密度来说，它更像一个高关注事件，还不足以说明科研工作流已经系统性改变。

## 最后

这周让我更确定的一点是：Agent 的下一阶段，竞争点会越来越多地出现在模型外面。

模型会继续变强，但真正进入工作流以后，大家会更关心它怎么运行、怎么调用工具、怎么理解上下文、怎么沉淀技能、怎么控制成本，以及怎么被团队放心使用。

这些东西没有发布会那么热闹，但它们决定 Agent 能不能从“会回答”走向“会长期干活”。

这就是我这周看到的 AI 信号。
