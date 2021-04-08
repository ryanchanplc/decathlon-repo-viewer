import { makeStyles, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import ProfileType from '../../types/ProfileType';

const useStyles = makeStyles(() => ({
  image: {
    borderRadius: '16px',
  },
}));

export type ProfileImageProps = Pick<ProfileType, 'avatar_url'>;

const ProfileImage = (props: ProfileImageProps): JSX.Element => {
  const { avatar_url: avatarUrl } = props;
  const classes = useStyles();

  return avatarUrl ? (
    <img
      src={avatarUrl}
      alt="avatar"
      height="150"
      width="150"
      className={classes.image}
    />
  ) : (
    <Box width={150}>
      <Skeleton
        variant="rect"
        className={classes.image}
        width={150}
        height={150}
      />
    </Box>
  );
};

export default ProfileImage;
