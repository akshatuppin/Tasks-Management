import { Component, computed, EventEmitter, Input , input, Output, output  } from '@angular/core';

import { type User } from './user.model';
import { Card } from "../shared/card/cards";

// type User =  {
//     id: string ;
//     avatar : string ;
//     name : string ;
//   }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {

  // @Input({required:true}) id !: string;
  // // This is decorator Input Signal. 
  // @Input({required:true}) avatar !: string;
  // @Input({required:true}) name !: string;


  @Input({required : true}) user !:User;
  @Input({required : true}) selected !: boolean;

  @Output() select = new EventEmitter<string>(); // custom output event , this is called output decorator. The string in the "<>" this bracket is used for type safety.
  // select = output<string>();  output function 

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
