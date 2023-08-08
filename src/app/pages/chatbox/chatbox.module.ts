import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatboxRoutingModule } from './chatbox-routing.module';
import { ChatboxComponent } from './chatbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ChatboxComponent
  ],
  imports: [
    CommonModule,
    ChatboxRoutingModule,
    FontAwesomeModule
  ],
})
export class ChatboxModule { }
