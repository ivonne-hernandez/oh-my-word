import { Component } from 'react';
import { fetchFiveLetterWords } from '../../apiCalls';
import Header from '../Header/Header';
import GameBoardContainer from '../GameBoardContainer/GameBoardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
      currentWordInPlay: null,
      typedLetters: [],
      numberOfRemainingGuesses: 6,
      submittedWords: [],
      gameWon: false,
      playerStats: [],
      error: null
    }
  }

  componentDidMount = () => {
    return fetchFiveLetterWords()
      .then(data => {
        const words = data.results.data;
        const randomIndex = this.generateRandomIndex(words.length);
        const newWordForGame = words[randomIndex];

        this.setState({ currentWordInPlay: newWordForGame });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  generateRandomIndex = (wordslength) => {
    return Math.round(Math.random() * (wordslength + 1));
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
  
  submitGuess = (guess) => {
    //validateGuess 
    //this will update 
    // numberOfRemainingGuesses: 6,
    //   submittedWords: [],
    //   gameWon: false,

  }

  endGame = () => {
    //this will update
      // playerStats: [],
  }

  render = () => {
    return (
      <main>
        <Header />
        <GameBoardContainer 
          words={this.state.words}
          currentWordInPlay={this.state.currentWordInPlay}
          typeLetter={this.typeLetter}
          deleteLetter={this.deleteLetter}
          />
      </main>
    )
  }
}

export default App;
