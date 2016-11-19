import { DefaultExpressionParser } from '../DefaultExpressionParser';
import { IQueryExpression } from '../IQueryExpression';

describe('DefaultExpressionParser', () => {
    let parser = new DefaultExpressionParser();

    it('can parse simple field', () => {
        let expression = parser.parseExpression(item => item.name);
        expect(expression).toBeDefined();
        expect(expression.parameterName).toBe('item');
        expect(expression.statement).toBe('item.name');
        expect(expression.formattedStatement).toBe('name');
    });

    it('can parse nested property', () => {
        let expression = parser.parseExpression(item => item.foo.bar);
        expect(expression).toBeDefined();
        expect(expression.parameterName).toBe('item');
        expect(expression.statement).toBe('item.foo.bar');
        expect(expression.formattedStatement).toBe('foo/bar');
    });

    it('throws when statement is assignment', () => {
        expect(() => parser.parseExpression(item => item.name = 'foo')).toThrowError();
    });
});