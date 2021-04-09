import { Controller, Control } from 'react-hook-form';
import { FormControlLabel, Checkbox } from '@material-ui/core';

export interface ControlledSelectProps {
  /**
   *  id for the checkbox
   */
  id: string;

  /**
   *  label for the checkbox
   */
  label: string;

  /**
   * Controller name
   */
  name: string;

  /**
   * Control for controller
   */
  control: Control;

  /**
   *  default value
   */
  defaultValue: boolean;

  /**
   *  handle Change
   */
  handleChange: (e: any) => void;
}

const CheckBox = (props: ControlledSelectProps): JSX.Element => {
  const { id, label, control, name, defaultValue, handleChange } = props;

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          defaultValue={defaultValue}
          control={control}
          render={({ field }) => {
            const { onChange } = field;
            return (
              <Checkbox
                id={id}
                {...field}
                onChange={(e) => {
                  onChange(e);
                  if (handleChange) handleChange(e);
                }}
              />
            );
          }}
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
