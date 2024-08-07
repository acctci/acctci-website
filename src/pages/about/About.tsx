import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { whatWeDoLists } from './what-we-do'
import { Head } from './components/Head'

const About = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <header 
           style={{ backgroundImage: 'url(/images/architecture-1048092_1920.jpg)' }} 
           className='h-[200px] md:h-[300px] w-full bg-cover bg-no-repeat'
        >
          <div className='h-full w-full flex justify-center items-center bg-[rgba(0,0,0,0.7)]'>
               <div className='-mt-12 md:-mt-0'>
                  <h1 className='text-3xl md:text-6xl text-center text-white'>
                     Home | About Us
                  </h1>
               </div>
          </div>
       </header>
         <section className='bg-white p-5 md:px-8 shadow-lg rounded mx-auto w-[90%] -mt-16'>
             <h1 className='text-center text-blue-950 text-2xl'>
                 Who We Are 
             </h1>
             <p className='text-md font-light mt-5 text-justify'>
                 The African Caribbean Chamber of Trade Commerce and Industry is the
                  umbrella organization for various affiliate member Chamber of
                   Commerce Trade and Industries within Africa and Caribbean.
                    The chambers champions the course in several sectors such as
                     Education, Tourism, Agriculture, Construction, Financial,
                      Energy, Healthcare, Transportation and Business Services
                       through its advocacy role and influence/lobby public policies 
                       that promote free enterprise on behalf of our member partners 
                       and associate.
             </p>
             <p className='text-md font-light mt-5 text-justify'>
                The African Caribbean Chamber of Trade Commerce and Industry is also
                recognizing the pivotal role of the African Union as the primary organization 
                for Africa, the African Caribbean Chamber of Trade, Commerce, and Industry
                 seeks to collaborate in numerous areas to advance and promote trade. 
                 Currently, the trade volume between Africa and the Caribbean stands at 512
                  million USD. We firmly believe that by involving the private sector 
                  directly and working in tandem with policymakers such as the African Union,
                   we can elevate this figure to over 1.2 billion USD within the next three years. 
                   Achieving this goal necessitates active engagement with private sector members
                    across Africa and the Caribbean. To facilitate this, the African Caribbean 
                    Chamber of Trade, Commerce, and Industry is organizing the inaugural African
                     Caribbean Chamber Trade Summit, scheduled for November 2022 in Abuja, Nigeria.
                      We extend an invitation to the African Union's Office of Trade to join us,
                       bringing its expertise and technical resources to support this initiative.
             </p>
         </section>
         <section className='mt-3 md:mt-16 px-2 md:px-16'>
             <div className='md:px-3'>
                <div className='w-full md:w-[560px] mx-auto'>
                 <img src="/images/whowhatwhy_hiec-02.png" className='h-[300px] w-[560px]' alt="what we do" />
             </div>
                <ul className="text-surface mt-5 grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-0">
                 { whatWeDoLists.map( (list) => {
                    return(
                        <li key={list.id} className="w-full border-t border-t-2 border-gray-400 shadow-lg p-3 rounded-lg py-8">
                         <span className='flex font-light text-white -mt-[50px] rounded-full justify-center items-center mx-auto bg-gray-400 h-[30px] w-[30px]'>
                             {list.id}
                         </span>
                         <p className='pt-5 font-light text-center'> {list.title} </p>
                       </li>
                    )
                 })}
               </ul>
            </div>
         </section>
        <Footer className='mt-12' />
    </div>
  )
}

export default About