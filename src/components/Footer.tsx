import { Link } from "react-router-dom"

type classType = {
    className?: string
}

const Footer = ({className}: classType) => {
  return (
    <footer className={`pt-12 ${className} bg-gray-950`}>
        <div className="md:flex px-5 md:px-16">
            <div className="md:flex">
              <div>
                 <div className="p-5 bg-white">
                 <img
                  className="mr-3 w-[50px] h-[50px]"
                  src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                  alt="TE Logo"
                  loading="lazy" 
                />
                 </div>
              </div>
               <div className="md:pl-12 md:w-[70%] mt-4 md:mt-0">
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
            </div>
            <div className="md:w-[20%] md:-ml-16 mt-3 md:mt-0">
                 <h5 className="text-lg text-gray-200"> Quick Links </h5>
                 <ul className="pl-2 grid md:block grid-cols-4 gap-4">
                    <li className="mt-1"> 
                      <Link to={'/'} className='text-gray-200 text-sm'>
                        Home
                     </Link> 
                     </li>
                     <li className="mt-1"> 
                      <Link to={'/about'} className='text-gray-200 text-sm'>
                        About Us
                     </Link> 
                     </li>
                     <li className="mt-1"> 
                      <Link to={'/members'} className='text-gray-200 text-sm'>
                         Members
                     </Link> 
                     </li>
                     <li className="mt-1"> 
                      <Link to={'/gallery'} className='text-gray-200 text-sm'>
                        Gallery
                     </Link> 
                     </li>
                 </ul>
            </div>
        </div>
        <p className="bg-black text-xs text-gray-400 text-center font-light py-5 mb-0 mt-5">
           Copyright &copy; African carribean chamber of commerce, trade and industry. All 
           Right Reserved.
        </p>
    </footer>
  )
}

export default Footer