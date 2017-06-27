var app;
(function (app) {
    var ProfileController = (function () {
        function ProfileController() {
            var _this = this;
            this.profileValidate = function (isValid, reg) {
                if (isValid) {
                    window.location.href = "/profile.html";
                }
                else {
                    _this.isSubmitted = true;
                }
            };
        }
        return ProfileController;
    }());
    app.ProfileController = ProfileController;
    angular.module("oiclApp").controller("ProfileController", ProfileController);
})(app || (app = {}));
//# sourceMappingURL=profile.js.map