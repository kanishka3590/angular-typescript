var Heros = /** @class */ (function () {
    function Heros() {
    }
    Heros.prototype.actionHero = function () {
        console.log("Hero Details : \n        " + this.name + " is a " + this.type + " type hero. Gender is " + hero.gender + " \n        Now Show us some Action.");
    };
    Heros.prototype.comedyHero = function () {
        console.log("Hero Details : \n        " + this.name + " is a " + this.type + " type hero. Gender is " + hero.gender + "\n        Now Comedy Show is going to start. ");
    };
    Heros.prototype.dramaHero = function () {
        console.log("Hero Details : \n        " + this.name + " is a " + this.type + " type hero. Gender is " + hero.gender + "\n        Drama Can Be created anywhere anytime. ");
    };
    return Heros;
}());
var hero = new Heros();
hero.name = "shahrukh";
hero.type = "drama";
hero.gender = "male";
if (hero.type == "drama")
    hero.dramaHero();
else if (hero.type == "comedy")
    hero.comedyHero();
else
    hero.actionHero();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.Parazoa = function () {
        console.log("Animal Details : \n            " + this.name + " is a " + this.type + " type animal. Gender is " + hero.gender + " \n            cellular level of organization");
    };
    Animal.prototype.Radiata = function () {
        console.log("Animal Details : \n            " + this.name + " is a " + this.type + " type Animal. Gender is " + hero.gender + "\n            tissue level of organization ");
    };
    Animal.prototype.Bilateria = function () {
        console.log("Animal Details : \n            " + this.name + " is a " + this.type + " type animal. Gender is " + hero.gender + "\n            organ level of organization");
    };
    return Animal;
}());
var animal = new Animal();
animal.name = "XYZ";
animal.type = "Bilateria";
animal.gender = "male";
if (animal.type == "Parazoa")
    animal.Parazoa();
else if (animal.type == "Radiata")
    animal.Radiata();
else
    animal.Bilateria();
