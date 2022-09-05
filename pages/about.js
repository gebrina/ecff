import Navbar from "../components/navbar/Navbar";
import Image from "next/image";
import Footer from "../components/footer/Footer";

const About = ({impactItems}) =>{
    console.log("immpack items",impactItems)
      return <div>
        <div style={{backgroundImage:`url('/images/about/about-bg.png')`}}
          className="h-[400px] relative" >
            <div className="bg-coffee z-10 w-full h-[400px] absolute  top-0">
                <h1 className="text-4xl text-white absolute font-bold top-44 left-32">About Us / Overview</h1>
            </div>
           <Navbar/>
         
         
      </div>

      <div className="relative mt-16  flex-col w-[85%] gap-16 flex sm:flex-row mx-auto">
            <div className="w-full sm:w-1/2">
                <h1 className="text-3xl text-center sm:text-left mb-2 font-bold text-red-800">
                    We are ECFF
                </h1>
                <p className="mb-2">  The Environment and Coffee 
                     Forest Forum (ECFF), is a local Civil Society Organization registered and licenced in Ethiopia (registration No. 0378), 
                     and focuses on developing
                     strategies for sustainable 
                     use and conservation of
                     the environment in general, and the coffee forests in particular, through thematic research on conservation 
                     planning, education
                     and pilot implmentation 
                     of research findings.
                </p>
                <p>
                 ECFF provides services including 
                 conservation planning, practical implmentation of scientifically proven concepts,
                 environmental education and capacity building and climate change mitigation.
                </p>
            </div>

            <div  className="w-full relative sm:w-1/2">
                <img className="h-64 object-cover object-center" src="/images/about/coffee.png" alt="coffee"/>
                <img  className="h-64 object-cover object-center absolute top-[55%]  right-0" src="/images/about/people.png" alt="meeting"/>
            </div>
          </div>

         <div className="relative top-[200px]">
          {/**About us Impact */}
            
            <div className="flex w-[85%]  gap-y-8 sm:flex-row flex-wrap justify-between mx-auto gap-0 sm:gap-8">
              <div className="flex gap-4">
                <Image src='/images/about/hectars.png' width={50} height={50} />
                <div>
                <p className="font-bold">{impactItems[0]?.count?.toLocaleString('en-us')}</p>
                <p>Hectars of farm</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image src='/images/about/technique.png' width={50} height={50} />
                <div>
                <p className="font-bold">{impactItems[1]?.count?.toLocaleString('en-us')}</p>
                <p>Unit of technique</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image src='/images/about/worth.png' width={50} height={50} />
                <div>
                <p className="font-bold">{impactItems[2]?.count?.toLocaleString('en-us')}</p>
                <p>Tons of harvest</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image src='/images/about/harvest.png' width={50} height={50} />
                <div>
                <p className="font-bold">$ {impactItems[3]?.count?.toLocaleString('en-us')}K<sup>+</sup></p>
                <p>Worth exported</p>
                </div>
              </div>
            </div>
            
            {/**Mission and Vission */}
            <div className="mt-16 gap-8 justify-center p-16 py-24 flex items-center flex-col sm:flex-row bg-no-repeat w-full bg-cover" style={{backgroundImage:`url('./images/about/coffe.png')`}}>
            <div className="w-3/4 sm:w-1/3 border-4 mission-vission p-4 text-center text-gray-100">
                <h1 className="text-2xl font-bold">Mission</h1>
                <p>
                To reverse degradation of natural environment, and
                 support societies and government to build 
                a future in which humans live in harmony with nature, 
                by conservation 
                biodiversity, promoting sustainable and equitable use of renewable natural resources.
                </p>
              </div>

              <div className="w-3/4 sm:w-1/3 relative top-12 border-4 mission-vission p-4 sm:p-12 text-center text-gray-100">
                <h1 className="text-2xl font-bold">Vision</h1>
                <p>A healthy and prosperous society that values, 
                    conserves and sustainably uses nature.</p>
              </div>
            </div>

            {/**Hisotry */}
            <div className="mt-8">
               <div className="text-center w-[90%] sm:3/4 mx-auto">
                <h2 className="text-2xl uppercase font-bold mb-2">How It All Began</h2>
                <h1 className="text-3xl font-bold text-red-800 uppercase mb-4">Our Hisotry</h1>
                <p className="w-3/4  mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer at purus pharetra magna tempor egestas non id massa.
                    Donec tristique dui vel mauris ullamcorper finibus. 
                    Curabitur maximus, sapien nec congue pellentesque, purus
                    est iaculis mauris, vel sagittis enim magna at erat.
                </p>
                <div>
                    <div>
                        <div className="flex items-center p-12 w-full">
                            <p className="text-end flex justify-end relative -top-[30px] w-1/2"><span className="bg-zinc-200  right-10 py-2 px-8 relative w-max">2001</span></p>
                            <div className=" w-1/2 border-l flex flex-col items-center history-p  relative border-red-100">
                             <div className="history-img"></div>
                             <img className="w-[85%]  block relative sm:w-1/2" src="/images/about/redcoffee.png" alt="coffee"/>
                            <p className="w-full sm:w-1/2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                               Integer at purus pharetra magna
                             </p>
                            </div>
                        </div>

                        <div className="flex items-center p-12 -mt-28 w-full">
                            <div className=" w-1/2 border-r flex flex-col items-center history-div  relative border-red-100">
                             <div className="history-image"></div>
                             <img className="w-[85%]  block relative sm:w-1/2" src="/images/about/man.png" alt="coffee"/>
                            <p className="w-full sm:w-1/2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                              Integer at purus pharetra magna
                            </p>
                            </div>
                            <p className="text-start  relative -top-[30px] bg-zinc-200 left-10 py-2 px-8 w-max">2005</p>
                        </div>

                        <div className="flex items-center p-12 w-full">
                            <p className="text-end flex justify-end relative -top-[30px] w-1/2">
                              <span className="bg-zinc-200  right-10 py-2 px-8 relative w-max">2012</span>
                            </p>
                            <div className=" w-1/2 border-l flex flex-col items-center history-p  relative border-red-100">
                             <div className="history-img"></div>
                             <img className="w-[85%]  block relative sm:w-1/2" src="/images/about/farming.png" alt="coffee"/>
                            <p className="w-full sm:w-1/2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                               Integer at purus pharetra magna
                            </p>
                            </div>
                        </div>
                        
                        <div className="flex items-center p-12 -mt-28 w-full">
                            <div className=" w-1/2 border-r flex flex-col items-center history-div  relative border-red-100">
                             <div className="history-image"></div>
                             <img className="w-[85%]  block relative sm:w-1/2" src="/images/about/tractor.png" alt="coffee"/>
                            <p className="w-full sm:w-1/2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Integer at purus pharetra magna
                            </p>
                            </div>
                            <p className="text-start  relative -top-[30px] bg-zinc-200 left-10 py-2 px-8 w-max">2014</p>
                        </div>

                     </div>
                   <div>
                  </div>
                </div>
               </div>
            </div>
            <Footer/>
          </div>
      </div>
}


export const getStaticProps = async () =>{
   const respsonse = await fetch('https://fakerapi.it/api/v1/custom?_quantity=4&count=number&title=word');
   const data = await respsonse.json();
   const impactItems = data.data;

   return {
    props :{
      impactItems
    }
   }
}

export default About;