import '../css/products.css'

function AddProductCard(){
    const h = Math.floor(Math.random() * 360);
    const color  = `hsl(${h}deg, 100%, 90%)`;
    return(
        <div className='card'>
            <div className='image_holder' style={{backgroundColor: color}}>
                <span className='add_btn'><i className="fas fa-plus"></i></span>
                <img className='product_image' src='images/test.png' alt='image'/>
            </div>
            <div>
                <b>Product Name</b>
                <h2>$ 365.02</h2>
                <a>View details <i className="fas fa-long-arrow-alt-right"></i></a>

            </div>
        </div>
    )
}


export default AddProductCard;