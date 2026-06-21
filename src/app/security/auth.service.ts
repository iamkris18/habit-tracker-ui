
//Create a Context
//share created context with other components

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated = signal(false);
  public username = signal('');
  login(username:string, password:string) {
    this.username.set(username)
    this.isAuthenticated.set(true);
    
    const hardcodedUsername = 'krishna';
    const hardCodedpassword = '123';
    if(password === hardCodedpassword){ 
      this.isAuthenticated.set(true);
      this.username.set(username);
      return true;
      // this.errorMessage = true;
      // this.route.navigate([`/habit-tracker/${this.username}`]);
    }else{
        this.isAuthenticated.set(false);
        this.username.set('');
        return false;
    }
  
  }

  logout() {
    this.isAuthenticated.set(false);
    this.username.set('');
  }
}