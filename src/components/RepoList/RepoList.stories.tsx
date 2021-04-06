import { Meta, Story } from '@storybook/react';
import RepoList from './RepoList';
import { RepoCardWithData } from '../RepoCard/RepoCard.stories';

export default {
  title: 'Repo List/Repo List',
  component: RepoList,
} as Meta;

const Template = () => <RepoList />;
export const RepoListWithData = Template.bind({});
