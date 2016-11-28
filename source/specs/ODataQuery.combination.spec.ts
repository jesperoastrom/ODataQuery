import { ODataQuery } from '../ODataQuery';
import { Person } from './ODataQuery.models.spec';

describe('ODataQuery', () => {

    it('can combine top and orderby', () => {
        let query = new ODataQuery<Person>()
            .orderBy(p => p.name)
            .orderBy(p => p.age)
            .top(5).toString();

        expect(query).toBe('$orderby=name,age&top=5');
    });

    it('can combine skip, top and orderby', () => {
        let query = new ODataQuery<Person>()
            .orderBy(p => p.name)
            .orderBy(p => p.age)
            .skip(5)
            .top(10).toString();

        expect(query).toBe('$orderby=name,age&skip=5&top=10');
    });
});