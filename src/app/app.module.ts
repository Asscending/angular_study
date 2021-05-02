import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './event/parent/parent.component';
import { ChildComponent } from './event/child/child.component';

import { FormsModule } from '@angular/forms';
import { SenderComponent } from './message/sender/sender.component';
import { ReceiverOneComponent } from './message/receiver-one/receiver-one.component';
import { ReceiverTwoComponent } from './message/receiver-two/receiver-two.component'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SenderComponent,
    ReceiverOneComponent,
    ReceiverTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
