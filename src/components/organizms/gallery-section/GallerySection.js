import React from 'react';
import SectionLayoutGrid from "../../atoms/layout/SectionLayoutGrid";
import {Col} from "../../atoms/styled/layout/layoutComponents";
import {Title} from "../../atoms/styled/typography/typographyComponents";

import Gallery from "../../molecules/gallery/Gallery";

const GallerySection = ({title, images}) => {
    console.log(images)
    return (
        <SectionLayoutGrid>
            <Col span={12}>
                <Title textAlign="center" marginBottom="medium">{title}</Title>
            </Col>
            <Col>
                <Gallery
                    images={images}
                />
            </Col>
        </SectionLayoutGrid>
    );
};
export default GallerySection;