export type imagesType = {
    src: string,
    original: string,
    width: number,
    height: number,
    caption?: string,
    tags?: { value: string, title: string }[]
}

export const images: imagesType [] = [
    { src: '/images/gl1.jpg', original:'/images/gl1.jpg', width: 500,  height: 500 },
    { src: '/images/gl2.jpg', original:'/images/gl2.jpg', width: 500,  height: 500 },
    { src: '/images/gl3.jpg', original:'/images/gl3.jpg', width: 500,  height: 500 },
    { src: '/images/gl4.jpg', original:'/images/gl4.jpg', width: 500,  height: 500 },
    { src: '/images/gl5.jpg', original:'/images/gl4.jpg', width: 500,  height: 500 },
    { src: '/images/gl6.jpg', original:'/images/gl4.jpg', width: 500,  height: 500 },
    { src: '/images/gl7.jpg', original:'/images/gl4.jpg', width: 500,  height: 500 },
    { src: '/images/gl8.jpg', original:'/images/gl4.jpg', width: 500,  height: 500 },
    { src: '/images/gl2.jpg', original:'/images/gl2.jpg', width: 500,  height: 500 },
];