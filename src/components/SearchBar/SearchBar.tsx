import { useForm, Controller } from 'react-hook-form';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export interface SearchFormInput {
  /**
   * search keywrods
   */
  keywords: string;
}

export interface SearchBarProps {
  /**
   * placeholder for the search text field
   */
  placeholder: string;

  /**
   * will called onSubmit
   */
  onSearch: (data: SearchFormInput) => void;
}

const SearchBox = (props: SearchBarProps): JSX.Element => {
  const { placeholder, onSearch } = props;
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: SearchFormInput) => onSearch(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="searchForm" id="searchForm">
      <Controller
        name="search"
        render={({ field }) => (
          <TextField
            id="search"
            variant="outlined"
            fullWidth
            placeholder={placeholder}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton type="submit" form="searchForm">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...field}
          />
        )}
        control={control}
        defaultValue=""
      />
    </form>
  );
};

export default SearchBox;
