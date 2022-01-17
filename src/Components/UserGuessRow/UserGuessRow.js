import './UserGuessRow.css';
const UserGuessRow = ({ typedLetters, currentWordInPlay }) => {
  const getLetterClass = (letter, letterIndex) => {
    if (currentWordInPlay.includes(letter) && letter === currentWordInPlay[letterIndex]) {
      return "green";
    } else if (currentWordInPlay.includes(letter) && letter !== currentWordInPlay[letterIndex]) {
      return "yellow";
    } else if (!currentWordInPlay.includes(letter)) {
      return "dark-grey";
    }
  }

  const generateLetterTiles = () => {
    const letterTiles = typedLetters.map((letter, letterIndex) => {
      let letterClass = "typed-letter";

      if (currentWordInPlay) {
        letterClass = letterClass + " past-row " + getLetterClass(letter, letterIndex);
      }

      return (
        <article
          className={letterClass}
          key={letterIndex}
        >
          {letter}
        </article>
      );
    });

    while (letterTiles.length < 5) {
      const emptyLetterTile = (
        <article
          className="typed-letter"
          key={letterTiles.length}
        >
        </article>
      );
      letterTiles.push(emptyLetterTile);
    }

    return letterTiles;
  }

  return (
    <div className='user-guess-row-container'>
      {generateLetterTiles()}
    </div>
  );
}

export default UserGuessRow;