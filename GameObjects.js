

class Monster {

    constructor(kind, level) {
        this.kind = kind;
        this.level = level;
        this.life = this.getMaxLife();
        this.battleTimer = 0;
    }

    getMaxLife() {

    }
    
    getAtkValue(){

    }

    getDefValue(){

    }
}

class Role {

    constructor() {
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

    getAtkValue(){

    }

    getDefValue(){

    }
    
}