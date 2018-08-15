import { Component, OnInit } from '@angular/core';
import { ServiceDoctor } from 'app/services.Doctor';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})

export class Tab1Component implements OnInit {
  count=0;
  buttonColor1: string = '#345465'; //Default Color
  buttonColor2: string = '#345465'; //Default Color
  buttonColor3: string = '#345465'; //Default Color
  buttonColor4: string = '#345465'; //Default Color
  click1 = false;
  click2 = false;
  click3 = false;
  click4 = false;
  leaveList:any[];
  nursesArray:any[];
  constructor(private LeaveList:ServiceDoctor) { 
   this.leaveList=this.LeaveList.leaveList;
    this.nursesArray=[
      [
          ['nurse11', 'Allowed'],
          ['nurse3', 'Allowed'],
          ['nurse14', 'OT'],
          ['nurse4', 'Allowed'],
          ['nurse1', 'OT'],
          ['nurse7', 'Allowed'],
          ['nurse13', 'Allowed'],
          ['nurse9', 'Allowed']
      ],
      [
          ['nurse20', 'OT'],
          ['nurse8', 'Allowed'],
          ['nurse17', 'OT'],
          ['nurse5', 'Allowed'],
          ['nurse18', 'OT'],
          ['nurse12', 'OT'],
          ['nurse2', 'Allowed'],
          ['nurse19', 'OT'],
          ['nurse16', 'OT'],
          ['nurse10', 'OT']
      ],
      [
          ['nurse15', 'OT'],
          ['nurse6', 'Allowed']
      ]
  ];
  }

  ngOnInit() {
  }
  addEvent1(){
    
    if(this.click1){
      this.leaveList = this.LeaveList.leaveList;
    this.buttonColor1 = '#345465'; //desired Color
    this.click1 = !this.click1;

    console.log("clicked");
  }
  else{
    this.leaveList = this.leaveList.slice(0,5);
    this.click1 = !this.click1;
    this.buttonColor1='#00c851';
    console.log("clicked not");
  }
    /*
    YOUR FUNCTION CODE
    */
    
    }
    addEvent2(){
      if(this.click2){
      this.buttonColor2 = '#345465'; //desired Color
      this.click2 = !this.click2;
      this.leaveList = this.LeaveList.leaveList;
    }
    else{
      this.click2 = !this.click2;
      this.buttonColor2='#00c851';
      this.leaveList = this.leaveList.slice(0,10);

    }
      /*
      YOUR FUNCTION CODE
      */
      
      }
      addEvent3(){
        if(this.click3){
        this.buttonColor3 = '#345465'; //desired Color
        this.click3 = !this.click3;
        this.leaveList = this.LeaveList.leaveList;

      }
      else{
        this.click3 = !this.click3;
        this.buttonColor3='#00c851';
        this.leaveList = this.leaveList.slice(0,15);

      }
        /*
        YOUR FUNCTION CODE
        */
        
        }
        addEvent4(){
          if(this.click4){
          this.buttonColor4 = '#345465'; //desired Color
          this.click4 = !this.click4;
          this.leaveList = this.LeaveList.leaveList;
        }
        else{
          this.click4 = !this.click4;
          this.buttonColor4='#00c851';
          this.leaveList = this.LeaveList.leaveList;
        }
          /*
          YOUR FUNCTION CODE
          */
          
          }

          applyLeave(index:any){
            if( this.count<2){
              this.count=this.count+1;
              
                          console.log(index);
                          this.LeaveList.applyLeave(index);
                          this.leaveList = this.LeaveList.leaveList;
            }
            
          }
}
