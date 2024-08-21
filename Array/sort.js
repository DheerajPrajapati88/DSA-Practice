let arr = [3,5,3,1,9,4];

function sorting(arr){

      
    for(let i = 0; i < arr.length; i++){
    
      for(let j = 0; j < arr.length; j++){


        if(arr[j] < arr[j + 1]){

            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp;
        }
           

      }
        
    }

    return arr;
}
console.log(sorting(arr)); // [ 1, 3, 3, 4, 5, 9 ] sorted ascending order