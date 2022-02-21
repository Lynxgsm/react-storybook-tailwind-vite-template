import React from "react";
import PropTypes from "prop-types";

const types = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-md",
};

const Title = (props) => {
  return (
    <p className={`text-gray-900 ${props.className} ${types[props.type]}`}>
      {props.children}
    </p>
  );
};

Title.defaultProps = {
  type: "h1",
  children: "",
  className: "",
};

Title.propTypes = {
  type: PropTypes.oneOf([...Object.keys(types)]),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Title;
