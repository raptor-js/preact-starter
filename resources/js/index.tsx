import { ContainerNode, render } from "preact";

import App from "./app.tsx";

(function () {
  const element = document.getElementById("app");

  if (element) {
    render(<App />, document.getElementById("app") as ContainerNode);
  }
})();
