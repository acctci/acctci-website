import React from 'react'
import { Head } from './components/Head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Contact: React.FC = () => {
  return (
    <section>
       <Head />
       <Navbar />
       <header 
           style={{ backgroundImage: 'url(/images/architecture-1048092_1920.jpg)' }} 
           className='h-[200px] md:h-[300px] w-full bg-cover bg-no-repeat'
        >
          <div className='h-full w-full flex justify-center items-center bg-[rgba(0,0,0,0.7)]'>
               <div className='-mt-5 md:-mt-0'>
                  <h1 className='text-3xl md:text-6xl text-center text-white'>
                     Home | Contact Us
                  </h1>
               </div>
          </div>
       </header>
       <div className='bg-[#F4F8FF] px-3 md:px-0'>
       <section className='pt-5 md:pt-12 md:w-[80%] mx-auto'>
            <h5 className='text-lg font-light text-center mt-2'>
                     For inquiries, partnerships, and further information about the African 
                     Caribbean Chamber of Trade, Commerce, and Industry, please reach out to us.
                      We're here to assist you in fostering trade, promoting collaboration, 
                      and driving economic growth between Africa and the Caribbean.
            </h5>
            <div className='grid py-8 md: pt-5 md:pt-16 md:pb-24 grid-cols-1 md:grid-cols-3 gap-5 md:gap-8'>
                <div className='py-8 px-4 bg-white text-center rounded-xl md:p-12'>
                      <i className="bi bi-geo-alt text-5xl text-blue-950"></i> &nbsp;
                    <h5 className="text-lg capitalize mb-0 text-blue-950 font-normal"> 
                       Contact address head office
                    </h5>
                    <address className="text-blue-950 mt-3 text-sm not-italic font-light text-center">
                    35E north road, Georgetown Guyana
                  </address>
                </div>
                <div className='py-8 px-4 bg-white text-center rounded-xl md:p-12'>
                      <i className="bi bi-geo-alt text-5xl text-blue-950"></i> &nbsp;
                    <h5 className="text-lg capitalize mb-0 text-blue-950 font-normal"> 
                       African Regional office
                    </h5>
                    <address className="text-blue-950 mt-3 text-sm not-italic font-light flex items-center">
                    Nigeria Representative office at Plot 1271, Suite 29 (3rd Floor) 
                    Bataiya Plaza, 5, Rahama Close, 
                    off Dunukofia Street, off Ahmadu Bello Way, Area 11, Garki, Abuja
                  </address>
                </div>
                <div className='py-8 px-4 bg-white text-center rounded-xl md:p-12'>
                      <i className="bi bi-telephone text-5xl text-blue-950"></i> &nbsp;
                    <h5 className="text-lg mt-2 mb-3 capitalize mb-0 text-blue-950 font-normal"> 
                       Contact Number
                    </h5>
                    <h3 className='mt-1 text-sm mb-3'> Get In Touch Directly With Us For Any Inquiries</h3>
                    <a href="tel:+5926016392" className="text-sm text-blue-950 pt-8"> 
                        &nbsp; +592-601-6392
                     </a>
                </div>
            </div>
       </section>
       </div>
       {/*<div className="md:pl-12 md:w-[70%] mt-4 md:mt-0">
                <h5 className="text-lg capitalize mb-0 text-gray-200 font-normal"> 
                   Contact address head office:
                 </h5>
                  <address className="text-gray-200 text-sm not-italic font-light flex items-center">
                    <i className="bi bi-geo-alt text-lg"></i> &nbsp;
                    35E north road, Georgetown Guyana
                  </address>
                  <div className="flex mt-2">
                     <a href="tel:+5926016392" className="text-sm ml-4 text-white flex items-center"> 
                        <i className="bi bi-telephone text-md"></i>
                        &nbsp; +5926016392
                     </a>
                  </div>
                  <h5 className="text-lg mt-3 mb-0 text-gray-200 font-normal"> 
                    African Regional office:
                 </h5>
                  <address className="text-gray-200 not-italic font-light text-sm flex items-center">
                    <i className="bi bi-geo-alt text-lg"></i> &nbsp;
                    Nigeria Representative office at Plot 1271, Suite 29 (3rd Floor) 
                    Bataiya Plaza, 5, Rahama Close, 
                    off Dunukofia Street, off Ahmadu Bello Way, Area 11, Garki, Abuja
                  </address>
               </div>
            </div>*/}
        <Footer />
    </section>
  )
}

export default Contact