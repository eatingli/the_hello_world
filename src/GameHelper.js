
import { MONSTER_LIST, NPC_LIST, ITEM_LIST } from './GameConfig.js'

class Role {

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
        // 裝備決定
    }

    getMaxEnergy() {
        // 等級決定
    }

}

class Monster {

    constructor(kind) {
        this.kind = kind;
        this.life = 0;
        this.battleStateTimer = 0;
        this.position = null;
    }

}

class GameHelper {

    static getNewRole() {

    }

    static getNewMonster(kind) {

    }


}


const GameInstance = {
    Role: Role,
    Monster: Monster,
}

export { GameHelper, GameInstance }