import React from "react";
import PropTypes from "prop-types";

export const Button = (props) => {
  const setColor = () => {
    switch (props.color) {
      case "primary":
        return "bg-blue-600";
      case "secondary":
        return "bg-gray-600";
      case "accent":
        return "bg-green-600";
      default:
        return "bg-blue-600";
    }
  };

  return (
    <button
      className={`px-4 py-3 mx-2 ${setColor()} text-white rounded-md ${
        props.className
      }`}
      onClick={props.onClick}
      size={props.size}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["primary", "secondary", "accent"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  children: "",
  size: "md",
  onClick: null,
  color: "primary",
  className: "",
};
