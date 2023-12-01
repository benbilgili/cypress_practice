import NavBar from "../pages/NavBar"
import LoginPage from "../pages/LoginPage";
import ClothingItemPage from "../pages/ClothingItemPage";

beforeEach(function () {
  cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
  NavBar.goPlace(NavBar.myAccountLink)
  NavBar.dismissCookie()
});


// 1
// The test will login to an e-commerce site as a registered user, purchase an item of clothing, apply a 
// discount code and check that the total is correct after the discount & shipping is applied. 

// 2
// The test will login to an e-commerce site as a registered user, purchase an item of clothing and go 
// through checkout. It will capture the order number and check the order is also present in the ‘My 
// Orders’ section of the site

describe('Login to Ecommerce, purchase an item of clothing using a discount code and verify that discount is correct', () => {
  it('can login', () => {
    LoginPage.login("ben.bilgili@2itesting.com", "DavidRaya15")
    LoginPage.verifyLogin("ben")
  })

  it('can find an item of clothing an add to basket', () => {
    NavBar.searchInSearchBar("cap")
    ClothingItemPage.addItemToBasket()
    NavBar.goPlace(NavBar.basketLink)
  })



})



    
