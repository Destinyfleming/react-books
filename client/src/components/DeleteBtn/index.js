import React from "react";

function Btn(props) {
  return (
    <button onClick={props.onClick} className="button is-primary">
      Search
    </button>
  );
}

export default Btn;