import { IExpression } from './IExpression';

export interface IPredicateParser {
    parsePredicate(predicate: (item: any) => void): IExpression
}