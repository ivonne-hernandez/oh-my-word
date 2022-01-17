import GameBoard from '../GameBoard/GameBoard';
import Keyboard from '../Keyboard/Keyboard';
//create Loading component

import '../GameBoard/GameBoard.css';

const GameBoardContainer = ({ typeLetter, deleteLetter, typedLetters, currentWordInPlay, enterGuess, submittedWords }) => {
  
  return (
    currentWordInPlay !== null ?
      <div className='game-board-container'>
        <GameBoard
          typedLetters={typedLetters}
          submittedWords={submittedWords}
          currentWordInPlay={currentWordInPlay}
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