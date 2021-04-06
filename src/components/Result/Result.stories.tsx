import { Meta, Story } from '@storybook/react';
import Result, { ResultProps } from './Result';

export default {
  title: 'Result/Result',
  component: Result,
} as Meta;

const Template: Story<ResultProps> = (args) => <Result {...args} />;

export const ResultAll = Template.bind({});
ResultAll.args = {
  count: 1,
  type: 'source',
  language: 'Typescript',
  topic: 'css',
  keywords: 'test',
};

export const ResultTypeOnly = Template.bind({});
ResultTypeOnly.args = {
  count: 0,
  type: 'source',
};

export const ResultLanguageOnly = Template.bind({});
ResultLanguageOnly.args = {
  count: 0,
  language: 'Typescript',
};

export const ResultTopicOnly = Template.bind({});
ResultTopicOnly.args = {
  count: 0,
  topic: 'css',
};

export const ResultSearchOnly = Template.bind({});
ResultSearchOnly.args = {
  count: 0,
  keywords: 'test',
};
