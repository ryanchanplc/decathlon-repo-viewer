import { render, waitFor } from '@testing-library/react';
import { createServer, Server } from 'miragejs';
import RepoList from './RepoList';
import { DefaultWrapper } from '../../utils/testUtil';
import { initialState } from '../../context/AppContext';
import { generateRepos } from '../../mock/generate';
import { BASE_URL, REPO_ENDPOINT } from '../../constant/api';

let server: Server;

const data = generateRepos(2);
beforeEach(() => {
  server = createServer({
    routes() {
      this.logging = false;
      this.get(`${BASE_URL}${REPO_ENDPOINT}`, () => ({
        items: data,
        total_count: data.length,
      }));
    },
  });
});

afterEach(() => {
  server.shutdown();
});

const WrappedComponent = () => (
  <DefaultWrapper initialState={initialState}>
    <RepoList />
  </DefaultWrapper>
);

const renderUI = () => render(<WrappedComponent />);

it('should render repo list', async () => {
  const result = renderUI();

  await waitFor(() =>
    expect(result.getByText(data[0].name)).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(result.getByText(data[1].name)).toBeInTheDocument()
  );
});
