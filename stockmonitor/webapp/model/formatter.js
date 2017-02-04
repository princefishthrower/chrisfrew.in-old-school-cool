sap.ui.define([], function() {
	"use strict";

	return {

		formatTitle: function(sStock, sOption, sPrice) {
			return sStock + " - " + sOption + " $" + sPrice;
		}
	};
});