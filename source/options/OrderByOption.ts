import { IExpression } from '../parsing/IExpression';
import { IOption } from './IOption';

export class OrderByOption implements IOption {
    private _expressions: IOrderByExpression[] = [];

    constructor() {
    }

    addExpression(expression: IExpression, ascending: boolean) {
        this._expressions.push({
            innerExpression: expression,
            ascending: ascending
        });
    }

    getQuery(): string {
        let orderby = this.getOrderby();
        return `orderby=${orderby}`;
    }

    private getOrderby(): string {
        let s = "";
        for(let i = 0; i < this._expressions.length; i++) {
            let expression = this._expressions[i];
            if(expression.ascending) {
                s += i > 0
                    ? `,${expression.innerExpression.formattedStatement}`
                    : expression.innerExpression.formattedStatement;
            }
            else {
                s += i > 0
                    ? `,${expression.innerExpression.formattedStatement} desc`
                    : `${expression.innerExpression.formattedStatement} desc`;
            }
        }
        return s;
    }
}

interface IOrderByExpression {
    innerExpression: IExpression;
    ascending: boolean;
}