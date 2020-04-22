import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/Message';
import { GlobalConstants } from '../message-entry-field/GlobalConstants';

@Component({
  selector: 'app-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.css'],
  inputs: ['message']
})
export class ChatBubbleComponent implements OnInit {
  isOwner = false;
  @Input() message: Message;
  constructor() { }

  ngOnInit(): void {
  }
  checkIfOwner()
  {
    if(GlobalConstants.userName == this.message.userName) return true;
    return false;
  }
}
