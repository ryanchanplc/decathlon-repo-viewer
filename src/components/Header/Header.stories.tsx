import { Meta, Story } from '@storybook/react';
import Header, { HeaderProps } from './Header';
import { ProfileCardWithData } from '../ProfileCard/ProfileCard.stories';

export default {
  title: 'Header/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const HeaderComponent = Template.bind({});
HeaderComponent.args = { organization: { ...ProfileCardWithData.args } };
