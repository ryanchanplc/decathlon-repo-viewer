import { render } from '@testing-library/react';
import Result, { ResultProps } from './Result';

const renderUI = (props: ResultProps) => render(<Result {...props} />);

const resultCount = 0;
const language = 'javascript';
const searchKeyword = 'test';
const type = 'source';
const topic = 'test';
it('should render details', () => {
  const result = renderUI({
    resultCount,
    language,
    type,
    topic,
    searchKeyword,
  });

  expect(result.getByText(resultCount)).toBeInTheDocument();
});
