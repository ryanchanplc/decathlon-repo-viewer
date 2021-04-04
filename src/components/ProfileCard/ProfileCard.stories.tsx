import { Meta, Story } from '@storybook/react';

import { ProfileDetailsWithData } from '../ProfileDetails/ProfileDetails.stories';
import { ProfileImageWithImage } from '../ProfileImage/ProfileImage.stories';
import ProfileCard, { ProfileCardProps } from './ProfileCard';

export default {
  title: 'Header/Profile Card/Profile Card',
  component: ProfileCard,
} as Meta;

const Template: Story<ProfileCardProps> = (args) => <ProfileCard {...args} />;

export const ProfileCardWithData = Template.bind({});
ProfileCardWithData.args = {
  ...ProfileDetailsWithData.args,
  ...ProfileImageWithImage.args,
};
