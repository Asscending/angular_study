import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMsg = "";

  childMsg = "";

  constructor() { }

  ngOnInit(): void {
    
  }

  onMessage(event){
    console.log(event)
    this.childMsg = event;
  }

}
