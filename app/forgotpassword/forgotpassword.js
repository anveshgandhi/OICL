var app;
(function (app) {
    var ForgotPasswordController = (function () {
        function ForgotPasswordController() {
            var _this = this;
            this.requestNewPassword = function (isValid, reg) {
                if (isValid) {
                    window.location.href = "/login.html";
                }
                else {
                    _this.isSubmitted = true;
                }
            };
        }
        return ForgotPasswordController;
    }());
    app.ForgotPasswordController = ForgotPasswordController;
    angular.module("oiclApp").controller("ForgotPasswordController", ForgotPasswordController);
})(app || (app = {}));
//# sourceMappingURL=forgotpassword.js.map