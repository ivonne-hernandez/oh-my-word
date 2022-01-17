import '../Keyboard/Keyboard.css';

const Keyboard = ({ typeLetter, deleteLetter, enterGuess, submittedWords, currentWordInPlay }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  const keyColors = {};

  alphabet.forEach(letter => {
    keyColors[letter] = "";
  });

  submittedWords.forEach(word => {
    const letters = word.split("");
    letters.forEach((letter, letterIndex) => {
      const isLetterInWord = currentWordInPlay.includes(letter);
      const isLetterInCorrectPlace = letter === currentWordInPlay[letterIndex];
      const currentKeyColor = keyColors[letter];

      if (isLetterInWord && isLetterInCorrectPlace) {
        keyColors[letter] = "green";
      } else if (isLetterInWord && !isLetterInCorrectPlace && currentKeyColor !== "green") {
        keyColors[letter] = "yellow";
      } else if (!isLetterInWord && currentKeyColor !== "green" && currentKeyColor !== "yellow") {
        keyColors[letter] = "dark-grey";
      }
    });
  });

  
  const createKeyboardRow = (rowOfLetters) => {
    const keyboardRow = [...rowOfLetters].map(letter => {
      
      return (
        <button
          className={`letter-button button ${keyColors[letter]}`}
          key={letter}
          id={letter}
          onClick={() => typeLetter(letter)}
        >
          {letter}
        </button>
      );
    });
    
    return keyboardRow;
  }

  return (
    <div className='keyboard'>
      <div className='keyboard-row'>
        {createKeyboardRow("qwertyuiop")}
      </div>
      <div className='keyboard-row'>
        {createKeyboardRow("asdfghjkl")}
      </div>
      <div className='keyboard-row'>
        <button 
          className='enter-button button'
          onClick={() => enterGuess()}
        >
          Enter
        </button>
        {createKeyboardRow("zxcvbnm")}
        <button 
          className='delete-button button'
          onClick={() => deleteLetter()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Keyboard;