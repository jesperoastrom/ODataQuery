import { IExpressionParser } from './IExpressionParser';
import { IQueryExpression } from './IQueryExpression';

export class DefaultExpressionParser implements IExpressionParser {
    parseExpression(expression: (item: any) => void): IQueryExpression {
        const matchExpression: RegExp = /^\s*function\s*\((\w*)\)\s*{\s*return\s?([^=\s,]*);\s*}\s*$/g;
        let actionString = expression.toString();
        let match = matchExpression.exec(actionString);
        if (match && match.length === 3) {
            return {
                parameterName: match[1],
                statement: match[2],
                formattedStatement: this.formatStatement(match[1], match[2]),
            };
        }
        throw new Error(`Unable to understand expression: ${actionString}`);
    }

    private formatStatement(parameterName: string, statement: string): string {
        let formattedParameter = statement
            .replace(`${parameterName}.`, '')
            .replace('.', '/');
        return formattedParameter;
    }
}