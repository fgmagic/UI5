sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("your.namespace.controller.Main", {
		onProductsPress: function () {
			const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Products");
		},
		onCustomersPress: function () {
			const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Customers");
		},
		onProductsTablePress: function () {
			const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ProductsTable");
		},
	});
});
