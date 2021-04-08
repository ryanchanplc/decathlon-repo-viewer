import { useContext, useMemo } from 'react';

import { useFormContext } from 'react-hook-form';
import { Grid, GridSize } from '@material-ui/core';
import { SORT, ORDER, PER_PAGE, FORKS, STARS } from '../../constant/constants';
import { AppContext } from '../../context/AppContext';
import ControlledSelect from '../ControlledSelect/ControlledSelect';

interface SelectFieldsProp {
  /**
   * trigger when fields change
   */
  onSelected: (data: any) => void;
}

const SelectFields = (props: SelectFieldsProp): JSX.Element => {
  const { state } = useContext(AppContext);
  const { onSelected } = props;
  const { control, getValues } = useFormContext();

  const onSubmit = () => {
    if (onSelected) onSelected(getValues());
  };

  const getOptions = (types: Record<string, string>) =>
    Object.entries(types).map((array: Array<string>) => ({
      id: array[0],
      label: array[1],
    }));

  const sortOptions = useMemo(() => getOptions(SORT), []);
  const orderOptions = useMemo(() => getOptions(ORDER), []);
  const pageOptions = useMemo(() => getOptions(PER_PAGE), []);
  const forksOptions = useMemo(() => getOptions(FORKS), []);
  const starsOptions = useMemo(() => getOptions(STARS), []);

  const fieldsConfig = [
    {
      sm: 4,
      id: 'sort',
      label: 'Sort',
      options: sortOptions,
    },
    {
      sm: 2,
      id: 'order',
      label: 'Order',
      options: orderOptions,
    },
    {
      sm: 2,
      id: 'per_page',
      label: 'Items per page',
      options: pageOptions,
    },
    {
      sm: 2,
      id: 'forks',
      label: 'Forks count',
      options: forksOptions,
    },
    {
      sm: 2,
      id: 'stars',
      label: 'Stars count',
      options: starsOptions,
    },
  ];
  return (
    <Grid item container direction="row" spacing={2}>
      {fieldsConfig.map((field) => {
        const { id, label, options, sm } = field;
        return (
          <Grid item xs={12} sm={sm as GridSize}>
            <ControlledSelect
              name={id}
              id={id}
              label={label}
              options={options}
              handleChange={() => {
                onSubmit();
              }}
              defaultValue={state.queryParams[id]}
              control={control}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SelectFields;
