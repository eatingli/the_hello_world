
// 遊戲世界SIZE
const GAME_WIDTH = 65;
const GAME_HEIGHT = 50;

// 怪物出生

// 商人出現
// 各商人價格範圍
// 各商人品質基準
// 

// 地板道具出現
// 數量，質量

// 經驗、金錢加成
const EXP_BASE = 1.0;
const MONEY_BASE = 1.0;

// 角色死亡逞罰
const ROLE_DEAD_PUNISHMENT_LEVEL = 1;
const ROLE_DEAD_PUNISHMENT_EXP = 0;
const ROLE_DEAD_PUNISHMENT_MONEY = 0;


// 角色生命、體力恢復
const ROLE_LIFE_REGAIN_NORMAL = 0.12;
const ROLE_ENERGY_REGAIN_NORMAL = 0.03;

// 怪物生命恢復
const MONSTER_LIFE_REGAIN_NORMAL = 0.05;
const MONSTER_LIFE_REGAIN_BATTLE = 0.01;

// // 怪物種類
// const MONSTER_KINDS = {
//     KIND1: 1,
//     KIND2: 2,
//     KIND3: 3,
//     KIND4: 4,
//     KIND5: 5,
//     KIND6: 6,
//     KIND7: 7,
// }

// 怪物能力
// const MONSTER_ABILITY = {
//     KIND1: 1,
//     KIND2: 2,
//     KIND3: 3,
//     KIND4: 4,
//     KIND5: 5,
//     KIND6: 6,
//     KIND7: 7,
// }

// 怪物清單: 平衡 高攻 高防 破防 連擊 反射
const MONSTER_LIST = [
    { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 5, bornDelay: 3000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 5, bornDelay: 3000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 5, bornDelay: 3000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 4, bornDelay: 3000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 4, bornDelay: 3000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 3, bornDelay: 3000, bornPosition: { x: 0, y: 0 }, ability: [] },
];

// 怪物數量
// 上限
// 個別

// 成就清單
const ACHIEVEMENT_LIST = [

]

// 成就相關參數
const ACHIEVEMENT_PARAM = {

}

// NPC種類
// const NPC_KINDS = {
//     TRADER_NORMAL: 1,
//     TRADER_ADVANCED: 2,
//     TRADER_MYSTERY: 3,
// }

// NPC清單
const NPC_LIST = [
    { name: '普通商人', maxAmount: 5, emergeDuration: 2500, interval: 2500 },
    { name: '高級商人', maxAmount: 4, emergeDuration: 2500, interval: 2500 },
    { name: '神秘商人', maxAmount: 3, emergeDuration: 2500, interval: 2500 },
]

// NPC數量，個別，上限...
const ITEM_LIST = [
    { name: '一個金幣', maxAmount: 5, interval: 1500 },
    { name: '一把金幣', maxAmount: 4, interval: 2000 },
    { name: '一袋金幣', maxAmount: 3, interval: 2500 },
]


// 武器裝備...



export {MONSTER_LIST, NPC_LIST, ITEM_LIST}