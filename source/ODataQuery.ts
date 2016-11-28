import { OrderByOption } from './options/OrderByOption';
import { TopOption } from './options/TopOption';
import { DefaultPredicateParser } from './parsing/DefaultPredicateParser';
import { IPredicateParser } from './parsing/IPredicateParser';

export class ODataQuery<T> {

    private _orderBy: OrderByOption;
    private _top: TopOption;

    constructor(private _predicateParser: IPredicateParser = new DefaultPredicateParser) {
    }

    orderBy(predicate: (item: T) => void): ODataQuery<T> {
        let expression = this._predicateParser.parsePredicate(predicate);
        this._orderBy = this._orderBy || new OrderByOption();
        this._orderBy.addExpression(expression, true);
        return this;
    }

    orderByDesc(predicate: (item: T) => void): ODataQuery<T> {
        let expression = this._predicateParser.parsePredicate(predicate);
        this._orderBy = this._orderBy || new OrderByOption();
        this._orderBy.addExpression(expression, false);
        return this;
    }

    top(n: number): ODataQuery<T> {
        this._top = new TopOption(n);
        return this;
    }

    toString(): string {
        let queryParts: string[] = [];
        if (this._orderBy) {
            queryParts.push(this._orderBy.getQuery());
        }
        if (this._top) {
            queryParts.push(this._top.getQuery());
        }
        if(queryParts.length == 0) {
            return '';
        }
        return '$' + queryParts.join('&');
    }
}