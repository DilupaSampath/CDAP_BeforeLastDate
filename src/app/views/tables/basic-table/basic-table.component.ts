import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare let jsPDF;
interface Nurses {
  name: string;
  NIC:string;
  ward: string;
  assingDate: any;
  priority: string;
}
@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})
export class BasicTableComponent implements OnInit {
  currentWard:any;
  newSchedule:any[];
  oldSchedule:any[];
  oldScheduleStatus:any;
  nurses:Nurses[];  
  model;
  name: any;
  NIC:any;
  ward: any;
  assingDate: any;
  priority: any;
  title:any;
  buttonTitle:any;
  indexDoctro:any;
  removeIndex:number;
  statusRemove=false;
  titleShedule:string;
  buttonColor1:string;
  buttonColor2:string;
  buttonColor3:string;
  tabColor1:string;
  tabColor2:string;
  color1:string;
  color2:string;
  constructor(private http: HttpClient) {
    
    this.title="New Nurse";
    this.buttonTitle="Assign Nurse";
    this.titleShedule="Next Week Working Shedule";
    this.buttonColor1='#2bbbad';
    this.buttonColor2='#2bbbad';
    this.buttonColor3='#2bbbad';
    this.tabColor1='#1686ca';
    this.tabColor2='white';
    this.color1='white';
    this.color2='#000000';
    this.oldScheduleStatus='true';
   }

  ngOnInit() {
    this.buttonColor1='#3a7973';
    this. getNurses();
    this.oldScheduleStatus='true';
    // this.generateSchedule();
    this.loadSchedules();
    this.currentWard='w1';
    
  }

  getNurses() {
    this.http.get('http://127.0.0.1:3000/api/nurse/getAll').subscribe(
      (data: any[]) => {
        console.log(data);
        this.nurses = data['data'];
       
      }
    );
  }

  onCreate(){
    //  console.log("doctor added...!"+this.name);
    // this.doctorServices.onCreateDocter(this.name,this.ward,this.assingDate,this.priority);
    // this.DoctorID=this.genarateID('DR',this.NIC);
    let formData = {
      "name":this.name,
      "NIC":this.NIC,
      "ward": this.ward,
      "priority": this.priority
    };

    // console.log("doctor added...!");
    this.http.post('http://127.0.0.1:3000/api/nurse/new', formData).subscribe(
      (data: any) => {
        console.log(data);
        this.getNurses();
      });
        
  }

  loadNextWeek(){
    this.oldScheduleStatus='false';
    this.titleShedule="Next Week Working Shedule";
  }
  loadThisWeek(){
    this.oldScheduleStatus='true';
    this.titleShedule="This Week Working Shedule";
  }
//   onCreate(){
//     console.log("Nurse added...!"+this.name);
//    this.nursesServices.onCreateNurse(this.name,this.ward,this.assingDate,this.priority);
//    console.log("Nurse added...!");
//  }
loadSchedules(){


  this.http.get('http://127.0.0.1:3000/api/predictions/getSchedules').subscribe(
    (data: any) => {
console.log(data);
this.newSchedule = data.data.newSchedule;
this.oldSchedule = data.data.oldwSchedule;
    });

  // this.nursesServices.onUpdateNurse(this.indexDoctro,this.name,this.ward,this.assingDate,this.priority);
 }



