import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
  patientCountW:string;
  nextWeekPatients:string;
  nextweekNurses:string;
  availabilityA:string;
  wardTitle:string;
  visibility:string;
ward1:any[];
ward2:any[];
ward3:any[];

  


  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type:string = 'bar';
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';
  public chart4Type:string = 'radar';
  public chart5Type:string = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40,56, 55, 40,30], label: 'High'},
    {data: [28, 80, 40, 69, 36, 37, 110,76, 75, 60,50], label: 'Low'},
    {data: [38, 58, 30, 90, 45, 65, 30,40, 75, 80,90], label: 'Normal'}
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
  public chartLabels2: Array<any> = ['Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  public chartColors:Array<any> = [

  ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }]
    }
  };

  constructor() {
    this.wardTitle='Select Ward to View';
  this.visibility='hidden';
  }

  ngOnInit() {
  }
  public chartType1:string = 'pie';
  
      public chartData1:Array<any> = [30, 50, 20];
      public chartData2:Array<any> = [20, 40, 40];
      public chartData3:Array<any> = [25, 35, 40];
  
      public chartLabels1:Array<any> = ['High', 'Low', 'Medium'];
  
      public chartColors1:Array<any> = [{
          hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
          hoverBorderWidth: 0,
          backgroundColor: ["tomato", "forestgreen", "goldenrod"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
      }];
  
      public chartOptions1:any = {
          responsive: true
      };
      public chartClicked(e: any): void { console.log(e);}
      public chartHovered(e: any): void { console.log(e); }

      onclickWard1(){
        
      }
      clickWard(ward:string){
console.log(ward);
if(ward=='ward1'){
  
  this.wardTitle= 'Ward 1 Next Week';
  this.patientCountW='100';
  this.nextWeekPatients='10';
  this.nextweekNurses='13';
  this.availabilityA='20%';
}
if(ward=='ward2'){
  this.wardTitle= 'Ward 2 Next Week';
  this.patientCountW='80';
  this.nextWeekPatients='12';
  this.nextweekNurses='15';
  this.availabilityA='10%';
}
if(ward=='ward3'){
  this.wardTitle= 'Ward 3 Next Week';
  this.patientCountW='50';
  this.nextWeekPatients='5';
  this.nextweekNurses='8';
  this.availabilityA='34%';
}
this.visibility='visible';
      }
      
}
