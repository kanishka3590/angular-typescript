class Heros{
    name : string;
    type : string;
    gender : string;

    actionHero() : void {
        console.log(`Hero Details : 
        ${this.name} is a ${this.type} type hero. Gender is ${hero.gender} 
        Now Show us some Action.`);
        
    }
    comedyHero() : void{
        console.log(`Hero Details : 
        ${this.name} is a ${this.type} type hero. Gender is ${hero.gender}
        Now Comedy Show is going to start. `);
    }
    dramaHero() : void{
        console.log(`Hero Details : 
        ${this.name} is a ${this.type} type hero. Gender is ${hero.gender}
        Drama Can Be created anywhere anytime. `);
    }
}
let hero = new Heros();
hero.name = "shahrukh";
hero.type = "drama";
hero.gender = "male";
if(hero.type=="drama")
    hero.dramaHero();
else if(hero.type=="comedy")
    hero.comedyHero();
else
    hero.actionHero();

    class Animal{
        name : string;
        type : string;
        gender : string;
    
        Parazoa() : void {
            console.log(`Animal Details : 
            ${this.name} is a ${this.type} type animal. Gender is ${hero.gender} 
            cellular level of organization`);
            
        }
        Radiata() : void{
            console.log(`Animal Details : 
            ${this.name} is a ${this.type} type Animal. Gender is ${hero.gender}
            tissue level of organization `);
        }
        Bilateria() : void{
            console.log(`Animal Details : 
            ${this.name} is a ${this.type} type animal. Gender is ${hero.gender}
            organ level of organization`);
        }
    }
    let animal = new Animal();
    animal.name = "XYZ";
    animal.type = "Bilateria";
    animal.gender = "male";
    if(animal.type=="Parazoa")
        animal.Parazoa();
    else if(animal.type=="Radiata")
        animal.Radiata();
    else
        animal.Bilateria();

