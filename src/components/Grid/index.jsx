import React, { useEffect, useState } from "react";

const Grid = (props) => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setcount(props.children.length);
  }, []);
  return (
    <div
      className={`grid w-full grid-cols-${
        count / props.children.length
      } md:grid-cols-${count}  gap-4`}
    >
      {props.children}
    </div>
  );
};

Grid.defaultProps = {
  elements: [],
};

Grid.propTypes = {};

export default Grid;
