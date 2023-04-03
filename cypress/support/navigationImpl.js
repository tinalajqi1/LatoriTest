export function chooseNavigationOption(headerOption, dropdownOption){
    cy.get('.header__inline-menu').contains(headerOption).click();
    cy.get('.header__submenu').contains(dropdownOption).click({force: true});
    cy.get('.collection-hero__title').should('be.visible');
    cy.go('back');
}