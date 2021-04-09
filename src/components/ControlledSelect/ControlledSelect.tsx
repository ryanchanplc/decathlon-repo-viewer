import { Controller, Control } from 'react-hook-form';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  makeStyles,
  Checkbox,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  select: {
    textAlign: 'left',
    padding: theme.spacing(1),
  },
}));

interface OptionProps {
  /**
   *  menu item id
   */
  id: string;

  /**
   * menu item label
   */
  label: string;
}

export interface ControlledSelectProps {
  /**
   *  id for the dropdown
   */
  id: string;

  /**
   *  label for the dropdown
   */
  label: string;

  /**
   *  options of the dropdown
   */
  options: Array<OptionProps>;

  /**
   *  wherther it is a multiple selection
   */
  multiple?: boolean;

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
  defaultValue: string | string[];

  /**
   *  handle Change
   */
  handleChange: (e: any) => void;
}

const DropDownMenu = (props: ControlledSelectProps): JSX.Element => {
  const classes = useStyles();
  const {
    id,
    label,
    options,
    control,
    name,
    defaultValue,
    handleChange,
    multiple = false,
  } = props;
  const labelName = `${id}-label`;

  const renderValue = (selected: any) => {
    if (Array.isArray(selected)) {
      return options
        .filter((opt: any) => selected.indexOf(opt.id) > -1)
        .map((opt: any) => opt.label)
        .join(' ,');
    }
    return options.find((opt: any) => selected === opt.id)?.label;
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor={labelName}>{label}</InputLabel>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => {
          const { onChange, value, onBlur, ref } = field;
          return (
            <Select
              label={label}
              id={id}
              multiple={multiple}
              value={value || (multiple ? [] : '')}
              renderValue={renderValue}
              onChange={(e) => {
                onChange(e);
                if (handleChange) handleChange(e);
              }}
              onBlur={onBlur}
              ref={ref}
              inputProps={{
                name: id,
                id: labelName,
              }}
            >
              {options &&
                options.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {multiple && (
                      <Checkbox
                        checked={
                          Array.isArray(value) && value.indexOf(option.id) > -1
                        }
                      />
                    )}
                    <ListItemText primary={option.label} />
                  </MenuItem>
                ))}
            </Select>
          );
        }}
      />
    </FormControl>
  );
};

export default DropDownMenu;
