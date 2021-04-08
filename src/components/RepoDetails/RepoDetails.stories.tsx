import { Meta, Story } from '@storybook/react';
import RepoDetails, { RepoDetailsProps } from './RepoDetails';

export default {
  title: 'Repo List/Repo Details',
  component: RepoDetails,
} as Meta;

const Template: Story<RepoDetailsProps> = (args) => <RepoDetails {...args} />;
export const RepoDetailsWithData = Template.bind({});
RepoDetailsWithData.args = {
  language: 'Javascript',
  license: { name: 'Other', url: null, key: '' },
  forks_count: 1,
  open_issues_count: 2,
  stargazers_count: 3,
};
