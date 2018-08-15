import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  adminRecord:any[];
  ward:any;
  capacity:any;
  perNurse:any;
  shifts:any;
  priority:any;
  adminLogics:any[];
  name:any;
  type:any;
  status:any;
  Color1:any;
  Color2:any;
  constructor(private http:HttpClient) {
    this.Color1="darkcyan";
    this.Color2="grey";
   }

  ngOnInit() {
    this.getAdminRecords();
    this.getAdminLogic();
  }
  getAdminRecords() {
    this.http.get('http://127.0.0.1:5000/adminRecords/').subscribe(
      (data: any[]) => {
        console.log("an init works--> " + JSON.stringify(data));
        this.adminRecord = data;
       
      }
    );
  }
  getAdminLogic(){
    this.http.get('http://127.0.0.1:5000/adminLogic/').subscribe(
      (data: any[]) => {
        console.log("an init works--> " + JSON.stringify(data));
        this.adminLogics=data;
       
      }
    );
  }

  onCreateRecords(){
console.log("doctor added...!");
    // this.doctorServices.onCreateDocter(this.name,this.ward,this.assingDate,this.priority);
   
    // let formData = {
    //   'ward':this.ward,
    //   'capacity':this.capacity,
    //   'perNurse':this.perNurse,
    //   'shifts':this.shifts,
    //   'priority':this.priority
    // };

   
    let formData = {
      'ward':'2',
      'capacity':'80',
      'perNurse':'15',
      'shifts':'Day/Night',
      'priority':'Medium'
    };


    // console.log("doctor added...!");
    this.http.post('http://127.0.0.1:5000/adminRecords/', formData).subscribe(
      (data: any) => {
        console.log(data);
        this.getAdminRecords();
      });
        
  }



  onCreateLogic(){
    console.log("logic added...!");
        // this.doctorServices.onCreateDocter(this.name,this.ward,this.assingDate,this.priority);
       
        // let formData = {
        //   'ward':this.ward,
        //   'capacity':this.capacity,
        //   'perNurse':this.perNurse,
        //   'shifts':this.shifts,
        //   'priority':this.priority
        // };
       
        let formData = {
          'type':'Optimizing',
          'name':'Iterative',
          'status':'false'
    
        };
        console.log(formData);

        let formData1=
        {
          'leave':[{
                'week': 1,
                'patient': 18,
                'avalable': 0
            },
            {
                'week': 2,
                'patient': 11,
                'avalable': 4
            },
            {
                'week': 3,
                'patient': 13,
                'avalable': 2
            },
            {
                'week': 4,
                'patient': 14,
                'avalable': 1
            },
            {
                'week': 5,
                'patient': 15,
                'avalable': 0
            },
            {
                'week': 6,
                'patient': 16,
                'avalable': 0
            },
            {
                'week': 7,
                'patient': 8,
                'avalable': 7
            },
            {
                'week': 8,
                'patient': 9,
                'avalable': 6
            },
            {
                'week': 9,
                'patient': 15,
                'avalable': 0
            },
            {
                'week': 10,
                'patient': 17,
                'avalable': 0
            },
            {
                'week': 11,
                'patient': 12,
                'avalable': 3
            },
            {
                'week': 12,
                'patient': 11,
                'avalable': 4
            },
            {
                'week': 13,
                'patient': 13,
                'avalable': 2
            },
            {
                'week': 14,
                'patient': 14,
                'avalable': 1
            },
            {
                'week': 15,
                'patient': 16,
                'avalable': 0
            },
            {
                'week': 16,
                'patient': 10,
                'avalable': 5
            },
            {
                'week': 17,
                'patient': 11,
                'avalable': 4
            },
            {
                'week': 18,
                'patient': 18,
                'avalable': 0
            },
            {
                'week': 19,
                'patient': 17,
                'avalable': 0
            },
            {
                'week': 20,
                'patient': 15,
                'avalable': 0
            }]
          };
    
    
        // console.log("doctor added...!");
        this.http.post('http://127.0.0.1:5000/leaveArray/', formData1).subscribe(
          (data: any) => {
            console.log(data);
 
            this.getAdminLogic();
          });
            
      }


      
  onUpdateLogic(){
    // this.doctorServices.onUpdateDoctor(this.indexDoctro,this.name,this.ward,this.assingDate,this.priority);
    let updateData= {
      'type':this.type,
      'name':this.name,
      'status':this.status
    };
    this.http.patch('http://127.0.0.1:5000/adminLogic/', updateData, {}).subscribe(
      (data: any) => {
        this.getAdminLogic();
        console.log(data);
      }
    )
      }
      setLogicModels(type:string,name:string,status:string){
        let otherPart:string
        this.type=type;
        this.name=name;
        this.status=status;
        if(name=='ARIMA Model'){
          otherPart='RNN Model';
        }
        if(name=='RNN Model'){
          otherPart='ARIMA Model';
        }
        if(name=='Genatic'){
          otherPart='Iterative';
        }
        if(name=='Iterative'){
          otherPart='Genatic';
        }
        this.onUpdateLogic();


        this.name=otherPart;
        console.log("this.name--> "+this.name);
        if(status=="true"){
          this.status='false';
        }else{
          this.status='true';
        }

        this.onUpdateLogic();
      }
}
