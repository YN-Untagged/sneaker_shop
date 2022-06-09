import '../App.css';
import "../css/navigator.css";

function Navigator(){
    return(
        <nav className="navbar navbar-expand-sm fixed-top">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand logo_circle "><span className="logo">SP. Products</span></a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link">Products</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Category</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Customize</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Collection</a>
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