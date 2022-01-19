describe('Oh my word player stats dashboard test', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://wordsapiv1.p.rapidapi.com/words/?letterPattern=%5E%5Ba-z%5D%7B5%7D%24&frequencyMin=4.00&random=true', {
      fixture: 'random_word.json'
    });

    cy.visit('http://localhost:3000');
  });

  it("As a user, when I visit the player stats page for the first time I should that all of my stats are at 0", () => {
    cy.visit('http://localhost:3000/player-stats')
      .get('div[class="statistic games-played"]')
      .should('have.text', 0)
      .get('div[class="statistic win-percentage"]')
      .should('have.text', 0)
      .get('div[class="statistic current-streak"]')
      .should('have.text', 0)
      .get('div[class="statistic max-streak"]')
      .should('have.text', 0);
  });

  it("As a user, when I've guessed the correct answer the first time that I visit the site, click the restart button and then click the stats icon to navigate to the player stats page I should see that my stats have now been updated", () => {
    cy.get('button[id="s"]').click()
      .get('button[id="o"]').click()
      .get('button[id="l"]').click()
      .get('button[id="a"]').click()
      .get('button[id="r"]').click()
      .get('button[id="enter-button"]').click()
      .get('img[class="new-game-button"]').click()
      .get('img[class="player-stats-icon"]').click()

    cy.get('div[class="statistic games-played"]')
      .should('have.text', 1)
      .get('div[class="statistic win-percentage"]')
      .should('have.text', 100)
      .get('div[class="statistic current-streak"]')
      .should('have.text', 1)
      .get('div[class="statistic max-streak"]')
      .should('have.text', 1);
  });
});