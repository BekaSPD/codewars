const { assert, config } = require('chai');

config.truncateThreshold = 0;

describe("Tests", () => {
    it("Basic Tests",() =>{
        assert.sameOrderedMembers(findMultiples(5, 25), [5, 10, 15, 20, 25])
        assert.sameOrderedMembers(findMultiples(1, 2), [1, 2])
        assert.sameOrderedMembers(findMultiples(5, 7), [5])
        assert.sameOrderedMembers(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
        assert.sameOrderedMembers(findMultiples(11, 54), [11, 22, 33, 44])
    });

    it("Random Tests",() =>{

        const randint=(a,b)=>~~(Math.random()*(b-a+1)+a);
        const sol=(n,l)=>Array.from({length:~~(l/n)},(a,i)=>i*n+n);

        for (let i=0;i<40;i++){
            const n = randint(1,20);
            const l = n * randint(1,100) + randint(1, n);
            assert.sameOrderedMembers(findMultiples(n,l),sol(n,l), `Testing for integer=${n} and limit=${l}`);
        }
    });
});