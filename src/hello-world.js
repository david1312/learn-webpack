import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import React from "react";

const heading = new Heading();
heading.render("hello world page");

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

console.log("oks haha");

if (process.env.NODE_ENV === "production") {
  console.log("prod");
} else if (process.env.NODE_ENV === "development") {
  console.log("dev");
}

helloWorldButton.methodDoesNotExist();
