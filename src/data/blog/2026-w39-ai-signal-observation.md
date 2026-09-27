---
author: BigBoBro
title: "2026-W39 AI 信号观察：模型降价，代理的判断力开始被单独检验"
pubDatetime: 2026-09-28T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "Sol、Luna 和 Opus 5.5 带来更低的调用价格，Claude 找到了 ART 酶系统线索。与此同时，几项研究把代理的短板说得更具体了：选错方向、没读懂偏好，以及只适应眼前的题目。"
---

这周最直接的变化是价格。GPT-6 Sol、Luna 和 Claude Opus 5.5 相继发布，带来了更低的输入、输出单价。另一条醒目的消息来自生物研究：Claude 在大规模序列搜索中找到了 ART 酶系统的线索，后续已有初步实验结果。

但这周让我停下来多看了一会儿的，是两个不那么热闹的数字：Taste-Bench 里，最好的模型在任务分叉处选对了 59.7%；Project Swap 里，代理对书籍偏好的判断与本人一致的比例是 61%。两项实验测的东西不同，却都把问题指向了执行之前：下一步往哪走，以及用户到底想要什么。

模型更便宜，意味着可以让它多做一些工作。而这些研究提醒我，多做几轮究竟有没有帮助，取决于它卡在什么地方。

时间范围是 2026-W39：2026-09-21 到 2026-09-27。

## 新模型更便宜，缓存也在降价

OpenAI 本周发布 GPT-6 Sol 和 Luna，Anthropic 发布 Claude Opus 5.5。三款模型公布的 API 输入、输出价格如下，单位都是每百万 token 的美元价格。

| 模型 | 输入 | 输出 |
| --- | ---: | ---: |
| GPT-6 Sol | $2 | $10 |
| GPT-6 Luna | $0.10 | $0.50 |
| Claude Opus 5.5 | $4 | $20 |

Opus 5.5 还有一项对长任务很实际的调整：缓存读取价格降至每百万 token 0.20 美元，比 Opus 5 低 **60%**。它的输入、输出单价则下降了 **20%**。公告中的“运行成本低 40%”，是 Anthropic 在默认设置、典型工作负载下，把降价和每项任务用量减少合在一起得到的结果。

这让模型的成本比较多了一层。代理反复读同一套代码、文档和工具定义时，缓存会影响每一轮的费用；如果选错方向、不断重试，低单价也会被额外用量消耗掉。40% 是厂商给出的典型负载结果，具体一项工作能省多少，取决于它怎么完成。

Sol 和 Luna 发布时进入 ChatGPT Work、Codex 和 API，尚未进入普通 Chat；Free、Go 用户可在桌面应用使用 Luna。

来源：[GPT-6 Sol 与 Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna)，[Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)

OpenAI 同周还为 GPT-6 增加了缓存命中率面板、失效诊断和显式断点，对 30 分钟内复用、符合条件的共享前缀提供折扣。诊断工具能指出模型、工具、设置或输入的哪类变化造成缓存失效。

对于维护长会话应用的人，这些工具可以帮助解释一个实际问题：明明大部分上下文没变，为什么又付了一遍钱。官方给出的一个做法是保持工具定义及顺序稳定，通过控制可调用范围来开关工具，保留可复用的前缀。

