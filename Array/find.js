let numbers=[2,44,5,3,9];

console.log(findNumber(numbers,99))

function findNumber(arr,target){


    let index;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] == target){
            return i ;
        }
    }

    return -1;
}