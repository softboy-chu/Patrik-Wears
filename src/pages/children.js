import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import loafers from '../assets/images/loafers.png'
import ratings from '../assets/images/ratings.png'
import like from '../assets/images/like.png';
import addToCart from '../assets/images/addtocart.png'
import stilletto from '../assets/images/brownheels.png'
import heels from '../assets/images/tigerskinheels.png'
import club99heels from '../assets/images/99heels.png'
import oldskoolvans from '../assets/images/vans.png'
import airforce from '../assets/images/airforcehigh.png'
import basketball from '../assets/images/bball.png'
import dunks from '../assets/images/dunklow.png'
import adidas from '../assets/images/adidassamba.png'
import leftarrow from '../assets/images/arrowleft.png'

export default function Children() {
  return (
    <div>
      <div><Navbar /></div>

      <div className='flex flex-col gap-5 lg:flex lg:flex-row lg:gap-40 md:flex md:flex-row md:gap-24'>
        <div className='m-1 mt-28'>
          <a href='./'>
            <img src = {leftarrow} alt='a navigation button for going to the previous page'/>
          </a>
        </div>
        <div className='p-2.5'>
          <div>
            <p className='text-2xl font-bold'>CHILDRENS'S SHOES: UP TO 60% OFF THIS WEEK</p>
          </div>
          <div>
            <p>Find cildren's athletic sneakers you can wear whether your focus for the day is training or chilling. Effortlessly combine the best of function and fashion for greatness in every step</p>
          </div>
        </div>
      </div>

<div className='flex flex-col md:grid md:grid-cols-4 m-8 gap-3'>
  <div className='bg-gray-100'>
    <div>
      <img src={loafers} alt='a loafers shoe' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='a ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt=''/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt=''/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div>
    <img src={stilletto} alt='a stiletto' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='a rartings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div>
    <img src={oldskoolvans} alt='vans sneakers' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='a ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div>
    <img src={oldskoolvans} alt='vans sneakers' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='a ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div className='flex flex-col justify-center items-center'>
    <img src={airforce} alt='a white airforce 1' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='a ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cartt button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div className='flex flex-col justify-center items-center'>
    <img src={basketball} alt='a basketball sneakers' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='a ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div className='flex flex-col justify-center items-center'>
    <img src={dunks} alt='a white sb dunk' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='a ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div className='flex flex-col justify-center items-center'>
    <img src={dunks} alt='a white sb dunk' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='a ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div>
    <img src={adidas} alt='an adidas sneakers' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div>
    <img src={heels} alt='a heel' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div className='flex flex-col justify-center items-center'>
    <img src={club99heels} alt='a heel in 2 colors' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>

  <div className='bg-gray-100'>
    <div className='flex flex-col justify-center items-center'>
    <img src={club99heels} alt='a heel in 2 colors' className='w-full'/>
    </div>
    <div className='mt-4'>
      <p>Club 99 Heels</p>
    </div>
    <div>
      <p>Classic office high heels</p>
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <p className='font-bold'>&#8358;35000</p>
      </div>
      <div>
        <img src = {ratings} alt='ratings button'/>
      </div>
    </div>
    <div className='flex flex-row gap-24 justify-between items-center p-4'>
      <div>
        <button><img src = {like} alt='a like button'/></button>
      </div>
      <div>
        <button><img src = {addToCart} alt='an add-to-cart button'/></button>
      </div>
    </div>
  </div>
</div> 
<div><Footer/></div>
    </div>
  )
}
