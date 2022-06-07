import '../App.css';
import '../css/products.css';

function AddProductCard(props){
    return(
        props.products.map((item) => 
            <div className='card'>
                <div className='image_holder' style={{backgroundColor: `hsl(${Math.floor(Math.random()*360)}deg, 65%, 55%`}}>
                    <div className='add_btn'><i className="fas fa-plus"></i></div>
                    <img className='product_image' src='images/test.png' alt='image'/>
                </div>
                <div className="product_info">
                    <p className="text_gray">{item.name}</p>
                    <h2 className="text_violet">${item.price}</h2>
                    <a className="text_violet" href=''>View details <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
            </div>
        )
    )
}


export default AddProductCard;