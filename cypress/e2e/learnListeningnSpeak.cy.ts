describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://dev-langai.e2e271jfqq7g6.us-east-1.cs.amazonlightsail.com/login')
      cy.wait(2000)
      cy.get('.mb-3').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > form > .button').click()
      cy.wait(2000)
      cy.get('#username').type('patoestrada@gmail.com');
      cy.get('#password').type('JRbyuj6Bj:Nugfu');
      cy.get('.cf772ffae > .c89f1057d').click()
      cy.get('.mb-3').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > form > .button').click()
      cy.wait(2000)
      cy.get('[href="/learn"]').click()
      cy.wait(2000)
      cy.get(':nth-child(6) > .rounded-md > span').click()
      cy.wait(2000)
      cy.get('.rounded-md').click()
      cy.wait(2000)
      cy.get('.absolute').click()
      cy.wait(2000)
      cy.get('.absolute').click()
      cy.wait(2000)
      cy.get('.rounded-md').click()
      cy.wait(2000)
      cy.get('.absolute').click()
      cy.wait(2000)
      cy.get('.absolute').click()
      cy.wait(2000)
      cy.get('.rounded-md').click()
      cy.wait(2000)
      cy.get('.absolute').click()
      cy.wait(2000)
      cy.get('.absolute').click()
      cy.wait(2000)
      cy.get('.rounded-md').click()
      cy.wait(3000)
      cy.contains('See Your Grades').click();
  
      cy.wait(4000)
    
      
    
    })
  })