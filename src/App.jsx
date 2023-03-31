import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import SideCart from './components/SideCart/SideCart';
import Cards from './components/Cards/Cards';
import Blogs from './components/Blogs/Blogs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [readTime, setReadTime] = useState("");

  const [count, setCount] = useState(0);
  const handleMarkAtRead = (time) => {
    const previousMin = JSON.parse(localStorage.getItem("seeMin"));
    if(previousMin){
      const sum = previousMin + time;
      localStorage.setItem("seeMin", sum);
      setReadTime(sum);
    }
    else{
      localStorage.setItem("seeMin", time);
      setReadTime(time);
    }
  }

  return (
    <div className="App container">
      <div className='header'>
        <Header></Header> 
      </div>
      <div className='main row'>
        <div className='left-card col-md-7'>
           <Cards 
           handleMarkAtRead={handleMarkAtRead}
           ></Cards>
        </div>
        <div className='side-cart col-md-5 card'> 
          <SideCart readTime={readTime}></SideCart> 
        </div>
      </div>
      <div className='blogs'>
        <Blogs></Blogs>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
