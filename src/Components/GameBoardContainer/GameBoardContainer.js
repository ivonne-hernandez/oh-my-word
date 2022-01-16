import GameBoard from '../GameBoard/GameBoard';
import Keyboard from '../Keyboard/Keyboard';
//create Loading component

import '../GameBoard/GameBoard.css';

const GameBoardContainer = ({ typeLetter, deleteLetter, currentWordInPlay }) => {
  
  return (
    currentWordInPlay !== null ?
      <div className='game-board-container'>
        <GameBoard
        />
        <Keyboard 
          typeLetter={typeLetter}
          deleteLetter={deleteLetter}
        />
      </div>
    :
      <div>Loading...</div>
  );
}
export default GameBoardContainer;