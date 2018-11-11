import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../../../../config/config';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {
  allPatientCount: any;
  NewPatientCountL: any;
  oldPatientCount: any;
  wardAvalability: any;
  patientAvalability: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPatientCounts();
  }


  getPatientCounts() {

    this.http.get('http://127.0.0.1:3000/api/patient/getLastWeek').subscribe(
      (data: any) => {
        var wardSpace = config.ward1Avalability + config.ward2Avalability + config.ward3Avalability;
        var hospitalCount = config.hospitalCount;

        this.allPatientCount = data.data[0].total;
        this.oldPatientCount = data.data[0].usersCreatedLastWeek;
        this.NewPatientCountL = parseInt(data.data[0].total) - parseInt(data.data[0].usersCreatedLastWeek);
        this.wardAvalability = Math.round((parseInt(data.data[0].total) * 100) / (wardSpace));
        this.patientAvalability = Math.round((parseInt(data.data[0].total) * 100) / (hospitalCount));
        console.log(data.data);
      });
  }
  
}
