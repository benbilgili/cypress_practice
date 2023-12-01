class ClothingItemPage {
    // Selectors
    addToBasketButton = "button[name='add-to-cart']";

  
    // Actions
    addItemToBasket() {
        cy.get(this.addToBasketButton).click()
    }
    


  }
  
  export default new ClothingItemPage();