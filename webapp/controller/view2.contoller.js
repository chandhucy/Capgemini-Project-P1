sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("app.chandhu77.controller.View2", {
        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onMatch, this);
        },
        onMatch: function (oEvt) {
            var that = this;
            var miningJsonObj = oEvt.mParameters.arguments.id;
            console.log(miningJsonObj)
            var miningObj = JSON.parse(miningJsonObj);
            var oMiningModel = this.getOwnerComponent().getModel('miningModel');
                oMiningModel.setData(miningObj);
           
            var url = "/oMiningSet('" + miningObj.LocationId + "')/mining_to_drill";
            console.log(url);
            var oModel = this.getOwnerComponent().getModel()
            oModel.read(url, {
                success: function (oData, res) {
                    if (res.statusCode === '200' || res.statusText === "OK") {
                        console.log(oData);
                       
                        var oModel1 = that.getOwnerComponent().getModel('drillModel')
                        oModel1.setData(oData);
                        // that.getView().setModel()
                    }
 
                },
                error: function (error) {
                    if (error.statusCode === "404") {
                        console.log(error)
                    }
                }
 
 
            })
 

        }

    });
});