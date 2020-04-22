import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MessageEntryFieldComponent } from './message-entry-field/message-entry-field.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import { WebSocketService } from './web-socket.service';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChatroomComponent,
    SideBarComponent,
    MessageEntryFieldComponent,
    ChatBubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent],
})
export class AppModule { }
