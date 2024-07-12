import React from 'react'
import leftarrow from '../assets/images/arrowleft.png'
import searchbutton from '../assets/images/search.png'
import sortbtn from '../assets/images/sort.png'
import rightarrow from '../assets/images/rightarrowgreen.png'
import exitbtn from '../assets/images/exit.png';
import updateButton from '../assets/images/updates.png'
import searchButton from '../assets/images/searchbtn.png'
import cartbtn from '../assets/images/cartbtn.png'
import savebtn from '../assets/images/save.png'
import profilebtn from '../assets/images/profile.png'
import like from '../assets/images/like.png';
import cart from '../assets/images/cart.png';
import addToCart from '../assets/images/addtocart.png'
import stilletto from '../assets/images/brownheels.png'
import ratings from '../assets/images/ratings.png'

export default function FlashSale() {
  return (
    <div>
      <div className='flex flex-row justify-between items-center bg-gray-100 p-3 m-4'>
        <div>
          <a href='./women'>
            <img src = {leftarrow} alt='a navigation button'/>
          </a>
        </div>
        <div>
          <p>Women Shoes</p>
        </div>
        <div>
          <a href='./search'>
            <img src = {searchbutton} alt='a navigation button'/>
          </a>
        </div>
      </div>

      <div className='text-center'>
        <p>630 results</p>
      </div>

      <div className='flex flex-row justify-between items-center gap-0.5'>
        <div>
          <button>
            <img src = {sortbtn} alt='sort button'/>
          </button>
        </div>
        <div className='p-3 rounded-full border-solid border-2 w-fit'>
          <p>Sneakers</p>
        </div>
        <div className='p-3 rounded-full border-solid border-2 w-fit'>
          <p>Boots</p>
        </div>
        <div className='p-3 rounded-full border-solid border-2 w-fit'>
          <p>Heels</p>
        </div>
        <div className='p-3 rounded-full border-solid border-2 w-fit'>
          <p>Slides</p>
        </div>
        <div className='p-3 rounded-full border-solid border-2 w-fit'>
          <p>Canvas</p>
        </div>
      </div>

      <div className='mt-3 bg-black'>
        <div className='p-4 text-white text-2xlc leading'>
          <div className='flex justify-between'>
            <p>Flash Sales!</p>
            <button>
              <img src = {exitbtn} alt='exit button'/>
            </button>
          </div>
          <div>
            <p>Ready to shop amazing wears at gbanjo sales? You can’t get this price anywhere else! </p>
          </div>
          <div>
            <button className='m-3 flex text-[#CCFF00] items-center gap-3'>Shop Now <img src={rightarrow}/></button>
          </div>
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 flex flex-col'>
      <div>
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
      </div>

      <div>
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
      </div>
      </div>
      
      <div className='flex flex-row justify-between m-2 p-4 gap-1'>
        <div className='flex flex-col gap-0.5 items-center hover:bg-gray-200 rounded-xl hover:text-lg'>
          <div>
            <button>
              <img src={updateButton} alt='update btn'/>
            </button>
          </div>
          <div>
            <p>Updates</p>
          </div>
        </div>

        <div className='flex flex-col gap-0.5 items-center'>
          <div>
            <button>
              <img src={searchButton} alt='search btn'/>
            </button>
          </div>
          <div>
            <p>Search</p>
          </div>
        </div>

        <div className='flex flex-col gap-0.5 items-center'>
          <div>
            <button>
              <img src={cartbtn} alt='cart btn'/>
            </button>
          </div>
          <div>
            <p>Cart</p>
          </div>
        </div>

        <div className='flex flex-col gap-0.5 items-center'>
          <div>
            <button>
              <img src={savebtn} alt='save btn'/>
            </button>
          </div>
          <div>
            <p>Save</p>
          </div>
        </div>

        <div className='flex flex-col gap-0.5 items-center'>
          <div>
            <button>
              <img src={profilebtn} alt='profile btn'/>
            </button>
          </div>
          <div>
            <p>Profile</p>
          </div>
        </div>
      </div>
    </div>
  )
}
