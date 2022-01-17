describe('Oh my word homepage test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%7B5%7D%24&frequencyMin=4.00&random=true', {
      fixture: 'random_word.json'
    });
    
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/brown', {
      fixture: 'word_in_api.json'
    })

    cy.visit('http://localhost:3000');
  })

  it("As a user, when I click on a letter on the keyboard I should see it displayed on the game board", () => {
    cy.get('div[class="keyboard"]')
      .get('button[id="b"]')
      .click()
      .get('article[class="typed-letter"]')
      .contains("b")
  });

  it("As a user, when I click the delete button on the keyboard the last letter has now been removed from the game board", () => {
    cy.get('div[class="keyboard"]')
      .get('button[id="b"]')
      .click()
      .get('div[class="keyboard"]')
      .get('button[id="r"]')
      .click()
      .get('div[class="keyboard"]')
      .get('button[id="delete-button"]')
      .click()
      .get('main[class="game-board"]')
      .contains("b")
  })





// it("As a user, when I've typed in a valid 5 letter word and press enter I should see that the squares have now changed color") 
// it("As a user, when I've typed in an invalid 5 letter word and press enter I should see a message that tells me that the word is not in the list") 
// it("As a user, when I've guessed the correct answer, I should see a message that tells me that I was correct and a restart game button")
// it("As a user, when I haven't guessed the correct answer in 6 tries, I should see a message that shows me the correct word and a restart game button")
});


