function smallestPositive(array, a=Infinity){
    if(array.length==0 && a!=Infinity){
        return a
    }else if(array.length==0 && a==Infinity){
        return -1
    }
    if(array[0]>=0 && array[0]<a){
        let i=array[0]
        array.shift();
        
        return smallestPositive(array, i)
    }
    array.shift()
        return smallestPositive(array, a)
   
}

smallestPositive([56, -9, 87, -23, 0, -105, 55, 1])