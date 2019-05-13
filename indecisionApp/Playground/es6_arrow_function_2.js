console.log("working");


const user = {
    name: "David",
    cities: [,"Tijuana","Alicante","Vancouver"],
    printPlacesLived(){
        const cityMessages = this.cities.map((city)=>{
            return this.name+ " has lived in "+city+"!";
        });


        // this.cities.forEach((city) =>{ //in arrow functions this get binded to the parents context
        //     console.log(this.name + " has lived in "+ city);
        // });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());


const multiplier = {
    //numbers - array of nums
    numbers:[1,2,3,4,5,6,7,8,9],
    //multiplyBy - single number
    multiplyBy: 18,
    //miltiply
    multiply(){
        const multipliedNumbers = this.numbers.map((number)=> number*this.multiplyBy);

        return multipliedNumbers;
    }
}

console.log(multiplier.multiply());