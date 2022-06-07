import '../App.css';
import "../css/navigator.css";

function Navigator(){
    return(
        <>
        <nav className="navbar navbar-expand-sm fixed-top">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand logo_circle "><span>SP. Products</span></a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active">Products</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Category</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Customize</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Collection</a>
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

        <nav className="navbar navbar-expand-sm fixed-bottom">
            <div className="container-fluid">
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <a className="nav-link">New arrivals</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Popular</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Recommanded</a>
                    </li>
                </ul>
                <div>
                    <button type="button" className="btn_back">Back</button>
                    <button type="button" className="btn_next">Next</button>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navigator;