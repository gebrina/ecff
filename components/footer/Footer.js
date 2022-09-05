
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
const Footer = () => {
  const router = useRouter();
  const pathname = router.pathname.toString().substring(1);

  return (<div className={pathname.length>0?'':'-mt-32'}>
    <div className='flex   bg-red-900  p-8 flex-col md:flex-row'>
    <div className='w-full md:w-1/3'>
      <img src={'/logo.png'} className="h-12 mb-2"  alt="ECFF"/>
      <p className='text-red-300'>
        Ullamco voluptate aliqua velit 
         adipisicing. Ullamco sunt ipsum 
         aliqua consequat consequat
         adipisicing labore occaecat
         dolore est sint laborum tempor
         nostrud amet voluptate.
      </p>
      <p className='flex gap-4'>
        <img src='/images/fb.png' className='bg-red-800 cursor-pointer rounded-full p-2' alt='Facebook address'/>
        <img src='/images/twitter.png' className='bg-red-800  cursor-pointer rounded-full p-2' alt='Twitter address'/>
        <img src='/images/linkedin.png' className='bg-red-800 cursor-pointer  rounded-full p-2 '   alt='LinkedIn address'/>
        <img src='/images/youtube.png'  className='bg-red-800 rounded-full cursor-pointer p-2' alt='Youtube address'/>
      </p>
       <div>
       </div>
      </div>
      <div className='w-full flex flex-row flex-wrap sm:flex-row  items-center gap-8 sm:justify-evenly'>
        <div className='flex flex-col justify-start space-x-2'>
          <h1 className='text-white pl-2 text-xl font-bold'>Quick Links</h1>
          <Link href={'/'}><a className='text-red-300'>Home</a></Link>
          <Link href={'/'}><a className='text-red-300'>About Us</a></Link>
          <Link href={'/'}><a className='text-red-300'>Projects</a></Link>
          <Link href={'/'}><a className='text-red-300'>Resources</a></Link>
        </div>
        <div className='flex flex-col justify-start space-x-2'>
          <h1 className='text-white pl-2 text-xl font-bold '>About Us</h1>
          <Link href={'/'}><a className='text-red-300'>History</a></Link>
          <Link href={'/'}><a className='text-red-300'>Mission/Vision</a></Link>
          <Link href={'/'}><a className='text-red-300'>Our Team</a></Link>
          <Link href={'/'}><a className='text-red-300'>Partners</a></Link>
        </div>
        <div className='flex flex-col justify-start space-x-2'>
          <h1 className='text-white pl-2 text-xl font-bold '>Projects</h1>
          <Link href={'/'}><a className='text-red-300'>Project 1</a></Link>
          <Link href={'/'}><a className='text-red-300'>Project 2</a></Link>
          <Link href={'/'}><a className='text-red-300'>Project 3</a></Link>
          <Link href={'/'}><a className='text-red-300'>Project 4</a></Link>
        </div>
        <div className='flex  flex-col items-center sm:items-stretch w-1/2 sm:w-1/5  space-x-2 -mb-8 sm:-mb-10'>
          <h1 className='text-white pl-2 text-xl font-bold'>Contact Info</h1>
          <p className='text-red-300 text-center sm:text-left'>
            Environment and Coffe Forest,
            Forum, P.O.BOX:28513 Addis Ababa Ethiopia
            <a href={''} className="block">
            +251-116-733-707
            </a>
            <a href={''} className="block">
              info@ecff.org.et
            </a>
          </p>
        </div>
      </div>
    </div>
      <div className='footer-bg flex p-4 px-8 justify-between w-full'>
          <p className='text-red-300 text-xl'>&copy;&nbsp;{new Date().getFullYear()}</p>
          <p className='text-red-300 text-xl '>Powered bye <Link href={''}><a>M.A.D Technologies</a></Link></p>
      </div>
    </div>
  )
}

export default Footer