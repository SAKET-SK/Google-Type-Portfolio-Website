// This Component is used to show all the content after the inital search
import React, { useState } from "react";
import AllResultsCard from "./allResultsCard";
import { Content } from "../data/content";
import AccordionComponent from "./accordion";

const All = () => {
  const all = Content;     // Storing all the content in an array ; from (content.js)
  const first = Content.slice(0, 1);   // Extracts the first element as an array
  const theRest = Content.slice(1);    // Extracts elements from index 1 onward

  return (
    <div className="all-results-container">
      <p className="result-count">About {all.length} results (0.67 seconds)</p>
      <AllResultsCard results={first} />
      <AccordionComponent />
      <AllResultsCard results={theRest} />
    </div>
  );
};

export default All;
