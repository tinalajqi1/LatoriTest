import * as link from "../support/loadThemeImpl"
import * as addToCart from "../support/addToCartImpl"
import * as checkOut from "../support/checkOutImpl"

describe('Checkout', () => {
    beforeEach(() => {
        link.openPage();
        addToCart.chooseProductToAddOnCart();
    })

    it('Item should be added to cart and from there proceed to checkout', () => {
        checkOut.checkoutProduct();
    })
})
