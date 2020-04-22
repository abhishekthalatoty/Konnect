
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, ViewChild, ChangeDetectorRef, ElementRef, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
import { WebSocketService } from 'src/app/web-socket.service'
import { LoginPageComponent } from '../login-page/login-page.component';
import { GlobalConstants } from './GlobalConstants';

@Component({
  selector: 'message-entry-field',
  templateUrl: './message-entry-field.component.html',
  styleUrls: ['./message-entry-field.component.css'],
  providers: [WebSocketService],
})
export class MessageEntryFieldComponent {
  message = ''
  userName = ''
  constructor(private webSocketService: WebSocketService) { }
  @ViewChild('message') searchInput: ElementRef;
  sendMessage(message) {
    //this.userName = GlobalConstants.userName;
    // console.log('updated username ' + GlobalConstants.userName);
    // console.log('updated message' + this.searchInput.nativeElement.value)
    // this.userName = this.webSocketService.getUserName();
    // console.log(this.userName);
    // console.log(GlobalConstants.userName, GlobalConstants.room);
    var msg = {
      userName: GlobalConstants.userName,
      room: GlobalConstants.room,
      message: this.searchInput.nativeElement.value
    }
    // console.log(msg);
    this.webSocketService.sendMessage(msg);
    this.searchInput.nativeElement.value = '';
  }
  sendK(message)
  {
    var msg = {
      userName: GlobalConstants.userName,
      room: GlobalConstants.room,
      message: 'K.'
    }
    // console.log(msg);
    this.webSocketService.sendMessage(msg);
    this.searchInput.nativeElement.value = '';
  }
  leaveRoom() {
  }
}
