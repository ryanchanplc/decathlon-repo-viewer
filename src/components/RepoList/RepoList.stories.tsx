import { Meta, Story } from '@storybook/react';
import RepoList from './RepoList';

import { defaultDecorator, mockRepos } from '../../utils/decoratorUtil';

export default {
  title: 'Repo List/Repo List',
  component: RepoList,
  decorators: [defaultDecorator(undefined, mockRepos(20))],
} as Meta;

const Template: Story = () => <RepoList />;
export const WithMockData = Template.bind({});

export const WithMockEmptyData = Template.bind({});
WithMockEmptyData.decorators = [defaultDecorator(undefined, mockRepos(0))];
