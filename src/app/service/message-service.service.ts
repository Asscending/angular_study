import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private messageSource = new Subject<string>();
  messageTransfer = this.messageSource.asObservable();
  
  constructor() { }

  sendMessage(message:string){
    this.messageSource.next(message);
  }

}
