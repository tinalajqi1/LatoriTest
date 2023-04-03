
export function differentDevices() {
    describe('Responsive design', () => {
        const viewports = [
            { width: 320, height: 480 },
            { width: 768, height: 1024 },
            { width: 1200, height: 900 }
        ]

        viewports.forEach(viewport => {
            cy.viewport(viewport.width, viewport.height)

            if (viewport.width > 768) {
                cy.get('#Details-HeaderMenu-1', { timeout: 10000 }).should('be.visible')
              } else {
                cy.get('#Details-menu-drawer-container').should('be.visible');
              }
        })
    })
}