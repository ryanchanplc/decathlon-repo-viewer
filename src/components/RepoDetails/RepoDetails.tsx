import { Grid } from '@material-ui/core';
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
          <ChipWithTooltip
            color="secondary"
            tooltip={license.name}
            label={license.name}
            size="small"
            href={license.url}
            clickable
          />
        </Grid>
      )}
      {forkCount && (
        <Grid item>
          <ChipWithTooltip
            icon={<CallSplitIcon />}
            color="secondary"
            tooltip="Forks"
            label={forkCount}
            size="small"
          />
        </Grid>
      )}
      {issueCount && (
        <Grid item>
          <ChipWithTooltip
            icon={<ErrorOutlineIcon />}
            color="secondary"
            label={issueCount}
            tooltip="Issue"
            size="small"
          />
        </Grid>
      )}
      {starCount && (
        <Grid item>
          <ChipWithTooltip
            icon={<StarBorderIcon />}
            color="secondary"
            tooltip="Star"
            label={starCount}
            size="small"
          />
        </Grid>
      )}
    </Grid>
  );
};

export default RepoDetails;
