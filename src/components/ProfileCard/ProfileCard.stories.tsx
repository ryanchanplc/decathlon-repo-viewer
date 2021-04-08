import { Meta, Story } from '@storybook/react';
import ProfileCard from './ProfileCard';
import { defaultDecorator, mockProfile } from '../../utils/decoratorUtil';

export default {
  title: 'Profile Card/Profile Card',
  component: ProfileCard,
  decorators: [defaultDecorator(undefined, mockProfile())],
} as Meta;

const Template: Story = (args) => <ProfileCard {...args} />;

export const WithMockData = Template.bind({});
WithMockData.args = {};
