import React from 'react'
import NavbarBottom from '../components/navbarBottom';
import leftarrow from '../assets/images/arrowleft.png';
import searchbutton from '../assets/images/search.png';
import cartImage from '../assets/images/cartboot.png'
import like from '../assets/images/like.png';
import addToCart from '../assets/images/addtocart.png'
import rating from '../assets/images/4star-ratings.png';
import exitbtn from '../assets/images/exit.png';

export default function PlacedOrder() {
  return (
    <div>
      <div className='flex flex-row justify-between items-center p-3 m-4'>
        <div>
          <a href='./checkout'>
            <img src = {leftarrow} alt='a navigation button'/>
          </a>
        </div>
        <div>
          <p>Patrik Wears</p>
        </div>
        <div>
          <a href='./search'>
            <img src = {searchbutton} alt='a navigation button'/>
          </a>
        </div>
      </div>

      <div>
        <div className='flex flex-row justify-between items-center m-4'>
          <div>
            <h2 className='text-4xl'>Order placed!</h2>
          </div>
          <div>
            <button>
              <img src = {exitbtn} alt=''/>
            </button>
          </div>
        </div>
      </div>

      <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 items-center'>
        <div className='p-8'>
          <img src = {cartImage} alt='chelsea boots'/>
        </div>
        <div className='flex flex-col gap-7 p-4'>

          <div className='flex flex-row justify-between'>
                <div>
                  <h3>Sweaty Sports</h3>
                </div>
              <div className='flex flex-row gap-8 items-center'>
                  <div>
                    <button><img src = {like} alt='like an item'/></button>
                  </div>
                  <div>
                    <button><img src = {addToCart} alt='add to cart button'/></button>
                  </div>
              </div>
          </div>

          <div>
            <p className='text-justify'>Step into the future with our Extreme Oxford shoes, designed exclusively for the bold and stylish Gen Z. Crafted with a perfect blend of traditional elegance and modern flair, these shoes feature premium leather uppers and a unique chunky sole that provides both comfort and a contemporary edge. Available in an array of vibrant colors, the Extreme Oxford is your go-to choice for making a statement at any event.  </p>
          </div>

          <div className='flex flex-row gap-2 justify-center items-center'>
            <div>
              <img src= {rating} alt='rating for products purchased'/>
            </div>
            <div>
              <p>10 positive reviews</p>
            </div>
          </div>

          <div className='flex flex-row justify-center'>
            <p className='font-bold'>&#8358;65,000</p>
          </div>
      </div>
    </div>

    <div>
      <div className='m-4 bg-[#D9D9D9] p-4 flex flex-row'>
        <div className='p-3 '>
          <p>Size 32</p>
        </div>
        <div className='p-3 '>
          <p>Colour: Artic Brown</p>
        </div>
        <div>
        <div className='p-3 flex flex-row items-center gap-4'>
          <div>
            <p>Quantity</p>
          </div>
          <div className='bg-[#E8E8E8] p-1.5'>
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className='m-4 bg-[#D9D9D9]'>
      <div className='flex flex-row justify-between items-center p-4 border-b-2 border-b-gray-500'>
        <div>
          <p>Delivery address</p>
        </div>
        <div className=''>
          <p>Block 15, LSDPC Housing Estate, Aguda</p>
        </div>
      </div>
      <div className='p-4 flex flex-row items-center gap-4 border-b-2 border-b-gray-500 rounded-b-xl'>
          <div>
            <p>Contact</p>
          </div>
          <div className='bg-[#E8E8E8] p-1.5 w-4/5 rounded-2xl'>
            <p>08023456789</p>
          </div>
        </div>
    </div>

    <div className='flex flex-col m-4 bg-[#D9D9D9] rounded-2xl'>
      <div className='flex flex-row justify-between items-center p-4'>
        <div>
          <p>Total amount</p>
        </div>
        <div>
          <p className='font-semibold'>&#8358;130,000</p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center p-4'>
        <div>
          <p>Delivery fee</p>
        </div>
        <div>
          <p className='font-semibold'>&#8358;5000</p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center p-4'>
        <div>
          <p>Tax and Surcharge</p>
        </div>
        <div>
          <p className='font-semibold'>&#8358;500</p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center p-4'>
        <div>
          <p>Net total</p>
        </div>
        <div>
          <p className='font-semibold'>&#8358;135,000</p>
        </div>
      </div>
    </div>
      <div><NavbarBottom/></div>
    </div>
  )
}
