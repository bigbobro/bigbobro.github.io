---
author: BigBoBro
title: "2026-W44 AI 信号观察：Terra 降价，Carbon 和 Genie 4 先给少数人，Anthropic 递交 S-1"
pubDatetime: 2026-11-02T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "GPT-6.1 Terra 的标准 API 价格比 GPT-5.6 Terra 低一半，Gemini 4 Carbon 和 Genie 4 只先给一小部分人。Anthropic 递交 S-1，股数和价格未定。OpenAI 和 Anthropic 同一周说模型反驳了 ETH，核验方式不一样。Cursor 市场上的 Claude Code 扩展被报告带后门。"
---

这周几层来源同时写到的，是三个新模型和一份上市文件。

三个模型都写明了现在谁能用。OpenAI 发布 GPT-6.1 Terra，标准 API 价格比 GPT-5.6 Terra 低一半，ChatGPT Work 和 Codex 的同一份额度能覆盖更多任务。Google 的 Gemini 4 Carbon 只先给 Fairwind 计划里的一部分网络安全防御者。DeepMind 的 Genie 4 先给受信任测试者。Anthropic 向 SEC 递交了 S-1，拟以 ANT 在 Nasdaq 上市，股数和价格都还没定。

数学上，OpenAI 和 Anthropic 同一周各自说模型反驳了 Exponential Time Hypothesis。OpenAI 把模型写出的数学、复杂性和物理手稿当作原始研究数据，交给外部学者小组解释。Anthropic 那条出现在通讯转述里，附了一个 Lean 4 仓库，同时写明没有机器检查过 Lean 语句和论文是否一致。

离日常工作最近的一条，是 Phorion 报告 Cursor Marketplace 上的官方 Claude Code for VS Code 扩展 2.1.312 和 2.1.313 带有持久的 SSH 后门。在 Cursor 里装过这个扩展的，先查一下版本。

时间范围是 2026-W44：2026-10-26 到 2026-11-01。本文依据当周周报及其收录材料整理，保留产品公告、厂商评估和通讯转述各自的证据范围，未逐项重新核验原始全文。

## 三个新模型，三种开放范围

### GPT-6.1 Terra：价格和额度一起变了

OpenAI 发布 GPT-6.1 Terra，定位是视觉推理、计算机操作和写作。它说标准 API 价格比 GPT-5.6 Terra 和 GPT-6.1 Sol 低 50%。同一份 ChatGPT Work 和 Codex 用量额度，能覆盖的任务比 GPT-5.6 Terra 多，也明显多于 GPT-6.1 Sol 和 GPT-6 Astra。

OpenAI 还报告，中等推理力度下，Terra 在 Agents' Last Exam 上比 GPT-5.6 Terra 高 15 个百分点，成本大约是三分之一。这些比较都是 OpenAI 自己的测量。

这次不只是换了个名字。价格和额度，用的人可以拿自己的 API 账单和 Codex 用量直接对照。15 个百分点有没有第三方复现，公告里没有。

来源：[Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra)

### Gemini 4 Carbon：开发者和企业还不能用

2026 年 10 月 28 日，Google 宣布 Gemini 4 Carbon，称它是自己最强的网络安全和长程任务模型，并说它在 Artificial Analysis Intelligence Index v5.0 上以 59 分排第一。这个排名是 Google 在公告里给的说法。

Carbon 先通过 Fairwind 计划给一部分网络安全防御者，同时继续走美国政府的预发布测试。开发者、企业和消费者现在都用不了。

公告把排名和访问边界写在了一起。对大多数人来说，这周能做的只是读公告。什么时候扩到开发者，收录的材料里没有给出时间。

来源：[Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)

### Genie 4：画面和声音一起生成，先给受信任测试者

2026 年 10 月 27 日，Google DeepMind 宣布 Genie 4。这是一个世界模型，画面和音乐、环境声、对白一起生成。使用者可以用文字改正在运行的模拟，比如天气、镜头，或者加入一个新的人或物体。

