/* eslint  @typescript-eslint/explicit-module-boundary-types: 0 */
import { createServer, Server } from 'miragejs';
import { useForm, FormProvider } from 'react-hook-form';

import AppState from '../types/AppState';
import AppContextProvider from '../context/AppContextProvider';
import { generateRepos, generateProfile } from '../mock/generate';
import {
  BASE_URL,
  REPO_ENDPOINT,
  PROFILE_ENDPOINT,
  USER,
} from '../constant/url';

export const mockRepos = (size: number) => (): Server =>
  createServer({
    routes() {
      this.get(`${BASE_URL}${REPO_ENDPOINT}`, () => ({
        total_count: size,
        items: generateRepos(size),
      }));
    },
  });

export const mockProfile = () => (): Server =>
  createServer({
    routes() {
      this.get(`${BASE_URL}${PROFILE_ENDPOINT}/${USER}`, () =>
        generateProfile()
      );
    },
  });

export const defaultDecorator = (
  initialState?: AppState,
  mockFunction?: () => void
) => (story: any) => {
  if (mockFunction) mockFunction();
  return (
    <AppContextProvider initial={initialState}>{story()}</AppContextProvider>
  );
};

export const formDecorator = [
  (story: any) => {
    const methods = useForm();

    return (
      <AppContextProvider>
        <FormProvider {...methods}>{story()}</FormProvider>
      </AppContextProvider>
    );
  },
];
