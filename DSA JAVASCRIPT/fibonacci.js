function fibo(n){
    // if(n==0)
    // return 0
    // else if(n==1)
    // return 1

    //base case
    if(n<2){
        return n;
    }

    // recursive case
      return fibo(n-1)+fibo(n-2);
}

// taking inputs and displaying the o/p

// for(let i=0;i<=7;i++){
// console.log(fibo(i))
// }

console.log(fibo(7))





//OR:


// let data = [0,1,1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
//     let arr = [1,2,3,4,5]
//     let i = 0
//     arr = arr.map(function(value){

//             value = arr(n-1)+arr(n-2);
//             i++
//             return value
//         })
//         console.log(arr)


//         // or
        
//         let arr = [2,6,3,1,4,9]
//         let fibo=[0,1]
//         let x =15;
//         for(let i=1;i<x;i++){
//             fibo.push(fibo[i] + fibo[i-1])
//         }

//         let fibomap = arr.map((element) =>{
//             return fibo[element];
//         })
//         console.log(fibomap);
