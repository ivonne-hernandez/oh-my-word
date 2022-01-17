import { Component } from 'react';
import { Routes, Route } from "react-router-dom";
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
      gameOver: false,
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
    if (this.state.typedLetters.length < 5 && !this.state.gameOver) {
      const updatedTypedLetters = [...this.state.typedLetters, letter];
      this.setState({ typedLetters: updatedTypedLetters });
    }
  }

  deleteLetter = () => {
    if (!this.state.gameOver) {
      const updatedTypedLetters = [...this.state.typedLetters];
      updatedTypedLetters.pop();
      this.setState({ typedLetters: updatedTypedLetters, error: null });
    }
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
          if (isValid) {
            const updatedSubmittedWords = [...this.state.submittedWords, guess];
            this.setState({ 
              gameOver: guess === this.state.currentWordInPlay || updatedSubmittedWords.length === 6, 
              submittedWords: updatedSubmittedWords, 
              typedLetters: [] 
            });
          } else if (!isValid) {
            this.setState({ error: `NOT IN WORD LIST.` });
          }
        });
    }
  }

  startNewGame = () => {
    const newStatEntry = {
      word: this.state.currentWordInPlay,
      guessedWords: [...this.state.submittedWords]
    }
    const updatedPlayerStats = [...this.state.playerStats, newStatEntry];
    return getRandomFiveLetterWord()
      .then(data => {
        this.setState({
          currentWordInPlay: data.word,
          typedLetters: [],
          submittedWords: [],
          gameOver: false,
          playerStats: updatedPlayerStats
        })
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render = () => {
    return (
      <main>
        <Header />
        <Routes>
          <Route path="/" element={
            <GameBoardContainer 
              currentWordInPlay={this.state.currentWordInPlay}
              typeLetter={this.typeLetter}
              deleteLetter={this.deleteLetter}
              typedLetters={this.state.typedLetters}
              submittedWords={this.state.submittedWords}
              enterGuess={this.enterGuess}
              gameOver={this.state.gameOver}
              error={this.state.error}
              startNewGame={this.startNewGame}
            />
          }/>
          <Route path="/how-to-play" element={  
            <p>How to play</p>
          }/>
          <Route path="/player-stats" element={  
             <p>Player Stats</p>
          }/>
        </Routes>
      </main>
    )
  }
}

export default App;
