import { render, waitFor } from '@testing-library/react';
import { createServer, Server } from 'miragejs';
import ProfileCard from './ProfileCard';
import { DefaultWrapper } from '../../utils/testUtil';
import { initialState } from '../../context/AppContext';
import profileDetailsData from '../ProfileDetails/ProfileDetails.test';
import avatarUrl from '../ProfileImage/ProfileImage.test';
import { BASE_URL, PROFILE_ENDPOINT, USER } from '../../constant/api';

let server: Server;

beforeEach(() => {
  server = createServer({
    routes() {
      this.logging = false;
      this.get(`${BASE_URL}${PROFILE_ENDPOINT}/${USER}`, () => ({
        ...profileDetailsData,
        avatar_url: avatarUrl,
      }));
    },
  });
});

afterEach(() => {
  server.shutdown();
});

const WrappedComponent = () => (
  <DefaultWrapper initialState={initialState}>
    <ProfileCard />
  </DefaultWrapper>
);

const renderUI = () => render(<WrappedComponent />);

it('should render card with profile', async () => {
  const result = renderUI();

  await waitFor(() =>
    expect(result.getByText(profileDetailsData.blog)).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(result.getByText(profileDetailsData.description)).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(result.getByText(profileDetailsData.location)).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(result.getByText(profileDetailsData.email)).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(result.getByText(profileDetailsData.name)).toBeInTheDocument()
  );

  await waitFor(() =>
    expect(
      result.getByText(profileDetailsData.twitter_username)
    ).toBeInTheDocument()
  );
  await waitFor(() =>
    expect(result.getByRole('img')).toHaveAttribute('src', avatarUrl)
  );
});
