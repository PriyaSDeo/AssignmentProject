import React from "react";
import GetInTouch from "./HomePageComponents/GetInTouch.jsx";
import Registration from "./HomePageComponents/Registration";
import HeroSection from "./HomePageComponents/HeroSection.jsx";
import UseCasesSection from "./HomePageComponents/UseCasesSection.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <UseCasesSection />
      <Registration />
      <GetInTouch />
    </>
  );
};
export default HomePage;
