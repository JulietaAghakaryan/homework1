let arr =[1, 2, 3];
let count = 1;
sorted_arr = arr.sort();

    for(let i=0; i<arr.length; i++){
        if(arr[i+1] && arr[i]==arr[i+1]){
            count+=1;
        }
        else{
            console.log(arr[i]+ ": "+ count/arr.length);
            count=1;
        }
    }