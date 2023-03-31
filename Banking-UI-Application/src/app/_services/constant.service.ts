import { Injectable } from "@angular/core";
@Injectable({
    providedIn: "root"
})
export class ConstantService{
 /*String constants*/
 readonly wrongUsername = "Username is required!";
 readonly worngPassword = "Password is required!"
}