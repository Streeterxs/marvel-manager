import { TestBed } from '@angular/core/testing';

import { CharactersFacadeService } from './characters-facade.service';

describe('CharactersFacadeService', () => {
  let service: CharactersFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
