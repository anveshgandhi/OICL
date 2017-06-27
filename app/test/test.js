var app;
(function (app) {
    var TestController = (function () {
        function TestController() {
        }
        return TestController;
    }());
    app.TestController = TestController;
    angular.module("oiclApp").controller("TestController", TestController);
})(app || (app = {}));
//# sourceMappingURL=test.js.map