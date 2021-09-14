import React from 'react';

const typedCorrentlyStyle = {
"backgroundColor": "#34eb77"
}

const getTypedWords = (words,player) => {
let typedLetter = words.slice(0,player.currentWordIndex);
typedLetter = typedLetter.join(" ");
return<span className="wuriaa">{typedLetter}</span>
}


const getCurrentWord = (words,player) => {  
return <span className="wuria">{words[player.currentWordIndex]} </span>
}

const getWordsToBeTyped = (words,player) => {
  console.log(words);
  let wordsToBeTyped = words.slice(player.currentWordIndex +1, words.length);
  wordsToBeTyped = wordsToBeTyped.join(" ");
    return <span className="wuraa">{wordsToBeTyped}</span>
}

const DisplayWords = ({words, player}) => {
  return(
    <div className="wordse"> 
   {getTypedWords(words,player)}   
   {getCurrentWord(words,player)}
   {getWordsToBeTyped(words,player)}   
   </div>
  )  
}

export default DisplayWords;