module app {

    export interface IRegister {
        userid: string;
        username: string;
        newpassword: string;
        confirmpassword: string;
        mobileNumber: string;
        otp: string;
        emailAddress: string;
        address: string;
        termsAndConditions: boolean;
    }

    export class RegisterController {

        //        public static $inject=["LoginService"]; 

        registerModel: IRegister;
        //stateList:Array<IState>;
        isSubmitted: boolean;
        isCivilIDValid: boolean;
        test: any;
        constructor() {

            //this.stateList=regService.getStateList();

        }

        registerValidate(isValid: boolean, reg: IRegister) {
            if (isValid) {
                if (this.validateCivilID(reg.userid)) {
                    window.location.href = "'/login.html'";
                } else {
                    this.isSubmitted = true;
                    this.isCivilIDValid = true;
                }

                /*
                this.regService.userLoginService(reg).success(function(data,status){
                    location.href="/login.html";
                }).error(function(data,status){
                    this.isSubmitted=true;
                });*/
            }
            else {
                this.isSubmitted = true;
            }
        }

        validateCivilID(userid: any) {
            this.test = ((userid.substring(0, 1) * 2) + (userid.substring(1, 1) * 1) + (userid.substring(2, 1) * 6) + (userid.substring(3, 1) * 3) + (userid.substring(4, 1) * 7) + (userid.substring(5, 1) * 9) + (userid.substring(6, 1) * 10) + (userid.substring(7, 1) * 5) + (userid.substring(8, 1) * 8) + (userid.substring(9, 1) * 4) + (userid.substring(10, 1) * 2)) % 11;
            if (this.test == userid.substring(11, 1)) {
                return true;
            } else {
                return false;
            }
        }
    }
    angular.module("oiclApp").controller("RegisterController", RegisterController)
}