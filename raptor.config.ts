import error from "./config/error.ts";
import router from "./config/router.ts";
import kernel from "./config/kernel.ts";
import staticFile from "./config/static.ts";
import validator from "./config/validator.ts";

const config = {
  error,
  router,
  kernel,
  validator,
  static: staticFile,
};

export default config;
