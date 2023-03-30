import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import SideCart from './components/SideCart/SideCart';
import Cards from './components/Cards/Cards';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='header'>
        <Header></Header> 
      </div>
      <div className='main row'>
        <div className='left-card col-md-7'>
           <Cards></Cards>
        </div>
        <div className='side-cart col-md-5 card'> 
          <SideCart></SideCart> 
        </div>
      </div>
    </div>
  )
}

export default App
