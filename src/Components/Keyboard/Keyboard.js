import '../Keyboard/Keyboard.css';

const Keyboard = ({ typeLetter, deleteLetter, enterGuess }) => {
  const createKeyboardRow = (rowOfLetters) => {
    const keyboardRow = [...rowOfLetters].map(letter => {
      return (
        <button
          className='letter-button button'
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