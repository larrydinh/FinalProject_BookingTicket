import React, { useState, useEffect } from "react";
import PageFooter from "../ReusedComponents/PageFooter";
import Footer from "../ReusedComponents/PageFooter";
import PageHeader from "../ReusedComponents/PageHeader";
// import header from "../ReusedComponents/Header"
export default function Home() {
  return (
    <div>
      <PageHeader />
      <PageFooter />
    </div>
  );
}
