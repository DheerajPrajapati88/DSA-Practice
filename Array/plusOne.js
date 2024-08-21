
let digits = [1,3,4];

function plusOne(digits){

    
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('');

}

plusOne(digits);