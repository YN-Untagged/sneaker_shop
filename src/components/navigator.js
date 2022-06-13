import '../App.css';
import "../css/navigator.css";
import { Link } from "react-router-dom";

function Navigator(){

    return(
        <nav className="navbar navbar-expand-sm fixed-top">
            <div className="container-fluid justify-content-between">
                <Link to='/' className="navbar-brand logo_circle "><span className="logo">SP. Products</span></Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className='nav-link tab_link'> Products</Link>
                        <span className='checked_mark'><i className="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <Link to='/notFound' className="nav-link tab_link" >Category</Link>
                        <span className='checked_mark'><i className="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <Link to='/notFound' className="nav-link tab_link" >Customize</Link>
                        <span className='checked_mark'><i className="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <Link to='/notFound' className="nav-link tab_link" >Collection</Link>
                        <span className='checked_mark'><i className="fas fa-window-minimize"></i></span>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item search_input">
                        <a className="circle"><i className="fas fa-search"></i></a>
                        <input type="text"  id="search-text" name="search"/>    
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