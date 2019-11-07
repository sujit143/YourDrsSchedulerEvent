import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Patients } from './appointmentmemo';
@Component({
    selector: 'app-appointmentmemo',
    templateUrl: './appointmentmemo.component.html',
    styleUrls: ['./appointmentmemo.component.scss']
})
export class AppointmentmemoComponent implements OnInit {

    @Output() clickcareteamp = new EventEmitter();

    arr: Patients[] = [
        new Patients('Surgery Team', 'Englewood', 'NJ2', 'HEMA', '54 DEAN'),
        new Patients('test team', 'Englewood2', 'NJ4', 'South Dean', '	CPW'),
        new Patients('Consultation Team', 'Englewood3', 'NJ6', 'HEMA', 'PWMG'),
        new Patients('care teams ', 'Englewood4', 'NJ8', '	Englewood Hospital', '54 DEAN')
    ];

    //pop up declration
    updatedItem: number;
    member: string = '';
    status: string = '';
    role: string = '';
    closeResult: string;
    constructor(private modalService: NgbModal) { }

    ngOnInit() {
    }
    openEdit(content, i) {
        console.log(i);
        this.updatedItem = i;

        this.modalService.open(content, { size: 'lg' });
    }
    open(contentz) {
        this.modalService.open(contentz, { size: 'lg' });
    }

    previousCareteam(){
        this.clickcareteamp.emit();
    }

}
