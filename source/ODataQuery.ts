import { DefaultExpressionParser } from './parsing/DefaultExpressionParser';
import { IExpressionParser } from './parsing/IExpressionParser';
import { IQueryExpression } from './parsing/IQueryExpression';

export class ODataQuery<T> {
    constructor(private _expressionParser: IExpressionParser = new DefaultExpressionParser) {
    }

    // top(n: number) {
    // }

    orderBy(expression: (item: T) => void) {
        let queryExpression = this._expressionParser.parseExpression(expression);
    }

    // orderByDesc(...fields: string[]) {
    // }
}