sap.ui.define([
	"sap/ui/core/mvc/Controller",
	 "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ZTEST_Day2Activities.ZTEST_Day2Activities.controller.S1", {
		onInit: function () {
			var oModel = new JSONModel("model/employee.json");
			this.getView().setModel(oModel, "oModel");
		},
		_getDialog: function () {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("ZTEST_Day2Activities.ZTEST_Day2Activities.Fragment.test",this);
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		
		onOpenDialog: function () {
			this._getDialog().open();
		},
		closeDialog:function() {
		this._getDialog().close();	
		}
	});
});