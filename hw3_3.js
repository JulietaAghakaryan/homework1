function invert(obj){
    const keys = Object.keys(obj); //["a", "b"]

    const new_object={

    }

    keys.map((key, index)=>{
    
        new_object[obj[key]]=key
    })

    return new_object
}


invert({
    a: '1',
    b: '2'
})