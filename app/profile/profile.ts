module app{
    
    export interface IProfile{
        name:string;
        email:string;
        newPassword:string;
        confirmPassword:string;
        aboutMe:string;
        phone:string;
    }
    export class ProfileController{
        profileModel:IProfile;
        isSubmitted:boolean;

        constructor(){}
            profileValidate=(isValid:boolean,reg:IProfile)=>{
                if(isValid){
                    window.location.href="/profile.html";
                }else{
                    this.isSubmitted=true;
                }
            }
    }
    angular.module("oiclApp").controller("ProfileController",ProfileController)
}