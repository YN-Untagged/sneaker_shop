import React, { useState, useEffect} from "react";
import '../App.css';
import Navigator from './navigator';
import NavigatorBottom from './navBottom'
import AddProductCard from './products';
import ItemDetails from './productDetails';

function Home (props){
    
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
    Scroll(direction);
  });;
  
  return (
    <>
      <div className='row' key='top-nav'>
        <Navigator/>
      </div>
      <div className='row main_container tab_page active' key='main-section'>
        <div className='col-lg-4 secondary_container'>
            {/*Card Details*/}
            <div className='container-fluid details_container'>
              <ItemDetails product={products[productId]} />
            </div>
        </div>
        <div className='col-lg-8 secondary_container'>
          <div className='container-fluid'>
            {/*Product List*/}
            <div className='product_list row' id='product-list'>
              <AddProductCard products={products} view={viewDetails} />
            </div>

            {/*Bottom Navigator*/}
            <div className='row bottom_nav'>
              <NavigatorBottom scroll={scrollList}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

function Scroll(direction){
  const elem = document.getElementById('product-list');
  let scroller = elem.scrollLeft;

  if(direction === 0){
    let elemWidth = elem.clientWidth;
    let scrollableWidth = elem.scrollWidth;
    let total = scrollableWidth - scroller - elemWidth;
    
    if(total !== elem.offsetWidth)
    {
        elem.scrollLeft += 420;
    }
  }
  else{
    if( scroller !== 0)
    {
        elem.scrollLeft -= 420;
    }
  }
}