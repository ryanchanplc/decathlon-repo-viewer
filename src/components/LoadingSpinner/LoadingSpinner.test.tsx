import { render } from '@testing-library/react';
import LoadingSpinner, { LoadingSpinnerProps } from './LoadingSpinner';

const renderUI = (props: LoadingSpinnerProps) =>
  render(<LoadingSpinner {...props} />);

it('should render loading', () => {
  const result = renderUI({});

  expect(result.getByText('Loading')).toBeInTheDocument();
});
