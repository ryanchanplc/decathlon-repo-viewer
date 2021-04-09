import { Meta, Story } from '@storybook/react';
import CustomizedSnackbars from './CustomizedSnackbars';
import { defaultDecorator } from '../../utils/decoratorUtil';
import { initialState } from '../../context/AppContext';

export default {
  title: 'Common/Customized Snackbars',
  component: CustomizedSnackbars,
  decorators: [
    defaultDecorator({
      ...initialState,
      error: { status: 404, message: 'test', body: 'body' },
    }),
  ],
} as Meta;
const Template: Story = () => <CustomizedSnackbars />;
export const WithFullState = Template.bind({});

export const WithStatusState = Template.bind({});
WithStatusState.decorators = [
  defaultDecorator({
    ...initialState,
    error: { status: 404, message: null, body: null },
  }),
];

export const WithMessageState = Template.bind({});
WithMessageState.decorators = [
  defaultDecorator({
    ...initialState,
    error: { status: null, message: 'test', body: null },
  }),
];

export const WithBodyState = Template.bind({});
WithBodyState.decorators = [
  defaultDecorator({
    ...initialState,
    error: { status: null, message: null, body: 'body' },
  }),
];
