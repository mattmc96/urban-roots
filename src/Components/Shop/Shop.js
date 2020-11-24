import React from 'react'
import axios from 'axios'

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
      <div key={index} className="product">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <img src={product.image} alt="plant-img" />
      </div>
    ))
  }
  render() {
    return <div>{this.displayProducts(this.state.products)}</div>
  }
}

export default Shop
