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
   }

  ngOnInit() {
    this.buttonColor1='#3a7973';
    this. getNurses();
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
    this.titleShedule="Next Week Working Shedule";
  }
  loadThisWeek(){
    this.titleShedule="This Week Working Shedule";
  }
//   onCreate(){
//     console.log("Nurse added...!"+this.name);
//    this.nursesServices.onCreateNurse(this.name,this.ward,this.assingDate,this.priority);
//    console.log("Nurse added...!");
//  }
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
  console.log("radio1Click");
  this.buttonColor1='#3a7973';
  this.buttonColor2='#2bbbad';
  this.buttonColor3='#2bbbad';
}
radio2Click(){
  console.log("radio2Click");
  this.buttonColor2='#3a7973';
  this.buttonColor1='#2bbbad';
  this.buttonColor3='#2bbbad';

}
radio3Click(){
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
}


