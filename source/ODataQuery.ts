import { OrderByOption } from './options/OrderByOption';
import { IOption } from './options/IOption';
import { DefaultExpressionParser } from './parsing/DefaultExpressionParser';
import { IExpressionParser } from './parsing/IExpressionParser';

export class ODataQuery<T> {

    private _options: IOption[] = [];

    constructor(private _expressionParser: IExpressionParser = new DefaultExpressionParser) {
    }

    // top(n: number) {
    // }

    orderBy(expression: (item: T) => void): ODataQuery<T> {
        let queryExpression = this._expressionParser.parseExpression(expression);
        this._options.push(new OrderByOption(queryExpression));
        return this;
    }

    // orderByDesc(...fields: string[]) {
    // }

    toString(): string {
        if (this._options.length > 0) {
            return "$" + this.buildOptions();
        }
        return "";
    }

    private buildOptions(): string {
        let s = "";
        for(let i = 0; i < this._options.length; i++) {
            let option = this._options[i];
            s += option.getQuery();
        }
        return s;
    }
}