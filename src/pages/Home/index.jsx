import React from "react";
import { Button } from "../../components/Buttons";
import { MainLayout } from "../../layouts/main";

export const HomePage = () => {
  return (
    <MainLayout>
      <h1 className="font-bold text-4xl">
        This is a starter for{" "}
        <span>Storybook, React, Tailwindcss and Vite</span>
      </h1>
      <h2 className="my-8">
        Run{" "}
        <span className="bg-gray-400 rounded-md py-1 px-3 text-white text-sm">
          yarn storybook
        </span>{" "}
        to run Storybook
      </h2>
      <div className="flex flex-row">
        <Button children={"Primary Button"} />
        <Button color="secondary" children={"Secondary Button"} />
        <Button color="accent" children={"Accent Button"} />
      </div>
    </MainLayout>
  );
};
