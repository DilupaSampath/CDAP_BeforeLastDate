import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../../config/config';
interface ward {
  low:any,
  med:any,
  hig:any
}
@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {
  patientCountW: string;
  nextWeekPatients: string;
  nextweekNurses: string;
  availabilityA: string;
  wardTitle: string;
  visibility: string;

  allPatientCount: any;
  NewPatientCountL: any;
  oldPatientCount: any;
  wardAvalability: any;
  patientAvalability: any;

  wardWisePrediction:any[];

  ward1: ward;
  ward2: ward;
  ward3: ward;
  currentPredictionAlgorithNo: any;
  nextWeekPatientsCount: any;
  nextWeekAvalabilityCount: any;
  NextWeekFreeNursesCount: any;
  NextWeekFreeBedsCount: any;
  nextweekPatientStatus: any;

  districtTableData: any[];



  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type: string = 'bar';
  public chart2Type: string = 'pie';
  public chart3Type: string = 'line';
  public chart4Type: string = 'radar';
  public chart5Type: string = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    { data: [50, 40, 60, 51, 56, 55, 40, 56, 55, 40, 30], label: 'High' }
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public chartLabels2: Array<any> = ['Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  public chartColors: Array<any> = [

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

  constructor(private http: HttpClient) {
    this.wardTitle = 'Select Ward to View';
    this.visibility = 'hidden';
  }

  ngOnInit() {
    this.getPredictions();
    this.getPatientCounts();
    this.getPatientCountGroupByDistrict();
    this.getPatientDetailsForWards();
    this.getPatientCountsForEachWard();
    this.getNextWeekFreeNurseCount();
  }
  getPatientCounts() {
    var goingCount = 0;
    this.http.get('http://127.0.0.1:3000/api/patient/getLastWeek').subscribe( 
      (data: any) => {
        // var wardSpace = config.ward1Avalability + config.ward2Avalability + config.ward3Avalability;
        var hospitalCount = config.hospitalCount;

        this.patientAvalability = Math.round((parseInt(data.data[0].total) * 100) / (hospitalCount));
        console.log(data.data);
        this.http.get('http://127.0.0.1:3000/api/patient/getAll').subscribe(
          (data2: any) => {
            // var wardSpace = config.ward1Avalability + config.ward2Avalability + config.ward3Avalability;
            // this.patientAvalability = Math.round((parseInt(data.data[0].total) * 100) / (hospitalCount));
            console.log(data2.data);
            data2.data.forEach(element => {
              console.log(element.level);
              if (element.level == "Level 1") {
                goingCount = goingCount + 1;
              }
            });
            this.nextWeekAvalabilityCount = Math.round((goingCount * 100) / (hospitalCount));
            console.log(this.nextWeekAvalabilityCount)
          });
      });
  }
  getPredictions() {

    this.http.get('http://127.0.0.1:3000/api/algorithm/getAll').subscribe((data: any) => {

      data.data.forEach(element => {
        if (element.type == "prediction" && element.status == "true") {
          this.currentPredictionAlgorithNo = element.algorithmNo;
          console.log(element);
          this.http.post('http://127.0.0.1:3000/api/predictions/get', { "algorithmNo": this.currentPredictionAlgorithNo }).subscribe(
            (data1: any) => {

              console.log("this.currentPredictionAlgorithNo");

              console.log(data1.data[0]);
              this.nextWeekPatients = data1.data[0].newCount;
              if (data1.data[0].newCount > data1.data[0].oldCount) {
                this.nextweekPatientStatus = true;
              } else {
                this.nextweekPatientStatus = false;
              }
              return false;
            });

        } else {

        }

      });

    });

  }

  getPatientCountGroupByDistrict() {

    this.http.get('http://127.0.0.1:3000/api/patient/getPatientCountGroupByDistrict').subscribe((data: any) => {
      console.log(data);
      this.districtTableData = data.data;
    });

  }
  public chartType1: string = 'pie';

  public chartData1: Array<any> = [30, 50, 20];
  public chartData2: Array<any> = [20, 40, 40];
  public chartData3: Array<any> = [25, 35, 40];

  public chartLabels1: Array<any> = ['High', 'Low', 'Medium'];

  public chartColors1: Array<any> = [{
    hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
    hoverBorderWidth: 0,
    backgroundColor: ["tomato", "forestgreen", "goldenrod"],
    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
  }];

  public chartOptions1: any = {
    responsive: true
  };
  public chartClicked(e: any): void { console.log(e); }
  public chartHovered(e: any): void { console.log(e); }

  onclickWard1() {

  }

  getPatientDetailsForWards() {
    var w1L1 = 0;
    var w1L2 = 0;
    var w1L3 = 0;

    var w2L1 = 0;
    var w2L2 = 0;
    var w2L3 = 0;

    var w3L1 = 0;
    var w3L2 = 0;
    var w3L3 = 0;

    this.http.get('http://127.0.0.1:3000/api/patient/getAll').subscribe((data: any) => {
      console.log(data);
      // this.districtTableData = data.data;

      data.data.forEach(element => {
        if (element.ward == 'Ward 1') {
          if (element.level == "Level 1") {
            w1L1 = w1L1 + 1;
            console.log("w1L1");
            console.log(w1L1);
            this.ward1.low = w1L1;
          } else if (element.level == "Level 2") {
            w1L2 = w1L2 + 1;
            this.ward1.med = w1L2;
          } else {
            w1L3 = w1L3 + 1;
            this.ward1.hig = w1L3;
          }
        } else if (element.ward == 'Ward 2') {

          if (element.level == "Level 1") {
            w2L1 = w2L1 + 1;
            this.ward2.low = w2L1;
          } else if (element.level == "Level 2") {
            w2L2 = w2L2 + 1;
            this.ward2.med = w2L2;
          } else {
            w2L3 = w2L3 + 1;
            this.ward2.hig = w2L3;
          }
        } else {

          if (element.level == "Level 1") {
            w3L1 = w3L1 + 1;
            this.ward3.hig = w3L1;
          } else if (element.level == "Level 2") {
            w3L2 = w3L2 + 1;
            this.ward3.med = w3L2;
          } else {
            w3L3 = w3L3 + 1;
            this.ward3.hig = w3L3;
          }
        }

      });
    });
    console.log("this.ward1");
    console.log(this.ward1);
    console.log("this.ward2");
    console.log(this.ward2);
    console.log("this.ward3");
    console.log(this.ward3);
  }
  clickWard(ward: string) {
    console.log(ward);
    if (ward == 'ward1') {

      this.wardTitle = 'Ward 1 Next Week';
      this.patientCountW = '100';
      this.nextWeekPatients = '10';
      this.nextweekNurses = '13';
      this.availabilityA = '20%';
    }
    if (ward == 'ward2') {
      this.wardTitle = 'Ward 2 Next Week';
      this.patientCountW = '80';
      this.nextWeekPatients = '12';
      this.nextweekNurses = '15';
      this.availabilityA = '10%';
    }
    if (ward == 'ward3') {
      this.wardTitle = 'Ward 3 Next Week';
      this.patientCountW = '50';
      this.nextWeekPatients = '5';  
      this.nextweekNurses = '8';
      this.availabilityA = '34%';
    }
    this.visibility = 'visible';
  }
getPatientCountsForEachWard(){
  
  this.http.get('http://127.0.0.1:3000/api/patient/getPatientNextWeekPatientCountForEachWard').subscribe((data: any) => {
    console.log(data);
    this.wardWisePrediction = data.data;
  });

}
getNextWeekFreeNurseCount(){
  
  this.http.get('http://127.0.0.1:3000/api/predictions/getNextWeekFreeNurseCount').subscribe((data: any) => {
    console.log(data.data);
    console.log("data.data");
    this.NextWeekFreeNursesCount = data.data.nextweekFreeNurses;
  });   
  
}
}
