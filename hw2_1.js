function neededArray(array, num){
    let newArray = []
    for(let i=0; i<array.length; i++){
        if(array[i]>num){
            newArray.push(array[i])
        }
    }
    if(!newArray[0]){
        return "Such values do not exist."
    }
    return newArray
}

neededArray([10, 25, 16, -5, 30, 15, 24] , 16)
