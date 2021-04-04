import { Meta, Story } from '@storybook/react';
import ProfileImage, { ProfileImageProps } from './ProfileImage';

export default {
  title: 'Header/Profile Card/Profile Image',
  component: ProfileImage,
} as Meta;

const Template: Story<ProfileImageProps> = (args) => <ProfileImage {...args} />;
export const ProfileImageWithImage = Template.bind({});
ProfileImageWithImage.args = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/33066690?v=4',
};
