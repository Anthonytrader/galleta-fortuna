
import { useState } from 'react'
import './App.css'
import getRandomFromarr from './services/getRandomfromArr'
import phrases from'./utils/phrases.json'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'
import bgArr from './utils/bgArr.json'



function App() {
  
const quote =getRandomFromarr(phrases)
const [phraseRandom, setPhraseRandom]= useState(quote) 
 const[bgApp, setBgApp]=useState(getRandomFromarr(bgArr))

 const objStyle={
  backgroundImage: `url('../fondo${bgApp}.jpg')`

 }

return (
    <div style={objStyle} className='app'>
      <h1 className='app_title'>GALLETAS DE LA FORTUNA</h1>
      <article className='app_card'>
      <Phrase
      phraseRandom={phraseRandom} //promp//
      />
       <ButtonPhrase
        setPhraseRandom={setPhraseRandom}
        setBgApp={setBgApp}
       />
     </article>
    </div>
  )
}

export default App
