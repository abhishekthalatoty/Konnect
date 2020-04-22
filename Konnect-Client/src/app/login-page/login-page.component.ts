import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { ChatroomComponent } from '../chatroom/chatroom.component';
import { GlobalConstants } from '../message-entry-field/GlobalConstants';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [WebSocketService]
})
export class LoginPageComponent implements OnInit {

  userName: string;
  constructor(private webSocketService: WebSocketService) { }
  ngOnInit(): void {
  }
  selectedRoom = '';
  data: Array<Object> = [
    { id: 0, name: "Music" },
    { id: 1, name: "Dance" },
    { id: 2, name: "Movies" },
    { id: 3, name: "Litreture" }
  ];
  join() {
    GlobalConstants.userName = this.userName;
    GlobalConstants.room = this.selectedRoom['name'];
    // console.log(this.userName, this.room);
  }
  selected() {
    console.log("selected room " + this.selectedRoom['name']);
  }
}
