import React, { Fragment } from "react";

export default function ToggleButton({ label, onUnitClick }) {
  return (
    <Fragment>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitches"
          onChange={e => onUnitClick(e)}
        />

        <label className="custom-control-label" htmlFor="customSwitches">
          {label}
        </label>
      </div>
    </Fragment>
  );
}
