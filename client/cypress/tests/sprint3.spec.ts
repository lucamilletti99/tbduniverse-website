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
        })
        /*Luca Milletti Unit Test
        Makes sure that when the 'no' button is clicked, a specific user message is output */
        it('Should output "User Doesnt like Jokes"', () => {
            cy.get('Button').contains('No').click(); //clicks the no button
            cy.contains("User Doesn't like Jokes"); //check if user doesn't like jokes is output
        });
    })
});