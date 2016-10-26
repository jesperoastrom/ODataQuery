export class ODataQuery<T> {
    top(n: number) {

    }
    orderBy(expression: (item: T) => void) {

    }

    orderByDesc(...fields: string[]) {
    }

    private parseExpression(expression: (item: T) => void): QueryExpression {
        const matchExpression: RegExp = /^\s*function\s*\((\w*)\)\s*{\s*return\s?(.*);\s*}\s*$/g;
        let actionString = expression.toString();
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

interface QueryExpression {
    parameterName: string;
    statement: string;
}