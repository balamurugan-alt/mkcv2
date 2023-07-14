import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Styles from './RecipeIngredientList.module.scss';

type Item = {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Description?: {
      value: string;
    };
  };

  items?: Item[];
};

export type IngredientListProps = ComponentProps & {
  fields: {
    items: Item[];
  };
};

const IngredientList = (props: IngredientListProps): JSX.Element => {
  console.log({ props });
  return (
    <>
      <div className={'col-md-12 col-lg-6 ' + Styles.recipeList}>
        <h3 className={Styles.mainTitle}>
          Ingredients
          <small>
            <span className="count">6</span>

            <span className="serving-txt">Servings </span>
          </small>
        </h3>
        <ul>
          {props.fields.items.map((item, index) => {
            console.log('li', item);
            return (
              <li key={index}>
                <RichText field={item.fields.Description} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default IngredientList;
