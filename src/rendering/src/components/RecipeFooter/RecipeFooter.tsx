import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Link from 'next/link';

export type RecipeFooterProps = ComponentProps & {
  fields: {
    data: {
      item: {
        footerLogo: {
          jsonValue: ImageField;
          alt: string;
        };
      };
      links: {
        children: {
          results: [
            {
              displayName: string;
              children: {
                results: [
                  {
                    displayName: string;
                    icon: {
                      value: IconProp;
                    };
                    title: {
                      value: string;
                    };
                    field: {
                      jsonValue: {
                        value: {
                          anchor: string;
                          href: string;
                          linktype: string;
                          target: string;
                          text: string;
                          url: string;
                        };
                      };
                    };
                  }
                ];
              };
            }
          ];
        };
      };
    };
  };
};

/*
const socialIcons = {
  facebook: faFacebookF,
  youtube: faYoutube,
  twitter: faTwitter,
  instagram: faInstagram,
  linkedin: faLinkedin,
};
*/

const Footer = (props: RecipeFooterProps): JSX.Element => {
  // const newDate = new Date();
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <div className={`footer container ${sxaStyles}`}>
      <footer className="footer-content">
        {props.fields?.data?.links?.children?.results?.map((item, index) => (
          <ul key={index} className="footer-content-col">
            <li>{item.displayName}</li>
            {item.children.results.map((footerLink, footerLinkIndex) => (
              <li key={footerLinkIndex}>
                <Link href={footerLink.field?.jsonValue?.value?.href ?? '#'}>
                  {footerLink.title.value ? footerLink.title.value : footerLink.displayName}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </footer>
    </div>
  );
};

export const Default = Footer;
