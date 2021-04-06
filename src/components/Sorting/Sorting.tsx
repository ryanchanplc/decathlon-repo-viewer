import { useContext, useMemo, useEffect } from 'react';

import { useFormContext, Controller } from 'react-hook-form';
import { AppContext, SortTypes } from '../../context/AppContext';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const Sorting = (props: any): JSX.Element => {
  const { state } = useContext(AppContext);
  const { onSort } = props;
  const { control, getValues, setValue } = useFormContext();

  const onSubmit = () => {
    if (onSort) onSort(getValues());
  };
  const sortOptions = useMemo(
    () =>
      Object.entries(SortTypes).map((array: Array<string>) => ({
        id: array[1],
        label: array[1],
      })),
    []
  );

  return (
    <form name="sortfForm" id="sortfForm">
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
        defaultValue={state.search.sort}
        control={control}
      />
    </form>
  );
};

export default Sorting;
