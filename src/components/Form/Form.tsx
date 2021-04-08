import { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import SearchBar from '../SearchBar/SearchBar';
import { AppContext } from '../../context/AppContext';
import { SetQueryParams } from '../../context/Actions';

import Sorting from '../Sorting/Sorting';

const Form = (): JSX.Element => {
  const methods = useForm();
  const { getValues } = methods;

  const { dispatch } = useContext(AppContext);

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
          <Grid item xs={12}>
            <SearchBar placeholder="Search Name" />
          </Grid>
          <Grid item xs={12}>
            <Sorting
              onSort={() => {
                handleSubmit(getValues());
              }}
            />
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default Form;
