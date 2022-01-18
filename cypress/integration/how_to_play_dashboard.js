describe('Oh my word\'s "How to play" dashboard test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/how-to-play')
  });
  
  it("As a user, when I navigate to the how to play page I should see instructions on how to play the game", () => {
    cy.get('div[class="how-to-play-header"]')
      .contains('HOW TO PLAY')
      .get('p[class="instructions-text"]')
      .should('have.length', 7)
      .get('div[class="examples-header"]')
      .should('have.length', 1)
      .get('img[class="green-letter tile-image"]')
      .should('have.length', 1)
      .get('img[class="yellow-letter tile-image"]')
      .should('have.length', 1)
      .get('img[class="dark-grey-letter tile-image"]')
      .should('have.length', 1)
  });

});