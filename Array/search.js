let nums = [1,2,3,5,9];
let target = 5

function searchInsert(nums,target){

    for(let i = 0; i < nums.length; i++){
    
        if(nums[i] >= target){
    
            return i;
        }

    }
    return nums.length;
}

searchInsert(nums,target)