import { render } from '@testing-library/react';
import CheckBoxFields from './CheckBoxFields';
import { FormWrapper } from '../../utils/testUtil';
import { initialState } from '../../context/AppContext';
import { QueryParams } from '../../types/AppState';

const isPrivate = false;
const mirror = false;
const archived = false;
const WrappedComponent = (props: QueryParams) => (
  <FormWrapper initialState={{ ...initialState, queryParams: { ...props } }}>
    <CheckBoxFields onChecked={() => {}} />
  </FormWrapper>
);

const renderUI = (props: QueryParams) =>
  render(<WrappedComponent {...props} />);

it('should render checkfields', () => {
  const result = renderUI({ private: isPrivate, mirror, archived });

  expect(result.getByLabelText('Private')).toBeInTheDocument();
  expect(result.getByLabelText('Mirror')).toBeInTheDocument();
  expect(result.getByLabelText('Archived')).toBeInTheDocument();

  expect(result.getByLabelText('Private')).not.toBeChecked();
  expect(result.getByLabelText('Mirror')).not.toBeChecked();
  expect(result.getByLabelText('Archived')).not.toBeChecked();
});
