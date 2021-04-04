import { Grid } from '@material-ui/core';
import RepoCard, { RepoCardProps } from '../RepoCard/RepoCard';

interface RepoListBaseProps {
  id: number;
}
export interface RepoListProps {
  /**
   * repositories array
   */
  repos: Array<RepoListBaseProps & RepoCardProps>;
}
const RepoList = (props: RepoListProps): JSX.Element => {
  const { repos } = props;
  return (
    <Grid container direction="column" alignItems="stretch" spacing={2}>
      {repos.map((repo) => (
        <Grid item sm={12} xs={12} key={repo.id}>
          <RepoCard {...repo} />
        </Grid>
      ))}
    </Grid>
  );
};
export default RepoList;
