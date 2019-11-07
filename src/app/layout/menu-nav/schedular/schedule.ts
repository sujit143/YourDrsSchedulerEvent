export class Schedule {
    public constructor (





     // values to display on mouse hover on patient
     public startdatetime:string,
     public enddatetime:string,
     public patientName:string,
     public caseNumber:string,
     public appointmentType:string,
     public caseType:string,
     public appointmentStatus:string,
     public providerName:string,
     public createdByMember:string,
     public createdByDate:string,
     public modifiedByMember:string,
     public modifiedByDate:string,
     public statusTimeline:string,
     public providerTitle:string,
     public patientInsurances:string,
     public appointmentTypeId:number,

     // values to displaty in SyncFusion blocks
      public title:string,
      public start:string,
      public end:string,
      public providerId:Int16Array,
      public episodeId:Int16Array,
      public appointmentId:Int16Array,
      public appointmentStatusId:Int16Array,
      public patientId:Int16Array,
      public appointmentColor:string,
      public memberPracticeLocationId?:Int16Array,
      public practiceLocationId?:Int16Array,
      public memberId?:Int16Array,
      public  locationId?:Int16Array,
      public memberLocationId?:Int16Array

    ){}

    }

