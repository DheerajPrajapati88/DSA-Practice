let numbers = [1,2,3,4,5];

console.log(sumOfArray(numbers))
function sumOfArray(arr){

       
    let sum=0;
    for(let i = 1; i < arr.length; i++ ){
        sum += arr[i] // sum = sum + arr[i]
    }

    return sum;
}

