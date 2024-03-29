//Create an Animal class. The class will have name, age, color, legs properties and create different methods
//Create a Dog and Cat child class from the Animal Class.
// class Animal{
//     constructor(name,age,color,property){
//         this.name=name
//         this.age=age
//         this.color=color
//         this.property=property
//     }
// }
// class Dog extends Animal{

// }
// class Cat extends Animal{

// }
    
//***************************EXERCISE LEVEL2******************************
//1Override the method you create in Animal class.
class Animal{
    constructor(name,age,color,property){
        this.name=name
        this.age=age
        this.color=color
        this.property=property
        
    }
}
class Dog extends Animal{
    show(){
        return "bobby"
    }
}
class Cat extends Animal{
    show(){
        return "kitty"
    }
}
var s=new Dog ();
console.log(s.show)