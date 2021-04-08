import { useContext, useMemo } from 'react';

import { useFormContext } from 'react-hook-form';
import { Grid } from '@material-ui/core';
import { AppContext, forksTypes, starsTypes } from '../../context/AppContext';
import ControlledSelect from '../ControlledSelect/ControlledSelect';

interface FilterProps {
  onFilter: (data: any) => void;
}

const Filter = (props: FilterProps): JSX.Element => {
  const { state } = useContext(AppContext);
  const { onFilter } = props;
  const { control, getValues } = useFormContext();

  const onSubmit = () => {
    if (onFilter) onFilter(getValues());
  };

  const getOptions = (types: Record<string, string>) =>
    Object.entries(types).map((array: Array<string>) => ({
      id: array[0],
      label: array[1],
    }));

  const forksOptions = useMemo(() => getOptions(forksTypes), []);
  const starsOptions = useMemo(() => getOptions(starsTypes), []);

  return (
    <Grid item container direction="row" spacing={2}>
      <Grid item xs>
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
      <Grid item xs>
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

export default Filter;
