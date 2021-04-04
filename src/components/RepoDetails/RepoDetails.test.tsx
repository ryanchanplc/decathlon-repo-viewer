import { render } from '@testing-library/react';
import RepoDetails, { RepoDetailsProps } from './RepoDetails';

const renderUI = (props: RepoDetailsProps) =>
  render(<RepoDetails {...props} />);

const language = 'javascript';
const license = { name: 'test license', url: 'https://github.com/' };
const forksCount = 1;
const issuesCount = 2;
const starCount = 3;

it('should render details', () => {
  const profileDetails = renderUI({
    language,
    license,
    forks_count: forksCount,
    open_issues_count: issuesCount,
    stargazers_count: starCount,
  });

  expect(profileDetails.getByText(language)).toBeInTheDocument();
  expect(profileDetails.getByText(license.name)).toBeInTheDocument();
  expect(profileDetails.getByText(license.name).parentElement).toHaveAttribute(
    'href',
    license.url
  );
  expect(profileDetails.getByText(forksCount)).toBeInTheDocument();
  expect(profileDetails.getByText(issuesCount)).toBeInTheDocument();
  expect(profileDetails.getByText(starCount)).toBeInTheDocument();
});
