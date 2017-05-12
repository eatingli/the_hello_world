
/**
 *  # To-Do:
 *  - 針對 Npc 實體 產生Timer，時間到消失 (或針對Npc消失機制產生Timer，時間到統一)
 *  - 針對 Role Monster實體的恢復產生Countr (或針對恢復機制產生Timer，時間到統一恢復)
 *  - 其他地方可能會需要Counter的參照，例如玩家控制的狀況...，該如何提供？
 *  - 設計一個介面，讓Web Server可以操作
 *  - Interface的疑問，多型？
 *  - 設計Game Helper
 */

import { MONSTER_LIST, NPC_LIST, ITEM_LIST } from './GameConfig.js'
import {GameHelper, GameInstance} from './GameHelper.js'
import { GameCounterManager, CounterInterface } from './GameCounter.js'

const gcm = new GameCounterManager();

// Data
const GameData = {
    monsters: [],
    roles: [],
    npcs: [],
    items: [],
}

const GameCounter = {
    monsterAdd: [],
    npcAdd: [],
    itemAdd: [],
}

const GameTimer = {
    monsterRegain: 0,
    roleRegain: 0,
}

function setup() {

    // 從Constant 抓資料， 建立 Monster, Npc, Item的產生Countr 

    // 建立 Monster Born Counter
    for (let i = 0; i < MONSTER_LIST.length; i++) {
        let counter = new CounterInterface(MONSTER_LIST[i].maxAmount, MONSTER_LIST[i].interval);
        counter.onAdd(() => {
            counter.addCount(1);
            // Generate Monster
            // Append to GameData
            // View Event
            console.log('Add Monster! Kind:', i, ' Count:', counter.count);
        });
        counter.onArrive(() => { });
        gcm.register(counter);
        GameCounter.monsterAdd.push(counter);
    }

    // 建立 Npc Emerge Counter
    for (let i = 0; i < NPC_LIST.length; i++) {
        let counter = new CounterInterface(NPC_LIST[i].maxAmount, NPC_LIST[i].interval);
        counter.onAdd(() => {
            counter.addCount(1);
            // Generate Npc
            // Append to GameData
            // View Event
            console.log('Add Npc! Kind:', i, ' Count:', counter.count);
        });
        counter.onArrive(() => { });
        gcm.register(counter);
        GameCounter.npcAdd.push(counter);
    }

    // 建立 Item Emerge Counter
    for (let i = 0; i < ITEM_LIST.length; i++) {
        let counter = new CounterInterface(ITEM_LIST[i].maxAmount, ITEM_LIST[i].interval);
        counter.onAdd(() => {
            counter.addCount(1);
            // Generate Item
            // Append to GameData
            // View Event
            console.log('Add Item! Kind:', i, ' Count:', counter.count);
        });
        counter.onArrive(() => { });
        gcm.register(counter);
        GameCounter.itemAdd.push(counter);
    }
}

function loop() {

    // NowTime
    let nowTime = new Date().getTime();
    // console.log(nowTime);

    // Update helper timer

    // GameCounterManager
    gcm.loop(nowTime);

    // Npc Vanish Timer
    for (let index in GameData.npcs) {
        let npc = GameData.npcs[index];
        if (nowTime >= npc.vanishTime) {
            console.log('Npc Vanish');
            // decrease Count
            // Remove from GameData
            // View Event
        }
    }

    // Role Regain Timer
    if (nowTime >= GameTimer.roleRegain) {
        for (let index in GameData.roles) {
            let role = GameData.roles[index];
            console.log('Role Regain');
            // GameHelper: Role Regain
            //Update Timer
            GameTimer.roleRegain = nowTime + 999;
        }
    }

    // Monster Regain Timer
    if (nowTime >= GameTimer.monsterRegain) {
        for (let index in GameData.roles) {
            let role = GameData.roles[index];
            console.log('Role Regain');
            // GameHelper: Role Regain
            //Update Timer
            GameTimer.monsterRegain = nowTime + 999;
        }
    }



    setImmediate(loop);
}


setup();
loop();

