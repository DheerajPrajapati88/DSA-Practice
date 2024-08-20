// program to find the smallest element from the array


let numbers=[2,44,5,6,1];
function findSmallest(arr){

    let samllestNum=arr[0];
    for(let i = 1; i < arr.length; i++ ){
        if(arr[i] < samllestNum){

            samllestNum=arr[i]
        }
    }

    // return samllestNum



   let secondSmallest=arr[0];
   for(let i = 1; i < arr.length; i++){

 
    if( arr[i] < secondSmallest && arr[i] != samllestNum){

        samllestNum=arr[i]
    }


   }

   return secondSmallest
}

console.log(findSmallest(numbers));