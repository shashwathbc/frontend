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
// function isprime(n){
//     const boundary = Math.floor(Math.sqrt(n))
//     for(let i=2;i<=boundary;i++){
//         if(num%i==0)
//         return false
//     }
//     if(n<2)
//     return false
//     return true
// }

// console.log(isprime(1));





//.some give list of ele find wht atlean one elem is prime 

let arr = [4,4,4,20,6];

let prime = arr.some((element) =>{
      let flag = true;
      for( let i=2;i<element;i++){
          if(element % i== 0){
            flag = false
          break;
          }
      }
      return flag
})
console.log(prime);







// <script>
//  let devil = {
//     name: "devil",
//     skill: "web dev",
//     num : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//     prime : function(){
//           for(let i=0; i<this.num.length; i++){
//           var x = this.num[i];
//           var div = 2;
//           var check = true;
//           while(div<x){
//               if(x %div===0){
//                   check = false;
//                   break;
//               }else{
//                   div++;
//               }
//           }
//           if(check){
//           document.write(x+" ");
//         }


//         }
//     }

// }

// devil.prime();



//     </script>