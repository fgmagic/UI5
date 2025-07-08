sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("your.namespace.controller.Main", {
		onInit: function () {
			var oModel = new sap.ui.model.odata.v2.ODataModel(
				"/northwind/"
			);
			this.getView().setModel(oModel);
		},
	});
});
