import { Meta, Story } from '@storybook/react';
import { useForm } from 'react-hook-form';
import ControlledSelect, { ControlledSelectProps } from './ControlledSelect';

export default {
  title: 'Form/ControlledSelect',
  component: ControlledSelect,
} as Meta;

const options = [
  { id: 'javascript', label: 'Javascript' },
  { id: 'typescript', label: 'Typescript' },
];

const Template: Story<Omit<ControlledSelectProps, 'control'>> = (args) => {
  const { control } = useForm();
  return <ControlledSelect {...args} control={control} />;
};

export const SingleWithArgsData = Template.bind({});
SingleWithArgsData.args = {
  id: 'language',
  name: 'language',
  label: 'Languages',
  options,
  defaultValue: 'javascript',
};

export const MultipleWithArgsData = Template.bind({});
MultipleWithArgsData.args = {
  id: 'language',
  name: 'language',
  label: 'Languages',
  multiple: true,
  options,
  defaultValue: ['javascript', 'typescript'],
};
