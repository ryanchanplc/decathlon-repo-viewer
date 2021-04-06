import { Typography } from '@material-ui/core';

export interface ResultProps {
  /**
   * search/filtered result count
   */
  count: number;

  /**
   * result repo type
   */
  type: string;

  /**
   * result repo language
   */
  language: string;

  /**
   * result repo type
   */
  topic: string;

  /**
   * searchKeywords
   */
  keywords: string;
}

const Result = (props: ResultProps): JSX.Element => {
  const { count, type, language, topic, keywords } = props;

  return (
    <Typography variant="body2" component="p">
      <b>{count}</b> {'result for '}
      {type && <b>{type}</b>} {'respository '}
      {topic && (
        <>
          {' with topic '}
          <b>{topic}</b>
        </>
      )}
      {keywords && (
        <>
          {' matching '}
          <b>{keywords}</b>
        </>
      )}
      {language && (
        <>
          {' written in '}
          <b>{language}</b>
        </>
      )}
    </Typography>
  );
};

Result.defaultProps = {
  resultCount: 0,
};
export default Result;
