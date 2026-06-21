
//Create a Context
//Put Some state in context
//share created context with other components

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = signal(false);
  username = signal('');
  login(username:string) {
    this.username.set(username)
    this.isAuthenticated.set(true);
  }

  logout() {
    this.username.set('');
    this.isAuthenticated.set(false);
  }
}