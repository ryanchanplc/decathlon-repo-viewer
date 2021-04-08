import { Meta, Story } from '@storybook/react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import IconText, { IconTextProps } from './IconText';

export default {
  title: 'Common/IconText',
  component: IconText,
} as Meta;

const Template: Story<IconTextProps> = (args) => <IconText {...args} />;
export const WithoutArgsData = Template.bind({});
WithoutArgsData.args = {
  icon: <ErrorOutlineIcon />,
};

export const WithArgsText = Template.bind({});
WithArgsText.args = {
  text: 'Error',
  icon: <ErrorOutlineIcon />,
};

export const WithArgsTextLink = Template.bind({});
WithArgsTextLink.args = {
  text: 'Error',
  icon: <ErrorOutlineIcon />,
  url: 'http://www.google.com.hk',
};
