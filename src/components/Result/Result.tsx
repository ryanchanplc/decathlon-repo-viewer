import { useContext } from 'react';
import { Typography } from '@material-ui/core';
import ChipWithTooltip from '../ChipWithTooltip/ChipWithTooltip';
import { AppContext, starsTypes, forksTypes } from '../../context/AppContext';
import { SetQueryParams } from '../../context/Actions';

const Result = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  const {
    type,
    language,
    topic,
    keywords,
    license,
    stars,
    forks,
    per_page: perPage,
  } = state.queryParams;

  const handDelete = (value: Record<string, unknown>) => {
    SetQueryParams(dispatch, { ...state.queryParams, ...value });
  };
  return (
    <>
      <Typography variant="body2" component="span">
        <b>{state.repos?.total_count}</b> {'result for '}
      </Typography>
      {type && (
        <ChipWithTooltip
          variant="outlined"
          color="secondary"
          size="small"
          label={type}
          onDelete={() => {
            handDelete({ type: '' });
          }}
        />
      )}
      <Typography variant="body2" component="span">
        {' respository '}
      </Typography>
      {topic && (
        <>
          <Typography variant="body2" component="span">
            {' with topic '}
          </Typography>
          <ChipWithTooltip
            variant="outlined"
            color="secondary"
            size="small"
            label={topic}
            onDelete={() => handDelete({ topic: '' })}
          />
        </>
      )}
      {keywords && (
        <>
          <Typography variant="body2" component="span">
            {' matching '}
            <b>{keywords}</b>
          </Typography>
        </>
      )}
      {language && (
        <>
          <Typography variant="body2" component="span">
            {' written in '}
          </Typography>
          <ChipWithTooltip
            variant="outlined"
            color="secondary"
            size="small"
            label={language}
            onDelete={() => handDelete({ language: '' })}
          />
        </>
      )}
      {license && (
        <>
          <Typography variant="body2" component="span">
            {' with license '}
          </Typography>
          <ChipWithTooltip
            variant="outlined"
            color="secondary"
            size="small"
            label={license.name}
            onDelete={() => handDelete({ license: null })}
          />
        </>
      )}
      {(stars || forks) && (
        <Typography variant="body2" component="span">
          {' that have '}
        </Typography>
      )}
      {stars && (
        <Typography variant="body2" component="span">
          <b>{starsTypes[stars]}</b> stars
        </Typography>
      )}
      {stars && forks && (
        <Typography variant="body2" component="span">
          {' and '}
        </Typography>
      )}
      {forks && (
        <Typography variant="body2" component="span">
          <b>{forksTypes[forks]}</b> forks
        </Typography>
      )}
      {perPage && (
        <Typography variant="body2" component="span">
          (Showing <b> {perPage}</b> per page)
        </Typography>
      )}
    </>
  );
};
export default Result;
