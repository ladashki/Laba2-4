// JavaScript Document
describe('Accepts input',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    
     it('Api', () => {
          cy.get('button').click()
         cy.then((response) => {
             cy.request('https://kanye.rest/')
             cy.get('h3')
          })
     })
  
})



