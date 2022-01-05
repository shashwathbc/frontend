function merge(n,left,mid,right){
    var n1 = mid-left+1;
    var n2 = right - mid;
// Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
// Copy data to temp arrays L[] and R[]
    for( var i=0;i<n1;i++){
        L[i] = n[left+i];
    }
    for( var i=0;i<n2;i++){
        R[i] = n[mid+1+i];
    }
     // Merge the temp arrays back into arr[l..r]
  
//     // Initial index of first ,second and third subarray
    var i =0;
    var j=0;
    var k =left;
    
    while(i<n1 && j<n2){
        if(L[i]<=R[j]){
            n[k] = L[i];
            i++;
        }else{
            n[k] = R[j];
            j++;
        }
        k++;
    }
    // Copy the remaining elements of
//     // L[], if there are any
    while(i<n1){
        n[k] = L[i];
        i++;
        k++;
    }
    // Copy the remaining elements of
//     // R[], if there are any
    while(j<n2){
        n[k] = R[j];
        j++;
        k++;
    }

}
// l is for left index and r is
// // right index of the sub-array
// // of arr to be sorted */

function divideArr(n,left,right){
       if(left>=right){
           return;
       }
        // avoids exception v can also use var mid = (right +left) /2
       var mid =left + parseInt((right-left)/2);
       divideArr(n,left,mid);
       divideArr(n,mid+1,right);
       merge(n,left,mid,right);
           
}
function ms(n){
     
    divideArr(n,0,n.length-1);
    console.log(n);
}


let n=[7,8,9,2,5,4,6];
ms(n);





