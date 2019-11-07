import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'app-menusidebar',
    templateUrl: './menusidebar.component.html',
    styleUrls: ['./menusidebar.component.scss']
})
export class MenusidebarComponent implements OnInit {

    @Output() clickcareteam = new EventEmitter();
    @Output() clickreferalp = new EventEmitter();

    documentpage: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.documentpage = this.fb.group({
            provider: new FormControl(null),
            documentType: new FormControl(null),
            creationStartDate: new FormControl(null),
            creationEndDate: new FormControl(null),
            TreatmentStartDate: new FormControl(null),
            TreatmentEndDate: new FormControl(null)
        });
    }

    nextCareteam(){
        this.clickcareteam.emit();
    }

    previousReferal(){
        this.clickreferalp.emit();
    }
}
