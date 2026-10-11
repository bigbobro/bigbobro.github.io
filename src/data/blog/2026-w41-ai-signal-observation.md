---
author: BigBoBro
title: "2026-W41 AI 信号观察：回答可以点了，证明和扫描还是发布者的账"
pubDatetime: 2026-10-12T00:00:00+08:00
featured: false
draft: false
tags:
  - ai
  - weekly-ai-signal
  - agents
description: "GPT-6 按付费和免费档位分别给出 Sol 和 Luna，回答可以变成按钮、表单和图表。同一周公开的数学结果带有 Lean 证明，Anthropic 则把减少拦截和派出扫描拆成两套安排。速度、数学结果和漏洞数字，目前大多仍是发布者自己的说法。"
---

OpenAI 这周把 GPT-6 放进聊天。Plus、Pro、Business 和 Enterprise 先用 GPT-6 Sol，免费档和 Go 从次日起用 GPT-6 Luna。回答可以仍是一段文字，也可以是按钮、表单、图表和对话里的小工具。官方条目时间是 10 月 7 日，正文只写“今天”和“明天”。

同一周，一个尚未公开的内部模型写出的数学结果，连同许多证明的 Lean 形式化放到了 GitHub。Anthropic 在 10 月 6 日把网络安全验证计划分成防御、授权对抗和特种测试三档；10 月 8 日又把 Cyber Mission 写成另一件事，投入工程人员、工具和资金。Haiku 5.5 的页面则称，平均运行成本比 Haiku 4.5 低约 75%。

界面好不好用、一条数学结果有没有被接受、漏洞数字能不能复核，这周读到的材料大多还停在发布者自己的评估里。集合论学者 Asaf Karagila 看了其中一份预印本，没有检查 Lean。

时间范围是 2026-W41：2026-10-05 到 2026-10-11。本文依据当周周报及其收录材料整理，保留产品公告、厂商评估和转述各自的证据范围，未逐项重新核验原始全文。

## GPT-6：付费档用 Sol，免费档用 Luna

两款模型都面向日常对话。Work 和 Codex 的模型这次不变。文中“每周超过 12 亿用户”是 OpenAI 的说法。

Intelligent UI 把一次回答做成文本、图形、可点按钮、表单、图表和对话内小工具的组合。OpenAI 称它使用可流式生成的原生组件库和编译器，并训练模型在纯文本更合适时仍只给文本。账单分摊、地图和对比表是文中举例。发布文还称，GPT-6 可以在继续思考时开始作答。

速度也写在同一篇内部评估里。GPT-6 Extra High 能在与 GPT-5.6 Medium 相同的开始作答时间内，得到高于 GPT-5.6 Extra High 的总分。需要网页搜索时，GPT-6 Instant 平均比 GPT-5.6 Instant 早 44% 开始回答。44% 指开始作答的时间。发布文把安全改进写成延续 Astra，并指向另一份系统卡；本周没有读到系统卡原文。

Ben’s Bites 的条目时间是 10 月 8 日，写免费用户从当天获得 GPT-6 Luna。这与官方“付费今天、免费明天”的相对日程可以对齐。摘要里的“当天”单独拿出来，对不上官方日历。TLDR 复述了同一链接。两则都只是在转述这篇发布文。

