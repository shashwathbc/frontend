function prime (num){
      let count = 0;
      for(let i=1;i<=num;i++){
          if(num%i===0){
              count++;
          }
          if(count>2){
              return false 
          }

      }
      if(count===2){
          return true;
      }
}

console.log(prime(3));





//O( \sqrt{n}
function isprime(n){
    const boundary = Math.floor(Math.sqrt(n))
    for(let i=2;i<=boundary;i++){
        if(num%i==0)
        return false
    }
    if(n<2)
    return false
    return true
}

console.log(isprime(1));