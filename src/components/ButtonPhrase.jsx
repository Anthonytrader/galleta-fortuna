import getRandomFromarr from "../services/getRandomfromArr"
import phrases from "../utils/phrases.json"
import bgArr from "../utils/bgArr.json"

const ButtonPhrase = ({ setPhraseRandom,setBgApp}) => {

    const handleChangePrhase =()=>{
    const quote= getRandomFromarr(phrases)
        setPhraseRandom(quote)
        setBgApp(getRandomFromarr(bgArr))
    }


  return (
    <button 
    className="app_btn"
    onClick={handleChangePrhase}>
      Ver otro
      </button>
  )
}

export default ButtonPhrase
