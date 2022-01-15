import { Component } from 'react';
import { fetchFiveLetterWords } from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: [],
      currentWordInPlay: null,
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

  render = () => {
    return (
      <div>Hello</div>
    )
  }
}

export default App;
