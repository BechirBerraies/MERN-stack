

class Ninja {
    constructor(name,health=0,speed=3,strength=3){
        this.name= name;
        this.health = health;
        this.speed = speed;
        this.strength = strength ; 
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.health , this.speed, this.strength);
    }
    drinksake(){
        this.health += 10 
        console.log(`Your health is now ${this.health} hp`);
    }
}


class Sensei extends Ninja{
    constructor (name,health=200,speed=10,strength=10,wisdom){
        super(name,health,speed,strength)
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinksake()
    }
}





const ninja1 = new Ninja("Hyabusa");
const sensei1= new Sensei("Myname")

// ninja1.sayName();
// ninja1.showStats();

sensei1.speakWisdom();



