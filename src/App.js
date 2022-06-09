import React, {useState} from 'react';
import './App.css';
import Navigator from './components/navigator';
import NavigatorBottom from './components/navBottom'
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

  const [productId, setProductId] = useState(0);

  const viewDetails = ((id) => {
    setProductId(id);
  });

  const scrollList = ((direction)=> {
    const elem = document.getElementById('product-list');
    if(direction === 0){
      let scroller = elem.scrollLeft;
      let elemWidth = elem.clientWidth;
      let scrollableWidth = elem.scrollWidth;
      let total = scrollableWidth - scroller - elemWidth;
      
      if(total != elem.offsetWidth)
      {
          elem.scrollLeft += 420;
      }
    }
    else{
      if( elem.scrollLeft != 0)
      {
          elem.scrollLeft -= 420;
      }
    }
  });

  return (
    <>
      <div class='row'>
        <Navigator />
      </div>
      
      <div className='row main_container'>
        <div className='col-lg-4 secondary_container'>
            {/*Card Details*/}
            <div class='container-fluid details_container'>
              <ItemDetails product={products[productId]} />
            </div>
        </div>
        <div class="col-lg-8 secondary_container">
          <div class="container-fluid">
            {/*Product List*/}
            <div className='product_list row' id='product-list'>
              <AddProductCard products={products} view={viewDetails} />
            </div>

            {/*Bottom Navigator*/}
            <div class="row bottom_nav">
              <NavigatorBottom scroll={scrollList}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
