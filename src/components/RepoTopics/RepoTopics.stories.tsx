import { Meta, Story } from '@storybook/react';
import RepoTopics, { RepoTopicsProps } from './RepoTopics';

export default {
  title: 'Repo List/Repo Topics',
  component: RepoTopics,
} as Meta;

const Template: Story<RepoTopicsProps> = (args) => <RepoTopics {...args} />;
export const RepoTopicsWithData = Template.bind({});
RepoTopicsWithData.args = {
  topics: ['HTML', 'CSS'],
};
