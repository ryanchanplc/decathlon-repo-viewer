import { Meta, Story } from '@storybook/react';
import RepoCard, { RepoCardProps } from './RepoCard';
import { RepoTopicsWithData } from '../RepoTopics/RepoTopics.stories';
import { RepoDetailsWithData } from '../RepoDetails/RepoDetails.stories';

export default {
  title: 'Repo List/Repo Card',
  component: RepoCard,
} as Meta;

const Template: Story<RepoCardProps> = (args) => <RepoCard {...args} />;
export const RepoCardWithData = Template.bind({});
RepoCardWithData.args = {
  name: 'Testing',
  description: 'this is description',
  ...RepoTopicsWithData.args,
  ...RepoDetailsWithData.args,
};
