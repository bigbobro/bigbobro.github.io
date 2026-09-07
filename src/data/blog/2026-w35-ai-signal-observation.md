---
author: BigBoBro
title: "2026-W35 AI 信号观察：代理走进网页，执行轨迹开始反过来改进系统"
pubDatetime: 2026-08-31T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "2026-W35：浏览器成为代理的工作入口，推理硬件开始围绕延迟设计，执行轨迹也被用来改进 harness。能力之外，完成任务所需的配套越来越具体。"
---

上期在看 harness 怎样拉开同一个模型的分数。这周，模型周围的配套又往前走了一步：代理有了更直接的网页操作入口，硬件开始围绕代理任务的延迟设计，执行记录也被拿来改进提示词、工具和控制流程。

这些变化发生在不同层面，不能混成一个性能结论。但放到实际使用里，它们回答的是相邻的问题：代理在哪里做事，一步要等多久，做错之后能不能有所改进。

时间范围是 2026-W35：2026-08-24 到 2026-08-30。下面按当周材料整理；发布方的性能数字保留其归属，不作为独立实测结果。

## 1. 浏览器开始成为代理的工作入口

Cowork 本周出现内置浏览器。同周关于 ChatGPT 与 Codex 的报道则提到 WebMCP 支持，让兼容网站提供代理可以调用的工具。

两者走的路不完全一样。内置浏览器提供网页操作环境，WebMCP 则让网站把可执行动作暴露成工具。共同的变化是，代理与网页的关系开始从读取内容延伸到执行任务。

对用户来说，能打开网页只是起点。更实际的问题是：登录状态能否延续，执行结果能否确认，卡住时人能不能接手。这些是我接下来想看的使用细节，目前的发布与报道还不足以说明复杂网页任务已经可靠。

