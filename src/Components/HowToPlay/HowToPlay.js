import './HowToPlay.css';
import greenLetter from '../../assets/green-letter.png';
import yellowLetter from '../../assets/yellow-letter.png';
import darkGreyLetter from '../../assets/dark-grey-letter.png';

const HowToPlay = () => {
  return (
    <article className='content-container'>
      <div className='how-to-play-header'>HOW TO PLAY</div>
      <div className='instructions-container'>
        <p className='instructions-text'>Guess the <b>WORD</b> in 6 tries.</p>
        <p className='instructions-text'>Each guess must contain a valid 5 letter word, otherwise you'll see an error message at the top of the game board stating that the word is <b>"NOT IN WORD LIST."</b> </p>
        <p className='instructions-text'>When a valid 5 letter word is guessed, click on the enter button to submit it.</p>
        <p className='instructions-text'>After each guess, the color of the game board tiles and keyboard keys will change to show how close your guess was to the word in play.</p>
        <div className='examples-header'>EXAMPLES</div>
        <img 
          className='green-letter tile-image'
          src={greenLetter} 
          alt="green letter tile square" 
        />
        <p className='instructions-text'>The letter <b>G</b> is in the word and in the correct spot.</p>
        <img 
          className='yellow-letter tile-image'
          src={yellowLetter} 
          alt="yellow letter tile square" 
        />
        <p className='instructions-text'>The letter <b>E</b> is in the word but in the wrong spot.</p>
        <img 
          className='dark-grey-letter tile-image'
          src={darkGreyLetter} 
          alt="dark grey letter tile square" 
        />
        <p className='instructions-text'><b>NONE</b> of these letters are in the word in any spot.</p>
      </div>
    </article>
  );
}

export default HowToPlay;