class ChooseCarInteriorPage {

    getHeadLine() {
        return cy.get('seat-configuration-page-headline').first()
    }

    getNextButton() {
        return cy.get(' footer seat-button ')
    }

    getUpholsteries(){
        return cy.get('seat-part-section div.interior-item')
    }

    selectUpholstery(upholsteryType) {
        this.getUpholsteries().each(($upholstery, index) => {
            if ($upholstery.text().includes(upholsteryType)) {
                cy.get('seat-part-section div.interior-item').eq(index).click()
            }
        })
    }
}

export default ChooseCarInteriorPage;
