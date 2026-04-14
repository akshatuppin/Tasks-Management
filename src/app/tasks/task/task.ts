import { Component,inject, Input} from '@angular/core';

import { type TaskDetails } from './task.model';
import { Card } from "../../shared/card/cards"; // type defines the type of Task is 
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({required : true}) task !: TaskDetails;
  private taskService = inject(TaskService);

  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }
}
