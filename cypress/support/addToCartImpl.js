export function chooseProductToAddOnCart() {
    cy.get('a:contains("Shop now")').click();
    cy.get('.grid__item').first().click();
    cy.get('button:contains("Add to cart")').click();
    cy.get('#cart-notification').should('be.visible');

}
