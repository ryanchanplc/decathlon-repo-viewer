import { render } from '@testing-library/react';
import Result, { ResultProps } from './Result';

const renderUI = (props: ResultProps) => render(<Result {...props} />);

const count = 0;
const language = 'javascript';
const keywords = 'test';
const type = 'source';
const topic = 'test';
it('should render details', () => {
  const result = renderUI({
    count,
    language,
    type,
    topic,
    keywords,
  });

  expect(result.getByText(count)).toBeInTheDocument();
});
