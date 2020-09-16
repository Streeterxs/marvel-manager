import { ICharacter } from './character';

export interface ICharacterDataWrapper {
    offset: number;
    limit: number;
    total: number;
    count: number;
    result: ICharacter[];
}