 onUpdate(){
  let formData = {
    "name":this.name,
    "NIC":this.NIC,
    "ward": this.ward,
    "priority": this.priority
  };

  this.http.post('http://127.0.0.1:3000/api/nurse/update',formData ).subscribe(
    (data: any) => {
      console.log(data);
      this.getNurses();
    });

  // this.nursesServices.onUpdateNurse(this.indexDoctro,this.name,this.ward,this.assingDate,this.priority);
 }
 setInsetTitle(){
   this.title="New Nurse";
     }
 setToForm(index:any){
   this.indexDoctro=index;
   this.buttonTitle="Save Changes";
   this.title="Update Nurse";
   this.name=this.nurses[index].name;
   this.NIC=this.nurses[index].NIC;
   this.ward=this.nurses[index].ward;
   this.assingDate=this.nurses[index].assingDate;
   this.priority=this.nurses[index].priority;
   console.log(this.nurses[index].assingDate);

 }
 onRemove(){
  //  this.nursesServices.removeNurse(this.removeIndex);
  console.log(this.NIC);
  this.http.post('http://127.0.0.1:3000/api/nurse/remove',{"nurse_id":this.NIC} ).subscribe(
    (data: any) => {
      console.log(data);
      this.getNurses();
    });
    this.NIC="";

 }
 onRemoveIndex(index:any){
   this.NIC=index;
 }
 launch_toast() {
   var x = document.getElementById("toast")
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
launch_toast2() {
 var x = document.getElementById("toast1")
 x.className = "show";
 setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}
radio1Click(){
  this.currentWard='w1';
  console.log("radio1Click");
  this.buttonColor1='#3a7973';
  this.buttonColor2='#2bbbad';
  this.buttonColor3='#2bbbad';
}
radio2Click(){
  this.currentWard='w2';
  console.log("radio2Click");
  this.buttonColor2='#3a7973';
  this.buttonColor1='#2bbbad';
  this.buttonColor3='#2bbbad';

}
radio3Click(){
  this.currentWard='w3';
  console.log("radio3Click");
  this.buttonColor3='#3a7973';
  this.buttonColor1='#2bbbad';
  this.buttonColor2='#2bbbad';

}
date(){
  
}
clickTab1(){
  this.tabColor1='#1686ca';
  this.tabColor2='white';
  this.color1='white';
  this.color2='#000000';
}
clickTab2(){
  this.tabColor2='#1686ca';
  this.tabColor1='white';
  this.color2='white';
  this.color1='#000000';
}
convert(){
  var item = [{
    "Name" : "XYZ",
    "Age" : "22",
    "Gender" : "Male"
  },
  {
    "Name" : "XYZ",
    "Age" : "22",
    "Gender" : "Male"
  }];
  var doc = new jsPDF();
  var col = ["Details", "Values"];
  var rows = [];

  for(var key in item){
      var temp = [key, item[key]];
      for(var key in item){

        rows.push(temp);
      }

    
  }

  doc.autoTable(col, rows);

  doc.save('Test.pdf');
}

generateSchedule(){
 var outPut = [{"ward1":[{"nurseId":"nurse5","workingStatus":"Allowed"},{"nurseId":"nurse7","workingStatus":"OT"},{"nurseId":"nurse17","workingStatus":"Allowed"},{"nurseId":"nurse12","workingStatus":"Allowed"},{"nurseId":"nurse3","workingStatus":"OT"},{"nurseId":"nurse20","workingStatus":"OT"},{"nurseId":"nurse19","workingStatus":"Allowed"},{"nurseId":"nurse2","workingStatus":"Allowed"}],"ward2":[{"nurseId":"nurse6","workingStatus":"OT"},{"nurseId":"nurse10","workingStatus":"OT"},{"nurseId":"nurse9","workingStatus":"Allowed"},{"nurseId":"nurse18","workingStatus":"OT"},{"nurseId":"nurse16","workingStatus":"Allowed"},{"nurseId":"nurse1","workingStatus":"OT"}],"ward3":[{"nurseId":"nurse14","workingStatus":"Allowed"},{"nurseId":"nurse4","workingStatus":"Allowed"},{"nurseId":"nurse11","workingStatus":"OT"},{"nurseId":"nurse15","workingStatus":"OT"},{"nurseId":"nurse13","workingStatus":"OT"},{"nurseId":"nurse8","workingStatus":"Allowed"}]}];
    // var outPut = [];
    // var arr = ["ward1","ward2","ward3"]
    // var wardCount = 0;
    // for (let key in data[0]){
    //   var wardObj ={};
    //   var weeklyNurseArr = [];
    //   var nurseCount = data[0][arr[wardCount]];
    //   for(let dayCount=0;dayCount<7;dayCount++){
    //     var randNurseArr = [];
    //     var nurseArr = [];
    //     for(let randCount=0;randCount<4;randCount++){
         
    //       var x = Math.floor(Math.random() * Math.floor(data[0][key].length));
          
    //       if(randNurseArr.indexOf(x)>-1)
    //         randCount--;
    //       else{
           
    //         nurseArr.push(data[0][key][x]["nurseId"]);
           
            
    //         randNurseArr.push(x);
    //       }
          
    //     }
        
    //     weeklyNurseArr.push(nurseArr);
         
    //   }
    //   wardObj[key] = weeklyNurseArr;
    //   outPut.push(wardObj);
    //   wardCount++;
    // }
    return(outPut)



}

}


