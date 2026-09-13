export type CaseSection = {
  label: string;
  title: string;
  body: string;
  image?: string;
  points?: string[];
  caption?: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  cover: string;
  statement: string;
  role: string;
  format: string;
  duration: string;
  tools: string;
  video?: string;
  facts: { value: string; label: string }[];
  sections: CaseSection[];
};

const rawProjects: Project[] = [
  {
    slug: "dingfengpo",
    index: "01",
    title: "定风波",
    subtitle: "AIGC HISTORICAL SHORT FILM",
    year: "2026",
    cover: "/media/dingfengpo-cover.webp",
    statement: "一个被迫反复演出“大唐失败”的老兵，把整场表演变成了一次真正的起义。",
    role: "导演 / 编剧 / 视觉开发 / 剪辑",
    format: "AI历史动画短片",
    duration: "个人创作",
    tools: "即梦 / Seedance / GPT Image / Minimax / Premiere",
    video: "https://www.bilibili.com/video/BV1MMbc6ZEbW/",
    facts: [
      { value: "01", label: "独立完成项目" },
      { value: "3", label: "箭・鼓・火叙事伏笔" },
      { value: "4", label: "制作系统：角色・场景・镜头・声音" },
    ],
    sections: [
      {
        label: "CONTEXT / 01",
        title: "让一场被迫表演，成为真正的行动",
        body: "故事置于吐蕃统治时期的沙州。老兵郭长戍被迫日复一日扮演“大唐的失败”，但他和年轻人把舞台上的箭、鼓与火重新定义为起义信号。影片不是简单复述历史，而是通过一个人的记忆讨论：失败如何被反复讲述，又如何在讲述中被改写。",
        image: "/media/cases/dingfengpo/01.webp",
        caption: "世界观、人物与核心视觉方向",
      },
      {
        label: "NARRATIVE / 02",
        title: "三段结构与镜头伏笔",
        body: "白日彩排负责建立误导，帐内密议确认行动逻辑，夜宴则让所有排练动作反转为真实攻击。箭尾风压、误敲战鼓、草垛火星都先以失误出现，再在高潮中完成意义转换。",
        points: ["白日彩排：建立人物关系与喜剧性误导", "帐内密议：用最短时间确认箭、鼓、火", "夜宴反转：音乐停顿、齐射、点火与唐旗揭示"],
        image: "/media/cases/dingfengpo/02.webp",
        caption: "叙事结构、镜头节点与声音节奏",
      },
      {
        label: "VISUAL SYSTEM / 03",
        title: "先建立资产规则，再生成镜头",
        body: "角色采用雕塑化面部、成束发须与手绘PBR质感；色彩锁定为低饱和暖灰、土黄、赭石与灰蓝。人物三视图、宴会母版、武器和披风成为镜头生产的固定参照，降低人物漂移与空间错位。",
        image: "/media/cases/dingfengpo/03.webp",
        caption: "角色、场景和镜头资产系统",
      },
      {
        label: "AI PIPELINE / 04",
        title: "把生成问题转化为导演问题",
        body: "关键镜头不依赖一次生成。先确认叙事功能，再分别控制景别、运动、光源、动作起止和镜头衔接。对人物一致性、空间连续性与动作冲突进行多轮评估，最后通过剪辑与声音重新建立节奏。",
        points: ["角色与场景锁定", "分镜与首尾帧控制", "图生视频与多轮筛选", "声音、剪辑与最终交付"],
        image: "/media/cases/dingfengpo/04.webp",
        caption: "AI制作流程、失败镜头与修正方法",
      },
      {
        label: "FINAL / 05",
        title: "影像最终指向一幅仍在流动的壁画",
        body: "终章让老兵的现实身体逐渐化入《张议潮统军出行图》。临终视线中的唐旗和青年战友的呼唤，将个人牺牲连接到未曾中断的历史记忆。",
        image: "/media/cases/dingfengpo/05.webp",
        caption: "最终影片、关键画面与发布入口",
      },
    ],
  },
  {
    slug: "all-roads",
    index: "02",
    title: "ALL ROADS",
    subtitle: "ROMAN ABSURDIST SHORT FILM",
    year: "2026",
    cover: "/media/all-roads-cover.webp",
    statement: "一个只想离开古罗马的现代人，越逃越准确地完成了系统交给他的任务。",
    role: "导演 / 概念 / AI影像制作",
    format: "荒诞喜剧短片",
    duration: "24小时极限创作",
    tools: "TapNow / 即梦 / Seedance / Premiere",
    video: "https://www.bilibili.com/video/BV1HXY96GEwd/",
    facts: [
      { value: "24H", label: "概念到成片" },
      { value: "03", label: "不断更新的任务" },
      { value: "01", label: "反复回到同一原点" },
    ],
    sections: [
      {
        label: "CONCEPT / 01",
        title: "所有道路都通向罗马，也通回原点",
        body: "现代留学生意外进入古罗马，只想离开，却被一块甩不掉的任务石碑不断召回。影片把“条条大路通罗马”“我来、我见、我征服”等名言改造成系统任务，让历史常识成为循环笑点。",
        image: "/media/cases/all-roads/01.webp",
        caption: "人物、场景与荒诞任务系统",
      },
      {
        label: "PRODUCTION / 02",
        title: "极短时间里的资产优先策略",
        body: "先锁定男主、任务石碑、罗马主路、马车与军阵，再围绕这些可复用资产组织镜头。重复回到同一场景不仅是叙事机制，也是控制生成连续性的生产方法。",
        points: ["固定男主与现代服装", "石碑作为任务与转场装置", "主路母景承担空间锚点", "交通蒙太奇加速喜剧节奏"],
        image: "/media/cases/all-roads/02.webp",
        caption: "镜头拆解、资产复用与3D片场尝试",
      },
      {
        label: "FINAL / 03",
        title: "从慢镜头到失控追逐",
        body: "镜头节奏从陌生环境中的迟疑逐步加速，第二关使用追逐长镜头，第三关扩大到军阵场面。最后男主对系统规则的崩溃吐槽，完成对“命运任务”的反讽。",
        image: "/media/cases/all-roads/03.webp",
        caption: "最终影片、工作流与发布入口",
      },
    ],
  },
  {
    slug: "trial-tails",
    index: "03",
    title: "TRIAL TAILS",
    subtitle: "AI × VR PET ADOPTION EXPERIENCE",
    year: "2025",
    cover: "/media/trial-tails-cover.webp",
    statement: "用AI与VR帮助领养者在决定之前，更真实地理解长期照护责任。",
    role: "UX研究 / 产品设计 / VR体验",
    format: "AI × VR服务体验",
    duration: "团队项目",
    tools: "Figma / Unity / VR Prototyping / User Research",
    facts: [
      { value: "AI", label: "个性化匹配与支持" },
      { value: "VR", label: "照护情境模拟" },
      { value: "01", label: "从浏览到长期责任的完整旅程" },
    ],
    sections: [
      {
        label: "PROBLEM / 01",
        title: "领养不是一次浏览和点击",
        body: "项目关注的不是提高冲动转化，而是减少错误匹配和再次弃养。传统平台擅长呈现宠物信息，却很难让用户提前理解时间、情绪与经济上的长期责任。",
        image: "/media/cases/trial-tails/01.webp",
        caption: "项目定位、用户问题与体验愿景",
      },
      {
        label: "RESEARCH / 02",
        title: "从用户焦虑到服务机会",
        body: "通过用户旅程、痛点聚类和服务蓝图，把领养前的犹豫、匹配过程中的信息不对称，以及领养后的支持缺失连接起来。",
        image: "/media/cases/trial-tails/02.webp",
        caption: "研究洞察、用户旅程与系统机会",
      },
      {
        label: "SYSTEM / 03",
        title: "AI匹配与VR试养不是两个孤立功能",
        body: "AI负责根据生活方式、经验与偏好建立匹配建议；VR则把喂养、陪伴、清洁和突发情况变成可体验的场景。二者共同服务于更谨慎的决策。",
        points: ["生活方式与照护能力评估", "宠物个性与需求匹配", "VR日常照护情境", "领养后的持续支持"],
        image: "/media/cases/trial-tails/03.webp",
        caption: "AI、VR与领养服务流程",
      },
      {
        label: "INTERFACE / 04",
        title: "让复杂流程保持轻松和可信",
        body: "移动端承担资料、匹配和预约，VR承担情境体验。界面使用明亮而克制的宠物品牌语言，让严肃的责任教育不会变成压力测试。",
        image: "/media/cases/trial-tails/04.webp",
        caption: "关键界面、信息架构与VR触点",
      },
      {
        label: "OUTPUT / 05",
        title: "从一次领养选择延伸为长期关系",
        body: "最终方案把平台、AI建议、VR体验和线下领养流程连接为完整服务，而不是增加一个孤立的科技功能。",
        image: "/media/cases/trial-tails/05.webp",
        caption: "最终体验、演示视频与项目总结",
      },
    ],
  },
  {
    slug: "london-underworld",
    index: "04",
    title: "伦敦地下局",
    subtitle: "COMMERCIAL IMMERSIVE RPG",
    year: "2026",
    cover: "/media/london-underworld-cover.webp",
    statement: "在伦敦真实落地并持续运营的五人制商业沉浸式RPG。",
    role: "剧本改编 / 机制设计 / NPC培训 / 现场执行",
    format: "商业沉浸式RPG",
    duration: "2026.01 - 2026.06",
    tools: "Narrative Design / Live Operation / Lighting / Training",
    facts: [
      { value: "100+", label: "对外演出场次" },
      { value: "10H+", label: "单场体验时长" },
      { value: "600㎡", label: "沉浸式空间" },
      { value: "£148", label: "单人票价" },
    ],
    sections: [
      {
        label: "CONTEXT / 01",
        title: "叙事必须在真实商业环境中持续运行",
        body: "项目以五名玩家为单位，在约600平方米的空间中运行超过十小时。工作不仅涉及故事与角色，还包括玩家节奏、演员状态、道具、灯光、餐饮和长时间现场运营。",
        image: "/media/cases/london-underworld/01.webp",
        caption: "现场空间、角色与玩家体验",
      },
      {
        label: "REDESIGN / 02",
        title: "把三十分钟阅读改成一场家宴",
        body: "原流程中，大量背景信息依赖玩家长时间阅读，导致开场割裂。我将信息重新分配给角色关系、餐桌互动与可操作任务，让玩家在行动中理解世界。",
        points: ["开场快速识别NPC", "割裂剧情重新连接", "老玩家进入新流程", "关键文本转为可玩场景"],
        image: "/media/cases/london-underworld/02.webp",
        caption: "叙事流程重构与家宴互动",
      },
      {
        label: "NPC SYSTEM / 03",
        title: "开放体验需要演员能够自主判断",
        body: "培训原则被压缩为三件事：接住玩家、不脱离角色、自主理解和使用道具。在不牺牲人物逻辑的前提下，让NPC可以回应不可预测的玩家行为。",
        image: "/media/cases/london-underworld/03.webp",
        caption: "NPC机制、角色训练与组织方法",
      },
      {
        label: "ITERATION / 04",
        title: "从1.0到3.0的持续迭代",
        body: "每轮演出都产生新的现场证据。流程、提示、灯光与角色任务根据玩家反馈不断调整，最终沉淀为146页组织者手册，使体验可以被团队稳定复制。",
        image: "/media/cases/london-underworld/04.webp",
        caption: "版本迭代、培训与商业交付",
      },
    ],
  },
  {
    slug: "memory-escape",
    index: "05",
    title: "MEMORY ESCAPE",
    subtitle: "VR × MR NARRATIVE EXPERIENCE",
    year: "2025",
    cover: "/media/memory-escape-cover.webp",
    statement: "通过空间、身体与碎片化线索，让参与者在现实和虚拟之间重建一段记忆。",
    role: "体验设计 / 空间叙事 / 原型",
    format: "VR × MR叙事体验",
    duration: "研究与设计项目",
    tools: "Unity / VR / MR / Spatial Prototyping",
    video: "https://www.bilibili.com/video/BV1yuYd6JESJ/",
    facts: [
      { value: "87%", label: "体验反馈中的积极指标" },
      { value: "VR", label: "不可到达的记忆空间" },
      { value: "MR", label: "身体与现实环境重新进入叙事" },
    ],
    sections: [
      {
        label: "PREMISE / 01",
        title: "记忆不是被观看的影像，而是一处可以进入的空间",
        body: "参与者通过房间、物件、声音与碎片化影像寻找线索。故事不会一次性说明，而是随着身体移动和空间关系逐步显现。",
        image: "/media/cases/memory-escape/01.webp",
        caption: "项目概念、视觉气质与体验入口",
      },
      {
        label: "WORLD / 02",
        title: "现实空间与红色记忆走廊",
        body: "黑白现实空间承担观察和推理，红色虚拟空间承担情绪与潜意识。两套视觉系统既形成冲突，也帮助参与者判断自己处于哪一层记忆。",
        image: "/media/cases/memory-escape/02.webp",
        caption: "环境视觉、空间母题与关键场景",
      },
      {
        label: "JOURNEY / 03",
        title: "用行动组织叙事节奏",
        body: "体验以线索发现、空间转移、记忆触发和回到现实为主要节拍。每个交互都必须同时改变玩家状态与故事理解。",
        image: "/media/cases/memory-escape/03.webp",
        caption: "用户路径、叙事节点与空间流程",
      },
      {
        label: "WHY VR × MR / 04",
        title: "两种媒介解决不同的叙事问题",
        body: "VR创造无法在现实中搭建的记忆结构，MR则保留真实空间、身体与他人的存在。切换媒介本身成为角色从沉浸到重新面对现实的过程。",
        image: "/media/cases/memory-escape/04.webp",
        caption: "媒介选择、交互机制与体验价值",
      },
      {
        label: "TEST / 05",
        title: "让体验证据推动修改",
        body: "测试重点不是询问玩家是否喜欢，而是观察其是否理解线索、是否在正确时机行动，以及空间切换是否支持情绪变化。",
        image: "/media/cases/memory-escape/05.webp",
        caption: "测试观察、反馈与迭代结论",
      },
      {
        label: "FINAL / 06",
        title: "一段可以被共同完成的记忆",
        body: "最终输出将空间叙事、互动流程和视听语言整合为连续体验，并通过演示视频与体验记录呈现。",
        image: "/media/cases/memory-escape/06.webp",
        caption: "最终成果与展示记录",
      },
    ],
  },
  {
    slug: "selected-vr",
    index: "06",
    title: "SELECTED VR PROJECTS",
    subtitle: "THREE INTERACTIVE NARRATIVES",
    year: "2024 - 2025",
    cover: "/media/selected-vr-cover.webp",
    statement: "三个关于气候、迁徙、身体与空间关系的VR叙事实验。",
    role: "叙事设计 / 交互设计 / 视觉开发",
    format: "VR项目精选",
    duration: "3个项目",
    tools: "Unity / VR / Interaction Design / Visual Development",
    facts: [
      { value: "03", label: "独立项目" },
      { value: "THROUGH THE SNOW", label: "雪地叙事体验" },
      { value: "CHILD OF DISTANT SHORES", label: "气候与迁徙" },
      { value: "TUBER TOUGH", label: "可移动多人MR教育体验" },
    ],
    sections: [
      {
        label: "PROJECT 01",
        title: "Through the Snow",
        body: "以雪地环境、孤独感与有限线索组织体验。玩家通过观察、移动和空间变化理解故事，而不是依赖传统对白与说明文字。",
        image: "/media/cases/selected-vr/01.webp",
        caption: "Through the Snow：视觉、空间与交互节点",
      },
      {
        label: "PROJECT 02",
        title: "Child of Distant Shores",
        body: "围绕气候变化、迁徙与身份关系展开的VR体验。项目从研究、故事设定、视觉开发推进到Unity原型和体验测试，让环境变化通过玩家身体被感知。",
        points: ["气候与迁徙主题研究", "世界观和角色关系", "Unity交互原型", "体验路径与测试反思"],
        image: "/media/cases/selected-vr/02.webp",
        caption: "Child of Distant Shores：研究、叙事与原型",
      },
      {
        label: "PROCESS / 03",
        title: "从研究材料到可进入的场景",
        body: "研究内容不会直接变成说明文字，而是转化为环境尺度、物件、声音和可执行动作。玩家理解主题的过程，也是其逐渐掌握空间的过程。",
        image: "/media/cases/selected-vr/03.webp",
        caption: "场景开发、交互流程与技术实现",
      },
      {
        label: "PROJECT 03",
        title: "Tuber Tough",
        body: "面向伦敦博物馆场景的可移动式多人MR气候教育体验。项目结合实体空间、植物视觉语言与多人协作机制，让教育内容成为共同任务。",
        image: "/media/cases/selected-vr/04.webp",
        caption: "Tuber Tough：多人MR系统与博物馆体验",
      },
      {
        label: "ARCHIVE / 05",
        title: "三个项目，一条持续的问题线索",
        body: "三个项目使用不同的视觉与交互方式，但都在研究同一个问题：当观众能够行动时，故事如何回应身体、空间与选择。",
        image: "/media/cases/selected-vr/05.webp",
        caption: "项目成果与跨媒介视觉档案",
      },
    ],
  },
];

export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  cover: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${project.cover}`,
  sections: project.sections.map((section) => ({
    ...section,
    image: section.image
      ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${section.image}`
      : undefined,
  })),
}));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
