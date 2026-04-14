import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { NewTaskComponents } from "./new-task/new-task";
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponents, ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {

  @Input({required:true}) userId !: string ;

  @Input({required : true }) name !: string ;

  isAddingTask = false ;
  // private taskService = new TaskService();

  constructor(private taskService: TaskService){}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }
  
  onStartAddTask(){
      this.isAddingTask = true ;
  }

  onCloseAddTask(){
    this.isAddingTask = false ;
  }
}
