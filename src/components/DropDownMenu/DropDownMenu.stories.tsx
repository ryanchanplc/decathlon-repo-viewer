import { Meta, Story } from '@storybook/react';
import DropDownMenu, { DropDownMenuProps } from './DropDownMenu';

const options = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
];

export default {
  title: 'Common/DropDownMenu',
  component: DropDownMenu,
} as Meta;

const Template: Story<DropDownMenuProps> = (args) => <DropDownMenu {...args} />;

export const DropDownMenuNormal = Template.bind({});
DropDownMenuNormal.args = {
  id: 'language',
  label: 'Languages',
  options,
};
export const DropDownMenuSingleSelected = Template.bind({});
DropDownMenuSingleSelected.args = {
  id: 'language',
  label: 'Languages',
  options,
  value: 'javascript',
};

export const DropDownMenuMultipleSelected = Template.bind({});
DropDownMenuMultipleSelected.args = {
  id: 'language',
  label: 'Languages',
  multiple: true,
  options,
  value: ['javascript', 'typescript'],
};
