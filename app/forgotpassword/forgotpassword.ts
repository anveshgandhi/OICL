module app{

    export interface IForgotPassword{
        emailID:string;
    }

    export class ForgotPasswordController {
        
//        public static $inject=["LoginService"]; 

        forgotPasswordModel:IForgotPassword;
        //stateList:Array<IState>;
        isSubmitted:boolean;
        constructor(){
            
            //this.stateList=regService.getStateList();
            
         }

         requestNewPassword=(isValid:boolean,reg:IForgotPassword)=>{
            if(isValid)
            {
                //alert("Inside Valid condition");
                window.location.href="/login.html";
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
    angular.module("oiclApp").controller("ForgotPasswordController",ForgotPasswordController)
}