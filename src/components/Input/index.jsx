import React from "react";
import PropTypes from "prop-types";
import { states } from "../../states";
import { useSnapshot } from "valtio";

const Input = (props) => {
  const { input } = useSnapshot(states);
  return (
    <input
      {...props}
      onChange={(e) => {
        states.input[props.name] = e.target.value;
      }}
      className={`border-2 px-1 ${props.className} ${props.bordercolor}`}
    />
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  bordercolor: "border-gray-500",
  name: "",
};

// Proptypes
Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  bordercolor: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Input;
