import {
  ImageField,
  Image as SitecoreImage,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import NextImage from 'next/image';

type ImageItem = {
  src: string;
  height: number;
  width: number;
  alt: string;
};

type ImageType = ImageField & {
  value?: ImageItem;
};

type ImageProps = {
  field: ImageField;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
};

const Image = ({ field, className, priority, loading }: ImageProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const isEditing = sitecoreContext && sitecoreContext.pageEditing;

  const { value = {} } = field || ({} as ImageType);
  const { src, alt = '', width = 0, height = 0 } = value as ImageItem;

  if (isEditing) {
    return <SitecoreImage field={field} className={className} />;
  }

  if (src) {
    return (
      <NextImage
        src={'/-' + src.split('/-').pop()}
        alt={alt}
        width={width || 60}
        height={height || 60}
        className={className}
        priority={priority}
        loading={loading}
      />
    );
  }

  return <></>;
};

export default Image;
