import { HttpMethod } from "@raptor/kernel";
import { type Config } from "@raptor/router";

import indexAction from "../app/http/actions/index.ts";

export default {
  throwNotFound: false,
  routes: [
    {
      name: "index",
      method: HttpMethod.GET,
      pathname: "/",
      handler: indexAction,
    },
    {
      name: "index",
      method: HttpMethod.GET,
      pathname: "/*",
      handler: indexAction,
    },
  ],
} satisfies Config;
