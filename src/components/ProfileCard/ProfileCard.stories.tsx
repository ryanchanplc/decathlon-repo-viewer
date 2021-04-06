import { Meta, Story } from '@storybook/react';
import ProfileCard from './ProfileCard';

export default {
  title: 'Header/Profile Card/Profile Card',
  component: ProfileCard,
} as Meta;

const Template: Story = (args) => <ProfileCard {...args} />;

export const ProfileCardWithData = Template.bind({});
ProfileCardWithData.args = {};
