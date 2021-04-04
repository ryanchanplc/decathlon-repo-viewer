import React from 'react';
import { Container, Box } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Header from '../../components/Header/Header';
import RepoList from '../../components/RepoList/RepoList';
import repos from '../../components/RepoCard/repo.json';
import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import Result from '../../components/Result/Result';

const demoData = {
  login: 'Decathlon',
  id: 33066690,
  node_id: 'MDEyOk9yZ2FuaXphdGlvbjMzMDY2Njkw',
  url: 'https://api.github.com/orgs/Decathlon',
  repos_url: 'https://api.github.com/orgs/Decathlon/repos',
  events_url: 'https://api.github.com/orgs/Decathlon/events',
  hooks_url: 'https://api.github.com/orgs/Decathlon/hooks',
  issues_url: 'https://api.github.com/orgs/Decathlon/issues',
  members_url: 'https://api.github.com/orgs/Decathlon/members{/member}',
  public_members_url:
    'https://api.github.com/orgs/Decathlon/public_members{/member}',
  avatar_url: 'https://avatars.githubusercontent.com/u/33066690?v=4',
  description: '',
  name: 'Decathlon',
  company: null,
  blog: 'https://developers.decathlon.com',
  location: 'Decathlon',
  email: 'oss@decathlon.com',
  twitter_username: 'decathlondev',
  is_verified: true,
  has_organization_projects: true,
  has_repository_projects: true,
  public_repos: 20,
  public_gists: 0,
  followers: 0,
  following: 0,
  html_url: 'https://github.com/Decathlon',
  created_at: '2017-10-24T16:32:36Z',
  updated_at: '2020-12-21T10:54:17Z',
  type: 'Organization',
};
const HomePage: React.FC = () => (
  <>
    <Box p={2} borderBottom={1} borderColor={grey[100]}>
      <Container>
        <Header organization={demoData} />
      </Container>
    </Box>

    <Container>
      <Box p={2}>
        <Result
          resultCount={2}
          language="Javascript"
          type="test"
          searchKeywords="test"
          topic="test"
        />
      </Box>
      <Box p={2}>
        {/* <SearchBar placeholder="Search" onSearch={console.log} />
      <Filter onFilter={() => {}} /> */}
        <RepoList repos={repos} />
      </Box>
    </Container>
  </>
);

export default HomePage;
