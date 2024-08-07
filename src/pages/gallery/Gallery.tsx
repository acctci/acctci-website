import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {images, imagesType} from './images'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'react-image-lightbox'
import "react-image-lightbox/style.css";
import { Head } from './components/Head'

const Gallery_ = () => {

    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;
  
    const handleClick = (index: number, item: imagesType) : void => {
      setIndex(index)
      setTimeout( () => {
        const zoomIn = document.querySelector('button.ril__zoomInButton') as HTMLButtonElement
        zoomIn.click()
      },100)
      setTimeout( () => {
         const zoomOut = document.querySelector('button.ril__zoomOutButton') as HTMLButtonElement
          zoomOut.click()
      }, 200 )
    };
    
    const handleClose = () : void => setIndex(-1);
    const handleMovePrev = () : void => setIndex(prevIndex);
    const handleMoveNext = () : void => setIndex(nextIndex);

  return (
    <div>
        <Head />
        <Navbar/>
        <header 
           style={{ backgroundImage: 'url(/images/architecture-1048092_1920.jpg)' }} 
           className='h-[200px] md:h-[300px] w-full bg-cover bg-no-repeat'
        >
          <div className='h-full w-full flex justify-center items-center bg-[rgba(0,0,0,0.7)]'>
               <div>
                  <h1 className='text-3xl md:text-6xl -mt-10 font-light text-center text-white'>
                     Home | Gallery
                  </h1>
               </div>
          </div>
       </header>
       <section className='bg-white p-5 md:px-8 shadow-lg rounded mx-auto w-[90%] -mt-16'>
         <Gallery
            images={images}
            margin={15}
            rowHeight={240}
            onClick={handleClick}
            enableImageSelection={false}
            />
             {!!currentImage && (
            /* @ts-ignore */
            <Lightbox
               mainSrc={currentImage.original}
               mainSrcThumbnail={currentImage.src}
               nextSrc={nextImage.original}
               nextSrcThumbnail={nextImage.src}
               prevSrc={prevImage.original}
               prevSrcThumbnail={prevImage.src}
               onCloseRequest={handleClose}
               onMovePrevRequest={handleMovePrev}
               onMoveNextRequest={handleMoveNext}
            />
            )}
        </section>
        <Footer className='mt-16' />
    </div>
  )
}

export default Gallery_