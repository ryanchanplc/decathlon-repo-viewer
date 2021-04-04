import { Meta, Story } from '@storybook/react';
import RepoList, { RepoListProps } from './RepoList';
import { RepoCardWithData } from '../RepoCard/RepoCard.stories';

export default {
  title: 'Repo List/Repo List',
  component: RepoList,
} as Meta;

const Template: Story<RepoListProps> = (args) => <RepoList {...args} />;
export const RepoListWithData = Template.bind({});
RepoListWithData.args = {
  repos: [
    {
      id: 1,
      ...RepoCardWithData.args,
    },
    { id: 2, ...RepoCardWithData.args },
  ],
};
