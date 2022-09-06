import Link from 'next/link';
import { useState } from 'react';
const Navbar = () =>{
   const [showMenu,setShowMenu] = useState(false);
   const [topPostion,setTopPosition] = useState(1000)
   return (<header className='h-96 sm:h-auto overflow-hidden relative z-10'>
           <div className="flex-col h-auto flex sm:flex-row 
                               sm:h-12  container py-10 px-4 
                               items-stretch
                              sm:items-center justify-between
                                mx-auto"
               >
            <img  width={100} src={'/logo.png'} alt="ECFF"/>
              <div className={`flex flex-col
                sm:flex-row  text-white pr-4
                absolute
                 right-[10px]
                  gap-4
                  sm:gap-8
                 sm:right-0
                ${showMenu?' top-[40px]':' -top-[1000px]'}
                sm:relative sm:top-0
               whitespace-nowrap text-xl uppercase `}>
              <Link href={'/'}><a className='hover:text-gray-200'>Home</a></Link>
               <Link href={'/about'}><a className='hover:text-gray-200'>About</a></Link>
               <Link href={'/'}><a className='hover:text-gray-200'>Projects</a></Link>
               <Link href={'/'}><a className='hover:text-gray-200'>Publications</a></Link>
               <Link href={'/'}><a className='hover:text-gray-200'>Partners</a></Link>
               <Link href={'/'}><a className='hover:text-gray-200'>Contact Us</a></Link>
              </div>
           </div>
           <div className='sm:hidden absolute top-10 right-4 block'>
   <img src={showMenu?'/close.png':'/list.png'}
    onClick={()=>{
      setShowMenu(!showMenu);
    }}
   className='cursor-pointer' alt='open menu'/>
           </div>
        </header>)
}

export default Navbar;