import { Meta, Story } from '@storybook/react';
import Form from './Form';
import { formDecorator } from '../../utils/decoratorUtil';

export default {
  title: 'Form/Form',
  component: Form,
  decorators: formDecorator,
} as Meta;
const Template: Story = () => <Form />;
export const WithState = Template.bind({});
