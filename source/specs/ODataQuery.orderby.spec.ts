import { ODataQuery } from '../ODataQuery';
import { Person } from './ODataQuery.models.spec';

describe('ODataQuery', () => {
    it('can order by simple property', () => {
        let query = new ODataQuery<Person>()
            .orderBy(person => person.name)
            .toString();

        expect(query).toBe('$orderby=name');
    });

    it('can order by complex property', () => {
        let query = new ODataQuery<Person>()
            .orderBy(person => person.mother.name)
            .toString();

        expect(query).toBe('$orderby=mother/name');
    });

    it('can order by multiple properties', () => {
        let query = new ODataQuery<Person>()
            .orderBy(person => person.name)
            .orderByDesc(person => person.father.name)
            .orderBy(person => person.age)
            .toString();

        expect(query).toBe('$orderby=name,father/name desc,age');
    });
});