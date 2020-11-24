import React from 'react'
import axios from 'axios'
import './shop.css'

class Shop extends React.Component {
  state = {
    name: '',
    price: '',
    image: '',
    products: []
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    axios
      .get('/api/products/shop')
      .then((response) => {
        const data = response.data
        this.setState({ products: data })
        console.log('Data has been received!!')
      })
      .catch(() => {
        alert('Error retrieving data!!!')
      })
  }

  displayProducts = (products) => {
    return products.map((product, index) => (
      <div key={index} className="product-display">
        <title>Harvest vase</title>
        <div className="wrapper">
          <div className="product-img">
            <img src={product.image} alt="plant-img" height="420" />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1>{product.name}</h1>
              <h2>by Urban Roots</h2>
              <p>
                Harvest Vases are a reinterpretation
                <br /> of peeled fruits and vegetables as
                <br /> functional objects. The surfaces
                <br /> appear to be sliced and pulled aside,
                <br /> allowing room for growth.
              </p>
            </div>
            <div className="product-price-btn">
              <p>
                <span>${product.price}</span>
              </p>
              <button type="button">buy now</button>
            </div>
          </div>
        </div>
      </div>
      //   </div>
    ))
  }
  render() {
    return <div>{this.displayProducts(this.state.products)}</div>
  }
}

export default Shop
