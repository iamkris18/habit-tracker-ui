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

  login(){
    if(this.authService.login(this.username,this.password)){
      this.errorMessage = true;
      this.route.navigate([`/habit-tracker/${this.username}`]);
    }else{
      this.errorMessage = true;
    }
  }
}
