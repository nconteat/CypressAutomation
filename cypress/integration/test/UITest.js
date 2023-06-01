/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';
import CarModelPage from '../../support/pageObjects/CarModelPage';
import ChooseEnginePage from '../../support/pageObjects/ChooseEnginePage';
import ChooseCarExteriorPage from '../../support/pageObjects/ChooseCarExteriorPage';
import ChooseCarInteriorPage from '../../support/pageObjects/ChooseCarInteriorPage';
import ChooseOptionalsPage from '../../support/pageObjects/ChooseOptionalsPage';
import SummaryPage from '../../support/pageObjects/SummaryPage';


describe('UI Automation - Car configurator', function () {
    const homePage = new HomePage()
    const carModelPage = new CarModelPage()
    const chooseEnginePage = new ChooseEnginePage()
    const chooseCarExteriorPage = new ChooseCarExteriorPage()
    const chooseCarInteriorPage = new ChooseCarInteriorPage()
    const chooseOptionalsPage = new ChooseOptionalsPage()
    const summaryPage = new SummaryPage()

    beforeEach(function () {
        // runs once before all tests in the block
        cy.fixture('car_model.json').then(function (data) {
            this.data = data
        })
    })


    it('Configure a car model and check that the data is correct', function () {
        cy.visit(Cypress.env('seatCarConfigUrl'))
        cy.wait(3000)
        homePage.acceptCookies()

        homePage.selectCarModel(this.data.model)
        cy.wait(3000)

        carModelPage.getHeadLine().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Elige tu acabado")).to.be.true
        })

        carModelPage.selectCarLine(this.data.line)

        //Choose Engine Page
        chooseEnginePage.getHeadLine().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Elegir motor")).to.be.true
        })

        chooseEnginePage.selectEngineType(this.data.engineType)
        chooseEnginePage.selectEngineByName(this.data.engineModel)

        cy.wait(4000)
        chooseEnginePage.getEngines().each(($engine, index) => {
            if ($engine.text().includes(this.data.engineModel)) {
                cy.get('seat-engine-item header').eq(index).children('mat-icon').should('be.visible')
            }
        })

        chooseEnginePage.getNextButton().click()

        //Car Exterior Page
        chooseCarExteriorPage.getColorsHeadLine().should('be.visible')
        chooseCarExteriorPage.getColorsHeadLine().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Elegir color")).to.be.true
        })

        chooseCarExteriorPage.selectColor();
        cy.wait(3000)
        chooseCarExteriorPage.getTiresHeadLine().should('be.visible')
        chooseCarExteriorPage.getTiresHeadLine().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Elegir llantas")).to.be.true
        })

        chooseCarExteriorPage.selectTires(this.data.tireType);
        chooseCarExteriorPage.getNextButton().click()

        //Car Interior Page
        chooseCarInteriorPage.getHeadLine().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Elegir tapicer")).to.be.true
        })

        chooseCarInteriorPage.selectUpholstery(this.data.upholsteryType)
        chooseCarInteriorPage.getNextButton().click()

        chooseOptionalsPage.getHeadLine().then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Añadir paquetes")).to.be.true
        })

        chooseOptionalsPage.getNextButton().click()

        //Summary page
        cy.wait(2000)
        summaryPage.getPriceDetailBox().should('be.visible')
        summaryPage.getPersonalizedOfferButton().should('be.visible')
        summaryPage.getDownloadLink().should('be.visible').should('have.attr', 'href')
        summaryPage.getConfigurationKey().should('be.visible')

        summaryPage.getStandardPriceTitle().should('contain.text', 'Precio estándar')
        summaryPage.getOptionalEquipmentTitle().should('contain.text', 'Equipamiento opcional')

        summaryPage.getStandardPriceValue().should('be.visible').should('contain.text','€')
        summaryPage.getOptionalEquipmentValue().should('be.visible').should('contain.text','€')
        summaryPage.getTotalPrice().should('be.visible').should('contain.text','€')
    })


})