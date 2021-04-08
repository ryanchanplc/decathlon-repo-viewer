import { render, waitFor } from '@testing-library/react';
import ProfileImage, { ProfileImageProps } from './ProfileImage';

const avatarUrl = 'http://placekitten.com/150/150';

const renderUI = (props: ProfileImageProps) =>
  render(<ProfileImage {...props} />);

it('should render image', async () => {
  const profileImage = renderUI({ avatar_url: avatarUrl });

  await waitFor(() =>
    expect(profileImage.getByRole('img')).toHaveAttribute('src', avatarUrl)
  );
  await waitFor(() =>
    expect(profileImage.getByRole('img')).toHaveAttribute('alt', 'avatar')
  );
});

// it('should render placeholder', () => {
//   const profileImage = renderUI({});
//   const avatar = profileImage.getByRole('img');
//   expect(avatar).toHaveAttribute('src', placeholderUrl);
//   expect(avatar).toHaveAttribute('alt', 'avatar');
// });