来源：[Cowork 内置浏览器](https://claude.com/blog/cowork-built-in-browser)，[ChatGPT WebMCP 报道](https://nekuda.substack.com/p/breaking-chatgpt-now-supports-webmcp)

## 2. 推理硬件开始围绕代理的等待时间设计

OpenAI 披露了 Jalapeño 的早期结果。按发布方的说法，在三个开放模型上，相对 Blackwell，它实现了 1.5–1.9 倍每瓦工作量，以及 1.7–3.6 倍更低延迟，并计划在年底前部署。配套文章强调面向 agent workload 的设计，把 prompt 处理与 token 生成靠近。

这些数字有明确的测试范围，也还是早期结果，不能直接换算成每个用户的任务都会快几倍。

我更在意它选择优化的问题。代理经常要读结果、再决定、再调用工具，一项任务里会有很多轮等待。单次生成少等一点，可能在完整流程里累积成明显差别；但工具响应、网络和重试同样会占时间。最终值得比较的，还是同一项任务从开始到交付到底花了多久。

来源：[Jalapeño 早期结果](https://openai.com/index/jalapeno-first-results)，[Jalapeño 全栈设计说明](https://openai.com/index/the-full-stack-behind-abundant-intelligence)

## 3. GLM-5.3-Flash 把开放权重与效率放到一起

本周材料将 Ox Alpha 的身份指向 GLM-5.3-Flash：一个 320B 总参数、18B 激活参数的 MoE 模型。发布与报道强调开放权重、低成本推理，并称其在 coding 和 agentic benchmark 上接近 Claude Opus 4.8。

这里有几件事需要分开看。开放权重关系到能否自行部署；激活参数涉及每次计算动用多少参数；基准表现和服务价格又各有条件。它们一起出现很有吸引力，却还不能直接证明某个具体工作流里的性价比。

这条信号值得继续看，是因为竞争开始同时落到能力、分发方式和运行成本上。后续如果有相同任务、相同质量要求下的完整成本记录，会比再多一张榜单更有用。权重是否可得，也要与许可证和实际部署要求分别核对。

来源：[GLM-5.3-Flash](https://z.ai/blog/glm-5.3-flash)，[GLM-5.3 权重页](https://huggingface.co/zai-org/GLM-5.3)，[Ox Alpha 成本分析](https://www.thedeepview.com/articles/what-z-ai-s-ox-alpha-reveals-about-ai-economics)

## 4. 执行轨迹开始反过来改进 harness

AutoSaddler 同时出现在研究和阅读材料里。论文把 agent 执行轨迹与 harness 的自动优化、持久更新联系起来；仓库说明进一步列出更新对象：prompts、tools 和 middleware。

harness 可以理解为包住模型的执行框架，负责组织工具调用、状态和反馈。过去查看执行记录，往往是为了定位哪一步出了问题。AutoSaddler 尝试再往前走一步，让这些记录成为修改执行框架的输入。

这个方向有吸引力，但“能自动修改”距离“能持续改好”还有一段路。一次失败带来的修补，会不会让别的任务变差？更新后能不能回滚？收益能不能迁移到没见过的任务？本周材料支持的是这条反馈路径已经被明确提出，尚不足以替它回答长期可靠性。

来源：[AutoSaddler 论文](https://huggingface.co/papers/2608.23041)，[AutoSaddler 仓库](https://github.com/microsoft/AutoSaddler)

## 5. 转写开始直接交付更可用的文字

Gemini 3.5 Transcribe 本周同时被应用侧和阅读侧收录。发布材料把它定位为面向智能语音交互的转写模型，支持实时流式与预录音频处理，目标是把原始音频转成准确、润色和格式化后的文字。

对语音产品来说，这意味着转写之后的一部分整理工作被提前放进模型输出。用户拿到的文字如果已经便于阅读和继续处理，后面的流程确实可能缩短。

不过，“更好读”和“忠实记录”仍需要分别看。口头重复可以整理，否定、数字和不确定语气却不能被顺手润色掉。这里更值得观察的，是模型怎样处理原话与整理后文字之间的关系，而不只是展示几段漂亮的转写结果。

来源：[Gemini 3.5 Transcribe](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe)

## 值得继续跟踪

### 跨产品记忆，需要让用户看得见、改得动

当周材料称，Claude Chat 与 Cowork 的记忆系统正在合并并默认开启，用户可以在 Topics 中逐条查看、编辑或删除。

连续工作会因此更方便，跨场景引用也更需要边界。我接下来想看的是：用户能否知道一条记忆从哪里来，修改或删除后是否在各个入口一致生效，以及是否出现误记忆被带到其他任务的反馈。

来源：[Claude 跨产品记忆](https://claude.com/blog/claudes-memory-works-everywhere-and-you-decide-whats-in-it)，[共享记忆报道](https://thenextweb.com/news/anthropic-claude-cowork-shared-memory-default)

### EchoWM：世界模型开始强调“可以进入”

EchoWM 的论文与仓库将其定位为开放、可进入的全模态世界模型。仓库描述了沿连续 6-DoF 相机轨迹联合生成 720p 视频、环境声音、音乐和语音，并支持第一人称与第三人称交互。

这让观察重点从一段生成视频移到持续交互。接下来要看可运行 demo、权重和长时程结果：视角移动之后，环境能否保持一致，声音与画面能否持续对应。

来源：[EchoWM 论文](https://huggingface.co/papers/2608.23189)，[EchoWM 仓库](https://github.com/jd-opensource/JoyAI-Echo)

### WeMM-Embedding：不同模态能否共用一套检索表示

WeMM-Embedding 尝试把文本、图像、视频、视觉文档和交错输入映射到统一表示空间。本周既有技术报告，也有开源模型家族的介绍。

我更想看实际检索例子：一个文字问题能否找到正确的视频片段或文档页面，混合输入是否真的减少了分别处理各模态的工作。统一表示是方法目标，实际检索质量还需要数据来说明。

来源：[WeMM-Embedding 论文](https://huggingface.co/papers/2608.24053)，[WeMM-Embedding 仓库](https://github.com/Tencent/WeMM-Embedding)

### Muse Image：低单价之外，看 API 怎样进入生产流程

当周发布材料将 Muse Image 生成或编辑图像的价格标为每张 0.01 美元，相关介绍还强调搜索 grounding 与渲染前推理。

单张价格容易比较，完整流程却还包括重试、编辑和调用限制。下一步看 API 文档里的适用条件，以及有没有连续使用的案例，能说明搜索信息怎样影响成图、失败后怎样修正。

来源：[Muse Image API](https://developer.meta.com/ai/models/muse-image)

### 政府使用边界，继续单独观察

本周报道一边涉及美国法院阻止针对 Anthropic 的黑名单措施，另一边涉及 Anthropic 寻求恢复防务合同。这里记录的是当周报道，不据此判断后续程序已经结束或合同已经恢复。

这条线的后果在政府采购、供应商立场和具体用途边界上，不能与模型能力升级合成一条技术趋势。后续应分别看法院程序、合同进展和公司公开表述。

来源：[NYT 法院报道](https://www.nytimes.com/2026/08/27/technology/anthropic-government-blacklisting-ruling.html)，[Reuters 法院报道](https://www.reuters.com/legal/government/us-judge-blocks-pentagons-anthropic-blacklisting-2026-08-28/)，[防务合同报道](https://prospect.org/2026/08/27/anthropic-reenlists-for-war-defense-department-ai)

## 另外两项阅读

[VoiceMem](https://huggingface.co/papers/2608.26005) 把信息记忆、情绪与 persona 记忆，以及流式记忆读写放进实时语音交互。论文报告了 134ms 检索延迟，并配有长时程评测。这个数字属于论文设置；值得继续读的是准确性、个性化和延迟怎样相互制约。

本地优先工作区也有两个例子：[Apache Maka](https://github.com/apache/maka) 用追加式日志记录消息、工具调用、权限决策和终止事件；[OpenHuman](https://github.com/tinyhumansai/openhuman) 组合本地优先记忆、agent 编排与深度研究。它们提供了观察状态和权限如何留在用户基础设施里的具体入口，目前仍是应用侧观察。

Cursor 收购后的讨论这周也有热度，但原材料缺少足够具体的技术变化或跨层结果，我没有把讨论度单独写成主线。

## 接下来想看什么

这周，完成任务所需的配套变得更具体了。但有入口、有硬件、有自动更新机制，仍不等于一套系统已经好用。

我会继续看三件小事：网页任务卡住后能否被人顺利接手；更低推理延迟能否缩短完整任务耗时；从执行记录学到的改动，能否在新任务上继续有效。它们没有发布标题那么醒目，却更接近日常使用时会遇到的问题。
