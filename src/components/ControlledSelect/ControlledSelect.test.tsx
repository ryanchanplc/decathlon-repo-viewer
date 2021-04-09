import { render, fireEvent } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import ControlledSelect, { ControlledSelectProps } from './ControlledSelect';

const id = 'testingId';
const label = 'testing';
const options = [
  { id: 'javascript', label: 'Javascript' },
  { id: 'typescript', label: 'Typescript' },
];
const Form = (
  props: Pick<
    ControlledSelectProps,
    'id' | 'label' | 'options' | 'defaultValue' | 'multiple'
  >
): JSX.Element => {
  const { control } = useForm();

  return (
    <ControlledSelect
      {...props}
      name={id}
      control={control}
      handleChange={() => {}}
    />
  );
};
const renderUI = (
  props: Pick<
    ControlledSelectProps,
    'id' | 'label' | 'options' | 'defaultValue' | 'multiple'
  >
) => render(<Form {...props} />);

it('should render dropdown with options selectable', () => {
  const form = renderUI({
    id,
    label,
    options,
    multiple: false,
    defaultValue: '',
  });

  const dropDownMenu = form.getByLabelText(label);
  expect(dropDownMenu).toBeInTheDocument();
  fireEvent.change(dropDownMenu, {
    target: { value: options[0].id },
  });
  expect(form.getByText(options[0].label)).toBeInTheDocument();
  fireEvent.change(dropDownMenu, {
    target: { value: options[1].id },
  });
  expect(form.getByText(options[1].label)).toBeInTheDocument();
});
