import {add} from './math';

describe('Math functions',()=>{
    it('should add two numbers',()=>{
        const result = add(2,3);
        expect(result).to.equal(5);
    })
})