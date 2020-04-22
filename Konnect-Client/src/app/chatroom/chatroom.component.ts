import { Component, OnInit, Input, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { WebSocketService } from '../web-socket.service';
import { GlobalConstants } from '../message-entry-field/GlobalConstants';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
  providers: [WebSocketService],
  inputs: ['userName', 'room']
})
export class ChatroomComponent implements OnInit {
  displayUsers = false;
  @Input() userName: string;
  @Input() room: string;
  @ViewChild('chatbox') myScrollContainer: ElementRef;
  messages: Array<Message> = [];
  onlineUsers: Array<string> = [];
  constructor(private webSocketService: WebSocketService) { }


  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    this.leaveRoom();
  }

  ngOnInit(): void {
    this.webSocketService.newUser({ userName: GlobalConstants.userName, room: GlobalConstants.room });
    this.webSocketService.newMessage().subscribe(data => { this.messages.push(data); });
    this.webSocketService.welcomeNewUser().subscribe(data => this.messages.push(data));
    this.webSocketService.sendOffUser().subscribe(data => {
      this.onlineUsers = this.onlineUsers.filter(user => user != data.userName);
      console.log(this.onlineUsers);
      this.messages.push(data)
    });
    this.webSocketService.onlineUserList().subscribe(data => {
      this.onlineUsers = data.list;
    });
    this.scrollToBottom();
  }



  leaveRoom() {
    var data = {
      userName: GlobalConstants.userName,
      room: GlobalConstants.room
    }
    this.webSocketService.leaveRoom(data);
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  displayUser() {
    this.displayUsers = true;
  }
}
