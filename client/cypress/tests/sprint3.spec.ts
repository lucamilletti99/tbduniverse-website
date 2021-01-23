describe('Sprint 3', () => {
    beforeEach(()=>{
        cy.visit('/sprint3');
    })
    describe('button clicks', () => {
        
        //Luke Lenny's unit test, checking to ensure the Yes button correctly requests 
        //from server and receives a joke
        it('Should output a joke', () => { 
            cy.get('Button').contains('Yes').click(); //clicks the no button
            cy.intercept('GET','/api/joke', response => {
                cy.get('jokeResponse').should('contain',response); //checks that the response is the same as the output message
            });
            cy.contains("User Doesn't like Jokes").should("not.exist");
        })
        /*Luca Milletti Unit Test
        Makes sure that when the 'no' button is clicked, a specific user message is output */
        it('Should output "User Doesnt like Jokes"', () => {
            cy.get('Button').contains('No').click(); //clicks the no button
            cy.contains("User Doesn't like Jokes"); //check if user doesn't like jokes is output
        });
    })
});