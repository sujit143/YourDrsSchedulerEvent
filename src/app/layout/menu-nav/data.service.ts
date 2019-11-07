import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

@Injectable({
    providedIn: "root"
})
export class DataService {
    urlspec: string = "https://66d4b3cd.ngrok.io/api/Speciality/GetSpecialities";
    urlprac: string = "https://66d4b3cd.ngrok.io/api/Practice/ManageUsers?MemberId=1114";
    urlloc:  string = "https://66d4b3cd.ngrok.io/api/Location/GetPracticeLocationsForCreateUser?PracticeId=81&MemberId=1114";
    urlprov: string = "https://66d4b3cd.ngrok.io/api/Provider/GetLocationProvidersForMultiplePracticeLocations?PracticeId=81&LocationListId=149&MemberId=1114";
    urlsche: string = "https://66d4b3cd.ngrok.io/api/Patient/GetAppointmentsSchedulerDataBeta?LocationListId=&ProviderListId=&SpecialityList=&AppointmentDate=2019/08/30&AppointmentToDate=2019/08/30&SchedulerView='day'&CategorySpecialityId=&SpecialityId=&AppointmentRequestId=&MemberId=1114&PracticeListId=81";
    urlpatient: string = "https://66d4b3cd.ngrok.io/api/Schedular/GetScheduleappointmentMatcingPatients?FirstName=";
    urlscheduleId: string = "http://66d4b3cd.ngrok.io/api/Patient/GetAppointmentsSchedulerDataBeta?LocationListId=&ProviderListId=&SpecialityList=&AppointmentDate=";

    constructor(private _http: HttpClient) { }

    getSpeciality() {
        return this._http.get(this.urlspec);
    }
    getProvider() {
        return this._http.get(this.urlprov);
    }
    getLocation() {
        return this._http.get(this.urlloc);
    }
    getPractice() {
        return this._http.get(this.urlprac);
    }
    getschedule() {
        return this._http.get(this.urlsche);
    }
    getPatient(fname) {
        return this._http.get(this.urlpatient + fname);
    }
    getschedulebyDate(AppointmentDate) {
        return this._http.get(this.urlscheduleId +AppointmentDate +"&AppointmentToDate=&SchedulerView=" + 'day' +"&CategorySpecialityId=&SpecialityId=&AppointmentRequestId=&MemberId=1114&PracticeListId=81" );

    }
}
