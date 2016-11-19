import { OrderByOption } from './options/OrderByOption';
import { DefaultPredicateParser } from './parsing/DefaultPredicateParser';
import { IPredicateParser } from './parsing/IPredicateParser';

export class ODataQuery<T> {

    private _orderBy: OrderByOption;

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

    toString(): string {
        if (this._orderBy) {
            return "$" + this._orderBy.getQuery();
        }
        return "";
    }

    // private buildOptions(): string {
    //     let s = "";
    //     for(let i = 0; i < this._options.length; i++) {
    //         let option = this._options[i];
    //         s += option.getQuery();
    //     }
    //     return s;
    // }
}