let numbers=[2,3,44,1,90,8];
function findSecondMax(arr){

    let firstMax=arr[0];
    for(let i=1;i<arr.length;i++){

        if(arr[i]>firstMax){

            firstMax=arr[i]
        }
    }

    let secondMax=arr[0]
    for(let i=1;i<arr.length;i++){

        if(arr[i]>secondMax && arr[i]!=firstMax){

            secondMax=arr[i]
        }
    }


    return secondMax
}

console.log(findSecondMax(numbers))