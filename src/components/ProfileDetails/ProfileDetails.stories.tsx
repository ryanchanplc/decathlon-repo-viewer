import { Meta, Story } from '@storybook/react';
import ProfileDetails, { ProfileDetailsProps } from './ProfileDetails';

export default {
  title: 'Header/Profile Card/Profile Details',
  component: ProfileDetails,
} as Meta;

const Template: Story<ProfileDetailsProps> = (args) => (
  <ProfileDetails {...args} />
);

export const ProfileDetailsWithData = Template.bind({});
ProfileDetailsWithData.args = {
  name: 'Decathlon',
  description: '',
  location: 'Decathlon',
  email: 'oss@decathlon.com',
  twitter_username: 'decathlondev',
  blog: 'https://developers.decathlon.com',
  isLoading: false,
};
