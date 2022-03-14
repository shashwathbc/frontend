import './App.css';
import Navbarr from './components/navbar/Navbar';
import Products from './components/products/Products';
import Reviews from './components/reviews/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <Navbarr />
       <h1 className="display-1">Welcome</h1>
       <p className="lead">Fell free t explore...</p>
       {/* <Products /> */}
       <Reviews />
    </div>
  );
}

export default App;
