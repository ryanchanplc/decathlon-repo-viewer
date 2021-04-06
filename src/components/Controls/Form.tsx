import { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import Filter from '../Filter/Filter';
import SearchBar from '../SearchBar/SearchBar';
import { AppContext } from '../../context/AppContext';
import { Search, Sort } from '../../context/Actions';
import Result from '../Result/Result';
import Sorting from '../Sorting/Sorting';

const Form = (): JSX.Element => {
  const methods = useForm();
  const { getValues, setValue } = methods;

  const { state, dispatch } = useContext(AppContext);
  const onSearch = (data: any) => {
    Search(dispatch, data, state.repoList);
  };
  const onSort = (data: any) => {
    Sort(dispatch, data.sort, state.repoList);
  };
  useEffect(() => {
    Object.entries(state.search).forEach(([key, value]) =>
      setValue(key, value)
    );
  }, [setValue, state.search]);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(getValues());
        }}
        name="searchForm"
        id="searchForm"
      >
        <Grid container direction="column" spacing={2}>
          <Grid item container direction="row" spacing={2}>
            <Grid item sm={4} xs={12}>
              <SearchBar placeholder="Search Name" />
            </Grid>
            <Grid item sm={8} xs={12}>
              <Filter
                onFilter={() => {
                  onSearch(getValues());
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            xs={12}
            alignItems="center"
            justify="flex-end"
          >
            <Grid item xs={10}>
              <Result count={state.filteredRepoList.length} {...state.search} />
            </Grid>
            <Grid item xs={2}>
              <Sorting
                onSort={() => {
                  onSort(getValues());
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default Form;
