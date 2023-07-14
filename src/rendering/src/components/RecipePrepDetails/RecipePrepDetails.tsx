import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Styles from './recipePrep.module.scss';
import Image from 'src/core/atoms/Image';

export type RecipePrepDetailsProps = ComponentProps & {
  fields: {
    Recipe_Description?: {
      value: string;
    };
    PrepTime?: {
      value: string;
    };
    PrepTimeTitle?: {
      value: string;
    };
    PrepText?: {
      value: string;
    };
    CookTime?: {
      value: string;
    };
    CookText?: {
      value: string;
    };
    Calories?: {
      value: string;
    };
    CaloriesText?: {
      value: string;
    };
    IngredientsCount?: {
      value: string;
    };
    IngredientsText?: {
      value: string;
    };
    ChefTitle?: {
      value: string;
    };
    ChefImage?: {
      value: {
        src: string;
        alt: string;
        width: number;
        height: number;
      };
    };
    ChefNotes?: {
      value: string;
    };
  };
};

const RecipePrep = (props: RecipePrepDetailsProps): JSX.Element => {
  return (
    <div className="container">
      <div className="row">
        <div className={'col-12 p-0 ' + Styles.recipePrep}>
          <div className={Styles.description}>
            <RichText
              tag="div"
              className="news-excerpt rich-text"
              field={props.fields.Recipe_Description}
            />

            {/* <RichText  */}
            <div className={Styles.more}>
              <span className="collapse" id="collapseExample"></span>
              <button
                className={'btn btn-primary ' + Styles.buttn}
                id="change"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Read More
              </button>
            </div>
          </div>
          <div className={Styles.note}>
            <div className={'row ' + Styles.bg}>
              <div className={Styles.column1}>
                <a href="/">
                  <Image field={props.fields.ChefImage} loading="lazy" />
                </a>
              </div>
              <div className={Styles.column2}>
                <p>
                  <strong>{props.fields.ChefTitle.value}</strong>
                </p>
                <p>{props.fields.ChefNotes.value}</p>
              </div>
            </div>
            <h2>{props.fields.PrepTimeTitle.value}</h2>
          </div>
          <div className={Styles.column}>
            <div className={Styles.info}>
              <div className={Styles.text1}>{props.fields.PrepTime.value}</div>
              <div className={Styles.text2}>{props.fields.PrepText.value}</div>
            </div>
            <div className={Styles.info}>
              <div className={Styles.text1}>{props.fields.CookTime.value}</div>
              <div className={Styles.text2}>{props.fields.CookText.value}</div>
            </div>
            <div className={Styles.info}>
              <div className={Styles.text1}>{props.fields.Calories.value}</div>
              <div className={Styles.text2}>{props.fields.CaloriesText.value}</div>
            </div>
            <div className={Styles.info}>
              <div className={Styles.text1}>{props.fields.IngredientsCount.value}</div>
              <div className={Styles.text2}>{props.fields.IngredientsText.value}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePrep;
