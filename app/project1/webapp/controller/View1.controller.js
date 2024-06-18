sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("com.ign.project1.controller.View1", {
        onInit: function () {
           
        },

        onSendEmail: function () {
           let oModel = this.getView().getModel();
           let oBindList = oModel.Binding("/sendEmail")
        }
        
    });
});
