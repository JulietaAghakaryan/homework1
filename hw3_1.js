
function flat(arr){
    let new_array = []
    for(let i=0; i< arr.length; i++){
        if(Array.isArray(arr[i])===true){
             flat(arr[i])
        }
        else{
            new_array.push(arr[i])
            console.log(arr[i])
        }
    }
    return new_array;
}

console.log(flat([1,2,3,[4,5,[6]]]))

