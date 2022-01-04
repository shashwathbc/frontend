// function bblSort(arr){
     
//     for(var i = 0; i < arr.length; i++){
        
//       // Last i elements are already in place  
//       for(var j = 0; j < ( arr.length - i -1 ); j++){
          
//         // Checking if the item at present iteration 
//         // is greater than the next iteration
//         if(arr[j] > arr[j+1]){
            
//           // If the condition is true then swap them
//           var temp = arr[j]
//           arr[j] = arr[j + 1]
//           arr[j+1] = temp
//         }
//       }
//     }
//     // Print the sorted array
//     console.log(arr);
//    }
     
     
//    // This is our unsorted array
//    var arr = [234, 43, 55, 63,  5, 6, 235, 547];
     
     
//    // Now pass this array to the bblSort() function
//    bblSort(arr);



// or


function bs(arr){
     for(let i=0;i<arr.length;i++){              // n passes
       for(let j=0;j<arr.length-i-1;j++){        // 
         if(arr[j]>arr[j+1]){
           let temp=arr[j];
           arr[j]=arr[j+1];
           arr[j+1]=temp;


          //  [arr[j+1],arr[j]] = [arr[j],arr[j+1]]    other method of swap;
         }
       }
     }    

         return arr;
}

// time complexity : O(n^2)


let arr=[5,8,7,4,6,4];
console.log(bs(arr));

























