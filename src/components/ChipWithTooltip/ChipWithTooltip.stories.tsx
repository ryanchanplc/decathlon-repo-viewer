import { Meta, Story } from '@storybook/react';
import ChipWithTooltip, { ChipWithTooltipProps } from './ChipWithTooltip';

export default {
  title: 'Common/ChipWithTooltip',
  component: ChipWithTooltip,
  argTypes: {
    tooltip: {
      defaultValue: 'Information',
      description: 'chip tooltip hover',
    },
  },
} as Meta;

const Template: Story<ChipWithTooltipProps> = (args) => (
  <ChipWithTooltip {...args} />
);

export const WithArgsData = Template.bind({});
WithArgsData.args = {
  label: 'Information',
  tooltip: 'Information',
  deleteIcon: <></>,
};
