import React from 'react';
import "./Home.css";

import Product from './Product';
function Home() {
  return <div className="home">
      <div className="home__container">
         
        <div className="home__row">
        <Product img="https://images-na.ssl-images-amazon.com/images/I/51RcxiQNx9L._AC_SX522_.jpg"
                 title="Darjeeling First Flush Tea"
                 price="125/-"
                 quantity="100gms"/>
        <Product img="https://images-na.ssl-images-amazon.com/images/I/51RcxiQNx9L._AC_SX522_.jpg"
                 title="Darjeeling Second Flush Tea"
                 price="170/-"
                 quantity="250gms"/>
        <Product img="https://images-na.ssl-images-amazon.com/images/I/51RcxiQNx9L._AC_SX522_.jpg"
                 title="Darjeeling Aromatic  Tea"
                 price="130/-"
                 quantity="200gms"/>
        <Product img="https://images-na.ssl-images-amazon.com/images/I/51RcxiQNx9L._AC_SX522_.jpg"
                 title="Assam Price CTC"
                 price="300/-"
                 quantity="250gms"/>
        <Product img="https://images-na.ssl-images-amazon.com/images/I/51RcxiQNx9L._AC_SX522_.jpg"
                 title="Assam Premium CTC"
                 price="220/-"
                 quantity="150gms"/>
                 </div>

                <div className="home__row">
        <Product img="https://images-na.ssl-images-amazon.com/images/I/51RcxiQNx9L._AC_SX522_.jpg"
                 title="Assam Luxury CTC"
                 price="430/-"
                 quantity="350gms"/>
        <Product img="https://images-na.ssl-images-amazon.com/images/I/51RcxiQNx9L._AC_SX522_.jpg"
                 title="Masala Chai"
                 price="490/-"
                 quantity="345gms"/>
        </div>
      </div>
  </div>
}

export default Home;