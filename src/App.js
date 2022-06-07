import logo from './logo.svg';
import './App.css';
import Navigator from './components/navigator';
import AddProductCard from './components/products';

function App() {
  const products = [
    { id: 0, name: "Porshe Design", price: 231, description: "Lite racer slip-on design", sizes: [5, 6, 7, 8], colors:["white", "blue", "red"]},
    { id: 1, name: "Porshe sports lite", price: 147, description: "Lite racer slip-on design", sizes: [7, 8, 10,12], colors:["black", "yellow", "pink"]},
    { id: 2, name: "Cararo sports foot", price: 96, description: "Lite racer slip-on design", sizes: [4, 8, 11], colors:["white", "black","gray"]},
    { id: 3, name: "Cararo foot", price: 68, description: "Lite racer slip-on design", sizes: [4, 8, 11], colors:["white", "black","gray"]},
    { id: 4, name: "Cararo sports foot", price: 165, description: "Lite racer slip-on design", sizes: [4, 8, 11], colors:["white", "black","gray"]}
  ];

  return (
    <div className='container-fluid'>
      <Navigator/>
      <div className='container-fluid main_container'>
        <div className='product_list'>
          <AddProductCard products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
