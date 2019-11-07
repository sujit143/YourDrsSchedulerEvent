import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Member } from '../Member';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { Specaility } from '../speciality';

@Component({
    selector: 'app-careteam',
    templateUrl: './careteam.component.html',
    styleUrls: ['./careteam.component.scss']
})
export class CareteamComponent implements OnInit {
    arrCare: Member[] = [
        new Member('Chalishazar Manasi', 'Active', 'Physician'),
    ];

    @Output() clickmemo = new EventEmitter();
    @Output() clickdocumentp = new EventEmitter();

    //pop up declration
    updatedItem: number;
    member: string = '';
    status: string = '';
    role: string = '';
    closeResult: string;
    arr:Specaility[]=[];
    constructor(private modalService: NgbModal,private _data:DataService) { }


    ngOnInit() {
        this._data.getSpeciality().subscribe(
            (data:Specaility[])=>{
              this.arr=data;
            }

            );
    }

    // Edit modal popup
    openEdit(content, i) {
        console.log(i);
        this.member = this.arrCare[i].member;
        this.status = this.arrCare[i].status;
        this.role = this.arrCare[i].role;

        this.updatedItem = i;

        this.modalService.open(content, { size: 'lg' });
    }


    // add modal popup
    openAdd(content4, i) {
        console.log(i);

        this.updatedItem = i;

        this.modalService.open(content4, { size: 'lg' });
    }


    //add group pop
    addgrp(content5, i) {
        console.log(i);

        this.updatedItem = i;

        this.modalService.open(content5, { size: 'lg' });
    }

    nextMemo(){
        this.clickmemo.emit();
    }

    previousDocuments(){
        this.clickdocumentp.emit();
    }
}
