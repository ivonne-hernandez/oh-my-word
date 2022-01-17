import GameBoard from '../GameBoard/GameBoard';
import Keyboard from '../Keyboard/Keyboard';
import newGameButton from '../../assets/new-game-button.png';
import './GameBoardContainer.css'
//create Loading component

const GameBoardContainer = ({ typeLetter, deleteLetter, typedLetters, currentWordInPlay, enterGuess, submittedWords, gameOver, error, startNewGame }) => {
  const displayNewGameButton = () => {
    return (
      <div className='new-game-button-container'>
        <img
          className='new-game-button'
          src={newGameButton}
          alt="new game button"
          onClick={() => startNewGame()}
        />
      </div>
    );
  }

  const displayErrorMessage = () => {
    return (
      <p className='error-message'>
        {error}
      </p>
    );
  }

  return (
    currentWordInPlay !== null ?
      <div className='game-board-container'>
        <div className='game-board-header'>
          {error ? displayErrorMessage() : null}
          {gameOver ? displayNewGameButton() : null}
        </div>
        <GameBoard
          typedLetters={typedLetters}
          submittedWords={submittedWords}
          currentWordInPlay={currentWordInPlay}
        />
        <Keyboard 
          typeLetter={typeLetter}
          deleteLetter={deleteLetter}
          enterGuess={enterGuess}
          submittedWords={submittedWords}
          currentWordInPlay={currentWordInPlay}
        />
      </div>
      :
      <div>Loading...</div>
  );
  
}
export default GameBoardContainer;