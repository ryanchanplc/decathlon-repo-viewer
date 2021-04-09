import { render } from '@testing-library/react';

import RepoTopics, { RepoTopicsProps } from './RepoTopics';

const topics = ['testing', 'testin2'];

const renderUI = (props: RepoTopicsProps) => render(<RepoTopics {...props} />);

it('should render topics', () => {
  const result = renderUI({ topics });

  expect(result.getByText(topics[0])).toBeInTheDocument();
  expect(result.getByText(topics[1])).toBeInTheDocument();
});
