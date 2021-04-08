import { Meta, Story } from '@storybook/react';
import SelectFields from './SelectFields';
import { formDecorator } from '../../utils/decoratorUtil';

export default {
  title: 'Form/Select Fields',
  component: SelectFields,
  decorators: formDecorator,
} as Meta;
const Template: Story = () => <SelectFields onSelected={() => {}} />;
export const WithState = Template.bind({});
