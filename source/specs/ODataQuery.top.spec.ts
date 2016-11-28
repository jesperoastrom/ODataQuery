import { ODataQuery } from '../ODataQuery';
import { Person } from './ODataQuery.models.spec';

describe('ODataQuery', () => {
    let query: ODataQuery<Person>;

    beforeEach(() => {
        query = new ODataQuery<Person>();
    });

    it('can select top', () => {
        expect(query.top(5).toString()).toBe('$top=5');
    });
});