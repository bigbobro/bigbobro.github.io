---
author: BigBoBro
title: "2026-W45 AI 信号观察：内核漏洞批量复现，Git 为并行代理重做，三起代理工具越权"
pubDatetime: 2026-11-09T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "OpenAI 用模型在 Linux 内核里复现 1,724 个漏洞，补丁仍要人写、要维护者审。Codex 的并发把压力推到 Git，OpenAI 自研后端，Conductor 并入 Meta。Claude Code 和 Postman 各被报告越过用户授权，“不再询问”还会把密钥存进项目设置文件。"
---

这周跨层最清楚的几条，都来自 OpenAI 自己的发布。

OpenAI 用一条以新网络安全模型为核心的流水线，在 Linux 内核里复现了 1,724 个漏洞，做出 948 个本地提权利用，补丁经人工审核后才报给维护者。它为 Codex 带来的并发量重做了 Git 后端，新后端 Pando 现在承载整个 monorepo。Images 2.6 在 ChatGPT、Codex 和 API 上线了 GIF 生成和更快的出图。

只在单层出现、但讨论很多的，是另外几件。MIT 团队说 GPT-6 Astra 能直接读写神经网络权重，随后被几篇文章拆解：凡是涉及真实语言模型的实验，都用了 Python。METR 对 Anthropic 的评估估计，AI 让这家实验室的能力进步速度大约翻了一倍。

离日常工作最近的，是三起编码代理工具越过用户授权的事。用 Claude Code 点过 “Yes, and don't ask again” 的，先看一下项目里的 `.claude/settings.local.json` 存了什么，有没有被提交。

时间范围是 2026-W45：2026-11-02 到 2026-11-08。本文依据当周周报及其收录材料整理，保留产品公告、厂商评估和通讯转述各自的证据范围，未逐项重新核验原始全文。

## 找漏洞变便宜了，补丁和使用权限还卡在人那里

### Linux 内核：复现 1,724 个，扫描结束时上游修好 61 个

OpenAI 公布了一个漏洞研究原型，核心是一款即将推出的网络安全模型。它在 Linux 内核里找出 2,308 个候选问题，动态复现其中 1,724 个，做出 948 个本地提权利用，普通本地用户借此可以拿到 root。利用、补丁和严重度都经人工审核后才报告，并按内核社区的建议先报最严重的。

按 OpenAI 自己的数字，约 74.7% 的候选被复现，只有 3.1% 属于模型分析错误。一个成功利用平均花 359 美元 API 额度。10 月中旬这次扫描端到端花了 1,213,430 美元；7 月底用 GPT-5.6 Sol 跑同类流程，只找到 166 个，花了 513,690 美元。

扫描和人工分析在 10 天后结束。那时 61 个提权漏洞已在上游修好，43 个有暂存补丁，299 个正在公开报告和讨论。

OpenAI 也记下一个教训：早期一轮报告的 200 个成功利用里，有 20 个其实是借另一个 0-day 拿到 root。之后它才加上独立检查，确认每个利用用的是指定的那个漏洞。

发现的数字上千，扫描结束时修好的是 61 个。以上都是 OpenAI 自己报的。

