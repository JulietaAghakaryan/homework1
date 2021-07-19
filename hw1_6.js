let arr = [5, 9, 23, 0, -2, -1];

function sub_arrays(arr){
    
    let array=[];
    let bigarr=[];
    let i=0;
    let arr2=[]
   
    while(arr.length>=2){
        array.push(arr[i])
        for(let j=i+1; j<arr.length; j++ ){
            
                array.push(arr[j])
                bigarr.push(arr2)
                for(let k=j+1; k<arr.length; k++){
                    
                        array.push(arr[k]);
                        
                        array.pop();
                      
                       
            }
            array.pop()
        }
        array.pop();
        arr.shift();
       
    }
    return bigarr
}

sub_arrays(arr)


