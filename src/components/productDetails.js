import React, {useState} from 'react';
import swal from 'sweetalert';
import '../css/products.css';

function ItemDetails(props){

    const item = props.product;
    const addToCart= (()=>{
        swal({
            title: "Added to Cart!",
            text: "Item added to cart!",
            icon: "success"
        });
    });

    /*const [imgSrc, setImgSrc] = useState(item.src);*/

    const changeImage = ((src)=>{
        /*setImgSrc(src);*/
        document.getElementById('img_details').src = src;
    });

    return(
        <div className='card product-details_card'>
            <div className='card-header' key='image'>
                <a className='circle degree_holder'>
                    <img className='degree_img' src='images/360-degrees.png'/>
                </a>
                <img src={item.src} className='details_image' id='img_details'/>
                <h1 className='details_price'>${item.price}</h1>
            </div>
            
            <div className='details_info card-body' key='details'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <form name='add-item-form'>
                    <div className='radios_container'>
                        {item.sizes.map((size)=>
                            <>
                                <input type='radio' className='btn-check' name='options' id={size}  value={size}/>
                                <label className='btn btn-light size_btn' htmlFor={size}>
                                    {size}
                                    <span className='checked_mark'><i className='fas fa-window-minimize'></i></span>
                                </label>
                            </>
                        )}
                    </div>
                    <div className='radios_container'>
                        {item.colors.map((color)=>
                            <>
                                <input type='radio' className='btn-check' name='options' id={color.color}  value={color.color} onClick={()=>changeImage(color.src)}/>
                                <label className='btn btn-light color_btn' htmlFor={color.color} style={{color: color.color}}>
                                    <i className='fas fa-circle fa-2x'></i>
                                    <span className='checked_mark'><i className='fas fa-window-minimize'></i></span>
                                </label>
                            </>
                        )}

                    </div>
                    
                </form>
            </div>
            <div className='details_btn_container flex-end' key='submit_button'>
                <button type='submit' className='details_add_btn btn' form='add-item-form' onClick={addToCart}><i className='fas fa-plus fa-3x'></i></button>
            </div>
        </div>

    )
}

export default ItemDetails;