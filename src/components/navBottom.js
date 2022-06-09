import '../App.css';
import '../css/navigator.css';

function NavigatorBottom(props){

    const scroll = ((direction)=>
    {
        props.scroll(direction);
    });

    return(
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <a className="nav-link">New arrivals</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Popular</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Recommanded</a>
                        <span className='checked_mark'><i class="fas fa-window-minimize"></i></span>
                    </li>
                </ul>
                <div>
                    <button type="button" className="btn_back" onClick={()=> scroll(1)}>Back</button>
                    <button type="button" className="btn_next" onClick={()=> scroll(0)}>Next</button>
                </div>
            </div>
        </nav>
    );
}

export default NavigatorBottom;