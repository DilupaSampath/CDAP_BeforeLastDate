import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-research-area',
  templateUrl: './research-area.component.html',
  styleUrls: ['./research-area.component.scss']
})
export class ResearchAreaComponent implements OnInit {
  myStyle: any;
  params: any;
yearArray:any[];
monthArray:any[];
districtArray:any[];
yearArrayNext:any[];
cmpResult:any[];
month1P:any;
month2P:any;
yearP:any;
districtP:any

  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type:string = 'bar'; 
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';
  public chart4Type:string = 'radar';
  public chart5Type:string = 'doughnut';


  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40, 40,34,50,40,50], label: '2015'},
    {data: [28, 80, 40, 69, 36, 37, 110,70,68,70,78,80], label: '2016'},
    {data: [38, 58, 30, 90, 45, 65, 30,70,68,80,90,40], label: '2017'}
  ];
  public chartDatasets1: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40,70,67,80,90,80], label: '2015'},
    {data: [28, 80, 40, 69, 36, 37, 110,80,60,70,80,90], label: '2016'},
    {data: [38, 58, 30, 90, 45, 65, 30,50,46,50,57,60], label: '2017'}

  ];
  public chartDatasets3: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40,70,56,40,59,60], label: '2015'},
    {data: [28, 80, 40, 69, 36, 37, 110,60,70,50,60,90], label: '2016'},
    {data: [38, 58, 30, 90, 45, 65, 30.50,60,70,50,60], label: '2017'}

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

  constructor(private http: HttpClient) {
    this.yearArrayNext=[
      "2018",
      "2019",
      "2020",
      "2021"
        ];
  this.yearArray=[
"2013",
"2014",
"2015",
"2016",
"2017"
  ];
  this.monthArray=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  this.districtArray=[
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Moneragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya"
  ];
  }

  ngOnInit() {

    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': 1 ,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-image': 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9487/particle-bg-frame-1-landscape.jpg")'
      // 'background-color':'#2e3344'
      
    };
    this.params = {
      "particles": {
        "number": {
          "value": 260,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 4,
            "size_min": 0.3,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 100,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 600
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 200,
            "size": 0,
            "duration": 2,
            "opacity": 0,
            "speed": 3
          },
          "repulse": {
            "distance": 400,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
  }
  navigate(id:string){
    
      window.location.hash = "#"+id;
      window.location.hash='';

  }
  compair(){
    console.log(this.month1P);
    console.log(this.month2P);
    console.log(this.districtP);
    console.log(this.yearP);


    this.http.post('http://127.0.0.1:3000/api/algorithm/compairPastData',{
      "district" :this.districtP,
      "month1":this.month1P,
      "month2":this.month1P
    }).subscribe((data: any) => {
      console.log(data.data);
      console.log("data.data oooooooooooooooooooo");
      this.cmpResult = data.data;
    });  
  }
}