import React, { useState, useEffect } from "react";
import PageFooter from "../ReusedComponents/PageFooter";
import PageHeader from "../ReusedComponents/PageHeader";
import Carousel from "./Carousel";
import Movies from "./Movies";
import News from "./News";
export default function Home() {
  return (
    <div>
      <PageHeader />
      <Carousel />
      <Movies />
      <News />
      <PageFooter />
    </div>
  );
}
