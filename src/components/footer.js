import React from 'react'
import googlePlay from '../assets/images/google-play.png'
import applestore from '../assets/images/appstore.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/x.png'
import instagram from '../assets/images/IG.png'
import linkedin from '../assets/images/linkedin.png'
import youtube from '../assets/images/youtube.png'
import whiterightarrow from '../assets/images/whiterightarrow.png'

export default function Footer() {
  return (
    
    <div>
      <div className='bg-[#5D5FEF] p-8 text-white flex flex-col gap-4 items-center md:flex md:flex-row lg:flex lg:flex-row justify-between'>
        <div>
          <div>
            <p className='text-2xl font-semibold'>Join our exclusive Patriclub newsletter list</p>
          </div>
          <div>
            <p className='font-thin'>Be the first to know when we have new releases</p>
          </div>
        </div>
        <div>
        <div className='flex flex-row gap-8 items-center bg-black text-white px-3 py-1.5 w-fit'>
            <button>Sign me up for free</button>
            <img src={whiterightarrow} alt='right arrow'/> 
          </div>
        </div>
      </div>
      <div className='grid grid-rows-1 text-center m-6 items-center'>

        <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 grid grid-cols-2      ,, m,,,,m. nm m '>
        <div className='flex flex-col gap-2'>
          <a href='./' className='center text-base font-semibold'>Collection</a>
          <a href='./' className='text-base'>Football</a>
          <a href='./' className='text-base'>Sports</a>
          <a href='./' className='text-base'>Office</a>
          <a href='./' className='text-base'>Casual</a>
          <a href='./' className='text-base'>Party</a>
      </div>
      <div className='flex flex-col gap-2'>
          <a href='./' className='center text-base font-semibold'>Products</a>
          <a href='./' className='text-base'>Shoes</a>
          <a href='./' className='text-base'>Clothing</a>
          <a href className='text-base'>Accesories</a>
          <a href='./' className='text-base'>Gift Packs</a>
      </div>
      <div className='flex flex-col gap-2 mt-4'>
          <a href='./' className='center text-base font-semibold'>About</a>
          <a href='./' className='text-base'>Our company</a>
          <a href='./' className='text-base'>Careers</a>
          <a href='./' className='text-base'>Community service</a>
      </div>
      <div className='flex flex-col gap-2'>
          <a href='./' className='center text-base font-semibold'>Contact</a>
          <a href='./' className='text-base'>Find us</a>
          <a href='./' className='text-base'>Support</a>
          <a href='./' className='text-base'>Helpline</a>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
          <a href='./' className='center text-base font-semibold'>New arrivals</a>
          <a href='./' className='text-base'>Latest</a>
          <a href='./' className='text-base'>Gbanjo</a>
          <a href='./' className='text-base'>Flash sale</a>
      </div>
  </div>

<div className='flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 m-6'>
    <div>
      <div>
        <p>Download our App</p>
      </div>
      <div className='flex flex-row gap-4 justify-center items-center p-4'>
        <div>
          <a href='./'>
            <img src={googlePlay} alt=''/>
          </a>
        </div>
        <div>
          <a href='./'>
            <img src={applestore} alt=''/>
          </a>
        </div>
      </div>
    </div>

    <div>
      <div>
        <p>Follow us on social media</p>
      </div>
      <div className='flex flex-row gap-2 justify-center items-center p-6'>
        <div>
          <a href='./'>
            <img src={facebook} alt=''/>
          </a>
        </div>
        <div>
          <a href='./'>
            <img src={twitter} alt=''/>
          </a>
        </div>
        <div>
          <a href='./'>
            <img src={instagram} alt=''/>
          </a>
        </div>
        <div>
          <a href='./'>
            <img src={linkedin} alt=''/>
          </a>
        </div>
        <div>
          <a href='./'>
            <img src={youtube} alt=''/>
          </a>
        </div>
      </div>
    </div>         
</div>
</div>
    </div> 
  )
}
