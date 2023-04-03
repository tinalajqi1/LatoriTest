export function checkoutProduct() {
    cy.get('#cart-icon-bubble').click();
    cy.url().should('contain', 'https://theme-dawn-demo.myshopify.com/cart')
    cy.get('#checkout').click();
    cy.get('button:contains("Continue to shipping")').should('be.visible');

}

