import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Grid, Typography } from '@material-ui/core';
import IconText from '../IconText/IconText';

export interface ProfileDetailsProps {
  /**
   * description of the organization/user
   */
  description: string;

  /**
   * name of the organization/user
   */
  name: string;

  /**
   * location of the organization/user
   */
  location: string;

  /**
   * blog url of the organization/user
   */
  blog: string;

  /**
   * twitter username of the organization/user
   */
  twitterUsername: string;
  /**
   *  email of the organization/user
   */
  email: string;
}

const ProfileDetails = (props: ProfileDetailsProps): JSX.Element => {
  const { description, name, location, blog, twitterUsername, email } = props;
  return (
    <Grid
      item
      container
      direction="column"
      alignItems="flex-start"
      justify="flex-start"
      spacing={1}
    >
      <Grid item>
        <Typography component="h5" variant="h5" align="left">
          {name}
        </Typography>
      </Grid>
      {description && (
        <Grid item>
          <Typography variant="subtitle1">{description}</Typography>
        </Grid>
      )}
      <Grid item container direction="row" spacing={1}>
        {location && (
          <Grid item>
            <IconText text={location} icon={<LocationOnIcon />} />
          </Grid>
        )}
        {blog && (
          <Grid item>
            <IconText text={blog} url={blog} icon={<LinkIcon />} />
          </Grid>
        )}
        {twitterUsername && (
          <Grid item>
            <IconText
              text={twitterUsername}
              url={`https://twitter.com/${twitterUsername}`}
              icon={<TwitterIcon />}
            />
          </Grid>
        )}
        {email && (
          <Grid item>
            <IconText
              text={email}
              url={`mailto:${email}`}
              icon={<EmailIcon />}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
