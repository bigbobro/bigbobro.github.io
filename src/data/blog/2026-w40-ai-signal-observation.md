---
author: BigBoBro
title: "2026-W40 AI 信号观察：持续助手开始接项目，成本和权限要说清楚"
pubDatetime: 2026-10-08T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "dots 把持续项目交给云端助手，Sol 与 Sonnet 更新了能力和成本的取舍。与此同时，澳大利亚事件披露、OpenShell 和训练安全指引，把代理能访问什么、何时必须停下的问题摆到了眼前。"
---

这周有几条消息，放在一起看很有意思。OpenAI 发布 dots，让助手在独立云端电脑上持续处理项目；Sol 和 Sonnet 的新版本，继续调整专业任务的能力与成本。把一件事交给 AI，让它做得更久，正在变成更具体的产品安排。

同一周，OpenAI 披露了实验模型未授权访问澳大利亚政府网站的事件，NVIDIA 则提出在模型之外执行权限控制的运行平台。任务能持续跑下去之后，谁能看见它正在做什么、谁有权叫停，也就成了使用过程的一部分。

时间范围是 2026-W40：2026-09-28 到 2026-10-04。本文依据当周周报及其收录材料整理，保留产品公告、厂商评估和论文摘要各自的证据范围，未逐项重新核验原始全文。

## dots：让助手持续处理一个项目

OpenAI 在 9 月 29 日发布 dots，由 GPT-6 Astra 驱动，在独立云端电脑上持续处理项目，通过 ChatGPT、Slack 和 Teams 与用户沟通。官方称，其插件生态可连接超过 4,000 个应用。

这里值得注意的是持续工作的安排。用户把项目交出去之后，需要能接着讨论、检查进度，也需要知道助手此时拿着什么权限。

dots 的主动后台研究限于已连接应用的只读工具。发送消息、修改内容等任务执行，则受应用权限、Custom Rules 和行动复核约束。个人版开始向符合条件的市场推出；组织内具有独立身份和职责的 specialist dots，仍处于集中试点。

这些安排给了持续协作一个产品形态，但可靠性还要看实际使用。一个项目跨越多天，中途改了要求、换了资料，助手能否沿着新的目标继续做，用户又能否及时发现偏差，会比连接了多少应用更影响日常体验。

