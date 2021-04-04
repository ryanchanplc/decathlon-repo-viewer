import { Meta, Story } from '@storybook/react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import IconText, { IconTextProps } from './IconText';

export default {
  title: 'Common/IconText',
  component: IconText,
} as Meta;

const Template: Story<IconTextProps> = (args) => <IconText {...args} />;
export const IconTextIconOnly = Template.bind({});
IconTextIconOnly.args = {
  icon: <ErrorOutlineIcon />,
};

export const IconTextWithText = Template.bind({});
IconTextWithText.args = {
  text: 'Error',
  icon: <ErrorOutlineIcon />,
};

export const IconTextWithLink = Template.bind({});
IconTextWithLink.args = {
  text: 'Error',
  icon: <ErrorOutlineIcon />,
  url: 'http://www.google.com.hk',
};
