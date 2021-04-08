import { Meta, Story } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'Common/LoadingSpinner',
  component: LoadingSpinner,
} as Meta;

const Template: Story = (args) => <LoadingSpinner {...args} />;

export const Normal = Template.bind({});
