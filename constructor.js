class Human{
age;
#wt = 80;
ht = 174;
constructor(newAge, newHeight, newWeight){
    this.age = newAge;
    this.ht = newHeight;
    this.wt = newWeight;
}

 walking(){
        console.log("I am walking :) with " , this.#wt ) ;      //accessing inside using this keyword
    }
    running(){
        console.log("I am running :)")
    }

    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(val){
        this.#wt = val ;
    }
}
let obj = new Human(50,190);
console.log(obj.fetchWeight);

obj.walking();