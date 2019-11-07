import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DataService } from "./data.service";
import { Practice } from "./practice";
import { Provider } from "./provider";
import { Location } from "./location";
import { Specaility } from "./speciality";
import * as _ from "lodash";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Patient } from "./patient";
import { Message } from "primeng/primeng";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "app-menu-nav",
    templateUrl: "./menu-nav.component.html",
    styleUrls: ["./menu-nav.component.scss"]
})
export class MenuNavComponent implements OnInit {

    config: any;
  collection = [];

    dateValue: any;

    details: FormGroup;
    arr: Patient[] = [];
    table: boolean = false;
    main: boolean = true;
    msgs: Message[] = [];
    selectedIndex = 0;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _data: DataService,
        private fb: FormBuilder
    ) {

        this.config = {
            currentPage: 1,
            itemsPerPage: 10
};

this.route.queryParamMap
        .map(params => params.get('page'))
        .subscribe(page => this.config.currentPage = page);

for (let i = 1; i <= 100; i++) {
  this.collection.push(`item ${i}`);
}
    }

    schedule:boolean=false;
    myCases = false;
    officeDashboard = false;
    adjusterDashboard = false;

    arrprac: Practice[] = [];
    arraypractice: Practice[] = [];
    public localFields: Object = { text: "name" };
    public localWaterMark: string = "Select practice";
    searchFilter: FormGroup;

    arrloc: Location[] = [];
    arraylocation: Location[] = [];
    public localFields1: Object = { text: "name" };

    public localWaterMark1: string = "Select location";

    arrprov: Provider[] = [];
    public localFields2: Object = { text: "displayName" };
    public localWaterMark2: string = "Select provider";

    arrspec: Specaility[] = [];
    public localFields3: Object = { text: "name" };
    public localWaterMark3: string = "Select speciality";

    public data: string[] = [
        "1 AM",
        "2 AM",
        "3 AM",
        "4 AM",
        "5 AM",
        "6 AM",
        "7 AM",
        "8 AM",
        "9 AM",
        "10 AM",
        "11 AM",
        "12 AM",
        "1 PM",
        "2 PM",
        "3 PM",
        "4 PM",
        "5 PM",
        "6 PM",
        "7 PM",
        "8 PM",
        "9 PM",
        "10 PM",
        "11 PM",
        "12 PM"
    ];


    ngOnInit() {
        this.details = this.fb.group({
            patientname: new FormControl()
        });

        this.searchFilter = this.fb.group({
            practice_name: new FormControl(),
            location_name: new FormControl(),
            provider_name: new FormControl(),
            speciality_name: new FormControl(),
            from_date: new FormControl(),
            scheduler_start_time: new FormControl(),
            scheduler_end_time: new FormControl()
        });

        this._data.getSpeciality().subscribe((data: Specaility[]) => {
            this.arrspec = data;
        });

        this._data.getProvider().subscribe((data: Provider[]) => {
            this.arrprov = data;
        });

        this._data.getLocation().subscribe((data: Location[]) => {
            this.arrloc = data;
            this.arraylocation = this.arrloc["locationList"];
            console.log(this.arraylocation);
        });

        this._data.getPractice().subscribe((data: Practice[]) => {
            this.arrprac = data;
            this.arraypractice = this.arrprac["practiceList"];
            console.log(this.arraypractice);
        });
    }
    keyDownFunction($event) {
        if ($event.keyCode == 13) {
            this._data
                .getPatient(this.details.value.patientname)
                .subscribe((data: any) => {
                    this.arr = data;
                    console.log("Patient Details:", data);
                });
            if (this.details.get("patientname").status == "VALID") {
                this.table = true;

                console.log("value Exists");
            }
        }
    }

    onClickOD() {
        this.officeDashboard = true;
        this.adjusterDashboard = true;
        this.myCases = true;
    }
    onClickAD() {
        this.adjusterDashboard = false;
        this.officeDashboard = false;
        this.myCases = false;
    }
    onClickMC() {
        this.adjusterDashboard = false;
        this.officeDashboard = false;
        this.myCases = false;
    }

    onclickback() {
        this.main = true;
        this.table = false;
    }

    openEdit()

    {
        if (this.searchFilter.value.practice_name) {

         this.schedule=true;


        }
        else {

            var messss = "Please select any one either Practice or Location";
            this.msgs = [];
            this.msgs.push({
                severity: "error",
                summary: "Mandatory Fields",
                detail: messss
            });

            console.log(this.msgs);
        }

    }

    pageChange(newPage: number) {
		this.router.navigate(['menu-nav'], { queryParams: { page: newPage } });
	}
}
