import { Meta, Story } from '@storybook/react';
import ControlledSelect, { ControlledSelectProps } from './ControlledSelect';

export default {
  title: 'Common/ControlledSelect',
  component: ControlledSelect,
} as Meta;

const Template: Story<ControlledSelectProps> = (args) => (
  <ControlledSelect {...args} />
);

export const DropDownMenuNormal = Template.bind({});
// DropDownMenuNormal.args = {
//   id: 'language',
//   label: 'Languages',
//   options,
// };
// export const DropDownMenuSingleSelected = Template.bind({});
// DropDownMenuSingleSelected.args = {
//   id: 'language',
//   label: 'Languages',
//   options,
//   value: 'javascript',
// };

// export const DropDownMenuMultipleSelected = Template.bind({});
// DropDownMenuMultipleSelected.args = {
//   id: 'language',
//   label: 'Languages',
//   multiple: true,
//   options,
//   value: ['javascript', 'typescript'],
// };
