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
      .get('button[id="r"]')
      .click()
      .get('button[id="delete-button"]')
      .click()
      .get('main[class="game-board"]')
      .contains("b")
  })

  it("As a user, when I've typed in a valid 5 letter word and press enter I should see that the game board tiles and keyboard keys have now changed color", () => {
    cy.get('div[class="keyboard"]')
    .get('button[id="b"]')
    .click()
    .get('button[id="r"]')
    .click()
    .get('button[id="o"]')
    .click()
    .get('button[id="w"]')
    .click()
    .get('button[id="n"]')
    .click()
    .get('button[id="enter-button"]')
    .click()
    .get('div[class="user-guess-row-container"]')
    .first()
    .get('article[class="typed-letter past-row yellow"]')
    .should('have.length', 2)
    .get('article[class="typed-letter past-row dark-grey"]')
    .should('have.length', 3)
    .get('div[class="keyboard"]')
    .get('button[class="letter-button button dark-grey"]')
    .should('have.length', 3)
    .get('button[class="letter-button button yellow"]')
    .should('have.length', 2)
  }) 

  it("As a user, when I've typed in an invalid 5 letter word and press enter I should see a message that tells me that the word is not in the list", () => {
    cy.get('div[class="keyboard"]')
    .get('button[id="b"]')
    .click()
    .get('button[id="o"]')
    .click()
    .get('button[id="o"]')
    .click()
    .get('button[id="w"]')
    .click()
    .get('button[id="n"]')
    .click()
    .get('button[id="enter-button"]')
    .click()
    .get('p[class="error-message"]')
    .contains("NOT IN WORD LIST.")
  }) 

  it("As a user, when I've guessed the correct answer, I should see that the game board tiles and keyboard keys are green, a message that tells me that I was correct and a restart game button", () => {
    cy.get('div[class="keyboard"]')
    .get('button[id="s"]')
    .click()
    .get('button[id="o"]')
    .click()
    .get('button[id="l"]')
    .click()
    .get('button[id="a"]')
    .click()
    .get('button[id="r"]')
    .click()
    .get('button[id="enter-button"]')
    .click()
    .get('article[class="typed-letter past-row green"]')
    .should('have.length', 5)
    .get('button[class="letter-button button green"]')
    .should('have.length', 5)
    .get('p[class="congratulations-message"]')
    .contains("CORRECT!")
    .get('img[class="new-game-button"]')
    .should('have.length', 1)
  })


it("As a user, when I haven't guessed the correct answer in 6 tries, I should see a message that shows me the correct word and a restart game button")
//clicking on the restart game button starts a new game
//adding another word means that you are on the next row => need a new fixture and cy.intercept for /word endpoint

});


