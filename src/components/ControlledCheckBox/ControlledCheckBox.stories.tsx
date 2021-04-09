import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import ControlledCheckBox, {
  ControlledCheckBoxProps,
} from './ControlledCheckBox';

export default {
  title: 'Form/ControlledCheckBox',
  component: ControlledCheckBox,
} as Meta;

const Template: Story<Omit<ControlledCheckBoxProps, 'control'>> = (args) => {
  const { control } = useForm();
  return <ControlledCheckBox {...args} control={control} />;
};

export const CheckedWithArgsData = Template.bind({});
CheckedWithArgsData.args = {
  id: 'language',
  name: 'language',
  label: 'Languages',
  defaultValue: true,
};

export const UnCheckedWithArgsData = Template.bind({});
UnCheckedWithArgsData.args = {
  id: 'language',
  name: 'language',
  label: 'Languages',
  defaultValue: false,
};
