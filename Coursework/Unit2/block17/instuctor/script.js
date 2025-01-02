class Fruit {
    // these are properties
    color;
    name;
    freshness = 5;

    // this is the behavior (behavior = constructor)
    constructor (name, color){
        this.name = name;
        this.color = color;
    }
    // this is a method
    ripen(){
        this.freshness - 1;
    }
}

// extends builds off of another classes properties
class ExoticFruit extends Fruit {
    country;
    constructor (name, color, country){ // constructor still needs to be built again because it is still a needs to call back to what you are adding in
        super(name, color)// using super makes it so that you do not need to reuse from the class that you extended off of
        this.country = country;
    }
}

// new is neccessary to tell it that what you are adding 
const banana = new Fruit("banana", "yellow");
banana.ripen();

const apple = new Fruit("apple", "red");
apple.ripen();

const durian = new ExoticFruit("durian", "green", "Thailand")
durian.ripen(); // this will still work since we extended off of original class