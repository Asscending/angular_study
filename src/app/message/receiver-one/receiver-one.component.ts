import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/service/message-service.service';

@Component({
  selector: 'app-receiver-one',
  templateUrl: './receiver-one.component.html',
  styleUrls: ['./receiver-one.component.css']
})
export class ReceiverOneComponent implements OnInit {

  constructor(messageService : MessageServiceService) {
    messageService.messageTransfer.subscribe((message)=>{
      this.receiveMessage = message;
    })
  }

  receiveMessage : string;

  ngOnInit(): void {
  }

}
