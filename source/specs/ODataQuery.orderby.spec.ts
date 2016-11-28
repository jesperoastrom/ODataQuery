import { ODataQuery } from '../ODataQuery';
import { Person } from './ODataQuery.models.spec';

describe('ODataQuery', () => {
    let query: ODataQuery<Person>;

    beforeEach(() => {
        query = new ODataQuery<Person>();
    });

    it('can order by simple property', () => {
        expect(query
            .orderBy(person => person.name)
            .toString())
            .toBe('$orderby=name');
    });

    it('can order by complex property', () => {
        expect(query
            .orderBy(person => person.mother.name)
            .toString())
            .toBe('$orderby=mother/name');
    });

    it('can order by multiple properties', () => {
        expect(query
            .orderBy(person => person.name)
            .orderByDesc(person => person.father.name)
            .orderBy(person => person.age)
            .toString())
            .toBe('$orderby=name,father/name desc,age');
    });
});