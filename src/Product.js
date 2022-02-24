import React from 'react';
import "./Product.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Product({img, title, price, quantity}) {
    
  return (
  <div className="product">
      <img src={img}></img>
      <div className="product__info">
          <p className="product__title">{title}</p>
          <p className="product__price">
          <small>RS.</small>
              <strong>
               {price}
              </strong>
          </p>
          <p className="product__quantity">{quantity}</p>
      </div>
      
      <button className="btn-basket"> <ShoppingBasketIcon/>Add to Cart</button>
      
  </div>
    )
};

export default Product;
