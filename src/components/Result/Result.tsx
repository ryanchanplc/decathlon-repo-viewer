import { Typography } from '@material-ui/core';

export interface ResultProps {
  /**
   * search/filtered result count
   */
  resultCount: number;

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
  searchKeyword: string;
}

const Result = (props: ResultProps): JSX.Element => {
  const { resultCount, type, language, topic, searchKeyword } = props;

  return (
    <Typography variant="body2" component="p">
      <b>{resultCount}</b> {'result for '}
      {type && <b>{type}</b>} {'respository '}
      {topic && (
        <>
          {' with topic '}
          <b>{topic}</b>
        </>
      )}
      {searchKeyword && (
        <>
          {' matching '}
          <b>{searchKeyword}</b>
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
