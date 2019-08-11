/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

describe('pow', () => {

    it('POWered 3^^3 to 27', () => {
        chai.assert.equal(__my_pow(3, 3), 27);
    });
    it('POWered -2^^3 to -8', () => {
        chai.assert.equal(__my_pow(-2, 3), -8);
    });
    it('POWered 3^^2 to 9', () => {
        chai.assert.equal(__my_pow(3, 2), 9);
    });
    it('POWered -2^^2 to 4', () => {
        chai.assert.equal(__my_pow(-2, 2), 4);
    });
    it('POWered -2^^-2 to Nan', () => {
        chai.assert.isNaN(__my_pow(-2, -2));
    });
    it('POWered \'xxwdc\'^^\'xxwdc\' to Nan', () => {
        chai.assert.isNaN(__my_pow('xxwdc', 'xxwdc'));
    });
    it('POWered 4^^\'xxwdc\' to Nan', () => {
        chai.assert.isNaN(__my_pow(4, 'xxwdc'));
    });
});