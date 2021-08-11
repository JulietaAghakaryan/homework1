function betweenEvenNumbers(num1, num2){
    if(num2<num1){
        return "Wrong numbers"
    }
    let betweenArray = []

    for(let i=num1; i<=num2; i++){
        let a=0
        let flag=true
        let k=i;
        while(k!=0){
             a = k%10
            if(a%2!=0){
                flag=false
            }
            k=Math.floor(k/10)
    
        }
        if(flag==true){
            betweenArray.push(i);
            console.log(i)
        }
        flag=true
    }

    if(!betweenArray[0]){
        return "Such numbers does not exist."
    }
    return betweenArray
}
betweenEvenNumbers(22, 30)