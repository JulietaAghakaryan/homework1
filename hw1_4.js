let word ="dfgjkloyp";

function change_string(word1){

    word=word1.split('')
    let temp="";
    let temp2="";
    for(let i=0; i<word.length-2; i++){
        for(let j=0; j<2; j++){
            temp=word[i];
            word[i]=word[i+1];
            word[i+1]=temp;
            i++;
        }

    }
    return word.join("");
}

change_string(word)

