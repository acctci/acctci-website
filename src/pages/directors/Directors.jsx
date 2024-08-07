import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Directors from './components/Directors'
import { Head } from './components/Head'

const Directors_ = () => {
  return (
    <div>
      <Head />
       <Navbar />
       <header 
           style={{ backgroundImage: 'url(/images/architecture-1048092_1920.jpg)' }} 
           className='h-[200px] md:h-[300px] w-full bg-cover bg-no-repeat'
        >
          <div className='h-full w-full flex justify-center items-center bg-[rgba(0,0,0,0.7)]'>
               <div>
                  <h1 className='text-3xl md:text-6xl -mt-10 font-light text-center text-white'>
                     Home | Directors
                  </h1>
               </div>
          </div>
       </header>
       <section className='bg-white p-5 md:px-8 shadow-lg rounded mx-auto w-[96%] -mt-16'>
          <Directors />
       </section>
       <Footer className='mt-16' />
    </div>
  )
}

export default Directors_