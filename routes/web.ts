import { HttpMethod, Route } from "@raptor/router";

import indexAction from "../app/http/actions/index.ts";

const routes = [
  new Route({
    name: "index",
    method: HttpMethod.GET,
    pathname: "/*",
    handler: indexAction,
  }),
];

export default routes;
