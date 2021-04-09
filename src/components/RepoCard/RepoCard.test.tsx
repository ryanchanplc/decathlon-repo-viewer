import { render } from '@testing-library/react';
import RepoCard, { RepoCardProps } from './RepoCard';
import testProfileDetails from '../RepoDetails/RepoDetails.test';
import getTimeDifference from '../../utils/timeUtil';

const renderUI = (props: RepoCardProps) => render(<RepoCard {...props} />);

it('should render card with details', () => {
  const result = renderUI({ ...testProfileDetails });

  expect(result.getByText(testProfileDetails.language)).toBeInTheDocument();
  expect(result.getByText(testProfileDetails.license.name)).toBeInTheDocument();
  expect(result.getByText(testProfileDetails.forks_count)).toBeInTheDocument();
  expect(
    result.getByText(testProfileDetails.open_issues_count)
  ).toBeInTheDocument();
  expect(
    result.getByText(getTimeDifference(testProfileDetails.updated_at))
  ).toBeInTheDocument();
});

export default testProfileDetails;
