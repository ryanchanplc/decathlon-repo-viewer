import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Result, { ResultProps } from './Result';

export default {
  title: 'Result/Result',
  component: Result,
} as Meta;

const Template: Story<ResultProps> = (args) => <Result {...args} />;

export const ResultAll = Template.bind({});
ResultAll.args = {
  resultCount: 1,
  type: 'source',
  language: 'Typescript',
  topic: 'css',
  searchKeywords: 'test',
};

export const ResultTypeOnly = Template.bind({});
ResultTypeOnly.args = {
  resultCount: 0,
  type: 'source',
};

export const ResultLanguageOnly = Template.bind({});
ResultLanguageOnly.args = {
  resultCount: 0,
  language: 'Typescript',
};

export const ResultTopicOnly = Template.bind({});
ResultTopicOnly.args = {
  resultCount: 0,
  topic: 'css',
};

export const ResultSearchOnly = Template.bind({});
ResultSearchOnly.args = {
  resultCount: 0,
  searchKeyword: 'test',
};
