import React, { useState, useEffect} from "react";
import '../App.css';
import Navigator from './navigator';
import NavigatorBottom from './navBottom'
import AddProductCard from './products';
import ItemDetails from './productDetails';

function Home (props){
    
  const products = [
    { id: 0, src: "images/shoe1.png", name: "Porshe Design", price: 231, description: "Lite racer slip-on design", sizes: [5, 6, 7, 8], colors:[{color: "white", src:"images/shoe1_1.png"}, {color:"blue", src:"images/shoe1_1.png"}, {color:"red", src:"images/shoe1_1.png"}]},
    { id: 1, src: "images/shoe2.png", name: "Porshe sports lite", price: 147, description: "Lite racer slip-on design", sizes: [7, 8, 10,12], colors:[{color: "black", src:"images/shoe2_0.png"}, {color: "yellow", src:"images/shoe2_1.png"}, {color: "pink", src:"images/shoe2_2.png"}]},
    { id: 2, src: "images/shoe3.png", name: "Cararo sports foot", price: 96, description: "Lite racer slip-on design", sizes: [4, 8, 11], colors:[{color: "white", src:"images/shoe3_0.png"}, {color: "black", src:"images/shoe3_1.png"}, {color: "gray", src:"images/shoe3_2.png"}]},
    { id: 3, src: "images/shoe4.png", name: "Cararo foot", price: 68, description: "Lite racer slip-on design", sizes: [4, 8, 11], colors:[{color: "white", src:"images/shoe4_0.png"}, {color: "black", src:"images/shoe4_1.png"},{color: "gray", src:"images/shoe4_2.png"}]},
    { id: 4, src: "images/shoe5.png", name: "Cararo sports foot", price: 165, description: "Lite racer slip-on design", sizes: [4, 8, 11], colors:[{color: "white", src:"images/shoe5_0.png"}, {color: "black", src:"images/shoe5_1.png"},{color: "gray", src:"images/shoe5_2.png"}]},
    { id: 5, src: "images/shoe6_0.png", name: "Zoom Freak 3", price: 195, description: "Lite racer slip-on design", sizes: [5, 6, 9, 11], colors:[{color: "gray", src:"images/shoe6_0.png"},{color: "black", src:"images/shoe6_1.png"}]}
  ];

  const [productId, setProductId] = useState(0);

  const viewDetails = ((id) => {
    setProductId(id);
  });
  
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
          <div className='container-fluid products_container'>
            <div className='tab-content'>
              <div className='tab-pane container-fluid active' id='home'>
                <div className='product_list row' id='product-list'>
                  <AddProductCard products={products} view={viewDetails} />
                </div>
              </div>
              <div className='tab-pane container-fluid fade' id='popular'>
                <div className='product_list row'>
                  <div className='card_holder'>Popular</div>
                </div>
              </div>
              <div className='tab-pane container-fluid fade' id='recommanded'>
                <div className='product_list row'>
                  <div className='card_holder'>Recommanded</div>
                </div>
              </div>
            </div>

            {/*Bottom Navigator*/}
            <div className='row bottom_nav'>
              <NavigatorBottom />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;