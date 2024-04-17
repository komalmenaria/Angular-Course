import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

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
