import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable, Subscriber, observable } from 'rxjs';
import { Message } from './models/Message';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {


  // readonly uri: string = "https://konnectserver.herokuapp.com/";
  readonly uri: string = "http://localhost:3000";

  socket: any;

  constructor() {
    this.socket = io(this.uri);
  }



  newUser(data: any) {
    this.emit('join', data);
  }



  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }


  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }



  welcomeNewUser() {
    return new Observable<Message>(observer => {
      this.socket.on('welcome user', (data) => {
        observer.next(data);
      });
    });
  }

  sendOffUser() {
    return new Observable<Message>(observer => {
      this.socket.on('disconnect user', (data) => {
        observer.next(data);
      });
    });
  }


  onlineUserList() {
    return new Observable<any>(observer => {
      this.socket.on('online user updated', (data) => {
        observer.next(data);
      });
    });
  }



  leaveRoom(data) {
    this.emit('leave', data);
  }


  newMessage() {
    let observable = new Observable<Message>(observer => {
      this.socket.on('new message', (data) => {
        console.log(data, "ghsee");
        observer.next(data);
      })
      return () => { console.log("error"); }
    });
    return observable;
  }


  sendMessage(data: any) {
    this.emit('send message', data);
  }


}
