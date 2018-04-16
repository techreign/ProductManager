class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.destroy = function() {
      return true;
    }
  }

// how is this any different from the function this.repair? if i were to create
// it in the constructor lol
  repair() {
    return true;
  }

}

export default Product;
