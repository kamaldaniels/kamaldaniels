describe('H1 should be visible', () => {
  it(`macbook-15`, () => {
    cy.visit('/')
    cy.viewport('macbook-15')
    cy.get('h1').should('be.visible')
  })

  it(`macbook-13`, () => {
    cy.viewport('macbook-13')
    cy.get('h1').should('be.visible')
  })

  it(`ipad-2`, () => {
    cy.viewport('ipad-2')
    cy.get('h1').should('be.visible')
  })

  it(`iphone-x`, () => {
    cy.viewport('iphone-x')
    cy.get('h1').should('be.visible')
  })

  it(`iphone-x`, () => {
    cy.viewport('iphone-x', 'landscape')
    cy.get('h1').should('be.visible')
  })
})
