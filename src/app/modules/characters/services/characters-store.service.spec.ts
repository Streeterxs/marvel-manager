import { TestBed } from '@angular/core/testing';

import { CharactersStoreService } from './characters-store.service';

describe('CharactersStoreService', () => {
  let service: CharactersStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
