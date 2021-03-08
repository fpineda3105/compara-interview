import { expect } from 'chai';
import { describe } from 'mocha';
import { add } from '../src';

describe('Just one test', () => {
    it('add 1 + 2 = 3', () => {
        expect(add(1, 2)).equal(3);
    })
})