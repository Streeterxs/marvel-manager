import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICharacter } from '../../../shared/models/character/character';
import { environment } from 'src/environments/environment';
import { ICharacterDataContainer } from 'src/app/shared/models/character/characterDataContainer';

@Injectable({
  providedIn: 'root'
})
export class CharactersHttpService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<ICharacter[]> {

    return this.http.get<ICharacterDataContainer>(
      `${environment.marvel_api}/${environment.marvel_api_versionv1}/public/characters`,
      {params: {apiKey: `${environment.marvel_api_key}`}}).pipe(map(charactersContainer => charactersContainer.data.result));
  }
}
