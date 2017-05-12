'use strict';

var _GameConstants = require('./GameConstants.js');

var monsters = [];
// console.log(123);

var roles = [];
var npcs = [];
var items = [];

var monsterAmounts = [];

var GameCounter = {
    monsters: [],
    npcs: [],
    items: []
};

var GameTimer = {
    monsterBorn: [],
    monsterRegain: 0,
    roleRegain: 0,
    npcEmerge: [],
    itemEmerge: []
};

for (var i = 0; i < _GameConstants.MONSTER_LIST.length; i++) {

    GameCounter.monsters[i] = 0;
    GameTimer.monsterBorn[i] = 0;
}

for (var i = 0; i < _GameConstants.NPC_LIST.length; i++) {
    GameCounter.npcs[i] = 0;
    GameTimer.npcEmerge[i] = 0;
}

for (var i = 0; i < _GameConstants.ITEM_LIST.length; i++) {
    GameCounter.items[i] = 0;
    GameTimer.itemEmerge[i] = 0;
}

var gameLoop = function gameLoop() {

    var nowTime = new Date().getDate();

    // Set helper time

    // [怪物出生：缺怪補一]
    for (var _i = 0; _i < _GameConstants.MONSTER_LIST.length; _i++) {

        // 最終BOSS額外判斷
        // if (i == FINAL_BOSS_INDEX) continue;

        // 判定怪物數量，如不足開始設置出生TIME，
        if (GameTimer.monsterBorn[_i] == 0 && GameCounter.monsters[_i] < _GameConstants.MONSTER_LIST[_i].maxAmount) {
            GameTimer.monsterBorn[_i] = nowTime + _GameConstants.MONSTER_LIST[_i].bornDelay;
        }
    }

    // [怪物出生：計時補怪]
    for (var _i2 = 0; _i2 < _GameConstants.MONSTER_LIST.length; _i2++) {

        // 判定Timer
        if (GameTimer.monsterBorn[_i2] > 0 && nowTime > GameTimer.monsterBorn[_i2]) {

            // 重設Timer、增加數量
            GameTimer.monsterBorn[_i2] = 0;
            GameCounter.monsters[_i2] += 1;

            // 新怪物實體物件
            // let newMonster = MonsterHelper.genNewMonster(i);

            // 加入清單
            // monsters.push(newMonster);

            // 遊戲事件
            // GameHelper......
        }
    }

    // [Monster Regain]
    if (nowTime > GameTimer.monsterRegain) {

        // Update Timer
        GameTimer.monsterRegain = nowTime + 1000;

        for (var monster in monsters) {
            // MonsterHelper.lifeRegain(monster);
        }
    }

    // [Player Regain]
    if (nowTime > GameTimer.roleRegain) {

        // Update Timer
        GameTimer.roleRegain = nowTime + 1000;

        for (var role in roles) {
            // RoleHelper.lifeRegain(role)
        }
    }

    // [Item Emerge]
    for (var _i3 = 0; _i3 < _GameConstants.ITEM_LIST.length; _i3++) {
        if (GameTimer.itemEmerge[_i3] == 0 && GameCounter.items[_i3] < _GameConstants.ITEM_LIST[_i3].maxAmount) {
            GameTimer.itemEmerge[_i3] = nowTime + _GameConstants.ITEM_LIST[_i3].interval;
        }
    }

    for (var _i4 = 0; _i4 < _GameConstants.ITEM_LIST.length; _i4++) {
        if (GameTimer.itemEmerge[_i4] > 0 && nowTime > GameTimer.itemEmerge[_i4]) {
            // 重設Timer、增加數量
            GameTimer.itemEmerge[_i4] = 0;
            GameCounter.items[_i4] += 1;

            // 新Item 實體物件
            // let newItem = ItemHelper.getNewItem(i);

            // 加入清單
            // items.push(newItem);

            // 遊戲事件
        }
    }

    // [NPC Emerge]
    for (var _i5 = 0; _i5 < _GameConstants.NPC_LIST.length; _i5++) {
        if (GameTimer.npcEmerge[_i5] == 0 && GameCounter.npcs[_i5] < _GameConstants.NPC_LIST[_i5].maxAmount) {
            GameTimer.npcEmerge[_i5] = nowTime + _GameConstants.NPC_LIST[_i5].interval;
        }
    }

    for (var _i6 = 0; _i6 < _GameConstants.NPC_LIST.length; _i6++) {
        if (GameTimer.npcEmerge[_i6] > 0 && nowTime > GameTimer.npcEmerge[_i6]) {

            // 重設Timer、增加數量
            GameTimer.npcEmerge[_i6] = 0;
            GameCounter.npcs[_i6] += 1;

            // 新NPC實體物件
            // let newNPC = NpcHelper.getNewNpc(i);

            // 加入清單
            // npcs.push(newNPC);

            // 遊戲事件
        }
    }

    // [NPC Vanish]
    for (var npc in npcs) {

        // 檢查 Timer
        if (nowTime > npc.vanishTimer) {

            // 從集合中移除
            // npcs.splice(npcs.indexOf(npc), 1);

            // 減少數量
            GameCounter.npcs[i] -= 1;

            // 遊戲事件
        }
    }
};

function loop() {

    // console.log(new Date().getTime());
    gameLoop();

    setImmediate(loop);
}

loop();