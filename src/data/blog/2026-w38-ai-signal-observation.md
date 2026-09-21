---
author: BigBoBro
title: "2026-W38 AI 信号观察：AI 走进工作流程，成本与异常也要有记录"
pubDatetime: 2026-09-21T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "2026-W38：法律 AI 接入律所流程，Claude 合并聊天与办公入口，研究尝试用回放降低探索成本。工具开始承担更多工作之后，完整成本、失败记录和评估条件也需要一起看。"
---

这周最想放在一起看的，是几项接近实际工作过程的变化：法律 AI 开始接入律所流程，Claude 把聊天与办公放到同一个入口，研究者尝试利用过去的探索记录改进下一轮试错。

这些变化能不能省事，要等实际使用来回答。不过，观察的问题已经具体了不少：工具接上了哪些数据，减少了哪些重复步骤，一项任务花了多少资源，出错之后又留下了什么记录。

时间范围是 2026-W38：2026-09-14 到 2026-09-20。本文依据当周周报及其收录摘要整理，未逐项重新核验原始全文。同一发布被多个渠道收录，说明关注在扩散，不等于多份独立验证；产品公告、作者实验结果和未来合作承诺，也分别保留各自的证据边界。

## 1. 法律 AI 开始接入律所的具体流程

OpenAI 的 Astra for Law 公告摘要介绍了定制律所流程、连接法律数据源，以及面向保密工作的控制措施。同周，OpenAI 还介绍 Cooley 用 ChatGPT Work 构建 GO Public，辅助 IPO 工作中的问题识别。

比起泛泛地说“AI 能回答法律问题”，这两份材料把使用位置说得更具体了：需要接什么资料，在哪个环节帮助识别问题，以及怎样嵌入原来的工作方式。

这也是我觉得值得继续看的地方。专业工具的采用，往往要处理很多模型回答之外的事。资料能否找到、权限是否合适、输出怎样交给下一位处理者，都会影响它最后能不能被用起来。

但目前两则都是供应商材料。发布中提到保密控制，不代表保密效果已经经过独立检验；展示一个业务案例，也不能直接推出法律准确性和效率已经提升。下一步更想看真实使用中的复核工作：哪些问题被提前发现了，哪些被漏掉了，人还需要补多少检查。

