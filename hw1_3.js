let sentence =  'there are no two words in the english language more harmful than "good job".';
function longest_non_repeated_substring(sentence){
    let arr=""

    let needed=""


    for(let i=0; i<sentence.length; i++){
        for(let j=i; j<sentence.length; j++){
            if(sentence[j]==" "){
                arr+=sentence[j]
            }
            else{
                if(arr.includes(sentence[j])){
                    break;
                }
                else{
                   arr+=sentence[j];
                }
            }
        
           }
           if(arr.length>=needed.length){
               needed=arr;
               
           }
           arr=""

      
       }
   
   return needed
}

longest_non_repeated_substring(sentence)

