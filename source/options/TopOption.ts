import { IOption } from './IOption';

export class TopOption implements IOption {

    constructor(private _n: number){

    }

    getQuery(): string {
        return `top=${this._n}`;
    }
}