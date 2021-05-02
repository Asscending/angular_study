import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/service/message-service.service';

@Component({
  selector: 'app-receiver-two',
  templateUrl: './receiver-two.component.html',
  styleUrls: ['./receiver-two.component.css']
})
export class ReceiverTwoComponent implements OnInit {
  receiveMessage : string;

  constructor(messageService : MessageServiceService) {
    messageService.messageTransfer.subscribe((message)=>{
      this.receiveMessage = message;
    })
  }

  ngOnInit(): void {
  }

}
