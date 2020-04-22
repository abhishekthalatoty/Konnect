import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebSocketService]
})
export class AppComponent {
  title = 'Konnect';


  constructor(private webSocketService: WebSocketService) {

  }



  leave() {
    // this.webSocketService.leave
  }




}
