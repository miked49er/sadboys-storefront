import { smallScreen } from '@styles/constants';
import * as React from 'react';
// @ts-ignore
import { carouselHeight, heroHeight } from './scss/index.scss';

import { DropCard, VideoCard } from '@components/organisms';
import Media from 'react-media';
import { Carousel, ProductsFeatured } from '../../components';

import {
    ProductsList_categories,
    ProductsList_shop,
    ProductsList_shop_homepageCollection_backgroundImage,
} from './gqlTypes/ProductsList';

import { structuredData } from '../../core/SEO/Homepage/structuredData';

import image1 from '../../images/carousel-images/image1.jpg';
import image2 from '../../images/carousel-images/image2.jpg';
import image3 from '../../images/carousel-images/image3.jpg';
import image4 from '../../images/carousel-images/image4.jpg';

const Page: React.FC<{
    loading: boolean;
    categories: ProductsList_categories;
    backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
    shop: ProductsList_shop;
}> = ({loading, categories, backgroundImage, shop}) => {
    return (
        <>
            <script className="structured-data-list" type="application/ld+json">
                {structuredData(shop)}
            </script>
            {
                backgroundImage ?
                    <div
                        className="home-page__hero"
                        style={{backgroundImage: `url(${backgroundImage.url})`}}
                    />
                    :
                    <Media query={{maxWidth: smallScreen}}>
                        {matches =>
                            <Carousel
                                slidesToShow={1}
                                slidesToScroll={1}
                                autoplay={true}
                                wrapAround={true}
                                height={matches ? heroHeight : carouselHeight}
                                withoutControls={true}
                            >
                                <img src={image1} alt="Sadboys 1"/>
                                <img src={image2} alt="Sadboys 2"/>
                                <img src={image3} alt="Sadboys 3"/>
                                <img src={image4} alt="Sadboys 4"/>
                            </Carousel>
                        }
                    </Media>
            }
            <div className="content-wrapper">
                <DropCard/>
                <VideoCard url="https://www.youtube.com/embed/tcgJjCVIF1k"/>
            </div>
            <ProductsFeatured/>

        </>
    );
};

export default Page;
