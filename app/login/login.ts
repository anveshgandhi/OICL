module app{

    export interface ILogin{
        userid:string;
        password:string;
    }

    export class LoginController {
        
//        public static $inject=["LoginService"]; 

        loginCredModel:ILogin;
        //stateList:Array<IState>;
        isSubmitted:boolean;
        constructor(){
            
            //this.stateList=regService.getStateList();
            
         }

         loginValidate=(isValid:boolean,reg:ILogin)=>{
            if(isValid)
            {
                // console.log(reg.userid, reg.password);
                // alert(reg.userid);
                // alert(reg.password);
                window.location.href="new_policy.html";
                /*
                this.regService.userLoginService(reg).success(function(data,status){
                    window.location.href="/new_policy.html";
                }).error(function(data,status){
                    this.isSubmitted=true;
                });*/
            }
            else
            {
                this.isSubmitted=true;
            }
         }
    }
    angular.module("oiclApp").controller("LoginController",LoginController)
}