import { Meta, Story } from '@storybook/react';
import ProfileDetails, { ProfileDetailsProps } from './ProfileDetails';

export default {
  title: 'Profile Card/Profile Details',
  component: ProfileDetails,
} as Meta;

const Template: Story<ProfileDetailsProps> = (args) => (
  <ProfileDetails {...args} />
);

export const WithArgsData = Template.bind({});
WithArgsData.args = {
  name: 'Decathlon',
  description: '',
  location: 'Decathlon',
  email: 'oss@decathlon.com',
  twitter_username: 'decathlondev',
  blog: 'https://developers.decathlon.com',
  isLoading: false,
};

export const WithoutArgsData = Template.bind({});
WithoutArgsData.args = {};

export const isLoading = Template.bind({});
isLoading.args = { isLoading: true };
