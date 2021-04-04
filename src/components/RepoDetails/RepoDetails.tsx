import { Grid, Chip, Tooltip } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ChipWithTooltip from '../ChipWithTooltip/ChipWithTooltip';

export interface LicenseProps {
  /**
   * license name
   */
  name: string;

  /**
   * url of the license
   */
  url: string | null;
}

export interface RepoDetailsProps {
  /**
   *  coding language
   */
  language?: string | null;

  /**
   *  license
   */
  license?: LicenseProps | null;

  /**
   *  number of forks
   */
  forks_count?: number;

  /**
   *  number of open issue
   */
  open_issues_count?: number;

  /**
   *  number of stars
   */
  stargazers_count?: number;
}

const RepoDetails = (props: RepoDetailsProps): JSX.Element => {
  const {
    language,
    license,
    forks_count: forkCount,
    open_issues_count: issueCount,
    stargazers_count: starCount,
  } = props;

  return (
    <Grid item container spacing={1} direction="row" justify="flex-start">
      {language && (
        <Grid item>
          <ChipWithTooltip
            variant="outlined"
            color="secondary"
            size="small"
            label={language}
          />
        </Grid>
      )}
      {license && (
        <Grid item>
          <Tooltip title={license.name}>
            {license.url ? (
              <Chip
                color="secondary"
                label={license.name}
                size="small"
                component="a"
                clickable
                href={license.url}
              />
            ) : (
              <Chip color="secondary" label={license.name} size="small" />
            )}
          </Tooltip>
        </Grid>
      )}
      {forkCount && (
        <Grid item>
          <Tooltip title="Forks">
            <Chip
              icon={<CallSplitIcon />}
              color="secondary"
              label={forkCount}
              size="small"
            />
          </Tooltip>
        </Grid>
      )}
      {issueCount && (
        <Grid item>
          <Tooltip title="Issue">
            <Chip
              icon={<ErrorOutlineIcon />}
              color="secondary"
              label={issueCount}
              size="small"
            />
          </Tooltip>
        </Grid>
      )}
      {starCount && (
        <Grid item>
          <Tooltip title="Star">
            <Chip
              icon={<StarBorderIcon />}
              color="secondary"
              label={starCount}
              size="small"
            />
          </Tooltip>
        </Grid>
      )}
    </Grid>
  );
};

export default RepoDetails;
