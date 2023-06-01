class HomePage {

    getCodeConfigurationInput() {
        return cy.get('seat-input form input[name="text"]')
    }

    getHeader() {
        return cy.get('div[class="headline"]')

    }
    getOffersLink() {
        return cy.get('div.gh-utility-links > :nth-child(3) span')
    }

    getFindUsLink() {
        return cy.get('div.gh-utility-links > :nth-child(2) span')
    }

    getConfiguratorLink() {
        return cy.get('div.gh-utility-links > :nth-child(1) span')
    }

    selectCarModel(carModel) {
        cy.get(' seat-car-selector-list-item > .vertical > .text').each(($car, index) => {
            if ($car.text().includes(carModel)) {
                cy.get('seat-car-selector-list-item > .vertical > .text').eq(index).click()
            }
        })
    }

    acceptCookies(){
        cy.get('#onetrust-accept-btn-handler').click()
    }

}

export default HomePage;
