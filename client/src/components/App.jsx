import React, { useState, useEffect } from 'react';
import GlobalStyle from './globalStyle';
import getProducts from '../API/GetProducts';
import getProductInfo from '../API/GetProductInfo';
import Header from './Header';
import PhotoCarousel from './ProductDisplay';
import ProductDescription from './MainDescription';
import RelatedStyles from './StyleSelector';

const App = () => {

  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProductList(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getProductInfo(1)
      .then((data) => setSelectedProduct(data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <>
    <GlobalStyle />
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <PhotoCarousel products={productList}/>
          </div>

          <div class="col-sm-4">
            <ProductDescription selected={selectedProduct}/>
            <RelatedStyles /> 
          </div>
        </div>

        <div class="row">  
          <div class="col-sm-12">
            <h1> Dangerzone. </h1>
            <p> Long Live the Scrumdog Billionaires </p>
          </div>
        </div>
    </div>
    </>
  );
};

export default App;
