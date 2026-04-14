import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponents {

  @Input({required: true}) userId !: string ;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();  //here its an object output 

  enteredTitle = '';
  enteredSummary= '';
  enteredDate= '';


  private taskService= inject(TaskService)

  onCancle(){
     this.close.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title: this.enteredTitle,
      summary : this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    this.close.emit();
  }
}
