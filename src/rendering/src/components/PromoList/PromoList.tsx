import React from 'react';
import Styles from './PromoList.module.scss';
import { ComponentProps } from 'lib/component-props';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'src/core/atoms/Image';

type Item = {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    CardImage?: {
      value: {
        src: string;
      };
    };
    CardTitle?: {
      value: string;
    };
    CardDescription?: {
      value: string;
    };
    CardButton?: {
      value: {
        href: string;
        text: string;
      };
    };
  };

  items?: Item[];
};

export type PromoListProps = ComponentProps & {
  fields: {
    items: Item[];
  };
};

const Promocard = (props: PromoListProps): JSX.Element => {
  const card = props.fields.items
    .filter((item) => item.name.startsWith('PromoCard'))
    .map((item) => ({
      src: item.fields.CardImage,
      title: item.fields.CardTitle.value,
      info: item.fields.CardDescription.value,
      href: item.fields.CardButton.value.href,
      btnText: item.fields.CardButton.value.text,
    }));
  console.log(Promocard);
  return (
    <>
      <div className="container">
        <div className="row">
          {card?.map((Promocard, index) => (
            <div className={'col-lg-6 ' + Styles.promoCard} key={index}>
              <div className={Styles.cardContent}>
                <Image field={Promocard.src} loading="lazy" />
                <div className={Styles.content}>
                  <h3>{Promocard.title}</h3>
                  <p>{Promocard.info}</p>
                  <div className={Styles.btnLib}>
                    <a className="btn-primary btn " href={Promocard.href}>
                      {Promocard.btnText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Promocard;
