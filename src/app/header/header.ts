import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports:[RouterLink],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private http: HttpClient){}

  currentMonth = new Date().toLocaleString('default', { month: 'long' });
  currentYear = new Date().getFullYear();

  onLogout(){
    this.http.post('http://localhost:8080/logout',{}, {
      withCredentials: false
    }).subscribe({
      next: () => {
        console.log('Logged out successfully');
      }
    })

  }
}