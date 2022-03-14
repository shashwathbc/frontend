function binarysearch(nums,target){
    let start =0,end = nums.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(nums[mid]===target)
        return true;
        else if(nums[mid]<target)
        start = mid+1;
        else
        end = mid-1;
    }
    return false;
}



let nums = [1,3,5,7,8,9];
let target = 3;
console.log(binarysearch(nums,target));