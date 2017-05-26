

const GameWorldConfig = {
    // 遊戲世界SIZE
    WORLD_WIDTH: 65,
    WORLD_HEIGHT: 50,
    // 經驗、金錢加成
    EXP_BASE: 1.0,
    MONEY_BASE: 1.0
}

const RoleConfig = {
    // 等級上限(0基)
    MAX_LEVEL: 39,
    MAX_WEAPON: 39,
    MAX_EQUIPMENT: 39,
    // 角色死亡逞罰
    DEAD_PUNISHMENT_LEVEL: 1,
    DEAD_PUNISHMENT_EXP: 0,
    DEAD_PUNISHMENT_MONEY: 0,
    // 角色生命、體力恢復
    LIFE_REGAIN: 0.12,
    ENERGY_REGAINL: 0.05,
    // 動作消耗體力
    REGAIN_COST: 13,
    MOVE_COST: 4,
    ATK_COST: 8,
    PICK_COST: 6,
    TALK_COST: 8,
    // 動作休息時間
    REGAIN_REST: 3000,
    MOVE_REST: 500,
    ATK_REST: 1000,
    PICK_REST: 1500,
    TALK_REST: 1000,
}

// 成就相關參數
const AchievemnetConfig = {
    // 角色生命、體力恢復
    LIFE_REGAIN_ADD: 0.08,
    ENERGY_REGAINL_ADD: 0.03,
    // HelloBuff
    HELLO_LIFE_: 50,
    HELLO_ATK: 5,
    SUPER_HELLO_LIFE: 500,
    SUPER_HELLO_ATK: 50,
    // 角色經驗、金錢成就加成
    EXP_ADD: 0.30,
    MONEY_ADD: 0.30,
    // 動作休息時間
    REST_REDUCE: 0.5,
    // 傷害減免
    INJURE_REDUCE: 0.20,
    // 提前傷害
    PRE_DAMAGE: 0.20,
    // 削血 2%當前生命
    // 吸血 20%造成傷害
    // VIP 商店打折
    VIP_DISCOUNT: 0.60,
}

const MonsterConfig = {
    // 怪物生命恢復
    LIFE_REGAIN_NORMAL: 0.05,
    LIFE_REGAIN_BATTLE: 0.01,
}

const NpcConfig = {
    // 商人出現
    // 普通商人 1~30等 1格硬幣
    // 高級商人 20~39等 2格硬幣
    // 神秘商人 30~40等 + 成就 3格硬幣
    // 成就幸運
    // 普通(25~30)
    // 高級(36~39)
    // 神秘(37~40)
}

const ItemConfig = {
}

// 成就清單
const ACHIEVEMENT_LIST = [

]





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

// NPC種類
// const NPC_KINDS = {
//     TRADER_NORMAL: 1,
//     TRADER_ADVANCED: 2,
//     TRADER_MYSTERY: 3,
// }



// MONSTERS
const MONSTERS = [
    { name: '怪1', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 5, interval: 1000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '怪2', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 5, interval: 2000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '怪3', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 5, interval: 3000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '怪4', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 4, interval: 4000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '怪5', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 4, interval: 5000, bornPosition: { x: 0, y: 0 }, ability: [] },
    { name: '怪6', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 3, interval: 10000, bornPosition: { x: 0, y: 0 }, ability: [] },
];

// NPCS
const NPCS = [
    { name: '普通商人', maxAmount: 10, emergeDuration: 230000, interval: 5000 },
    { name: '高級商人', maxAmount: 6, emergeDuration: 110000, interval: 8000 },
    { name: '神秘商人', maxAmount: 2, emergeDuration: 60000, interval: 21000 },
]

// ITEMS
const ITEMS = [
    { name: '一個金幣', maxAmount: 8, interval: 2600 },
    { name: '一把金幣', maxAmount: 4, interval: 5300 },
    { name: '一袋金幣', maxAmount: 2, interval: 11500 },
    { name: '一個繃帶', maxAmount: 8, interval: 2500 },
    { name: '一堆繃帶', maxAmount: 4, interval: 5200 },
    { name: '一箱繃帶', maxAmount: 2, interval: 11000 },
    { name: '一片餅乾', maxAmount: 8, interval: 2500 },
    { name: '一包餅乾', maxAmount: 4, interval: 5200 },
    { name: '一箱餅乾', maxAmount: 2, interval: 11000 },
]

// ROLE_LEVELS
const ROLE_LEVELS = [

]

// WEAPONS
const WEAPONS = [
    { name: '', atk: 0, },
    { name: '', atk: 0, },
]

// EQUIPMENTS
const EQUIPMENTS = [
    { name: '', def: 0, },
    { name: '', def: 0, },
]




export { GameWorldConfig, RoleConfig, MonsterConfig, NpcConfig, ItemConfig }
export { MONSTERS, NPCS, ITEMS }