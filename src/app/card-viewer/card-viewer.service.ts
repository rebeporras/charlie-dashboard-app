import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

export type Card = {
  number: string;
  provider: 'AmericanExpress' | 'MasterCard' | 'Visa';
  balance: number;
  currency: string;
  id: number;
};

@Injectable({
  providedIn: 'root'
})
export class CardViewerService {

  private cardsMock: Card[] = [{
    number: '1234',
    provider: 'MasterCard',
    balance: 542.25,
    currency: 'dollar',
    id: 1
  }, {
    number: '5678',
    provider: 'Visa',
    balance: 1300,
    currency: 'dollar',
    id: 2
  }, {
    number: '9012',
    provider: 'MasterCard',
    balance: 0,
    currency: 'dollar',
    id: 3
  }, {
    number: '3456',
    provider: 'AmericanExpress',
    balance: 273,
    currency: 'dollar',
    id: 4
  }];

  constructor() { }

  getCards(): Observable<Card[]> {
    return of(this.cardsMock).pipe(
   // TODO   catchError(() => )
    );
  }
}