---
author: BigBoBro
title: "2026-W22 AI 信号观察：Agent 开始补齐运行基础设施"
pubDatetime: 2026-06-02T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "一篇 2026-W22 的 AI 信号观察：MCP、Bumblebee、DeepSWE 和长轨迹 eval 都在说明，Agent 的竞争点正在进入可运行、可审计、可评测的系统层。"
---

这不是完整行业周报，也不是把所有 AI 新闻重新列一遍。

我的出发点还是一样：把这一周看到的研究论文、产品动态、开发者工具和 newsletter 放在一起，看它们有没有指向同一个变化。

这一周我看到的主线是：**Agent 开始补齐运行基础设施了。**

W20 我写的是 Agent 基础设施变厚，W21 写的是 Agent 的操作层开始成形。到 W22，这条线更具体了：协议治理、本地安全扫描、长任务 coding benchmark、skills 打包、长轨迹 eval，都在往一个方向走。

也就是 Agent 不只是“能回答”或者“能调用工具”，而是要进入一个更现实的问题：它能不能被运行、被授权、被审计、被复用、被评测。

时间范围是 2026-W22：2026-05-25 到 2026-05-31。

## 一句话判断

这一周最值得看的，不是某个单一模型发布，而是 Agent 系统层继续补齐基础设施。

如果把过去几周连起来看，变化其实挺清楚：

- W20 更像是运行环境、记忆和路由开始变重要；
- W21 更像是 harness、skills 和上下文组织开始被产品化；
- W22 则更偏向运维和治理：协议怎么变更，工具链怎么扫描，长任务怎么评测，技能怎么沉淀。

这些东西没有发布会那么热闹，但它们决定 Agent 能不能从 demo 走向真实工作流。

## 1. MCP 开始进入 Agent 运维层

这一周最强的信号，是 MCP 不再只是“让 Agent 接工具”的协议，而是在往更正式的运行和治理层走。

