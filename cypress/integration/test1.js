describe("Test 1",()=>{
    it("Cypress",()=>{
        expect(true).to.equal(true)
    })

    it("Visit",()=>{
        cy.visit('/')
    })
})