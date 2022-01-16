import '../Keyboard/Keyboard.css';

const Keyboard = ({ typeLetter, deleteLetter }) => {
  const createKeyboardRow = (rowOfLetters) => {
    const keyboardRow = [...rowOfLetters].map(letter => {
      return (
        <button
          className='letter-button'
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
      <div className='first-keyboard-row'>
        {createKeyboardRow("qwertyuiop")}
      </div>
      <div className='second-keyboard-row'>
        {createKeyboardRow("asdfghjkl")}
      </div>
      <div className='third-keyboard-row'>
        <button 
          className='enter-button'
        >
          Enter
        </button>
        {createKeyboardRow("zxcvbnm")}
        <button 
          className='delete-button'
          onClick={() => deleteLetter()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Keyboard;