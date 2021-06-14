import { Calculator } from "./calculator";

describe('Calc', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('should return correct sum of two number', () => {

        expect(calc).toBeInstanceOf(Calculator);

        expect(calc.Add(2,2)).toEqual(4);

    });



    it('should return correct sub of two number', () => {

        expect(calc).toBeInstanceOf(Calculator);

        expect(calc.Substract(6,2)).toEqual(4);

    });



    it('should return correct multiply of two number', () => {

        expect(calc).toBeInstanceOf(Calculator);

        expect(calc.Multiply(3,2)).toEqual(6);

    });



    it('should return correct divide of two number', () => {

        expect(calc).toBeInstanceOf(Calculator);

        expect(calc.Divide(6,2)).toEqual(3);
        expect(calc.Divide(8,2)).toEqual(4);

    });
    it('should return correct sub of three numbers', () => {

        expect(calc).toBeInstanceOf(Calculator);

        expect(calc.Add3(6,2,3)).toEqual(11);

    });


});