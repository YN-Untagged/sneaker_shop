import "../css/navigator.css";

function Navigator(){
    return(

        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid justify-content-between">
                <a className="navbar-brand">PS. Products</a>
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link">Products</a>
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
                <div>
                    <a><i className="fas fa-search"></i></a>
                    <a><i className="far fa-heart"></i></a><sup>4</sup>
                </div>
            </div>
        </nav>

    );
}

export default Navigator;