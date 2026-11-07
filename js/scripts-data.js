// 后期扩展：把这里换成 fetch('/api/scripts') 即可接后台
const SCRIPTS = [
  {
    id: "glass-house",
    title: "档案：玻璃屋",
    type: "推理",
    players: "6-7人",
    duration: "4小时",
    difficulty: "进阶",
    cityLimited: false,
    cover: "images/glass-house.jpg",
    description: "推理悬疑本，适合喜欢逻辑推演的玩家。",
    featured: false
  },
  {
    id: "sunce",
    title: "孙策",
    type: "情感",
    players: "4女3男",
    duration: "6-7小时",
    difficulty: "进阶",
    cityLimited: true,
    cover: "images/sunce.jpg",
    description: "“孙家儿郎，誓死不降，宁死沙场，不死温床”。",
    featured: true
  },
  {
    id: "liumang",
    title: "流氓叙事",
    type: "情感",
    players: "3女3男/4女2男",
    duration: "9-10小时",
    difficulty: "进阶",
    cityLimited: true,
    cover: "images/liumang.jpg",
    description: "现代架空、情感复仇、智性恋/全员恶人向",
    featured: true
  },
   {
    id: "chongshan",
    title: "崇山乐园",
    type: "恐怖",
    players: "7人",
    duration: "6-7小时",
    difficulty: "进阶",
    cityLimited: true,
    cover: "images/chongshan.jpg",
    description: "围绕崇山乐园开园测试、铃兰女校及马戏团等事件展开，充满诡异氛围与惊悚环节",
    featured: true
  },
   {
    id: "shengluxia",
    title: "圣露西娅",
    type: "恐怖",
    players: "6人",
    duration: "6-7小时",
    difficulty: "新手友好",
    cityLimited: true,
    cover: "images/shengluxia.jpg",
    description: "围绕头顶蜡燭的露西婭女神、身穿白袍的少年们以及颂歌展开，表象下暗流涌动",
    featured: true
  },
];
