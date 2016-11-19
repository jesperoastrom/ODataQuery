import { IQueryExpression } from '../parsing/IQueryExpression';
import { IOption } from './IOption';

export class OrderByOption implements IOption {
    constructor(private _expression: IQueryExpression) {
    }

    getQuery(): string {
        return `orderby=${this._expression.formattedStatement}`;
    }
}