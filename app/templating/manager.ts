import vento from "ventojs";
import { Environment } from "ventojs/core/environment.js";

export default class Manager {
  private env: Environment;

  constructor() {
    this.env = vento({
      includes: Deno.cwd() + "/resources/views",
    });
  }

  async view(file: string, data?: Record<string, unknown>): Promise<string> {
    await this.env.cache.clear();

    const view = await this.env.run(file, data);

    return view.content;
  }
}
