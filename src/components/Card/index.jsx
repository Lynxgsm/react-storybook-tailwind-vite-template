import React from "react";
import { Button } from "../Buttons";

const Card = () => {
  return (
    <div className="border-2 p-4 shadow-md">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <p className="text-sm my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil
        fuga repellat odit! Incidunt, corrupti. Ut quos ad ipsum itaque
        blanditiis non rerum! A, debitis fugiat suscipit nesciunt illum at.
      </p>
      <Button wide>Hello</Button>
    </div>
  );
};

export default Card;
