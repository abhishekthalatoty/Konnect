import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

const routes: Routes = [
  { path: 'chatroom', component: ChatroomComponent },
  { path: 'home', component: LoginPageComponent },
  {
    path:'',
    component:LoginPageComponent
  }
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
