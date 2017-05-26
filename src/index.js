
/**
 *  # To-Do:
 *  - 針對 Npc 實體 產生Timer，時間到消失 (或針對Npc消失機制產生Timer，時間到統一)
 *  - 針對 Role Monster實體的恢復產生Countr (或針對恢復機制產生Timer，時間到統一恢復)
 *  - 設計一個介面，讓Web Server可以操作
 */

import { GameWorldConfig, RoleConfig, MonsterConfig, NpcConfig, ItemConfig } from './GameConfig.js'
import { MONSTERS, NPCS, ITEMS } from './GameConfig.js'
import { GameHelper, GameInstance } from './GameHelper.js'
import { GameTimerManager, GameTimer } from './GameTimer.js'
import { GameCounterManager, CounterInterface } from './GameCounter.js'


const gcm = new GameCounterManager();
const gtm = new GameTimerManager();

// Data
const GameData = {
    monsters: [],
    roles: [],
    npcs: [],
    items: [],
}

// Counters
const GameCounters = {
    monsterAdd: [],
    npcAdd: [],
    itemAdd: [],
}

// Timers
const GameTimers = {
    monsterRegain: null,
    roleRegain: null,
    npcVanish: [],
}

function setup() {

    // 從Constant 抓資料， 建立 Monster, Npc, Item的產生Countr 

    // 建立 Monster Born Counter
    for (let i = 0; i < MONSTERS.length; i++) {
        let counter = new CounterInterface(MONSTERS[i].maxAmount, MONSTERS[i].interval);
        counter.onAdd(() => {
            counter.addCount(1);
            // Generate Monster
            // Append to GameData
            // View Event
            console.log('[Counter] Add Monster -', MONSTERS[i].name, ' :', counter.count);
        });
        counter.onArrive(() => { });
        gcm.register(counter);
        GameCounters.monsterAdd.push(counter);
    }

    // 建立 Npc Emerge Counter
    for (let i = 0; i < NPCS.length; i++) {
        let counter = new CounterInterface(NPCS[i].maxAmount, NPCS[i].interval);
        counter.onAdd(() => {
            counter.addCount(1);
            // Generate Npc
            // Append to GameData
            // View Event
            console.log('[Counter] Add Npc - ', NPCS[i].name, ' :', counter.count);
        });
        counter.onArrive(() => { });
        gcm.register(counter);
        GameCounters.npcAdd.push(counter);
    }

    // 建立 Item Emerge Counter
    for (let i = 0; i < ITEMS.length; i++) {
        let counter = new CounterInterface(ITEMS[i].maxAmount, ITEMS[i].interval);
        counter.onAdd(() => {
            counter.addCount(1);
            // Generate Item
            // Append to GameData
            // View Event
            console.log('[Counter] Add Item - ', ITEMS[i].name, ' :', counter.count);
        });
        counter.onArrive(() => { });
        gcm.register(counter);
        GameCounters.itemAdd.push(counter);
    }

    // Role Regain Timer
    let roleRegainTimer = new GameTimer(0, 1000);
    roleRegainTimer.onTime(() => {
        console.log('[Timer] Role Regain');
        for (let index in GameData.roles) {
            let role = GameData.roles[index];
            // GameHelper: Role Regain
        }
    });
    gtm.register(roleRegainTimer);
    GameTimers.roleRegain = roleRegainTimer;

    // Monster Regain Timer
    let monsterRegainTimer = new GameTimer(0, 1000);
    monsterRegainTimer.onTime(() => {
        console.log('[Timer] Monster Regain');
        for (let index in GameData.monsters) {
            let monster = GameData.monsters[index];
            // GameHelper: Monsters Regain
        }
    });
    gtm.register(monsterRegainTimer);
    GameTimers.monsterRegain = monsterRegainTimer;

    // Npc Vanish Timer
    // let npcVanishTimer = new GameTimer(0, 1000);
    // npcVanishTimer.onTime(() => {
    //     console.log('[Timer] Npc Vanish');
    //     for (let index in GameData.npcs) {
    //         let npc = GameData.npcs[index];
    //         if (nowTime >= npc.vanishTime) {

    //             // decrease Count
    //             // Remove from GameData
    //             // View Event
    //         }
    //     }
    // });

}

function loop() {

    // NowTime
    let nowTime = new Date().getTime();
    // console.log(nowTime);

    // Update helper timer

    // GameCountersManager Loop
    gcm.loop(nowTime);

    // GameTimerManager Loop
    gtm.loop(nowTime);


    setImmediate(loop);
}


setup();
loop();

