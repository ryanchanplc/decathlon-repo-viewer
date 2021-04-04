import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  image: {
    borderRadius: '16px',
  },
}));

export interface ProfileImageProps {
  /**
   * avatar image
   */
  avatarUrl?: string;
}

const ProfileImage = (props: ProfileImageProps): JSX.Element => {
  const { avatarUrl } = props;
  const classes = useStyles();

  return (
    <img src={avatarUrl} alt="avatar" height="150" className={classes.image} />
  );
};

ProfileImage.defaultProps = {
  avatarUrl: 'https://via.placeholder.com/150',
};
export default ProfileImage;
