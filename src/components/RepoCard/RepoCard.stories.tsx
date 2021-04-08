import { Meta, Story } from '@storybook/react';
import RepoCard, { RepoCardProps } from './RepoCard';
import { WithArgsData as TopicWithArgsData } from '../RepoTopics/RepoTopics.stories';
import { WithArgsData as DetailsWithArgsData } from '../RepoDetails/RepoDetails.stories';

export default {
  title: 'Repo List/Repo Card',
  component: RepoCard,
} as Meta;

const Template: Story<RepoCardProps> = (args) => <RepoCard {...args} />;
export const WithArgsData = Template.bind({});
WithArgsData.args = {
  name: 'Testing',
  description: 'this is description',
  ...TopicWithArgsData.args,
  ...DetailsWithArgsData.args,
};
export const WithoutArgsData = Template.bind({});
WithoutArgsData.args = {};
