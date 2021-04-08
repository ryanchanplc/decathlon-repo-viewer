import { Meta, Story } from '@storybook/react';
import SearchBar, { SearchBarProps } from './SearchBar';
import { formDecorator } from '../../utils/decoratorUtil';

export default {
  title: 'Form/Search Bar',
  component: SearchBar,
  decorators: formDecorator,
  argTypes: {
    placeholder: {
      defaultValue: 'Search',
      description: 'search placeholder',
    },
    onSearch: {
      action: 'On Search Clicked',
    },
  },
} as Meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const WithArgsData = Template.bind({});
WithArgsData.args = {
  placeholder: 'Search',
};