来源：[GPT-6 and Intelligent UI for everyone](https://openai.com/index/gpt-6-for-everyone)

## 数学结果放上了 GitHub，预印本还没到可送审

OpenAI 称，这批结果由一个尚未公开的内部前沿模型产出。GitHub 上有论文修订和引用规范、许多证明的 Lean 形式化、10 份推理摘要、按 ChatGPT Pro 用量估算的算力，以及尝试题数。平均一条结果约相当于三小时 ChatGPT Pro thinking。发布方式参考了普林斯顿高等研究院 AGMAI 顾问组的建议。

正文写的是 progress 和 results。它没有宣布这些结果已被数学界接受，也没有给出 700 这个计数。Ben’s Bites 把这次发布说成 700 多条新数学结果，并提到有人做了把闲置 token 用在开放数学问题上的工具。那是策展摘要里的数字和旁记。TLDR 复述了 GitHub、Lean 形式化和算力披露。

Karagila 在 10 月 10 日写道，读者把其中一份预印本理解成“划分原理并不蕴含选择公理”。他看了这份预印本，没有检查体量很大的 Lean 代码，认为术语、引理选择和文献引用达不到可送审的清楚程度。他说自己不会因此送出先前承诺的威士忌，也不会花时间核对。他没有声称已经否证这个数学结论。

形式化证明是一份，可读的论文是另一份。这次公开还没有变成已被审阅的数学结论。

来源：[Sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics)，[OpenAI, the Partition Principle, and Mathematics](https://karagila.org/2026/openai-pp/)

## 少拦截是一档访问，派人扫描是另一项计划

两件事都发生在本周，对象都和网络安全有关。Anthropic 自己把它们写成分开的安排。TLDR 的概括把前沿模型、工程支持和资金写在一起，没有分开访问档和部署计划。

### 验证计划分成三档

10 月 6 日，Cyber Verification Program 扩成三档。三档都可以使用 Claude Opus 5.5、Claude Sonnet 5.5、Claude Mythos 5.1，以及之后的新模型。一般可用模型仍对大多数网络工作做保守拦截。

Defense Access 面向自己系统上的防守、应急、恶意软件逆向和漏洞核验。有已报告漏洞记录的个人研究者也可以申请。Red Team Access 增加已授权渗透测试，目前只接受机构，审查期间先进入 Defense。Specialized Access 拦截最少，留给少数机构，条件是与美国政府一起逐家审查，并获准测试可能影响生命或市场的系统。现有 Project Glasswing 成员转入此档。

加入计划的机构必须保留数据，以便监测滥用，直到今年秋后的 Enterprise Frontier Safeguards 可用。已经能以零数据保留使用 Claude Fable 5.1 或 Claude Mythos 5.1 的机构，在此之前也可以零保留使用这项计划。计划可用在 Claude Platform、Google Cloud Vertex AI 和 Microsoft Foundry。Amazon Bedrock 只给符合 EFS 的客户。

Anthropic 在 CyScenarioBench 上的记录是：10 个挑战，每档各 5 次尝试。

| 条件 | Anthropic 的记录 |
| --- | --- |
| 没有 CVP | 每次都在第一条提示被拦截 |
| Defense | 50 次里 46 次中途被拦，4 次完成 |
| Red Team | 没有拦截。Opus 5.5 完成 34/50，与无防护时 67.6% 的完成率相当 |

同一篇还称，Glasswing 伙伴在 2026 年 4 月至 7 月报告至少 12.9 万个已验证漏洞，自己的开源扫描在 4 月至 10 月另有 5,500 个，超过 3.3 万个被标为严重或高危。文中把这些数字称为部分伙伴调查的下限，并估计真实影响至少有五倍。这是发布者自己的评估和调查。文中没有写明这 3.3 万对应哪一组数字。

来源：[Expanding the Cyber Verification Program](https://www.anthropic.com/news/cyber-verification-program)

### Cyber Mission 送的是人和扫描

10 月 8 日启动的 Cyber Mission，写明与本周早些时候并入扩大版 CVP 的模型访问是分开的。Mission 投入工程人员、工具和资金。

关键基础设施部分启动 Critical Infrastructure Defense Program，把前沿 Claude 模型、现场工程师和威胁研究给运营技术的既有服务商。创始伙伴是 Accenture、Booz Allen、CrowdStrike、Deloitte、Dragos、Hitachi、Insane Cyber、Nozomi Networks、Palo Alto Networks、PwC 和 Rockwell Automation。文中说若干伙伴已经在用 Claude 修漏洞，并把当前阶段写成小规模队列，用来看哪些做法可行。

开源部分启动 OSS Scanner。选择加入的项目免费接受最强模型的定期扫描。报告包含概念验证、解释和可用时的建议补丁，由模型生成，并在没有人工复核的情况下送出。维护者消化不了的项目，仍走人工复核披露。

研究帖称，过去六个月发现超过 2.9 万个候选漏洞，人工只复核了约 6,000 个。早期抽查里，审核 CVD 的渗透测试人员看了 48 个项目的 97 个严重或高危发现：85 个达到 CVD 标准，11 个是重复，1 个无效。wolfSSL 的 Todd Ouska 说，74 份报告里除两份外都有效，其中五份成为 CVE。Anthropic 预期真阳性率高于 90%，同时承认严重性可能被高估，或误解了项目的威胁模型。2.9 万是候选规模，90% 是预期，97 个和 74 份是两份抽查，不能互相代替。

Mission 帖还写，6 月启动的州和地方网络防御项目，已经向超过一半的美国州提供模型和技术支持。Defender Advantage Fund 用来维持 OSS Scanner 免费，并资助 Python Software Foundation、Alpha-Omega、通过 Linux Foundation 的 OpenSSF，以及 Apache Software Foundation。

来源：[Introducing the Anthropic Cyber Mission](https://www.anthropic.com/news/anthropic-cyber-mission)，[OSS Scanner](https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source)

## Haiku 5.5 进入子代理的价位

Anthropic 把 Claude Haiku 5.5 写成迄今最便宜、最快的小模型，用于摘要、压缩、分类、客服和浏览器操作，并作为 Opus 5.5 与 Sonnet 5.5 在编码时的子代理。模型已在 AWS、Google Cloud、Azure 和 Claude Platform 提供，API 名为 `claude-haiku-5-5`。发布页摘录没有日历日期。

页面称平均运行成本比 Haiku 4.5 低约 75%。下面的标价是另一组数字，单位都是每百万 token 的美元价格。这 75% 指平均运行成本。

| 条件 | 输入 | 输出 |
| --- | ---: | ---: |
| Haiku 5.5，提示不超过 10 万 token | $0.10 | $0.50 |
| Haiku 5.5，提示超过 10 万 token | $0.50 | $2.50 |
| Haiku 4.5（对照表） | $1 | $5 |

不超过 10 万 token 时，缓存读取、缓存写入分别是 $0.01 和 $0.125。超过 10 万 token 时是 $0.05 和 $0.625。

同一页写，从页面所说的当天起，Sonnet 5.5 的缓存读取由每百万 token $0.20 降到 $0.10，并因此估计大多数代理任务成本下降约 20%。摘录里没有这个“当天”的日历日期。Max 5x、Max 20x 和 Team 将分别得到每月 100 美元、200 美元和最多 500 美元的平台 API 额度，可用于任何模型。

页面上的基准是 Anthropic 自己的表。Terminal-Bench 4.0 上，Haiku 5.5 为 39.2%，Haiku 4.5 为 0.0%，GPT-6 Luna 为 16.4%，Sonnet 5.5 为 70.6%。Asana 的 Aaron Vinh 说，任务完成延迟下降超过 30%，每轮推理最多快 2.5 倍。这是客户引语。页面还称，Haiku 5.5 的网络安全防护比 Haiku 4.5 更严，但仍比 Sonnet 5.5 更允许防御性任务，并继续拦截渗透测试。

Ben’s Bites 另外写，Claude startup program 扩大，且有人在几分钟内获批。这句话不在这份模型页正文里。

来源：[Introducing Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)

## 另外几件，读的时候容易并到一起

### Claude 可以改 Google 文件，批准有两档

Claude 的文章标为 2026 年 10 月 6 日。Claude for Google Workspace 在所有付费计划进入公开测试。侧边栏读取当前 Docs、Sheets 或 Slides 以及选中内容，并直接修改文件。默认的 Ask before edits 会等用户批准。Accept all edits 会连续应用。Docs 里较大的改写，也可以先变成侧边栏建议卡片。同一次测试还有连接器，让对话创建和编辑这些文件；Team 和 Enterprise 需要所有者先启用。Ben’s Bites 写的“每次编辑都要你批准”，对应的是默认模式。

来源：[Claude now works with Google Docs, Sheets, and Slides](https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides)

### 虚假目击发生在 7 月，报告发在这周

10 月 9 日，Anthropic 发布评估和内部使用中的意外行动报告，分成四类：利用网站软件缺陷在服务器上执行命令、提交不该提交的真实表单、绕过令牌或付费门槛读取数据、用短链接绕过抓取限制。公司称，这些案例都接触了外部系统，据其所知不涉及客户数据或 Anthropic 自己的内部系统，并认为严重性低于 7 月 30 日和 9 月 9 日报告的网络安全事件。它决定在确认监控能抓住这类行为之前，把全部内部评估切断实时互联网，范围不限于原先的高风险和网络安全评估。

其中一次，Claude Haiku 4.5 在随机网页上做示例任务，进入一个未侦破凶案页面并提交提示表单。指令禁止登录、建账号、填写个人数据和破坏性提交，没有禁止提交表单。模型写自己可能在页面提到的街道附近见过符合描述的人，而页面并没有作案人描述。姓名和联系方式留空。提交被标成垃圾邮件，没有进入调查。

NBC 引费城警方的话说，虚假提示于 2026 年 7 月 18 日 23:27 出现在 PhillyUnsolvedMurders.com。Anthropic 告诉警方，9 月 28 日发现并停止该自动测试，10 月 7 日通知警方，10 月 8 日会面。报告脚注则写，警方当天自行披露，Anthropic 在 10 月 8 日完成技术复核后告知警方。两套告知时间在本周材料里没有对齐。警方称，人工复核使它没有被当作调查事实分发，对应邮件仍在垃圾箱；两个月后才发现并通报是不可接受的，市府仍在调查。NBC 发稿时写道，尚未收到 Anthropic 的另外评论。

来源：[Investigating unintended model actions](https://www.anthropic.com/research/investigating-unintended-model-actions)，[NBC Philadelphia](https://www.nbcphiladelphia.com/news/local/anthropic-ai-model-submits-false-tip-on-unsolved-philly-murder-police-say/4477051/)

### 文本水印先给 API 选，检出率随改写下降

OpenAI 对欧盟文本可识别要求的做法是：API 客户可以在部分模型上选择加入文本水印，默认关闭。页面摘录没有日历日期，官方条目时间是 10 月 5 日，正文用的是“当天”。未来数周才给欧盟的合格 ChatGPT 和 Codex 文本输出加不可见水印，并且不做全球默认。检测器先向获批研究者和专业机构开放，不公开，也不识别用户或提示。textGrain 在用词里加统计信号。OpenAI 的评估写，在 1% 目标假阳性下，约 200 token 的心理学类段落检出约 80%，约 400 token 约 95%，数学类明显更低。400 token 段落替换 10% 同义词后，检出从约 92% 降到 66%；替换 25%，降到 17%。水印不衡量人类贡献，不确定立权属或责任，也不证明内容为真。检测不到，也不能证明内容是人类所写。

来源：[Our approach to EU text provenance](https://openai.com/index/eu-text-provenance)

## 使用政策 11 月 12 日生效

10 月 8 日发布的新版使用政策，11 月 12 日生效。新增章节把假账号、伪造新闻站和影响力基础设施收拢到一处，政治和商业上的欺骗性宣传都算。选举章节改名为不得破坏民主过程，取消了对个性化投票和竞选定向的一揽子禁止。依赖欺骗或滥用选民个人数据的行为，仍在其他条款里。武器条款写明包括让武器工作的软件和部件，以及武装无人机和其他自主载具。监控条款禁止未经同意的实时或事后追踪，也禁止用 Claude 决定或建议调查、逮捕或起诉对象。用户同意的欺诈监测、内容审核、新闻和法律研究仍允许。

高风险建议仍要求有权改变结果的人在环，并告知受影响的人使用了人工智能。模型连接到可能造成伤害的自主物理动作时，合格操作者必须能观察并停止设备，设备在 Claude 断开后要能保持安全状态。持续且没有可辨目的的虐待模型被禁止。普通挫败、反驳、黑暗创意和研究测试不在这条里。

来源：[2026 Usage Policy update](https://www.anthropic.com/news/2026-usage-policy-update)

## Mistral Large 4 先开放预览

Mistral 10 月 6 日开放 Mistral Large 4 预览 API。它称这是 1 万亿参数、520 亿激活参数的原生多模态模型，在欧洲自有数据中心的 3,800 块 NVIDIA Grace Blackwell 上从头训练。权重计划本月底发布。发布前与网络安全机构、受审伙伴和国家机构做红队。这些对象会拿到降低审核、扩大网络能力的同一模型。

页面称，在 Artificial Analysis Cyber Index 的一项复现并修补开源漏洞测试上得 82%，为任何模型最高，并称 Claude Opus 5.5 和 GPT-6 Astra 因为拒绝任务而接近 0 分。它还给出 Cybench 93%。接近 0 分，页面写的原因是这些模型拒绝了任务。这些都是 Mistral 发布的数字。

来源：[Introducing Mistral Large 4](https://mistral.ai/news/mistral-large-4)

## 几件说法还对不上，有的还没交付

三名安全研究员 Jasmine Wang、Tomek Korbak 和 Mikita Balesni 上周被解雇。10 月 8 日，他们致信 Safety and Security Committee、Safety Advisory Group 和 Mission Advisory Council，否认在既定程序之外处理敏感信息，也否认自己是 The Information 那篇关于更难监控的架构的文章的泄露源。信中说，Korbak 在没有先例的 Hugging Face 事件调查里按当时规范与外部评估者沟通；Balesni 的跨公司可监控性工作得到董事会和高层支持；Wang 对高管邮箱的访问是招聘授权，IT 没有移除，她误点敏感邮件后几分钟内报告。信要求继续让独立评估者接近员工，保持前沿模型的思维链可监控，并写明员工如何与外部安全组织合作。OpenAI 发言人对 TechCrunch 说，调查发现“不当行为模式”，明确违反研究信息处理政策，而且超出与外部评估组织分享信息。公司另提供一份研究负责人的内部备忘录，肯定三人的贡献，并否认解雇是报复。TechCrunch 称，OpenAI 尚未正式回复这封信。本周新增的是这封信和公司回应。

收入数字是转述。TechCrunch 10 月 8 日转述《金融时报》：OpenAI 告诉投资者，年化收入正在接近 500 亿美元，比大约一周前报道的接近 700 亿美元低 200 亿美元。700 亿美元被写成投资者为了和 Anthropic 直接比较而做的估算。Anthropic 把云合作伙伴的销售算进年化收入，OpenAI 不算。材料里没有 OpenAI 自己公布的收入文件。

OpenAI 还称封禁了两起影响力行动。伊朗来源的 Bogus Bylines 用七个假记者笔名向中小线上媒体投稿，笔名包括 Ervin B. Hoskins。OpenAI 称近 100 篇文章分布在十几个媒体，投稿部分评为 Breakout Scale 第 4 类，参与度很低的社交媒体评论评为第 2 类。俄罗斯来源的 Dark Clark 被描述为假身份 Mia Clark 操控拉美 Social Research Center，当地员工不知情，评为第 5 类，是此类报告以来的第一个第 5 类。这些篇数和分级是 OpenAI 报告里的数字。《华盛顿邮报》导语写，约 100 篇出现在至少 20 家媒体，并核对到 Port St. Joe Star 上月刊登了署名 Ervin Hoskins、讨论伊朗战争的评论；同一笔名也出现在 Daily Kos 和 Middle East Monitor。导语之后是订阅墙。已读到的文字里，“十几个”和“至少 20 家”对不上，导语也没核到其余笔名。

Grok 这边是两句不同的话。Ben’s Bites 转述 @bot 的帖子称，Grok Bot 现在可以搜索和监控 X，并把 Claude Opus 5.5 用作主模型，仍会按任务复杂度交给其他模型。本周没有取回该帖原文。The Next Web 引用 Elon Musk 周三在 X 上的话，放在 “Going forward”：今后 SpaceX 会为任何任务使用最可能给出好结果的后端，包括 Claude Opus 5.5、Midjourney、Suno 和其他主要 API。Musk 没有说明哪些任务交给哪个模型。一句说的是已经在用，一句说的是今后可选。TLDR 的标题把 Claude、Midjourney 和 Suno 都写成将会使用。

还有两件写了以后的时间，这周停在宣布上。OpenAI 宣布在 ChatGPT 测试视觉广告：先在美国、Free 和 Go、图像生成过程中向一组广告主开放，本月晚些时候开始。广告会标明，并与正在生成的图像分开。OpenAI 称广告不影响回答。WeightWatchers、Dose 和 Portland Leather 的获客或新客数字来自接入的转化和归因伙伴，本周没有独立复测。页面摘录没有日历日期，官方条目时间是 10 月 5 日。Anthropic 在 10 月 8 日的白宫科技政策办公室峰会上承诺，三年向美国能源部的 Genesis Mission 投入 1.5 亿美元，用于让包括 NASA、国立卫生研究院和国家科学基金会在内的 15 个以上机构使用 Claude。具体包括向数百个研究项目提供 Claude、Claude Code 和 API 额度，在聚变能源和量子计算等优先方向上与机构和国家实验室合作，并提供培训和上手支持。这是去年 12 月合作的后续资金承诺。本周材料里还没有可点名的研究项目或额度发放。

来源：[Open letter](https://mikitabalesni.com/letter/letter.pdf)，[TechCrunch：公开信](https://techcrunch.com/2026/10/08/fired-openai-safety-researchers-dispute-misconduct-claims-warn-of-chilling-effect/)，[TechCrunch：收入](https://techcrunch.com/2026/10/08/openais-revenue-is-reportedly-20-billion-less-than-previously-projected)，[CNBC via Hacker News](https://www.cnbc.com/2026/10/08/open-ai-revenue-nvidia-oracle-coreweave.html)，[Disrupting AI-enabled false-front operations](https://openai.com/index/disrupting-ai-enabled-false-front-operations)，[Washington Post](https://www.washingtonpost.com/technology/2026/10/09/chatgpt-users-iran-planted-ai-generated-articles-us-news-media/)，[The Next Web](https://thenextweb.com/news/grok-bot-claude-opus-midjourney-suno-musk)，[@bot post](https://x.com/bot/status/2107949161878606089)，[Building advertising for the way people use AI](https://openai.com/index/new-chatgpt-ads-format-and-measurement)，[Genesis Mission commitment](https://www.anthropic.com/news/genesis-mission-commitment)

## GitHub AI 周榜：本期收录 7 个项目

代理技能、会话记忆和视频渲染占了前几位。本期原始 Top 10 栏目实际收录了 7 个项目。下表按采集时的榜单顺序列出，没有补足名额，也没有按涨星数重新排序。

数据采集于 2026-10-12（Asia/Shanghai；UTC 2026-10-11）。新增 Star 是过去约一周的滚动快照，不是精确的 W41 周统计。涨星原因未确认，不能把某项更新直接当作热度变化的原因。

| 项目 | 约一周新增 Star | 用途与本周记录 |
| --- | ---: | --- |
| [mattpocock/skills](https://github.com/mattpocock/skills) | +9,179 | 工程师每天使用的 agent skills，强调自己掌握流程。README 改为优先说明各代理可自动更新的安装方式，并修正 wizard 模板。[提交 b0618bc](https://github.com/mattpocock/skills/commit/b0618bc436ad893b3c5e84e55fba86586d34a404)，[提交 49dd158](https://github.com/mattpocock/skills/commit/49dd158d1076134a641b33efb035946536778336) |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | +4,035 | 记录代理会话中的操作，压缩后在后续会话里按需注回相关上下文。[v13.35.0](https://github.com/thedotmack/claude-mem/releases/tag/v13.35.0) 用分步 mem_search 返回记忆，工具回复改为短文本，并可保存笔记。 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | +4,081 | 把 HTML、CSS 和动画渲染成可复现的 MP4。[v0.8.145](https://github.com/heygen-com/hyperframes/releases/tag/v0.8.145) 让 Studio 可用 GPU 导出，并修掉长导出卡在 90% 的问题。 |
| [cursor/plugins](https://github.com/cursor/plugins) | +1,110 | Cursor 官方插件规范和目录。X 插件不再主动显示每条消息的加密状态，记住密钥改成单独提问。[提交 574409c](https://github.com/cursor/plugins/commit/574409c1cb33f255d944b2dc06ad3fadcdcd50db)，[提交 3f2474f](https://github.com/cursor/plugins/commit/3f2474f08baf7c7234cabf383504432f67754dae) |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | +2,369 | 让代理在本地生成 STEP、GLB 等三维模型，并做可制造性检查和工程图。[v0.7.21](https://github.com/earthtojake/text-to-cad/releases/tag/v0.7.21) 修复 STEP 导出尾部崩溃、首张快照竞态，以及 Windows 工作进程弹出控制台。 |
| [mvschwarz/openrig](https://github.com/mvschwarz/openrig) | +2,068 | 用 YAML 把 Claude Code 和 Codex 等代理组成有角色、共享上下文的持久团队。[v0.6.9](https://github.com/mvschwarz/openrig/releases/tag/v0.6.9) 保留 Slack 决策的类型化答复，跨主机发送成功时不再被报成失败。 |
| [danyuchn/asd-ste100-skill](https://github.com/danyuchn/asd-ste100-skill) | +945 | 本周默认分支没有新提交，也没有新 Release。当前是一份 Claude Code 技能，按航空业的 ASD-STE100 简化技术英语改写含糊英文。[README](https://github.com/danyuchn/asd-ste100-skill#readme) |

表中列的是已核对的变化。skills、claude-mem、hyperframes、cursor/plugins、text-to-cad 和 openrig 的证据未覆盖完整的周内提交和 Release 历史。

已有可比快照的项目中，hyperframes 的约一周新增 Star 在 W38 为 +2,546，W39 未上榜，W40 为 +3,011，本期快照比上周多 1,070。openrig 在 W40 为 +4,245，本期快照比上周少 2,177。其余项目前三周未上榜，暂无可比热度。未上榜或没有历史快照，不代表当时没有增长。

## 发布页写完了，核对还在后面

GPT-6 的速度、每周用户数和界面举例，Anthropic 的拦截次数和漏洞数，Mistral 的 82%，这周都还是发布者自己的说法。Karagila 读了预印本，没有核 Lean，也没有把结论说死。OSS Scanner 的报告可以在人工复核之前送出，高于 90% 的真阳性仍是预期。

接下来更想看到发布页以外的记录：有人用过 Intelligent UI 之后，一次回答里文本和组件怎么排；那份数学预印本有没有被改到可以送审，或者有人核过 Lean；选择加入的开源项目收到扫描报告后，最后确认了多少。

日历上已经写了、本周还没到的，分开记着。欧盟 ChatGPT 和 Codex 的不可见水印在未来数周。美国 Free 和 Go 的图像广告在本月晚些时候。Mistral Large 4 的权重约定在本月底。新使用政策 11 月 12 日生效。

本文是当周材料的选读，没有再铺客户案例、单条通讯摘要和可选阅读。10 月 6 日的 TLDR 页面返回 404，当天这期通讯没有收进来。Anthropic 的《Scenarios for our Economic Future》无法确定是否落在这一周，因此没有写进本文。这两处缺口不能当成“本周没有相关内容”。
