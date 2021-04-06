import { Controller, useFormContext } from 'react-hook-form';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export interface SearchBarProps {
  /**
   * placeholder for the search text field
   */
  placeholder: string;
}

const SearchBox = (props: SearchBarProps): JSX.Element => {
  const { placeholder } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name="keywords"
      render={({ field }) => (
        <TextField
          id="keywords"
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
  );
};

export default SearchBox;
