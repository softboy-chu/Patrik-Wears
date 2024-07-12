import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import loafers from '../assets/images/loafers.png'
import ratings from '../assets/images/ratings.png'
import like from '../assets/images/like.png';
import cart from '../assets/images/cart.png';
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

export default function LandingPageChildren() {
  return (
    <div>
      <div><Navbar /></div>

      <div className='flex flex-col gap-5 lg:flex lg:flex-row lg:gap-40 md:flex md:flex-row md:gap-24'>
        <div className='m-1'>
          <a href='./home'>
            <img src = {leftarrow}/>
          </a>
        </div>
        <div className='p-1.5'>
          <div>
            <p className='text-2xl font-bold'>MEN’S SHOES: UP TO 60% OFF THIS WEEK</p>
          </div>
          <div>
            <p>Find children's's athletic sneakers you can wear whether your focus for the day is training or chilling. Effortlessly combine the best of function and fashion for greatness in every step</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-4 m-8 gap-3'>
        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
            <a href='./cart'>
            <img src={loafers}/>
            </a>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
            <a href='./cart'>
            <img src={stilletto}/>
            </a>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <a href='./cart'>
          <img src={oldskoolvans}/>
          </a>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <a href='./cart'>
          <img src={oldskoolvans}/>
          </a>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <a href='./cart'>
          <img src={airforce}/>
          </a>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <img src={basketball}/>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <img src={dunks}/>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <img src={dunks}/>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <img src={adidas}/>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <img src={heels}/>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <img src={club99heels}/>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>

        <div className='bg-gray-100 p-3'>
          <div className='flex flex-col justify-center items-center'>
          <img src={club99heels}/>
          </div>
          <div>
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
              <img src = {ratings}/>
            </div>
          </div>
          <div className='flex flex-row gap-24 justify-around items-center p-4'>
            <div>
              <button><img src = {like}/></button>
            </div>
            <div>
              <button><img src = {cart}/></button>
            </div>
            <div>
              <button><img src = {addToCart}/></button>
            </div>
          </div>
        </div>
      </div> 
      <div><Footer/></div>
    </div>
  )
}
