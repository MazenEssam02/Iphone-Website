import {appleImg,searchImg,bagImg} from '../utils';
import {navLists} from '../constants';
function Footer() {
  return (
    <header className=' bg-zinc w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <footer className='flex flex-col w-full screen-max-width'>
      {/* <img src={appleImg} alt="Apple Logo" height={20} width={18}/> */}
      <div className='flex flex-1 justify-center max-sm:hidden'>
      {navLists.map((nav,i)=>{
        return(
         <div className='px-5 text-gray cursor-pointer hover:text-white transition-all' >
          {nav}
         </div>
          )
      })}
      </div>
      <p className='flex-1 flex justify-center text-sm text-gray pt-10'>
      Copyright © 2025 Mazen Essam. All Rights Reserved.
      </p>
      
      </footer>
    </header>
  )
}

export default Footer