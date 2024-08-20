
// This program is to find largest number from the array

let numbers=[2,3,44,1,90,8];
function findSecondMax(arr){

    let firstMax = arr[0];
    for(let i=1; i<arr.length; i++){

        if(arr[i] > firstMax){

            firstMax = arr[i]
        }
    }

    // return firstMax => It will return the first largest element from the array

    let secondMax = arr[0]
    for(let i=1; i<arr.length; i++){

        if(arr[i] > secondMax && arr[i] != firstMax) {

            secondMax = arr[i]
        }
    }


    // return secondMax   => It  will return the second largest element from the array

    let thirdMax = arr[0];
    for(let i = 1; i < arr.length; i++ ){

        if(arr[i] > thirdMax && arr[i] != firstMax && arr[i] != secondMax){
            thirdMax=arr[i];

        }
    }

    return thirdMax  // it will return the third largest element from the array

}

console.log(findSecondMax(numbers))