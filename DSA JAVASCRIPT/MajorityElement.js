function major(arr,n)
{
  //your code here
   let requiredFrequency = Math.floor(n/2)+1

    let store = {} //object

    for(let i=0;i<n;i++){

        console.log(store)

        if(store[arr[i]]!==undefined)
            store[arr[i]]++;
        else
            store[arr[i]]=1

        if(store[arr[i]]===requiredFrequency){
            console.log(store)
            return arr[i]
        }  
    }

}
let arr=[2,1,2];
console.log(major(arr,arr.length));

module.exports=major;