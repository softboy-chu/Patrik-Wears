import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import shape from '../assets/images/shape.png';
import like from '../assets/images/like.png';
import cart from '../assets/images/cart.png';
import menubtn from '../assets/images/menbutton.png';
import { Link } from 'react-router-dom';
import search from "../assets/images/search.png";

function Portal({ children }) {
  return ReactDOM.createPortal(children, document.body);
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

    
    

  return (
    <div className='fixed w-full bg-white top-0 z-50 shadow-md items-center'>
      <div className='flex flex-row justify-between items-center'>
        <div className='lg:hidden md:hidden'>
          <button onClick={toggleVisibility}>
            <img src={menubtn} alt='a toggle btn'/>
          </button>
        </div>
        <div className='flex justify-center items-center bg-black m-2'>
          <a href='./' className='text-white text-lg p-4 font-bold text-center'>Softscape Wears</a>
        </div>

        <div className='hidden md:flex lg:flex lg:flex-row justify-around items-center gap-4 font-bold'>
          <div>
            <a className='text-black text-sm p-1 text-center hover:bg-black hover:text-white' href='/men'>Men</a>
          </div>
          <div>
            <a className='text-black text-sm p-1 text-center hover:bg-black hover:text-white' href='./women'>Women</a>
          </div>
          <div>
            <a className='text-black text-sm p-1 text-center hover:bg-black hover:text-white' href='./children'>Kids</a>
          </div>
          <div>
            <a className='text-black text-sm p-1 text-center hover:bg-black hover:text-white' href='./flashsale'>Flash Sale</a>
          </div>
        </div>

        <div className='rounded-full p-5 flex flex-row items-center justify-between gap-4 lg:flex'>
          <div className='flex flex-row justify-between items-center lg:outline-none lg:outline-gray-200 md:outline-none md:outline-gray-200 rounded-full lg:w-32 md:w-32'>
            <input className='hidden md:flex lg:flex p-1 outline-none w-4/5' placeholder='Search...'/>
            <button>
              <img src={search} alt='a search button' className="flex items-center"/>
            </button>
          </div>

          <div className='hidden lg:flex'>
            <button>
              <img src={shape} alt='button for profile creation'/>
            </button>
          </div>

          <div className='hidden md:flex lg:flex'>
            <Link to='/cart'>
              <button>
               <img src={like} alt='the button for liked products'/>
              </button>
            </Link>
          </div>

          <div>
            <button>
              <img src={cart} alt='the button shopping cart'/>
            </button>
          </div>
      </div>

      

      {isVisible && (
        <Portal>
          <div className='fixed top-20 left-0 w-full h-full bg-black text-white z-50 flex flex-col items-start animate-fadeIn font-semibold text-justify pt-10 leading-10'>
            <div className=''>
              
            </div>
            <div className='p-4'>
              <a href='./ ' className='uppercase'>
                <p>Home</p>
              </a>
            </div>
            <div className='p-4'>
              <button className='uppercase'>
                <p>Men</p>
              </button>
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

