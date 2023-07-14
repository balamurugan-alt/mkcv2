import { Field, RichTextField } from '@sitecore-jss/sitecore-jss-nextjs';

export type Instructions = {
  name: Field<string>;
  fields: {
    Heading: Field<string>;
    Details: RichTextField;
  };
  url: string;
};
