let sentence = "Which would be worse - to live as a monster, or to die as a good man?";
function longest_word_in_arr(sentence){

    let count=0;
    let max_count=0
    let word="";
    let longest_word=""
    for(let i=0; i<sentence.length; i++){
        if(sentence[i]!=" " && sentence[i]!="," && sentence[i]!="-"){
            count++;
            word+=sentence[i]
            
        }else{
            if(count>=max_count){
                max_count=count
                longest_word = word;
                
            }
            count=0;
            word=""
        }
    }
    return longest_word
}

longest_word_in_arr(sentence)