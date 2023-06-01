class CarModelPage {

    getHeadLine() {
        return cy.get('h4.headline:visible')
    }

    selectCarLine(carLine) {
        cy.get(' main.ng-star-inserted > .column-2.row-1 > .carline-name').each(($car, index) => {
            if ($car.text().includes(carLine)) {
                cy.get('main.ng-star-inserted > .start-config-button-container > main > b').eq(index).click()
            }
        })
    }
}

export default CarModelPage;
