import NavBar from "../pages/NavBar"
import LoginPage from "../pages/LoginPage";
import ClothingItemPage from "../pages/ClothingItemPage";
import BasketPage from "../pages/BasketPage";

beforeEach(function () {
  cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
  NavBar.goPlace(NavBar.myAccountLink)
  NavBar.dismissCookie()
  LoginPage.login("ben.bilgili@2itesting.com", "DavidRaya15")
  LoginPage.verifyLogin("ben")

  NavBar.searchInSearchBar("cap")
  ClothingItemPage.addItemToBasket()
  NavBar.goPlace(NavBar.basketLink)
  BasketPage.verifyBasketTableContainsSearchTerm("Cap");

  NavBar.goPlace(NavBar.basketLink)
});


// 1
// The test will login to an e-commerce site as a registered user, purchase an item of clothing, apply a 
// discount code and check that the total is correct after the discount & shipping is applied. 
describe('Ecommerce', () => {

  it('Can login to Ecommerce, purchase an item of clothing using a discount code and verify that discount is correct', () => {
    BasketPage.applyCoupon("edgewords") // 15% discount

    // Apply discount code and verify that it takes 15% off total
    cy.get(".cart-subtotal > td > .amount.woocommerce-Price-amount > bdi").invoke('text').then((text) => {
        const cleanedAmount = text.replace(/[^0-9.]/g, '');
        const floatAmount = parseFloat(cleanedAmount);
        const fullPriceInPennies = Math.round(floatAmount * 100); 

        cy.get(".cart-discount.coupon-edgewords > td > .amount.woocommerce-Price-amount").invoke('text').then((text) => {
          const cleanedDiscountAmount = text.match(/-?£?(\d+(\.\d{1,2})?)/);
          const discountInPennies = cleanedDiscountAmount ? Math.round(parseFloat(cleanedDiscountAmount[1]) * 100) : null;
          let percentageDiscount = ((discountInPennies/fullPriceInPennies)*100)
          expect(percentageDiscount).to.equal(15)
          
        })
  })

  })

// 2
// The test will login to an e-commerce site as a registered user, purchase an item of clothing and go 
// through checkout. It will capture the order number and check the order is also present in the ‘My 
// Orders’ section of the site

it('Can purchase clothing, go through checkout, capture the order number and check that the order is in My Orders', () => {


})






})



    