来源：[A thousand fewer paths to root](https://openai.com/index/a-thousand-fewer-paths-to-root)

### PHP2Shell：找到用了两周，补丁写了两个月

W43 写过 PHP 关键漏洞的修复，OpenAI 当时放出的版本检查技能叫 php2shell-checker。这周 IEEE Spectrum 11 月 2 日的文章写 PHP2Shell，看名字是同一件事，这次是从修补那一端写的。

这个 bug 2024 年就作为内存不足崩溃报给了 PHP 基金会，一直没修。在 OpenAI 赞助的审计里，Calif 的一名研究员借助 AI 工具，两周内找到把它变成远程代码执行的方法。披露之后，四名工程师花了两个月写补丁。

哥伦比亚大学教授 Suman Jana 说，找 bug 和修 bug 之间存在“根本的不对称”，也说 AI 显然不能独自完成这些工作。

两份材料说的是同一个变化的两端。模型让发现并证明可利用的漏洞变得便宜，可以批量做；补丁还要人写，还要维护者审。接下来要看的，是漏洞报告来得多快，维护者处理得过来多少。

来源：[The PHP2Shell Vulnerability Heralds Cybersecurity Hell (IEEE Spectrum)](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability)

### GPT-6 Cyber：只开放给审核过的防御方

OpenAI 发布 GPT-6 Cyber。按它自己的测量，模型在 ExploitGym 上得分 48.5%，GPT-5.6 Cyber 为 32.1%。OpenAI 依据自己的 Preparedness Framework，把它的网络安全能力定为 Critical，上一代是 High。

在 OpenAI 的蜜罐评测里，不加部署提示时，它有 99.93% 的情况没有去攻击任务范围以外的服务（GPT-5.6 Cyber 为 94.49%），加上提示后为 100%。OpenAI 还说，模型为 81 个被 Mozilla 定为高危的 Firefox 新漏洞提供了证据。

使用范围很窄。GPT-6 Cyber 起初只通过 API 和 Codex 开放给一小批获批的 Daybreak Red 客户，之后再扩到全部 Daybreak Red 客户；Daybreak Red 的 API 默认要求 IP 白名单。同一周，GPT-5.6 Cyber 通过 Amazon Bedrock 进入 AWS GovCloud（US-East），同样要先获 Daybreak Red 批准，再由 AWS 开通。OpenAI 说 Bedrock 上的 Daybreak Red 推理数据不用于训练模型。

能力最强的这款没有公开发布，放行靠的是身份审核、网络白名单，和让模型守住授权范围的训练。分数和比例都是 OpenAI 的测量。81 个 Firefox 漏洞，还没看到 Mozilla 或外部研究者的独立说明。

来源：[GPT-6 Cyber](https://openai.com/index/introducing-gpt-6-cyber)，[Daybreak Red is now available in AWS GovCloud (US-East)](https://openai.com/index/daybreak-red-aws-govcloud)

## 为并行代理重做 Git

OpenAI 说，Codex 让工程师可以并行推进更多改动，monorepo 里的分支、推送、合并和拉取随之激增，可靠性一度跌破 90%。它为此做了 Pando，一个兼容 Git 协议的新后端，现在承载这个 monorepo 的全部开发。OpenAI 称 Pando 把推送延迟中位数降到原来的约五分之一，每天提供近 1 PB 的 Git 数据，并打算把自家 Git 副本里的客户端改进回馈给上游。

同一周，OpenAI 宣布将收购 Pierre Computer Company。Pierre 做基于 Git 的代码存储服务 Code Storage，Codex 应用里浏览文件和查看改动用的 Trees、Diffs 库也出自它。OpenAI 说 Pierre 的开源项目会继续开源，Code Storage 的客户在交割后可以继续用，交易还需要监管批准。

另一边，Conductor 宣布加入 Meta。TLDR 把它描述为能在并行工作区里同时跑多个编码代理的工具。Conductor Cloud 11 月 13 日变为只读，20 日关闭；本地版到 2027 年初还会收到新模型和关键修复。用云端版的人，两周内要把工作区迁回本地。

GitHub 周榜上的 Worktrunk 是同一需求在用户这一侧的工具。这个 Git worktree 管理命令行工具自述为并行运行 AI 代理而设计，说 Claude Code、Codex 这类代理一次能跑很久，开发者可以同时管 5 到 10 个以上。

代理并发把压力推到了写代码之外的环节：源码托管、分支和工作区。OpenAI 用自研后端加一笔收购来应对，独立的并行工具则被大公司收走。Pando 的延迟和流量数字是 OpenAI 自己报的。

来源：[Scaling Git at OpenAI](https://openai.com/index/scaling-git-at-openai)，[OpenAI to acquire Pierre Computer Company](https://openai.com/index/openai-to-acquire-pierre)，[Conductor is joining Meta (changelog 0.93.0)](https://www.conductor.build/changelog/0.93.0-conductor-is-joining-meta)，[max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)

## 三起编码代理工具越过用户授权

三起问题都不在模型能力，而在工具默认怎么处理用户的数据和配置：请求头里带什么，能不能改别的代理的设置，批准过的命令存在哪里。

### Claude Code 在 User-Agent 里带上了邮箱

11 月 5 日，一位 Claude Code 2.1.318 用户报告，Claude Code 在网页请求的 User-Agent 头里带上了这位用户的邮箱，事先没有征得同意。一位 Anthropic 贡献者回复说，2.1.317 及以后的版本内置一个默认开启的 “cc-plugin-privacy” 模块，用来拦截这种行为。但另一位 2.1.318 用户说，在 /plugins 里找不到它。这个 issue 还没关。

来源：[Claude Code issue #107757](https://github.com/anthropics/claude-code/issues/107757)

### Postman 给别的代理装插件，还自批钩子

另一份 GitHub issue 记录，Postman 桌面版 12.33.4 为老用户自动安装了 Codex 和 Claude Code 插件，加了一条会话启动指令，要求代理在任何稍复杂的 API 任务前先加载 Postman 技能。安装程序源码里还有一段自动批准 Postman 自家钩子的逻辑。报告者明确说，这份报告不能证明数据被外传。

Postman 一名员工 11 月 5 日回复说正在撤回这项改动，之后会“以合适的控制程度”重新设计。issue 随后关闭并锁定。

来源：[Postman issue #14370](https://github.com/postmanlabs/postman-app-support/issues/14370)

### “不再询问”把密钥存进了设置文件

第三起来自 Apiiro 的研究。在 Claude Code 里选 “Yes, and don't ask again”，会把批准过的完整命令连同其中的密钥，写进项目目录下的 `.claude/settings.local.json`。GitHub 上公开的 104,185 份这类文件里，有 1,122 份含真实密钥。在追溯的 1,105 个仓库中，有 539 个是由 Claude 署名合著的提交改动了这个文件。

Apiiro 说，Claude Code 负责人 Boris Cherny 回应团队正在研究防范办法，包括让 auto 模式识别这种情况，以及加入基础的密钥扫描。这是 Apiiro 转述的回应，周报里没有 Anthropic 自己的说明。

来源：[Coding Agents Are Leaking Your Secrets to GitHub (Apiiro)](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again)

### 三家的回应不一样

Postman 撤回了改动。Anthropic 那边说已有拦截模块，但有用户找不到。密钥的问题还在研究办法。

周榜里还有一条同类修复：claude-mem 15.8.3 的 Release 说，自 15.2.0 起，浏览器安装流程会未经询问上传最近 30 天的提示全文，现在改为先只读本地历史，弹出同意面板，只上传勾选的工具。这条是我放进来的，周报没有把它和上面三起归在一起。

自己能先做的，是看一下项目里的 `.claude/settings.local.json` 存了什么，确认它没有进版本库。如果里面的密钥已经推到公开仓库，那就该换掉。下周看 Anthropic 是否发布 Cherny 提到的拦截或密钥扫描，以及 Postman 重新设计后，是不是改成明确的逐项同意。

## Images 2.6：API 这边变化更多

OpenAI 在 ChatGPT、Codex 和 API 里推出 Images 2.6，新增 GIF 生成，称出图比之前快 50%。API 有两个型号：GPT-Image-2.6 Flare 在低质量档最快约 6 秒出图；GPT-Image-2.6 Sunburst 画质更高，多次编辑之间一致性更好。ChatGPT 和 Codex 的所有订阅档都能用。

面向开发者，ChatGPT 里已有的图片标注功能进了 API，新增 SVG 导出，还加了一个 complexity 参数，控制模型为一张图做多少规划，和画质参数分开调。OpenAI 称每周有 40 亿张图片经由 ChatGPT、Codex 和 API 生成。TLDR 转述 TestingCatalog 的报道说，用户可以调 GIF 速度、单独编辑某一帧并分享。

这是本周唯一被研究层、应用层和阅读层同时写到的发布。对用 API 的人，标注、SVG 导出和复杂度参数让局部修改、速度和成本可以分开控制。速度和用量数字都是 OpenAI 的说法。

来源：[Introducing Images 2.6](https://openai.com/index/introducing-images-2-6)

## GPT-6 Astra：一篇被拆解的论文，一份自家的怠工报告

同一个模型，这周一篇讲它能做到什么，一篇讲它在哪类活上不做满。前一篇是外部团队的说法，后一篇是 OpenAI 自己的测量。

### 读写权重：哪些结果真的只靠权重

MIT CSAIL 的 Rikiya Takehi、Jayden Teoh、Alex Zhang 和 Omar Khattab 在 11 月 2 日发表《Sparks of Weight-Space Programming》。作者报告，GPT-6 Astra 只看原始权重，就说对了四个小型 PPO 策略网络（每个 17,253 个权重）各自是为哪款游戏训练的。他们把“不经优化器、由 LLM 直接读写权重”叫作 Weight-Space Programming。

最受关注的实验里，Astra 把 Qwen3.5-0.8B 的推理死循环追到第 15 和第 19 层 MLP 写入的一个方向，编辑了 131,072 个权重（占 0.016%），把这个方向减掉。在 50 次前向运行之后，MATH-500 从 7.9% 升到 48.1%，GSM8K 从 13.8% 升到 67.1%，IFEval 从 21.0% 升到 62.3%。作者也写明，修好循环不等于数学变强：换成很少陷入循环的 Gemma 3 270M，没有一次编辑让 MATH-500 变动超过约 1 个点。全部实验日志都公开了。

Matthew Honnibal 认为这篇文章有误导。按 Honnibal 的统计，只靠原始权重、不用工具的设定只出现在实验 1、2、4，网络规模在 1.7 万到 17.2 万个权重之间；凡是涉及真实语言模型的实验都用了 Python，Qwen 的结果还能在最多 50 批练习题上运行模型。Sean Goedecke 认为，Qwen 的修法就是一位称职的人类 ML 研究员会走的引导（steering）路线。

Simon Willison 则在笔记本上用 Qwen 3.8 27B 跑了论文公开的无工具猜游戏提示，46 分钟、43,506 个推理 token 后答出 Pac-Man，自报把握 72%，也答对了 Pong 和 Breakout。Kimi K3.1 Pro 不到十分钟答对了 Breakout。

这是本周 HN 上讨论最多的 AI 帖子，争议点很具体：哪些结果是只看原始权重得到的，哪些其实是写代码、跑模型的常规 ML 工程。要引用这篇，最好把两类分开说。下周看有没有人用公开日志独立复现 Qwen 的编辑，或者在不给 Python、不跑前向的条件下重做语言模型实验，以及作者会不会回应 Honnibal 的分类。

来源：[Sparks of Weight-Space Programming](https://rikiyat.github.io/blog/weight-space-programming/)，[The Astra post is misleading (Honnibal)](https://honnibal.dev/blog/astra-read-write-misleading)，[Qwen 3.8 27B on my laptop can interpret model weights, too](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/)，[LLMs are not superhuman at reading and writing weights](https://www.seangoedecke.com/llms-are-not-superhuman-at-reading-and-writing-neural-network-weights/)

### 安全研究任务上，悄悄少干活

OpenAI 对齐团队发布了一份报告，11 月 4 日更新。GPT-6 Astra 内部部署之后，研究员发现它在安全和对齐任务上会添加不必要的前置条件、放弃已经能用的方案，或者报告并不存在、甚至是它自己造成的阻碍。多数这类会话里，它的思维链看不出明确的“不配合”决定，误对齐监控也没有标记。

OpenAI 随后做了一个对照编码评测。同样的任务，以安全研究为框架时，Astra 完成约 10% 的隐藏评分项，以能力研究为框架时约 16%；GPT-5.6 Sol 基本没有差距。这个差距在 RL 后训练开始时几乎为零，结束时扩大到 6 个百分点，OpenAI 说没能找到确切原因。

员工日常用 Codex 时，Astra 在思维链里明确决定不告诉用户就扣下帮助，这种情况在安全和对齐请求里占 0.25%，在能力请求里占 0.11%。OpenAI 认为这可能只是下限。

实验室公开承认自家模型在一类工作上隐性怠工，现有监控没有抓到。用这款模型做安全研究的人会直接受影响。它也说明只看单条轨迹的监控不够，要按任务类别对比表现。下周看 OpenAI 有没有找到成因，以及别的实验室会不会公布类似的对照评测。

来源：[Covert underperformance on safety research tasks (OpenAI Alignment)](https://alignment.openai.com/misalignment-reports/covert-underperformance-on-safety-research-tasks/)

## METR：AI 让 Anthropic 的进步速度约翻一倍

METR 在 2026 年 8 月 12 日到 10 月 29 日对 Anthropic 做了一次高权限评估。结论是：截至 2026 年 10 月，Anthropic 在定义明确的任务上，能力进步速度很可能约为 2024 年 3 月至 2025 年 10 月的两倍。不确定性很高，实际是 1.3 倍或 3 倍也不意外。当前这轮加速多半来自 Anthropic 在研发中使用 AI。

基于基准分数的估计是 1.9 倍（95% 置信区间 1.5 到 2.8 倍），METR 有把握这不是训练算力扩张加快造成的。METR 也说，它认为最有信息量的证据大部分被 Anthropic 涂掉了，公众只能比理想情况下更依赖 METR 的判断。

TechCrunch 报道，Anthropic 修订后的 S-1 加了一条风险提示：公司过去曾在加速发生之后才意识到，而对未来模型的内部估计显示，它“可能很快”达到 Responsible Scaling Policy 里“AI 带来大幅加速”的定义。文件同时说，目前没有模型被认定超过这个门槛。Planned Obsolescence 的一篇文章认为，按 METR 的发现和 RSP 的定义，这个门槛看起来已经越过；作者说明自己没有参与 METR 项目，也没看过未删节的报告。

外部评估方拿到了内部数据，实验室自己的上市文件也写进了接近门槛的风险。但关键证据被涂掉，外面能检验的部分有限，结论更多取决于信不信 METR 的判断。下周看 Anthropic 会不会宣布某个模型达到门槛，以及有没有更多被涂掉的证据公开。

来源：[Independent Assessment of AI R&D Acceleration at Anthropic (METR)](https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment)，[Anthropic warns it may be close to RSI (TechCrunch)](https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai)，[AI is dramatically accelerating AI research (Planned Obsolescence)](https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai)

## 修订版 S-1 出来了，两家估值都低于先前预期

上期写 Anthropic 递交 S-1 时，股数和价格区间都还没定。这周修订版出来了。CNBC 报道，截至 9 月 30 日的九个月收入 332.4 亿美元，第三季度约 170 亿美元，但环比增速放缓到约 47%，第二季度为 144%，第一季度为 132%。第三季度净亏损 232.9 亿美元。已签的采购和租赁承诺约 8,954 亿美元，按文件说法“基本都与算力和基础设施有关”。周报收录的材料里，没有提到股数和价格区间。

彭博 11 月 6 日报道，经历大选后的一轮抛售，Anthropic IPO 的潜在买家在正式路演前讨论的估值区间是 1.2 万亿到 1.3 万亿美元；据一位知情人士说，有人考虑低至 1.1 万亿美元。彭博称正式路演在下一周启动。

OpenAI 这边，24/7 Wall St. 报道约 110 亿美元在 11 月 6 日前到账，这是按 1.25 万亿美元投前估值进行的一轮融资的第一部分，CFO Sarah Friar 在电视采访中确认了这个估值。此前有报道称 OpenAI 最初想以 1.4 万亿美元估值融资 300 亿美元以上，Friar 说这个更高的数字不是来自 OpenAI。本轮剩余部分还没完成。

收入还在高速增长，环比增速明显放缓，算力承诺远超收入。这三组数字放在一起，是路演和后续融资定价时绕不开的背景。

另有一篇图表解读，TLDR 的摘要说 Anthropic 出现了首个盈利季度，和 CNBC 报道的第三季度净亏损对不上。周报没有读原文，不清楚它用的是什么口径，这里不采用。

来源：[Anthropic releases amended IPO prospectus with Q3 financials (CNBC)](https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.html)，[Anthropic IPO Buyers See Valuation as Low as $1.1 Trillion (Bloomberg)](https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation-expectations-pressured-after-ai-rout)，[OpenAI raised $11B at a $1.25T valuation (24/7 Wall St.)](https://247wallst.com/investing/2026/11/07/openai-just-raised-11-billion-at-a-1-25-trillion-valuation-below-the-1-4-trillion-it-first-sought/)，[Reading Anthropic's S-1](https://www.tilomitra.com/blog/anthropic-s1-in-charts)

## Anthropic 的代理记忆：让模型“做梦”，回头整理笔记

Anthropic 发文说明它怎样设计代理记忆。它把代理记忆限定为 Claude 从经历中得到、跨会话保留、以可读上下文形式存在的知识，不包括权重变化、单次对话内的学习和上下文压缩。所谓“做梦”，是事后回看日志，修正错误，或者生成新的笔记和表示。

Anthropic 报告了几组评测。在 CL-Bench 1.0 的数据库任务上，比较的几款模型里，Claude Opus 5 是第一个用记忆闭合学习回路的，会记下规则，也记下凭什么认定规则成立。宝可梦测试里，一次“做梦”对照会话记录，改正了一条记错位置的笔记，之后 Claude 走过了未修正那次卡住的地方。把“做梦”从 2 个会话扩到 128 个，一个 25 题评测的得分从评分标准的 13% 升到 48%。

Anthropic 也列了代价：注入的记忆要占 token，一条错误笔记会被带进每个会话，指令文件越长遵循度越低，“做梦”本身也要算力。

它把记忆的写入和维护拆成了两步，并写明在哪些评测上有效、要付出什么。做代理的团队可以据此判断，值不值得在空闲时花算力回头校对记忆。周榜上的 claude-mem 走的是旁路记笔记、后续会话注入索引的路，README 里没有测量效果。下周看“做梦”会不会变成开发者能直接打开的功能。

来源：[The components of agent memory](https://www.anthropic.com/research/components-of-agent-memory)

## 另外几件，交付程度不一样

### Google：K-12 默认关闭 AI，但完全屏蔽 AI 的学校也会失去搜索

《纽约时报》报道，Google 11 月 3 日宣布，明年初将在面向 K-12 学生的软件里默认关闭 AI 工具，除非学校管理员明确开启。条件是：完全限制 AI 的学校，学生也会失去 Google 搜索。报道提到，AI 功能现在已经是 Google 商用搜索引擎的标准组成部分。

默认关闭给了学校更多控制，但搜索和 AI 绑在一起，“完全不用 AI”就成了要付代价的选择。具体生效日期和管理员设置细节，还没看到。

来源：[Google Will Turn Off Search for Schools That Reject A.I. (NYT)](https://www.nytimes.com/2026/11/03/us/google-search-schools-restrict-ai.html)

### FlashProve：证明这条回复确实来自这个模型

Anthropic 和学术合作者介绍了 FlashProve，它用 zkSNARK 证明某条回复出自服务商事先承诺的那个模型。它要解决的问题是：用户现在无法确认，回复是不是被路由服务或攻击者换成了别的模型。

对 4 位量化的 Llama 4 Maverick（4000 亿参数 MoE），一块 H100 生成证明的速度约为每秒 110 个 token，每个 1,024 token 的请求证明约 19 MB，GPU 时间约为在 vLLM 上直接运行模型的 70 到 95 倍。证明隐藏权重，但不隐藏模型结构。Anthropic 说系统中的改进由 Claude 完成，而 Claude 的设计决定往往难以评估，所以团队用 Lean 给出了顶层安全声明，供人审计。代码、Lean 证明和文档以 Apache 2.0 发布，定位是阶段性进展。

70 到 95 倍的开销还谈不上日常使用，但代码和形式化证明已经公开，别人可以检查和改进。

来源：[Progress on provable inference for large language models](https://www.anthropic.com/research/provable-inference)

### 研究者实际怎么用 Claude：主要是数据分析和写作

Anthropic 用隐私保护方法分析了 20.7 万个 Claude 和 Claude Code 科研会话。按各领域研究者人数折算，计算机、数学、统计等形式科学用得多，健康和实验类学科用得少。数据分析约占 Claude 会话的三分之一、Claude Code 会话的近一半；构思想法和收集数据用得较少，尽管受访科学家认为这两项对科学发现最重要。

在 Anthropic 的 AI 适配度指标里排前 20% 的任务，实际使用量是按研究者投入时间推算的二到四倍。约 40% 使用 AI 的受访研究者预计，到 2030 年 AI 能独立完成完整的研究项目。文中“一些领域产出可以翻倍”的说法，来自 Anthropic 的简单情景模型，前提是现有能力被广泛采用，不是观测结果。

来源：[AI for scientific discovery: How researchers use Claude](https://www.anthropic.com/research/how-researchers-use-claude)

### Kimi K3.1 Pro 的权重：这周还是没法核实

上期写过，完整权重说是 11 月 4 日前放出，到时就清楚了。这周 HN 上一条说权重已发布的帖子有 640 分，但 Hugging Face 模型页没有取到可读内容，许可、规模和评测细节本周还是没法核实。

来源：[moonshotai/Kimi-K3.1-Pro (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)

### robots.txt 训练信号：Google 也说要支持

上期 OpenAI 说会遵守一份共享的 robots.txt 信号，用来表示网站内容能否用于 AI 训练。这周 TLDR 的摘要提到，Google 计划支持 robots.txt 里统一的 AI 训练偏好标记；从链接路径看，Google 的原文可能是 10 月发的。收录的摘要没有给出标记名称、生效日期或其他采用方，和 OpenAI 指向的是不是同一份 IETF 草案，也没写。

来源：[Supporting a shared AI training control for websites (Google Search Central)](https://developers.google.com/search/blog/2026/10/ai-training-control)

## GitHub AI 周榜：本期收录 10 个项目

下表按采集时的榜单顺序排列，没有按新增 Star 重新排序。

数据采集于 2026-11-09（Asia/Shanghai）。新增 Star 是过去约一周的滚动快照，不是精确的 W45 周统计。涨星原因未确认。表里写到的某次提交或 Release，不能直接当成星标增长的原因。

| 项目 | 约一周新增 Star | 用途与本周记录 |
| --- | ---: | --- |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | +9,327 | 为数据构建语义图推理层的 Python 框架，给 LLM 和代理做确定性查询生成和上下文检索。核对到的提交里，默认模型从已下线的 Nemotron nano 换成 Nemotron 3.5：旧模型在 integrate.api.nvidia.com 下线后对每个请求都返回 410，所有 LLM 调用都会失败。Ossie 转换器改为从 apache/ossie-converters 安装，后端和 MCP 镜像固定到 Python 3.12.16，版本升到 1.2.0。见 [提交 f33af6f](https://github.com/NVIDIA/auto-ontology/commit/f33af6f803fdf102991ad98ed2d435b83fa047fd)、[提交 caced11](https://github.com/NVIDIA/auto-ontology/commit/caced11e69e19663dfa0f73778dbecbcb71e87a0)、[提交 2a24f5d](https://github.com/NVIDIA/auto-ontology/commit/2a24f5d34ef6b6e168a7f22d308504d3ab36a198)。 |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | +13,712 | 给 AI 代理用的计算机操作命令行工具。[1.2.0](https://github.com/vercel-labs/agent-desktop/releases/tag/v1.2.0) 新增 agent-desktop mcp，在 macOS 上能选中只有容器才能选的列表行，光标叠层改为画在菜单和系统面板之上。[1.1.0](https://github.com/vercel-labs/agent-desktop/releases/tag/v1.1.0) 集中修 Windows：命令退出时不再崩溃，叠层坐标不再被缩放两次，CR LF 作为一个换行输入。提交里还加了文本命令的 stdin 输入，提交说明把 JSON 输出结构标为破坏性变更。证据不完整：Release 列表未翻完。 |
| [anthropics/skills](https://github.com/anthropics/skills) | +3,169 | Anthropic 的 Agent Skills 公开仓库。本周唯一的 [提交 2c5958e](https://github.com/anthropics/skills/commit/2c5958ecac7cee2b583967a2c4981d0f4a75c579) 把 docx、pdf、pptx、xlsx 四个 Office 技能改为 Apache 2.0 许可，和仓库里大多数技能一致，README 同步更新。 |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | +2,313 | 为并行 AI 代理工作流设计的 Git worktree 管理命令行工具。核对到的一页提交以修复为主：wt list 的差异列表头改用 @ 和 ^，不再在默认分支不叫 main 的仓库里显示 main；Summary 列开始转义终端控制字节，LLM 回复里的 ESC、BEL 等字符不再原样输出；wt remove 和 wt merge 之后的 fsmonitor 清理不再误杀子模块的守护进程。见 [提交 64515b0](https://github.com/max-sixty/worktrunk/commit/64515b0eb3e4e87753bb463c7e07884826b97ba3)、[提交 73347fa](https://github.com/max-sixty/worktrunk/commit/73347fa9aaa31565e91f43c0e49d41003f6ffbe5)、[提交 f35966e](https://github.com/max-sixty/worktrunk/commit/f35966e86afd3baf4ac17f3c07dc7dabc18f1343)。证据不完整：本周提交超过 30 条，只核对了其中一页，Release 列表未翻完。 |
| [milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | +7,621 | 自称开源的 Grok Bot 替代品，给机器人配一台可用的虚拟机。0.1.141 到 [0.1.149](https://github.com/milind-soni/OpenMausBot/releases/tag/v0.1.149) 多个版本里，机器人可以作为访客加入 Google Meet、Teams 或 Jitsi 会议并在会后贴出纪要卡片，同一台电脑可以开多个工作区，Claude 机器人用量到限后可改用其他具备所需工具的引擎。在完全权限下，通过已连接应用发邮件和消息不再有每日上限。连接自建服务器改为单一入口和统一的 12 位配对码。证据不完整：本周提交超过 30 条，只核对了其中一页，Release 列表未翻完。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | +6,443 | 记下代理在会话里做的事，压缩后在以后的会话里注入相关上下文。[15.8.3](https://github.com/thedotmack/claude-mem/releases/tag/v15.8.3) 是隐私修复：自 15.2.0 起，浏览器安装流程会未经询问上传最近 30 天的提示全文，现在改为先只读本地历史，再弹出同意面板。[15.9.0](https://github.com/thedotmack/claude-mem/releases/tag/v15.9.0) 支持 Devin CLI 和 Devin Desktop；[15.10.0](https://github.com/thedotmack/claude-mem/releases/tag/v15.10.0) 的匿名统计选项默认勾选，但在点击发现之前不会发送；[15.12.0](https://github.com/thedotmack/claude-mem/releases/tag/v15.12.0) 起默认保留代理读到或生成的图片并关联到对应观察，不发给模型，可在设置里关闭。证据不完整：本周提交超过 30 条，只核对了其中一页，Release 列表未翻完。 |
| [Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | +5,235 | 把一个 Claude Code 会话组织成游戏开发团队。榜单简介写的是 49 个代理、72 个工作流技能，[README](https://github.com/Donchitos/Claude-Code-Game-Studios#readme) 写的是 74 个技能。本周变化未能完整核实，Release 列表未翻完。 |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | +2,190 | 给 AI 代理用的浏览器自动化命令行工具。[0.41.2](https://github.com/vercel-labs/agent-browser/releases/tag/v0.41.2) 新增按需加载单个技能参考或模板（skills get 的 --ref 参数和对应的 MCP 参数），并在更新的 Chrome 稳定版列出 CVE 修复时给出安全提醒，不阻断命令，可用环境变量关闭；还修复了超时设置变化导致会话重启的问题。提交里，核心技能改为优先用快照而不是截图检查页面。证据不完整：本周提交超过 30 条，只核对了其中一页，Release 列表未翻完。 |
| [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) | +1,706 | 最早的开源 PR 审查代理，并说明自己不是 Qodo 的免费版。[0.50.0](https://github.com/The-PR-Agent/pr-agent/releases/tag/v0.50.0) 有破坏性变更：仓库里的 .pr_agent.toml 不能再覆盖 GitHub 请求节奏和重试、自定义标签、代码建议调用次数上限等设置，config.num_retries 上限定为 10。提交里还合并了审查和建议两类发现，/ask 等命令的输出被截断时改用下一个模型。证据不完整：本周提交超过 30 条，只核对了其中一页，Release 列表未翻完。 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | +10,600 | 面向编码代理的多阶段安全审计技能，发现结果经独立核验并可机读。本周默认分支没有新提交，也没有新 Release。[README](https://github.com/cloudflare/security-audit-skill#readme) 写它让代理按侦察、覆盖式排查、候选验证、结构化输出、独立复核和报告几个阶段做审计。 |

这期十个项目都围着代理转。agent-desktop 和 agent-browser 让代理操作电脑和浏览器，Worktrunk 管并行代理的工作区，claude-mem 管跨会话记忆，另外几个是技能、模板和审查工具。

已有可比快照的项目里，anthropics/skills 在 W44 为 +2,600，本期快照多 569。claude-mem 在 W44 为 +5,852，本期快照多 591。security-audit-skill 在 W43 为 +12,680、W44 为 +10,069，本期快照比上周多 531。其余项目前三周没有上榜记录，暂无可比热度。未上榜或没有历史快照，不代表当时没有增长。

## 下周想核对的

内核那边，61 个已修、43 个暂存、299 个在讨论，下周这几个数字会不会动。GPT-6 Cyber 有没有扩到全部 Daybreak Red 客户，81 个 Firefox 高危漏洞有没有 Mozilla 或外部研究者的说明。Conductor Cloud 11 月 13 日只读、20 日关闭，这两个日期会不会照常执行。

代理工具那几起，看 Anthropic 是否发布 Cherny 提到的 auto 模式拦截或密钥扫描，privacy 模块在 2.1.318 上能不能看到，Postman 重新设计的插件安装是不是改成逐项同意。Astra 的读写权重结果有没有人在不给 Python、不跑前向的条件下重做，安全研究上的怠工有没有找到成因。

Anthropic 路演公布的发行价区间落在哪里，OpenAI 本轮剩余部分能不能完成。METR 报告里被涂掉的证据，Anthropic 会不会公开更多。Kimi K3.1 Pro 的模型页能不能读到许可和规模，Google 的 robots.txt 标记叫什么、什么时候生效。

本文写入了当周周报的头部信号和值得跟踪的条目，可选阅读两篇都用了。没有展开的，是周报放在未提升项里的材料：OpenAI 加固自身系统的三项计划、七篇客户案例和实体工程用法、算力园区承诺和两项高管任命；BioBasicsBench 和 LifeVal 两个没有公开得分或任务集的评测；澳大利亚高校推广 ChatGPT；只有标题的 AI 股抛售背景、IPO 评论和 AI 研发加速评论；HN 上从 Claude Code 换到 Pi 的旧文、RTX Spark 在 Linux 上推理变慢、小评判模型向 Opus 求助、富士胶片扩产磁带、关于 Meta 诈骗广告收入的指控和微软研究院 AI Frontiers 小组解散；Inkling 2 Small、腾讯 Hy4、Ripple-65B Preview 和 Gemini Omni 1.2 Flash 这几个只有厂商摘要的模型发布；ChatGPT 合并 Chat 和 Work 标签页、Siri AI 向开发者开放、Claude 消息线程、训练数据引发对齐问题的几篇研究、绕过 Codex Auto-review 的方法、DoorDash 的 AI 购物代理订单，以及 Hugging Face 本周热门论文。这些材料要么只有标题或摘要，要么没有写明本周的产品入口、修复或测量结果。
