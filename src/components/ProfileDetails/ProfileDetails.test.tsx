import { render } from '@testing-library/react';
import ProfileDetails, { ProfileDetailsProps } from './ProfileDetails';

const renderUI = (props: ProfileDetailsProps) =>
  render(<ProfileDetails {...props} />);

const profileDetailsData = {
  name: 'name',
  description: 'description',
  location: 'location',
  blog: 'http://google.com.hk',
  twitter_username: 'test', //camelcase
  email: 'test@test.com',
};

it('should render details', () => {
  const profileDetails = renderUI({
    ...profileDetailsData,
    isLoading: false,
  });

  expect(profileDetails.getByText(profileDetailsData.name)).toBeInTheDocument();
  expect(
    profileDetails.getByText(profileDetailsData.description)
  ).toBeInTheDocument();
  expect(
    profileDetails.getByText(profileDetailsData.location)
  ).toBeInTheDocument();
  expect(profileDetails.getByText(profileDetailsData.blog)).toBeInTheDocument();
  expect(profileDetails.getByText(profileDetailsData.blog)).toHaveAttribute(
    'href',
    profileDetailsData.blog
  );
  expect(
    profileDetails.getByText(profileDetailsData.twitter_username)
  ).toBeInTheDocument();
  expect(
    profileDetails.getByText(profileDetailsData.twitter_username)
  ).toHaveAttribute(
    'href',
    `https://twitter.com/${profileDetailsData.twitter_username}`
  );
  expect(
    profileDetails.getByText(profileDetailsData.email)
  ).toBeInTheDocument();
  expect(profileDetails.getByText(profileDetailsData.email)).toHaveAttribute(
    'href',
    `mailto:${profileDetailsData.email}`
  );
});

export default profileDetailsData;
