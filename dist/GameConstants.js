'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

// 遊戲世界SIZE
var GAME_WIDTH = 65;
var GAME_HEIGHT = 50;

// 怪物出生

// 商人出現
// 各商人價格範圍
// 各商人品質基準
// 

// 地板道具出現
// 數量，質量

// 經驗、金錢加成
var EXP_BASE = 1.0;
var MONEY_BASE = 1.0;

// 角色死亡逞罰
var ROLE_DEAD_PUNISHMENT_LEVEL = 1;
var ROLE_DEAD_PUNISHMENT_EXP = 0;
var ROLE_DEAD_PUNISHMENT_MONEY = 0;

// 角色生命、體力恢復
var ROLE_LIFE_REGAIN_NORMAL = 0.12;
var ROLE_ENERGY_REGAIN_NORMAL = 0.03;

// 怪物生命恢復
var MONSTER_LIFE_REGAIN_NORMAL = 0.05;
var MONSTER_LIFE_REGAIN_BATTLE = 0.01;

// 怪物種類
var MONSTER_KINDS = {
    KIND1: 1,
    KIND2: 2,
    KIND3: 3,
    KIND4: 4,
    KIND5: 5,
    KIND6: 6,
    KIND7: 7
};

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
var MONSTER_LIST = [{ name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 0, bornDelay: 0, bornPosition: { x: 0, y: 0 }, ability: [] }, { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 0, bornDelay: 0, bornPosition: { x: 0, y: 0 }, ability: [] }, { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 0, bornDelay: 0, bornPosition: { x: 0, y: 0 }, ability: [] }, { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 0, bornDelay: 0, bornPosition: { x: 0, y: 0 }, ability: [] }, { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 0, bornDelay: 0, bornPosition: { x: 0, y: 0 }, ability: [] }, { name: '平衡', level: 0, maxLife: 0, atk: 0, money: 0, maxAmount: 0, bornDelay: 0, bornPosition: { x: 0, y: 0 }, ability: [] }];

// 怪物數量
// 上限
// 個別

// 成就清單
var ACHIEVEMENT_LIST = [];

// 成就相關參數
var ACHIEVEMENT_PARAM = {};

// NPC種類
// const NPC_KINDS = {
//     TRADER_NORMAL: 1,
//     TRADER_ADVANCED: 2,
//     TRADER_MYSTERY: 3,
// }

// NPC清單
var NPC_LIST = [{ name: '普通商人', maxAmount: 0, emergeDuration: 0, interval: 0 }, { name: '高級商人', maxAmount: 0, emergeDuration: 0, interval: 0 }, { name: '神秘商人', maxAmount: 0, emergeDuration: 0, interval: 0 }];

// NPC數量，個別，上限...
var ITEM_LIST = [{ name: '一個金幣', maxAmount: 0, interval: 0 }, { name: '一把金幣', maxAmount: 0, interval: 0 }, { name: '一袋金幣', maxAmount: 0, interval: 0 }];

// 武器裝備...


exports.MONSTER_LIST = MONSTER_LIST;
exports.NPC_LIST = NPC_LIST;
exports.ITEM_LIST = ITEM_LIST;