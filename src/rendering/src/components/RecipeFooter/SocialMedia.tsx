import { ComponentProps } from 'lib/component-props';
import Styles from './SocialMedia.module.scss';
import Image from 'src/core/atoms/Image';

type Item = {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    IconTitle?: {
      value: string;
    };
    SpanClass?: {
      value: string;
    };
    Link?: {
      value: {
        href: string;
      };
    };
    Icon?: {
      value: {
        src: string;
        alt: string;
      };
    };
  };

  items?: Item[];
};

export type SocialIconsProps = ComponentProps & {
  fields: {
    items: Item[];
  };
};

const SocialIcon = (props: SocialIconsProps): JSX.Element => {
  const icon = props.fields.items.map((item: Item) => ({
    title: item.fields.IconTitle.value,
    src: item.fields.Icon,
    alt: item.fields.Icon.value.alt,
    href: item.fields.Link.value.href,
  }));
  return (
    <>
      <div className={Styles.socialLinks}>
        <h3>Social Media</h3>
        <ul>
          {icon?.map((SocialIcon, Index) => (
            <li key={Index}>
              <a href={SocialIcon.href}>
                <div className={Styles.mediaIcon}>
                  <Image field={SocialIcon.src} />
                </div>
                <div className={Styles.title}>{SocialIcon.title}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialIcon;
