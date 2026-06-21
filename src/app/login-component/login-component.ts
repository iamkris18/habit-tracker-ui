import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../security/auth.service';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent{
  constructor(private authService: AuthService){}
  username='';
  password='';
  errorMessage:boolean=false;

  private route = inject(Router);

  ngOnInIt(){
    console.log(this.authService);
  }

  login(){
    const hardcodedUsername = 'krishna';
    const hardCodedpassword = 'Test@123';
    if(
      this.password === hardCodedpassword
    ){ 
      this.authService.login(this.username);
      this.errorMessage = true;
      this.route.navigate([`/habit-tracker/${this.username}`]);
    }else{
      this.authService.logout;
      this.errorMessage = true;
    }
  }
}
