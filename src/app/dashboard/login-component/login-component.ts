import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  username='';
  password='';
  errorMessage:boolean=false;

  private route = inject(Router);

  login(){
    const hardcodedUsername = 'krishna';
    const hardCodedpassword = 'Test@123';
    if(
      this.password === hardCodedpassword
    ){ 
      this.errorMessage = true;
      this.route.navigate([`/habit-tracker/${this.username}`]);
    }else{
      this.errorMessage = true;
    }
  }
}
