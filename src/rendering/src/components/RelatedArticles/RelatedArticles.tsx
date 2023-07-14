import { Field, ImageField, LinkField, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';
import { useState } from 'react';
import styles from './RelatedArticles.module.scss';
import Image from 'src/core/atoms/Image';

type RelatedArticlesProps = ComponentProps & {
  fields: {
    items: {
      fields: {
        Title: Field<string>;
        Details: Field<string>;
        Link: LinkField;
        Image: ImageField;
      };
    }[];
  };
};

const RelatedArticles = (props: RelatedArticlesProps): JSX.Element => {
  const [startIndex, setStartIndex] = useState(0);
  const handleNext = () => {
    setStartIndex((startIndex + 1) % props.fields.items.length);
  };
  const handlePrevious = () => {
    setStartIndex((startIndex - 1 + props.fields.items.length) % props.fields.items.length);
  };

  return (
    <section className="full-width w-100">
      <div id="news-slider" className={`carousel slide ${styles.carousel}`} data-ride="carousel">
        {/* carousel items */}
        <div className={`carousel-inner ${styles.carouselInner}`}>
          <div className="">
            <div className="RelatedRecipese_Title">
              <h2>Related Articles & Videos</h2>
            </div>
            <div className={`RelatedRecipese_cardContainer  d-flex ${styles.cardContainer}`}>
              {props.fields.items.slice(startIndex, startIndex + 3).map((item, index) => (
                <div
                  key={index}
                  className={`item card ${styles.card} rounded-0 ${
                    index === startIndex ? 'active' : ''
                  }`}
                >
                  <span className="d-none">
                    {
                      (item.fields.Image.value.src =
                        '/-' + item.fields.Image.value.src.split('/-').pop())
                    }
                  </span>
                  <Image
                    field={item.fields.Image}
                    className="card-img-top rounded-0"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <Link
                      className={`card-title text-decoration-none ${styles.title}`}
                      href={item.fields.Link.value}
                    >
                      {item.fields.Title.value}
                    </Link>
                    <Text
                      className=" card-text speaker-name mt-2"
                      tag="p"
                      field={item.fields.Details}
                    />
                  </div>
                  <div className={`d-flex justify-content-end ${styles.surround} mt-2 `}>
                    <i className="bi bi-heart"></i>
                    <i className="bi bi-share"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* carousel controls */}
        <button
          className={`carousel-control-prev ${styles.prev}`}
          type="button"
          onClick={handlePrevious}
          disabled={startIndex === 0}
        >
          <span
            className={`carousel-control-prev-icon ${styles.prev}`}
            aria-hidden="true"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>\")",
            }}
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className={`carousel-control-next ${styles.next}`}
          type="button"
          onClick={handleNext}
          disabled={startIndex + 3 >= props.fields.items.length}
        >
          <span
            className={`carousel-control-next-icon ${styles.next}`}
            aria-hidden="true"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>\")",
            }}
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </section>
  );
};

export default RelatedArticles;
