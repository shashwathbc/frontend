function ss(arr){
    for (let i = 0; i < arr.length; i++){
          let min=i;
          for(let j=i+1;j<arr.length;j++){
              if(arr[j]<arr[min]){
                  min = j;

              }
          }
          if(min!==i){
              [arr[i],arr[min]] = [arr[min],arr[i]]
          }

          console.log(`After ${i+1} th pass , Arr is ${arr}`)

    }    

    return arr;
}

// time complexity O(n^2)

let arr=[8,7,6,5,4,3,2,1];
console.log(ss(arr));

