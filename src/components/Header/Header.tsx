import { Box, Grid } from '@material-ui/core';

import ProfileCard from '../ProfileCard/ProfileCard';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';

export interface HeaderProps {
  /**
   * organization response
   */
  organization: any;
}

const Header = (props: HeaderProps): JSX.Element => {
  const { organization } = props;
  return (
    <>
      <Box pt={1}>
        <ProfileCard {...organization} />
      </Box>
      <Box pt={1}>
        <Grid container direction="row" spacing={2}>
          <Grid item sm={4} xs={12}>
            <SearchBar placeholder="Search" onSearch={() => {}} />
          </Grid>
          <Grid item sm={8} xs={12}>
            <Filter onFilter={() => {}} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
