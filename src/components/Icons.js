import React from "react";

export const ChevronRight = ({height=22, className=null, title=null}={}) => (
  <span
    className="icon chevron"
  >
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 12 22">
      <path fillRule="nonzero" d="M0 21a1 1 0 0 1 .307-.697L9.6 11.01.307 1.717A1 1 0 1 1 1.72.303l10 10a1 1 0 0 1 0 1.414l-10 10A1 1 0 0 1 .001 21z"/>
    </svg>
  </span>
);