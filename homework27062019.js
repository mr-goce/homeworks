function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function orcVsHuman() {
    orcHP = 500;
    orcDamage = getRandomNumber(23, 35);
    orcArmor = 5;
    humanHP = 550;
    humanDamage = getRandomNumber(18, 27);
    humanArmor = 9;
    while (orcHP > 0 || humanHP > 0) {
        orcHP = orcHP - humanDamage + orcArmor;
        humanHP = humanHP - orcDamage + humanArmor;
    }
    if (orcHP > humanHP) {
        console.log("the winner is ORC");

    }
    else {
        console.log("the winner is Human")
    }
}
orcVsHuman();



function fuel(km) {

    var potrosnja = 7 / 100;
    var spentFuel = 0;

    for (var i = 0; i < km; i++) {
        spentFuel = spentFuel + potrosnja;

    }
    console.log(spentFuel);
}
fuel(43);

function War(energy, armor, damage) {
    this.energy = energy;
    this.armor = armor;
    this.damage = damage;
    this.fight = function () {


    }
}
var orc = new War(720, 5, getRandomNumber(23, 35));
var human = new War(550, 9, getRandomNumber(18, 27));
while (orc.energy > 0 || human.energy > 0) {
    orc.energy = orc.energy - humanDamage + orcArmor;
    human.energy = human.energy - orc.damage + humanArmor;
}
if (orc.energy > human.energy) {
    console.log('Orc is the winner');
} else {
    console.log('human is the winner');
}