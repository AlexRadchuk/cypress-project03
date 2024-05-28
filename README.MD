

---

#### This project was creatated and executed with the use of JaveScript, Node.js, Cypress and CSS selectors.

[<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" width="150"/>](image.png)  [<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="150"/>](image.png) [<img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-1/278128364_4985948144854412_3841072495540246445_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zNBhVH-0NfsQ7kNvgGkf_D4&_nc_ht=scontent-ord5-2.xx&oh=00_AYBubfyRXk7vJKpDmiuHp58jP_Ghxb6ZEyyGywCIzScB5g&oe=665715A2" width="150"/>](image.png) [<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" height="150" width="150"/>](image.png)


##### By: Oleksandr Radchuk
##### Date: 5/24/2024

---

## Testing project-03
[<img src="https://www.perfecto.io/sites/default/files/image/2020-09/social-blog-getting-started-cypress.jpg"/>](image.png)

### Validate the "Book your trip" form  

#### Creator Linkedin page - [Oleksandr Radchuk](https://www.linkedin.com/in/oradchuk/)



### _Getting Started_

- In all test cases we are required to visit this page [project-1](https://www.techglobal-training.com/frontend/project-3)
- So I used `beforeEach` from Mocha framework with `cy.visit()` to handel visiting this website before each test case.
- I used `cy.get(#ID).should('have.text', 'expected text')` to validate most tasks (like contact us, email, address, phone ...etc ) as it will grab the element by it's (ID, Class, or value) and it will preform an assertion to check if this element has this expected text.
- I used `cy.get(#ID).should('be.visible')` to check and validate certain tags are displayed (like input boxes, radio buttons, Submit button) after getting the element it will assert if this element is visible.
- I used `cy.get(#ID).should('have.attr', 'required')` this will get the element and check if it's a required field, it's very usefull in forms where some inputs are reuired \*.
- I used

      cy.get('#ID').each(($el, index) => {
      const options = ["Male", "Female", "Prefer not to disclose"];
      cy.get($el).closest("label").should("have.text", options[index]); });

  a call back with element and index to validate each of my options are exactly as mentioed in options.

- I used `cy.get(#ID).should("not.be.disabled")` to check if a button is clickable.

- I used `cy.get(#ID).type('expected input') `to type anything in the input fields.

- To handel uncaught:exception which is an error comming form an event listner, I used
  ```JavaScript
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  ```

### _Screenshots_

![Image](https://i.ibb.co/hfPM6ND/Screenshot-2024-05-14-at-12-44-35-PM.png)