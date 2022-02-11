import React from 'react';
import {GalleryWrapper} from "../styled/gallery/galleryComponents";


const Gallery = ({image}) => {
    return (
           <GalleryWrapper>
               <img src={image}/>
               <img src={image}/>
               <img src={image}/>
               <img src={image}/>
               <img src={image}/>
               <img src={image}/>
               <img src={image}/>
               <img src={image}/>
               <img src={image}/>
           </GalleryWrapper>
    );
};

export default Gallery;