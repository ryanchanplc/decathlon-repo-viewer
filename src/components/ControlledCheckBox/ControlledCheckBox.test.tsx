import { render, fireEvent } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import ControlledCheckBox, {
  ControlledCheckBoxProps,
} from './ControlledCheckBox';

const id = 'testingId';
const label = 'testing';

const Form = (
  props: Pick<ControlledCheckBoxProps, 'id' | 'label' | 'defaultValue'>
): JSX.Element => {
  const { control } = useForm();

  return (
    <ControlledCheckBox
      {...props}
      name={id}
      control={control}
      handleChange={() => {}}
    />
  );
};
const renderUI = (
  props: Pick<ControlledCheckBoxProps, 'id' | 'label' | 'defaultValue'>
) => render(<Form {...props} />);

it('should render checkbox', () => {
  const form = renderUI({
    id,
    label,
    defaultValue: false,
  });

  const checkbox = form.getByLabelText(label);
  expect(checkbox).toBeInTheDocument();

  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});
