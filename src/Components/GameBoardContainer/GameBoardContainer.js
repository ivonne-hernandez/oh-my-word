import PropTypes from 'prop-types';
import GameBoard from '../GameBoard/GameBoard';
import Keyboard from '../Keyboard/Keyboard';
import newGameButton from '../../assets/new-game-button.png';
import './GameBoardContainer.css'
import { func } from 'prop-types';

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
        {!submittedWords.includes(currentWordInPlay) ? 
            <p className="correct-answer-message">WORD: {currentWordInPlay.toUpperCase()}</p>
          : <p className="congratulations-message">CORRECT!</p>
        }
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

GameBoardContainer.propTypes = {
  typeLetter: PropTypes.func.isRequired,
  deleteLetter: PropTypes.func.isRequired, 
  typedLetters: PropTypes.array.isRequired, 
  currentWordInPlay: PropTypes.string, 
  enterGuess: PropTypes.func.isRequired, 
  submittedWords: PropTypes.array.isRequired, 
  gameOver: PropTypes.bool.isRequired, 
  error: PropTypes.string, 
  startNewGame: PropTypes.func.isRequired
};