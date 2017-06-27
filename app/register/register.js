var app;
(function (app) {
    var RegisterController = (function () {
        function RegisterController() {
        }
        RegisterController.prototype.registerValidate = function (isValid, reg) {
            if (isValid) {
                if (this.validateCivilID(reg.userid)) {
                    window.location.href = "'/login.html'";
                }
                else {
                    this.isSubmitted = true;
                    this.isCivilIDValid = true;
                }
            }
            else {
                this.isSubmitted = true;
            }
        };
        RegisterController.prototype.validateCivilID = function (userid) {
            this.test = ((userid.substring(0, 1) * 2) + (userid.substring(1, 1) * 1) + (userid.substring(2, 1) * 6) + (userid.substring(3, 1) * 3) + (userid.substring(4, 1) * 7) + (userid.substring(5, 1) * 9) + (userid.substring(6, 1) * 10) + (userid.substring(7, 1) * 5) + (userid.substring(8, 1) * 8) + (userid.substring(9, 1) * 4) + (userid.substring(10, 1) * 2)) % 11;
            if (this.test == userid.substring(11, 1)) {
                return true;
            }
            else {
                return false;
            }
        };
        return RegisterController;
    }());
    app.RegisterController = RegisterController;
    angular.module("oiclApp").controller("RegisterController", RegisterController);
})(app || (app = {}));
//# sourceMappingURL=register.js.map