import React from 'react';
import {GalleryWrapper} from "../styled/gallery/galleryComponents";


const Gallery = ({images}) => {
    return (
        <GalleryWrapper>
            {images.map((item, index) => (
                <img src={item.localFile.publicURL} alt={"kep"} key={index} className={ ` ${"image-for-modal"}`} />
            ))}
        </GalleryWrapper>
    );
};

export default Gallery;