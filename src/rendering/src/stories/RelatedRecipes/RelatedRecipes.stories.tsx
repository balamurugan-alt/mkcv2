import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RelatedRecipes from '../../components/RelatedRecipes/RelatedRecipes';

export default {
  title: 'Components/RelatedRecipes/RelatedRecipes',
  component: RelatedRecipes,
} as ComponentMeta<typeof RelatedRecipes>;

const Template: ComponentStory<typeof RelatedRecipes> = (args) => <RelatedRecipes {...args} />;

export const Default = Template.bind({});
Default.args = {
  params: {
    name: 'RelatedRecipes',
  },
  rendering: {
    componentName: 'RelatedRecipes',
    dataSource: '/sitecore',
  },
};
