

let arr = [1,2,3,3,4,5,5,5];



function removeDuplicates(arr){
    let j=1;

    for(let i = 1; i < arr.length; i++){

        if(arr[i] !== arr[i - 1]){
            arr[j] = arr[i];
            j++;
        }
    }
    
    return j;
}



let length = removeDuplicates(arr);
arr.slice(0,length)
