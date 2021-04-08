import { Meta, Story } from '@storybook/react';
import Header from './Form';
//import { ProfileCardWithData } from '../ProfileCard/ProfileCard.stories';

export default {
  title: 'Header/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const HeaderComponent = Template.bind({});
HeaderComponent.args = {};
