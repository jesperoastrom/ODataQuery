import { DefaultPredicateParser } from '../DefaultPredicateParser';
import { IExpression } from '../IExpression';

describe('DefaultPredicateParser', () => {
    let parser = new DefaultPredicateParser();

    it('can parse simple field', () => {
        let predicate = parser.parsePredicate(item => item.name);
        expect(predicate).toBeDefined();
        expect(predicate.parameterName).toBe('item');
        expect(predicate.statement).toBe('item.name');
        expect(predicate.formattedStatement).toBe('name');
    });

    it('can parse nested property', () => {
        let predicate = parser.parsePredicate(item => item.foo.bar);
        expect(predicate).toBeDefined();
        expect(predicate.parameterName).toBe('item');
        expect(predicate.statement).toBe('item.foo.bar');
        expect(predicate.formattedStatement).toBe('foo/bar');
    });

    it('throws when statement is assignment', () => {
        expect(() => parser.parsePredicate(item => item.name = 'foo')).toThrowError();
    });
});