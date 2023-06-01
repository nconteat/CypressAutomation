class SummaryPage {

    getPriceDetailBox() {
        return cy.get('aside seat-price-box div seat-price-details:visible')
    }

    getPriceDetailTitle() {
        return this.getPriceDetailBox().children('div.title')
    }
    getStandardPriceValue() {
        return cy.get('seat-table-row:nth-child(1) div div:visible')
    }

    getStandardPriceTitle() {
        return cy.get('seat-table-row:nth-child(1) div b:visible')
    }

    getOptionalEquipmentTitle() {
        return cy.get('seat-table-row:nth-child(3) div b:visible')
    }

    getOptionalEquipmentValue() {
        return cy.get('seat-table-row:nth-child(3) div div:visible')
    }

    getTotalPrice() {
        return cy.get('seat-table-row:nth-child(5) div div:visible')
    }

    getPersonalizedOfferButton() {
        return cy.get('seat-responsive-position-switcher div seat-button:visible')
    }

    getConfigurationKey() {
        return cy.get('span.configuration-key')
    }

    getDownloadLink() {
        return cy.get('div.more a')
    }
}

export default SummaryPage;
