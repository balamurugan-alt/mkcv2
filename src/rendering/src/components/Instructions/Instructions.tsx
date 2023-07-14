import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ComponentProps } from 'lib/component-props';
import { Instructions } from 'src/types/instructions';
import styles from './Instructions.module.scss';
export type InstructionsProps = ComponentProps & {
  fields: {
    items: Instructions[];
  };
};

const InstructionsComponent = (props: InstructionsProps): JSX.Element => {
  console.log(props.fields.items);

  const listData = props.fields.items.map((item, index) => (
    <>
      <li className={` d-flex ${styles.listitem}`}>
        <span className={`me-3 ${styles.number}`}>{index + 1}</span>
        <div className={`ms-2 me-auto ${styles.listitemdata}`}>
          <div className="">
            {item.fields.Heading.value === '' ? '' : <h2>{item.fields.Heading.value}</h2>}
          </div>
          <div
            className={`mb-1 mt-3`}
            dangerouslySetInnerHTML={{ __html: item.fields?.Details?.value }}
          ></div>
        </div>
      </li>
      {/* <hr className="my-4 mr-5" /> */}
    </>
  ));

  return (
    <section className="full-width w-100">
      <div className="">
        <div className="row">
          <div className="col-12">
            <h2>INSTRUCTIONS</h2>
            <ul className="list-group list-group-flush mt-3">{listData}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructionsComponent;
