import { Link as JssLink, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Styles from './RecipeButton.module.scss';

type RecipeButtonProps = ComponentProps & {
  fields: {
    ButtonText: Text;
    ButtonLink: LinkField;
    ButtonColor: Text;
  };
};
const recipeButton = (props: RecipeButtonProps): JSX.Element => {
  return (
    <div className={Styles.owBtn}>
      <JssLink field={props.fields.ButtonLink} />
    </div>
  );
};

export const Default = recipeButton;
