import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  // @Input() parentData: any;
  @Input('parentData' ) namefromparent : any;
  @Output() public childEvent =  new EventEmitter();
  

  fireEvent(){
    this.childEvent.emit('HEY code evaluation.')
  }
  displayName = false;
  public name = "";
  // color = "green";
  public colors = ["green" , "blue","black","green"]
  handleInputChange(event : Event){

  }

  logMessage(value : any){
console.log( "Welcome " + value.value)
  }

  ngOnInit() {
      
  }
}
