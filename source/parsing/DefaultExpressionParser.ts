import { IQueryExpression } from './IQueryExpression';
import { IExpressionParser } from './IExpressionParser';

export class DefaultExpressionParser implements IExpressionParser {
    parseExpression(expression: (item: any) => void): IQueryExpression {
        const matchExpression: RegExp = /^\s*function\s*\((\w*)\)\s*{\s*return\s?([^=\s,]*);\s*}\s*$/g;
        let actionString = expression.toString();
        console.log(actionString);
        let match = matchExpression.exec(actionString);
        if (match && match.length === 3) {
            return {
                parameterName: match[1],
                statement: match[2]
            };
        }
        throw new Error(`Unable to understand expression: ${actionString}`);
    }
}