import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ComponentProps } from 'lib/component-props';
import { useRouter } from 'next/router';

export type BrandHeaderProps = ComponentProps & {
  fields: {
    items: {
      fields: {
        Title: Field<string>;
        Link: {
          value: {
            href: string;
          };
        };
      };
    }[];
  };
};

const BrandHeader = (props: BrandHeaderProps): JSX.Element => {
  const router = useRouter();

  const onMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    event.preventDefault();
    router.push(url);
  };

  return (
    <section className="full-width w-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: '12%' }}>
              {props.fields.items.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    className="nav-link"
                    href={item.fields.Link.value.href}
                    onClick={(event) => onMenuItemClick(event, item.fields.Link.value.href)}
                  >
                    {item.fields.Title.value}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-person" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-cart" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-search" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export const Default = BrandHeader;
