import GameBoard from '../GameBoard/GameBoard';
import Keyboard from '../Keyboard/Keyboard';
//create Loading component

import '../GameBoard/GameBoard.css';

const GameBoardContainer = ({ typeLetter, deleteLetter, typedLetters, currentRow, currentWordInPlay, enterGuess, submittedWords }) => {
  
  return (
    currentWordInPlay !== null ?
      <div className='game-board-container'>
        <GameBoard
          typedLetters={typedLetters}
          submittedWords={submittedWords}
          currentWordInPlay={currentWordInPlay}
          currentRow={currentRow}
        />
        <Keyboard 
          typeLetter={typeLetter}
          deleteLetter={deleteLetter}
          enterGuess={enterGuess}
        />
      </div>
    :
      <div>Loading...</div>
  );
}
export default GameBoardContainer;