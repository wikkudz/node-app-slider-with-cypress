describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Navigation and Description Test', function () {
  it('Checks if user can navigate slides using navigation buttons and descriptions are correct', function () {
    cy.visit('http://localhost:3000');

    // Check initial slide
    cy.get('.swiper-slide-active').should('contain', 'Rome').and('contain', 'Italy');

    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'London').and('contain', 'United Kingdom');

    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'Paris').and('contain', 'France');

    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('contain', 'London').and('contain', 'United Kingdom');

    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('contain', 'Rome').and('contain', 'Italy');
  });
});