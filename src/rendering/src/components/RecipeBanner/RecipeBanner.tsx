import React from 'react';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
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
