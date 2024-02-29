import React from 'react';
import './styles/RandomPhrase.css'

export const RandomPhrase = ({quote}) => {

  const{author, phrase} = quote;
    return (
    <div className='phraseAuthor'>
        <p className='phrase_titulo'>{phrase}</p>
        <p className='phrase_fuente'>Fuente: {author}</p>

    </div>
  )
}

export default RandomPhrase;