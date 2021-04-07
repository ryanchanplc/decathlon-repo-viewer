import { useContext, useMemo } from 'react';

import { useFormContext, Controller } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import {
  AppContext,
  SortTypes,
  OrderTypes,
  perPageTypes,
} from '../../context/AppContext';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

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
  const sortOptions = useMemo(
    () =>
      Object.entries(SortTypes).map((array: Array<string>) => ({
        id: array[0],
        label: array[1],
      })),
    []
  );
  const orderOptions = useMemo(
    () =>
      Object.entries(OrderTypes).map((array: Array<string>) => ({
        id: array[0],
        label: array[1],
      })),
    []
  );
  const pageOptions = useMemo(
    () =>
      Object.entries(perPageTypes).map((array: Array<string>) => ({
        id: array[0],
        label: array[1],
      })),
    []
  );

  return (
    <Grid item container direction="row" spacing={2}>
      <Grid item xs>
        <Controller
          name="sort"
          render={({ field }) => {
            const { onChange, ...others } = field;
            return (
              <DropDownMenu
                id="sort"
                label="Sort"
                options={sortOptions}
                onChange={(e) => {
                  onChange(e);
                  onSubmit();
                }}
                {...others}
              />
            );
          }}
          defaultValue={state.queryParams.sort}
          control={control}
        />
      </Grid>
      <Grid item xs>
        <Controller
          name="order"
          render={({ field }) => {
            const { onChange, ...others } = field;
            return (
              <DropDownMenu
                id="order"
                label="Order"
                options={orderOptions}
                onChange={(e) => {
                  onChange(e);
                  onSubmit();
                }}
                {...others}
              />
            );
          }}
          defaultValue={state.queryParams.order}
          control={control}
        />
      </Grid>
      <Grid item xs>
        <Controller
          name="per_page"
          render={({ field }) => {
            const { onChange, ...others } = field;
            return (
              <DropDownMenu
                id="per_page"
                label="Items Per Page"
                options={pageOptions}
                onChange={(e) => {
                  onChange(e);
                  onSubmit();
                }}
                {...others}
              />
            );
          }}
          defaultValue={state.queryParams.per_page}
          control={control}
        />
      </Grid>
    </Grid>
  );
};

export default Sorting;
