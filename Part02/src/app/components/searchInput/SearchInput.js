import React from "react";
import "./SearchInput.scss";

import Icon from "@material-ui/core/Icon";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const SearchInput = () => {
  return (
    <FormControl className={'searchBar'}>
      <InputLabel className={'searchBarLabel'}>Pesquisar ...</InputLabel>
      <Input
        endAdornment={
          <InputAdornment position="end">
            <Icon>search</Icon>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchInput;
