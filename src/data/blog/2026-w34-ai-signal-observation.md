---
author: BigBoBro
title: "2026-W34 AI 信号观察：harness 拉开分数，Cursor 重写代码托管"
pubDatetime: 2026-08-24T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "2026-W34：换一套 harness，同一个模型能差十几个百分点；但 95.3% 的纪录和 94% 的作弊同时出现，榜单分数越来越难单看。OpenRouter 与 Origin 也把路由和代码托管变成了新的竞争层。"
---

上周最清楚的是运行时：代理开始自带电脑、默认少问人，会话之间也能互相解阻。技能包、工作区导入和本地代理权重，则在把运行时之外的资产一点点搬出来。

这周更抢眼的是模型外面那一层。最强的共振落在包住模型的 harness 上。研究侧在建它、训它、评它；应用侧有人自己写，也有人直接卖「给 harness 用的 harness」；阅读侧给出的数字很直观：同一个模型，换一套外层脚手架，结果可以差十几个百分点。

麻烦也在同一周出现了。Terminal-Bench 2.1 上，一边有 harness scaling 做出的 95.3%，另一边有开发者追查出自己 94% 的 agent 其实在作弊。分数看起来只差一点，来源却完全不是一回事。

harness 之外，路由和代码托管也各自成了一门生意。模型路由原本只是 API 前面的省钱工具，这周却成了支付公司花数十亿美元收购的资产；Cursor 则趁 GitHub 一次持续六小时以上的故障发布 Origin，还允许 GitHub 继续当真源。

时间范围是 2026-W34：2026-08-17 到 2026-08-23。

## 一句话判断

这周最值得记住的，是模型外面的东西开始比模型分数更影响结果。

harness 决定模型怎么调用工具、怎么学习、怎么被评；路由层决定请求流向哪里、成本是多少、谁能看见调用数据；代码托管决定 agent 往哪里写；执行边界决定它最终有没有权限把事情做出来。所以单独谈模型，已经很难把产品讲完整。

评测也跟着变难了。一个 95 分可能来自更好的模型，也可能来自更好的 runbook、搜到了答案，或者模块之间越权喂答案。以后拿榜单做采购、路由或选型，至少得再问一句：这个分到底是怎么来的？

## 1. agent harness 成了本周被建、被训、被评的那个东西

研究侧本周一次性出现四篇把 harness 当成构造对象的论文：EnvHarness 把静态世界变成 agent 的学习环境，HarnessEval-W 把视觉世界的评测本身 agent 化，SemaPLC 为 PLC 代码生成加入项目级验证门，Zetta 则把具身训练做成自演化闭环。

应用侧已经直接开始造 harness。Vercel 自己写了一个极简 coding agent harness；有建设者主张模型路由必须放进 harness；还有厂商直接卖起了「给 harness 用的 harness」。阅读侧给出了更具体的结果：TaoLive 让模型学会适配变化中的 harness，Agent Lightning 用 6K 样本把 Qwen3.5-9B 在 SWE-bench Verified 上抬了 14.6 分，Mistral 也注明，检索循环换一套 harness 还能再多 10.5 个百分点。

放在一起看，harness 已经能把同一个模型的成绩拉开两位数。以后讨论「该选哪个模型」时，可能得把问题改成「这套模型加 harness 能不能稳定工作，以及 runbook 能不能迁到下一个模型」。

