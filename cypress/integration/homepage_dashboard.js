describe('Oh my word homepage test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%7B5%7D%24&frequencyMin=4.00&random=true', {
      fixture: 'random_word.json'
    });
    
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/brown', {
      fixture: 'brown_valid_in_api.json'
    })

    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/solar', {
      fixture: 'random_word.json'
    })

    cy.visit('http://localhost:3000');
  });

  it("As a user, when I click on the puzzle piece of the header I should be navigated to the homepage", () => {
    cy.get('img[class="header-puzzle-w"]')
      .click()
      .url().should('eq', 'http://localhost:3000/');
  });

  it("As a user, when I click on the question mark icon in the header I should be navigated to the How To Play page", () => {
    cy.get('img[class="question-mark-icon"]')
      .click()
      .url().should('eq', 'http://localhost:3000/how-to-play');
  });
  
  it("As a user, when I visit a route that is invalid I should see a 404 not found message and instructions on how to go back to the homepage", () => {
    cy.visit('http://localhost:3000/u')
      .get('p[class="page-not-found-message"]')
      .should('have.text', '404: Page was not found.')
      .get('p[class="click-on-puzzle-message"]')
      .should('have.text', 'Click on the puzzle piece to navigate back to the homepage.')
      
  });

  it("As a user, when I click on a letter on the keyboard I should see it displayed on the game board", () => {
    cy.get('button[id="b"]').click()
      .get('article[class="typed-letter"]')
      .contains("b");
  });

  it("As a user, when I click the delete button on the keyboard the last letter has now been removed from the game board", () => {
    cy.get('button[id="b"]').click()
      .get('button[id="r"]').click()
      .get('button[id="delete-button"]').click()
      .get('main[class="game-board"]')
      .contains("b")
      .contains("r").should("not.exist");
  });

  it("As a user, when I've typed in a valid 5 letter word and press enter I should see that the game board tiles and keyboard keys have now changed color", () => {
    cy.get('button[id="b"]').click()
      .get('button[id="r"]').click()
      .get('button[id="o"]').click()
      .get('button[id="w"]').click()
      .get('button[id="n"]').click()
      .get('button[id="enter-button"]').click()
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
      .should('have.length', 2);
  });

  it("As a user, when I've typed in an invalid 5 letter word and press enter I should see a message that tells me that the word is not in the list", () => {
    cy.get('button[id="b"]').click()
      .get('button[id="o"]').click()
      .get('button[id="o"]').click()
      .get('button[id="w"]').click()
      .get('button[id="n"]').click()
      .get('button[id="enter-button"]').click()
      .get('p[class="error-message"]')
      .contains("NOT IN WORD LIST.");
  });

  it("As a user, when I've guessed the correct answer, I should see that the game board tiles and keyboard keys are green, a message that tells me that I was correct and a restart game button", () => {
    cy.get('button[id="s"]').click()
      .get('button[id="o"]').click()
      .get('button[id="l"]').click()
      .get('button[id="a"]').click()
      .get('button[id="r"]').click()
      .get('button[id="enter-button"]').click()
      .get('article[class="typed-letter past-row green"]')
      .should('have.length', 5)
      .get('button[class="letter-button button green"]')
      .should('have.length', 5)
      .get('p[class="congratulations-message"]')
      .contains("CORRECT!")
      .get('img[class="new-game-button"]')
      .should('have.length', 1);
  });

  it("As a user, when I haven't guessed the correct answer in 6 tries, I should see all of the game board tiles and keyboard keys with the correct colors, a message that shows me the correct word and a restart game button", () => {
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/tiles', {
      fixture: 'tiles_valid_in_api.json'
    });
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/stink', {
      fixture: 'tiles_valid_in_api.json'
    });
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/creep', {
      fixture: 'tiles_valid_in_api.json'
    });
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/smell', {
      fixture: 'tiles_valid_in_api.json'
    });
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/roses', {
      fixture: 'tiles_valid_in_api.json'
    });

    cy.get('button[id="b"]').click()
      .get('button[id="r"]').click()
      .get('button[id="o"]').click()
      .get('button[id="w"]').click()
      .get('button[id="n"]').click()
      .get('button[id="enter-button"]').click();
    cy.get('button[id="t"]').click()
      .get('button[id="i"]').click()
      .get('button[id="l"]').click()
      .get('button[id="e"]').click()
      .get('button[id="s"]').click()
      .get('button[id="enter-button"]').click();
    cy.get('button[id="s"]').click()
      .get('button[id="t"]').click()
      .get('button[id="i"]').click()
      .get('button[id="n"]').click()
      .get('button[id="k"]').click()
      .get('button[id="enter-button"]').click();
    cy.get('button[id="c"]').click()
      .get('button[id="r"]').click()
      .get('button[id="e"]').click()
      .get('button[id="e"]').click()
      .get('button[id="p"]').click()
      .get('button[id="enter-button"]').click();
    cy.get('button[id="s"]').click()
      .get('button[id="m"]').click()
      .get('button[id="e"]').click()
      .get('button[id="l"]').click()
      .get('button[id="l"]').click()
      .get('button[id="enter-button"]').click(); 
    cy.get('button[id="r"]').click()
      .get('button[id="o"]').click()
      .get('button[id="s"]').click()
      .get('button[id="e"]').click()
      .get('button[id="s"]').click()
      .get('button[id="enter-button"]').click();

    cy.get('article[class="typed-letter past-row green"]')
      .should('have.length', 4)
      .get('button[class="letter-button button green"]')
      .should('have.length', 3)
      .get('article[class="typed-letter past-row yellow"]')
      .should('have.length', 7)
      .get('button[class="letter-button button yellow"]')
      .should('have.length', 1)
      .get('article[class="typed-letter past-row dark-grey"]')
      .should('have.length', 19)
      .get('button[class="letter-button button dark-grey"]')
      .should('have.length', 10);

    cy.get('p[class="correct-answer-message"]')
      .contains("WORD: SOLAR")
      .get('img[class="new-game-button"]')
      .should('have.length', 1);
  });

  it("As a user, when I click on the restart game button the board will clear out and I will be able to enter a new guess for the new word", () => {
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/roses', {
      fixture: 'tiles_valid_in_api.json'
    });

    cy.get('button[id="s"]').click()
      .get('button[id="o"]').click()
      .get('button[id="l"]').click()
      .get('button[id="a"]').click()
      .get('button[id="r"]').click()
      .get('button[id="enter-button"]').click()
      .get('img[class="new-game-button"]').click()
      .get('main[class="game-board"]')
      .get('article[class="typed-letter"]')
      .should('have.length', 30)
      .get('div[class="keyboard"]')
      .get('button[class="letter-button button "]')
      .should('have.length', 26);

    cy.get('article[class="dark-grey"]').should('not.exist');
    cy.get('article[class="yellow"]').should('not.exist');
    cy.get('article[class="green"]').should('not.exist');

    cy.get('button[id="r"]').click()
      .get('button[id="o"]').click()
      .get('button[id="s"]').click()
      .get('button[id="e"]').click()
      .get('button[id="s"]').click()
      .get('button[id="enter-button"]').click()
      .get('article[class="typed-letter past-row green"]')
      .should('have.length', 1)
      .get('button[class="letter-button button green"]')
      .should('have.length', 1)
      .get('article[class="typed-letter past-row yellow"]')
      .should('have.length', 2)
      .get('button[class="letter-button button yellow"]')
      .should('have.length', 2)
      .get('article[class="typed-letter past-row dark-grey"]')
      .should('have.length', 2)
      .get('button[class="letter-button button dark-grey"]')
      .should('have.length', 1);
  });

});


