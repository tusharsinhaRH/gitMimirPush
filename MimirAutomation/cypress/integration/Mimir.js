import MimirHomePage from "./POM_Pages/MimirHome_Page"
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
    
  })
const mimirHomePage =new MimirHomePage()
beforeEach(function(){
    cy.visit('')
  })
  
it("Clicking Documentation",function(){
  //cy.visit("http://mimir.usersys.redhat.com/")
    //mimirHomePage.clickDocumentation()
   
  //  cy.get('bdo > h1').should('have.text','All Red Hat products and documentation')
})

// it ("Clicking Documentation in Footer",function(){
//     //mimirHomePage.clickDocumentation_InFooter()
//     //cy.get('bdo > h1').should('have.text','All Red Hat products and documentation')
// })

// it("Clicking Solutions",function(){
//     //mimirHomePage.clickSolutions()
//     // cy.get ('[href="/search/?q=*&p=1&rows=10&documentKind=solution"] > pfe-card').click()
//     // cy.get('[data-text="Solution"]').should('have.text','Solution')

// })
// it("Clicking Solutions in Footer",function(){
//     //mimirHomePage.clickSolutions_InFooter()
//     // cy.get ('li > [href="/search/?q=*&p=1&rows=10&documentKind=solution"]').click()
//     // cy.get('[data-text="Solution"]').should('have.text','Solution')

// })
// it("Clicking Articles",function(){
//     //mimirHomePage.clickArticles()
//     // cy.get ('[href="/search/?q=*&p=1&rows=10&documentKind=article"] > pfe-card').click()
//     // cy.get('[data-text="Article"]').should('have.text','Article')

// })
// it("Clicking Articles in Footer",function(){
//     //mimirHomePage.clickArticles_InFooter()
//     // cy.get ('li > [href="/search/?q=*&p=1&rows=10&documentKind=article"]').click()
//     // cy.get('[data-text="Article"]').should('have.text','Article')

// })
// it("Clicking Customer Portal Terms of Use in Footer",function(){
//     //mimirHomePage.click_CustomerPortalTermsofUse_Footer() 
//   // cy.get ('[class="terms-of-use"]').click()
//     // cy.get('bdo > :nth-child(3)').should('have.text','Red Hat Terms of Use')

// })
// it("Clicking Privacy Statement in Footer",function(){
//     //mimirHomePage.click_PrivacyStatement_Footer()
//     // cy.get('.privacy-policy').click()
//     // cy.get('bdo > :nth-child(3)').should('have.text','RED HAT PRIVACY STATEMENT')

// })
// it("Clicking Red Hat Customer Portal in Header",function(){
//      //mimirHomePage.click_CustomerPortalTermsofUse_Footer() 
//      //mimirHomePage.click_RedHatCustomerPortal_Header()
//     //cy.get ('[class="terms-of-use"]').click()
//     //cy.get('[class="pfe-navigation__logo-image"]').click({force: true})
//     //cy.get('bdo >h1').should('have.text','Welcome to Project Mimir')

// })
// it("Search Tab Check",function(){
//       mimirHomePage.write_SearchTab('rhel')
//     // cy.get('bdo >cp-search-autocomplete').shadow().find('input[type=search]').type('RHEL{enter}')
//     // cy.get('.header').should('have.text','Search')
// })
it("Search Tab Check_Header",function(){
        mimirHomePage.write_SearchTab_Header()
    // cy.get('header >pfe-navigation').shadow().find('div').eq(5).find('div').eq(0).click()
    // cy.get('header >pfe-navigation>div').eq(3).find('div').find('cp-search-autocomplete').shadow().find('pfe-autocomplete').type('RHEL{enter}')
    cy.get('.header').should('have.text','Search')
    
}) 