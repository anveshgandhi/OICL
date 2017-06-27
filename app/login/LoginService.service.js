var app;
(function (app) {
    var LoginService = (function () {
        function LoginService($http) {
            var _this = this;
            this.$http = $http;
            this.userLoginService = function (reg) {
                return _this.$http.post("", "reg")
                    .success(function (data, status) { })
                    .error(function (data, status) { });
            };
        }
        return LoginService;
    }());
    LoginService.$inject = ["$http"];
    app.LoginService = LoginService;
    angular.module("oiclApp").service("LoginService", LoginService);
})(app || (app = {}));
//# sourceMappingURL=LoginService.service.js.map