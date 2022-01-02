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