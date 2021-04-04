import { render } from '@testing-library/react';
import ProfileDetails, { ProfileDetailsProps } from './ProfileDetails';

const renderUI = (props: ProfileDetailsProps) =>
  render(<ProfileDetails {...props} />);

const name = 'name';
const description = 'description';
const location = 'location';
const blog = 'http://google.com.hk';
const twitterUsername = 'test';
const email = 'test@test.com';

it('should render details', () => {
  const profileDetails = renderUI({
    name,
    description,
    location,
    blog,
    twitterUsername,
    email,
  });

  expect(profileDetails.getByText(name)).toBeInTheDocument();
  expect(profileDetails.getByText(description)).toBeInTheDocument();
  expect(profileDetails.getByText(location)).toBeInTheDocument();
  expect(profileDetails.getByText(blog)).toBeInTheDocument();
  expect(profileDetails.getByText(blog)).toHaveAttribute('href', blog);
  expect(profileDetails.getByText(twitterUsername)).toBeInTheDocument();
  expect(profileDetails.getByText(twitterUsername)).toHaveAttribute(
    'href',
    `https://twitter.com/${twitterUsername}`
  );
  expect(profileDetails.getByText(email)).toBeInTheDocument();
  expect(profileDetails.getByText(email)).toHaveAttribute(
    'href',
    `mailto:${email}`
  );
});
