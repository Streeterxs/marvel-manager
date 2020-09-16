import { Component, OnInit } from '@angular/core';
import { CharactersFacadeService } from '../services/characters-facade.service';
import { ICharacter } from 'src/app/shared/models/character/character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  characters: ICharacter[];

  constructor(private _characterService: CharactersFacadeService) { }

  ngOnInit(): void {

    this._characterService.characters$.subscribe(chars => {
      this.characters = chars;
      console.log('this.characters: ', this.characters);
    });
  }

}
