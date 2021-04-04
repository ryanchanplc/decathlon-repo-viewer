import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  createStyles,
  Grid,
  Theme,
} from '@material-ui/core';

import RepoTopics, { RepoTopicsProps } from '../RepoTopics/RepoTopics';
import RepoDetails, { RepoDetailsProps } from '../RepoDetails/RepoDetails';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
  })
);
interface RepoCardBaseProps {
  /**
   * name of the user/organization
   */
  name?: string;

  /**
   * description of the user/organization
   */
  description?: string | null;
}

export type RepoCardProps = RepoCardBaseProps &
  RepoTopicsProps &
  RepoDetailsProps;

const RepoCard = (props: RepoCardProps): JSX.Element => {
  const classes = useStyles();
  const { name, description, topics, ...details } = props;
  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          </Grid>
          {description && (
            <Grid item>
              <Typography variant="body2" component="p" align="left">
                {description}
              </Typography>
            </Grid>
          )}
          <RepoTopics topics={topics} />
          <RepoDetails {...details} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RepoCard;
