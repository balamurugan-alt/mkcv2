import React from 'react';
import { ImageField, NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Image from 'src/core/atoms/Image';
import Head from 'next/head';

// var  backgroundPosition: "center",
// var  backgroundRepeat: "no-repeat",
// var  backgroundSize: "cover",
// var  position: "relative"

type RecipeBannerProps = ComponentProps & {
  fields: {
    Mobile_Image: ImageField;

    Desktop_Image?: {
      value: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
    };
  };
};

const RecipeBanner = (props: RecipeBannerProps): JSX.Element => {
  return (
    <>
      <Head>
        <style>{`
          .fullBanner{
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative; 
          } 

          .fullBanner img{
            object-fit: cover;
            width: 100%;
          }
        `}</style>
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-12 p-0">
                <div className="fullBanner">
                  <Image field={props.fields.Desktop_Image} priority={true} />
                  <NextImage
                    className="col-sm-6 col-md-4"
                    src="https://www.mccormick.com/-/media/project/oneweb/mccormick-us/frenchs/recipes/g/frenchs-green-bean-casserole-recipe-800x800.jpg"
                    srcSet="https://www.mccormick.com/-/media/project/oneweb/mccormick-us/frenchs/recipes/g/frenchs-green-bean-casserole-recipe-800x800.jpg 800w,
                    https://www.mccormick.com/-/media/project/oneweb/mccormick-us/frenchs/recipes/g/frenchs-green-bean-casserole-recipe.jpg 1200w"
                    sizes="(min-width: 767px) 33vw, (min-width: 568px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Default = RecipeBanner;
