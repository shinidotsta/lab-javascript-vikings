// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {

        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
    }
}
// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack() {

        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0) {
            return this.name + " has received " + theDamage + " points of damage"
        }
        if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}
// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }
    attack() {

        return this.strength = this.strength;
    }

    receiveDamage(theDamage) {
        this.health = this.health - theDamage;
        if (this.health > 0) {
            return "A Saxon has received " + theDamage + " points of damage"
        }
        if (this.health <= 0) {
            return "A Saxon has died in combat"
        }
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }

    vikingAttack() {
        let result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        this.saxonArmy.pop();
        return result;
    }

    saxonAttack() {
        if (this.vikingArmy.length > 0) {
            let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
            this.vikingArmy.pop();
            return result;
        }
    }

    showStatus() {
        if (this.saxonArmy.length == 0)
            return `Vikings have won the war of the century!`
        if (this.vikingArmy.length == 0)
            return `Saxons have fought for their lives and survived another day...`
        else
            return `Vikings and Saxons are still in the thick of battle.`

    }
}