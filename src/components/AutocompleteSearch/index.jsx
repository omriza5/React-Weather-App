import React, { Fragment } from "react";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";

const useStyles = makeStyles({
  autoComplete: {
    backgroundColor: "white",
    borderRadius: 4
  }
});

export default function AutocompleteSearch({
  data,
  placeHolder,
  onSearch,
  onSearchClick
}) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="search-container">
        <Autocomplete
          id="combo-box"
          options={data}
          getOptionLabel={option => option.LocalizedName}
          className={classes.autoComplete}
          disableOpenOnFocus
          onChange={(event, value) => onSearchClick(event, value)}
          renderInput={params => (
            <TextField
              className={classes.textField}
              {...params}
              placeholder={placeHolder}
              variant="outlined"
              fullWidth
              onChange={(event, value) => onSearch(event, value)}
            />
          )}
        />
      </div>
    </Fragment>
  );
}
