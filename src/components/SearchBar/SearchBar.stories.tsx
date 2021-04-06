import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar, { SearchBarProps } from './SearchBar';

export default {
  title: 'Header/Search Bar',
  component: SearchBar,
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

export const searchPlaceHolder = Template.bind({});
searchPlaceHolder.args = {
  placeholder: 'Search',
};
