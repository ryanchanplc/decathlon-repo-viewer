import { render, waitFor } from '@testing-library/react';
import CustomizedSnackbars from './CustomizedSnackbars';
import { DefaultWrapper } from '../../utils/testUtil';
import { initialState } from '../../context/AppContext';
import ErrorType from '../../types/ErrorType';

const status = 404;
const message = 'test';
const body = 'body';

const WrappedComponent = (props: ErrorType) => (
  <DefaultWrapper initialState={{ ...initialState, error: { ...props } }}>
    <CustomizedSnackbars />
  </DefaultWrapper>
);

const renderUI = (props: ErrorType) => render(<WrappedComponent {...props} />);

it('should render snackbars', async () => {
  const result = renderUI({ status, message, body });

  await waitFor(() =>
    expect(result.getByText(`${status} ${message} ${body}`)).toBeInTheDocument()
  );
});

it('should render snackbars status only', async () => {
  const result = renderUI({ status, message: null, body: null });

  await waitFor(() =>
    expect(result.getByText(`${status}`)).toBeInTheDocument()
  );
});

it('should render snackbars message only', async () => {
  const result = renderUI({ status: null, message, body: null });

  await waitFor(() =>
    expect(result.getByText(`${message}`)).toBeInTheDocument()
  );
});

it('should render snackbars body only', async () => {
  const result = renderUI({ status: null, message: null, body });

  await waitFor(() => expect(result.getByText(`${body}`)).toBeInTheDocument());
});
