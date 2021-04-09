import { render } from '@testing-library/react';
import SearchBar, { SearchBarProps } from './SearchBar';
import { FormWrapper } from '../../utils/testUtil';

const WrappedComponent = (props: SearchBarProps) => (
  <FormWrapper>
    <SearchBar {...props} />
  </FormWrapper>
);

const renderUI = (args: SearchBarProps) =>
  render(<WrappedComponent {...args} />);

it('should render searchbar', () => {
  const result = renderUI({ placeholder: 'Search' });

  expect(result.getByText('Search')).toBeInTheDocument();
});
