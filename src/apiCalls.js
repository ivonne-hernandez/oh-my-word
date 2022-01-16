const apiKey = process.env.REACT_APP_API_KEY;

const getRandomFiveLetterWord = () => {
  return fetch("https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%7B5%7D%24&frequencyMin=4.00&random=true", {
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
  getRandomFiveLetterWord
}