来源：[Astra for Law](https://openai.com/index/astra-for-law)，[Cooley 的 GO Public 案例](https://openai.com/index/cooley-gopublic)

## 2. Claude 把聊天与办公放到同一个入口

本周应用侧和阅读侧材料都指向同一公告：Cowork 与聊天合并，已连接的应用、技能和上下文进入普通对话。

TLDR 的当周摘要还提到，Docs 与 Slides 支持直接编辑、展示和导出，Pro、Max 用户将在随后数周逐步获得更新，Team、Free 随后跟进。这里说的是逐步上线，不能理解为所有账号已经切换。

统一入口可能带来的好处很直观。讨论内容、调用资料、生成文档和修改结果，如果能在一次连续对话里完成，就有机会减少切换工具和反复交代背景的步骤。

但入口合并之后，工作能否连续完成仍需要实际验证。我更想看一份文档从讨论到修改再到导出的完整过程：已有资料有没有被正确引用，中途改要求后能否接着做，最后交付的文件是否仍需大量手工整理。这些会比菜单少了几项更能说明变化。

来源：[Cowork 与 Claude Chat 合并公告](https://claude.com/blog/cowork-is-now-claude)

## 3. Dream-RSI 尝试用过去的探索记录，改进下一轮试错

Dream-RSI 将积累的发现树构造成回放模拟器，在离线环境里比较探索策略，再把改进后的策略部署回在线探索。

可以把这里的问题理解为：已经花成本走过的探索路径，能不能继续用于比较下一步该怎么找，而不是每次都重新进行完整的在线试错？

作者报告，在算法工程、数学优化和 GPU kernel 工程中，得到有竞争力或更好的发现质量，并在若干设置下降低成本。本期材料没有独立复现证据，因此这些仍是作者在所述实验范围内的结果。

这个方向值得跟踪，是因为它把“探索策略有没有改好”变成了可比较的问题。不过，回放环境里的优势能不能带回真实探索，仍然是关键。后续除了看最终发现质量，也要看构建回放环境本身的成本，以及换一类任务后是否还有收益。

来源：[Dream-RSI 论文条目与摘要](https://huggingface.co/papers/2609.14858)

## 4. 模型异常开始有更明确的披露安排

OpenAI 公布了模型失配的追踪、调查和披露框架，并附上六份有关意外或令人担忧行为的报告。本期收录摘要没有展开这六起事件的详细结论，因此这里也不据此判断某类风险已经被解决。

我更关心这种披露能否持续。模型承担的工作越多，外界越需要知道异常发生在什么条件下、怎样被发现，以及采取措施后有没有再次出现。

报告数量本身不能证明治理有效，但可追踪的记录至少让后续比较有了依据。如果披露只停在“发现了问题”，没有可理解的调查过程和后续结果，读者仍很难判断实际变化。

同周还有两项相邻的评估消息。Anthropic 宣布与 Accenture 合作进行前沿 AI 独立评估，公告称双方均预计未来五年投入至少十亿美元建设能力；Transluce 则提出通过特权访问研究多 agent 协作、定向说服、评测意识和隐藏推理等风险的方案。

合作投入和访问安排都是开展评估的条件。目前更适合追踪具体项目、第三方能访问到什么，以及最终公开了哪些结果，不能把承诺本身当成已完成的独立评估。

来源：[模型失配披露框架](https://openai.com/index/model-misalignment-reporting-framework)，[Anthropic 与 Accenture 的评估合作](https://www.anthropic.com/news/accenture-embedded-evaluation)，[Transluce 的嵌入式评估方案](https://transluce.org/embedded-evaluations)

## 值得继续跟踪

### 执行框架的成本，要与模型能力分开核算

SoL-Pi 的研究摘要报告，在 51 项 EdgeBench 任务上取得与 Pi 相近的性能，同时 token 流量下降 44.7%–49.0%，API 成本约下降三分之一。这一结论限于该实验，不能直接套到其他任务和框架上。

阅读侧的 HarnessTax 摘要覆盖 21 组模型与框架组合，指出成本差异可能大于成功率差异。同周应用侧还收录了 Claude Code 在相同任务中开关插件和技能进行对照的能力。这三项材料涉及不同工作，只能视为围绕同一问题的观察。

对日常使用来说，这个问题很实际：多加一层工具、技能或控制流程，究竟帮了多少忙？比较时需要固定任务和模型，把完成质量、重试和成本一起记下来。少花 token 有价值，但前提是没有把工作留给人来补。

来源：[SoL-Pi 论文条目与摘要](https://huggingface.co/papers/2609.20519)，[HarnessTax](https://arena.ai/blog/coding-agents-harness-tax)，[Claude Code 插件效果对照介绍](https://x.com/ClaudeDevs/status/2098500999656923145)

### Jev：让软件调用更有针对性的决策能力

Jev 的发布材料将其定位为面向软件的快速结构化判断，应用侧举出 API 选择、请求路由等用途，阅读侧称已开放早期访问。

用途很具体，也因此比较容易设计对照：面对同一组路由或选择任务，它与通用模型的准确率、延迟和完整成本分别怎样？本期摘录里的速度、成本以及“不幻觉”主张没有独立对照，暂时不能作为已经证实的优势。

来源：[System One Models 与 Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)

### 广告点击之后，可能直接进入品牌 agent 对话

OpenAI 的公告摘要介绍了 Sponsored Agents、营销工具，以及 HubSpot、Shopify 集成。阅读侧转述的报道则称，部分客户正在试用点击后打开品牌 agent 对话的 ChatGPT 广告。

这意味着广告交互可能从跳转网页延伸到持续对话。接下来需要看的也很具体：试用覆盖哪些客户，对话数据怎样处理，以及是否有可核验的转化结果。本期材料没有给出这些细节，尚不足以判断广告效果或隐私后果。

来源：[广告产品公告](https://openai.com/index/reimagining-advertising-with-ai)，[点击进入品牌对话的广告报道](https://digiday.com/marketing/openais-next-chatgpt-ad-format-click-to-chat-not-to-site)

### DeepSeek 的两类缓存压缩，不能合成一个降本倍率

DeepSeek-V4.1-Flash 的研究摘要介绍了最长一百万 token 上下文。作者称，CSA2 跨层复用与 FP4 将全局 HBM KV 存储降至每 token 890 字节，约为 V4-Flash 的四分之一。

另一项部署优化 SWA Bounded Replay 则将持久 SSD 或主存 KV 存储降至约八分之一。这是不同存储层的指标，不能把两个比例相乘，写成整个系统的降本倍率。

后续值得一起看的是各层实际占用、长上下文质量和吞吐。缓存占得少了之后，是否增加重算或影响处理速度，需要完整部署结果来回答。

来源：[DeepSeek-V4.1-Flash 论文条目与摘要](https://huggingface.co/papers/2609.19969)

## 两个可以继续读，但暂时不下结论的话题

**前沿 AI 是否应当减速。** 本周材料收录了 Dario 的倡议，也收录了对 pacing 含义的分歧，以及 Aidan Gomez 对少数主导厂商制定全球 AI 规则的反对意见。讨论已经涉及独立评估、事件披露和规则制定权，但这些摘要不支持“行业已达成减速协议”的说法。

来源：[We Must Pace the Frontier](https://darioamodei.com/post/we-must-pace-the-frontier)，[What Does Pacing Mean?](https://tomtunguz.com/what-does-the-pause-mean)，[Who Gets to Define the Rules for AI?](https://cohere.com/blog/who-gets-to-define-the-rules-for-ai)

**AGENTS.md 的跨工具兼容。** 本期 Hacker News 条目标题称，Claude Code 会在没有 CLAUDE.md 时读取 AGENTS.md，采集时已有 731 分、275 条评论。不过候选材料没有变更日志正文，无法据此确定完整加载规则。对需要维护多工具项目指令的人来说，这条值得回到具体版本的官方变更日志继续核对。

来源：[Claude Code 变更日志](https://code.claude.com/docs/en/changelog)

还有几类高关注材料，这次没有展开：只有标题的 Qwen Image 2.1 和协作写作文章不足以提炼功能或方法；ChatGPT 广告与站外行为的指控缺少正文证据，不能与广告产品公告混为一谈；没有成功获取正文的生命科学和生物分子材料，也不能据此判断其价值。

## GitHub AI 本周 Top 10

以下保留周报收录顺序。采集时间为 2026-09-21（Asia/Shanghai），新增 Star 是过去约一周的滚动快照，不是精确的 W38 周统计，也不代表本周功能变化导致了涨星。

| 项目 | 约一周新增 Star | 用途与本周记录 |
| --- | ---: | --- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | +15,504 | 代码审查工具。[v1.12.7](https://github.com/alibaba/open-code-review/releases/tag/v1.12.7) 增加审查会话导出为自包含 HTML 的能力。 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | +2,342 | 终端编码助手。[v2.1.278](https://github.com/anthropics/claude-code/releases/tag/v2.1.278) 调整 API、企业及所列云渠道的自动模式，默认采用不收分类开销的服务端分类器，并提示计费回退。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | +6,453 | 编码 agent 运行框架。[本周修复](https://github.com/affaan-m/ECC/commit/b2279eb1d7504eaf363c298eaa9b8210ebb29f77)让重新安装或修复 ECC 时保留用户已编辑的 Codex 配置。 |
| [Tencent/WeKnora](https://github.com/Tencent/WeKnora) | +5,242 | 结合 RAG、推理 agent 与 Wiki 的知识库平台。[本周重构](https://github.com/Tencent/WeKnora/commit/c40a9dd1940f85d85a59787bd532eb0f290cb176)将 `extra_config.api` 改为保留的协议选择器，并拒绝非法取值。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | +3,986 | 可复用工程技能。[0.6.10](https://github.com/addyosmani/agent-skills/releases/tag/0.6.10) 不再在 SessionStart 自动注入 `using-agent-skills` 元技能，改由宿主按描述发现和激活。 |
| [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) | +1,298 | Claude Cowork 办公插件集合，本周[加入 Wingspan 插件](https://github.com/anthropics/knowledge-work-plugins/commit/31bb294f3e975a4e1234b5100d7c5540badead76)。 |
| [mksglu/context-mode](https://github.com/mksglu/context-mode) | +1,242 | 上下文管理工具。[本周已采集提交](https://github.com/mksglu/context-mode/commit/3053ca52af670519da368c4ef7cffa830f8f9243)更新安装统计，没有说明新增产品能力。 |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | +822 | Git worktree 管理工具。[v0.78.0](https://github.com/max-sixty/worktrunk/releases/tag/v0.78.0) 更名 hook 上下文字段；配置模板自动迁移，读取 JSON 的脚本及 `--execute`、`--var` 用法需更新。 |
| [blader/humanizer](https://github.com/blader/humanizer) | +3,045 | 文本改写技能。本周默认分支没有新提交，也没有新 Release；[README](https://github.com/blader/humanizer#readme) 介绍其保留原意、减少生硬表达的用途。 |
| [stablyai/orca](https://github.com/stablyai/orca) | +5,841 | 多编码 agent 开发环境。[v1.4.205](https://github.com/stablyai/orca/releases/tag/v1.4.205) 为原生聊天加入消息导航，可跳转到用户提示并更准确地恢复阅读位置。 |

这张表是选读入口，不是完整的版本审计。原周报中，除 humanizer 外，其余九项均标注证据不完整：部分项目的周内提交只核对了一页，部分 Release 列表没有翻完。因此表中的“本周记录”不能理解为该项目一周内的全部变化。

已有可比快照的项目里，WeKnora 的约一周新增 Star 从 W37 的 1,302 增至 5,242，worktrunk 从 588 增至 822；ECC、context-mode 和 humanizer 则低于上周快照。没有上榜或没有历史快照不等于零增长，这些数字也不能用来解释具体的涨星原因。

## 接下来想看什么

本周几项发布都把 AI 往具体工作里推进了一步。对我来说，接下来最有用的材料会是一份完整的使用记录：接入之后省了哪些步骤，检查与返工花了多少时间，任务失败时又留下了什么证据。

统一入口、专业流程和更省资源的执行策略都有吸引力。等它们走过几轮真实任务，再把交付结果、成本和异常放在一起看，才更容易判断哪些值得留在自己的工作方式里。
