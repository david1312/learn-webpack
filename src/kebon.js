import Heading from "./components/heading/heading";
import KebonImage from "./components/kebon-image/kebon-image";
import React from "react";

const heading = new Heading();
heading.render("Kebon sawi page");

const bodyContent = new KebonImage();
bodyContent.render();
