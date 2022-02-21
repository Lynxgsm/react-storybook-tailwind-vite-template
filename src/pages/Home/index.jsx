import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Grid from "../../components/Grid";
import { MainLayout } from "../../layouts/main";
import Title from "../../components/Title";
import Header from "./Header";
import Engagements from "./Engagements";
import { states } from "../../states";

export const HomePage = () => {
  useEffect(() => {
    states.selectedLink = "home";
  }, []);

  return (
    <MainLayout>
      <Header />
      <Engagements />
    </MainLayout>
  );
};
