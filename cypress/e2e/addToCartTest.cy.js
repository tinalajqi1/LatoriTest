import * as link from "../support/loadThemeImpl"
import * as addToCart from "../support/addToCartImpl"

describe('Add to Cart', () => {
    beforeEach(() => {
        link.openPage();
    })

    it('Item should be added to cart', () => {
        addToCart.chooseProductToAddOnCart()
    })
})
