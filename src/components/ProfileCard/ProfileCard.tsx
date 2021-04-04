import { Box } from '@material-ui/core';
import ProfileDetails, {
  ProfileDetailsProps,
} from '../ProfileDetails/ProfileDetails';
import ProfileImage, { ProfileImageProps } from '../ProfileImage/ProfileImage';

export type ProfileCardProps = ProfileDetailsProps & ProfileImageProps;

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { avatarUrl, ...details } = props;

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <ProfileImage avatarUrl={avatarUrl} />
      <Box p={2} width={1}>
        <ProfileDetails {...details} />
      </Box>
    </Box>
  );
};

export default ProfileCard;
