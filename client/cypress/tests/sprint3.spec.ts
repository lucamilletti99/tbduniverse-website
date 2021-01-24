describe('Sprint 3', () => {
    beforeEach(()=>{
        cy.visit('/sprint3');
    })
    describe('button clicks', () => {
        
        //Luke Lenny's unit test, checking the functionality of entering a funny 
        //joke according to our design
        it('Should say joke was funny', () => { 
            cy.get('textarea').type('abc')
            cy.get('Button').contains('Submit Joke').click(); //clicks the Submit Joke button
            cy.intercept('POST','/jokeSubmit', response => {
                cy.get('jokeJudge').should('contain',response); //checks that the response is the same as the output message
            });
            cy.contains("Your joke was funny!");
            cy.get('div[id=jokeInput]').find("img[id = happychuck]");
        })
        /*Luca Milletti Unit Test
        Makes sure that when a long joke is entered, that it is not funny will be output */
        it('Should say joke was not funny (no error code) and mad chuck norris image', () => {
            cy.get('textarea').type('This joke is not meant to be funny');
            cy.get('Button').contains('Submit Joke').click(); //clicks the Submit Joke button
            cy.intercept('POST','/jokeSubmit', response => {
                cy.get('jokeJudge').should('contain',response); //checks that the response is the same as the output message
            });
            cy.contains("Your jokes was not funny :(");
            cy.get('div[id=jokeInput]').find("img[id = madchuck]");
            //.should('have.attr', 'src', 'madchuck.png')
        });
    })
});