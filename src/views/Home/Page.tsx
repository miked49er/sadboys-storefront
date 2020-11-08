import { smallScreen } from '@styles/constants';
import { heroHeight } from './scss/index.scss';

import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

import Media from 'react-media';
import { Carousel, ProductsFeatured } from '../../components';
import { generateCategoryUrl } from '../../core/utils';

import {
    ProductsList_categories,
    ProductsList_shop,
    ProductsList_shop_homepageCollection_backgroundImage,
} from './gqlTypes/ProductsList';

import { structuredData } from '../../core/SEO/Homepage/structuredData';

import noPhotoImg from '../../images/no-photo.svg';

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
    const categoriesExist = () => {
        return categories && categories.edges && categories.edges.length > 0;
    };

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
                                height={matches ? heroHeight : '500px'}
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
            <ProductsFeatured/>
            {categoriesExist() && (
                <div className="home-page__categories">
                    <div className="container">
                        <h3>Shop by category</h3>
                        <div className="home-page__categories__list">
                            {categories.edges.map(({node: category}) => (
                                <div key={category.id}>
                                    <Link
                                        to={generateCategoryUrl(category.id, category.name)}
                                        key={category.id}
                                    >
                                        <div
                                            className={classNames(
                                                'home-page__categories__list__image',
                                                {
                                                    'home-page__categories__list__image--no-photo': !category.backgroundImage,
                                                }
                                            )}
                                            style={{
                                                backgroundImage: `url(${
                                                    category.backgroundImage
                                                        ? category.backgroundImage.url
                                                        : noPhotoImg
                                                })`,
                                            }}
                                        />
                                        <h3>{category.name}</h3>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Page;
