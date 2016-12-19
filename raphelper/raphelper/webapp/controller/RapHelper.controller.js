sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat"
], function(Controller, JSONModel, DateFormat) {
	"use strict";

	var _scroller = null;

	return Controller.extend("sap.ui.demo.masterdetail.controller.RapHelper", {

		onInit: function() {
			var oEnteredTextJSON = {
				textContent: "",
				textLength: 0,
				editContent: "",
				editLength: 0
			};
			var oEnteredTextModel = new JSONModel(oEnteredTextJSON);
			sap.ui.getCore().setModel(oEnteredTextModel, "enteredText");

			// rhymes finding model
			var oJSONModel = new JSONModel({rhymeList: [], 
											lastRhyme: "[write a line]",
											userRhyme: "",
										    userSyllable: null});
			sap.ui.getCore().setModel(oJSONModel, "rhymes");

			// oevent buses
			var oEventBus = sap.ui.getCore().getEventBus();
			oEventBus.subscribe("RapHelper", "addLine", this.addLine, this);
			oEventBus.subscribe("RapHelper", "userRhyme", this.userRhyme, this);
			oEventBus.subscribe("RapHelper", "userSyllable", this.userSyllable, this);
			oEventBus.subscribe("RapHelper", "setComboBoxModel", this.setComboBoxModel, this);
			oEventBus.subscribe("RapHelper", "addLineFromValidator", this.addLineFromValidator, this);
			// on enter listener function for the text input 
			this.getView().byId("textInput").onsapenter = function(e) {
				oEventBus.publish("RapHelper", "addLine");
			};
			// on enter listener function for the user rhyme
			this.getView().byId("userRhyme").onsapenter = function(e) {
				oEventBus.publish("RapHelper", "userRhyme");
			};
			// on enter listener function for the user syllable restrict
			this.getView().byId("userSyllable").onsapenter = function(e) {
				oEventBus.publish("RapHelper", "userSyllable");
			};
		},
		onAfterRendering: function() {
			// set models to various view elements
			var oView = this.getView();
			var oEnteredTextModel = sap.ui.getCore().getModel("enteredText");
			oView.setModel(oEnteredTextModel);
			var oComboBox = oView.byId("rhymesComboBox");
			var oRhymesModel = sap.ui.getCore().getModel("rhymes");
			oComboBox.setModel(oRhymesModel);
			var oInput = oView.byId("userRhyme");
			oInput.setModel(oRhymesModel);
			var oInput = oView.byId("userSyllable");
			oInput.setModel(oRhymesModel);

			// token validator for multiinput
			this.getView().byId("textMultiInput").addValidator(function(args) {
				var oEventBus = sap.ui.getCore().getEventBus();
				oEventBus.publish("RapHelper", "addLineFromValidator", args.text);
			});
		},
		liveInputChange: function() { // changes the syllable count in the edit Input while the user types, also adds green or red depending on matching of syllables
			var iLength = this.syllableCount(sap.ui.getCore().getModel("enteredText").getProperty("/textContent")); // call syllable count function passing the bound value from our model
			sap.ui.getCore().getModel("enteredText").setProperty("/textLength", iLength);
			var oContent = this.getView().byId("enteredLines").getItems();
			if (oContent.length === 0) {
				return; // this means no previous line, we can't change the color
			}
			var sPrevLengthText = oContent[oContent.length - 1].getInfo(); // get the last element in content; this was the last typed line by the user
			console.log(sPrevLengthText);
			var iPrevLength = parseInt(sPrevLengthText.substring(12).replace(")",""));
			var oText = this.getView().byId("syllableText");
			if (iLength === iPrevLength) {
				if (oText.hasStyleClass("red")) {
					oText.removeStyleClass("red");
					oText.addStyleClass("green");
				}
			} else {
				if (oText.hasStyleClass("green")) {
					oText.removeStyleClass("green");
					oText.addStyleClass("red");
				}
			}
		},
		liveInputEditChange: function() { // changes the syllable count in the edit Input while the user types
			var iLength = this.syllableCount(sap.ui.getCore().getModel("enteredText").getProperty("/editContent")); // call syllable count function passing the bound value from our model
			sap.ui.getCore().getModel("enteredText").setProperty("/editLength", iLength);
			var oContent = this.getView().byId("enteredLines").getItems();
		},
		syllableCount: function(sString) {
			sString = sString.toLowerCase();
			if (sString.length === 0) {
                return 0;
            }
            sString = sString.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
                .replace(/^y/, '')
                .match(/[aeiouy]{1,2}/g).length;
            var iCount = sString;
			return iCount;
		},		
		addLine: function(channel, event) {
			var oView = this.getView();
			var sTextContent = sap.ui.getCore().getModel("enteredText").getProperty("/textContent");
			var sLength = sap.ui.getCore().getModel("enteredText").getProperty("/textLength").toString();
			// getting the rhyme the user needs to rhyme with
			var sLastRhyme = sTextContent.split(" ").splice(-1);
			this.getRhymes(sLastRhyme);
			sap.ui.getCore().getModel("enteredText").setProperty("/textContent", ""); // clear the text value
			sap.ui.getCore().getModel("enteredText").setProperty("/textLength", 0); // reset the syllable number
			var oText = this.getView().byId("syllableText");
			if (oText.hasStyleClass("green")) {
				oText.removeStyleClass("green");
				oText.addStyleClass("red");
			}

			// create standard list item
			var oStandardListItem = new sap.m.StandardListItem({title: sTextContent, 
																info: "(Syllables: " + sLength + ")",
																detailPress: this.editLine});

			var oList = oView.byId("enteredLines");
			oList.addItem(oStandardListItem);	
			
			// add the drag and drop functionality to the list (call every time because of new items added)
			var sId = oList.getId()
			var sUlId = "#" + sId + "-listUl";
			$(document).ready(function() {
				$(sUlId).addClass("ui-sortable")
				$(sUlId).sortable({
					connectWith: ".ui-sortable"
				}).disableSelection();
			});

		},
		addLineFromValidator : function(channel, event, sText) {
			// var oTextContent = new sap.m.Text({text: sText});
			// var sTextLength = "(Syllables: " + this.syllableCount(sText) + ")";
			// var oTextLength = new sap.m.Text({text: sTextLength});
			// var oEditButton = new sap.m.Button({icon:"sap-icon://edit", press:[this.editLine, this]})
			// var oDeleteButton = new sap.m.Button({icon:"sap-icon://sys-cancel", press:[this.deleteLine, this]})
			// var oEditLink = new sap.m.Link({text:"Edit", press:[this.editLine, this]});
			// var oDeleteLink = new sap.m.Link({text:"Delete", press:[this.deleteLine, this]});
			// oTextContent.setLayoutData(new sap.ui.layout.GridData({span: "L8 M8 S8"}));
			// oTextLength.setLayoutData(new sap.ui.layout.GridData({span: "L2 M2 S2"}));
			// oEditButton.setLayoutData(new sap.ui.layout.GridData({span: "L1 M1 S1"}));
			// oDeleteButton.setLayoutData(new sap.ui.layout.GridData({span: "L1 M1 S1"}));
			// oEditLink.setLayoutData(new sap.ui.layout.GridData({span: "L1 M1 S1"}));
			// oDeleteLink.setLayoutData(new sap.ui.layout.GridData({span: "L1 M1 S1"}));
			// // subgrid: this is so when we use the delete button, it deletes only the sub grid containing the line
			// var oSubGrid = new sap.ui.layout.Grid({defaultSpan: "L12 M12 S12"});
			// oSubGrid.addContent(oTextContent);
			// oSubGrid.addContent(oTextLength);
			// //oSubGrid.addContent(oEditButton);
			// //oSubGrid.addContent(oDeleteButton);
			// oSubGrid.addContent(oEditLink);
			// oSubGrid.addContent(oDeleteLink);
			// // add the subgrid to the main grid
						// create standard list item
			var sLength = this.syllableCount(sText);
			var oStandardListItem = new sap.m.StandardListItem({title: sText, 
																info: "(Syllables: " + sLength + ")",
																detailPress: this.editLine});

			var oList = this.getView().byId("enteredLines");
			oList.addItem(oStandardListItem);	
			this.getView().byId("textMultiInput").setValue("");
		},
		editLine: function(oEvent) { // creates an input line below the parent line for the user to edit
			oEvent.getSource().setEnabled(false);
			var oGrid = oEvent.getSource().getParent();
			var sText = oGrid.getContent()[0].getText(); // get text of the line they want to edit
			sap.ui.getCore().getModel("enteredText").setProperty("/editContent", sText);// bind taht text to the editContent property of teh model
			var oEditSubGrid = new sap.ui.layout.Grid({defaultSpan: "L12 M12 S12"}); // we create an even deep subgrid under
			var oInput = new sap.m.Input({value:"{/editContent}", valueLiveUpdate:true, liveChange:[this.liveInputEditChange, this]});
			
			var oText = new sap.m.Text("editSyllables", {text:"(Syllables: {/editLength})"});
			oText.addStyleClass("sapUiSmallMargin");
			var oSubmitButton = new sap.m.Button({icon:"sap-icon://accept", press:[this.submitEdit, this]});
			var oCancelButton = new sap.m.Button({icon:"sap-icon://sys-cancel", press:[this.cancelEdit, this]});
			oInput.setLayoutData(new sap.ui.layout.GridData({span: "L8 M8 S8"}));
			oText.setLayoutData(new sap.ui.layout.GridData({span: "L2 M2 S2"}));
			oSubmitButton.setLayoutData(new sap.ui.layout.GridData({span: "L1 M1 S1"}));
			oCancelButton.setLayoutData(new sap.ui.layout.GridData({span: "L1 M1 S1"}));
			oEditSubGrid.addContent(oInput);
			oEditSubGrid.addContent(oText);
			oEditSubGrid.addContent(oSubmitButton); 
			oEditSubGrid.addContent(oCancelButton);
			var oInput = new sap.m.Input({value:sText}); // create an edita
			oGrid.addContent(oEditSubGrid)// place the input right under the line (append the input to the local grid)
		},
		cancelEdit: function(oEvent) {
			oEvent.getSource().getParent().getParent().getContent()[2].setEnabled(true); // set the edit button back to enabled
			oEvent.getSource().getParent().destroy();
		},
		submitEdit: function(oEvent) {
			var sTextContent = oEvent.getSource().getParent().getContent()[0].getValue();
			var sTextCount = oEvent.getSource().getParent().getContent()[1].getText();
			oEvent.getSource().getParent().getParent().getContent()[0].setText(sTextContent); // set text content back the line
			oEvent.getSource().getParent().getParent().getContent()[1].setText(sTextCount); // set text syllable count the line
			oEvent.getSource().getParent().getParent().getContent()[2].setEnabled(true); // set the edit button back to enabled
			oEvent.getSource().getParent().destroy(); // destroy this edit grid 
		},
		deleteLine: function(oEvent) {
			var oList = oEvent.getSource();
		    var oItem = oEvent.getParameter("listItem");
		    oItem.destroy();
			var oContent = this.getView().byId("enteredLines").getItems();
			var sLastRhyme = oContent[oContent.length - 1].getTitle().split(" ").splice(-1);
			sap.ui.getCore().getModel("rhymes").setProperty("/lastRhyme", sLastRhyme); // set the rhyme to the last word of the last list item in the list
			this.getRhymes(sLastRhyme);

			// add the drag and drop functionality to the list (call every time because of new items added)
			var sId = oList.getId()
			var sUlId = "#" + sId + "-listUl";
			$(document).ready(function() {
				$(sUlId).addClass("ui-sortable")
				$(sUlId).sortable({
					connectWith: ".ui-sortable"
				}).disableSelection();
			});
		},
		getRhymes: function(sWord) {
			sap.ui.getCore().getModel("rhymes").setProperty("/lastRhyme", sWord); // set the word in the combobox to this word
			$.ajax({
			  url: "http://rhymebrain.com/talk?function=getRhymes&word=" + sWord,
			  type: "GET",
			  success: function(data) {
				sap.ui.getCore().getModel("rhymes").setProperty("/rhymeList", data);
			  }
			});
		},
		userRhyme: function() {
			var sUserRhyme = sap.ui.getCore().getModel("rhymes").getProperty("/userRhyme");
			console.log(sUserRhyme);
			this.getRhymes(sUserRhyme);
		},
		userSyllable: function() {
			var iUserSyllable = sap.ui.getCore().getModel("rhymes").getProperty("/userSyllable");
			var sUserSyllable = iUserSyllable.toString();
			console.log(this.getView().byId("rhymesComboBox"));
			var oBinding = this.getView().byId("rhymesComboBox").getBinding("items");
			console.log(sUserSyllable);
			var oFilter = new sap.ui.model.Filter("syllables", sap.ui.model.FilterOperator.EQ, sUserSyllable);
			oBinding.filter([oFilter]);
		},
		save: function() {
		    //var elHtml = document.getElementById("enteredLines").innerHTML;
		    var oContent = this.getView().byId("enteredLines").getItems();
		    var sText = "";
		    for (var i = 0; i < oContent.length; i++) {
		    	sText = sText + oContent[i].getTitle(); // actual line
		    	sText = sText + "\t\t\t\t" + oContent[i].getInfo(); // syllable count
		    	sText = sText + "\n";
		    }
		    console.log(sText);
		    if (sText !== "") {
			    var link = document.createElement('a');
			    link.setAttribute('download', "rap_annotations.txt");
			    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(sText));
			    link.click(); 
			}
		},
		saveNoAnno: function() {
		    //var elHtml = document.getElementById("enteredLines").innerHTML;
		    var oContent = this.getView().byId("enteredLines").getItems();
		    var sText = "";
		    for (var i = 0; i < oContent.length; i++) {
		    	sText = sText + oContent[i].getTitle(); // actual written line
		    	sText = sText + "\n";
		    }
		    console.log(sText);
		    if (sText !== "") {
			    var link = document.createElement('a');
			    link.setAttribute('download', "rap_no_annotations.txt");
			    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(sText));
			    link.click(); 
			}
		},
		autoScroll: function() {
			var oContent = this.getView().byId("enteredLines").getItems();
			var iLength = oContent.length * 36; // total height of content
			var iTime = oContent.length * 2500; // two seconds per element
			console.log(iLength);
			console.log(iTime);
			//var oElement = oContent[oContent.length - 1];
			this.getView().byId("lyricsContainer").scrollTo(0, iLength, iTime);
		},
		deleteAll: function() {
			this.getView().byId("enteredLines").destroyItems();
			var oText = this.getView().byId("syllableText");
			if (oText.hasStyleClass("red")) { // also fix the
				oText.removeStyleClass("red");
				oText.addStyleClass("green");
			}
		}
	});
});