var app;
(function (app) {
    var LoginController = (function () {
        function LoginController() {
            var _this = this;
            this.loginValidate = function (isValid, reg) {
                if (isValid) {
                    window.location.href = "new_policy.html";
                }
                else {
                    _this.isSubmitted = true;
                }
            };
        }
        return LoginController;
    }());
    app.LoginController = LoginController;
    angular.module("oiclApp").controller("LoginController", LoginController);
})(app || (app = {}));
//# sourceMappingURL=login.js.map