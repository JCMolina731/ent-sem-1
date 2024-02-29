import './App.css'
import phrases from './utils/phrases.json'
import RandomPhrase from './components/RandomPhrase';
import Randomindex from './services/Randomindex';
import ButtonPharse from './components/ButtonPharse';
import { useState } from 'react';

function App() {

  const sentence = Randomindex(phrases);
  //desestructurar
  const [quote, setquote] = useState(sentence);
  return(
    <div className='container'>
      <h1>Galletas de la Fortuna</h1>
      <ButtonPharse 
        setquote = {setquote}
      />
      <RandomPhrase
        quote = {quote}
      />
    </div>
  )
}

export default App
