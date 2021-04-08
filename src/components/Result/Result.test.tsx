import { render } from '@testing-library/react';
import Result from './Result';
import { DefaultWrapper } from '../../utils/testUtil';
import { initialState } from '../../context/AppContext';
import { QueryParams } from '../../types/AppState';

const language = 'javascript';
// const keywords = 'test';
// const type = 'source';
// const topic = 'test';

const WrappedComponent = (props: QueryParams) => (
  <DefaultWrapper initialState={{ ...initialState, queryParams: { ...props } }}>
    <Result />
  </DefaultWrapper>
);

const renderUI = (props: QueryParams) =>
  render(<WrappedComponent {...props} />);

it('should render details', () => {
  const result = renderUI({ language });

  expect(result.getByText(language)).toBeInTheDocument();
});
