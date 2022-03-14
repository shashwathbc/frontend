// call:
const obj ={
    fullname : function (gender){
        return `Hello this is ${this.firstname} ${this.lastname} (${gender})`
    }
}


const abc ={
    firstname: "shasheath",
    lastname : "bc"
}

const def ={
    firstname : "qfa",
    lastname : "sdjb",
}


console.log(obj.fullname.call(abc,"male"));


// bind:
const obj2 ={
    name : "shash",
    printName : function (){
        console.log(this.name);
    }
}

obj2.printName();


