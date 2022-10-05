class MimirHomePage{

    homePage_Documentation='[href="/products"] > pfe-card'
    homePage_Documentation_InFooter='li >[href="/products"]'
    homePage_Solutions='[href="/search/?q=*&p=1&rows=10&documentKind=solution"] > pfe-card'
    homePage_Solutions_InFooter='li > [href="/search/?q=*&p=1&rows=10&documentKind=solution"]'
    homePage_Articles='[href="/search/?q=*&p=1&rows=10&documentKind=article"] > pfe-card'
    homePage_Articles_InFooter='li > [href="/search/?q=*&p=1&rows=10&documentKind=article"]'
    homePage_CustomerPortalTermsofUse_Footer='[class="terms-of-use"]'
    homePage_PrivacyStatement_Footer='.privacy-policy'
    homePage_RedHatCustomerPortal_Header='[class="pfe-navigation__logo-image"]'
    homePage_SearchTab='bdo >cp-search-autocomplete'
    homePage_SearchTabSub='input[type=search]'
    homePage_SearchTab_Header='header >pfe-navigation'
    homePage_SearchTab_Header1='div'
    homePage_SearchTab_Header2='header >pfe-navigation>div' 
    homePage_SearchTab_Header3='cp-search-autocomplete'
    homePage_SearchTab_Header4='pfe-autocomplete'

 
    clickDocumentation(){
        cy.get(this.homePage_Documentation).click()

    }
    clickDocumentation_InFooter(){
        cy.get(this.homePage_Documentation_InFooter).click()

    }
    clickSolutions(){
        cy.get(this.homePage_Solutions).click()

    }
    clickSolutions_InFooter(){
        cy.get(this.homePage_Solutions_InFooter).click()

    }
    clickArticles(){
        cy.get(this.homePage_Articles).click()

    }
    clickArticles_InFooter(){
        cy.get(this.homePage_Articles_InFooter).click()

    }
    click_CustomerPortalTermsofUse_Footer(){
        cy.get(this.homePage_CustomerPortalTermsofUse_Footer).click()

    }
    click_PrivacyStatement_Footer(){
        cy.get(this.homePage_PrivacyStatement_Footer).click()

    }
    click_RedHatCustomerPortal_Header(){
        cy.get(this.homePage_RedHatCustomerPortal_Header).click({force: true})

    }
    write_SearchTab(search){
        cy.get(this.homePage_SearchTab).shadow().find(this.homePage_SearchTabSub).type('RHEL{enter}')

    }
    write_SearchTab_Header(){
        cy.get(this.homePage_SearchTab_Header).shadow().find(this.homePage_SearchTab_Header1).eq(5).find(this.homePage_SearchTab_Header1).eq(0).click()
        cy.get(this.homePage_SearchTab_Header2).eq(3).find(this.homePage_SearchTab_Header1).find(this.homePage_SearchTab_Header3).shadow().find(this.homePage_SearchTab_Header4).type('RHEL{enter}')

    }


}
export default MimirHomePage