import { ODataQuery } from '../ODataQuery';

describe('ODataQuery', () => {
    let query = new ODataQuery<MyModel>();
    query.orderBy(item => item.name);
    
    it('should fail', () => {
        expect(true).toBe(false);
    });
});

class MyModel {
    name: string;
    age: number;
}