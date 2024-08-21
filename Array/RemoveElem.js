
//program to remove an element from an array which are occurred multiple times

let nums = [ 2,3,4,5,3,1,3];
let val = 3;

let length = removeElement(nums , val);
nums.slice(0 , length)

function removeElement(nums,val){

    let j = 0;
    for(let i = 0; i < nums.length; i++){
        
        if(nums[i] !== val){
            nums[j] = nums[i];
            j++;
        }
    }

    return j
}