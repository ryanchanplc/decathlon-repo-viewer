import { render } from '@testing-library/react';
import RepoDetails, { RepoDetailsProps } from './RepoDetails';

const renderUI = (props: RepoDetailsProps) =>
  render(<RepoDetails {...props} />);

const language = 'javascript';
const license = {
  key: 'test-license',
  name: 'test license',
  url: 'https://github.com/',
};
const forksCount = 1;
const issuesCount = 2;
const starCount = 3;
const updatedAt = '123';
it('should render details', () => {
  const repoDetails = renderUI({
    language,
    license,
    forks_count: forksCount,
    open_issues_count: issuesCount,
    stargazers_count: starCount,
    updated_at: updatedAt,
  });

  expect(repoDetails.getByText(language)).toBeInTheDocument();
  expect(repoDetails.getByText(license.name)).toBeInTheDocument();
  expect(repoDetails.getByText(forksCount)).toBeInTheDocument();
  expect(repoDetails.getByText(issuesCount)).toBeInTheDocument();
  expect(repoDetails.getByText(starCount)).toBeInTheDocument();
});
