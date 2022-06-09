import React, {useState} from 'react';
import '../css/products.css';

function ItemDetails(props){
    var item = props.product;

    return(
        <div className='product-details_card'>
            <img src={item.src} className='details_image'/>
            <h1 className='details_price'>${item.price}</h1>
            <div className="details_info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <form name='add-item-form'>
                    <div className='radios_container'>
                        {item.sizes.map((size)=>
                            <>
                                <input type='radio' className='btn-check' name='options' id={size}  value={size}/>
                                <label className='btn btn-light size_btn' htmlFor={size}>
                                    {size}
                                    <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                                </label>
                            </>
                        )}
                    </div>
                    <div className='radios_container'>
                        {item.colors.map((color)=>
                            <>
                                <input type='radio' className='btn-check' name='options' id={color}  value={color}/>
                                <label className='btn btn-light color_btn' htmlFor={color} style={{color: color}}>
                                    <i className='fas fa-circle fa-2x'></i>
                                    <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                                </label>
                            </>
                        )}

                    </div>
                    
                </form>
            </div>
            <div class="details_btn_container">
                <button type='submit' className='details_add_btn btn' form='add-item-form'><i className='fas fa-plus fa-3x'></i></button>
            </div>
        </div>

    )
}

export default ItemDetails;