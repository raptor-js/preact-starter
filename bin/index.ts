import { Kernel } from "@raptor/kernel";

import router from "@raptor/router";
import validator from "@raptor/validator";
import errorHandler from "@raptor/error";
import staticFileHandler from "@raptor/static";

import config from "../raptor.config.ts";

const app = new Kernel(config.kernel);

app.use(validator(config.validator));
app.use(staticFileHandler(config.static));
app.use(router(config.router));

app.catch(errorHandler(config.error));

export default {
  fetch: (request: Request) => {
    return app.respond(request);
  },
};
