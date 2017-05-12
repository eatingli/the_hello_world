
import { MONSTER_LIST, NPC_LIST, ITEM_LIST } from './GameConstants.js'
import { GameCounterManager, CounterInterface } from './GameCounter.js'

// Data
const GameData = {
    monsters: [],
    roles: [],
    npcs: [],
    items: [],
}

const GameCounter = {
    monsters: [],
    npcs: [],
    items: [],
}

const GameTimer = {
    monsterBorn: [],
    monsterRegain: 0,
    roleRegain: 0,
    npcEmerge: [],
    itemEmerge: [],
}

// init
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

const gcm = new GameCounterManager();

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
        });
        counter.onArrive(() => { });
        gcm.register(counter);
    }

    // 建立 Npc Emerge Counter
    for (let i = 0; i < NPC_LIST.length; i++) {
        let counter = new CounterInterface(NPC_LIST[i].maxAmount, NPC_LIST[i].interval);
        counter.onAdd(() => {
            counter.addCount(1);
            // Generate Npc
            // Append to GameData
            // View Event
        });
        counter.onArrive(() => { });
        gcm.register(counter);
    }

    // 建立 Item Emerge Counter
    for (let i = 0; i < ITEM_LIST.length; i++) {
        let counter = new CounterInterface(ITEM_LIST[i].maxAmount, ITEM_LIST[i].interval);
        counter.onAdd(() => {
            counter.addCount(1);
            // Generate Item
            // Append to GameData
            // View Event
            console.log('Add!');
        });
        counter.onArrive(() => { 
            console.log('arrived!');
        });
        gcm.register(counter);
    }

    // 針對 Npc 實體 產生Timer，時間到消失 (或針對Npc消失機制產生Timer，時間到統一)
    // 針對 Role Monster實體的恢復產生Countr (或針對恢復機制產生Timer，時間到統一恢復)
}

function loop() {

    // NowTime
    let nowTime = new Date().getTime();
    // console.log(nowTime);

    gcm.loop(nowTime);

    // console.log(GameCounter);
    // console.log(GameTimer);

    // Update helper timer




    // gameLoop(nowTime);

    setImmediate(loop);
}

setup();
loop();

