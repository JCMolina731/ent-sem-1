import React from 'react';
import phrases from '../utils/phrases.json';
import Randomindex from '../services/Randomindex';

const ButtonPharse = ({setquote}) => {
    
    const HandleButton = () =>{
        const sentence = Randomindex(phrases)
        setquote(sentence)
    }
  return (
    <button onClick={HandleButton}>Probar mi Suerte</button>
  )
}

export default ButtonPharse;
