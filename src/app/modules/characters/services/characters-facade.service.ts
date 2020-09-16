import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CharacterStoreService } from './characters-store.service';
import { ICharacter } from '../../../shared/models/character/character';
import { CharactersHttpService } from './characters-http.service';

@Injectable({
  providedIn: 'root'
})
export class CharactersFacadeService {
  isFetching = false;

  constructor(
    private _characterStoreService: CharacterStoreService,
    private _characterHttpService: CharactersHttpService
  ) { }

  get characters(): ICharacter[] {
    if (!this._characterStoreService.characters) {
      this.fetchCharacters();
    }

    return this._characterStoreService.characters;
  }

  get characters$(): Observable<ICharacter[]> {
    if (!this._characterStoreService.characters) {
      this.fetchCharacters();
    }

    return this._characterStoreService.characters$;
  }

  fetchCharacters(): void {

    if (!this.isFetching) {

      this. isFetching = true;

      this._characterHttpService.getCharacters().pipe(debounceTime(500)).subscribe(

        characters => {
          this._characterStoreService.characters = characters;
        },

        err => {
          alert("Couldn't fetch characters");
          this.isFetching = false;
        },
        () => {
          this.isFetching = false;
        });

    }
  }
}
