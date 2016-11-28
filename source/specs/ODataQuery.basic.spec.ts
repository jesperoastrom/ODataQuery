import { Person } from './ODataQuery.models.spec';
import { ODataQuery } from '../ODataQuery';

describe('ODataQuery', () => {
    it('can be empty', () => {
        let query = new ODataQuery<Person>()
            .toString()

        expect(query).toBe('');
    });
});