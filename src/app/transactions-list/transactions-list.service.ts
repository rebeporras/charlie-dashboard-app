import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";

export type Transaction = {
  name: string;
  date: Date,
  amount: number;
  icon: 'Person' | 'Entertainment' | 'EatingOut';
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private getRandomTimeOfDay(date: Date): Date {
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);
    const randomSecond = Math.floor(Math.random() * 60);
    const newDate = new Date(date);
    newDate.setHours(randomHour, randomMinute, randomSecond);
    return newDate;
  }

  private transactionMock: Transaction[] = [{
    name: 'Netflix',
    date: new Date(),
    amount: -5.00,
    icon: 'Entertainment'
  }, {
    name: 'Amazon',
    date: new Date(),
    amount: -42.99,
    icon: 'Entertainment'
  }, {
    name: 'Starbucks',
    date: this.getRandomTimeOfDay(new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30)))),
    amount: -3.50,
    icon: 'EatingOut'
  }, {
    name: 'Emily Smith',
    date: this.getRandomTimeOfDay(new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30)))),
    amount: 75.50,
    icon: 'Person'
  }, {
    name: 'David Johnson',
    date: this.getRandomTimeOfDay(new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30)))),
    amount: 200.00,
    icon: 'Person'
  }, {
    name: 'Sophia Brown',
    date: this.getRandomTimeOfDay(new Date(new Date().setDate(new Date().getDate() - Math.floor(Math.random() * 30)))),
    amount: 50.25,
    icon: 'Person'
  }];
  
  getTransactions(): Observable<Transaction[]> {
    return of(this.transactionMock).pipe(
      map(trans => trans.sort((a,b) => b.date.getTime() - a.date.getTime()))
    );
  }
}