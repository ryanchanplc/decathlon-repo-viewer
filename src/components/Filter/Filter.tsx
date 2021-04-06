import { useContext, useMemo, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { AppContext, Types } from '../../context/AppContext';

export interface FilterProps {
  /**
   *  trigger when filter is submitted
   */
  onFilter: (data: any) => void;
}

const Filter = (props: FilterProps): JSX.Element => {
  const { state } = useContext(AppContext);
  const { onFilter } = props;
  const { control, getValues, setValue } = useFormContext();
  const onSubmit = () => {
    onFilter(getValues());
  };

  const typeOptions = useMemo(
    () =>
      Object.entries(Types).map((array: Array<string>) => ({
        id: array[1],
        label: array[1],
      })),
    []
  );

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item sm={4} xs={12}>
        <Controller
          name="type"
          render={({ field }) => {
            const { onChange, ...others } = field;
            return (
              <DropDownMenu
                id="type"
                label="Types"
                options={typeOptions}
                onChange={(e) => {
                  onChange(e);
                  onSubmit();
                }}
                {...others}
              />
            );
          }}
          defaultValue={state.search.type}
          control={control}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <Controller
          name="topic"
          render={({ field }) => {
            const { onChange, ...others } = field;
            return (
              <DropDownMenu
                id="topic"
                label="Topics"
                options={state.topicList}
                onChange={(e) => {
                  onChange(e);
                  onSubmit();
                }}
                {...others}
              />
            );
          }}
          defaultValue={state.search.topic}
          control={control}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <Controller
          name="language"
          render={({ field }) => {
            const { onChange, ...others } = field;
            return (
              <DropDownMenu
                id="language"
                label="Languages"
                options={state.languageList}
                onChange={(e) => {
                  onChange(e);
                  onSubmit();
                }}
                {...others}
              />
            );
          }}
          defaultValue={state.search.language}
          control={control}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
