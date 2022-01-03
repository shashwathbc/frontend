function linearsearch(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target)
        return true;
    }
    return false
}



let nums = [10,5,2,3,100,50,20];
let target = 50;
console.log(linearsearch(nums,target));