import { useContext } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Link,
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';
import RepoTopics from '../RepoTopics/RepoTopics';
import RepoDetails from '../RepoDetails/RepoDetails';
import RepoType from '../../types/RepoType';
import { AppContext } from '../../context/AppContext';
import { SetQueryParams } from '../../context/Actions';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '100%',
    },
  })
);

export type RepoCardProps = RepoType;

const RepoCard = (props: RepoCardProps): JSX.Element => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const { name, description, html_url: url, topics, ...details } = props;
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
              {url ? (
                <Link href={url} target="_blank" rel="noreferrer">
                  {name}
                </Link>
              ) : (
                name
              )}
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
          <RepoDetails
            onClickLanguage={(language: string) => {
              SetQueryParams(dispatch, { ...state.queryParams, language });
            }}
            {...details}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RepoCard;
