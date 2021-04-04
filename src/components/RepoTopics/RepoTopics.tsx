import { Grid } from '@material-ui/core';
import ChipWithTooltip from '../ChipWithTooltip/ChipWithTooltip';

export interface RepoTopicsProps {
  /**
   *  repo topics
   */
  topics?: Array<string>;
}

const RepoTopics = (props: RepoTopicsProps): JSX.Element => {
  const { topics } = props;
  return (
    <>
      {topics && (
        <Grid item container spacing={1} direction="row" justify="flex-start">
          {topics.map((topic) => (
            <Grid item>
              <ChipWithTooltip label={topic} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default RepoTopics;
