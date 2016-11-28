import { ODataQuery } from '../ODataQuery';
import { Person } from './ODataQuery.models.spec';

describe('ODataQuery', () => {
    let query: ODataQuery<Person>;

    beforeEach(() => {
        query = new ODataQuery<Person>();
    });

    it('can skip', () => {
        expect(query.skip(5).toString()).toBe('$skip=5');
    });
});