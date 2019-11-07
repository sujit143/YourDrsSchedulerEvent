import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Message } from 'primeng/primeng';

@Component({
    selector: "app-insurance",
    templateUrl: "./insurance.component.html",
    styleUrls: ["./insurance.component.scss"]


})
export class InsuranceComponent implements OnInit {

    @Output() appointmentclick = new EventEmitter();
    @Output() demographicsclickp = new EventEmitter();

    msgs: Message[] = [];
    insurance: FormGroup;
    nav: FormGroup;


    constructor(private modalService: NgbModal, private fb: FormBuilder) { }

    ngOnInit() {

        var messs1 = " Successfully submitted ";
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: messs1 });
        console.log("Success Label!");

        this.insurance = this.fb.group({
            control: new FormControl(),
            dateofaccident: new FormControl(),
            zip: new FormControl(),
            accidentcity: new FormControl(),
            accidentstate: new FormControl()
        });

        this.nav = this.fb.group({
            smember: new FormControl()
        });
    }



    nextAppointments() {
        this.appointmentclick.emit();
    }
    previousDemographics() {
        this.demographicsclickp.emit();
    }

}
