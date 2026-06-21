import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router, RouterLink } from '@angular/router';
import { AuthService } from '../security/auth.service';
@Component({
  selector: 'app-header',
  imports:[RouterLink],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private http: HttpClient,
    public authService:AuthService,
    private router: Router
  ){
    // console.log('login auth',this.authService.isAuthenticated())
  }

  currentMonth = new Date().toLocaleString('default', { month: 'long' });
  currentYear = new Date().getFullYear();

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/logout']);
        console.log('logout auth',this.authService.isAuthenticated())

  }
}