const apiKey = process.env.apiKey;

const fetchFiveLetterWords = () => {
  return fetch("https://wordsapiv1.p.rapidapi.com/words/?letters=5&limit=100&page=10", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": `${apiKey}`
    }
  })
    .then(response => {
      if(!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

module.exports = {
  fetchFiveLetterWords
}