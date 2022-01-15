const fetchFiveLetterWords = () => {
  return fetch("https://wordsapiv1.p.rapidapi.com/words/?letters=5&limit=100&page=10", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "cdfc72c5f0msh394d1e86d7ca671p1349fcjsnb750a8661d69"
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