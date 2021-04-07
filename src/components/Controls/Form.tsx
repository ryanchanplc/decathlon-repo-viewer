import { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import SearchBar from '../SearchBar/SearchBar';
import { AppContext } from '../../context/AppContext';
import { SetQueryParams } from '../../context/Actions';
import Result from '../Result/Result';
import Sorting from '../Sorting/Sorting';

const Form = (): JSX.Element => {
  const methods = useForm();
  const { getValues } = methods;

  const { state, dispatch } = useContext(AppContext);

  const handleSubmit = (data: any) => {
    SetQueryParams(dispatch, data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(getValues());
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
              {/* <Filter
                onFilter={() => {
                  onSearch(getValues());
                }}
              /> */}
              <Sorting
                onSort={() => {
                  handleSubmit(getValues());
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
            <Grid item xs={12}>
              <Result count={state.repos?.total_count} {...state.queryParams} />
            </Grid>
            {/* <Grid item xs={2}>
              <Sorting
                onSort={() => {
                  handleSubmit(getValues());
                }}
              />
            </Grid> */}
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default Form;
