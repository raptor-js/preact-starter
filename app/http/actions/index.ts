import TemplateManager from "../../templating/manager.ts";

export default () => {
  const manager = new TemplateManager();

  return manager.view("index.vto");
};
