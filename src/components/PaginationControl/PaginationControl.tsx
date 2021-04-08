import React, { useContext } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { AppContext } from '../../context/AppContext';
import { SetQueryParams } from '../../context/Actions';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  })
);

export default function PaginationControl(): JSX.Element {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    SetQueryParams(dispatch, { ...state.queryParams, page: value });
  };

  const totalPage = Math.ceil(
    state.repos?.total_count / state.queryParams.per_page
  );
  return (
    <div className={classes.root}>
      {totalPage !== 0 && (
        <Pagination
          count={totalPage}
          page={state.page}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
