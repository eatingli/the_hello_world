
class PositionHelper {

    // 隨機座標
    randomPosition() {
        return { x: 0, y: 0 }
    }
}

class MonsterInstance {

    constructor(kind) {
        this.kind = kind;
        this.life = 0;
        this.battleStateTimer = 0;
        this.position = null;
    }

}

// MONSTER_LIFE_REGAIN_NORMAL, MONSTER_LIFE_REGAIN_BATTLE
// MONSTER_LIST
class MonsterHelper {

    constructor() {
        this.nowTime = 0;
    }

    // 怪物出生
    // 計算怪物出生座標
    // 產生怪物實體物件
    genNewMonster(kind) {
        return new MonsterInstance();
    }


    // 計算怪物給予的經驗獎勵
    // 計算怪物給予的金錢獎勵
    // 計算怪物給予的成就

    // 怪物生命恢復
    // 每秒一次，統一恢復

    lifeRegain(monster) {

        // max
        let maxLife = MONSTER_LIST[monster.kind].maxLife;

        // 判定戰鬥狀態決定恢復量
        monster.life += maxLife * (this.nowTime > monster.battleStateTimer ? MONSTER_LIFE_REGAIN_NORMAL : MONSTER_LIFE_REGAIN_BATTLE);

        // 檢查上限
        if (monster.life > maxLife)
            monster.life = maxLife;
    }

}


class RoleInstance {

    constructor() {
        this.position = position;
        this.level = 1;
        this.exp = 0;
        this.weapon = 1;
        this.equipment = 1;
        this.achievement = [];
        this.life = this.getMaxLife();
        this.energy = this.getMaxEnergy();
        this.money = 0;
    }

    getMaxLife() {

    }

    getMaxEnergy() {

    }

}

// ROLE_LIFE_REGAIN_NORMAL, ROLE_ENERGY_REGAIN_NORMAL
class RoleHelper {

    constructor() {
        this.nowTime = 0;
    }

    // 新角色物件
    getNewRole() {
        return new RoleInstance();
    }

    // 玩家Action合理

    // 玩家恢復
    roleRegain(role) {

        // max
        let maxLife = role.getMaxLife();
        let maxEnergy = role.getMaxEnergy();

        // 計算能量恢復量，並檢查上限
        role.energy += maxEnergy * ROLE_ENERGY_REGAIN_NORMAL;
        if (role.energy > maxEnergy) {
            role.energy = maxEnergy;
        }

        // // 計算生命恢復量，並檢查上限
        // role.life += maxLife * ROLE_LIFE_REGAIN_NORMAL;
        // if (role.life > maxLife) {
        //     role.life = maxLife;
        // }
    }

    // 計算增加後的經驗
    // 計算升等


    // 判定金錢足夠
    // 判定消耗後的餘額

}


class NpcInstance {
    constructor(kind) {
        this.kind = kind;
        this.position = null;
    }
}

class NpcHelper {
    constructor() {
        this.vanishTimer = 0;
    }

    getNewNpc() {
        
    }
}