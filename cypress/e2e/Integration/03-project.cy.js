///<reference types="cypress" />

import BookYourTrip from "../pages/BookYourTrip";
const bookYourTrip = new BookYourTrip()

const date = new Date();

const oneWeekLater = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);

const oneMonthLater = new Date(date.getTime() + 31 * 24 * 60 * 60 * 1000);

const nextDay = new Date(date.getTime() + 24 * 60 * 60 * 1000);

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

it('Test Case 03 - Validate the booking for 1 passenger and one way', () => {
  bookYourTrip.getOneWayButton().check();
  bookYourTrip.getCabin().select('Business');
  bookYourTrip.getFrom().select('Illinois');
  bookYourTrip.getTo().select('Florida');
  bookYourTrip.getDepart().clear().type((bookYourTrip.getDate(oneWeekLater)).slice(10, 25));
  bookYourTrip.getNumberOfPasenger().select(0, { force: true });
  bookYourTrip.getPasenger1().select('Senior (65+)')
  bookYourTrip.clickBookButton();
  bookYourTrip.getLabelConfirmDepart().should('be.visible').and('have.text', 'DEPART');
  bookYourTrip.getLabelDate().should('be.visible').and('have.text', (bookYourTrip.getDate(oneWeekLater)).slice(10, 25))
  bookYourTrip.getLabelFromTo().should('be.visible').and('have.text', 'IL to FL');
  bookYourTrip.getLabelPassengerInfo().each(($el, index) => {
    cy.wrap($el).should('have.text', oneWayInfo[index]);
  })
})

/**
 * Navigate to https://techglobal-training.com/frontend/project-3
  Select the “Round trip” radio button
  Select “First” for the “Cabin Class” dropdown
  Select “California” for the “From” dropdown
  Select “Illinois” for the “To” dropdown
  Select the next week for the ”Depart”
  Select the next month for the “Return”
  Select “1” for the “Number of passengers” dropdown
  Select “Adult (16-64)” for the Passenger 1 dropdown
  Click on the “BOOK” button
  Validate the booking information displayed below
  DEPART
  CA to IL
  {dynamic date}
  Number of passengers: 1
  Passenger 1: Adult (16-64)
  Cabin Class: First
    
    
  RETURN
  IL to CA
  {dynamic date}
 */
const tripInfo = ['Number of Passengers: 1', 'Passenger 1: Adult (16-64)', 'Cabin class: First']

it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {
  bookYourTrip.getRoundTrip().check();
  bookYourTrip.getCabin().select('First');
  bookYourTrip.getFrom().select('California');
  bookYourTrip.getTo().select('Illinois');
  bookYourTrip.getDepart().clear().type((bookYourTrip.getDate(oneWeekLater)).slice(10, 25));
  bookYourTrip.getReturn().clear().type((bookYourTrip.getDate(oneMonthLater)).slice(10, 25));
  bookYourTrip.getNumberOfPasenger().select(0, { force: true });
  bookYourTrip.getPasenger1().select('Adult (16-64)');
  bookYourTrip.clickBookButton();
  bookYourTrip.getLabelConfirmDepart().should('be.visible').and('have.text', 'DEPART');
  bookYourTrip.getLabelFromTo().should('be.visible').and('have.text', 'CA to IL');
  bookYourTrip.getLabelDate().should('be.visible').and('have.text', (bookYourTrip.getDate(oneWeekLater)).slice(10, 25));
  bookYourTrip.getLabelPassengerInfo().each(($el, index) => {
    cy.wrap($el).should('have.text', tripInfo[index]);
  })
  bookYourTrip.getLabelConfirmReturn().should('be.visible').and('have.text', 'RETURN');
  bookYourTrip.getLabelReturnFromTo().should('be.visible').and('have.text', 'IL to CA');

})
/**
 * Navigate to https://techglobal-training.com/frontend/project-3
   Select the “One way” radio button
   Select “Premium Economy” for the “Cabin Class” dropdown
   Select “New York” for the “From” dropdown
   Select “Texas” for the “To” dropdown
   Select the next day for the ”Depart”
   Select “2” for the “Number of passengers” dropdown
   Select “Adult (16-64)” for the Passenger 1 dropdown
   Select “Child (2-11)” for the Passenger 2 dropdown
   Click on the “BOOK” button
   Validate the booking information displayed below
   DEPART
   NY to TX
   {dynamic date}
   Number of passengers: 2
   Passenger 1: Adult (16-64)
   Passenger 2: Child (2-11)
   Cabin Class: Premium Economy
 */
const trip2PassengersInfo = ['Number of Passengers: 2', 'Passenger 1: Adult (16-64)', 'Passenger 2: Child (2-11)', 'Cabin class: Premium Economy'];

it('Test Case 05 - Validate the booking for 2 passengers and one way', () => {
  bookYourTrip.getOneWayButton().check();
  bookYourTrip.getCabin().select('Premium Economy');
  bookYourTrip.getFrom().select('New York');
  bookYourTrip.getTo().select('Texas');
  bookYourTrip.getDepart().clear().type((bookYourTrip.getDate(nextDay)).slice(10, 25));
  bookYourTrip.getNumberOfPasenger().select(1, { force: true });
  bookYourTrip.getPasenger1().select('Adult (16-64)');
  bookYourTrip.getPasenger2().select('Child (2-11)');
  bookYourTrip.clickBookButton();
  bookYourTrip.getLabelConfirmDepart().should('be.visible').and('have.text', 'DEPART');
  bookYourTrip.getLabelFromTo().should('be.visible').and('have.text', 'NY to TX');
  bookYourTrip.getLabelDate().should('be.visible').and('have.text', (bookYourTrip.getDate(nextDay)).slice(10, 25))
  bookYourTrip.getLabelPassengerInfo().each(($el, index) => {
    cy.wrap($el).should('have.text', trip2PassengersInfo[index]);
  })


})