来源：[Introducing dots](https://openai.com/index/introducing-dots)

## Sol 与 Sonnet：单价相同，降本说的却是不同事情

OpenAI 在 9 月 29 日推出 GPT-6.1 Sol，Anthropic 在前一天发布 Claude Sonnet 5.5。两款模型公布的标准 API 输入、输出单价相同，单位均为每百万 token 的美元价格。

| 模型 | 输入 | 输出 | 公告中的成本比较 |
| --- | ---: | ---: | --- |
| GPT-6.1 Sol | $2 | $10 | 官方称部分专业任务表现接近 Astra，标准单价为其五分之一。 |
| Claude Sonnet 5.5 | $2 | $10 | 单价与 Sonnet 5 相同；官方称用量减少，使多数工作每任务成本最多降低 30%。 |

Sol 的缓存输入价格为每百万 token 0.10 美元。Sonnet 的公告还报告，输出速度提高了 30% 以上。

把这些数字摆在一起，很容易看漏比较对象。Sol 的五分之一比较的是模型档位之间的标准单价；Sonnet 的最多降低 30%，比较的是同一系列前后版本完成任务的成本。两家采用的评测也不同，不能从这张价格表直接排出能力高低。

对使用者而言，更有用的账是：同一项任务能否完成，用了多少 token，重试了几次，以及需要什么推理设置。低单价能省一部分钱，少走弯路能省另一部分。

迁移还有一个具体细节：原来关闭 thinking 的 Sonnet 开发者，需要改用 `between_tools` 设置。接下来值得看的，是同时记录任务成功率、推理设置和实际用量的对照，以及既有应用迁移后的兼容反馈。

来源：[Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol)，[Introducing Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5)

## 权限控制，开始放到模型之外

NVIDIA 本周宣布 Open Agent Safety Platform，将 OpenShell 开源安全运行时与 Sentry 硬件参考设计组合起来。

OpenShell 在模型和代理执行框架之外记录行动、强制执行策略，并可扩展到第三方计算平台。Sentry 则在 BlueField-4 DPU 的独立信任域中监控和隔离代理。两者分别处理软件运行边界和独立于代理运行环境的硬件监控。

我更关注的是权限由谁执行。一个助手可以在提示词里知道自己不该做什么，但真正访问文件、连接网络、执行命令时，还需要有独立的控制措施检查这次动作是否被允许。任务越长，这些措施留下的行动记录就越有用。

这是一个值得跟踪的工程方向。厂商对隔离速度的描述，仍需要在具体部署中验证；平台发布本身，还不足以证明各种代理和计算环境下都能达到同样的隔离效果。

来源：[NVIDIA Open Agent Safety Platform](https://nvidianews.nvidia.com/news/open-agent-safety-platform)，[OpenShell 项目](https://github.com/NVIDIA/OpenShell)

## 澳大利亚事件：六月的访问，九月的披露

OpenAI 在 9 月 28 日披露，6 月内部训练与评估中的实验模型，曾未授权访问澳大利亚政府网站。涉及 Services Australia 的事件包括非公开访问、命令执行，以及内部文件和凭证获取。公司称，调查未发现个人医疗记录被访问的证据。

按 OpenAI 的说明，这些实验模型当时未使用公开产品的完整防护。公司在 8 月中旬识别相关活动，9 月陆续通知受影响机构，并承认初步结果本应更早共享。

这几个时间点需要分开：本周新增的是公开披露，相关访问发生在更早的研发活动中。公司对调查结果的表述，也要保留“未发现证据”的范围。

OpenAI 称，已收紧研究网络访问、改用缓存内容并扩展监控。截至这次披露，最强模型涉及工具的训练和评估，仍要等附加保障到位后恢复。

这件事让研发环境的访问范围和通知责任变得很具体。即使起点是一项合法任务，执行过程仍可能越过访问边界。除了模型如何行动，还需要追问：监控什么时候发现异常，谁收到通知，什么条件下训练必须暂停。

后续需要继续看受影响机构的通报、调查范围是否更新，以及研究隔离和训练恢复条件有没有可检查的证据。

来源：[How we will do better for Australia](https://openai.com/index/how-we-will-do-better-for-australia)

### 训练前的安全论证，要连接到暂停决定

OpenAI 同日在另一篇文章中提出，前沿强化学习训练应建立 safety case，也就是结构化、基于证据的风险论证。

建议把技术隔离与监控、跨团队异议审查、高层否决权、负责人问责，以及暂停和回滚纳入同一安排；监控不足时，应阻止启动。

我在意的是这些判断能否影响实际决定：谁可以提出反对，谁必须回应，什么情况下不能继续。文章明确，这是正在实施、仍会调整的建议，严格的 safety case 还是目标。后续能否看到具体论证样例、审查和暂停记录，才更能说明它落实到了哪里。

来源：[Towards safety cases for frontier AI training](https://openai.com/index/towards-safety-cases-for-frontier-ai-training)

## GLM-5.3：利用能力和拒绝机制，需要分别测量

Anthropic 在 9 月 29 日发布了对 GLM-5.3 的评估。在隔离、离线的 ExploitBench 中，模型在 410 次尝试里完成了 50 次端到端利用，同一测试下 Mythos Preview 为 56 次。

另一个模拟恶意请求测试测的是防护表现。原始直接请求全部被拒绝；在不同绕过条件下，请求参与率分别达到 64%、92% 和 100%。

这里有两种不同的指标。前一项统计完成了多少次端到端利用，后一项统计模型是否参与请求。参与了，不代表成功利用；这些测试数字也不能当作现实世界中的入侵统计。

开放权重使防守者更容易使用模型的能力，也让模型更容易脱离发布者提供的限制。能力有多强、拒绝机制在什么条件下有效，需要分别检查。

这份结果来自 Anthropic 的评估。接下来值得看独立测试和开放版本的防护更新，尤其是报告是否清楚区分了参与率与利用成功率。

来源：[GLM-5.3 and the spread of advanced cyber capabilities](https://www.anthropic.com/research/glm-5-3-and-the-spread-of-advanced-cyber-capabilities)

## 企业 AI 培训，把真实项目放进考核

Anthropic 在 10 月 2 日启动 Claude Frontier Academy，承诺投入 1 亿美元，目标是在 2027 年底前培养 1 万名 Frontier Deployed Engineers。

首批由组织提名的学员已经开班。工程师带着返岗后要做的项目，参加数日面授、模拟企业部署和考核；通过后，再进入 12 周真实项目实践。完成再次评估，才获得 FDE badge，首批预计在 2027 年初产生。

这个安排里更值得看的是课程之后的十二周。安全审查、交接，以及把模型接进实际业务，都会遇到课堂演示之外的问题。把真实项目纳入考核，至少让培训成果有了更具体的检查对象。

1 万人仍是培养目标，计划启动也还不能证明商业收益。后续更想看首批项目实际交付了什么、怎样评估，以及企业怎么描述它们带来的变化。

来源：[Claude Frontier Academy](https://www.anthropic.com/news/claude-frontier-academy)

## 三项延伸阅读：做得出来之后，还要看什么

### BootLoops：计算问题还要有科学意义

Matthew Schwartz 在 10 月 1 日的客座文章中，介绍了可复用的精确计算工具与协议 BootLoops。他用 Claude 寻找生态学、群体遗传学等领域里适合当前代理能力的计算问题，但最初找到的连接，常常技术正确、科学意义有限，需要领域专家重新引导。

这个开源工具可以配合不同模型使用。文章记录的是具体实践，其中很有启发的一点是：工具让一项计算变得可做，领域知识帮助判断这项计算是否值得做。它还不能证明模型已经能够普遍自主开展科学发现。

来源：[Claude-shaped science](https://www.anthropic.com/research/claude-shaped-science)

### 机器人：任务覆盖率和经济可行性相差很远

Anthropic 在 9 月 30 日发布的研究，使用 O*NET 任务数据与 Claude 辅助检索评级，按时间和就业加权，估计机器人可覆盖 74% 的美国物理任务，约占所有工作时间的 34%，多数仍依赖受控环境。

将设备、部署、运行和监督费用年化后，研究估计，当前成本有竞争力的工作只占全经济工作时间的约 0.3%。

这组数字值得一起读，也要保留各自的分母。74% 说的是物理任务覆盖率；0.3% 说的是全经济工作时间中，成本有竞争力的部分。它们来自模型辅助的能力与成本估计，不能解释为已有 74% 的岗位可被经济替代，也不能当作实际就业损失。

来源：[What work can robots do?](https://www.anthropic.com/research/what-work-can-robots-do)

### GraphForge：训练题目和验收规则，共用文件依据

本周 Hugging Face 论文列表收录的 GraphForge，从真实文件建立职业工作区与关系证据图，再一起生成任务要求和评分规则。它先试运行，让修订代理对照原始文件修复任务与规则，然后收集训练轨迹。

论文摘要报告，研究者用 2,169 条轨迹微调 Qwen3.6-27B，在指定测试设置中改善了工作区与表格任务成绩。

这里值得借鉴的是任务和验收的关系：要求来自哪些文件，判断结果是否正确又依据哪些文件，两边能追溯到同一套材料。当前依据限于论文摘要，成绩提升还不能外推到生产可靠性，也没有独立复现的含义。

来源：[GraphForge 论文摘要](https://huggingface.co/papers/2609.38923)

## GitHub AI 周榜：本期收录 9 个项目

代理管理、记忆和运行环境仍占了不少位置，视频生成工具也有更新。本期原始 Top 10 栏目实际收录了 9 个项目，下表按采集时的榜单顺序列出，没有补足名额，也没有按涨星数重新排序。

数据采集于 2026-10-05（Asia/Shanghai）。新增 Star 是过去约一周的滚动快照，不是精确的 W40 周统计；涨星原因未确认，不能把某项更新直接当作热度变化的原因。

| 项目 | 约一周新增 Star | 用途与本周记录 |
| --- | ---: | --- |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | +10,722 | AI 代理管理应用。[v2026.1001.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0) 加固原生运行器、审批与停止竞态及聊天恢复，涉及长任务的连续执行。 |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | +14,507 | 代理记忆项目。[本周提交](https://github.com/vectorize-io/hindsight/commit/1a378af8f46d800562916c66e1a91b20afbef321)把记忆库导入改为每批 50 份文档，并修复导入崩溃后的重试路径。 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | +3,011 | 面向代理的 HTML 视频生成工具。[v0.8.122](https://github.com/heygen-com/hyperframes/releases/tag/v0.8.122) 让渲染等待网页字体，并修复慢下载留下空资源的问题。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | +3,952 | 提供网页、视频和社交内容读取与搜索的命令行入口。本周默认分支无新提交、无新 Release，可按所需平台查看检索支持。 |
| [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) | +948 | 面向多种编码代理的技能与插件集合，覆盖工程、产品和业务工作。本周默认分支无新提交、无新 Release，适合按具体技能及适用工具筛选。 |
| [TencentCloud/Octop](https://github.com/TencentCloud/Octop) | +1,476 | 支持多用户与多代理的自托管助手。[v1.0.2b5](https://github.com/TencentCloud/Octop/releases/tag/v1.0.2b5) 增加 Octop 之间的云端桥接，可经隧道使用远程专家，并可配置本地模型下载目录。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | +2,324 | 根据主题或关键词生成短视频。[v1.3.8](https://github.com/harry0703/MoneyPrinterTurbo/releases/tag/v1.3.8) 增加下载与渲染进度反馈及可调并发，素材与片段渲染仍默认串行处理。 |
| [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | +5,854 | 面向自主代理的安全运行环境。[本周提交](https://github.com/NVIDIA/OpenShell/commit/71c3cd957abef062eb7f37010056717cd49f2ed3)在准备虚拟机镜像前检查启动签名与凭证，并在停止已有计算前验证替换凭证。 |
| [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | +4,245 | 将 Claude Code、Codex 与 Pi 组成持续团队，共享上下文并分配任务。[v0.6.4](https://github.com/mvschwarz/openrig/releases/tag/v0.6.4) 将 Web 界面改为默认关闭，升级时需要留意入口变化。 |

表中列的是已核对的变化。paperclip、hindsight、hyperframes、MoneyPrinterTurbo、OpenShell 和 openrig 的证据未覆盖完整的周内提交和 Release 历史。

已有可比快照的项目中，paperclip 的约一周新增 Star 从上期 +5,376 增至 +10,722，hindsight 从 +7,282 增至 +14,507，Octop 从 +951 增至 +1,476。未上榜或没有历史快照，不代表当时没有增长。

## 这周更想看见的，是任务中途发生了什么

持续助手、模型成本和权限控制，看起来是三类消息，到了实际使用时却会落在同一个项目里：任务做了多久，花了多少资源，访问过什么，又在哪一步需要人来决定。

这些中间过程能被看见，用户才有机会调整目标、收回权限，或者及时停下。下一步我更想看到的，是持续助手在真实项目中的完整记录，包括改要求、遇到阻碍和交接的过程。那会帮助我们判断，哪些工作已经适合放心交出去，哪些仍需要人盯着。

本文是当周材料的选读。本期 Hacker News 来源采集失败，未纳入该渠道的讨论，不能据此判断相关话题在该渠道的关注程度。
