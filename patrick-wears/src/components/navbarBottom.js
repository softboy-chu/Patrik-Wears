import React from 'react'
import updateButton from '../assets/images/updates.png'
import searchButton from '../assets/images/searchbtn.png'
import cartbtn from '../assets/images/cartbtn.png'
import savebtn from '../assets/images/save.png'
import profilebtn from '../assets/images/profile.png'

export default function NavbarBottom() {
  return (
    <div>
      <div className='flex flex-row justify-between m-2 p-4 gap-1'>
        <div className='flex flex-col gap-0.5 items-center'>
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
