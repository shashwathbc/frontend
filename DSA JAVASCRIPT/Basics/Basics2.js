//Javascript is a synchronous single threaded language:
// means js can execute only one cmd at a time in an specific order(ie line by line)




// EXECUTION CONTEXT:

// 1)  variable environment / memory component:
// it is the memory component which has values like (key,variabe, functions => are stored in memory component)


// 2) Code Component/ thread of execution :
//here code is executed line by line


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


//HOW JS CODE IS EXECUTED:

//1st PHASE : memory creation pase :  
//  js will allocate memory to n,(stores a special value undefined)
//  then allocates the momory to square(stores whole code of the func)
// allocates the memory to square2 and square4 ( value is undefines)

//2nd PHASE:  code execution phase:
// all calculation is done here 
// code of value 2 will be placed to n
// 

var n =2;
function square (num){
    var ans = num *num;
    console.log(ans);
    return ans;
}
// square();

var square2 = square(n);
//function invoke (func is being executed)(a brand new execution context is created )
var square4 = square(4);


























