import React, { useContext } from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import RepoList from '../../components/RepoList/RepoList';

import Form from '../../components/Controls/Form';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

import { AppContext, SortState } from '../../context/AppContext';
import { Sort } from '../../context/Actions';

const HomePage: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <>
      <Box p={2} borderBottom={1} borderColor={grey[100]}>
        <Container>
          <ProfileCard />
        </Container>
      </Box>
      <Box p={2}>
        <Container>
          <Grid item container direction="column" spacing={2}>
            <Grid item xs={12}>
              <Form />
            </Grid>

            <Grid item xs={12}>
              <RepoList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
export default HomePage;
