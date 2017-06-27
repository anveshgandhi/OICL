module app {

    export interface ICustomerEnquiry {
        civilID: string;
        customerCode: string;
        customerName: string;
        chassisNumber: string;
        drivingLicenseNo: string;
        mobileNumber: string;
        companyRegNo: string;
        kTNo: string;
        nationality: string;
    }

    export class CustomerEnquiryController {
        //        public static $inject=["LoginService"]; 
        customerEnquiryModel: ICustomerEnquiry;
        //stateList:Array<IState>;
        isSubmitted: boolean;
        // isSubmitButtonEnabled: boolean;
        // isCivilIDValid:boolean;
        constructor() {
            //this.stateList=regService.getStateList();
            // this.isSubmitButtonEnabled = true;
        }
        customerEnquiryValidate = (isValid: boolean, reg: ICustomerEnquiry) => {
            if (isValid) {
                // if (reg.civilID.length > 0 && reg.customerCode.length > 0 && reg.chassisNumber.length > 0 && reg.drivingLicenseNo.length > 0 && reg.mobileNumber.length > 0 && reg.companyRegNo.length > 0 && reg.kTNo.length > 0) {
                // Hit service and get Data
                //     this.isSubmitButtonEnabled = false;
                // }
                //  window.location.href="new_policy.html";
                else {
                    // this.isSubmitButtonEnabled = true;
                }
            }
            else {
                this.isSubmitted = true;
            }
        }
    }
    angular.module("oiclApp").controller("CustomerEnquiryController", CustomerEnquiryController)
}