/// <reference types="Cypress" />


Cypress.Commands.add('doGetRequest', () => {
    cy.request(Cypress.env('url'))
        .then((response) => {
            cy.writeFile('cypress/fixtures/response.json', response.body)
        })
});

Cypress.Commands.add('validateKeys', () => {
    cy.fixture('response.json').then(data => {
        cy.fixture('response_to_compare.json').then(dataToCompare => {
            //compare keys
            expect(data).to.have.keys(dataToCompare);
        });
    });
});


Cypress.Commands.add('validateOwnerLogin', () => {
    cy.fixture('response.json').then(data => {
       expect(data.owner.login).to.deep.equal("seatcode")
    });
});


describe('API Automation', function () {

    it('Check the structure of the json for the given endpoint', function () {
        cy.doGetRequest();
        cy.validateKeys();
    })

    it('Check for the presence of the word seatcode in the field owner->login  ', function () {
        cy.validateOwnerLogin();
    })

})