export interface Habit {
  name: string;
  days: boolean[];
}

export interface SavedHabit {
  name: string;
  completedDays: number[];
}


export const Months: string[] =[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];