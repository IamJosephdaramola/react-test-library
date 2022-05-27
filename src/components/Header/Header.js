import { Fragment } from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <Fragment>
      <h1 className="header" data-testid="header-1">
        {title}
      </h1>
      {/* <h3 title='Header' className="header">Cats</h3> */}
    </Fragment>
  );
}
