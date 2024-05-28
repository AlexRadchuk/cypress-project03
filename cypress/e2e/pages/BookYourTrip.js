class BookYourTrip {
  // locators
  getOneWayButton() {
    return cy.get('[value="One way"]')
  }
  getRoundTripButton() {
    return cy.get('[value="Round trip"]')
  }

  getCabinFromTO() {
    return cy.get(".select").then(($el) => {
      return Cypress.$($el).slice(0, 3).toArray();
    });
  }

  getDepart() {
    return cy.get('[placeholder="MM/DD/YY"]').eq(0);
  }

  getLabelDepart() {
    return cy.get('div:nth-child(5) > label');
  }


  getReturn() {
    return cy.get('[placeholder="MM/DD/YY"]').eq(1);
  }

  getLabelReturn() {
    return cy.get('div:nth-child(6) > label');
  }

  getNumberOfPasenger() {
    return cy.get(':nth-child(7) > .select > select');
  }

  getLabelNumberOfPasenger() {
    return cy.get('div:nth-child(7) > label');
  }

  getPasenger1() {
    return cy.get(':nth-child(8) > .select > select');
  }

  getLabelPasenger1() {
    return cy.get('div:nth-child(8) > label');
  }

  getBookButton() {
    return cy.get('.Button_c_button__TmkRS')
  }

  getCabin() {
    return cy.get('.select > select').eq(0);
  }

  getLabelCabin() {
    return cy.get('div:nth-child(2) > label').eq(2);
  }

  getFrom() {
    return cy.get('.select > select').eq(1);
  }

  getLabelFrom() {
    return cy.get('div:nth-child(3) > label');
  }

  getTo() {
    return cy.get('.select > select').eq(2);
  }

  getLabelTo() {
    return cy.get('div:nth-child(4) > label');
  }

  getRoundTrip() {
    return cy.get('.mr-1').eq(1);
  }

  getLabelConfirmDepart() {
    return cy.get('.is-underlined').eq(0);
  }

  getLabelFromTo() {
    return cy.get('.is-italic').eq(0);
  }

  getLabelDate() {
    return cy.get('div.field.is-flex > div > p');
  }

  getLabelReturnDate() {
    return cy.get(' div:nth-child(2) > div > p');
  }

  getLabelPassengerInfo() {
    return cy.get('.mt-4  > p');
  }

  getLabelConfirmReturn() {
    return cy.get('.is-underlined').eq(1);
  }

  getLabelReturnFromTo() {
    return cy.get('.is-italic').eq(1);
  }

  getPasenger2() {
    return cy.get(':nth-child(9) > .select > select');
  }

  getLabelPasenger2() {
    return cy.get('.mt-4  > p(3)');
  }











  // methods

  /**
   * 
   * @param {number} month 
   * @param {number} day 
   * @param {number} year 
   * @returns it returns Date in different view format
   */
  getDate(month, day, year) {
    return `${year}-${month}-${day}`;
  }

  /**
   * Click the book button on the page
   */
  clickBookButton() {
    this.getBookButton().click()
  }


}

export default BookYourTrip
