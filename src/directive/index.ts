import type { App } from "vue";

import { hasPerm } from "./permission";

export function setupDirective(app: App<Element>) {
  app.directive("hasPerm", hasPerm);
}