研究预览先给受信任测试者。面向消费者和开发者的发布还在后面，起点写的是 Google AI Ultra 订阅者使用的 Project Genie，以及 Gemini API 和 Google AI Studio 的早期访问伙伴。

所以有 Ultra 订阅也还不等于现在能用。接下来看 Project Genie 什么时候对 Ultra 订阅者打开。

来源：[Genie 4](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation)

## Anthropic 递交 S-1

2026 年 10 月 26 日，Anthropic, PBC 说已向 SEC 提交 Form S-1，拟公开发行 A 类普通股，计划在 Nasdaq Global Select Market 以代码 ANT 上市。股数和价格区间都还没定。Anthropic 说注册声明尚未生效，股份还不能出售。

SEC 文件封面写着提交日 2026 年 10 月 26 日，公司是特拉华州的 Anthropic, PBC，主要行政办公室在旧金山 548 Market Street, PMB 90375，登记号一栏为空白。

这是一份已经递交、但还不能凭它卖股票的文件。本文只用到公告和文件封面上的信息，招股书正文里的财务和风险披露没有展开。接下来看修订版 S-1 有没有写出股数和价格区间。

来源：[Anthropic files S-1](https://www.anthropic.com/news/s1-sec)，[SEC 上的 S-1 文件](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm)

## 两家实验室，同一周说模型反驳了 ETH

### OpenAI：手稿当作原始数据，交给学者解释

OpenAI 说，它的模型证明了任意维度的 local smoothing conjecture，并称这同时解决了 Kakeya conjecture 和 Stein's restriction conjecture，用的是一个新的辅助偏微分方程。它说系统证明 Exponential Time Hypothesis（ETH）为假，随后在 Lean 里做了核验。物理方面，它说模型给出了量子色动力学和一个标准模型补全的存在性证明，其中包括纯 Yang-Mills。自然语言的 Yang-Mills 证明完成于 2026 年 9 月 9 日，QCD 证明在 9 月 18 日，Yang-Mills 的形式化在 10 月 16 日。

以上都是 OpenAI 的陈述。这周变化的是发布方式。OpenAI 把这些手稿称为原始研究数据，而不是已经完成的论文，并交给外部学者分组解释。复杂性那组由 Russell Impagliazzo、Ramamohan Paturi 和 Ryan Williams 带领，物理那组由 David Gross 带领。三个领域用三种不同的发布安排，不签保密协议，也不为模型做出的发现计学术署名。

来源：[Working with academic communities to build scientific understanding](https://openai.com/index/building-scientific-understanding-with-academic-communities)

### Anthropic：通讯转述，附 Lean 仓库

TLDR 转述，Anthropic 说一个内部研究用的 Claude 在没有人类输入的情况下，找到一个确定性算法，能在 2^O(n log log n/sqrt(log n)) 时间内计数 3-SAT 公式的满足赋值。这会让 3-SAT 成为亚指数问题，从而反驳 ETH。

链接的仓库里有论文，和模型写出的 Lean 4 形式化，大约 8 分钟能构建完。Anthropic 注明，没有机器检查过 Lean 语句和论文说的是同一件事。它还说，这个结果不说明实际 SAT 求解会怎样。按通讯的说法，这条出现在 OpenAI 的 ETH 反驳之后几个小时。以上是通讯对 Anthropic 说法的转述。

两条都说反驳了 ETH，但不是同一项结果，核验方式也不一样。OpenAI 交给点了名的学者小组。Anthropic 放出仓库，自己写明 Lean 语句和论文之间还差一步检查。接下来看学者小组怎么解释，以及有没有人补上那一步机器检查。

来源：[anthropics/formal-math 中的 ETH 目录](https://github.com/anthropics/formal-math/tree/main/eth)

## Cursor 市场上的 Claude Code 扩展被报告带后门

Phorion 在 2026 年 10 月 30 日发文、31 日更新，说 Cursor Marketplace 上的官方 Claude Code for VS Code 扩展，版本 2.1.312 和 2.1.313，会在 macOS、Linux 和 Windows 上放下一个持久的 SSH 后门。帖子说 Cursor 已经移除这两个版本，并建议机构检查自己的环境里是否还有它们。

这是 Phorion 对它分析过的安装包的报告，不是 Anthropic 或 Cursor 的安全通告。周报收录的材料里，还没有两家自己的说明。

在 Cursor 里装过这个扩展的，先看版本号。报告说的是持久后门，所以只删扩展大概不够，机器本身也要查。接下来看 Anthropic 或 Cursor 会不会针对这两个版本发出自己的安全说明。

来源：[Backdoor in Claude Code for VS Code extension on the Cursor Marketplace](https://phorion.io/blog/offical-claude-code-vsx-compromise/)

## 代理表态之后，分析师跟着改

Anthropic 报告了一项随机试验。AI 编程代理被随机指定去支持某个选项，职业分析师在 86% 的时候选了这个选项；如果指定不起作用，这个比例应该在 50% 左右。分析师原本有偏好时，代理不同意，60% 的人改口；代理同意，只有 6% 改口。事后 77% 的人用了代理的论据，有时原文照搬，只有 15% 说明这来自代理。跟着代理走的人，信心和别人差不多。

这是一次测量，不是产品发布，范围是这一项分析师任务。

同一周，Orestis Ioannou 写自己同时跑几个编程代理：一个实现，一个调查，一个复查，一个检索。他说以前一周依次做两三件事，现在负担更重，因为每个代理都会不时要他做一个决定。比较依据是他自己 2019 年以来的 GitHub 记录，只是一个人的样本。

两篇放在一起看，一篇说人要做的决定变多了，一篇说这些决定很容易跟着代理走。这是我把两篇连起来读，材料本身没有这样说。接下来看分析师试验之外，别的任务里有没有类似的改口比例。

来源：[How AI agents shape experts' judgment calls](https://www.anthropic.com/research/agents-judgment-calls)，[AI promised less work. I've never worked more](https://oioannou.com/blog/ai-promised-less-work/)

## 另外几件，交付程度不一样

### Model Spec 按五项价值重新组织

OpenAI 说它更新了 Model Spec。配套通讯列出的五项价值是：忠实于人的意图、把伤害降到最低、诚实与透明、人的能动性，以及关照。官方说明把这份规范的用途写成引导更强的模型做出稳妥判断，并保持人的能动性和对人的意图的忠实。

周报收录的只有这份名单，规范条文本身没有读到。接下来看公开规范里，这五项能不能对上具体条文。

来源：[An updated Model Spec](https://openai.com/index/updated-model-spec)

### Mistral Large 4 放出权重

Mistral 说它正在放出 Mistral Large 4 的权重。这个模型也叫 Le Chonk，1 万亿参数，原生多模态，之前已经公开预览。帖子说，预览之后继续做的强化学习改善了编程和防御性网络安全，权重可以自行部署。能力说法来自 Mistral。

“正在放出”还不等于已经能下载。权重能不能拿到、许可条件怎么写，要看页面后续。

来源：[Mistral Large 4](https://mistral.ai/news/mistral-large-4-oss/)

### Kimi K3.1 Pro：权重日期还是 11 月 4 日

上期写过 K3.1 Pro 的发布。这周 Ben's Bites 说它已经开源，基准达到 Opus 5.5 的水平。月之暗面自己的帖子仍把完整权重写在 11 月 4 日前放出，和 Opus 的比较也只是 Terminal-Bench 4.0 这一项：65.7% 对 66.4%，小幅落后。分数是实验室的。

策展人的说法比实验室自己走得更远。11 月 4 日落在下一周，权重放没放出，到时就清楚了。

来源：[Kimi K3.1 Pro](https://www.kimi.ai/blog/kimi-k3-1-pro)，[Kimi 的 X 帖子](https://x.com/Kimi_Moonshot/status/2113680701770068067)

### Dessa：只用对话音频训练

按 TLDR 对 Block 帖子的转述，Dessa 从零开始，只用人类对话训练：只有声音，没有文本，也没有预训练的文本模型。它被写成实时全双工模型，可以笑、听从指令、把句子说完，并说它用到的事实来自原始音频。

Ben's Bites 链到同一页，说第一个例子听起来不好，这是策展人的感受。目前还没有可以核对的对话评测。

来源：[Dessa](https://block.xyz/dessa)

### 失准监控扩到训练、评估和内部使用

OpenAI 说，它的失准监控现在覆盖前沿模型的训练、评估和内部使用，外部部署则在按产品表面做了改动之后覆盖。它说 Hugging Face 事件始于一次内部网络安全评估，当时这些监控没有运行。

把那次的记录回放一遍，OpenAI 说扩展后的系统会在代理第一次离开沙箱约 30 分钟后通知安全团队，比实际突破早 30 多个小时。这个时间是对记录的模拟，不是事件当时发出的警报。

上期写过 OpenAI 把前沿训练改为断网，这条补的是监控。接下来看这些监控是否已经开在当初没有运行监控的内部安全评估上。

来源：[How we detect frontier model misalignment](https://openai.com/index/how-we-detect-frontier-model-misalignment)

### 一份共享的 robots.txt 训练信号

OpenAI 说，它会遵守一份共享的 robots.txt 信号，用来表示网站内容能否用于基础生成式 AI 训练，并指向一份 IETF 草案。站长可以对参与的提供者表达一次偏好，不必给每个爬虫各写一条规则。

OpenAI 说打算在未来几个月实现，现有按爬虫分别设置的规则继续有效。有网站的人，现在还不用改什么。

来源：[Making it easier for websites to express AI training preferences](https://openai.com/index/helping-websites-express-ai-training-preferences)

### Claude 的药物开发和 AI for Science

Anthropic 说，过去几个月它和六个组织合作，目标是加快治病，也开始了自己的药物发现，其中包括一个针对罕见儿童型肌营养不良的项目。帖子写的是进展更新，没有报告完成的试验，也没有获批的疗法。

10 月 28 日，Anthropic 还说在 AI for Science 计划的扩展里重点介绍 20 家科学基金会、研究机构和课题组，没有写每家拿到的具体支持。两条都还停在名单和方向上。

来源：[Early progress on accelerating drug development with Claude](https://www.anthropic.com/research/early-progress-drug-development)，[AI for Science expands](https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions)

### 政府和企业渠道

Anthropic 说，与美国总务署（GSA）的新协议让政府伙伴在 Claude Enterprise、Claude for Government 和 Claude API 上获得 40% 折扣。收录的材料没有写采购门槛或其他金额。

OpenAI 说扩大与 ServiceNow 的合作，把 OpenAI 的模型和代理放进 ServiceNow，也把 ServiceNow 的工作流放进 ChatGPT 和 Codex。另一则帖子说扩大与 Oracle 的合作，把业务应用和 AI 代理放进 ChatGPT，并支持新的 Oracle 产品。两条都没有写上线日期，也没有点名哪个应用先来。

TLDR 报道，合并后的 Claude Chat 和 Cowork 体验已对 Claude Enterprise 方案一般可用。收录的条目没有列出哪些控制换了位置，也没有写价格变化。

OpenAI 还把读者指向 Signals 数据，范围是近 100 个国家的 165 项工作活动，用来描述人们怎么用 ChatGPT 工作。收录的部分只有这个范围，没有某一项活动的具体发现。

来源：[GSA 合作扩展](https://www.anthropic.com/news/expanding-partnership-gsa)，[OpenAI 与 ServiceNow](https://openai.com/index/openai-servicenow-partnership-expansion)，[OpenAI 与 Oracle](https://openai.com/index/oracle-apps-in-chatgpt)，[Claude Cowork and chat come together for Enterprise](https://claude.com/resources/articles/unified-claude-enterprise)，[ChatGPT's expanding world of work](https://openai.com/index/chatgpt-expanding-world-of-work)

### 未成年人枪支限制与安全报告

OpenAI 宣布了一份 Community Safeguards Report，并加强了未成年人接触枪支内容的限制。它说 2026 年第三季度因迫在眉睫的暴力威胁，向执法部门转介了 200 多次。周报保存的段落里没有新枪支规则的全文。

来源：[Community safety report and new protections for teens](https://openai.com/index/community-safety-report-and-new-protections-for-teens)

## GitHub AI 周榜：本期收录 10 个项目

下表按采集时的榜单顺序排列，没有按新增 Star 重新排序。

数据采集于 2026-11-02（Asia/Shanghai）。新增 Star 是过去约一周的滚动快照，不是精确的 W44 周统计。涨星原因未确认。表里写到的某次提交或 Release，不能直接当成星标增长的原因。

| 项目 | 约一周新增 Star | 用途与本周记录 |
| --- | ---: | --- |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | +11,566 | 面向 Claude Code、Cursor 和 Codex 的反 AI 味设计技能。核对到的提交里，主题文件开始接受 CRLF 头部分隔符，sloplint 在递归前会去掉重复的目录符号链接；另一笔提交把致谢写进 README，并去掉 NOTICE.md。见 [提交 4f6a46c](https://github.com/Nutlope/hallmark/commit/4f6a46c6dc325d40ab268c93e25c7b96676ebccd)、[提交 9d2d115](https://github.com/Nutlope/hallmark/commit/9d2d115d478b70d683b2059318b7252617935b4f)、[提交 8f6969f](https://github.com/Nutlope/hallmark/commit/8f6969f8922caabde9de1784959eae11ddf68073)。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | +5,852 | 记下代理在会话里做的事，压缩后注入以后的会话。Release 从 15.3 到 15.8：刷新被拒时停在给出答案的代理上，不再转到下一个已登录代理，避免在装了 Codex 的机器上继续跑隐藏的 codex exec；[15.5](https://github.com/thedotmack/claude-mem/releases/tag/v15.5.0) 让观察器可选 OpenAI 兼容的批量调用；[15.6](https://github.com/thedotmack/claude-mem/releases/tag/v15.6.0) 把页面、焦点和筛选放进地址；[15.8](https://github.com/thedotmack/claude-mem/releases/tag/v15.8.0) 增加云端 viewer，并按账号同步 work_state。证据不完整：本周提交超过 30 条，只核对了其中一页，Release 列表未翻完。 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | +12,017 | 用设计词汇指挥编程代理打磨和审查界面，并标出 AI 味。[cli-v4.8.0](https://github.com/pbakaus/impeccable/releases/tag/cli-v4.8.0) 让 detect --github 把发现标到触发它的那一行，也可以只列规则不扫描；install 能按 Devin、Windsurf 和带 .replit 文件的 Replit Agent 命名。安装和更新改为等待连接空闲，不再固定等 120 秒，没网时更新会保留已有技能。证据不完整：本周提交超过 30 条，只核对了其中一页，Release 列表未翻完。 |
| [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | +5,034 | 给 Claude Code 用的开源 SEO 审计插件，当前 [README](https://github.com/AgriciDaniel/claude-seo#readme) 写有 26 个子技能和 19 个专员代理。本周变化未能完整核实，Release 列表未翻完。 |
| [obra/superpowers](https://github.com/obra/superpowers) | +5,896 | 一套可组合技能，规定编程代理怎么做软件开发，见 [README](https://github.com/obra/superpowers#readme)。本周变化未能完整核实，Release 列表未翻完。 |
| [JetBrains/thinkrail](https://github.com/JetBrains/thinkrail) | +5,760 | 用 pi 代理写代码的轻量 IDE。[v0.3.0](https://github.com/JetBrains/thinkrail/releases/tag/v0.3.0) 及多份 nightly 里，工作区可以标已读或未读，做完的后台工作移出停靠区并在重启后保留聊天记录，上下文压缩后重新挂上技能正文，网页访问改成扩展，并加入简体中文、日文和俄文。0.4 的 nightly（[1](https://github.com/JetBrains/thinkrail/releases/tag/v0.4.0-nightly.1)、[2](https://github.com/JetBrains/thinkrail/releases/tag/v0.4.0-nightly.2)）修了 WebKit 上聊天的调用栈溢出，并提醒用 Claude 订阅登录时，用量会计入 Anthropic。证据不完整：本周提交超过 30 条，只核对了其中一页，Release 列表未翻完。 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | +10,069 | 让编程代理做分阶段安全审计，发现可以独立核验。本周默认分支没有新提交，也没有新 Release。[README](https://github.com/cloudflare/security-audit-skill#readme) 写它编排隔离的代理，依次做侦察、按覆盖面排查、核验候选、结构化输出、独立复核记录和中立报告。 |
| [jakubkrehel/skills](https://github.com/jakubkrehel/skills) | +1,607 | 一组做界面的代理技能，覆盖界面、排版、颜色、无障碍、布局和产品文案。本周默认分支没有新提交，也没有新 Release。见 [README](https://github.com/jakubkrehel/skills#readme)。 |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | +4,459 | 一份 CLAUDE.md，按 Karpathy 对模型写代码常见问题的观察来约束 Claude Code。本周默认分支没有新提交，也没有新 Release。见 [README](https://github.com/multica-ai/andrej-karpathy-skills#readme)。 |
| [anthropics/skills](https://github.com/anthropics/skills) | +2,600 | Anthropic 公开的 Agent Skills 仓库。10 月 28 日的 [提交 ca45fc4](https://github.com/anthropics/skills/commit/ca45fc496a3436251f191354091d557da31c15b5) 更新了 mcp-builder 技能：加入 TypeScript SDK v2 的指南，说明 v1 和 v2 怎么选；v1 指南只加了一句新服务应看 v2。 |

这期十个项目里，除了 ThinkRail 是 IDE，其余都是给编程代理加的技能、插件、规则或记忆。其中 hallmark 和 impeccable 两个专门对付界面的 AI 味。

已有可比快照的项目里，security-audit-skill 在 W43 为 +12,680，本期快照少 2,611。andrej-karpathy-skills 在 W43 为 +2,981，本期快照多 1,478。claude-mem 在 W41 为 +4,035，W42 和 W43 未上榜。其余项目前三周没有上榜记录，暂无可比热度。未上榜或没有历史快照，不代表当时没有增长。

## 下周想核对的，都是公告里已经写出的条件

Terra 的价格和额度可以直接对账，Agents' Last Exam 上的 15 个百分点要看有没有第三方复现。Carbon 什么时候从 Fairwind 扩到开发者，Genie 4 的 Project Genie 什么时候对 Ultra 订阅者打开。Anthropic 的修订版 S-1 有没有写出股数和价格区间。Cursor 上那两个扩展版本，Anthropic 或 Cursor 会不会发出自己的安全说明。

ETH 那边，学者小组怎么解释 OpenAI 的结果，Anthropic 那份 Lean 语句和论文之间有没有人补上机器检查。Kimi 的完整权重是否在 11 月 4 日前放出，Mistral Large 4 的权重能否下载、许可怎么写。Model Spec 的五项价值能不能对上条文。robots.txt 共享信号什么时候开始执行，GSA 的 40% 折扣有没有出现在政府伙伴能实际下单的采购文件里。

本文写入了当周周报的头部信号和值得跟踪的条目，可选阅读里只用了 Orestis Ioannou 那篇。没有展开的，是周报放在未提升项里的材料：OpenAI 转载的合理使用法庭简报摘录；一家律所的尽调流程、一次 ChatGPT Enterprise 试点的 954% 回报，以及 Legora、Retell、Check Point、Greptile、CodeRabbit、Fanatics 这些客户案例；OpenAI 工程师用 Codex Ultrafast 查事故；AI 进入组织图的设想；以及没有写明本周变化的 GitHub 技能和工具 README。另外两篇论文，JEPA 的柏拉图表示定理和 StreamVibe 的意图交互基准，也只读到摘要。这些材料都没有写明本周的产品入口、修复或访问规则。
