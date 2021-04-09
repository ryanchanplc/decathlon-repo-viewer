import { Meta, Story } from '@storybook/react';
import CheckBoxFields from './CheckBoxFields';
import { formDecorator } from '../../utils/decoratorUtil';

export default {
  title: 'Form/CheckBox Fields',
  component: CheckBoxFields,
  decorators: formDecorator,
} as Meta;
const Template: Story = () => <CheckBoxFields onChecked={() => {}} />;
export const WithState = Template.bind({});
