import { ICharacterDataWrapper } from './characterDataWrapper';

export interface ICharacterDataContainer {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: ICharacterDataWrapper;
}
