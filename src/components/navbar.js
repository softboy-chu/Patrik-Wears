import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import search from '../assets/images/search.png';
import shape from '../assets/images/shape.png';
import like from '../assets/images/like.png';
import cart from '../assets/images/cart.png';
import menubtn from '../assets/images/menbutton.png';
import { Link } from 'react-router-dom';
// import SearchBox from './searchBox/searchBar';

function Portal({ children }) {
  return ReactDOM.createPortal(children, document.body);
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='fixed w-full bg-white top-0 z-50 shadow-md h-24 items-center'>
      <div className='flex flex-row justify-between items-center just'>
        <div className='lg:hidden md:hidden'>
          <button onClick={toggleVisibility}>
            <img src={menubtn} alt=''/>
          </button>
        </div>
        <div className='flex justify-center items-center bg-black'>
          <a href='./' className='text-white text-xl p-4 font-bold text-center'>Patrik Wears</a>
        </div>

        <div className='hidden lg:flex lg:flex-row justify-around items-center gap-4'>
          <div>
            <a className='text-black text-xl p-4 text-center' href='/men'>Men</a>
          </div>
          <div>
            <a className='text-black text-xl p-4 text-center' href='./women'>Women</a>
          </div>
          <div>
            <a className='text-black text-xl p-4 text-center' href='./children'>Kids</a>
          </div>
          <div className='bg-[#060606] p-3'>
            <a className='text-white text-xl text-center' href='./flashsale'>Flash</a>
          </div>
          <div className='bg-[#060606] p-2'>
            <a className='text-white text-xl text-center' href='./'>Gbanjo</a>
          </div>
        </div>

        <div className='rounded-full p-5 flex flex-row items-center justify-between gap-4 lg:flex '>
        <div className='flex flex-row bg-gray-100 items-center'>
          <input className='bg-gray-100 hidden md:flex lg:flex p-4' placeholder='Search...'/>
          {/* \<><SearchBox /></> */}
          <div>
            <button>
              <img src={search} alt=''/>
            </button>
          </div>
        </div>

        <div className='hidden lg:flex md:flex'>
          <button>
            <img src={shape} alt=''/>
          </button>
        </div>

        <div className='hidden lg:flex md:flex'>
          <Link to='/cart'>
          <button>
            <img src={like} alt=''/>
          </button>
          </Link>
        </div>

        <div>
          <button>
            <img src={cart} alt=''/>
          </button>
        </div>
      </div>

      

      {isVisible && (
        <Portal>
          <div className='fixed top-20 left-0 w-full h-full bg-white z-50 flex flex-col items-start animate-fadeIn font-semibold text-justify pt-10 leading-10'>
            <div className=''>
              
            </div>
            <div className='p-4'>
              <Link to='/'>
              <button className='uppercase'>
                <p>Home</p>
              </button>
              </Link>
            </div>
            <div className='p-4'>
              <Link to='./men'>
              <button className='uppercase'>
                <p>Men</p>
              </button>
              </Link>
            </div>
            <div className='p-4'>
              <button className='uppercase'>
                <p>Women</p>
              </button>
            </div>
            <div className='p-4'>
              <button className='uppercase'>
                <p>Children</p>
              </button>
            </div>
            <div className='p-4'>
              <button className='uppercase'>
                <p>Flash</p>
              </button>
            </div>
            <div className='p-4'>
              <button className='uppercase'>
                <p>Gbanjo</p>
              </button>
            </div>
          </div>
        </Portal>
      )}
    </div>
  </div>
  );
}

