import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { HabitTracker } from './habit-tracker/habit-tracker';
import { LoginComponent } from './dashboard/login-component/login-component';
import { WelcomeComponent } from './welcome-component/welcome-component';
import { Footer } from './footer-component/footer-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('habit-tracker-ui');

}