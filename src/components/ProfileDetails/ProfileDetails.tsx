import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Grid, Typography, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import IconText from '../IconText/IconText';
import ProfileType from '../../types/ProfileType';

export type ProfileDetailsProps = {
  isLoading: boolean;
} & Omit<ProfileType, 'avatar_url'>;

interface ItemWrapperProps {
  /**
   * loading flag
   */
  isLoading: boolean;
}
const ItemWrapper: React.FC<ItemWrapperProps> = (props): JSX.Element => {
  const { isLoading, children } = props;
  return isLoading ? (
    <Box width={1}>
      <Skeleton variant="text" />{' '}
    </Box>
  ) : (
    <>{children}</>
  );
};

const ProfileDetails = (props: ProfileDetailsProps): JSX.Element => {
  const {
    description,
    name,
    location,
    blog,
    twitter_username: twitterUsername,
    email,
    isLoading,
  } = props;
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="flex-start"
      justify="flex-start"
      spacing={1}
    >
      <ItemWrapper isLoading={isLoading}>
        <Grid item>
          <Typography component="h5" variant="h5" align="left">
            {name}
          </Typography>
        </Grid>
      </ItemWrapper>
      <ItemWrapper isLoading={isLoading}>
        <Grid item>
          <Typography variant="subtitle1">{description}</Typography>
        </Grid>
      </ItemWrapper>
      <ItemWrapper isLoading={isLoading}>
        <Grid item container direction="row" spacing={1}>
          <Grid item>
            <IconText text={location} icon={<LocationOnIcon />} />
          </Grid>
          <Grid item>
            <IconText text={blog} url={blog} icon={<LinkIcon />} />
          </Grid>
          <Grid item>
            <IconText
              text={twitterUsername}
              url={`https://twitter.com/${twitterUsername}`}
              icon={<TwitterIcon />}
            />
          </Grid>
          <Grid item>
            <IconText
              text={email}
              url={`mailto:${email}`}
              icon={<EmailIcon />}
            />
          </Grid>
        </Grid>
      </ItemWrapper>
    </Grid>
  );
};

export default ProfileDetails;
