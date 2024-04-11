import { Component } from '@angular/core';

@Component({
  // selector: 'app-test', 1st way
  // selector: '.app-test', 2nd way
  selector: '[app-test]', // 3rd way,
  standalone: true,
  imports: [],
 templateUrl: './test.component.html',  // bunch of html 
  // template: `
  // <div> hello
  // <h1> holla  </h1>
  
  // </div>` ,
   // inline template  
//  styleUrl: './test.component.css' // including style file
styles: [
  `
 .text-success{
  color:green;
 }

 .text-danger{
  color:red;
 }

 .text-special{
  font-style:italic;
 }
  
  `
]
})
export class TestComponent {


  public successClass = "text-success";
  public dangerClass = "text-success";
public name = "komal";
public myid = "testId";
public isDisabled = false;
public hasError = false;
public isSpecial = true;
public messageClasses = {
  "text-success" :  !this.hasError,
  "text-danger" : this.hasError,
  "text-special" : this.isSpecial
}
public highlightColor = "pink";
public mystyle = {
  color:"blue",
  fontStyle : "italic"
}
public siteUrl = window.location.href
greetUser(){
  return "hello " + this.name
}
public greeting = "";

// onClick(event : MouseEvent){ both will work
  onClick(event : any){
  console.log(event)
  this.greeting = event.type
}

public myname = "";

changeName(event: Event) {
  // Handle the change event here
  const inputElement = event.target as HTMLInputElement;
  const newValue = inputElement.value;
  this.myname =  inputElement.value;
  console.log('New value:', newValue);
}

}
