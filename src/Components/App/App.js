import { Component } from 'react';
import { getRandomFiveLetterWord, findWordInAPIDatabase } from '../../apiCalls';
import Header from '../Header/Header';
import GameBoardContainer from '../GameBoardContainer/GameBoardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWordInPlay: null,
      typedLetters: [],
      submittedWords: [],
      gameWon: false,
      playerStats: [],
      error: null
    }
  }

  componentDidMount = () => {
    return getRandomFiveLetterWord()
      .then(data => this.setState({ currentWordInPlay: data.word }))
      .catch(error => {
        this.setState({ error: error.message })});
  }

  typeLetter = (letter) => {
    if (this.state.typedLetters.length < 5) {
      const updatedTypedLetters = [...this.state.typedLetters, letter];
      this.setState({ typedLetters: updatedTypedLetters });
    }
  }

  deleteLetter = () => {
    const updatedTypedLetters = [...this.state.typedLetters];
    updatedTypedLetters.pop();
    this.setState({ typedLetters: updatedTypedLetters });
  }

  validateGuess = (word) => {
    return findWordInAPIDatabase(word)
      .then(response => response.status === 200)
      .catch(error => this.setState({ error: error.message }));
  
  }
  
  enterGuess = () => {
    const guess = this.state.typedLetters.join('');
    if (guess.length === 5) {
      this.validateGuess(guess)
        .then(isValid => {
          console.log(`isValid?`, isValid)
          if (isValid) {
            const updatedSubmittedWords = [...this.state.submittedWords, guess];
            let updatedGameWon = this.state.gameWon;
            const newStatEntry = {
              word: this.state.currentWordInPlay,
              guessedWords: updatedSubmittedWords,
              won: updatedGameWon
            }

            if (guess === this.state.currentWordInPlay) {
              updatedGameWon = true;

              const updatedPlayerStats = [...this.state.playerStats, newStatEntry];
              this.endGame(updatedSubmittedWords, updatedPlayerStats, updatedGameWon);
            } else {
              const updatedPlayerStats = [...this.state.playerStats, newStatEntry];
              this.endGame(updatedSubmittedWords, updatedPlayerStats, updatedGameWon)
            }

          }

        });
    }
  }

  endGame = (updatedSubmittedWords, updatedPlayerStats, updatedGameWon) => {
    if (updatedGameWon) {
      return getRandomFiveLetterWord()
        .then(data => {
            this.setState({
              currentWordInPlay: data.word,
              typedLetters: [],
              submittedWords: [],
              gameWon: false,
              playerStats: updatedPlayerStats
            })
        })
        .catch(error => this.setState({ error: error.message }));
    } else {
      this.setState({
        typedLetters: [],
        submittedWords: updatedSubmittedWords,
        playerStats: updatedPlayerStats
      })
    }
  }

  render = () => {
    return (
      <main>
        <Header />
        <GameBoardContainer 
          currentWordInPlay={this.state.currentWordInPlay}
          typeLetter={this.typeLetter}
          deleteLetter={this.deleteLetter}
          typedLetters={this.state.typedLetters}
          submittedWords={this.state.submittedWords}
          enterGuess={this.enterGuess}
          />
      </main>
    )
  }
}

export default App;
