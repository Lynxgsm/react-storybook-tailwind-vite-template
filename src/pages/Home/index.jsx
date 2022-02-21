import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Grid from "../../components/Grid";
import { MainLayout } from "../../layouts/main";
import Title from "../../components/Title";

export const HomePage = () => {
  return (
    <MainLayout>
      <h1 className="font-bold text-4xl">
        This is a starter for{" "}
        <span>Storybook, React, Tailwindcss and Vite</span>
        <Link to="/about">To About</Link>
      </h1>
      <h2 className="my-8">
        Run{" "}
        <span className="bg-gray-400 rounded-md py-1 px-3 text-white text-sm">
          yarn storybook
        </span>{" "}
        to run Storybook
      </h2>
      <Title type={"h2"}>Hello World</Title>
      <Title type={"h3"}>Hello World</Title>
      <Title type={"h5"}>Hello World</Title>
      <Title type="h6">Hello World</Title>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </MainLayout>
  );
};
