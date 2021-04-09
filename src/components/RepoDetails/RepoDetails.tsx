import { Grid, Chip, Tooltip } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import { useContext } from 'react';
import ChipWithTooltip from '../ChipWithTooltip/ChipWithTooltip';
import { AppContext } from '../../context/AppContext';
import { SetQueryParams } from '../../context/Actions';
import getTimeDifference from '../../utils/timeUtil';
import RepoType from '../../types/RepoType';

export type RepoDetailsProps = Pick<
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
    language,
    license,
    forks_count: forkCount,
    open_issues_count: issueCount,
    stargazers_count: starCount,
    updated_at: updatedAt,
  } = props;
  const { state, dispatch } = useContext(AppContext);

  const handleClick = (value: any) =>
    SetQueryParams(dispatch, { ...state.queryParams, ...value });

  const checkNonZeroFalsy = (value?: number): any => value || value === 0;

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
              handleClick({ language });
            }}
          />
        </Grid>
      )}
      {license && (
        <Grid item>
          <ChipWithTooltip
            tooltip={license.name}
            color="secondary"
            label={license.name}
            size="small"
            clickable
            onClick={() => {
              handleClick({
                license: { name: license.name, key: license.key },
              });
            }}
          />
        </Grid>
      )}
      {checkNonZeroFalsy(forkCount) && (
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
      {checkNonZeroFalsy(issueCount) && (
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
      {checkNonZeroFalsy(starCount) && (
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
