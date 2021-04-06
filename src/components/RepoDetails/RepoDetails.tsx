import { Grid, Chip, Tooltip } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import ChipWithTooltip from '../ChipWithTooltip/ChipWithTooltip';
import RepoType from '../../types/RepoType';

export type RepoDetailsProps = {
  onClickLanguage: (language: string) => void;
} & Pick<
  RepoType,
  | 'language'
  | 'license'
  | 'forks_count'
  | 'open_issues_count'
  | 'stargazers_count'
  | 'updated_at'
>;

const RepoDetails = (props: RepoDetailsProps): JSX.Element => {
  const {
    onClickLanguage,
    language,
    license,
    forks_count: forkCount,
    open_issues_count: issueCount,
    stargazers_count: starCount,
    updated_at: updatedAt,
  } = props;
  const getTimeDifference = (updateAt: string) => {
    const update = new Date(updateAt);
    const now = new Date();
    const milliseconds = Math.abs(now.getTime() - update.getTime());
    const days = milliseconds / (1000 * 3600 * 24);
    const hour = milliseconds / 1000 / 3600;
    if (hour < 24) return `Updated ${Math.floor(hour)} hours ago`;
    if (days < 30) return `Updated ${Math.floor(days)} days ago`;
    return `Updated on ${update.toISOString().split('T')[0]}`;
  };
  return (
    <Grid
      item
      container
      spacing={1}
      direction="row"
      justify="flex-start"
      alignItems="center"
    >
      {language && (
        <Grid item>
          <ChipWithTooltip
            variant="outlined"
            color="secondary"
            size="small"
            label={language}
            clickable
            onClick={() => {
              onClickLanguage(language);
            }}
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
                target="_blank"
                rel="noreferrer"
              />
            ) : (
              <Chip color="secondary" label={license.name} size="small" />
            )}
          </Tooltip>
        </Grid>
      )}
      {forkCount !== null && (
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
      {issueCount !== null && (
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
      {starCount !== null && (
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

      {updatedAt && (
        <Grid item>
          <ChipWithTooltip
            color="primary"
            size="small"
            label={getTimeDifference(updatedAt)}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default RepoDetails;
