
class Human{
    //properties
    age = 23;         //public i.e. Data member that can be used even outside the class
    #wt = 70;         //private i.e. cant be accessed outside the class
    ht = 172;

    //behavior
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

let obj = new Human();
console.log(obj.age);
// console.log(obj.#wt);

obj.walking();