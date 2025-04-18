import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment';
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  Confirmpassword: string = "";

  show() {
    alert(`First Name = ${this.firstname} Last Name = ${this.lastname} Email = ${this.email} Password = ${this.password} Confirm Password = ${this.Confirmpassword}`);
  }
}
