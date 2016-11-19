import { IQueryExpression } from './IQueryExpression';

export interface IExpressionParser {
    parseExpression(expression: (item: any) => void): IQueryExpression
}