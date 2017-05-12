

// import { MonsterHelper, PlayerHelper } from GameHelper

var monsters = [];
var roles = [];
var npcs = [];
var items = [];

var monsterAmounts = [];

var GameCounter = {
    monsters: [],
    npcs: [],
    items: [],
}

var GameTimer = {
    monsterBorn: [],
    monsterRegain: 0,
    roleRegain: 0,
    npcEmerge: [],
    itemEmerge: [],
}

for (var i = 0; i < MONSTER_LIST.length; i++) {

    GameCounter.monsters[i] = 0;
    GameTimer.monsterBorn[i] = 0;
}

for (var i = 0; i < NPC_LIST.length; i++) {
    GameCounter.npcs[i] = 0;
    GameTimer.npcEmerge[i] = 0;
}

for (var i = 0; i < ITEM_LIST.length; i++) {
    GameCounter.items[i] = 0;
    GameTimer.itemEmerge[i] = 0;
}


var gameLoop = function () {

    let nowTime = new Date().getDate();

    // Set helper time

    // [怪物出生：缺怪補一]
    for (let i = 0; i < MONSTER_LIST.length; i++) {

        // 最終BOSS額外判斷
        if (i == FINAL_BOSS_INDEX) continue;

        // 判定怪物數量，如不足開始設置出生TIME，
        if (GameTimer.monsterBorn[i] == 0 && GameCounter.monsters[i] < MONSTER_LIST[i].maxAmount) {
            GameTimer.monsterBorn[i] = nowTime + MONSTER_LIST[i].bornDelay;
        }
    }


    // [怪物出生：計時補怪]
    for (let i = 0; i < MONSTER_LIST.length; i++) {

        // 判定Timer
        if (GameTimer.monsterBorn[i] > 0 && nowTime > GameTimer.monsterBorn[i]) {

            // 重設Timer、增加數量
            GameTimer.monsterBorn[i] = 0;
            GameCounter.monsters[i] += 1;

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

        for (let monster in monsters) {
            // MonsterHelper.lifeRegain(monster);
        }

    }


    // [Player Regain]
    if (nowTime > GameTimer.roleRegain) {

        // Update Timer
        GameTimer.roleRegain = nowTime + 1000;

        for (let role in roles) {
            // RoleHelper.lifeRegain(role)
        }

    }

    // [Item Emerge]
    for (let i = 0; i < ITEM_LIST.length; i++) {
        if (GameTimer.itemEmerge[i] == 0 && GameCounter.items[i] < ITEM_LIST[i].maxAmount) {
            GameTimer.itemEmerge[i] = nowTime + ITEM_LIST[i].interval;
        }
    }

    for (let i = 0; i < ITEM_LIST.length; i++) {
        if (GameTimer.itemEmerge[i] > 0 && nowTime > GameTimer.itemEmerge[i]) {
            // 重設Timer、增加數量
            GameTimer.itemEmerge[i] = 0;
            GameCounter.items[i] += 1;

            // 新Item 實體物件
            // let newItem = ItemHelper.getNewItem(i);

            // 加入清單
            // items.push(newItem);

            // 遊戲事件
        }
    }


    // [NPC Emerge]
    for (let i = 0; i < NPC_LIST.length; i++) {
        if (GameTimer.npcEmerge[i] == 0 && GameCounter.npcs[i] < NPC_LIST[i].maxAmount) {
            GameTimer.npcEmerge[i] = nowTime + NPC_LIST[i].interval;
        }
    }

    for (let i = 0; i < NPC_LIST.length; i++) {
        if (GameTimer.npcEmerge[i] > 0 && nowTime > GameTimer.npcEmerge[i]) {

            // 重設Timer、增加數量
            GameTimer.npcEmerge[i] = 0;
            GameCounter.npcs[i] += 1;

            // 新NPC實體物件
            // let newNPC = NpcHelper.getNewNpc(i);

            // 加入清單
            // npcs.push(newNPC);

            // 遊戲事件
        }
    }



    // [NPC Vanish]
    for (let npc in npcs) {

        // 檢查 Timer
        if (nowTime > npc.vanishTimer) {

            // 從集合中移除
            // npcs.splice(npcs.indexOf(npc), 1);

            // 減少數量
            GameCounter.npcs[i] -= 1;

            // 遊戲事件
        }
    }

}

function loop() {


    setImmediate(loop);
}

loop();

console.log(123);