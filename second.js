function canPay(array, price){
    let total = 0;
    for(let number of array){
        total += number;
    }
    if(total > price){
        return "true"
    }
    else{
        return "fasle"
    }
}