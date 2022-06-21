import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render();

console.log("oks haha");

if (process.env.NODE_ENV === "production") {
  console.log("prod");
} else if (process.env.NODE_ENV === "development") {
  console.log("dev");
}

helloWorldButton.methodDoesNotExist();
