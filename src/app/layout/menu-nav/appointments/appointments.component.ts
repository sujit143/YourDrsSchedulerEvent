import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit {

    @Output() referalclick = new EventEmitter();
    @Output() insuranceclickp = new EventEmitter();

    appointmemntNextButtonEvent: boolean = false;
    appointmemntContinueButtonEvent: boolean = false;

    constructor() { }

    ngOnInit() {
    }
    ButtonEvents() {
        this.appointmemntNextButtonEvent = true;
        this.appointmemntContinueButtonEvent = true;

        this.referalclick.emit();

    }

    nextRefferel(){
        this.referalclick.emit();
    }

    previousInsurance(){
        this.insuranceclickp.emit();
    }
}
