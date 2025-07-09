sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/StandardListItem"],
	function (Controller, StandardListItem) {
		"use strict";

		return Controller.extend("com.myorg.myapp.controller.Customers", {
			onInit: function () {
				const oList = this.byId("customersList");

				const oTemplate = new StandardListItem({
					title: {
						path: "CustomerID",
						formatter: this.formatCustomerID.bind(this),
					},
					description: "{CompanyName}",
					info: "{ContactName} ({ContactTitle})",
				});

				oList.bindItems({
					path: "/Customers",
					template: oTemplate,
				});
			},

			formatCustomerID: function (sCustomerID) {
				return sCustomerID; // Just return the ID, styling will be done via CSS
			},
		});
	}
);
