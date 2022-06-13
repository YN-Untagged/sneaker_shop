import '../App.css';
import "../css/navigator.css";
import { Link } from "react-router-dom";

function Navigator(){

    return(
        <nav className="navbar navbar-expand-sm fixed-top">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand logo_circle "><span className="logo">SP. Products</span></a>
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