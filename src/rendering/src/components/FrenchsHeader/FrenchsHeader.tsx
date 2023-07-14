import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ComponentProps } from 'lib/component-props';
import { useState } from 'react';
import styles from './FrenchsHeader.module.scss';
import Image from 'src/core/atoms/Image';

type Item = {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    Title?: Field<string>;
    Image?: {
      value: {
        src: string;
      };
    };
    Link?: {
      value: {
        href: string;
      };
    };
  };
  items?: Item[];
};

export type FrenchsHeaderProps = ComponentProps & {
  fields: {
    items: Item[];
  };
};

const FrenchsHeader = (props: FrenchsHeaderProps): JSX.Element => {
  const { fields } = props;
  // const logoSrc =
  //   '/-' +
  //   fields.items
  //     .find((item) => item.name === 'Logo')
  //     ?.fields.Image?.value.src.split('/-')
  //     .pop();
  const links = fields.items
    .filter((item) => item.name.startsWith('Link'))
    .map((item) => ({
      title: item.fields.Title.value,
      href: item.fields.Link.value.href,
    }));

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="full-width w-100">
      <header>
        <nav
          className="navbar navbar-expand-md navbar-light bg-light"
          style={{
            backgroundImage:
              'url("https://www.mccormick.com/-/media/themes/oneweb/mccormickus/frenchs/images/theme-images/bg_header_frenchs.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="container-fluid">
            <a className="navbar-brand ml-5" href="/">
              <Image field={fields.items.find((item) => item.name === 'Logo').fields.Image} />
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="d-flex">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row align-items-center">
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
                </ul>
                <span className="navbar-toggler-icon" />
              </span>
            </button>
            <div className={`collapse ml-5 navbar-collapse${isOpen ? ' show' : ''}`}>
              <ul className="navbar-nav justify-content-start">
                {links?.map((link) => (
                  <li className="nav-item ml-3" key={link.href}>
                    <a className={`nav-link link ${styles.link}`} href={link.href}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export const Default = FrenchsHeader;
