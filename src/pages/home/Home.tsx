import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import Directors from './components/Directors'
import Footer from '../../components/Footer'
import { Head } from './components/Head'

const Home = () => {
  return (
    <section>
      <Head />
       <Navbar />
       <header 
           style={{ backgroundImage: 'url(/images/pexels-pixabay-290275.jpg)' }} 
           className='h-[650px] md:h-[550px] w-full bg-cover bg-no-repeat'
        >
          <div className='h-full w-full flex items-center bg-[rgba(0,0,0,0.7)]'>
               <div>
                  <h1 className='text-3xl md:text-6xl text-center text-white'>
                    WE ARE MORE THAN BUSINESS
                  </h1>
                  <p style={{lineHeight: 1.9, letterSpacing:1}} className='text-md md:text-lg mt-3 font-light  text-white md:w-[60%] text-center mx-auto'>
                    The African Caribbean Chamber of Trade Commerce and 
                    Industry is the umbrella organization for various affiliate member Chamber 
                    of Commerce Trade and Industries within 
                    Africa and Caribbean. The chambers champions the course in several sectors
                    such as Education, Tourism, Agriculture, Construction, Financial, Energy, 
                    Healthcare, Transportation and Business Services.
                  </p>
                  <div className='flex justify-center mt-5'>
                    <Link to={'/about'} className='py-2 px-20 hover:bg-white hover:text-gray-950 border border-2 border-white rounded-full text-white text-sm'>
                      Learn More <i className='bi ml-2 bi-arrow-right' />
                    </Link>
                  </div>
               </div>
          </div>
       </header>
       <section className='mt-12 p-5 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
          <div className='shadow-xl p-8 rounded-3xl'>
              <h4 className='text-xl text-blue-950'> Our Mission </h4>
              <p className='mt-4 text-md text-justify font-light'>
                 The mission of the African Caribbean Chamber of Trade, Commerce, and Industry 
                 (ACCTCI) is to promote and facilitate trade, investment, and 
                 economic development between Africa and the Caribbean. Through
                  advocacy, strategic partnerships, and sectoral engagement,
                   we aim to create a conducive environment for free enterprise, 
                   drive growth in key industries, and enhance the prosperity of 
                   our member partners and associates.
              </p>
          </div>
          <div className='shadow-xl p-8 bg-blue-500 rounded-3xl mt-12'>
              <h4 className='text-xl text-white'>Our Vision </h4>
              <p className='mt-4 text-md text-justify text-white font-light'>
                 Our vision is to be the leading catalyst for economic integration
                  and growth between Africa and the Caribbean. We aspire to achieve
                   a thriving, interconnected economic landscape where businesses 
                   flourish, trade volumes soar, and sustainable development is 
                   realized through collaborative efforts and innovative solutions.
                    By 2027, we aim to see the trade volume between Africa and the 
                    Caribbean exceed 1.2 billion USD, driven by private sector 
                    engagement and robust policy support.
              </p>
          </div>
       </section>
       <section className='mt-12 p-5 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
                <h2 className='text-4xl font-semibold text-gray-900'> Who We Are? </h2>
                <h4 className='capitalize text-blue-950 font-medium text-lg mt-3'>
                  We Are The  umbrella organization for various affiliate member Chamber 
                  of Commerce Trade and Industries within Africa and Caribbean.
                </h4>
                <p style={{ lineHeight: 1.7 }} className='text-md mt-3 font-light text-blue-950'>
                  The African Caribbean Chamber of Trade Commerce and Industry 
                  reorganizing the role of the African Union as the umbrella organization 
                  for Africa wishes to partner in several areas in the advancement of the 
                  promotion of trade. At present the trade volume with Africa and the
                  Caribbean stands at 512 million(usd) and it is our belief that with 
                  direct private sector involvement driving the process working in
                  collaboration with policy maker such as the African union we can 
                  have the figure over 1.2 billion over the period of three years.
              </p>
              <button className='bg-blue-600 text-white py-2 px-12 rounded-full mt-3'>
                  Learn More <i className='bi bi-arrow-right ml-2'></i>
              </button>
            </div>
             <div className=' md:p-8'>
               <img
                  src="/images/about.jfif" alt="about us" 
                  className='h-full w-full object-cover rounded-2xl' 
                />
             </div>
       </section>
       <section className='px-5 md:px-28 bg-[#F4F8FF] py-8 mt-16'>
             <h5 className='text-center text-blue-950 font-semibold text-3xl mb-3'> 
                 Meet Our Directors 
              </h5>
               <p style={{lineHeight: 1.5}} className='mb-8 text-lg font-light text-center text-blue-950'>
                Meet our directors who bring a wealth of experience and expertise to the team. 
                Each director is dedicated to driving our mission and vision forward, ensuring
                that we continue to deliver 
                value and maintain our commitment to excellence. 
               </p>
              <Directors />
              <div className='mt-8 flex justify-center'>
                  <Link to={'/members'} className='bg-blue-600 text-white py-3 px-8 md:px-44 rounded-full mt-3'>
                      View All Directors <i className='bi bi-arrow-right ml-2'></i>
                  </Link>
              </div>
       </section>
       <section className='md:flex justify-center mb-12 items-center mt-16 px-5 md:px-24'>
            <div className='w-[90]'>
                 <h2 className='text-3xl text-center text-blue-950'> Our Approach </h2>
                 <p style={{ lineHeight: 1.5 }} className='mt-3 text-md text-center font-light text-gray-700'>
                     The African Caribbean Chamber of Trade, Commerce, and Industry (ACCTCI) is
                      focused on fostering trade and economic development between Africa and 
                      the Caribbean by leveraging the power of advocacy, public policy 
                      influence, and strategic partnerships.
                 </p>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                      <div className='shadow-2xl p-9  rounded-xl text-center'>
                          <i className='text-5xl text-blue-950 mb-2 bi bi-buildings'></i>
                          <h4 className='text-xl mt-3 text-center text-blue-950'>
                            Umbrella Organization
                          </h4>
                          <p  style={{lineHeight:1.5}} className='mt-3 text-sm text-center font-light'>
                             Serving as the central body for various affiliate member
                              Chambers of Commerce, Trade, and Industries within Africa
                              and the Caribbean, ensuring cohesive and unified action.
                          </p>
                      </div>
                      <div className='shadow-2xl p-9  rounded-xl text-center'>
                          <i className='text-5xl text-blue-950 mb-2 bi bi-intersect'></i>
                          <h4 className='text-xl mt-3 text-center text-blue-950'>
                             Multi-Sector Engagement
                          </h4>
                          <p  style={{lineHeight:1.5}} className='mt-3 text-sm text-center font-light'>
                             Championing initiatives across diverse sectors such as Education, Tourism, 
                             Agriculture, Construction, Financial Services, Energy, Healthcare,
                              Transportation, and Business Services to promote comprehensive 
                              economic development. 
                          </p>
                      </div>
                      <div className='shadow-2xl p-9 rounded-xl text-center'>
                          <i className='text-5xl text-blue-950 mb-2 bi bi-cloud-arrow-up'></i>
                          <h4 className='text-xl mt-3 text-center text-blue-950'>
                             Trade Volume Expansion
                          </h4>
                          <p  style={{lineHeight:1.5}} className='mt-3 text-sm text-center font-light'>
                              Aiming to significantly increase trade volume between Africa 
                              and the Caribbean, with a target to raise it from 512 million
                               USD to over 1.2 billion USD within three years.
                          </p>
                      </div>
                  </div>
            </div>
      </section>
      <Footer className='mt-16' />
    </section>
  )
}

export default Home