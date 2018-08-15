import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


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

  constructor() {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
