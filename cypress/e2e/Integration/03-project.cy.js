///<reference types="cypress" />

import BookYourTrip from "../pages/BookYourTrip";
const bookYourTrip = new BookYourTrip()

const date = new Date();

const oneWeekLater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);

describe('cypress project 03 - Book Your Trip', () => {
  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/frontend/project-3');
  })

  /**
   * Navigate to https://techglobal-training.com/frontend/project-3
     Validate that the “One way” radio button is displayed enabled and selected by default
     Validate that the “Round trip” radio button is displayed enabled and not selected by default
     Validate that the “Cabin Class” label and dropdown are displayed
     Validate that the “From” label and dropdown are displayed
     Validate that the “To” label and dropdown are displayed
     Validate that the “Depart” label and date picker is displayed
     Validate that the “Return” label and date picker is displayed and disabled
     Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
     Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
     Validate that the “BOOK” button is displayed and enabled
   */
  it('Test Case 01 - Validate the default Book your trip form', () => {
    bookYourTrip.getOneWayButton().should('be.visible').and('be.checked');
    bookYourTrip.getRoundTripButton().should('be.visible').and('not.be.checked');
    bookYourTrip.getCabinFromTO().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    bookYourTrip.getLabelDepart().should('have.text', 'Depart');
    bookYourTrip.getDepart().should('be.visible');
    bookYourTrip.getLabelReturn().should('have.text', 'Return');
    bookYourTrip.getReturn().should('be.visible').and('not.be.enabled');
    bookYourTrip.getNumberOfPasenger().should('be.visible').and('have.value', '1');
    bookYourTrip.getPasenger1().should('be.visible').and('have.value', 'Adult (16-64)');
    bookYourTrip.getBookButton().should('be.visible').and('be.enabled');
  });


  /**
   * Navigate to https://techglobal-training.com/frontend/project-3
     Click on the “Round trip” radio button and validate it is selected
     Validate that the “One way” radio button is not selected
     Validate that the “Cabin Class” label and dropdown are displayed
     Validate that the “From” label and dropdown are displayed
     Validate that the “To” label and dropdown are displayed
     Validate that the “Depart” label and date picker is displayed
     Validate that the “Return” label and date picker is displayed
     Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
     Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
     Validate that the “BOOK” button is displayed and enabled
   */

  it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {
    bookYourTrip.getRoundTrip().check().should('be.checked');
    bookYourTrip.getOneWayButton().should('not.be.checked');
    bookYourTrip.getCabin().should('be.visible');
    bookYourTrip.getFrom().should('be.visible');
    bookYourTrip.getTo().should('be.visible');
    bookYourTrip.getDepart().should('be.visible');
    bookYourTrip.getLabelDepart().should('be.visible');
    bookYourTrip.getReturn().should('be.visible');
    bookYourTrip.getLabelReturn().should('be.visible');
    bookYourTrip.getNumberOfPasenger().should('be.visible').and('have.value', '1');
    bookYourTrip.getLabelNumberOfPasenger().should('be.visible');
    bookYourTrip.getPasenger1().should('be.visible').and('have.value', 'Adult (16-64)');
    bookYourTrip.getBookButton().should('be.visible').and('be.enabled');

  })

  /**
   * Navigate to https://techglobal-training.com/frontend/project-3
     Select the “One way” radio button
     Select “Business” for the “Cabin Class” dropdown
     Select “Illinois” for the “From” dropdown
     Select “Florida” for the “To” dropdown
     Select the next week for the ”Depart”
     Select “1” for the “Number of passengers” dropdown
     Select “Senior (65+)” for the Passenger 1 dropdown
     Click on the “BOOK” button
     Validate the booking information displayed below
     DEPART
     IL to FL
     {dynamic date}
     Number of passengers: 1
     Passenger 1: Senior (65+)
     Cabin Class: Business
   */
  const oneWayInfo = ['Number of Passengers: 1', 'Passenger 1: Senior (65+)', 'Cabin class: Business']

  it.only('Test Case 03 - Validate the booking for 1 passenger and one way', () => {
    bookYourTrip.getOneWayButton().check();
    bookYourTrip.getCabin().select('Business');
    bookYourTrip.getFrom().select('Illinois');
    bookYourTrip.getTo().select('Florida');
    bookYourTrip.getDepart().clear().type(bookYourTrip.getDate(oneWeekLater));
    bookYourTrip.getNumberOfPasenger().select(0, { force: true });
    bookYourTrip.getPasenger1().select('Senior (65+)')
    bookYourTrip.clickBookButton();
    bookYourTrip.getLabelDepart().should('be.visible').and('have.text', 'DEPART')
    bookYourTrip.getLabelFromTo().should('be.visible').and('have.text', 'IL to FL')
    bookYourTrip.getLabelDate().should('have.text', oneWeekLater)
    bookYourTrip.getLabelPassengerInfo().each(($el, index) => {
      cy.wrap($el).should('have.text', oneWayInfo[index]);






    })
  })















});



