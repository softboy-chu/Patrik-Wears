import React, { useState } from 'react'
import NavbarBottom from '../components/navbarBottom'
import leftarrow from '../assets/images/arrowleft.png'
import searchbutton from '../assets/images/search.png'
import cartImage from '../assets/images/cartboot.png'
import like from '../assets/images/like.png';
import addToCart from '../assets/images/addtocart.png'
import rating from '../assets/images/4star-ratings.png'
import sizeButton from '../assets/images/sizebutton.png'
import decerement from '../assets/images/decrement.png'
import increment from '../assets/images/increment.png'
// import size from '../components/size'
import Size from '../components/size'

export default function Cart() {

  const [shoeSize, setShoeSize] = useState(false);

  const toggleShoeSize = () => {
    setShoeSize(prevState => !prevState);
  };

  // const closeShoeSize = () => {
  //   setShoeSize(false);
  // };

  return (
    <div>
      <div className='flex flex-row justify-between items-center bg-gray-100 p-3 m-4'>
        <div>
          <a href='./home'>
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
            <p className='text-justify'>Step into the future with our Extreme Oxford shoes, designed exclusively for the bold and stylish Gen Z. Crafted with a perfect blend of traditional elegance and modern flair, these shoes feature premium leather uppers and a unique chunky sole that provides both comfort and a contemporary edge. Available in an array of vibrant colors, the Extreme Oxford is your go-to choice for making a statement at any event. </p>
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
            <p className='font-bold'>&#8358;65000</p>
          </div>

        </div>
      </div>
      <div>
        <div className='flex flex-row justify-between items-center p-4 bg-[#D9D9D9]'>
          <div>
            <p>Size</p>
          </div>
          <div className='flex flex-row items-center'>
            {/* <select className='bg-[#D9D9D9]'>
              <option selected value="1">Shoe Sizes</option>
              <option value="2">37</option>
              <option value="3">38</option>
              <option value="4">39</option>

            </select> */}
            {shoeSize && <Size />}
            <button className='ml-3' onClick={toggleShoeSize}>
              <img src={sizeButton} alt='size toggle button'/>
            </button>
          </div>
        </div>

        <div className='flex flex-row justify-between items-center p-4 bg-[#D9D9D9]'>
          <div>
            <p>Colour</p>
          </div>
          <div className='flex flex-row gap-5'>
            <div>
              <p>Artctic Brown</p>
            </div>
            <div>
              <button>
                <img src={sizeButton} alt='size toggle button'/>
              </button>
            </div>
          </div>
        </div>
        </div>
        <div className='flex flex-row self-center justify-between items-center p-4 bg-[#D9D9D9]'>
          <div>
            <p>Quantity</p>
          </div>

          <div className='bg-[#E8E8E8] rounded-2xl flex flex-row items-center gap-8 p-2 grow-0'>
            <div>
              <button>
                <img src = {decerement} alt='decrement'/>
              </button>
            </div>
            <div>
              <button>
                <p>1</p>
              </button>
            </div>
            <div>
              <button>
                <img src = {increment} alt='increment button'/>
              </button>
            </div>
          </div>
        </div>

        <div className='m-4'>
          <div className='gradient bg-[#FCDDEC] p-4 rounded-full text-center'>
            <a href='./checkout'>
              <p>Add to cart</p>
            </a>
          </div>
        </div>

        <div><NavbarBottom/></div>
    </div>
  )
}
