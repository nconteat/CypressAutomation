class ChooseOptionalsPage {

    getHeadLine() {
        return cy.get('seat-configuration-page-headline').first()
    }

    getSeats() {
        return cy.get(':nth-child(2) > .section > seat-part-section > .part-container > seat-part')
    }

    getComfortItems() {
        return cy.get(':nth-child(3) > .section > seat-part-section > .part-container > seat-part')
    }

    getAudioAndTechnologyItems() {
        return cy.get(':nth-child(4) > .section > seat-part-section > .part-container > seat-part')
    }

    getClimatizationItems() {
        return cy.get(':nth-child(6) > .section > seat-part-section > .part-container > seat-part')
    }

    getOthersItems() {
        return cy.get(':nth-child(7) > .section > seat-part-section > .part-container > seat-part')
    }

    getNextButton() {
        return cy.get(' footer seat-button ')
    }

    selectSeatsOptionals(seatName) {
        this.getSeats().each(($seat, index) => {
            if ($seat.text().includes(seatName)) {
                cy.get(':nth-child(2) > .section > seat-part-section > .part-container > seat-part').eq(index).click()
            }
        })
    }

    selectComfortOptionals(comfortType) {
        this.getComfortItems().each(($item, index) => {
            if ($item.text().includes(comfortType)) {
                cy.get(':nth-child(3) > .section > seat-part-section > .part-container > seat-part').eq(index).click()
            }
        })
    }

    selectAudioAndTechnologyOptionals(audioType) {
        this.getAudioAndTechnologyItems().each(($item, index) => {
            if ($item.text().includes(audioType)) {
                cy.get(':nth-child(4) > .section > seat-part-section > .part-container > seat-part').eq(index).click()
            }
        })
    }

    selectClimatizationOptionals(climatizationType) {
        this.getClimatizationItems().each(($item, index) => {
            if ($item.text().includes(climatizationType)) {
                cy.get(':nth-child(6) > .section > seat-part-section > .part-container > seat-part').eq(index).click()
            }
        })
    }

    selectOthersOptionals(othersType) {
        this.getOthersItems().each(($item, index) => {
            if ($item.text().includes(othersType)) {
                cy.get(':nth-child(7) > .section > seat-part-section > .part-container > seat-part').eq(index).click()
            }
        })
    }
}

export default ChooseOptionalsPage;
