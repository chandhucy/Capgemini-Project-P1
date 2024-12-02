sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (Controller) => {
  "use strict";

  return Controller.extend("app.chandhu77.controller.View1", {
      onInit() {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.initialize();
      }
  });
});