import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component {
  @Output() updatedataevent = new EventEmitter<string>();             

}
