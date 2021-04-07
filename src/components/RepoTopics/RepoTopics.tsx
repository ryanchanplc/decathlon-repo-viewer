import { useContext } from 'react';
import { Grid } from '@material-ui/core';
import ChipWithTooltip from '../ChipWithTooltip/ChipWithTooltip';
import RepoType from '../../types/RepoType';
import { AppContext } from '../../context/AppContext';
import { SetQueryParams } from '../../context/Actions';

export type RepoTopicsProps = Pick<RepoType, 'topics'>;

const RepoTopics = (props: RepoTopicsProps): JSX.Element => {
  const { topics } = props;
  const { state, dispatch } = useContext(AppContext);
  const handleClick = (topic: string) => {
    SetQueryParams(dispatch, { ...state.queryParams, topic });
  };
  return (
    <>
      {topics && (
        <Grid item container spacing={1} direction="row" justify="flex-start">
          {topics.map((topic) => (
            <Grid item key={topic}>
              <ChipWithTooltip
                label={topic}
                clickable
                onClick={() => handleClick(topic)}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default RepoTopics;
