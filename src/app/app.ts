import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header";
import { DUMMY_USERS } from './dummy-user';
import { UserComponent } from './user/user';
import { TasksComponent } from './tasks/tasks';
import {  TaskComponent } from "./tasks/task/task";


// import { NgForOf } from "../../node_modules/@angular/common/types/_common_module-chunk";
// import { NgFor, NgIf} from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
    users = DUMMY_USERS;
    selectedUserId ?: string  ;
    
    get selectedUser(){
      return this.users.find( (user) => this.selectedUserId === user.id)!;
    }
    
    onSelectedUser(id : string){
        this.selectedUserId = id ;
    }
    
}