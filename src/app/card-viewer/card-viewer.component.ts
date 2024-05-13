import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from './card-viewer.service';
import { CardViewerService } from './card-viewer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-viewer.component.html',
  styleUrl: './card-viewer.component.scss'
})
export class CardViewerComponent implements OnInit {
  @Output() selectedCard = new EventEmitter<number>();

  cards$!: Observable<Card[]>;
  selectedCardId!: number;

  constructor(private cardViewer$: CardViewerService) { }

  ngOnInit(): void {
    this.cards$ = this.cardViewer$.getCards();
  }

  selectCard(cardId: number): void {
    this.selectedCardId = cardId;
    this.selectedCard.emit(cardId);
  }
}
