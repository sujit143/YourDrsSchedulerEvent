import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhoneMaskDirective } from './phone-mask.directive';
import { MenusidebarComponent } from './menusidebar/menusidebar.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { CareteamComponent } from './careteam/careteam.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SchedularComponent } from './schedular/schedular.component';
import { ReferralsourceComponent } from './referralsource/referralsource.component';
import { AppointmentmemoComponent } from './appointmentmemo/appointmentmemo.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { MenuNavComponent } from './menu-nav.component';
import { menunavrouting } from './menu-nav.routing';

import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule, MatCheckboxModule } from "@angular/material";
import { MultiSelectAllModule, DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";
import { MatExpansionModule } from "@angular/material/expansion";
import { AutoCompleteModule } from "@syncfusion/ej2-angular-dropdowns";
import {DatePickerAllModule,DateTimePickerAllModule} from "@syncfusion/ej2-angular-calendars";
import { DatePickerModule } from "@syncfusion/ej2-angular-calendars";
import { ScheduleAllModule } from "@syncfusion/ej2-angular-schedule";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { CheckBoxAllModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { GrowlModule } from 'primeng/primeng';


@NgModule({
  declarations:[
    MenuNavComponent,

    SchedularComponent,
    DemographicsComponent,
    PhoneMaskDirective,
    InsuranceComponent,
    AppointmentsComponent,
    ReferralsourceComponent,
    MenusidebarComponent,
    CareteamComponent,
    AppointmentmemoComponent
  ],

  imports:[
    CommonModule,
    menunavrouting,

   MatMenuModule,
        MatIconModule,
        MatTabsModule,
        MatToolbarModule,
        MatCheckboxModule,
        MultiSelectAllModule,
        AutoCompleteModule,
        MatExpansionModule,
        ScheduleAllModule,
        DatePickerModule,
        DatePickerAllModule,
        DateTimePickerAllModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        CheckBoxAllModule,
        MatCardModule,
        DropDownListModule,
        ButtonModule,
        GrowlModule

  ]
})

export class MenuNavModule{}
