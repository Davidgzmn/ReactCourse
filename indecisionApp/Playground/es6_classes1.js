class Person{
    constructor(name,age){
        this.name = name || "Anonymous"; //function default
        this.age = age || 0;
    }
    getGreeting(){
        return `Hi. I am ${this.name}!`; //template string
    }
    getDescription(){
        return (this.age == 1 ? `${this.name} is ${this.age} year old.` : `${this.name} is ${this.age} years old.`);
    }
}


class Student extends Person{
    constructor(name,age,major){
        super(name,age); //this is how we call the parent class constructor
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` ${this.name}'s major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, location){
        super(name,age);
        this.location = location;
    }
    hasLocation(){
        return !!this.location;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasLocation()){
            description += `${this.name} is from ${this.location}`;
        }
        return description;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasLocation()){
            greeting += ` I am visiting from ${this.location}`;
        }
        return greeting;
    }

}


const me = new Student("David",27,"Animation");
console.log(me);
console.log(me.hasMajor());
console.log(me.getDescription());

const test = new Student();
console.log(test);
console.log(test.hasMajor());
console.log(test.getDescription());

const trav = new Traveler("Brian",28);
console.log(trav.getDescription());
console.log(trav.getGreeting());