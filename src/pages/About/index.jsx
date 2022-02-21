import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import Input from "../../components/Input";
import { MainLayout } from "../../layouts/main";
import { states } from "../../states";

const AboutPage = () => {
  useEffect(() => {
    states.selectedLink = "about";
  }, []);
  return (
    <MainLayout>
      <Input />
    </MainLayout>
  );
};

export default AboutPage;
