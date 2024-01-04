import React from 'react';
import { FilterWrapper } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

export function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilterValue(e.currentTarget.value));
  };
  return (
    <FilterWrapper>
      <TextField
        value={filterValue}
        onChange={onChange}
        placeholder=" "
        id="input-with-icon-textfield"
        label="Find contact by name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </FilterWrapper>
  );
}
