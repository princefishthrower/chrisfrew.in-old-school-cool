sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/demo/masterdetail/model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, formatter, JSONModel, MessageToast) {
	"use strict";

	var _scroller = null;

	return Controller.extend("sap.ui.demo.masterdetail.controller.StockMonitor", {

		formatter: formatter,

		onInit: function() {
			// user input model - just a stock ticker and  finding model
			var oJSONModel = new JSONModel({stock: "",
											option: "", 
											price: "",
										    note: ""});
			this.getView().setModel(oJSONModel, "alertInput");

			// alert list model
			// oJSONModel = new JSONModel({alerts: []});
			// this.getView().setModel(oJSONModel, "alertList");

			// set on enter event for the stock alert fields
			var that = this;
			this.getView().byId("stockInput").onsapenter = function(e) { 
				that.submit();
			}
			this.getView().byId("optionInput").onsapenter = function(e) { 
				that.submit();
			}
			this.getView().byId("priceInput").onsapenter = function(e) { 
				that.submit();
			}
			this.getView().byId("noteInput").onsapenter = function(e) { 
				that.submit();
			}

			this.updateModel();

		},
		submit: function() {
			var oAlertInputModel = this.getView().getModel("alertInput");
			
			var oAlertListModel = this.getView().getModel("alertList");
			if (oAlertInputModel.getProperty("/stock") === "" || oAlertInputModel.getProperty("/option") === "" || oAlertInputModel.getProperty("/price") === "") {
				MessageToast.show("Fill out all required fields!");
				return;
			}

		    // post the new entry to the backend
		    var that = this;
		    var oJSONModel;
		    $.ajax({
	            url: "setStockAlert.php",
	            type: "POST",
	            data: { sStock: oAlertInputModel.getProperty("/stock"), 
	                    sOption: oAlertInputModel.getProperty("/option"), 
	                    sPrice: oAlertInputModel.getProperty("/price"), 
	                    sNote: oAlertInputModel.getProperty("/note") 
	                },
	            success: function() {
	            	MessageToast.show("Alert set!");
	            	that.updateModel();
				}
	        });
			
		},
		updateModel: function() {
			// get the current list from the backend
			var oJSONModel;
			var that = this;
			$.ajax({
	            url: "getStockAlerts.php",
	            type: "GET",
	            success: function(data) {
	            	oJSONModel = new JSONModel({alerts: JSON.parse(data)});
	            	console.log(data);
					that.getView().setModel(oJSONModel, "alertList");
				}
	        });
		},
		deleteAlert: function(oEvent) {
			var oList = oEvent.getSource(),
			    oItem = oEvent.getParameter("listItem"),
			    sPath = oItem.getBindingContext().getPath();
			
			// put focus back on list after deletion
			oList.attachEventOnce("updateFinish", oList.focus, oList);

			// send delete request to model
			$.ajax({
	            url: "deleteStockAlert.php",
	            type: "POST",
	            data: { sStock: oAlertInputModel.getProperty("/stock"), 
	                    sOption: oAlertInputModel.getProperty("/option"), 
	                    sPrice: oAlertInputModel.getProperty("/price"), 
	                    sNote: oAlertInputModel.getProperty("/note") 
	                },
	            success: function(data) {
	            	oJSONModel = new JSONModel({alerts: JSON.parse(data)});
					that.getView().setModel(oJSONModel, "alertList");
				}
	        });
		}

	});
});