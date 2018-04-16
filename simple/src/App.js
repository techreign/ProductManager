import React, { Component } from 'react';
import './App.css';
import Clock from './Components/Clock';
import ProductItem from './Components/ProductItem';
import AddProduct from './Components/AddProduct';
import Product from './Objects/Product';

const products = [
  new Product("iPad", 200),
  new Product("iPhone", 650)
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    // const products = this.getProducts();
    // this.setState({products});
  }

  getProducts() {
    return this.state.products;
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();
    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
    this.setState({products});
  }

  onAdd(name, price) {
    const products= this.getProducts();
    products.push({
      name,
      price
    });
    this.setState({products});
  }

  onDelete(name) {
    const products = this.getProducts();
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    this.setState({products: filteredProducts});
  }

  render() {
    return (
      <div className="App">
      <Clock name="Time"/>
        <h1>Products Manager</h1>
        <AddProduct
          onAdd={this.onAdd}
        />
        {
          this.state.products.map(product => {
            return (
                <ProductItem
                  key={product.name}
                  name={product.name}
                  price={product.price}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                />
            );
          })
        }
      </div>
    );
  }
}

export default App;
