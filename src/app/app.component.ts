import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestComponent} from './test/test.component'
import { FormComponent } from './form/form.component';


// This is decorator :- meta data
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet  ,FormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Komal';
}
