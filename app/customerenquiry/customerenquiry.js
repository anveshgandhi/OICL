var app;
(function (app) {
    var CustomerEnquiryController = (function () {
        function CustomerEnquiryController() {
            var _this = this;
            this.customerEnquiryValidate = function (isValid, reg) {
                if (isValid) {
                }
                else {
                    _this.isSubmitted = true;
                }
            };
        }
        return CustomerEnquiryController;
    }());
    app.CustomerEnquiryController = CustomerEnquiryController;
    angular.module("oiclApp").controller("CustomerEnquiryController", CustomerEnquiryController);
})(app || (app = {}));
//# sourceMappingURL=customerenquiry.js.map