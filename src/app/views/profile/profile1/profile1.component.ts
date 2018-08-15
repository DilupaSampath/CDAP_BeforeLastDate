import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { $ } from '../../../../../node_modules/jquery/dist/jquery';
interface Doctor {
  NIC:string;
  id:string;
  name: string;
  ward: string;
  assingDate: string;
  doctorType: string;
}

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.scss']
})

export class Profile1Component implements OnInit {
  IsClick:any;
  DoctorID:any;
  id:any;
  NIC:any;
  Projects:any[];
doctors:Doctor[];  
name: any;
ward: any;
assingDate: any;
priority: any;
title:any;
buttonTitle:any;
indexDoctro:any;
removeId:any;
statusRemove=false;
doctorType:string;
buttonColor1:string;
buttonColor2:string;
buttonColor3:string;
mongoId:string;

  constructor(private http: HttpClient) {
    // this.doctors= doctorServices.doctors;
    this.title="New Doctor";
    this.buttonTitle="Assign Doctor";
    this.doctorType="Select Doctor Type";
    this.IsClick=false;
    this.buttonColor1='#2bbbad';
    this.buttonColor2='#2bbbad';
    this.buttonColor3='#2bbbad';

   }

  ngOnInit() {    
    this.genarateID('DR','942902069V');
    this.getDoctors();
    this.buttonColor1='#3a7973';
    this.mongoId='';
    // this.doctors= this.doctorServices.doctors;
  }
  getDoctors() {
    this.http.get('http://127.0.0.1:4000/doctorsModel/doctors').subscribe(
      (data: any[]) => {
        console.log("an init works--> " + JSON.stringify(data));
        this.doctors = data;
       
      }
    );
  }
  genarateID(type:any,NIC:any) {
    let currentTime = new Date()
    let id:any;

    console.log(this.name+" ***");
    id=(currentTime.getFullYear().toString().substring(2))+NIC;
    console.log(type+'-'+id);
    return type+'-'+id;
  };

  onCreate(){
    //  console.log("doctor added...!"+this.name);
    // this.doctorServices.onCreateDocter(this.name,this.ward,this.assingDate,this.priority);
    this.DoctorID=this.genarateID('DR',this.NIC);
    let formData = {
      'id':this.DoctorID,
      'NIC':this.NIC,
      'name':this.name,
      'ward':this.ward,
      'assingDate':this.assingDate,
      'doctorType':this.doctorType
    };

    // console.log("doctor added...!");
    this.http.post('http://127.0.0.1:4000/doctorsModel/doctors', formData).subscribe(
      (data: any) => {
        console.log(data);
        this.getDoctors();
      });
        
  }
  onUpdate(){
// this.doctorServices.onUpdateDoctor(this.indexDoctro,this.name,this.ward,this.assingDate,this.priority);
let updateData= {
  'NIC':this.NIC,
  'id':this.id,
  'name': this.name,
  'ward':this.ward,
  'assingDate':this.assingDate,
  'doctorType':this.doctorType
};
console.log(this.mongoId);
this.http.put('http://127.0.0.1:4000/doctorsModel/doctors/'+this.mongoId, updateData, {}).subscribe(
  (data: any) => {
    this.getDoctors();
    console.log(data);
  }
)
this.mongoId='';
  }
  setInsetTitle(){
    this.title="New Doctor";
      }
  setToForm(id:any){
    this.mongoId=id;
    console.log(this.doctors);
        this.buttonTitle="Save Changes";
        this.title="Update Doctor";
        for(let i=0;this.doctors.length>i;i++){
          if(this.doctors[i]['_id']==id){
            console.log("ok OK");
            this.id=this.doctors[i].id;
        this.name=this.doctors[i].name;
        this.NIC=this.doctors[i].NIC,
        // this.gender=this.doctors[i].gender;
        this.assingDate=this.doctors[i].assingDate;
        this.ward=this.doctors[i].ward;
        this.doctorType=this.doctors[i].doctorType;
          }

        }

  }
  onRemove(){
    // this.doctorServices.removeDoctor(this.removeIndex);
    // this.http.post('http://localhost:5000/doctors/', formData).subscribe(
    //   (data: any) => {
     console.log(this.mongoId);
    //     this.getDoctors();});

    this.http.request('DELETE','http://127.0.0.1:4000/doctorsModel/doctors/'+this.mongoId).subscribe(
      (data: any[]) => {
        console.log(data);
        this.getDoctors();


      }

    );
    // this.adminServices.deleteProject(index);
    this.mongoId='';
  }
  onRemoveIndex(id:any){
    this.mongoId = id;
    // this.removeIndex=index;
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
dropDownn(){
  if(!this.IsClick){
    document.getElementById("myDropdown").classList.toggle("show");
  }else{
    document.getElementById("myDropdown").classList.toggle("hide");
  }
  this.IsClick=!this.IsClick;
}
setDoctorTypeNgModel(type:string){
this.doctorType=type;
document.getElementById("myDropdown").classList.toggle("hide");
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

}
