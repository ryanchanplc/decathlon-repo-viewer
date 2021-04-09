import { render } from '@testing-library/react';
import SelectFields from './SelectFields';
import { FormWrapper } from '../../utils/testUtil';

const WrappedComponent = () => (
  <FormWrapper>
    <SelectFields onSelected={() => {}} />
  </FormWrapper>
);

const renderUI = () => render(<WrappedComponent />);

it('should render selects', () => {
  const result = renderUI();

  expect(result.getByLabelText('Sort')).toBeInTheDocument();
  expect(result.getByLabelText('Order')).toBeInTheDocument();
  expect(result.getByLabelText('Items per page')).toBeInTheDocument();
  expect(result.getByLabelText('Forks count')).toBeInTheDocument();
  expect(result.getByLabelText('Stars count')).toBeInTheDocument();
});
