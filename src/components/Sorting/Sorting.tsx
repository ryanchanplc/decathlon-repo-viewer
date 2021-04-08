import { useContext, useMemo, useCallback } from 'react';

import { useFormContext } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import {
  AppContext,
  SortTypes,
  OrderTypes,
  perPageTypes,
  forksTypes,
  starsTypes,
} from '../../context/AppContext';
import ControlledSelect from '../ControlledSelect/ControlledSelect';

interface SortingProps {
  onSort: (data: any) => void;
}

const Sorting = (props: SortingProps): JSX.Element => {
  const { state } = useContext(AppContext);
  const { onSort } = props;
  const { control, getValues } = useFormContext();

  const onSubmit = () => {
    if (onSort) onSort(getValues());
  };

  const getOptions = (types: Record<string, string>) =>
    Object.entries(types).map((array: Array<string>) => ({
      id: array[0],
      label: array[1],
    }));

  const sortOptions = useMemo(() => getOptions(SortTypes), []);
  const orderOptions = useMemo(() => getOptions(OrderTypes), []);
  const pageOptions = useMemo(() => getOptions(perPageTypes), []);
  const forksOptions = useMemo(() => getOptions(forksTypes), []);
  const starsOptions = useMemo(() => getOptions(starsTypes), []);

  return (
    <Grid item container direction="row" spacing={2}>
      <Grid item xs={12} sm={4}>
        <ControlledSelect
          name="sort"
          id="sort"
          label="Sort"
          options={sortOptions}
          handleChange={() => {
            onSubmit();
          }}
          defaultValue={state.queryParams.sort}
          control={control}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <ControlledSelect
          name="order"
          id="order"
          label="Order"
          options={orderOptions}
          handleChange={() => {
            onSubmit();
          }}
          defaultValue={state.queryParams.order}
          control={control}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <ControlledSelect
          name="per_page"
          id="per_page"
          label="Items Per Page"
          options={pageOptions}
          handleChange={() => {
            onSubmit();
          }}
          defaultValue={state.queryParams.per_page}
          control={control}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <ControlledSelect
          name="forks"
          id="forks"
          label="Forks"
          options={forksOptions}
          handleChange={() => {
            onSubmit();
          }}
          defaultValue={state.queryParams.forks}
          control={control}
        />
      </Grid>
      <Grid item xs={12} sm={2}>
        <ControlledSelect
          name="stars"
          id="stars"
          label="Stars"
          options={starsOptions}
          handleChange={() => {
            onSubmit();
          }}
          defaultValue={state.queryParams.stars}
          control={control}
        />
      </Grid>
    </Grid>
  );
};

export default Sorting;
