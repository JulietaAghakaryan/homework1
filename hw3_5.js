function count(array){

    let arr=array.sort(function(a,b){return a-b})

    let num=arr[arr.length-1]-arr[0]+1

    return num-arr.length

}

console.log(count([10,2,4,5,7,1,8]))

