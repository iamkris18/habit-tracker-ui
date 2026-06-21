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
    console.log('login auth',this.authService.isAuthenticated())
  }

  currentMonth = new Date().toLocaleString('default', { month: 'long' });
  currentYear = new Date().getFullYear();

  onLogout(){
    this.authService.isAuthenticated.set(false);
    this.authService.username.set('');
    this.router.navigate(['/login']);
    console.log( this.authService.isAuthenticated());
    // this.http.post('http://localhost:8080/logout',{}, {
    //   withCredentials: false
    // }).subscribe({
    //   next: () => {
    //     console.log('Logged out successfully');
    //   }
    // })

  }
}