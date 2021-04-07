import { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import RepoCard from '../RepoCard/RepoCard';
import { AppContext } from '../../context/AppContext';
import { getRepos } from '../../context/Actions';
import RepoType from '../../types/RepoType';

const RepoList = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getRepos(dispatch, state.queryParams);
  }, [dispatch, state.queryParams]);

  return (
    <Grid container direction="column" alignItems="stretch" spacing={2}>
      {state.repos?.items &&
        state.repos?.items.map((repo: RepoType) => (
          <Grid item sm={12} xs={12} key={repo.id}>
            <RepoCard {...repo} />
          </Grid>
        ))}
    </Grid>
  );
};
export default RepoList;
