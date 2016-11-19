import { ODataQuery } from '../ODataQuery';

describe('ODataQuery', () => {
    let query = new ODataQuery<MyModel>();

    it('should fail', () => {
    });
});

class MyModel {
    name: string;
    age: number;
}