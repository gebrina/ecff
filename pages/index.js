import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar/Navbar';
import Image from 'next/image';
import Footer from '../components/footer/Footer';
export default function Home({news}) {
  
  return (
    <div>
      <Head>
        <title>EOFF</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className='relative '>
        <Navbar/>
        <div style={{backgroundImage:`url('/images/home-bg.png')`}} 
        className='h-screen home bg-cover w-full bg-norepeat absolute top-0' >
        </div>
        <div className='bg-overlay relative  h-screen w-full -top-40'>
         <div className='flex justify-center items-end gap-y-2 flex-col text-white absolute left-10 md:right-32 top-32 sm:top-96'>
           <h1 className='text-3xl'>Sustainability is Our Core Principle</h1>
           <p className='text-xl'>Las Vegas Casino Closing, Another Will Take Its Place - TheStreet</p>
           <Link href=""><a className='text-4xl underline transition-all decoration-4 hover:text-gray-300 underline-offset-8 pr-12 sm:pr-0'>Learn More</a></Link>
         </div>
        </div>
       

        <div className='grid grid-cols-1 w-full sm:w-[85%] mx-auto lg:grid-cols-3 md:grid-cols-2 
                         overflow-hidden  relative gap-16  -top-[170px]'>
          <div className='relative m-auto'>
          <div style={{backgroundImage:`url('/images/card.png')`}} className="h-[350px] w-[350px] border-8 border-white  bg-cover">
          </div>
          <div className='h-[335px] text-white items-center text-center flex flex-col justify-end absolute  
          top-2 left-2 card-overlay w-[335px]'>
              <h1 className='text-3xl'>Project</h1>
              <p className='w-2/3'>Las Vegas Casino Closing, Another Will Take Its Place - TheStreet</p>
              <Link href={''}><a className='text-xl mb-2 rounded hover:shadow-lg border px-4'>Read More</a></Link>
          </div>
          </div>

          <div className='relative m-auto'>
          <div style={{backgroundImage:`url('/images/womans.png')`}} className="h-[350px] w-[350px] border-8 border-white  bg-cover">
          </div>
          <div className='h-[335px] text-white items-center text-center flex flex-col justify-end absolute  
          top-2 left-2 card-overlay w-[335px]'>
              <p className='w-2/3'>Las Vegas Casino Closing, Another Will Take Its Place - TheStreet</p>
              <Link href={''}><a className='text-xl mb-2 rounded hover:shadow-lg border px-4'>Read More</a></Link>
          </div>
          </div>
        <div className='relative m-auto'>
          <div style={{backgroundImage:`url('/images/cofees.png')`}} className="h-[350px] w-[350px] border-8 border-white  bg-cover">
          </div>
          <div className='h-[335px] text-white items-center text-center flex flex-col justify-end absolute  
          top-2 left-2 card-overlay w-[335px]'>
              <h1 className='text-3xl'>Project</h1>
              <p className='w-2/3'>Las Vegas Casino Closing, Another Will Take Its Place - TheStreet</p>
              <Link href={''}><a className='text-xl mb-2 rounded hover:shadow-lg border px-4 py-1'>Read More</a></Link>
          </div>
          </div>
        </div>
        {/**About Us */}
        <div className='relative  -top-[130px] bottom-0'>
         <div className='flex mx-16 bg-orange-50 flex-col sm:flex-row gap-4'>
          <img src="/images/about.png" className='w-full h-60 sm:w-1/2 shadow-3xl  sm:h-auto object-cover' />
           <div className='bg-red-50  flex flex-col gap-y-2 m-4'>
            <h1 className='text-red-700 font-bold text-3xl'>About Us</h1>
            <p className='w-[90%]'> Tempor reprehenderit dolor dolor mollit.
              Cillum ullamco exercitation reprehenderit nulla 
              esse labore tempor. Aute nostrud cupidatat.
              Tempor reprehenderit dolor dolor mollit.
              Cillum ullamco exercitation reprehenderit nulla 
              esse labore tempor. Aute nostrud cupidatat.
              Tempor reprehenderit dolor dolor mollit.
              Cillum ullamco exercitation reprehenderit nulla 
              esse labore tempor. Aute nostrud cupidatat.
            </p>
            <Link href={'/'}><a className='text-red-700 text-xl underline uppercase underline-offset-4'>Learn More</a></Link>
           </div>
      
         </div>
  {/**Publications */}
         <div className='mt-6 sm:mt-12'>
         <h1 className='text-center mb-6 text-red-700 font-bold text-3xl'>Publications</h1>
          <div className=' grid grid-cols-1 gap-4 sm:grid-cols-2 mx-16'>
             <div className='relative  bg-cover w-full h-[200px] sm:h-3/5 bg-norepeat' style={{backgroundImage:`url('/images/about.png')`}}>
              <div className='absolute flex  items-end pr-8 pt-8 flex-col text-white  h-full w-full  bg-gradient-to-t from-gray-900'>
                <div className='flex flex-col justify-between h-full'>
                <div>
                <h1 className='text-xl'>2021 Publication Reports</h1>
                <p>Lorem do proident dolore cillum in.</p>
                </div>
                <div className='mb-8'>
                  <p className='mb-2'>41MB PDF</p>
                  <button className='uppercase border px-4 py-1'>Download</button>
                </div>
                </div>
              </div>
             </div>
             <div className='flex flex-col h-1/2 sm:h-3/5 gap-4'>
             <div className='relative bg-cover w-full h-96 bg-norepeat' style={{backgroundImage:`url('/images/coffee.png')`}}>
              <div className='absolute flex items-end pr-8 pt-8 flex-col text-white h-full w-full  bg-gradient-to-t from-gray-900'>
                <div className='justify-between h-full flex flex-col'>
                  <div>
                  <h1 className='text-xl'>2021 Production Reports</h1>
                   <p>Lorem do proident dolore cillum in.</p>
                  </div>
                <div className='mb-8'>
                  <Link href={'/'} className='uppercase border px-4 py-1'><a className='border  px-4 py-1'>Read More</a></Link>
                </div>
                </div>
              </div>
             </div>
             <div className='relative bg-cover w-full h-96 bg-norepeat' style={{backgroundImage:`url('/images/seminar.png')`}}>
              <div className='absolute flex items-end pr-8 pt-8 flex-col text-white h-full w-full bg-top  bg-gradient-to-t from-gray-900'>
                <div className='justify-between h-full flex flex-col'>
                  <div>
                  <h1 className='text-xl'>2021 Seminar</h1>
                   <p>Lorem do proident dolore cillum in.</p>
                  </div>
                <div className='mb-8'>
                  <p className='mb-2'>32 mins</p>
                  <Link href={'/'} ><a className='border mt-4 px-4 py-1'>View</a></Link>
                </div>
                </div>
              </div>
             </div>
             </div>
             <div>
             </div>
           </div>
           <div style={{backgroundColor:'#F3F1E7'}} className='p-12 w-full rounded -mt-96 sm:-mt-64'>
            <div className='flex gap-4 flex-col w-3/4 mx-auto items-center'>
            <Image src={'/images/qoutes.png'}  width={20} height={20}/>
            <p className='text-gray-400'>Thousands of satified user around the globe.</p>
            <blockquote className='w-full  lg:w-1/2 text-2xl  text-center'>
            <span className='text-gray-900'>&ldquo;</span>
              Ad in nisi nostrud  reprehenderit minim  eiusmod,
              ad in nisi nostrud  eiusmod minim reprehenderit 
              ad in nisi nostrud minim reprehenderit eiusmod.
             <span className='text-gray-900'>&rdquo;</span>
            </blockquote>
              <div  className='flex items-center gap-8'>
              <a href="" className='flex items-center text-gray-400 gap-1'><img src={'/images/back.png'} alt={"Previous"}/><span>Prev</span> </a>
              <img src="/images/testimonial.png" className='rounded-full h-32 w-32 object-cover border-4 border-red-700 object-top' alt='Testimonial'/>
               <a href="" className='flex items-center text-gray-400 gap-1'><span>Next</span> <img src={'/images/next.png'} alt={"Next"}/></a>
              </div>
             <div>
              <h1 className='text-3xl font-bold capitalize'>Abebech Derara</h1>
              <h3 className='text-gray-400 text-2xl text-center'>Customer</h3>
              </div>
            </div>
           </div>

           {/**News */}
           <div className='mx-12'>
             <div className='text-center m-8'>
              <h3 className='text-2xl font-bold uppercase'>Stay Informed</h3>
               <h1 className='text-3xl uppercase font-bold text-red-700'>News & Blogs</h1>
             </div>
             <div className='grid grid-cols-1  sm:grid-cols-2 gap-4 md:grid-cols-3'>
              {news?.slice(0,6).map((news,index)=>{
                 return   <>
                    {news.urlToImage?.length>0?<div key={index}>
                 <img src={news.urlToImage} className='w-full h-[354px] object-cover' alt=''/>
                 <p className='text-xl'>{news.title}</p>
                  </div>:null}
                  </>
              })}
             </div>
            </div>
         </div>
         <div className='text-red-800 mt-12 mx-auto sm:m-12'>
          <h1 className='font-bold text-center text-4xl'>Partners</h1>
           <div className='grid sm:grid-cols-3  lg:grid-cols-4 justify-center gap-16 mt-8'>
             <img src={'/images/euras.png'} className="h-48 w-full  border shadow-lg -p-4 hover:border-2 hover:shadow-sm"/>
             <img src={'/images/usaid.png'}  className="h-48 w-full border shadow-lg -p-4 hover:border-2 hover:shadow-sm"/>
             <img src={'/images/euras.png'}  className="h-48 w-full  border shadow-lg -p-4 hover:border-2 hover:shadow-sm"/>
             <img src={'/images/usaid.png'}  className="h-48 w-full  border shadow-lg -p-4 hover:border-2 hover:shadow-sm"/>
           </div>
         </div>
        </div>    
        <div className=''>
         <Footer/>
        </div>
      </main>
     
    </div>
  )
}

export const getStaticProps = async () =>{
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=959819104a8d45e4949a512ddcce84ef');
  const data = await response.json();
  const  news = data.articles;
  if(Array.isArray(news)){
  return {
    props:{
      news
    }
  }
}
 return {
  props:{
    news:[]
  }
 }
}
