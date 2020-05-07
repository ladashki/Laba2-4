// JavaScript Document
describe('Accepts input',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    
     it('Click Button', () => {
         cy.get('button').click()
     })
})