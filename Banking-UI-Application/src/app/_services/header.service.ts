import { Injectable, Input, Output, EventEmitter } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HeaderService {
    private subject = new BehaviorSubject<String>("");

    publicMessage(pageName: String){
        this.subject.next(pageName);
    }
    
    subscribeMessage(): Observable<String> {
        return this.subject.asObservable();
    }

    clearMessage() {
        this.subject.next("");
    }
}