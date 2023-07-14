import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import 'bootstrap/dist/css/bootstrap.css';
import { ComponentProps } from 'lib/component-props';
import { MycomponentField } from 'src/types/mycomponent';

type MycomponentProps = ComponentProps & {
  fields: MycomponentField;
};

const Mycomponent = (props: MycomponentProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;
  return (
    <section className={`section news-detail ${sxaStyles}`}>
      <div className="row">
        <div className="col">
          <Text tag="h2" className="card-title" field={props.fields.Heading} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Text tag="p" className="card-title" field={props.fields.Title} />
        </div>
      </div>
    </section>
  );
};

export const Default = Mycomponent;
