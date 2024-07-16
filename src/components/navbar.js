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
    <div className='fixed w-full bg-white top-0 z-50 shadow-md'>
        <div className='flex flex-row items-center justify-between m-6 '>
      <div className='block bg-black'>
        <p className='text-white text-xl p-4 font-bold text-center'>Patrik Wears</p>
      </div>

      <div className='flex flex-row justify-around items-center gap-4 hidden lg:flex'>
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
          <a className='text-white text-xl text-center' href='./ads'>Flash</a>
        </div>
        <div className='bg-[#060606] p-2'>
          <a className='text-white text-xl text-center' href=''>Gbanjo</a>
        </div>
      </div>

      <div className='rounded-full p-5 flex flex-row items-center justify-between gap-4 hidden lg:flex '>
        <div className='flex flex-row bg-gray-100 items-center'>
          {/* <input className='bg-gray-100 hidden md:flex lg:flex p-4' placeholder='Search'/> */}
          {/* <SearchBox /> */}
          <div>
            <a href=''>
              <img src={search} alt='search-icon'/>
            </a>
          </div>
        </div>

        <div>
          <a href=''>
            <img src={shape} alt='shape-icon'/>
          </a>
        </div>

        <div>
          <Link to='/cart'>
          <button>
            <img src={like} alt='like-icon'/>
          </button>
          </Link>
        </div>

        <div>
          <a href='./cart'>
            <img src={cart} alt='cart-icon'/>
          </a>
        </div>
      </div>

      <div className='lg:hidden'>
        <button onClick={toggleVisibility}>
          <img src={menubtn} alt='menu-button'/>
        </button>
      </div>

      {isVisible && (
        <Portal>
          <div className='fixed top-0 left-0 w-1/2 h-full bg-white z-50 flex flex-col items-center'>
            <div className=''>
              
            </div>
            <div className='p-4'>
              <a href='./'>
                <p>Home</p>
              </a>
            </div>
            <div className='p-4'>
              <a href='./men'>
                <p>Men</p>
              </a>
            </div>
            <div className='p-4'>
              <a href='./women'>
                <p>Women</p>
              </a>
            </div>
            <div className='p-4'>
              <a href='./children'>
                <p>Children</p>
              </a>
            </div>
            <div className='p-4'>
              <a href='./flashprice'>
                <p>Flash</p>
              </a>
            </div>
            <div className='p-4'>
              <a href=''>
                <p>Gbanjo</p>
              </a>
            </div>
          </div>
        </Portal>
      )}
    </div>
    </div>
  );
}

