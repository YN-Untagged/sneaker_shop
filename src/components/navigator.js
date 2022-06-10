import '../App.css';
import "../css/navigator.css";

function Navigator(props){
    const navigate = ((toThis)=>{
        toThis === null ? props.navigate() : props.navigate(toThis);
    });

    return(
        <nav className="navbar navbar-expand-sm fixed-top">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand logo_circle "><span className="logo">SP. Products</span></a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link tab_link active" href="#" onClick={()=>navigate()} >Products</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a to='construction' className="nav-link tab_link" href="#" onClick={()=>navigate('/notFound')} >Category</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link tab_link" href="#" onClick={()=>navigate('/notFound')} >Customize</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link tab_link" href="#" onClick={()=>navigate('/notFound')} >Collection</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="circle"><i className="fas fa-search"></i></a>
                    </li>
                    <li className="nav-item">
                        <a className="circle"><i className="far fa-heart"></i></a><sup className="badge likes"><small>3</small></sup>
                    </li> 
                </ul>
            </div>
        </nav>
    );
}

export default Navigator;