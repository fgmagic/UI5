sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";

	return Controller.extend("com.myorg.myapp.controller.Customers", {
		onInit: function () {
			var oModel = new sap.ui.model.odata.v2.ODataModel("/northwind/");
			oModel.read("/Customers", {
				success: function (oData) {
					console.log("Products loaded:", oData);
				},
				error: function (oError) {
					console.error("Failed to load products:", oError);
				},
			});
			this.getView().setModel(oModel);
		},
	});
});
