import { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import RepoCard from '../RepoCard/RepoCard';
import { AppContext } from '../../context/AppContext';
import { getRepos } from '../../context/Actions';
import RepoType from '../../types/RepoType';

const RepoList = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  const { isRepoLoading, queryParams, repos } = state;
  useEffect(() => {
    getRepos(dispatch, queryParams);
  }, [dispatch, queryParams]);

  return (
    <>
      {isRepoLoading ? (
        <LoadingSpinner />
      ) : (
        <Grid
          container
          direction="column"
          alignItems="stretch"
          justify="center"
          spacing={2}
        >
          {repos?.items &&
            repos?.items.map((repo: RepoType) => (
              <Grid item sm={12} xs={12} key={repo.id}>
                <RepoCard {...repo} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
};
export default RepoList;
