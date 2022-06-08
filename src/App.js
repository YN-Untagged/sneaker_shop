import React, {useState} from 'react';
import './App.css';
import Navigator from './components/navigator';
import AddProductCard from './components/products';
import ItemDetails from './components/productDetails';

function App() {
  const products = [
    { id: 0, src: "images/shoe1.png", name: "Porshe Design", price: 231, description: "Lite racer slip-on design", sizes: [5, 6, 7, 8], colors:["white", "blue", "red"]},
    { id: 1, src: "images/shoe2.png", name: "Porshe sports lite", price: 147, description: "Lite racer slip-on design", sizes: [7, 8, 10,12], colors:["black", "yellow", "pink"]},
    { id: 2, src: "images/shoe3.png", name: "Cararo sports foot", price: 96, description: "Lite racer slip-on design", sizes: [4, 8, 11], colors:["white", "black","gray"]},
    { id: 3, src: "images/shoe4.png", name: "Cararo foot", price: 68, description: "Lite racer slip-on design", sizes: [4, 8, 11], colors:["white", "black","gray"]},
    { id: 4, src: "images/shoe5.png", name: "Cararo sports foot", price: 165, description: "Lite racer slip-on design", sizes: [4, 8, 11], colors:["white", "black","gray"]}
  ];

  const viewDetails = ((id) => {
    return(<ItemDetails product={products[id]}/>);
  });

  return (
    <div className='container-fluid'>
      <Navigator/>
      <div className='container-fluid main_container'>
        <div className='product_list'>
          <AddProductCard products={products} view={viewDetails} />
        </div>
      </div>
      <div className='container-fluid details_container'>
        <ItemDetails product={products[0]}/>
      </div>
    </div>
  );
}

export default App;
