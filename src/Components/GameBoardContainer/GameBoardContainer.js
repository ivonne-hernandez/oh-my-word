import GameBoard from '../GameBoard/GameBoard';
import Keyboard from '../Keyboard/Keyboard';
//create Loading component

import '../GameBoard/GameBoard.css';

const GameBoardContainer = ({ words, currentWordInPlay, typeLetter, deleteLetter }) => {
  
  return (
    currentWordInPlay !== null ?
      <div className='game-board-container'>
        <GameBoard
          words={words}
          currentWordInPlay={currentWordInPlay}
        />
        <Keyboard 
          words={words}
          currentWordInPlay={currentWordInPlay}
          typeLetter={typeLetter}
          deleteLetter={deleteLetter}
        />
      </div>
    :
      <div>Loading...</div>
  );
}
export default GameBoardContainer;