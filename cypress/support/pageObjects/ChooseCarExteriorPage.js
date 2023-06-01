class ChooseCarExteriorPage {

    getColorsHeadLine() {
        return cy.get('seat-configuration-page-headline').first()
    }
    getTiresHeadLine() {
        return cy.get('seat-configuration-page-headline').last()
    }

    getNextButton() {
        return cy.get(' footer seat-button ')
    }

    getColors(){
        return cy.get('seat-part-item-color')
    }
  
    getTires(){
        return cy.get('seat-part-section div.rim-item')
    }

    selectColor() {
        this.getColors().first().click()
    }


    selectTires(tiresType) {
        this.getTires().each(($tire, index) => {
            if ($tire.text().includes(tiresType)) {
                cy.get('seat-part-section div.rim-item').eq(index).click()
            }
        })
    }
}

export default ChooseCarExteriorPage;
