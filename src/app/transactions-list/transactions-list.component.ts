import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionService } from './transactions-list.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.scss'
})
export class TransactionsListComponent implements OnInit {
  transactions$!: Observable<Transaction[]>;
  showSearchInput = false;
  showSearchIcon = true;
  value = '';
  private previousDate = '';
  
  constructor(private transactionService$: TransactionService) { }

  ngOnInit(): void {
    this.transactions$ = this.transactionService$.getTransactions();
  }

  toggleSearch(): void {
    this.showSearchInput = !this.showSearchInput;
    this.showSearchIcon = !this.showSearchIcon;
  }

  search(searchText: string): void {
    console.log('Search text: ', searchText);
  }

  compareDates(transactionDate: Date): boolean {
    const currentDate = transactionDate.toISOString().split('T')[0];
    const datesChange = this.previousDate !== currentDate;
    this.previousDate = datesChange ? currentDate : this.previousDate;
    
    return datesChange;
  }

  getUIDate(transactionDate: Date): string {
    const date = new Date();
    const today = (date).toISOString().split('T')[0];
    const yesterday = new Date(date.setDate(date.getDate() - 1)).toISOString().split('T')[0];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${this.previousDate === today ? 'Today' : this.previousDate === yesterday ? 'Yesterday' : `${months[transactionDate.getMonth()]}, ${transactionDate.getDate()}`}`
  }
}
