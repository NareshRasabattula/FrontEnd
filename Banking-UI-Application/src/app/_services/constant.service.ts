import { Injectable } from "@angular/core";
@Injectable({
    providedIn: "root"
})
export class ConstantService{
 /*String constants*/
 readonly wrongUsername = "Username is required!";
 readonly worngPassword = "Password is required!"
 readonly intSerErr = "Internal Server Error";
 readonly systemError = "System Error Occurred. Contact Support";
 readonly unknownError = "Unknown Error";
 readonly serviceFailure = "Error loading page: Service Failure";
 readonly forInternalUse = "FOR INTERNAL USE ONLY";
 readonly navigationLink = "Group > Hong Kong > Consumer Banking > CIMS";
 /* url constants */
 readonly login = "login";
  
 
 /* header constants*/
 readonly mainPageHeader = "Main Page";
  
 
 
}