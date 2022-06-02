import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Productspage } from './components/Productpage';
import { Products } from './components/Products';

function App() {
  return (
    
    <div className="App">
      <h1>Routing App</h1>
      <nav style={{display:"flex", gap:"2rem", justifyContent:"center"}}>
      <Link to = '/'>Home</Link>
      <Link to = '/products'>Products</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} /> 
           <Route path='/products/:id' element={<Productspage/>} />           
      </Routes>
      
    </div>
  );
}

export default App;
