let arr =[[3, 4], [11, 0], [5, 6, 7, 8]]
function multiplication_of_biggest_negatives(arr){
    let result=1;
    let temp=1;
    let temp2=-Infinity;
    let count=0;
    
    for(let i=0; i< arr.length; i++){
        if(Array.isArray(arr[i])==false){
            return "invalid argument"
        }
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]<0 && arr[i][j]>=temp2){
                temp=arr[i][j];
                temp2=arr[i][j];
                count++;
            }
        }

        result*=temp;
        temp=1; 
        temp2=-Infinity;

    }
    if(count==0){
        return "No negatives"
    }
    return result
}
multiplication_of_biggest_negatives(arr)