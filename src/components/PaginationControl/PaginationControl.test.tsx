import { render } from '@testing-library/react';
import { DefaultWrapper } from '../../utils/testUtil';
import { initialState } from '../../context/AppContext';
import PaginationControl from './PaginationControl';

const WrappedComponent = () => (
  <DefaultWrapper
    initialState={{ ...initialState, repos: { items: [], total_count: 100 } }}
  >
    <PaginationControl />
  </DefaultWrapper>
);

const renderUI = () => render(<WrappedComponent />);

it('should render pages controls', () => {
  const result = renderUI();

  expect(result.getByText('1')).toBeInTheDocument();
  expect(result.getByText('2')).toBeInTheDocument();
  expect(result.getByText('3')).toBeInTheDocument();
});
