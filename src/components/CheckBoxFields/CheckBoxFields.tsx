import { useContext } from 'react';

import { useFormContext } from 'react-hook-form';
import { Box } from '@material-ui/core';
import { AppContext } from '../../context/AppContext';
import ControlledCheckBox from '../ControlledCheckBox/ControlledCheckBox';

interface CheckBoxFieldsProps {
  /**
   * trigger when fields change
   */
  onChecked: (data: any) => void;
}

const CheckBoxFields = (props: CheckBoxFieldsProps): JSX.Element => {
  const { state } = useContext(AppContext);
  const { onChecked } = props;
  const { control, getValues } = useFormContext();

  const onSubmit = () => {
    if (onChecked) onChecked(getValues());
  };

  const fieldsConfig = [
    {
      id: 'archived',
      label: 'Archived',
    },
    {
      id: 'mirror',
      label: 'Mirror',
    },
    {
      id: 'private',
      label: 'Private',
    },
  ];
  return (
    <Box justifyContent="flex-start" display="flex" flexDirection="row">
      {fieldsConfig.map((field) => {
        const { id, label } = field;
        return (
          <ControlledCheckBox
            key={id}
            name={id}
            id={id}
            label={label}
            handleChange={() => {
              onSubmit();
            }}
            defaultValue={state.queryParams[id]}
            control={control}
          />
        );
      })}
    </Box>
  );
};

export default CheckBoxFields;
