import { render } from '@testing-library/react';
import Form from './Form';
import { FormWrapper } from '../../utils/testUtil';
import { initialState } from '../../context/AppContext';

const WrappedComponent = () => (
  <FormWrapper initialState={{ ...initialState }}>
    <Form />
  </FormWrapper>
);

const renderUI = () => render(<WrappedComponent />);

it('should render form', () => {
  const result = renderUI();

  expect(result.getByLabelText('Private')).toBeInTheDocument();
  expect(result.getByLabelText('Mirror')).toBeInTheDocument();
  expect(result.getByLabelText('Archived')).toBeInTheDocument();
  expect(result.getByLabelText('Sort')).toBeInTheDocument();
  expect(result.getByLabelText('Order')).toBeInTheDocument();
  expect(result.getByLabelText('Items per page')).toBeInTheDocument();
  expect(result.getByLabelText('Forks count')).toBeInTheDocument();
  expect(result.getByLabelText('Stars count')).toBeInTheDocument();
});
