import { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import RepoCard from '../RepoCard/RepoCard';
import { AppContext } from '../../context/AppContext';
import { getRepos } from '../../context/Actions';

const RepoList = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getRepos(dispatch);
  }, [dispatch]);

  return (
    <Grid container direction="column" alignItems="stretch" spacing={2}>
      {state.filteredRepoList &&
        state.filteredRepoList.map((repo) => (
          <Grid item sm={12} xs={12} key={repo.id}>
            <RepoCard {...repo} />
          </Grid>
        ))}
    </Grid>
  );
};
export default RepoList;
