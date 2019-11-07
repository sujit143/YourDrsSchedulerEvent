import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
    FormGroup,
    FormControl,
    FormBuilder,
    Validators,
    AbstractControl
} from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Patient } from "../patient";
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";
import { Message } from "primeng/primeng";

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {MessageService} from 'primeng/components/common/messageservice';


@Component({
    selector: "app-demographics",
    templateUrl: "./demographics.component.html",
    styleUrls: ["./demographics.component.scss"]
})
export class DemographicsComponent implements OnInit {


 @Output() insurenceClick = new EventEmitter();

    msgs: Message[] = [];
    @Input() next: boolean;
    checked: boolean = false;
    isloadingbar:boolean=false;
    color = 'primary';
    mode = 'indeterminate';
    value = 50;
    private subscription: Subscription;
    private timer: Observable<any>;
    //  ins:boolean=false;
    displayPatient: Patient;
    Patient = [];
    selectedEntry;
    fname: string;
    createnewcase: boolean = false;

    form: boolean = false;
    body: boolean = true;
    table: boolean = false;
    debouncer: any;

    arr: Patient[] = [];

    radiotab: FormGroup;

    details: FormGroup;
    callerdetails: FormGroup;

    general: FormGroup;
    address: FormGroup;
    contact: FormGroup;
    other: FormGroup;

    isActive: Boolean = false;
    closeResult: string;
    control = new FormControl();

    constructor(
        private messageService: MessageService,
        private modalService: NgbModal,
        private fb: FormBuilder,
        private _data: DataService,
        private _actroute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.setTimer();
        this.radiotab = this.fb.group({
            radiogroup: new FormControl()
        });

        this.details = this.fb.group({
            patientname: new FormControl(
                null,
                Validators.required,
                this.validatePatient.bind(this)
            ),
            patientDOB: new FormControl(null),
            phone: new FormControl("", [
                Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)
            ]),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ])
        });

        this.callerdetails = this.fb.group({
            callername: new FormControl(null, Validators.required),
            phoneno: new FormControl("", [
                Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),
                Validators.required
            ]),
            relation: new FormControl(null)
        });

        this.general = this.fb.group({
            firstname: new FormControl(null, Validators.required),
            middlename: new FormControl(null),
            lastname: new FormControl(null, Validators.required),
            dob: new FormControl(null),
            gender: new FormControl(null, Validators.required)
        });

        this.address = this.fb.group({
            address1: new FormControl(null),
            address2: new FormControl(null),
            zip: new FormControl(null),
            city: new FormControl(null),
            state: new FormControl(null)
        });

        this.contact = this.fb.group({
            home: new FormControl("", [
                Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)
            ]),
            cell: new FormControl("", [
                Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)
            ]),
            workphone: new FormControl("", [
                Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/)
            ]),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            mode: new FormControl(null)
        });

        this.other = this.fb.group({
            ssn: new FormControl(null),
            language: new FormControl(null)
        });
    }

    openform() {
        if (this.details.value.patientname) {
            this._data
                .getPatient(this.details.value.patientname)
                .subscribe((data: any) => {
                    this.arr = data;
                    console.log("Patient Details:", data);
                });

            if (this.details.get("patientname").status === "VALID") {
                this.body = false;
                this.table = true;
                this.form = false;
                console.log("value Exists");
            } else {
                this.body = false;
                this.table = false;
                this.form = true;
            }
        } else {
            var mess1 = " Please complete the mandatory fields to continue ";
            this.msgs = [];
            this.msgs.push({
                severity: "error",
                summary: " Mandatory Fields",
                detail: mess1
            });
        }
        this.general.patchValue({
            firstname: this.details.value.patientname
        });
    }

    public setTimer(){

        // set showloader to true to show loading div on view
        this.isloadingbar   = true;

        this.timer = Observable.timer(2000); // 5000 millisecond means 5 seconds
        this.subscription = this.timer.subscribe(() => {
            // set showloader to false to hide loading div from view after 5 seconds
            this.isloadingbar = false;
        });
      }



    openCallerDetails(){
        if (this.details.value.patientname){
            if(this.details.value.phone){
                if(this.callerdetails.value.callername && this.callerdetails.value.phoneno && this.callerdetails.value.relation){
                        this.table=false;

                        var mess1 = "Successfuly saved";
                        this.msgs = [];
                        this.msgs.push({
                            severity: "success",
                            summary: " Success!",
                            detail: mess1
                    });
                }else{
                    var mess1 = " Please enter caller detailes empty fields";
                    this.msgs = [];
                    this.msgs.push({
                        severity: "error",
                        summary: " Mandatory Fields",
                        detail: mess1
                    });
                }
            }else{
                var mess1 = " Please enter patient phone number";
                this.msgs = [];
                this.msgs.push({
                    severity: "error",
                    summary: " Mandatory Fields",
                    detail: mess1
                });
            }
        }
        else{
            var mess1 = " Please enter patient name";
            this.msgs = [];
            this.msgs.push({
                severity: "error",
                summary: " Mandatory Fields",
                detail: mess1
            });
        }
    }


    //   custom validator for patient
    validatePatient(control: AbstractControl): any {
        clearTimeout(this.debouncer);
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this._data
                    .getPatient(control.value)
                    .subscribe((res: Patient[]) => {
                        if (res.length == 1) {
                            resolve({ nameInUse: true });
                        }
                        resolve(null);
                        console.log("value doesn't exists!");
                    });
            }, 3000);
        });
    }

    addprop1(e) {
        if (e.target.checked) {
            this.checked = true;
        } else {
            this.checked = false;
        }
    }

    onclickpatient() {
        this.form = true;
        this.table = false;

        this.general.patchValue({
            firstname: this.details.value.patientname
        });
    }

    onSelectionChange(item) {
        this.createnewcase = true;
        this.selectedEntry = item;
        console.log("Selected Entry:", this.selectedEntry);
    }

    onclickcase() {
        if(this.radiotab.value.radiogroup){
        this.form = true;
        this.table = false;

        this.general.patchValue({
            firstname: this.selectedEntry.firstName,
            lastname: this.selectedEntry.lastName
        });

        this.contact.patchValue({
            home: this.selectedEntry.telephone
        });
    }
    else{
        var mess1 = " Please complete the mandatory fields to continue ";
        this.msgs = [];
        this.msgs.push({
            severity: "error",
            summary: " Mandatory Fields",
            detail: mess1
        });
    }
}

    onclickcontinue() {
        if(this.radiotab.value.radiogroup){
        this.form = true;
        this.table = false;

        this.general.patchValue({
            firstname: this.selectedEntry.firstName,
            lastname: this.selectedEntry.lastName
        });

        this.contact.patchValue({
            home: this.selectedEntry.telephone
        });
    }
    else{
        var mess1 = " Please complete the mandatory fields to continue ";
        this.msgs = [];
        this.msgs.push({
            severity: "error",
            summary: " Mandatory Fields",
            detail: mess1
        });
    }
}
    onclickprevious() {
        this.table = true;
        this.form = false;
        this.body = false;
    }
    onclickprev() {
        this.body = true;
        this.table = false;
        this.form = false;
    }


    nextInsurence(){
        if(this.general.value.lastname && this.contact.value.home){


            localStorage.setItem('insurance', "true");
         this.insurenceClick.emit();

        }
        else{
            var mess1 = " Please provide lastname and contact details to continue ";
        this.msgs = [];
        this.msgs.push({
            severity: "error",
            summary: " Mandatory Fields",
            detail: mess1
        });
        }
    }
}
