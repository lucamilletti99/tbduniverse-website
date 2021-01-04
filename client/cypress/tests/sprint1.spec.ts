describe('Sprint 1', () => {
    // Before running each test, navigate to the '/sprint1' page, where are the UI components are:
    beforeEach(() => {
      cy.visit('/sprint1')
    })


    // Here's a group of tests which check to make sure that the text area for putting in a number works
  describe('Number input', () => {
    // Make sure that all of the important elements are displaying correctly:
    it('Should have a text input field', () => {
      // Check the text field:
      cy.get('newComponent')
        .should('have.class', 'newComponent');
    })
  })
});

