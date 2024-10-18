import { Injectable } from "@angular/core";
@Injectable({
    providedIn: "root"
})

export class EnvService {
    public apiUrl = "http://localhost:8080/auth/v1/cims/";
    public enableDebug = true;
    constructor() {}
}