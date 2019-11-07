import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import {
    EventRenderedArgs, ScheduleComponent, MonthService,
    DayService, WeekService, WorkWeekService, EventSettingsModel, ResizeService,
    DragAndDropService,
    GroupModel,
    TimeScaleModel
} from '@syncfusion/ej2-angular-schedule';
import { Schedule } from './schedule';
import { DataService } from '../data.service';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { Internationalization, L10n, Ajax  } from '@syncfusion/ej2-base';
import {MessageService} from 'primeng/components/common/messageservice';


L10n.load({
    'en-US': {
        'schedule': {
            'saveButton': 'Add',
            'cancelButton': 'Cancel',
            'deleteButton': 'Remove',
            'newEvent': 'Schedule An Appoint ment',
        },
    }
  });

@Component({
    selector: 'app-schedular',
    templateUrl: './schedular.component.html',
    styleUrls: ['./schedular.component.scss'],
    providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
    encapsulation: ViewEncapsulation.None,
})
export class SchedularComponent implements OnInit {

    @ViewChild('scheduleObj', { static: false })
    @Input() formValue: any;
    success:boolean=false;
    selectedIndextab = 0;
    public allowMultiple: Boolean = true;
    selectedIndex: number = 0;
    sche: Schedule[] = [];
    arrsche: Schedule[] = [];
    public group: GroupModel = { resources: ['Projects', 'Categories'] };
    public scheduleObj: ScheduleComponent;
   loading:boolean=true;

color = 'primary';
mode = 'indeterminate';
value = 50;

    public data: object[] = [{
        appointmentId: 2,
        title: 'Paris',
        start: new Date(2018, 1, 15, 10, 0),
        end: new Date(2018, 1, 15, 12, 30),
        isMedicalClearanceDone: false,
        Source: 'London',
        Comments: 'Summer vacation planned for outstation.',
        startdatetime: 'Asia/Yekaterinburg',
        enddatetime: 'Asia/Yekaterinburg',
        providerName: 'Dr Capiola David',
        PracticeListId: 81,
        appointmentColor: '#009900',
        appointmentType: 'Initial Evaluation'

    }];

    public temp: string = '<div class="tooltip-wrap">' +
  //'<div class="image ${EventType}"></div>' +
  '<div class="content-area"><div class="name">${title}</></div>' +
  '<div class="city">${providerName}</div>' +
  '<div class="time">From&nbsp;:&nbsp;${startdatetime} </div>' +
  '<div class="time">To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${enddatetime} </div></div></div>';


    public eventSettings: EventSettingsModel = {dataSource: this.data, enableTooltip:true, tooltipTemplate: this.temp};
    public selectedDate: Date = new Date();
    public showQuickInfo: boolean = false;
    public statusFields: Object = { text: 'StatusText', value: 'StatusText' };
    // public StatusData: Object[] = [
    //     { StatusText: 'New', Id: 1 },
    //     { StatusText: 'Requested', Id: 2 },
    //     { StatusText: 'Confirmed', Id: 3 }
    // ];

    public dateParser(data: string) {
        return new Date(data);
    }

    // public onEventRendered(args: EventRenderedArgs): void {
    //     switch (args.data.EventType) {
    //         case 'Requested':
    //             (args.element as HTMLElement).style.backgroundColor = '#F57F17';
    //             break;
    //         case 'Confirmed':
    //             (args.element as HTMLElement).style.backgroundColor = '#7fa900';
    //             break;
    //         case 'New':
    //             (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
    //             break;
    //     }
    // }
    // public onActionBegin(args: { [key: string]: Object }): void {
    //     if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
    //         let data: any;
    //         if (args.requestType === 'eventCreate') {
    //             data = <any>args.data[0];
    //         } else if (args.requestType === 'eventChange') {
    //             data = <any>args.data;
    //         }
    //         if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
    //             args.cancel = true;
    //         }
    //     }
    // }

