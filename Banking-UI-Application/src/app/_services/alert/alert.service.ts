import { Injectable } from '@angular/core';
import { Alert, AlertType } from 'src/app/_models/alert';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private  subject = new Subject<Alert>();
  private defaultId = "default-alert";

  constructor() { }

  alert(alert: Alert){
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }
  success(message: string, options?: any){
    this.alert(new Alert({ ...options, type: AlertType.Success, message}));
  }

  error(message: string, options?: any){
    this.alert(new Alert({ ...options, type: AlertType.Error, message}));
  }

  info(message: string, options?: any){
    this.alert(new Alert({ ...options, type: AlertType.Info, message}));
  }

  warn(message: string, options?: any){
    this.alert(new Alert({ ...options, type: AlertType.Warning, message}));
  }

  clear(id = this.defaultId){
    this.subject.next(new Alert({id}));
  }
}