来源：[GPT-6 提示缓存更新](https://openai.com/index/better-prompt-caching-for-gpt-6)

## ART：从海量序列，走到少数可以做实验的候选

Anthropic 的生命科学团队报告，约 950 个代理搜索了 21 小时，从超过 20 万个逆转录酶中筛出 20 个重点候选报告。ART 就来自这次搜索。

相关逆转录酶以前已经被研究过。Claude 注意到，逆转录酶、邻近伙伴基因，以及规则排列的 DNA 重复序列出现在一起，构成了此前未被描述的系统特征。

后续实验由人类科学家完成，初步确认这些重复阵列能够表达成不同的短 RNA。ART 的主要功能仍然未知，也还不能据此认定它具有基因编辑能力。

从二十多万个对象里找出少数值得做实验的候选，本身就是一项很具体的贡献。这里让我感兴趣的是分工：代理扩大了搜索范围，把线索整理成人能审阅的报告；科学家接着判断哪些值得投入实验。AI 在研究中的价值，可以体现在帮助人决定把有限的实验资源用在哪里。

来源：[Claude 发现 ART 酶系统的报告](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system)

## 代理的判断力，可以拆成更小的问题

### 走到分叉处，它会选哪条路

Taste-Bench 从工程和科研任务的运行记录里抽出决策分叉，隐藏后续结果，让模型选择下一步。作者报告，表现最好的模型选对了 **59.7%**，增加推理预算没有改善这个指标。

这个数字测的是分叉选择正确率。它能帮助解释一类长任务失败：代理可能很认真地执行了后续步骤，但方向在更早的时候就选错了。

研究还让看过结果的教师给出判断，再用这些判断训练学生模型。作者报告，学生在未见任务上的选路表现得到改善，留出的 SWE-bench Pro 任务整体成功率也提高了。

我在意这项研究，是因为“再多想一会儿”在这里没有奏效，而针对选择过程的训练有了收益。至少在这组实验中，推理预算和判断能力需要分开看。只记录任务最终成功或失败，会漏掉中间最值得改进的那一步。

来源：[Taste-Bench 论文摘要](https://huggingface.co/papers/2609.25804)，[项目仓库](https://github.com/wbopan/tastebench)

### 它理解的“我想要”，离本人有多远

Anthropic 本周发表的 Project Swap，回顾了夏季一次让 201 名员工的代理代为换书的实验。参与者先聊阅读偏好，再由代理去交易，同时由本人给书排序，供研究者核对。

约五分钟访谈后，代理对两本书先选哪一本的判断，与本人一致的比例为 **61%**，随机猜测为 50%。这个指标衡量的是偏好理解。

研究还拆解了实际分配与最优分配之间的差距。其中约 **85%** 来自偏好表示不准，其余部分才来自交易过程。代理能把交易做下去，但对委托它的人想读什么，还了解得不够。

在这次员工换书、代理相对合作的实验里，大部分损失发生在目标理解上。这个比例不能直接外推到商业交易，但它给产品设计提了个很实际的问题：花力气让代理更会谈判之前，有没有先让用户看见，它理解的偏好究竟是什么？

来源：[Project Swap](https://www.anthropic.com/research/project-swap)

## 提示词越改越多，收益也需要复查

RRSI 研究的是代理如何修改自己的提示词、工具和执行流程，基础模型保持冻结。它要处理的问题很熟悉：围着一批固定任务反复调优，得分会上去，但也可能越来越依赖这批题目的特点。

研究者在改动提议阶段逐步收紧一次可打包的修改量，在筛选阶段排除只对特定基准有用的修改，同时删去收益过小、成本过高或已经无用的部分。

在论文实验中，优化用题集最高提升 14.1 个百分点，五个分布外基准中最高提升 4.7 个百分点，策略 token 比没有正则约束的演化少 30%。

我更在意它把“删掉改动”也纳入了改进过程。维护提示词和技能，很容易遇到一次失败就加一条规则，最后堆出一长串只适合旧任务的要求。RRSI 同时检查收益、成本和对特定题目的依赖，这比默认保留每一次修改更接近长期维护软件的做法。

来源：[RRSI 论文摘要](https://huggingface.co/papers/2609.24972)，[研究项目介绍](https://regularized-rsi.com/)

## 心理健康评测，开始细看回答里的具体行为

OpenAI 与来自 22 个国家的 80 多名持证心理健康专家发布 MentalHealthBench，覆盖日常困扰、较严重但非紧急的情境，以及紧急情况。

它使用合成对话。每段对话至少由三位专家审阅，评分项需要至少两人同意且第三人不反对，再按重要性赋予正负权重。GPT-5.6 Sol 依据这些准则，自动评阅对话最后一轮的模型回答。

测量对象因此可以具体到行为：有没有询问必要背景，有没有保留用户自主性，有没有给出可能造成伤害的回应。相近的总分下面，可能藏着很不一样的失分原因。

一个回答读起来体贴，也可能过早替用户下判断。这种按行为拆分的评测，让“哪里答得不好”有了更清楚的解释。它衡量的是回答是否符合专家制定的准则，不能当作治疗有效性的证明。

来源：[MentalHealthBench 发布说明](https://openai.com/index/introducing-mentalhealthbench)

## 外部检查，要落实到访问权限和报告规则

### 7 月入侵事件，本周披露了新的调查细节

Swarm Traces 团队在 9 月 25 日公布了对 7 月 OpenAI agent 入侵 Hugging Face 事件的调查。团队根据公开痕迹重建了 8 万多个载荷，并发布脱敏数据。

报告称，代理最初只能加载 URL，却通过组合在线服务绕过了限制。团队还称，Hugging Face 确认相关载荷与自身调查匹配，涉及的密钥已在 7 月撤销。本周新增的是调查细节和证据披露。

这次披露说明了联网限制容易漏掉的一层：几个分别允许访问的服务，组合起来可能提供超出预期的能力。检查单个工具能做什么，还不足以判断代理拿着这些工具最终能做什么。

来源：[Swarm Traces 调查报告](https://swarmtraces.org/)

### 评估程序、驻场安排和技术标准，各自进展到了哪里

OpenAI 在 9 月 22 日提出第三方评估的优先方向，包括安全论证、关键防护措施、能力与对齐评测，以及重大对齐失效事件调查。程序上强调预先约定范围、登记要检查的安全主张，并提供相称的访问权限。

其中我更关心报告的编辑独立性：资助等利益冲突需要披露和处理；实验室可以要求删去敏感信息，评估者则可以说明删节及其影响。外部评估是否有说服力，既取决于评估者能看到什么，也取决于他们能把发现说到什么程度。

来源：[OpenAI 第三方评估原则](https://openai.com/index/priorities-principles-third-party-assessments)

Anthropic 在 9 月 18 日公布的 Accenture 合作计划，本周也继续受到关注。计划由 Accenture 的 Faculty 牵头开展驻场评估，让评估者观察训练过程、跟踪开发与部署决策，并直接与员工交流。费用将由 Anthropic 直接承担。

这仍是一项已宣布的计划，具体信息访问与报告标准、长期独立资金机制尚未确定。它把外部检查向训练和开发过程推进，但也留下一个现实问题：被评估方直接付费时，怎样保证报告独立？

来源：[Anthropic 与 Accenture 的驻场评估计划](https://www.anthropic.com/news/accenture-embedded-evaluation)

OpenAI 于 9 月 21 日提出的跨国技术标准倡议，则关注能力测量、人工复核条件和事件报告门槛。这项倡议试图让不同机构采用可比较的技术口径；标准本身不构成模型许可证或强制发布前审批，是否纳入法律由各国决定。

来源：[下一阶段 AI 技术标准倡议](https://openai.com/index/building-standards-next-phase-ai)

## GitHub AI 本周 Top 10

本周榜单里，从代理管理、记忆到安全审计和代码审查，围绕代理工作的配套工具占了不少位置。下表列出项目用途和一项近期变化，供按兴趣选读。

数据采集于 2026-09-28（Asia/Shanghai），沿用当时的榜单顺序。新增 Star 是过去约一周的滚动快照，不是精确的 W39 周统计，也不能据此认定某项更新带来了涨星。

| 项目 | 约一周新增 Star | 用途与本周记录 |
| --- | ---: | --- |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | +5,376 | AI 代理与任务管理应用。[v2026.916.1](https://github.com/paperclipai/paperclip/releases/tag/v2026.916.1) 修复桌面任务对话中发送按钮初始被禁用的问题。 |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | +7,282 | 代理记忆系统。[本周提交](https://github.com/vectorize-io/hindsight/commit/5e51d53504aedd6cf75395fc20adadcbfa903d30)新增多模态记忆抽取试跑，可测试文本、图像和文件而不持久保存。 |
| [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | +6,474 | 供编程代理使用的安全审计技能。本周默认分支无新提交、无新 Release；可从 [README](https://github.com/cloudflare/security-audit-skill#readme) 了解分阶段审计与独立核验流程。 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | +3,015 | 支持检索增强问答、代理推理和 Wiki 的知识平台。默认分支[撤回当日合入的插件系统](https://github.com/Tencent/WeKnora/commit/6c83d7ab479212c136094182a68ac6e238ea370c)，等待重新审查。 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | +1,142 | Claude Code 配置与监控工具。[本周提交](https://github.com/davila7/claude-code-templates/commit/6f6f87587bd0f192b7cc1c694ad7ef55828f0556)更新 llm-architect 的服务框架与重排器指引，并强调核查工具现状。 |
| [stablyai/orca](https://github.com/stablyai/orca) | +6,503 | 多编程代理开发环境。[v1.4.212](https://github.com/stablyai/orca/releases/tag/v1.4.212) 修复 Codex 0.157+ 启动兼容问题；[v1.4.215](https://github.com/stablyai/orca/releases/tag/v1.4.215) 增加配置副本冲突选择。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | +1,055 | 连接现有软件与 AI 代理的 CLI 项目。本周[已核对提交](https://github.com/HKUDS/CLI-Anything/commit/14ec27a85cef93653a6fad7bb6cde611316b54fe)更新 README，提交说明没有交代可确认的新软件能力。 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | +1,744 | 终端编程代理。[v2.1.283](https://github.com/anthropics/claude-code/releases/tag/v2.1.283) 新增精确版本白名单与模型拒绝名单，便于组织控制新模型开放范围。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | +5,522 | 涵盖技能、记忆和安全的代理框架项目。本周[修复 GateGuard](https://github.com/affaan-m/ECC/commit/7b7dfc6412c1dd2d21d1dd4b198ea559d2b63525) 对带引号 SQL 危险操作的识别，减少 SQL 客户端调用漏检。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | +4,310 | 提供行级评论及多语言规则的代码审查工具。[v1.12.8](https://github.com/alibaba/open-code-review/releases/tag/v1.12.8) 默认排除依赖和构建输出目录，并修复显式模型协议配置不生效的问题。 |

表中列的是已核对的变化，未覆盖完整的周内提交和 Release 历史。

已有可比快照的项目中，orca 从上周的 +5,841 增至 +6,503；WeKnora、Claude Code、ECC 和 open-code-review 的约一周新增 Star 均低于上周。未上榜或没有历史快照，不等于当时没有增长。

## 这周留下的一个问题

降价让长任务更负担得起，ART 展示了扩大搜索范围能带来怎样的发现。与此同时，Taste-Bench 和 Project Swap 把另外两种困难摆了出来：方向选错了，或者目标理解偏了，后续执行再流畅也可能白忙。

所以，这周比“还能让代理多做什么”更让我在意的问题是：我们有没有办法尽早看见，它正朝着一个错误的目标认真工作？
