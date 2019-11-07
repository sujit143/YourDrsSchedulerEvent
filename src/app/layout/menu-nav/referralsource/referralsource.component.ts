import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-referralsource',
    templateUrl: './referralsource.component.html',
    styleUrls: ['./referralsource.component.scss']
})
export class ReferralsourceComponent implements OnInit {

    @Output() documentclick = new EventEmitter();
    @Output() appointmentclickp = new EventEmitter();

    resourcedetails: FormGroup;
    sourcer: string;
    ssource: string;


    constructor(private modalService: NgbModal, private fb: FormBuilder) { }

    ngOnInit() {
        this.resourcedetails = this.fb.group({
            sourcer: new FormControl(),
            smember: new FormControl()
        });
    }
    openview(contentz) {
        this.modalService.open(contentz, { size: 'lg' });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    opensearch(content) {
        this.modalService.open(content, { size: 'lg' });
    }

    nextDocuments(){
        this.documentclick.emit();
    }

    previousAppoinmtment(){
        this.appointmentclickp.emit();
    }
}