研究侧的 [Foundation Protocol](https://huggingface.co/papers/2605.23218) 把 agent 协议层放到了协调、审计和安全边界里讨论。应用侧和阅读侧又同时指向同一个 [MCP specification release candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)。

这件事的重点不只是“协议升级了”。

如果 MCP 真的变成 Agent 连接工具和外部系统的默认接口，那协议里的授权、安全、长任务、工具定义、breaking changes、deprecation 机制，都会变成生产系统要面对的问题。

以前我们看 tool calling，更多是在看模型能不能正确选择工具、填参数、读结果。但真正进入团队环境之后，问题会变成：

- 谁可以调用哪些工具？
- 工具定义怎么变更？
- 长任务怎么挂起、恢复和追踪？
- 失败以后怎么审计？
- 协议升级会不会打断已有 workflow？

所以我会把 MCP 这次变化看成 Agent 运维层的一个信号。它开始从“连接器”变成更严肃的系统边界。

来源：[Foundation Protocol](https://huggingface.co/papers/2605.23218)，[MCP specification release candidate](https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/)

## 2. 本地 Agent 安全开始变成可扫描对象

第二个值得看的信号，是 Perplexity 开源了 [Bumblebee](https://www.perplexity.ai/hub/blog/perplexity-is-open-sourcing-bumblebee)。

它做的事情很具体：用只读方式检查开发者机器上的高风险包、浏览器或编辑器扩展，以及 AI agent 配置。Perplexity 还强调，扫描过程不会运行被检查的工具。

这个方向我觉得很重要，因为 Agent 的安全风险正在从“模型回答会不会胡说”，扩展到“本地工具链是不是安全”。

Agent 越多接入本机环境，风险面就越宽：

- 它会读什么配置？
- 它会接触哪些 browser extension 或 editor extension？
- 它能不能调用本地命令？
- 它会不会把一个有问题的 package 或 tool 当成可信依赖？
- 开发者机器上的 AI 配置本身能不能被检查？

以前这些问题很容易被当成安全团队或供应链团队的事情。但如果 Agent 真的要在开发者本机长期工作，那本地 AI 工具链本身就会变成新的攻击面。

Bumblebee 的意义不在于它一次解决所有问题，而是它把这个风险面变成了一个可以扫描、可以讨论、可以纳入流程的对象。

来源：[Bumblebee open source](https://www.perplexity.ai/hub/blog/perplexity-is-open-sourcing-bumblebee)

## 3. Coding agent 评测开始走向真实长任务

第三个强信号，是 [DeepSWE](https://deepswe.datacurve.ai/)。

它把 coding agent 的评测拉到更接近真实软件工程的长任务里：活跃仓库、多语言、多文件修改、长周期修复、污染控制和可靠验证。应用侧摘要提到，它覆盖 91 个活跃仓库、5 种语言和 113 个原创长任务；平均修复规模是 668 行、7 个文件。

这比短题 benchmark 更有意思。

短题当然有价值，但真实 coding agent 的难点往往不在“能不能写出一个函数”，而在：

- 能不能理解一个已经存在的代码库？
- 能不能在多个文件之间保持一致？
- 能不能跑验证并理解失败？
- 能不能在较长任务里不丢上下文？
- 能不能避免做出看似通过、实际污染很大的修改？

所以 DeepSWE 这类 benchmark 的方向，会逼着 coding agent 暴露更真实的问题。它不再只考模型局部补丁能力，而是更接近“能不能在生产代码里连续工作”。

这也和前两周的主线连上了：如果 harness、skills、运行环境、上下文组织都在变重要，那评测也必须跟着变。否则我们会一直用短题分数来判断一个本质上是长任务系统的东西。

来源：[DeepSWE](https://deepswe.datacurve.ai/)，[DeepSWE writeup](https://deepswe.datacurve.ai/blog?utm_source=tldrai)

## 4. Skills 正在从提示词变成流程资产

这一周 skills 方向也继续出现。

研究侧的 [SkillOpt](https://huggingface.co/papers/2605.23904) 把 skill 写成可验证、可导出的自然语言工件。应用侧出现了面向 Claude Code、Codex CLI、Cursor 等平台的 [Anthropic Cybersecurity Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)，仓库里列出大量结构化安全 skills。阅读侧还有 Claude Code 的 [dynamic workflows](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code)。

这和 W21 的 skills 主线是一条线：经验正在从聊天记录里被抽出来，变成可复用的流程资产。

我现在越来越觉得，skills 不应该被简单理解成“高级提示词模板”。真正有价值的 skills，里面会包含任务拆解、工具选择、输出约束、验证动作、失败处理和领域判断。

对个人来说，这像是在沉淀自己的工作方法。对团队来说，它更像流程资产。对 Agent 平台来说，它可能变成生态边界：谁能让 skills 更容易写、复用、版本化、评估，谁就更容易把用户和团队的长期工作流留在自己这里。

来源：[SkillOpt](https://huggingface.co/papers/2605.23904)，[Anthropic Cybersecurity Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)，[Dynamic Workflows in Claude Code](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code)

## 5. Agent eval 开始看长轨迹和过程证据

另一个值得跟踪的方向，是 Agent eval 从单题打分走向长轨迹和 trace。

研究侧的 [WBench](https://huggingface.co/papers/2605.25874) 把互动世界模型放进多轮 interaction、setting adherence、consistency 和 physics compliance 里评估。应用侧有 [howtoeval](https://www.howtoeval.com/) 这类 agent eval 实操内容。阅读侧的 [Agent Judge](https://www.judgmentlabs.ai/blogs/agent-judge-solving-long-context-evaluations?utm_source=tldrai) 强调长轨迹里的 search、verification 和 adaptation。OpenAI cookbook 也有关于 [multi-agent systems macro eval](https://developers.openai.com/cookbook/examples/partners/macro_evals_for_agentic_systems/macro_evals_for_agentic_systems?utm_source=tldrai) 的内容。

这个方向和 DeepSWE 是一组问题。

Agent 的失败，很多时候不是发生在一个回答里，而是发生在多步执行里：前面某一步理解错了，后面继续放大；工具结果没有被验证；状态已经变了但 Agent 还按旧假设行动；用户反馈来了，但它没有真的调整策略。

如果 eval 只看最终答案，就很难解释这些问题。长轨迹 eval 的意义，是把过程证据也纳入评估。

这会让 Agent 产品的可靠性讨论更具体。不是笼统地说“更聪明”或者“更稳”，而是看它在多轮、多工具、多状态变化里的行为轨迹。

来源：[WBench](https://huggingface.co/papers/2605.25874)，[howtoeval](https://www.howtoeval.com/)，[Agent Judge](https://www.judgmentlabs.ai/blogs/agent-judge-solving-long-context-evaluations?utm_source=tldrai)，[Evaluating Multi-Agent Systems at Scale](https://developers.openai.com/cookbook/examples/partners/macro_evals_for_agentic_systems/macro_evals_for_agentic_systems?utm_source=tldrai)

## 还有两个方向可以继续看

### LocateAnything：视觉 grounding 还是值得盯

[NVIDIA LocateAnything](https://research.nvidia.com/labs/lpr/locate-anything/?utm_source=tldrai) 这周只出现在阅读侧，所以我不会把它写成跨层共振。但它仍然值得看。

如果视觉 Agent、UI Agent 或机器人要真的行动，第一步经常不是生成语言，而是准确定位对象、按钮、区域和空间关系。阅读侧摘要提到 LocateAnything 用 parallel box decoding 做 vision-language grounding，而不是逐 token 生成 bounding box。

这个方向如果继续推进，会影响 UI 操作、视觉问答、机器人抓取和多模态工作流。

### 个人 Agent 的界面可能不只是聊天框

[Macaron-A2UI](https://huggingface.co/papers/2605.24830) 是一个研究侧单层信号，但我觉得也值得放进观察列表。

它的核心问题是：如果个人 Agent 要处理更复杂的任务，纯文本聊天框可能不够。Agent 可能需要生成轻量 UI，用来收集信息、细化偏好、确认选择和组织多目标任务。

这个方向暂时还不能说已经成为趋势，但它戳中了一个真实问题：长期个人 Agent 需要的不一定只是更好的对话，也可能是更好的交互表面。

## 没有放进头部的内容

还有一些内容也出现了，但我没有把它们提升为头部信号：

- **Google DeepMind 的 AGI 和数学解题叙事**：本周证据主要在阅读侧，而且 AGI 时间判断和数学证明结果是两条不同叙事，暂时没有形成稳定跨层信号。
- **原生多模态模型 roundup**：有阅读价值，但当前证据不够支撑一个清晰的本周主线。
- **AI 硬件与 A100 效率**：A100 同时出现在多个材料里，但更像硬件预算和供应侧背景，不是这周最清楚的产品或技术工作流变化。
- **Anthropic 收入和 product-market fit**：商业关注度高，但目前主要是阅读侧信息，缺少独立应用侧或研究侧呼应。
- **DeepSeek-R1 之后的开源模型差距**：相关内容太薄，更多像背景引用和观点讨论，不足以提升为头部信号。

## 最后

这周让我更确定的是：Agent 的竞争正在继续往模型外面走。

模型能力当然还是底座，但如果 Agent 要真的进入工作流，后面会越来越多地比这些东西：协议是否稳定，权限是否清楚，本地工具链是否安全，长任务是否可评测，skills 是否能复用，执行过程是否能被审计。

这也解释了为什么最近几周的信号看起来都在绕着同一个主题转。Agent 从“会回答”走向“会长期干活”，中间缺的不是一个功能，而是一整套运行基础设施。

这就是我这周看到的 AI 信号。
