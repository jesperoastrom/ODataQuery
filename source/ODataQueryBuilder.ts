
export class ODataQueryBuilder<T> {
    top(n: number) {

    }
    orderBy(action: (item: T) => void) {
        console.log(action.toString());    
    }

    orderByDesc(...fields: string[]) {
    }
}

(function test() {
    console.log(1);
})();
