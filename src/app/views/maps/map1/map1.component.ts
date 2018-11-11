import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as $ from 'jquery';
interface Patient {
  id:any;
  NIC:any,
  name:any;
  // address:any;
  gender:any;
  distric:any;
  date:any;
  level:any;
  ward:any;
  wardChanges:any;
  priority:any;
  comments:any;
}
@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.scss']
})
export class Map1Component implements OnInit {
  fittedWard:any;
  fittedWard1:any;
  dropdownText:any;
ward1 = [{
    'avalability': 70,
    'current': 60
}];
ward2 = [{
    'avalability': 70,
    'current': 65
}];
ward3 = [{
    'avalability': 70,
    'current': 80
}];
  public map: any = { lat: 51.678418, lng: 7.809007 };
  patients:Patient[];
  id:any
  NIC:any;
  name:any;
  // address:any;
  gender:any;
  distric:any;
  date:any;
  level:any;
  ward:any;
  priority:any;
  comments:any;
  title:any;
buttonTitle:any;
indexPatient:any;
removeId:any;
statusRemove=false;
fittedWardBadgeVisibility:string;
patientWardType:string;
  constructor(private http: HttpClient) { 
  this.patientWardType="Free Ward";
    this.title="New Patient";
    this.buttonTitle="Assign Patient";
    this.dropdownText="Current Level";
    this.fittedWardBadgeVisibility='hidden';
  }
  ngOnInit() {
    this.getPatients();
  }
findWard(level:string,ward1:any[],ward2:any[],ward3:any[]){
  
  var priyority;
  var actualWard;
    var tempWard;
    if (level == 'Level 1') {
        tempWard = "Ward 1";
      priyority='Low';
    }
    if (level == 'Level 2') {
        tempWard = "Ward 2";
      priyority='Medium';
    }
    if (level == 'Level 3') {
        tempWard = "Ward 3";
      priyority='High';
    }
  actualWard=tempWard;
    if (tempWard == 'Ward 1') {

        if (ward1[0].current + 1 > ward1[0].avalability) {
            tempWard = "Ward 2";
        }
    }
    if (tempWard == 'Ward 2') {
        if (ward2[0].current + 1 > ward2[0].avalability) {
            tempWard = "Ward 3";
        }
    }
    if (tempWard == 'Ward 3') {
        var min;
        if (ward3[0].current + 1 > ward3[0].avalability) {

            min = Math.min(ward1[0].current, ward2[0].current, ward3[0].current);
            if (min == ward1[0].current) {
                tempWard = "Ward 1";
            }
            if (min == ward2[0].current) {
                tempWard = "Ward 2";
            }
            if (min == ward3[0].current) {
                tempWard = "Ward 3";
            }



        }
    }

return tempWard+"-"+priyority+"-"+actualWard;
}

  getPatients() {
    this.http.get('http://127.0.0.1:3000/api/patient/getAll')
      .subscribe(
        (data: any) => {
          console.log("an init works--> " + JSON.stringify(data));
          this.patients = data.data;
         
        }
      );
  }
  onCreate(){
    let currentTime = new Date()

    console.log(this.name+" ***");
    this.id=(currentTime.getFullYear().toString().substring(2))+this.NIC;
    console.log(this.id);
    let formData= {
      "id":this.id,
      "NIC": this.NIC,
      // "address":this.address,
      "comments": this.comments,
      "wardChanges":this.fittedWard1,
      "date": this.date,
      "distric": this.distric,
      "gender": this.gender,
      "level": this.level,
      "name": this.name,
      "priority": this.priority,
      "ward": this.ward
    };


    this.http.post('http://127.0.0.1:3000/api/patient/new', formData).subscribe(
      (data: any) => {
        console.log(data);
        this.getPatients();
      });
        
      this.launch_toast2();
    // this.patientrServices.onCreatePatient(this.id,this.name,this.address,this.gender,this.distric,this.date,this.level,this.ward,this.priority,this.comments);
  }
  onUpdate(){
    let updateData= {
      "NIC": this.NIC,
      // "address":this.address,
      "comments": this.comments,
      "date": this.date,
      "distric": this.distric,
      "gender": this.gender,
      "id": this.id,
      "level": this.level,
      "name": this.name,
      "priority": this.priority,
      "ward": this.ward,
      "wardChanges":this.fittedWard1
    };
    console.log("this.id");
    console.log(this.id);
    this.http.post('http://127.0.0.1:3000/api/patient/update', updateData).subscribe(
      (data: any) => {
        this.getPatients();
        console.log(data);
      }
    )
      this.launch_toast2();
      }
      setInsetTitle(){
        this.title="New Patient";
          }
      setToForm(id:any){
        this.patientWardType='Current Ward';
        this.fittedWardBadgeVisibility='visible';
        console.log(this.patients.length);
        this.buttonTitle="Save Changes";
        this.title="Update Patient";
        for(let i=0;this.patients.length>i;i++){
          if(this.patients[i].id==id){
            console.log("ok OK");
            this.id=this.patients[i].id;
        this.name=this.patients[i].name;
        this.NIC=this.patients[i].NIC,
        // this.address=this.patients[i].address;
        this.gender=this.patients[i].gender;
        this.distric=this.patients[i].distric;
        this.date=this.patients[i].date;
        this.level=this.patients[i].level;
        this.ward=this.patients[i].ward;
        this.priority=this.patients[i].priority;
        this.comments=this.patients[i].comments;
        this.fittedWard = this.patients[i].ward;
        this.fittedWard1 = this.patients[i].wardChanges;
        
          }

        }

      }
      onRemove(){
        // this.patientrServices.removePatient(this.removeIndex);
        this.http.post('http://127.0.0.1:3000/api/patient/remove' , {'patient_id':this.removeId}).subscribe(
          (data: any[]) => {
            console.log(data);
            this.getPatients();
    
    
          }
    
        );
    
      }
      onRemoveIndex(id:any){
        this.removeId=id;
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

    drop(value:string){
  
      console.log("drop");
      this.dropdownText=value;
      
      if(value!='parent'){
        this.level=value;

     this.fittedWard= (this.findWard(this.dropdownText,this.ward1,this.ward2,this.ward3)).split('-')[0];
     this.fittedWard1=(this.findWard(this.dropdownText,this.ward1,this.ward2,this.ward3)).split('-')[2];
    this.fittedWardBadgeVisibility='visible';
    }else{
      this.fittedWardBadgeVisibility='hidden'; 
    }
      document.getElementById("dd").classList.toggle("show");
    }
}
