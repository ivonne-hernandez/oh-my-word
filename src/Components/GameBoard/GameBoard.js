import PropTypes from 'prop-types';
import UserGuessRow from '../UserGuessRow/UserGuessRow';
import './GameBoard.css';

const GameBoard = ({ typedLetters, submittedWords, currentWordInPlay }) => {
  const generateRows = () => {
    const rows = [];

    const pastRows = submittedWords.map((word, index) => {
      return (
        <UserGuessRow 
          className='past-row'
          typedLetters={word.split('')}
          currentWordInPlay={currentWordInPlay.split('')}
          key={index}
        />
      );
    });
    rows.push(...pastRows);

    if (rows.length < 6) {
      const activeRow = (
        <UserGuessRow 
          className="active-row"
          typedLetters={typedLetters}
          key={rows.length}
        />
      );
      rows.push(activeRow);
    }
    
    while (rows.length < 6) {
      const futureRow = (
        <UserGuessRow
          className="future-row"
          typedLetters={["", "", "", "", ""]}
          key={rows.length}
        />
      );
      rows.push(futureRow);
    }

    return rows;
  }
  
  return (
    <div className='board-container'>
      <main className="game-board">
        {generateRows()}
      </main>
    </div>
  );
}

export default GameBoard;

GameBoard.propTypes = {
  typedLetters: PropTypes.array.isRequired, 
  submittedWords: PropTypes.array.isRequired,
  currentWordInPlay: PropTypes.string
};