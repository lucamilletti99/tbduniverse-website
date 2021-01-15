describe('Sprint 2', () => {
    describe('button clicks', () => {

        //Luke Lenny's unit test, checking to ensure the Yes button correctly requests 
        //from server and recieves a joke
        it('Should output a joke', () => { 
        /*
          cy.fixture('jokeChoice.json').then(joke =>{
            cy.intercept('GET', '/api/jokes', joke); 

            cy.reload();

            cy.get('card-header')
              cy.should('have.length', joke.length)
              .then(headers =>{
                 expect(headers[0].innerText).to.equal(joke.choice)
              });
          });
           */
        })
        it('Should output "User Doesnt like Jokes"', () => {

        });
    })
});