import { Component } from '@angular/core';
import { CardViewerComponent } from '../card-viewer/card-viewer.component';
import { TransactionsListComponent } from '../transactions-list/transactions-list.component';
import { ActionsMenuComponent } from '../actions-menu/actions-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardViewerComponent, ActionsMenuComponent, TransactionsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
