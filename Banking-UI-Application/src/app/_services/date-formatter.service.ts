import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DateFormatterService {
    writedate(){
        var months= new Array(13);
        months[1]="January";
        months[2]="February";
        months[3]="March";
        months[4]="April";
        months[5]="May";
        months[6]="June";
        months[7]="July";
        months[8]="August";
        months[9]="September";
        months[10]="October";
        months[11]="November";
        months[12]="December";
        var days = new Array(8);
        days[0] = "Sunday";
        days[1] = "Monday";
        days[2] = "Tuesday";
        days[3] = "Wednesday";
        days[4] = "Thursday";
        days[5] = "Friday";
        days[6] = "Saturday";

        var now = new Date();
        var month = months[now.getMonth() + 1];
        var day = days[now.getDay()];
        var date = now.getDate();
        var year = now.getFullYear();

        return date + " " + month + " " + year + ", "+day;


    }
}