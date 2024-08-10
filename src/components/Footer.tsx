import { Link } from "react-router-dom"

type classType = {
    className?: string
}

const Footer = ({className}: classType) => {
  return (
    <footer className={`pt-12 md:pt-5 ${className} bg-gray-950`}>
        <div className="md:flex justify-between items-center px-5 md:px-16">
            <div className="md:flex">
              <div className="">
                 <div className="">
                 <img
                  className="mr-3 w-[160px] bg-gray-600 rounded-full object-cover h-[160px]"
                  src="/images/logo.PNG"
                  alt="ACCTCI Logo"
                  loading="lazy" 
                />
                 </div>
              </div>
            </div>
            <div className=" mt-3 md:mt-0">
                 <h5 className="text-lg text-gray-200"> Quick Links </h5>
                 <ul className="pl-2 flex flex-wrap items-center">
                    <li className="mt-1 pr-5 md:pr-8"> 
                      <Link to={'/'} className='text-gray-200 text-sm'>
                        Home
                     </Link> 
                     </li>
                     <li className="mt-1 pr-5 md:pr-8"> 
                      <Link to={'/about'} className='text-gray-200 text-sm'>
                        About Us
                     </Link> 
                     </li>
                     <li className="mt-1 pr-5 md:pr-8"> 
                      <Link to={'/members'} className='text-gray-200 text-sm'>
                         Board Of Directors
                     </Link> 
                     </li>
                     <li className="mt-1 pr-5 md:pr-8"> 
                      <Link to={'/contact'} className='text-gray-200 text-sm'>
                        Contact Us
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