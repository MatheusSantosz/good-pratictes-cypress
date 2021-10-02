describe('Code duplication bad practice - Sample 4', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })
 
  it('checks all checkboxes from a specific fieldset', () => {
    
    cy.get('fieldset div input[type="checkbox"]').check() //usando um elemento comum com os 3 campos div
    ///cy.get('#friend').check()
    ///cy.get('#publication').check()
    ///cy.get('#social-media').check()
  })
})
