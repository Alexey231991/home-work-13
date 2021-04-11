// ЮНИТЫ

function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function (distance) {
    return distance <= this.maxDistance;
};

Unit.prototype.isReadyToFight = function () {
    return this.health > this.maxHealth / 3;
};

Unit.prototype.restore = function () {
    if (this.health < this.maxHealth) {
        this.health = this.maxHealth;
    }
};

Unit.prototype.clone = function () {
    return Object.assign({}, this);
};


// АРМИЯ

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove = function (distance) {
    return this.units.every(unit => unit.isReadyToMove(distance));
};

Army.prototype.isReadyToFight = function () {
    return this.units.every(unit => unit.isReadyToFight());
};

Army.prototype.restore = function () {
    this.units.forEach(unit => unit.restore());
};

Army.prototype.getReadyToMoveUnits = function (distance) {
    return this.units.filter(unit => unit.isReadyToMove(distance));
};

Army.prototype.combineUnits = function (newUnits) {
    this.units.push(...newUnits);
}; 

Army.prototype.cloneUnit = function (unitIndex) {
    if (unitIndex > this.units.length - 1 || unitIndex < 0) {
        console.error("wrong index");
        return null;
    }
    return this.units.find( function (item, index) {
        return index === unitIndex;
    });
};

let infantryman = new Unit("infantryman", 200, 200, 500);
let paratrooper = new Unit("paratrooper", 100, 100, 300);
let soldier = new Unit("soldier", 90, 90, 100);
let specialForces = new Unit("specialForces", 60, 60, 360);


// Животное -> Млекопитающее -> Енот


function Animal(sex) {
    this.sex = sex;
}

Animal.prototype.run = function () {
    console.log("Running");
};

Animal.prototype.jump = function () {
    console.log("Jumping");
};

function Mammal(sex) {
    Animal.call(this, sex);
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.givesMilk = function () {
    this.sex === "male" 
        if (this.sex === "male") {
            console.log("Gives no milk");
        } else if(this.sex === "asexual") {
            console.log("Gives no milk");
        } else {
            console.log("Gives milk");
        }
            
};

function Raccoon(sex) {
    Mammal.call(this, sex);
}

Raccoon.prototype = Object.create(Mammal.prototype);
Raccoon.prototype.constructor = Raccoon;

Raccoon.prototype.stealing = function () {
    console.log("Raccoon stole your food!");
};

let enot = new Raccoon("male");
let enotiha = new Raccoon("female");

