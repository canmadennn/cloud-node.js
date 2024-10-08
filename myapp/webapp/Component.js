sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/ComponentSupport"
], function (UIComponent, ComponentSupport) {
    "use strict";

    return UIComponent.extend("myapp.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            // Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // Initialization code goes here
        }
    });
});
