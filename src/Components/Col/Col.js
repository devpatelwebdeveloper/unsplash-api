import React from "react";
import "./Col.scss";

export default function Col({ col, offset, children }) {
  const colClass = `Col-${col}`;
  const colOffset = offset ? `Col-offset-${offset}` : "";
  return <div className={`${colClass} ${colOffset}`}>{children}</div>;
}
