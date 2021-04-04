import { render, fireEvent, within, screen } from '@testing-library/react';
import { useForm, Controller } from 'react-hook-form';
import DropDownMenu, { DropDownBaseProps } from './DropDownMenu';

const label = 'testingLabel';
const id = 'testingId';
const options = [
  { id: 'javascript', label: 'JavaScript' },
  { id: 'typescript', label: 'TypeScript' },
];

const Form = (props: DropDownBaseProps) => {
  const { control } = useForm();

  return (
    <Controller
      name={id}
      render={({ field }) => <DropDownMenu {...props} {...field} />}
      control={control}
    />
  );
};
const renderUI = (props: DropDownBaseProps) => render(<Form {...props} />);

it('should render dropdown with options selectable', () => {
  const form = renderUI({ id, label, options });
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

it('should render multiple dropdown with options selectable', async () => {
  renderUI({ id, label, options, multiple: true });
  const dropDownMenu = screen.getByRole('button');
  expect(dropDownMenu).toBeInTheDocument();
  fireEvent.mouseDown(dropDownMenu);
  const listbox = within(screen.getByRole('listbox'));

  listbox.getByText(options[0].label);
  listbox.getByText(options[1].label);
  fireEvent.click(listbox.getByText(options[0].label));
  fireEvent.click(listbox.getByText(options[1].label));
  const multipleText = `${options[0].label} ,${options[1].label}`;

  expect(dropDownMenu).toHaveTextContent(multipleText);
});
