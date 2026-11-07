// 后期扩展：把这里换成 fetch('/api/scripts') 即可接后台
const SCRIPTS = [
  {
    id: "glass-house",
    title: "档案：玻璃屋",
    type: "推理悬疑",
    players: "5-6人",
    duration: "4小时",
    difficulty: "进阶",
    cityLimited: false,
    cover: "images/glass-house.jpg",
    description: "推理悬疑本，适合喜欢逻辑推演的玩家。",
    featured: true
  },
  {
    id: "ancient-1",
    title: "古装示例本",
    type: "古装",
    players: "6人",
    duration: "4-5小时",
    difficulty: "新手友好",
    cityLimited: true,
    cover: "images/ancient.jpg",
    description: "含汉服体验的古装剧本。",
    featured: true
  }
];