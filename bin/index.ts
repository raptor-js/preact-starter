import { Router } from "@raptor/router";
import { Kernel } from "@raptor/framework";
import { ErrorHandler } from "@raptor/error";
import { Validator } from "@raptor/validator";
import { StaticHandler } from "@raptor/static";

import routes from "../routes/web.ts";

const validator = new Validator();

const errorHandler = new ErrorHandler({
  env: "development",
});

const staticHandler = new StaticHandler("public");

const app = new Kernel();

app.add(validator.handle);

app.add(staticHandler.handle);

const router = new Router();

router.addRoutes(routes);

app.add(router.handle);

app.catch(errorHandler.handle);

export default {
  fetch: (request: Request) => {
    return app.respond(request);
  },
};
