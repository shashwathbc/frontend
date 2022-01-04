function is(arr){
     for(let i=1;i<arr.length;i++){    // since we r starting with 1st index
           
        for(let j=i-1;j>=0;j--){
            if(arr[j+1]<arr[j]){
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]];
            }
        }
     }



    return arr;
}

// time complexity O(n^2)

let arr=[8,7,4,5,6,1,2];
console.log(is(arr));