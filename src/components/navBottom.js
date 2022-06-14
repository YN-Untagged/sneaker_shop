import '../App.css';
import '../css/navigator.css';

function NavigatorBottom(){

    const scroll = ((direction)=>
    {
        Scroll(direction);
    });

    return(
       <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#home">New arrivals</a>
                        <span className='checked_mark'><i className="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#popular">Popular</a>
                        <span className='checked_mark'><i className="fas fa-window-minimize"></i></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#recommanded">Recommanded</a>
                        <span className='checked_mark'><i className="fas fa-window-minimize"></i></span>
                        
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

function Scroll(direction){
    const elem = document.getElementById('product-list');
    let scroller = elem.scrollLeft;
  
    if(direction === 0){
      let elemWidth = elem.clientWidth;
      let scrollableWidth = elem.scrollWidth;
      let total = scrollableWidth - scroller - elemWidth;
      
      if(total !== elem.offsetWidth)
      {
          elem.scrollLeft += 420;
      }
    }
    else{
      if( scroller !== 0)
      {
          elem.scrollLeft -= 420;
      }
    }
  }