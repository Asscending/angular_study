import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  receive : string;

  @Output()
  childSender = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    
  }

  eventFunction(){
    console.log("click!!")
    this.childSender.emit("welcome to parent")
  }

}
