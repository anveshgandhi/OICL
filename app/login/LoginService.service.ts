module app{
    export class LoginService{

        public static $inject=["$http"];
        constructor(public $http:ng.IHttpService){

        }
        
        userLoginService=(reg:ILogin):ng.IHttpPromise<any>=>{

           return this.$http.post("","reg")
                .success(function(data,status){})
                .error(function(data,status){});
          
        };
    }

    angular.module("oiclApp").service("LoginService",LoginService);
}