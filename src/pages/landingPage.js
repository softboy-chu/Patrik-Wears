import React from 'react'
import Navbar  from '../components/navbar';
import Footer from '../components/footer';
import imageOne from '../assets/images/rectangle22.png'
import imageTwo from '../assets/images/rectangle23.png'
import imageThree from '../assets/images/rectangle24.png'
import rightarrow from '../assets/images/arrowright.png'
import loafers from '../assets/images/loafers.png'
import ratings from '../assets/images/ratings.png'
import like from '../assets/images/like.png';
import cart from '../assets/images/cart.png';
import addToCart from '../assets/images/addtocart.png'
import stilletto from '../assets/images/brownheels.png'
import heels from '../assets/images/tigerskinheels.png'
import club99heels from '../assets/images/99heels.png'
import patrikColor from '../assets/images/patrikcolor.png'
import sneakers from '../assets/images/sneakers.png'
import sweater from '../assets/images/cardigan.png'
import jacket from '../assets/images/jeanjacket.png';

export default function Home() {
  return (
    <div>
      <div className='bg-black text-white text-center p-3 relative mt-24'>
        <p>FREE SHIPMENT IF YOU PURCHASE TODAY</p>
      </div>
      <div><Navbar /></div>
      <div className='bg-blue-500 text-center p-3'>
        <p>SAVE UP TO 60% WHEN YOU PURCHASE FROM OUR PATRIKLUB</p>
      </div>
      <div className='md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 gap-0 relative'>
        <div>
          <img src={imageOne} alt='' className=''/>
        </div>
        <div>
          <img src={imageTwo} alt='' className='hidden md:block lg:block'/>
        </div>
        <div>
          <img src={imageThree} alt='' className='hidden md:block lg:block'/>
        </div>
        <div className='p-3 absolute top-72 md:top-56 lg:top-80 left-10 bg-black bg-opacity-50 text-white w-4/5'>
        <div>
          <p>MAINTAIN YOUR STEEZ AND COMPOSURE</p>
        </div>
        <div>
          <p className='w-full'>From backpacks to sneakers. These are the best in the market of wears to help you look fresh and smart</p>
        </div>
        <div className='flex flex-row items-center gap-1.5 text-black'>
          <div className='flex flex-row items-center bg-[#CCFF00] px-3 py-1.5 w-fit'>
            <a href='./men'>Shop men</a>
            <img src={rightarrow} alt='right arrow'/>
          </div>
          <div className='flex flex-row items-center bg-[#CCFF00] px-3 py-1.5 w-fit'>
            <a href='./women'>Shop women</a>
            <img src={rightarrow} alt='right arrow'/>
          </div>
          <div className='flex flex-row items-center bg-[#CCFF00] px-3 py-1.5 w-fit'>
            <a href='./children'>Shop kids</a>
            <img src={rightarrow} alt='right arrow'/>
          </div>
        </div>
      </div>
      </div>

      <div className='m-2 mt-5 flex flex-row justify-center gap-2'>
        <div>
          <a href='./' className='px-3 py-1.5 text-white bg-black'>New Arrivals</a>
        </div>
        <div>
          <a href='./' className='px-3 py-1.5 text-black bg-gray-200'>Retro Stock</a>
        </div>
        <div>
          <a href='./' className='px-3 py-1.5 text-black bg-gray-200'>Best Sellers</a>
        </div>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-4 m-8 gap-3'>
        <div className='bg-gray-100'>
          <div className='flex flex-col justify-center items-center'>
          <a href='./cart'>
          <img src={loafers} alt=''/>
          </a>
          </div>
          <div>
            <p>Club 99 Heels</p>
          </div>
          <div>
            <p>Classic office high heels</p>
          </div>
          <div className='flex flex-row justify-between p-1.5'>
            <div>
              <p className='font-bold'>&#8358;35000</p>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like} alt=''/></button>
            </div>
            <div>
              <button><img src = {cart} alt=''/></button>
            </div>
            <div>
              <button><img src = {addToCart} alt=''/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100'>
          <div className='flex flex-col justify-center items-center'>
          <a href='./cart'>
          <img src={stilletto} alt=''/>
          </a>
          </div>
          <div>
            <p>Club 99 Heels</p>
          </div>
          <div>
            <p>Classic office high heels</p>
          </div>
          <div className='flex flex-row justify-between p-1.5'>
            <div>
              <p className='font-bold'>&#8358;35000</p>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like} alt=''/></button>
            </div>
            <div>
              <button><img src = {cart} alt=''/></button>
            </div>
            <div>
              <button><img src = {addToCart} alt=''/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100'>
          <div className='flex flex-col justify-center items-center'>
          <a href='./cart'><img src={heels} alt=''/></a>
          </div>
          <div>
            <p>Club 99 Heels</p>
          </div>
          <div>
            <p>Classic office high heels</p>
          </div>
          <div className='flex flex-row justify-between p-1.5'>
            <div>
              <p className='font-bold'>&#8358;35000</p>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like} alt=''/></button>
            </div>
            <div>
              <button><img src = {cart} alt=''/></button>
            </div>
            <div>
              <button><img src = {addToCart} alt=''/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100'>
          <div className='flex flex-col justify-center items-center'>
          <img src={club99heels} alt='shoe'/>
          </div>
          <div>
            <p>Club 99 Heels</p>
          </div>
          <div>
            <p>Classic office high heels</p>
          </div>
          <div className='flex flex-row justify-between p-1.5'>
            <div>
              <p className='font-bold'>&#8358;35000</p>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like} alt=''/></button>
            </div>
            <div>
              <button><img src = {cart} alt=''/></button>
            </div>
            <div>
              <button><img src = {addToCart} alt=''/></button>
            </div>
          </div>
        </div>
      </div>

      <div className='m-2 mt-5 flex flex-row justify-center gap-2'>
        <div>
          <a href='./' className='px-3 py-1.5 text-black bg-gray-200'>New Arrivals</a>
        </div>
        <div>
          <a href='' className='px-3 py-1.5 text-white bg-black'>Retro Stock</a>
        </div>
        <div>
          <a href='' className='px-3 py-1.5 text-black bg-gray-200'>Best Sellers</a>
        </div>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-4 m-8 gap-3'>
        <div className='bg-gray-100'>
          <div className='flex flex-col justify-center items-center'>
          <img src={loafers} alt=''/>
          </div>
          <div>
            <p>Club 99 Heels</p>
          </div>
          <div>
            <p>Classic office high heels</p>
          </div>
          <div className='flex flex-row justify-between p-1.5'>
            <div>
              <p className='font-bold'>&#8358;35000</p>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like} alt=''/></button>
            </div>
            <div>
              <button><img src = {cart} alt=''/></button>
            </div>
            <div>
              <button><img src = {addToCart} alt=''/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100'>
          <div className='flex flex-col justify-center items-center'>
          <img src={stilletto}/>
          </div>
          <div>
            <p>Club 99 Heels</p>
          </div>
          <div>
            <p>Classic office high heels</p>
          </div>
          <div className='flex flex-row justify-between p-1.5'>
            <div>
              <p className='font-bold'>&#8358;35000</p>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like} alt=''/></button>
            </div>
            <div>
              <button><img src = {cart} alt=''/></button>
            </div>
            <div>
              <button><img src = {addToCart} alt=''/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100'>
          <div className='flex flex-col justify-center items-center'>
          <img src={heels} alt=''/>
          </div>
          <div>
            <p>Club 99 Heels</p>
          </div>
          <div>
            <p>Classic office high heels</p>
          </div>
          <div className='flex flex-row justify-between p-1.5'>
            <div>
              <p className='font-bold'>&#8358;35000</p>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like} alt=''/></button>
            </div>
            <div>
              <button><img src = {cart} alt=''/></button>
            </div>
            <div>
              <button><img src = {addToCart} alt=''/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100'>
          <div className='flex flex-col justify-center items-center'>
          <img src={club99heels} alt=''/>
          </div>
          <div>
            <p>Club 99 Heels</p>
          </div>
          <div>
            <p>Classic office high heels</p>
          </div>
          <div className='flex flex-row justify-between p-1.5'>
            <div>
              <p className='font-bold'>&#8358;35000</p>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like} alt=''/></button>
            </div>
            <div>
              <button><img src = {cart} alt=''/></button>
            </div>
            <div>
              <button><img src = {addToCart} alt=''/></button>
            </div>
          </div>
        </div>
      </div>

      <div className='m-2 mt-5 flex flex-row justify-center gap-2'>
        <div>
          <a href='' className='px-3 py-1.5 text-black bg-gray-200'>New Arrivals</a>
        </div>
        <div>
          <a href='' className='px-3 py-1.5 text-black bg-gray-200'>Retro Stock</a>
        </div>
        <div>
          <a href='' className='px-3 py-1.5 text-white bg-black'>Best Sellers</a>
        </div>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-4 m-8 gap-3'>
        <div className='bg-gray-100 p-2'>
          <div className='flex flex-col justify-center items-center'>
          <img src={patrikColor} alt=''/>
          </div>
          <div>
            <p>EXPLORE PATRIKCOLOR</p>
          </div>
          <div>
            <p>Classic runway dress</p>
          </div>
          <div className='flex flex-row justify-between'>
            <div>
              <a href='./' className='underline'>SHOP NOW</a>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-2'>
          <div className='flex flex-col justify-center items-center'>
          <img src={sneakers} alt=''/>
          </div>
          <div>
            <p>EXPLORE PATRIKCOLOR</p>
          </div>
          <div>
            <p>Classic runway dress</p>
          </div>
          <div className='flex flex-row justify-between'>
            <div>
              <a href='./' className='underline'>SHOP NOW</a>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-2'>
          <div className='flex flex-col justify-center items-center'>
          <img src={sweater} alt=''/>
          </div>
          <div>
            <p>EXPLORE PATRIKCOLOR</p>
          </div>
          <div>
            <p>Classic runway dress</p>
          </div>
          <div className='flex flex-row justify-between'>
            <div>
              <a href='./' className='underline'>SHOP NOW</a>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-2'>
          <div className='flex flex-col justify-center items-center'>
          <img src={jacket} alt=''/>
          </div>
          <div>
            <p>EXPLORE PATRIKCOLOR</p>
          </div>
          <div>
            <p>Classic runway dress</p>
          </div>
          <div className='flex flex-row justify-between'>
            <div>
              <a href='./' className='underline'>SHOP NOW</a>
            </div>
            <div>
              <img src = {ratings} alt=''/>
            </div>
          </div>
        </div>
      </div>

      <div><Footer /></div>
    </div>
  )
}
