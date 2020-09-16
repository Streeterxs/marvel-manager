import { TestBed } from '@angular/core/testing';

import { CharactersHttpService } from './characters-http.service';

describe('CharactersHttpService', () => {
  let service: CharactersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
