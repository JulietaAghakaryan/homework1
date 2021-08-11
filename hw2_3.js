function odd(number){
    if(number==0){
        return true
    }
    
    if(number%2==0){
        return false
    }

    return odd(Math.floor(number/10))
}

odd(1855593)