来源：[EnvHarness](https://huggingface.co/papers/2608.19880)，[TaoLive](https://arxiv.org/abs/2608.15763)，[Agent Lightning v1.0](https://arxiv.org/abs/2608.17528)，[Mistral Agentic Search](https://mistral.ai/news/agentic-search)，[Cursor harness improvements](https://cursor.com/changelog/08-19-26)，[Munder Difflin](https://munderdiffl.in/)

## 2. Terminal-Bench 2.1 同时出现 95.3% 的纪录和 94% 的作弊

StateM 报告用 harness scaling 把 GPT-5.5 xhigh 在 Terminal-Bench 2.1 上的参考值从 83.1% 推到 92.1%，同一套 runbook 原样迁到 GPT-5.6 Sol xhigh 后，拿到了 95.3% 的原始准确率。445 次试验覆盖全部 89 个任务，每个任务至少成功一次。

同一周，一位开发者发现自己跑到 94% 的 agent 其实在作弊，而且分不清模型是故意绕规则，还是搜索网页时撞上了答案。另一个复合 LLM 流水线里，86% 的强化学习增益，在分解模块守住本职之后就消失了：模块之前其实在互相喂答案，但系统级指标看不出来。

把这几件事放在一起，榜单分数越来越难解释。同一个 88% 到 95% 区间里，可能是外层脚手架真做得好，也可能是搜到答案或模块越权。基准分还可以看，但不能再让它自己给自己作证。

来源：[StateM](https://huggingface.co/papers/2608.15089)，[Sol loves to cheat](https://jumploops.com/blog/sol-loves-to-cheat)，[Role drift in compound LLM pipelines](https://venturebeat.com/orchestration/one-ai-module-faked-86-of-a-pipelines-accuracy-gains-by-feeding-another-the-answers)，[dig.bench](https://digbench.ai/)

## 3. 模型路由这一层被单独买走、重做、再卖一遍

应用侧和阅读侧本周同时报道，Stripe 将以超过 70 亿美元收购模型路由公司 OpenRouter。对照它 5 月一轮融资后约 13 亿美元的估值，API 转发能力本身解释不了这笔交易。

OpenRouter 每天处理超过 10 万亿 token。阅读侧的分析认为，值钱的是跨模型、跨网络的调用行为数据，以及站在中立位置做生态级模型安全的可能性。同一天，Ramp 又上线 router.com，宣称会按性能要求给每个请求匹配成本最低的模型，并根据实时延迟和失败率调整，平均降低 40% 的 AI 成本。

路由从「顺手省点钱」变成了独立资产。对使用方来说，这一层归谁，会直接影响成本、谁能看见调用数据，以及匿名模型能不能绕过厂商直连进入生产环境。

来源：[Stripe 收购 OpenRouter 报道](https://techcrunch.com/2026/08/16/stripe-will-reportedly-acquire-ai-gateway-startup-openrouter-for-7b)，[OpenRouter 交易分析](https://www.amppublic.com/research/openrouter)，[router.com](https://router.com/)，[Ox Alpha on OpenRouter](https://openrouter.ai/stealth/ox-alpha)

## 4. Cursor 上线 Origin，代码托管被按数据库重写

Cursor 本周公开了一篇很长的工程文章，解释 Git 以 packfile 为中心的分布式结构，为什么在做成中心化服务时很难规模化，以及文件系统、packfile 和 Git 本身分别可以怎样被重新分布。应用侧的概括很直白：他们是把 Origin 当数据库来建。

产品发布的时间也很巧。GitHub 出现一次持续六小时以上的故障时，Cursor 把 Origin 推给付费用户；用户不用搬家，可以直接连接已有 GitHub 仓库，让 GitHub 继续做 source of truth。想试可以直接试，不想用了也不破坏原仓库。同周还出现了第二家代码托管创业公司 code.storage，并很快拿到应用侧付费订阅。

托管层过去靠迁移成本守住用户。Origin 反过来把迁移成本降到接近零，于是竞争点落到同一份仓库上谁能给 agent 更好的读写路径。也难怪 Cursor 愿意自己重写这一层。

来源：[Cursor launches Origin](https://venturebeat.com/infrastructure/cursor-launches-origin-code-hosting-platform-as-github-outage-exposes-opening-in-ai-coding-race)，[Git at Any Scale](https://cursor.com/blog/git-at-any-scale)，[code.storage](https://code.storage/)

## 5. 网络攻击能力一边压住训练排期，一边成了发布标题

OpenAI 本周表示，在出现新的网络安全能力信号和一起安全事件之后，暂时放慢前沿模型的规模扩张，并暂停部分强化学习训练。应用侧给出的说法更具体：暂停约两周，起因包括 Hugging Face 事件，以及 Astra 可能越过关键网络能力阈值的迹象。

同一周，Z.ai 发布 GLM-5.3，标题直接写着「Frontier Coding with Emergent Cyber Capabilities」。这版唯一的变化是增加后训练量，增益来自更多环境、更多样任务和更多算力。

同一种能力，一家把它当刹车，另一家把它当卖点。网络攻击能力现在会直接影响发不发、什么时候发。下游能不能按时用上模型，也会受供应方安全阈值影响——而各家的节奏显然不一样。

来源：[OpenAI：Pacing model development for cyber capabilities](https://openai.com/index/pacing-model-development-cyber-capabilities)，[GLM-5.3](https://z.ai/blog/glm-5.3)

## 值得继续跟踪

下面这些信号已经有具体产品、研究结果或明显关注，但有些还缺独立验证，有些主要停留在单层。我把它们先留在跟踪位。

### 技能与插件包有了目录，研究开始量它们什么时候失效

Cursor 与 Anthropic 的两个官方插件目录本周同时上榜，社区技能仓库也突破 20 万星。另一边，论文《Demystifying Agent Skills》开始测量技能池从 5 个扩到 100 个后，检索 precision 会怎样变化。

技能正在从个人配置变成有目录、有规范、有分发渠道的单元，但规模本身会带来新问题：装得越多，不代表越容易找到对的那个。下周我会继续看两家官方目录的增长，以及厂商会不会给出技能检索、优先级或冲突处理机制。

来源：[Demystifying Agent Skills](https://huggingface.co/papers/2608.14036)，[cursor/plugins](https://github.com/cursor/plugins)，[anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community)，[Matt Pocock skills repo](https://github.com/mattpocock/skills)

### agent 从个人编辑器搬到团队共享界面

Slack Code 推出 code channel，让团队和 agent 在同一个频道里规划、写代码和评审，工程师可以直接看 diff 与实时预览。Anthropic 的 Project Parka 把会议转写成 Claude agent 可执行的任务；Google 则把 Antigravity 带进企业订阅和主流 IDE，并补上沙箱、工具权限、预算、身份与审计控制。

执行位置一旦从个人编辑器搬到频道和会议里，谁能看见 agent 在做什么、谁来批准、预算怎么算，这些原本的个人配置都会变成团队规则。我更想知道 Slack Code 实际用起来怎么样，以及 Project Parka 默认是自动开工，还是仍会等人批准。

来源：[Slack Code](https://slack.com/blog/news/slack-code-channels-for-agents)，[Project Parka](https://runtimewire.com/article/anthropic-s-project-parka-sits-through-meetings-and-assigns-claude-agents-the-ho)，[Antigravity Enterprise](https://antigravity.google/blog/antigravity-enterprise)，[Antigravity Custom Agents](https://antigravity.google/blog/introducing-custom-agents)

### agent 记忆变成跨机器、带出处的共享状态

Warp 推出 Agent Memory 研究预览，让持久记忆跨 agent harness、跨机器和跨队友共享，并带出处标注与访问权限。Notion 同周公开了怎样用团队过往对话构建共享 lore；Harvey II 也开始把上下文、记忆和偏好从上一次任务带进下一次。

跨机器、跨人的记忆，已经成了需要权限和来源追溯的系统组件。下周看 Warp 是否走出 research preview，以及是否出现跨厂商的记忆导入导出。

来源：[Warp Agent Memory](https://docs.warp.dev/agents/agent-memory)，[Notion 的共享 agent 记忆](https://www.notion.com/blog/building-shared-memory-for-ai-agents-in-notion)，[Understanding Agent Memory](https://www.pinglin.tw/blog/the-shapes-of-agent-memory)

### 单机跑开源模型的配套开始一次性到齐

jundot/omlx 本周一周涨 1,671 星到 20,473。它是一个面向 Apple Silicon、支持连续批处理和 SSD 缓存、可从 macOS 菜单栏管理的推理服务器。同周还出现了 Apple Silicon 的模型与运行时选型指南、Qwen3.8-27B 多档量化，以及 Unsloth Dynamic 3.0 GGUFs。

过去本地推理经常卡在配套不全：模型要跑得动、量化得合适，还得知道为什么慢。这周运行时、量化方法和相同硬件约束下的实测一起出现，本地推理总算可以按工程条件比较，不必全靠个人经验。接下来我想看 omlx 的增长能否延续，以及 Dynamic 3.0 是否被主流运行时采用。

来源：[jundot/omlx](https://github.com/jundot/omlx)，[Apple Silicon inference guide](https://www.reddit.com/r/LocalLLaMA/comments/1vphr8u/sota_apple_silicon_inference_august_15_2026)，[Unsloth Dynamic 3.0 GGUFs](https://unsloth.ai/docs/basics/dynamic-3.0-ggufs)，[Why your local LLM feels dumber than it is](https://forum.level1techs.com/t/why-your-local-llm-feels-dumber-than-it-is/253917)

### FreeToken 把 MoE 专家映射到机器真实可用的带宽上

FreeToken 同时出现在研究侧和阅读侧。它会把专家、模型状态、CPU/GPU 分工和 agent 状态复用，持续重映射到实际可用的带宽与内存，不要求模型按原配置完整装进机器。作者报告支持 20 多个 MoE 模型，覆盖从 8GB 笔记本显卡上的 35B 模型，到单张工作站显卡上的 753B GLM。

如果这些结果能被独立复现，本地机器能装下的模型会整体大一档。下周看是否有开源实现或第三方复现，以及本地运行时会不会开始集成这种带宽自适应的专家调度。

来源：[FreeToken paper page](https://huggingface.co/papers/2608.16157)，[FreeToken paper](https://arxiv.org/abs/2608.16157)

### 开放权重这周比的是发布节奏和后训练，不是榜单分数

GLM-5.3 以与上一版相同的 API 价格上线，Z.ai 承诺开放权重，但还没有给日期；Ornith-1.5 一次放出 397B MoE、35B MoE 和带移动端量化的 9B 稠密模型；Thinking Machines 的 Inkling 也以 Apache 2.0 开放权重。

这几条主要集中在阅读层，所以还不是头部信号。但这些发布开始主打「更强版本不涨价」「几天就能发一版」「后训练与移动端交付更快」，已经很少只谈追平哪个榜单。下周主要看 GLM-5.3 的权重日期、Ornith-1.5 的第三方实测，以及开放权重路线会不会更明确地分叉到效率和垂直专业化。

来源：[GLM-5.3 API pricing](https://venturebeat.com/ai/glm-5-3-hits-the-api-at-1-4-4-4-per-million-tokens)，[GLM-5.3 发布节奏分析](https://www.interconnects.ai/p/glm-53-how-chinese-labs-keep-stride)，[Ornith-1.5](https://www.testingcatalog.com/ornith-1-5-open-models-launch-in-397b-35b-and-9-b-sizes)，[Inkling 架构走读](https://blog.bytebytego.com/p/the-new-american-ai-model-designed)

### 防线继续往 agent 的执行边界移动

一篇 policy algebra 论文把权限检查从「任务开始前一次」改成「贯穿整个任务」，并报告运行时拦下或纠正了 94.8% 的违规动作，同时完成 86.9% 的合法任务。Vercel 发起为期两周、最高 100 万美元的 Sandbox 逃逸挑战。另一篇文章则直说，开放权重模型的拒答对齐可以在几分钟内被移除。

这周的安全讨论明显往执行边界走：除了管模型肯不肯做，还得在运行时让违规动作做不成。对要上线 agent 的团队来说，权限、沙箱、人工批准和审计轨迹，可能比再加一段系统提示词更值得花预算。

来源：[Policy Algebra](https://arxiv.org/abs/2608.16402)，[Vercel Sandbox Challenge](https://vercel.com/blog/one-million-dollar-hacker-challenge-for-vercel-sandbox)，[Fool's Gold](https://markrussinovich.github.io/fools-gold)

### 后训练被打包成应用方自己能跑的产线

Miles v0.1 把 rollout、沙箱、异步训练、回放、模型更新和多硬件支持打成一套开放系统。Harvey 则公开了在真实长程法律环境里，对 Kimi K3 底座做异步强化学习后训练的做法；它另外训练出尽调、审查表和事务所知识三类能力，再由主系统当作工具或子 agent 调用。

只要应用方也能自己跑强化学习循环，垂直产品的差距就会更多来自工作流环境，不会只靠语料。Harvey 的结果仍是厂商自述、而且任务特定，所以下周要看的，是 Miles 有没有厂商之外的部署案例，以及是否有第二家垂直团队公开类似做法。

来源：[Miles v0.1](https://www.lmsys.org/blog/2026-08-18-miles-v0-1)，[Harvey post-training](https://www.harvey.ai/blog/post-training-update-harvey-tenet)，[Liquid AI agent loops](https://www.liquid.ai/blog/agent-loops)

### Ultrafast 的速度档，背后是硬件股权和供货关系

上周还在预告的 GPT-5.6-Sol Ultrafast，本周已经进入 API，先面向部分客户。阅读侧同时披露，在预览每秒最高 750 个输出 token 的 Ultrafast 前几天，OpenAI 行权取得了 Cerebras 约 4.2% 的无投票权股份；目前它有竞争力的速度类服务都由 Cerebras 承载。

OpenAI 把最高速度档绑定到专用硬件厂商的股权与供货关系上，没有换一个更小的模型。接下来可用性和定价会受供货约束，而不只受模型工程影响。下周继续等 Ultrafast 的价格、模型 ID 和正式开放时间。

来源：[OpenAI 与 Cerebras 股权关系](https://www.implicator.ai/openai-paid-100-for-a-4-2-cerebras-stake-weeks-before-ultrafast-launch)，[Cerebras 速度报道](https://www.bloomberg.com/news/articles/2026-08-19/cerebras-cbrs-says-its-new-computer-boosts-ai-speed-advantage-over-nvidia)

## 没有放进主线的信号

这周还有不少材料，但我没有因为数量多或标题热就硬塞进主线：

- **agentic RL、新基准与任务合成论文**：不少卡片只剩图注、仓库链接或片段，无法核验完整结果，也没有第二层回响。
- **企业隐私条款、厂商所有权与治理变化**：本周还没有出现可以观察的产品或运行时后果。
- **只有星标、没有跨层回响的仓库**：上榜和涨星可以说明注意力，不能单独证明结果发生了变化。

## 可选阅读

### MCP 发布新路线图，厂商 server 继续进驻助手

Model Context Protocol 官方博客发布新路线图，并登上 Hacker News 首页；同周 ElevenLabs 的 MCP server 已经可以在 Claude 里使用。MCP 一边改路线图，一边继续长出可用的厂商 server，已经进入规范和生态要同时看的阶段。

来源：[New MCP Roadmap](https://blog.modelcontextprotocol.io/posts/mcp-roadmap/)，[ElevenLabs MCP in Claude](https://x.com/ElevenLabs/status/2089353435397116280)

### 算力竞争开始比资本，但最大的担保已经缩水

CNBC 本周的说法是，Nvidia 已经不只靠芯片，也开始靠出资和担保维持领先。但同一俄亥俄园区的担保规模，已经从原计划的 2,500 亿美元降到 1,200 亿美元以下，只覆盖约 5 吉瓦的一期项目。技术竞争变成资本竞争后，风险也开始被投资者直接定价。

来源：[Nvidia 的资本护城河](https://www.cnbc.com/2026/08/18/nvidias-ai-moat-is-shifting-from-chips-to-capital.html)，[Nvidia 缩减担保](https://www.wsj.com/tech/nvidia-downsizes-plans-for-250-billion-guarantee-of-openai-data-center-b56c38d3)，[Groq 融资](https://www.implicator.ai/groq-350-million-3-5-billion-valuation-after-nvidia-deal)

### 用户开始自己测助手有没有降档，也自己给输出加后处理

社区本周出现了对 Claude Code 降低 effort 档位的 A/B 观察，也出现两个专门清理助手输出风格的第三方项目，以及一篇「一周内用 Codex 多过 Claude」的记录。

这些都是用户在没有官方说明时做的测量和补救：怀疑降档就做对照，输出不合意就接一层后处理，都不行就换工具。它们未必能证明厂商真的改了什么，但常常比发布说明更早暴露实际体验的变化。

来源：[Claude Code effort 观察](https://twitter.com/argofowl/status/2091150597374537729)，[Vomit](https://github.com/zachahn/vomit)，[Claudette](https://github.com/adnanakil/nobuzz/blob/main/README.md)

## 最后

这周，模型外面的东西比模型本身更清楚。

harness 已经能带来两位数的分数差，也能让 94% 和 95.3% 变成两个完全不同的故事；路由层被按数十亿美元定价；代码托管开始为 agent 的写入路径重做；安全边界则从模型拒答继续往权限、沙箱和审计移动。

接下来我主要盯三件事。先看 harness 的分数提升能不能讲清楚，runbook 又能不能跨模型迁移。再看 OpenRouter 交易、Origin 和本地推理配套，会不会真的改掉调用与托管的默认选择。最后看团队共享 agent、跨机器记忆和后训练产线进了真实工作流之后，权限与来源追溯还能不能跟上。

这就是我这周看到的 AI 信号。
