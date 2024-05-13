import { TestBed } from '@angular/core/testing';

import { CardViewerService } from './card-viewer.service';

describe('CardViewerService', () => {
  let service: CardViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
