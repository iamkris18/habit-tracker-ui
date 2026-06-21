import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Habit,Months } from './Habit';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-habit-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './habit-tracker.html',
  styleUrl: './habit-tracker.css'
})
export class HabitTracker implements OnInit {

  constructor(private route: ActivatedRoute,public authService: AuthService) {}

  username = '';
  selectedMonth = '';

  months = Months;

  days = Array.from({ length: 31 }, (_, i) => i + 1);

  habits: Habit[] = this.createEmptyHabits();

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];

    console.log('================================');
    console.log('Habit Tracker Loaded');
    console.log('Username:', this.username);
    console.log('================================');

    // console.log('auth' , this.authService.isAuthenticated())
  }

  private createEmptyHabits(): Habit[] {
    return Array.from({ length: 10 }, () => ({
      name: '',
      days: Array(31).fill(false)
    }));
  }

  private getStorageKey(): string {
    return `habitTracker_${this.username}_${this.selectedMonth}`;
  }

  onMonthChange(): void {
    console.log('Selected Month:', this.selectedMonth);

    if (!this.selectedMonth) {
      this.habits = this.createEmptyHabits();
      return;
    }

    this.load();
  }

  save(): void {

    if (!this.selectedMonth) {
      alert('Please select a month');
      return;
    }

    const habitsToSave = this.habits
      .filter(h => h.name.trim() !== '')
      .map(h => ({
        name: h.name.trim(),
        completedDays: h.days
          .map((checked, index) => checked ? index + 1 : null)
          .filter(day => day !== null)
      }));

    const key = this.getStorageKey();

    console.log('================================');
    console.log('Saving Habit Data');
    console.log('Key:', key);
    console.log('Payload:', habitsToSave);
    console.log('================================');

    localStorage.setItem(
      key,
      JSON.stringify(habitsToSave)
    );

    console.log('Data Saved Successfully');
  }

  load(): void {

    if (!this.selectedMonth) {
      return;
    }

    const key = this.getStorageKey();

    console.log('================================');
    console.log('Loading Habit Data');
    console.log('Key:', key);
    console.log('================================');

    const data = localStorage.getItem(key);

    if (!data) {
      console.log('No data found for selected month');

      this.habits = this.createEmptyHabits();
      return;
    }

    const savedHabits = JSON.parse(data);

    console.log('Data Found:', savedHabits);

    this.habits = savedHabits.map((habit: any) => ({
      name: habit.name,
      days: Array.from(
        { length: 31 },
        (_, index) => habit.completedDays.includes(index + 1)
      )
    }));

    while (this.habits.length < 10) {
      this.habits.push({
        name: '',
        days: Array(31).fill(false)
      });
    }

    console.log('UI Habits Loaded:', this.habits);
  }

  getDayScore(dayIndex: number): number {
    return this.habits.filter(h => h.days[dayIndex]).length;
  }

  getTotalScore(): number {
    return this.habits.reduce((total, habit) => {
      return total + habit.days.filter(day => day).length;
    }, 0);
  }
}