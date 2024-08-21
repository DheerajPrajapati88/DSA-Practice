// two sum

let arr = [2,33,4,5,11];
let target = 11;


function twoSum(arr,target){

    for(let i = 0; i < arr.length; i++){

        for(let j = i + 1; j < arr.length; j++ ){


            for(let k = j + 1; k < arr.length; k++){
                if(arr[i] + arr[j] + arr[k] === target){
                    return [i,j,k]
                }
            }
        }
    }
}

console.log(twoSum(arr,target))