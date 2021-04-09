import { useForm, FormProvider } from 'react-hook-form';
import AppState from '../types/AppState';
import AppContextProvider from '../context/AppContextProvider';

interface DefaultWrapperProps {
  initialState?: AppState;
}
export const DefaultWrapper: React.FC<DefaultWrapperProps> = (
  props
): JSX.Element => {
  const { initialState, children } = props;
  return (
    <AppContextProvider initial={initialState}>{children}</AppContextProvider>
  );
};

export const FormWrapper: React.FC<DefaultWrapperProps> = (props) => {
  const methods = useForm();
  const { initialState, children } = props;
  return (
    <AppContextProvider initial={initialState}>
      <FormProvider {...methods}>{children}</FormProvider>
    </AppContextProvider>
  );
};
