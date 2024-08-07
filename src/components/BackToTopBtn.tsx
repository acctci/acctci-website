import {useEffect} from 'react'
import { Ripple, initTWE } from "tw-elements";

const BackToTopBtn = () => {

 useEffect( () => {
    initTWE({ Ripple });
 } , [] )

 useEffect( () => {
    // Get the button
    const mybutton = document.getElementById("btn-back-to-top") as HTMLButtonElement;
    // When the user scrolls down 20px from the top of the document, show the button
    
    const scrollFunction = () : void => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.classList.remove("hidden");
      } else {
        mybutton.classList.add("hidden");
      }
    };
    const backToTop = () : void =>  {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
    
    window.addEventListener("scroll", scrollFunction);
 } )

  return (
    <div>
        <button
            type="button"
            data-twe-ripple-init
            data-twe-ripple-color="light"
            className="!fixed bottom-5 end-5 hidden rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
            id="btn-back-to-top"
          >
                <span className="[&>svg]:w-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </span>
          </button>
    </div>
  )
}

export default BackToTopBtn