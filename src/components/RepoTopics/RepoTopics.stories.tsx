import { Meta, Story } from '@storybook/react';
import RepoTopics, { RepoTopicsProps } from './RepoTopics';

export default {
  title: 'Repo List/Repo Topics',
  component: RepoTopics,
} as Meta;

const Template: Story<RepoTopicsProps> = (args) => <RepoTopics {...args} />;
export const WithArgsData = Template.bind({});
WithArgsData.args = {
  topics: ['HTML', 'CSS'],
};
