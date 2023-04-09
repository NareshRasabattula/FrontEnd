import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, 
         HttpHandler,HttpRequest,
        HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ConstantService } from "../../_services/constant.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor{
    constructor(
        private constantService : ConstantService,
    ){}

    intercept(req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {
            const userToken = sessionStorage.getItem("token");
            const modifiedReq = req.clone({
                headers: req.headers.set("Authorization", 'Barrer ${userToken}')
            });
            return next
            .handle(modifiedReq)
            .pipe(catchError(this.handleError.bind(this)));
    }
    
    /*private method to handle jwt token authentication error, if any*/
    private handleError(response: HttpErrorResponse){
      if(!!response.error){
        let errorMessage = "";
        if(!!response.error.message){
            errorMessage = response.error.message.trim();
        }else if(!!response.error.errors && !!response.error.errors[0].detail){
            errorMessage = response.error.errors[0].detail.trim();
        }else if(response.statusText == this.constantService.intSerErr || !response.error.message){
            const newHttpErrorResponse = new HttpErrorResponse({
                error: {
                    error: response.error.error,
                    message: this.constantService.systemError,
                    path: response.error.path,
                    status: response.error.status,
                    timestamp: response.error.timestamp
                },
                headers: response.headers,
                status: response.status,
                statusText: response.statusText,
                url: response.url!
            })
            return throwError(newHttpErrorResponse);
        }
        /* TODO: will be implements once Token validity API is avaliable*/
        switch(errorMessage){
            case "Authentication token is invalid.":
            case "Authentication token has ecpired. Log in again":
            case "JWT token does not begin with Bearer String.":
            break;
            default:
                break;    

        }
      }

      return throwError(response);
    } 
}
        
