import { Meta, Story } from '@storybook/react';

import PaginationControl from './PaginationControl';
import { initialState } from '../../context/AppContext';
import { defaultDecorator } from '../../utils/decoratorUtil';

export default {
  title: 'Common/PaginationControl',
  component: PaginationControl,
  decorators: [defaultDecorator()],
} as Meta;

const Template: Story = () => <PaginationControl />;

export const withData = Template.bind({});
withData.decorators = [
  defaultDecorator({
    ...initialState,
    repos: { items: [], total_count: 100 },
  }),
];
export const WithoutArgsData = Template.bind({});
WithoutArgsData.decorators = [
  defaultDecorator({
    ...initialState,
    repos: null,
  }),
];
