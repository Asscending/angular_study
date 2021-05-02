import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from 'src/app/service/message-service.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  sendMessage = "";


  constructor(private messageService : MessageServiceService) { }

  ngOnInit(): void {
  }

  onChange(){
    this.messageService.sendMessage(this.sendMessage);
  }

}
