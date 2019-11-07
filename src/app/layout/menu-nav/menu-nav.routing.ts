import { Routes,RouterModule } from "@angular/router";
import { MenuNavComponent } from './menu-nav.component';
import { SchedularComponent } from './schedular/schedular.component';
import { DemographicsComponent } from './demographics/demographics.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AppointmentmemoComponent } from './appointmentmemo/appointmentmemo.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MenusidebarComponent } from './menusidebar/menusidebar.component';
import { ReferralsourceComponent } from './referralsource/referralsource.component';
import { CareteamComponent } from './careteam/careteam.component';
// import { ScheduleResolverService } from './schedular/schedule-resolver.service';

const arr : Routes=[
 //{path:'product1',resolve:{pdata:ProductResolverService},component:Product1Component}
 {path:'',component:MenuNavComponent},
//  {path:'schedule',component:SchedularComponent},
//  {path:'demographics',component:DemographicsComponent},
//  {path:'insurance',component:InsuranceComponent},
//  {path:'appointment', component:AppointmentsComponent},
//  {path:'documents', component:MenusidebarComponent},
//  {path:'referalsource', component:ReferralsourceComponent},
//  {path:'careteam', component:CareteamComponent},
//  {path:'appointmentmemo', component:AppointmentmemoComponent},
];
export const menunavrouting=RouterModule.forChild(arr);
