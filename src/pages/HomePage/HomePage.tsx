import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import RepoList from '../../components/RepoList/RepoList';
import Form from '../../components/Form/Form';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PaginationControl from '../../components/PaginationControl/PaginationControl';
import Result from '../../components/Result/Result';

const HomePage: React.FC = () => (
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
            <Result />
          </Grid>
          <Grid item xs={12}>
            <RepoList />
          </Grid>
          <Grid item xs={12}>
            <PaginationControl />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);
export default HomePage;
