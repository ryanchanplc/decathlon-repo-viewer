import { render } from '@testing-library/react';
import RepoDetails, { RepoDetailsProps } from './RepoDetails';
import getTimeDifference from '../../utils/timeUtil';

const renderUI = (props: RepoDetailsProps) =>
  render(<RepoDetails {...props} />);

const testProfileDetails = {
  language: 'javascript',
  license: {
    key: 'test-license',
    name: 'test license',
    url: 'https://github.com/',
  },
  forks_count: 1,
  open_issues_count: 2,
  stargazers_count: 3,
  updated_at: '2020-12-21T10:54:17Z',
};

it('should render details', () => {
  const repoDetails = renderUI(testProfileDetails);

  expect(
    repoDetails.getByText(testProfileDetails.language)
  ).toBeInTheDocument();
  expect(
    repoDetails.getByText(testProfileDetails.license.name)
  ).toBeInTheDocument();
  expect(
    repoDetails.getByText(testProfileDetails.forks_count)
  ).toBeInTheDocument();
  expect(
    repoDetails.getByText(testProfileDetails.open_issues_count)
  ).toBeInTheDocument();
  expect(
    repoDetails.getByText(getTimeDifference(testProfileDetails.updated_at))
  ).toBeInTheDocument();
});

export default testProfileDetails;
