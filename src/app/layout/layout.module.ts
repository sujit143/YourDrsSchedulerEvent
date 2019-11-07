// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { TranslateModule } from '@ngx-translate/core';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// import { LayoutRoutingModule } from './layout-routing.module';
// import { LayoutComponent } from './layout.component';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
// import { MenuNavComponent } from './menu-nav/menu-nav.component';

// @NgModule({
//     imports: [
//         CommonModule,
//         LayoutRoutingModule,
//         TranslateModule,
//         NgbDropdownModule
//     ],
//     declarations: [LayoutComponent, SidebarComponent, HeaderComponent, MenuNavComponent]
// })
// export class LayoutModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { NgbDropdownModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuNavComponent } from "./menu-nav/menu-nav.component";

import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule, MatCheckboxModule } from "@angular/material";
import { MultiSelectAllModule } from "@syncfusion/ej2-angular-dropdowns";
import { MatExpansionModule } from "@angular/material/expansion";
import { AutoCompleteModule } from "@syncfusion/ej2-angular-dropdowns";
import {
    DatePickerAllModule,
    DateTimePickerAllModule
} from "@syncfusion/ej2-angular-calendars";
import { DatePickerModule } from "@syncfusion/ej2-angular-calendars";
import { ScheduleAllModule } from "@syncfusion/ej2-angular-schedule";
import { PhoneMaskDirective } from "./menu-nav/phone-mask.directive";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MenusidebarComponent } from "./menu-nav/menusidebar/menusidebar.component";

import { MatCardModule } from "@angular/material/card";
import { DemographicsComponent } from "./menu-nav/demographics/demographics.component";
import { AppointmentsComponent } from "./menu-nav/appointments/appointments.component";
import { SchedularComponent } from "./menu-nav/schedular/schedular.component";
import { CareteamComponent } from "./menu-nav/careteam/careteam.component";
import { ReferralsourceComponent } from "./menu-nav/referralsource/referralsource.component";
import { AppointmentmemoComponent } from "./menu-nav/appointmentmemo/appointmentmemo.component";
import { InsuranceComponent } from './menu-nav/insurance/insurance.component';
import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GrowlModule } from 'primeng/primeng';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,

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
        GrowlModule,
        MatProgressSpinnerModule,
        NgxPaginationModule,
        MultiSelectModule


    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        MenuNavComponent,
        PhoneMaskDirective,
        MenusidebarComponent,
        DemographicsComponent,
        CareteamComponent,
        AppointmentsComponent,
        SchedularComponent,
        ReferralsourceComponent,
        AppointmentmemoComponent,
        InsuranceComponent,
    ]
})
export class LayoutModule {}
