import { Router } from "@raptor/router";
import { ErrorHandler } from "@raptor/error";
import { Validator } from "@raptor/validator";
import { StaticHandler } from "@raptor/static";
import { Context, Kernel } from "@raptor/framework";

import routes from "../routes/web.ts";

const validator = new Validator();

const errorHandler = new ErrorHandler({
  env: "development",
});

const staticHandler = new StaticHandler("public");

const app = new Kernel();

app.add((context: Context, next: CallableFunction) => {
  return validator.handle(context, next);
})

app.add((context: Context, next: CallableFunction) =>
  staticHandler.handle(
    context,
    next,
  )
);

const router = new Router();

router.addRoutes(routes);

app.add((context: Context) => router.handle(context));

app.catch((context: Context) => errorHandler.handle(context));

export default {
  fetch: (request: Request) => {
    return app.respond(request);
  },
};
