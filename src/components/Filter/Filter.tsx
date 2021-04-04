import { Grid } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

export interface FilterProps {
  /**
   *  trigger when filter is submitted
   */
  onFilter: (data: any) => void;
}

const Filter = (props: FilterProps): JSX.Element => {
  const { control } = useForm();
  const { onFilter } = props;
  const test = [
    { id: 'test', label: 'TEST' },
    { id: 'test2', label: 'TEST2' },
  ];

  return (
    <form onSubmit={() => onFilter({})}>
      <Grid container direction="row" spacing={2}>
        <Grid item sm={4} xs={12}>
          <Controller
            name="type"
            render={({ field }) => (
              <DropDownMenu id="type" label="Type" options={test} {...field} />
            )}
            control={control}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Controller
            name="langagues"
            render={({ field }) => (
              <DropDownMenu
                id="languages"
                label="Languages"
                options={test}
                {...field}
              />
            )}
            control={control}
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Controller
            name="topics"
            render={({ field }) => (
              <DropDownMenu
                id="topics"
                label="Topics"
                options={test}
                {...field}
              />
            )}
            control={control}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default Filter;
