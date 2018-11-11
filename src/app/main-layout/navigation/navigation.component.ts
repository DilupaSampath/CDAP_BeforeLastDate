import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public isOpenChange(): void { 
    console.log('isOpenChange triggered!'); }
  public onHidden(): void { console.log('onHidden triggered!'); }
  public onShown(): void { console.log('OnShown triggered!'); }
  @ViewChild('sidenav') sidenav: ElementRef;

  clicked: boolean;
  wardData:any[];
  ward1pr:any;
  ward2pr:any;
  ward3pr:any;
  constructor(private http: HttpClient) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
    this.getPatientCountGroupByWard();
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  getPatientCountGroupByWard() {

        this.http.get('http://127.0.0.1:3000/api/patient/getPatientCountGroupByWard').subscribe((data: any) => {
          console.log(data.data);
          console.log("ward data group");
          this.wardData = data.data;
          this.http.get('http://127.0.0.1:3000/api/patient/getAll').subscribe((dataP: any) => {
            console.log(dataP.data.length);
            console.log("ward data dataP,length");
            this.ward1pr = Math.round((this.wardData[2].count * 100)/ dataP.data.length) ;
            this.ward2pr = Math.round((this.wardData[0].count * 100)/ dataP.data.length) ;
            this.ward3pr = Math.round((this.wardData[1].count * 100)/ dataP.data.length) ;
            
            console.log("prrrrrrrrrrrrrrrr -->> "+this.ward1pr + " "+ this.ward2pr + " "+this.ward3pr);
          });
      

        });
    
      }
}
