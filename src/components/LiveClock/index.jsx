import React, { Fragment } from "react";
import Clock from "react-live-clock";

export default function LiveClock({ timezone, format }) {
  return (
    <Fragment>
      <Clock format={format} timezone={timezone} ticking={true} />
    </Fragment>
  );
}
