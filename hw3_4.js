function sub_strings(str, num){

    const number =  str.length + 1-num

    let array=[]

    for(let i=0; i<number; i++){        
    let new_string ="";
        for(let j=i; j<i+num; j++){
            new_string+=str[j]
        }
        array.push(new_string)
        new_string=""
    }
    return array
    
}
console.log(sub_strings('495215', 3))