sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.test.controller.Home", {
		onInit: function () {

		},
		onSnapshot: function (oEvent) {
			// The image is inside oEvent, on the image parameter,
			// let's grab it.
			var sSnapshot = oEvent.getParameter("image");
			// Do something with it!
			// As you see in the demo, you can attach it directly to a src of an Image. 
			// Because it is already a text string it is also easy to POST to a server inside a json message. 
		}
	});
});