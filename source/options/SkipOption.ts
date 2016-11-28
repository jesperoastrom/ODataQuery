import { IOption } from './IOption';

export class SkipOption implements IOption {

    constructor(private _n: number){

    }

    getQuery(): string {
        return `skip=${this._n}`;
    }
}