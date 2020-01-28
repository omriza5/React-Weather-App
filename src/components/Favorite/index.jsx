import React, { Fragment } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const style = {
  fontSize: 50,
  color: "yellow"
};

export default function Favorite({ isFavorite, onFavClick }) {
  return (
    <Fragment>
      {isFavorite ? (
        <FavoriteIcon style={style} onClick={e => onFavClick(e)} />
      ) : (
        <FavoriteBorderIcon style={style} onClick={e => onFavClick(e)} />
      )}
    </Fragment>
  );
}
