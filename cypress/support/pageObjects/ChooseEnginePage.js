class ChooseEnginePage {

    getHeadLine() {
        return cy.get('seat-configuration-page-headline')
    }

    getGasolineButton() {
        return cy.get('[data-id="gasoline"]')
    }

    getDieselButton() {
        return cy.get('[data-id="diesel"]')
    }

    getHybridButton() {
        return cy.get('[data-id="hybridpetrol"]')
    }
    
    getNextButton() {
        return cy.get(' footer seat-button ')
    }

    getEngines(){
        return cy.get('seat-engine-item header')
    }

    selectEngineByName(engineName) {
        this.getEngines().each(($engine, index) => {
            if ($engine.text().includes(engineName)) {
               cy.get('seat-engine-item header').eq(index).click()
            }
        })
    }


    selectCarLine(carLine) {
        cy.get(' main.ng-star-inserted > .column-2.row-1 > .carline-name').each(($car, index) => {
            if ($car.text().includes(carLine)) {
                cy.get('main.ng-star-inserted > .start-config-button-container > main > b').eq(index).click()
            }
        })
    }

    selectEngineType(engineType) {
        switch (engineType) {
            case 'gasoline':
                this.getGasolineButton().click();
                break;
            case 'diesel':
                this.getDieselButton().click();
                break;
            case 'hybrid':
                this.getHybridButton().click();
                break;
            default:
                throw new Error("Engine type not found!")

        }
    }
}

export default ChooseEnginePage;