    // onChange(args: ChangeEventArgs): void {
    //     if (args.checked) {
    //         this.scheduleObj.eventSettings.enableTooltip = true;
    //     } else {
    //         this.scheduleObj.eventSettings.enableTooltip = false;
    //     }
    //     this.scheduleObj.dataBind();
    // }

    // onTemplateChange(args: ChangeEventArgs): void {
    //     if (args.checked) {
    //         this.scheduleObj.eventSettings.tooltipTemplate = this.temp;
    //     } else {
    //         this.scheduleObj.eventSettings.tooltipTemplate = null;
    //     }
    //     this.scheduleObj.dataBind();
    // }
    public timeScale: TimeScaleModel = { enable: true, interval: 60, slotCount: 4,
        majorSlotTemplate: '#majorSlotTemplate',  minorSlotTemplate: '#minorSlotTemplate' };
public instance: Internationalization = new Internationalization();
getMajorTime(date: Date): string {
return this.instance.formatDate(date, { skeleton: 'hm' });
}
getMinorTime(date: Date): string {
return this.instance.formatDate(date, { skeleton: 'ms' }).replace(':00', '');
}

    constructor(private _data: DataService, private MessageService : MessageService) { }

    ngOnInit()
    {
        this.getShcedulerData();
    }

    getShcedulerData()
    {
        console.log("Scheduler Activated!",this.formValue);
        this.selectedDate = new Date(this.formValue);

        this._data.getschedulebyDate(this.formValue.toString()).subscribe(
            (data: any) => {
                this.sche = data["schedulerAppointments"];

                this.arrsche = this.sche;
                console.log('syncfusiondata:', this.sche);
                this.data = this.sche;
            //    this.loading=false;
                this.eventSettings = {
                    dataSource: this.data,
                    fields: {
                        id: 'appointmentId',
                        subject: { name: 'title' },
                        isAllDay: { name: 'isMedicalClearanceDone' },
                        location: { name: 'caseNumber' },
                        description: { name: 'providerName' },
                        startTime: { name: 'start' },
                        endTime: { name: 'end' },
                        startTimezone: { name: 'startdatetime' },
                        endTimezone: { name: 'enddatetime' }
                    }
                };

            }
        );

        console.log("The scheduler date is:", this.selectedDate);

    }
    nextInsurence(){
        this.success=true;
        this.selectedIndextab = +1;
        console.log("Next button clicked!",this.selectedIndextab);
        this.MessageService.add({severity:'success', summary:'Service Message', detail:'Successfully Submitted!'});


    }

    nextAppointment(){
        this.selectedIndextab = +2;
        console.log("Next button clicked!",this.selectedIndextab);
    }

    nextRefferel(){
        this.selectedIndextab = +3;
        console.log("Next button clicked!",this.selectedIndextab);
    }

    nextDocuments(){
        this.selectedIndextab = +4;
        console.log("Next button clicked!",this.selectedIndextab);
    }

    nextCareteam(){
        this.selectedIndextab = +5;
        console.log("Next button clicked!",this.selectedIndextab);
    }

    nextMemo(){
        this.selectedIndextab = +6;
        console.log("Next button clicked!",this.selectedIndextab);
    }

    previousDemographics(){
        this.selectedIndextab = 0;
        console.log("Previous button clicked!",this.selectedIndextab);
    }

    previousInsurance(){
        this.selectedIndextab = 1;
        console.log("Previous button clicked!",this.selectedIndextab);
    }

    previousAppointment(){
        this.selectedIndextab = 2;
        console.log("Previous button clicked!",this.selectedIndextab);
    }

    previousReferal(){
        this.selectedIndextab = 3;
        console.log("Previous button clicked!",this.selectedIndextab);
    }

    previousDocuments(){
        this.selectedIndextab = 4;
        console.log("Previous button clicked!",this.selectedIndextab);
    }

    previousCareteam(){
        this.selectedIndextab = 5;
        console.log("Previous button clicked!",this.selectedIndextab);
    }

}
