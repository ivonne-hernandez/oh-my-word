import './UserGuessRow.css';
const UserGuessRow = ({ typedLetters, currentWordInPlay }) => {
  const getGreenLetters = (letter, letterIndex, currentWordInPlayLetterCounts, typedLetterColors) => {
    if (currentWordInPlay.includes(letter) && letter === currentWordInPlay[letterIndex] && currentWordInPlayLetterCounts[letter] !== 0) {
      currentWordInPlayLetterCounts[letter] -= 1;
      typedLetterColors[letterIndex] = "green";
    } 
  }

  const getYellowLetters = (letter, letterIndex, currentWordInPlayLetterCounts, typedLetterColors) => {
    if (currentWordInPlay.includes(letter) && letter !== currentWordInPlay[letterIndex] && currentWordInPlayLetterCounts[letter] !== 0) {
      currentWordInPlayLetterCounts[letter] -= 1;
      typedLetterColors[letterIndex] = "yellow";
    } 
  }

  const generateLetterTiles = () => {
    const currentWordInPlayLetterCounts = {};
    const typedLetterColors = ["dark-grey", "dark-grey", "dark-grey", "dark-grey", "dark-grey"];

    if (currentWordInPlay) {
      currentWordInPlay.forEach(letter => {
        if (!currentWordInPlayLetterCounts[letter]) {
          currentWordInPlayLetterCounts[letter] = 0;
        }
        currentWordInPlayLetterCounts[letter] += 1;
      });
  
      typedLetters.forEach((letter, letterIndex) => getGreenLetters(letter, letterIndex, currentWordInPlayLetterCounts, typedLetterColors));
      typedLetters.forEach((letter, letterIndex) => getYellowLetters(letter, letterIndex, currentWordInPlayLetterCounts, typedLetterColors));
    }
    
    const letterTiles = typedLetters.map((letter, letterIndex) => {
      let letterClass = "typed-letter";

      if (currentWordInPlay) {
        letterClass = letterClass + " past-row " + typedLetterColors[letterIndex]
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