import { Meta, Story } from '@storybook/react';
import Filter, { FilterProps } from './Filter';

export default {
  title: 'Header/Filter/Filter',
  component: Filter,
} as Meta;

const Template: Story<FilterProps> = (args) => <Filter {...args} />;

export const FilterComponent = Template.bind({});
FilterComponent.args = {};
