import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ICharacter } from '../../../shared/models/character/character';

export type CharacterByIdentifierCallback = (character: ICharacter, index: number) => void;

@Injectable({
  providedIn: 'root'
})
export class CharacterStoreService {

  private _characters: BehaviorSubject<ICharacter[]> = new BehaviorSubject(null);
  characters$ = this._characters.asObservable();

  constructor() { }

  get characters(): ICharacter[] {
    return this._characters.value;
  }

  set characters(newCharacterList: ICharacter[]) {
    this._characters.next(newCharacterList);
  }

  addNewCharacter(character: ICharacter, index?: number): void {

    if (index) {
      this.characters.splice(index, 0, character);
      this.characters = this.characters;

      return;
    }

    this._characters.next(this.characters.concat(character));
  }

  characterByIdentifier(id: number, callback?: CharacterByIdentifierCallback): ICharacter {

    const index = this.characters.findIndex(character => character.id === id);

    if (index !== -1) {
      if (callback) { callback(this.characters[index], index); }

      return this.characters[index];
    }
  }

  updateCharacter(character: ICharacter): void {

    this.characterByIdentifier(character.id, (characterFinded, index) => {
      characterFinded = character;
      this.characters = this.characters;
    });
  }

  removeCharacter(id: number): void {

    this.characterByIdentifier(id, (characterFinded, index) => {
      this.characters.splice(index, 1);
      this.characters = this.characters;
    });
  }

  removeFirstCharacter(): void {

    this.characters.splice(0, 1);
    this.characters = this.characters;
  }

  removeLastCharacter(): void {

    this.characters.splice(this.characters.length - 1, 1);
    this.characters = this.characters;
  }
}
