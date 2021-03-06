import { render } from '@testing-library/react';
import ProfileImage, { ProfileImageProps } from './ProfileImage';

const avatarUrl = 'http://placekitten.com/150/150';

const renderUI = (props: ProfileImageProps) =>
  render(<ProfileImage {...props} />);

it('should render image', async () => {
  const profileImage = renderUI({ avatar_url: avatarUrl });
  expect(profileImage.getByRole('img')).toHaveAttribute('src', avatarUrl);
  expect(profileImage.getByRole('img')).toHaveAttribute('alt', 'avatar');
});
export default avatarUrl;
