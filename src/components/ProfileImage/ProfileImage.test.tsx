import { render } from '@testing-library/react';
import ProfileImage, { ProfileImageProps } from './ProfileImage';

const avatarUrl = 'http://placekitten.com/150/150';
const placeholderUrl = ProfileImage.defaultProps.avatarUrl;
const renderUI = (props: ProfileImageProps) =>
  render(<ProfileImage {...props} />);

it('should render image', () => {
  const profileImage = renderUI({ avatarUrl });
  const avatar = profileImage.getByRole('img');
  expect(avatar).toHaveAttribute('src', avatarUrl);
  expect(avatar).toHaveAttribute('alt', 'avatar');
});

it('should render placeholder', () => {
  const profileImage = renderUI({});
  const avatar = profileImage.getByRole('img');
  expect(avatar).toHaveAttribute('src', placeholderUrl);
  expect(avatar).toHaveAttribute('alt', 'avatar');
});
